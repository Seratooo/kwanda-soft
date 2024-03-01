import { Bell, Presentation, Settings } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center">
      <div className="hidden md:flex gap-3 items-center">
        <div className="flex gap-1 items-center">
          <Presentation />
          <h3 className="text-sm font-bold hidden md:block">Quadro</h3>
        </div>
        <p className="text-gray-500 text-xs">
          Última atualização: <span className="text-black">June 14, 2022</span>
        </p>
      </div>
      <div className="flex gap-2 w-full md:w-auto items-center">
        <input
          type="text"
          placeholder="pesquisar..."
          className="text-gray-500 text-sm bg-gray-100 px-4 py-1 rounded-sm w-full md:w-64"
        />
        <Settings className="size-5 text-gray-500 cursor-pointer" />
        <Bell className="size-5 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
}
