"use client";

import {
  ActivitySquare,
  BarChartBig,
  CalendarClock,
  ConciergeBell,
  LayoutDashboard,
  MenuSquare,
  MessageSquareText,
  Presentation,
  ScanText,
  ShieldCheck,
  UserRoundCheck,
  UserRoundPlus,
  UserRoundSearch,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

const linkBoard = [
  { name: "Quadro", href: "/dashboard/board", Icon: Presentation },
  { name: "Agendamentos", href: "/dashboard/schedule", Icon: CalendarClock },
  { name: "Pacientes", href: "/#", Icon: UserRoundSearch },
  { name: "Funcionários", href: "/#", Icon: UserRoundCheck },
  { name: "Análise de dados", href: "/#", Icon: BarChartBig },
  { name: "Mensagens", href: "/#", Icon: MessageSquareText },
  { name: "Atividades", href: "/#", Icon: MenuSquare },
];

const linkUsers = [
  { name: "Recepção", href: "/#", Icon: ConciergeBell },
  { name: "Triagem", href: "/#", Icon: ScanText },
  { name: "Tratamento", href: "/#", Icon: ActivitySquare },
  { name: "Avaliação", href: "/#", Icon: ShieldCheck },
  { name: "Geral", href: "/#", Icon: UserRoundPlus },
];

export function NavLinkBoard() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const menu = searchParams.get("menu");
  const allParams = searchParams.toString()
  
  return (
    <>
      <Link
        href={`${allParams? `/dashboard?${allParams}` : '/dashboard'}`}
        className="flex gap-1 bg-teal-900 p-2 rounded-md cursor-pointer"
      >
        <LayoutDashboard className="text-white size-5" />
        <p className="text-white text-sm font-bold select-none">
          {menu == "off" ? <p className="block md:hidden">Painel</p> : "Painel"}
        </p>
      </Link>

      {linkBoard.map(({ href, name, Icon }, index) => (
        <Link
          key={index}
          href={`${allParams? `${href}?${allParams}` : href}`}
          className={clsx(
            "group flex gap-1 p-2 rounded-md cursor-pointer hover:bg-teal-100/30",
            {
              "bg-teal-100/30": pathname == href,
            }
          )}
        >
          <Icon
            className={`${
              pathname == href ? "text-teal-900 font-bold" : "text-gray-500"
            } size-5 group-hover:font-bold group-hover:text-teal-900`}
          />
          <p
            className={`${
              pathname == href ? "text-teal-900 font-bold" : "text-gray-500"
            } select-none text-sm group-hover:font-bold group-hover:text-teal-900`}
          >
            {menu == "off" ? <p className="block md:hidden">{name}</p> : name}
          </p>
        </Link>
      ))}
    </>
  );
}

export function NavLinkUsers() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const menu = searchParams.get("menu");
  const allParams = searchParams.toString()
  
  return (
    <>
      {linkUsers.map(({ href, name, Icon }, index) => (
        <Link
          key={index}
          href={`${allParams? `${href}?${allParams}` : href}`}
          className={`${
            pathname == href ? "bg-gray-100" : ""
          } group flex gap-1 p-2 rounded-md cursor-pointer hover:bg-gray-100`}
        >
          <Icon
            className={`${
              pathname == href ? "text-black font-bold" : "text-gray-500"
            } size-5 group-hover:font-bold group-hover:text-black`}
          />
          <p
            className={`${
              pathname == href ? "text-black font-bold" : "text-gray-500"
            } select-none text-sm group-hover:font-bold group-hover:text-black`}
          >
            {menu == "off" ? <p className="block md:hidden">{name}</p> : name}
          </p>
        </Link>
      ))}
    </>
  );
}
