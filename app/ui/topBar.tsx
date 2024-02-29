import { Plus, Presentation } from "lucide-react";

export default function TopBar({title}:{title: string}) {
  return (
    <div className="flex justify-end md:justify-between items-center">
      <h3 className="text-sm font-bold hidden md:block">{title}</h3>
      <div className="flex gap-2">
        <button className="flex gap-1 bg-gray-100 p-2 text-gray-800 text-sm rounded-md shadow-sm">
          <Plus className="size-5 text-gray-400"></Plus>
          <p>Novo paciente</p>
        </button>
        <button className="flex gap-1 bg-teal-900 p-2 text-white text-sm rounded-md shadow-sm">
          <Presentation className="size-5" />
          <p>Quadro</p>
        </button>
      </div>
    </div>
  );
}
