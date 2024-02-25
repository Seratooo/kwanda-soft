"use client";

import { AlignJustify, X } from "lucide-react";
import Logo from "../logo";
import Link from "next/link";
import { NavLinkBoard } from "./nav-links";
import { usePathname, useSearchParams } from "next/navigation";
import { clsx } from "clsx";

export default function SideNav() {
  const searchParams = useSearchParams();
  const params = searchParams.toString();
  const menu = searchParams.get("menu");
  const pathname = usePathname();

  function hanldeToggleMenu() {
    const urlMenu = menu
      ? `${
          params
            ? `${
                params.includes("&menu=off")
                  ? `${pathname}?${params.replace("&menu=off", "")}`
                  : `${pathname}${params.replace("menu=off", "")}`
              }`
            : `${pathname}`
        }`
      : `${params ? `${pathname}?${params}&menu=off` : `${pathname}?menu=off`}`;

    return urlMenu;
  }
  return (
    <div
      className={clsx(
        `overflow-hidden md:w-64 md:h-screen w-[100%] z-10 bg-white top-0 fixed md:static px-3 py-3 border-b md:border-x md:border-b-0 h-full duration-300`,
        {
          "!h-[48px] md:!w-[64px] md:!h-screen": menu,
        }
      )}
    >
      <div className="space-y-1 h-14">
        <div
          className={`flex items-center h-8 justify-between ${
            menu ? "md:justify-center" : "md:justify-between"
          }`}
        >
          <Link href="/dashboard">
            <div className={`${menu ? "md:hidden" : "md:block"}`}>
              <Logo />
            </div>
          </Link>

          <Link className="cursor-pointer" href={hanldeToggleMenu()}>
            <X className={menu ? "hidden md:block" : "block md:hidden"} />
            <AlignJustify
              className={menu ? "block md:hidden" : "hidden md:block"}
            />
          </Link>
        </div>
        <p
          className={clsx("hidden md:block text-gray-500 text-xs select-none", {
            "md:hidden": menu,
          })}
        >
          Clínica Maria
        </p>
      </div>

      <div className="mt-3 space-y-1 overflow-auto h-[85vh]">
        <NavLinkBoard isOpen={menu} />
      </div>
    </div>
  );
}
