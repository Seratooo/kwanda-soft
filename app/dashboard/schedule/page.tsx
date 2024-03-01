import ScheduleComponet from "@/app/ui/schedule/schedule";
import { ScheduleCards } from "@/app/ui/schedule/schedule-card";
import TopBar from "@/app/ui/topBar";
import { Suspense } from "react";
import { MoreHorizontal } from "lucide-react";
import { CardsPatientSkeleton } from "@/app/ui/skeletons";
import { CardsPatients } from "@/app/ui/patients/card-patient";
import CalendarComponent from "@/app/ui/calendar";

export default function Page() {
  return (
    <main className="w-full h-screen p-2 md:p-4 space-y-3">
      <TopBar title="Agendamento" />
      <div className="flex h-screen gap-4 flex-col md:flex-row">
        <div className="w-full space-y-9">
          <ScheduleComponet />
          <ScheduleCards />
        </div>
        <div className="w-full md:w-96 rounded-md space-y-5">
          <CalendarComponent />
          <div className="-m-2">
            <div className="flex justify-between items-center m-2">
              <p className="text-sm font-bold">Novos pacientes</p>
              <MoreHorizontal className="size-5" />
            </div>
            <Suspense fallback={<CardsPatientSkeleton />}>
              <CardsPatients />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
