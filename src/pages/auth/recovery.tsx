import { AtSign, Loader2, ArrowLeft, Mail } from "lucide-react"

import { Logo } from "@/components/general-ui/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Card, CardHeader } from "@/components/ui/card"

import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RecoveryData, recoveryScheme } from "@/schemas/recovery"
import { toast } from "sonner"

export function Recovery() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RecoveryData>({
    resolver: zodResolver(recoveryScheme),
  })

  async function handleSendRecoveryMail(data: RecoveryData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success(
        `Enviamos um email de recuperação de credencias para ${data.email}`
      )
    } catch {
      toast.error("Ops! Falha ao enviar.")
    }
  }

  return (
    <>
      <Helmet title="Email de Recuperação" />
      <Card className="w-[480px] h-[600px] p-12 max-lg:w-96 max-lg:px-6 max-lg:border-none max-lg:shadow-none">
        <CardHeader>
          <Logo />
          <div className="text-foreground font-normal">
            Recupere as suas credencias de acesso a plataforma
          </div>
        </CardHeader>
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleSendRecoveryMail)}
        >
          <div className="flex flex-col gap-2">
            <Label className="flex items-center text-foreground/60 ml-2 gap-1">
              <AtSign className="w-4 h-4" />
              <span>E-mail</span>
            </Label>
            <Input
              type="email"
              placeholder="e-mail cadastrado na plataforma"
              className="bg-neutral-50/50 h-12"
              {...register("email")}
            />
            <span className="text-rose-600 text-sm text-left ">
              {errors.email && errors.email.message}
            </span>
          </div>

          <div className="w-full">
            <Button
              className="w-full font-bold h-12 rounded-full bg-gradient-to-tr to-emerald-500 from-emerald-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Mail />
                  <span>Enviar</span>
                </>
              )}
            </Button>
          </div>

          <div className="text-left">
            <Link
              to="/autenticacao/entrar"
              className="text-emerald-600 text-sm flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Login
            </Link>
          </div>
        </form>
      </Card>
    </>
  )
}
