import { Plus } from "lucide-react";


export default function ScheduleComponet(){
    return(
      <div className="flex gap-1 justify-center items-center bg-teal-100 w-full h-16 rounded-md shadow-sm cursor-pointer">
        <p className="text-sm text-gray-500">Agendar nova consulta</p>
        <Plus className="size-5 text-gray-500" />
      </div>
    )
}