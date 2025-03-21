import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Package, ShoppingCart } from "lucide-react"

export function DepositMedicialCard() {
  return (
    <div className="bg-white flex-col border-t-emerald-600 p-4 flex text-sm rounded-xl max-sm:p-4 max-sm:flex-col border-2">
      <img className="w-20 h-20 max-sm:w-24 max-sm:h-24" src="/medicial.png" />
      <div className=" flex-1 p-2 flex flex-col gap-3 rounded-xl max-sm:gap-2">
        <div className="flex flex-col gap-2">
          <strong className="text-emerald-600 font-normal">
            <span>11999,99</span> /Caixa
          </strong>
          <strong className="font-medium text-foreground">
            Paracetamol -{" "}
            <span className="font-normal text-neutral-500">34 Lâminas</span>
          </strong>
        </div>

        <div className="flex items-center gap-2">
          <Package className="text-emerald-600 h-4 w-4" />
          <span className="text-neutral-500 text-sm">
            25 Unidades Disponíveis
          </span>
        </div>

        <footer>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex bg-gradient-to-tr to-emerald-500 from-emerald-600">
                <ShoppingCart className="h-4 w-4" />
                <span className="font-bold text-sm">Encomendar</span>
              </Button>
            </DialogTrigger>
          </Dialog>
        </footer>
      </div>
    </div>
  )
}
