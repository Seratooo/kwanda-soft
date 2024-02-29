import ActionsElements from "@/app/ui/board/actions-elements";
import { ColumnCards } from "@/app/ui/board/cards";
import TopBar from "@/app/ui/board/topBar";
import Filter from "@/app/ui/filter";
import { UserAvatares } from "@/app/ui/users-avatares";

export default function Page() {
  return (
    <main className="w-full h-screen p-2 md:p-4 space-y-4 overflow-hidden">
      <TopBar />
      <UserAvatares />
      <div className="flex items-center justify-between">
        <Filter />
        <ActionsElements />
      </div>
      <div className="grid grid-cols-[repeat(5,minmax(300px,_1fr))] overflow-scroll w-full pb-5 h-[80vh]">
        <ColumnCards />
      </div>
    </main>
  );
}
