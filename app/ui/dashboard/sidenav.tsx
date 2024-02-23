"use client";
import { AlignJustify, X } from "lucide-react";
import Logo from "../logo";
import Link from "next/link";
import { NavLinkBoard, NavLinkUsers } from "./nav-links";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SideNav() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [menu, setMenu] = useState(
    searchParams.get("menu")
  );

  function handleToggleMenu() {
    const params = new URLSearchParams(searchParams);
    const sidenav = params.get("menu");

    if (sidenav) {
      params.delete("menu");
    } else {
      params.set("menu", "off");
    }
    setMenu(params.get("menu"));
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      className={`${
        menu == "off"
          ? "h-screen md:w-16 md:h-screen"
          : "h-[51px] overflow-hidden md:w-64 md:h-screen"
      } w-[100%] z-10 bg-white fixed md:static px-3 py-3 border-b md:border-x md:border-b-0 h-full duration-300`}
    >
      <div className="space-y-1 h-14">
        <div
          className={`flex items-center h-8 ${
            menu == "off"
              ? "justify-between md:justify-center"
              : "justify-between md:justify-between"
          }`}
        >
          <Link href="/dashboard">
            {menu == "off" ? (
              <div className="block md:hidden">
                <Logo />
              </div>
            ) : (
              <div className="block">
                <Logo />
              </div>
            )}
          </Link>

          <div className="cursor-pointer" onClick={handleToggleMenu}>
            {menu == "off" ? <X /> : <AlignJustify />}
          </div>
        </div>
        {menu == "off" ? (
          <p className="hidden md:hidden text-gray-500 text-xs select-none">
            Clínica Maria
          </p>
        ) : (
          <p className="hidden md:block text-gray-500 text-xs select-none">Clínica Maria</p>
        )}
      </div>

      <div className="mt-3 space-y-1 overflow-auto h-[85vh]">
        <NavLinkBoard />
        <div className="bg-gray-200 w-full h-[1px]"></div>
        <NavLinkUsers />
      </div>
    </div>
  );
}
