import { Presentation, Plus } from "lucide-react";
import StackedBarChart from "../../ui/dashboard/stackedBarChart";
import PieChartElement from "../../ui/dashboard/pieChart";
import PatientsTable from "../../ui/patients/table";
import { CardsBoard, CardsUser } from "../../ui/dashboard/cards";
import { Suspense } from "react";
import TopBar from "../../ui/topBar";
import {
  CardsBoardSkeleton,
  CardsUserSkeleton,
  StackedBarChartSkeleton,
} from "../../ui/skeletons";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="w-full h-screen p-2 md:p-4 space-y-3">
      <TopBar />
      <div className="flex gap-5 md:gap-6 flex-col md:flex-row md:justify-between">
        <div className="space-y-8 w-full">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between lg:justify-center 2xl:justify-start">
            <Suspense fallback={<CardsBoardSkeleton />}>
              <CardsBoard />
            </Suspense>
          </div>
          <div className="h-60 md:h-80 w-full">
            <StackedBarChart />
          </div>
          <PatientsTable />
        </div>

        <div className="w-full md:w-72 h-screen space-y-5">
          <div className="border rounded-md">
            <Suspense fallback={<CardsUserSkeleton />}>
              <CardsUser />
            </Suspense>
          </div>

          <div className="flex flex-col border mb-5 rounded-md p-2 md:p-4">
            <div>
              <p className="text-sm font-bold">Estatísticas</p>
              <p className="text-gray-400 text-xs">De 1 a 15 Junho, 2023</p>
            </div>
            <div className="h-48">
              <PieChartElement />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
