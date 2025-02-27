import { Thermometer, HandPlatter, CircleDashed } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function PharmacyNavbar() {
  return (
    <nav className="flex flex-col gap-10 font-light text-neutral-400 tracking-wide">
      <NavLink
        to="/pharmacy/medicinals"
        className="flex items-center gap-1 text-lg hover:text-neutral-200"
      >
        <Thermometer className="h-4 w-4" />
        <span>Medicamentos</span>
      </NavLink>
      <NavLink
        to="/pharmacy/deposits"
        className="flex items-center gap-1 text-lg hover:text-neutral-200"
      >
        <HandPlatter className="h-4 w-4" />
        <span>Depósitos</span>
      </NavLink>
      <NavLink
        to="/pharmacy/pendings"
        className="flex items-center gap-1 text-lg hover:text-neutral-200"
      >
        <CircleDashed className="h-4 w-4" />
        <span>Pendentes</span>
      </NavLink>
    </nav>
  );
}
