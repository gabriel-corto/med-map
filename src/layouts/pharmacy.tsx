import { PharmacyNavbar } from "@/components/pharmacy-ui/navbar"
import { LogOut } from "lucide-react"
import { Outlet } from "react-router-dom"

export function PharmacyLayout() {
  return (
    <div className="flex antialiased bg-neutral-50 h-screen gap-8 max-sm:gap-2 ">
      <aside className="flex flex-col justify-between w-fit max-sm:flex-row max-sm:left-0 max-sm:w-full bg-neutral-900 max-sm:h-fit max-sm:py-5 max-sm:px-8 max-sm:fixed max-sm:top-0 h-screen p-10">
        <header className="flex flex-col w-44 gap-20 max-sm:flex-row max-sm:gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-end gap-2">
              <img src="/logo-white-1.png" className="w-10" />
              <img src="/logo-white-2.png" className="max-sm:hidden" />
            </div>

            <span className="w-full  max-sm:hidden h-[1px] bg-neutral-700"></span>
          </div>

          <PharmacyNavbar />
        </header>

        <footer className="flex flex-col gap-6 font-lg">
          <div className="flex cursor-pointer items-center gap-2 text-rose-500 text-sm">
            <LogOut className="t w-5 h-5 max-sm:w-7 max-sm:h-7" />
            <span>Sair</span>
          </div>

          <div className="max-sm:hidden text-sm text-muted/60">
            Painel do Depósito &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </aside>

      <div className="p-6 w-full">
        <Outlet />
      </div>
    </div>
  )
}
