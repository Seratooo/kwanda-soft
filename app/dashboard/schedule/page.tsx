import ScheduleComponet from "@/app/ui/schedule/schedule";
import { ScheduleCards } from "@/app/ui/schedule/schedule-card";
import TopBar from "@/app/ui/topBar";
import { UserAvatares } from "@/app/ui/users-avatares";
import { Clock8, MapPin, MoreVertical } from "lucide-react";

export default function Page() {
  return (
    <main className="w-full h-screen p-2 md:p-4 space-y-3">
      <TopBar title="Agendamento" />
      <div className="flex h-screen gap-4">
        <div className="w-full space-y-9">
          <ScheduleComponet />
          <ScheduleCards />
        </div>
        <div className="w-96 bg-gray-100 rounded-md"></div>
      </div>
    </main>
  );
}
