import { Lock, AtSign, LogIn, Loader2, Eye, EyeOff } from "lucide-react"

import { Logo } from "@/components/general-ui/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Card, CardHeader } from "@/components/ui/card"

import { Helmet } from "react-helmet-async"
import { Link, useNavigate, useSearchParams } from "react-router-dom"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInData, signInScheme } from "@/schemas/sign-in"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "@/api/sign-in"
import { useState } from "react"

export function SignIn() {
  const { mutateAsync: signInFn } = useMutation({
    mutationKey: ["signIn"],
    mutationFn: signIn,
  })

  const [params] = useSearchParams()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInScheme),
    defaultValues: {
      email: params.get("email") || "",
    },
  })

  async function handleSignIn(data: SignInData) {
    try {
      const response = await signInFn(data)

      if (response.role === "pharmacy") {
        navigate("/farmacia")
      } else if (response.role === "deposit") {
        navigate("/deposito")
      } else {
        toast.error("Entidade Não Encontrada!")
      }

      toast.success("Login realizado com Sucesso!")
    } catch (error) {
      toast.error(String(error.response.data.message))
    }
  }

  return (
    <>
      <Helmet title="Entrar" />
      <Card className="w-[480px] h-[600px] p-12 max-lg:w-96 max-lg:px-6 max-lg:border-none max-lg:shadow-none">
        <CardHeader>
          <Logo />
          <div className="font-normal">
            Ainda não possui uma conta?{" "}
            <Link to="/autenticacao/criar-conta" className="text-emerald-600">
              Crie uma
            </Link>
          </div>
        </CardHeader>

        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="flex flex-col gap-2 relative">
            <Label className="flex items-center text-foreground/60 ml-2 gap-1">
              <AtSign className="w-4 h-4" />
              <span>E-mail</span>
            </Label>
            <Input
              type="email"
              placeholder="seu@email.com"
              className="bg-neutral-50/50 h-12"
              {...register("email")}
            />

            <span className="text-rose-600 text-sm text-left ">
              {errors.email && errors.email.message}
            </span>
          </div>

          <div className="flex flex-col gap-2 relative">
            <Label className="flex items-center text-foreground/60 ml-2 gap-1">
              <Lock className="w-4 h-4" />
              <span>Palavra passe</span>
            </Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="*** *** ***"
              className="bg-neutral-50/50 h-12"
              {...register("password")}
            />

            <button
              type="button"
              title={showPassword ? "Esconder" : "Mostrar"}
              className="absolute right-3 top-14 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
            <span className="text-rose-600 text-sm text-left ">
              {errors.password && errors.password.message}
            </span>
          </div>

          <div className="text-left">
            <Link
              to="/autenticacao/recuperar-credencias"
              className="text-emerald-600 text-sm"
            >
              Esqueci minha senha
            </Link>
          </div>

          <div className="w-full">
            <Button
              className="w-full font-bold rounded-full bg-gradient-to-tr to-emerald-500 from-emerald-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Verificando credencias...</span>
                </>
              ) : (
                <>
                  <LogIn />
                  <span>Fazer Login</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </>
  )
}
