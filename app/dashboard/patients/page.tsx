import Filter from "@/app/ui/filter";
import {PatientsTableComponent} from "@/app/ui/patients/table";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <main className="w-full h-screen p-2 md:p-4 space-y-4 overflow-hidden">
      <div>
        <h3 className="text-sm font-bold">Pacientes</h3>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="text-sm p-2 bg-gray-100 w-full rounded-sm mt-2"
        />
        <div className="flex gap-3 mt-3 w-full justify-end">
          <Filter />
          <button className="flex gap-1 bg-teal-900 p-2 text-white text-sm rounded-md shadow-sm">
            <Plus className="size-5 text-gray-200"></Plus>
            <p>Novo paciente</p>
          </button>
        </div>
      </div>
      <PatientsTableComponent />
    </main>
  );
}
