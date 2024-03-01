import { Clock8, MapPin, MoreVertical } from "lucide-react";
import { UserAvatares } from "../users-avatares";

export function ScheduleCard({name}:{name: string}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between bg-gray-100 px-5 py-12 rounded-md">
        <div>
          <p className="text-xs text-back font-bold">{name}</p>
          <div className="flex gap-4 items-center">
            <span className="flex gap-1">
              <Clock8 className="size-4 text-gray-500" />
              <p className="text-xs text-gray-500">09:00 - 09:30</p>
            </span>
            <span className="flex gap-1 items-center">
              <MapPin className="size-4 text-gray-500" />
              <p className="text-xs text-gray-500">Clínica Maria</p>
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <UserAvatares />
          <MoreVertical />
        </div>
      </div>
      <hr className="border border-dotted" />
    </div>
  );
}

export function ScheduleCards(){
  return(
    <div className="space-y-6">
          <ScheduleCard name="Em atendimento" />
          <ScheduleCard name="Em espera" />
          <ScheduleCard name="Agendamento" />
          <ScheduleCard name="Atendidos" />
    </div>
  )
}
