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
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";

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

export function NavLinkBoard({ isOpen }: { isOpen: string | null }) {
  const searchParams = useSearchParams().toString();
  const pathname = usePathname();

  return (
    <>
      <Link
        href={`${searchParams ? `/dashboard?${searchParams}` : "/dashboard"}`}
        className="flex gap-1 bg-teal-900 p-2 rounded-md cursor-pointer"
      >
        <LayoutDashboard className="text-white size-5" />
        <p
          className={clsx("text-white text-sm font-bold select-none", {
            "md:hidden": isOpen,
          })}
        >
          Painel
        </p>
      </Link>

      {linkBoard.map(({ href, name, Icon }, index) => (
        <Link
          key={index}
          href={`${searchParams ? `${href}?${searchParams}` : href}`}
          className={clsx(
            "group flex gap-1 p-2 rounded-md cursor-pointer hover:bg-teal-100/30",
            {
              "bg-teal-100": pathname == href,
            }
          )}
        >
          <Icon
            className={`size-5 group-hover:font-bold group-hover:text-teal-900`}
          />
          <p
            className={clsx(
              `select-none text-sm group-hover:font-bold group-hover:text-teal-900`,
              {
                "md:hidden": isOpen,
              }
            )}
          >
            {name}
          </p>
        </Link>
      ))}
      <div className="bg-gray-200 w-full h-[1px]"></div>
      {linkUsers.map(({ href, name, Icon }, index) => (
        <Link
          key={index}
          href={`${searchParams ? `${href}?${searchParams}` : href}`}
          className={clsx(
            `group flex gap-1 p-2 rounded-md cursor-pointer hover:bg-gray-100`,
            {
              "bg-gray-100": pathname == href,
            }
          )}
        >
          <Icon
            className={`size-5 group-hover:font-bold group-hover:text-black`}
          />
          <p
            className={clsx(
              `select-none text-sm group-hover:font-bold group-hover:text-black`,
              {
                "md:hidden": isOpen,
              }
            )}
          >
            {name}
          </p>
        </Link>
      ))}
    </>
  );
}
