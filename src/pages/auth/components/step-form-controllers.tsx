import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface StepFormControllersProps {
  stepForm: number
  onPrevious: () => void
  onNext: () => void
}
export function StepFormControllers({
  stepForm,
  onNext,
  onPrevious,
}: StepFormControllersProps) {
  return (
    <div className="flex justify-between gap-4 mt-4">
      {stepForm !== 1 && (
        <Button
          type="button"
          className="rounded-full"
          variant="secondary"
          onClick={onPrevious}
        >
          <ArrowLeft />
          <span>Voltar</span>
        </Button>
      )}

      {stepForm < 3 && (
        <Button
          type="button"
          className="rounded-full bg-gradient-to-tr to-emerald-500 from-emerald-600"
          onClick={onNext}
        >
          <ArrowRight />
          <span>Próximo</span>
        </Button>
      )}
    </div>
  )
}
