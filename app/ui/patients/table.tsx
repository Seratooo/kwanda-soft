import Image from "next/image";
import Search from "@/app/ui/search";
import { FormattedPacientsTable } from "@/lib/definitions";
import clsx from "clsx";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const patients = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    waitingTime: "10min",
    status: "Recepção", //"em risco",
    priority: "emergência",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    waitingTime: "13min",
    status: "Recepção", //"grave",
    priority: "muito-urgente",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Hector Simpson",
    waitingTime: "20min",
    status: "Triagem", //"em risco",
    priority: "emergência",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Steven Tey",
    waitingTime: "22min",
    status: "Triagem", //"moderado",
    priority: "urgente",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Steph Dietz",
    waitingTime: "22min",
    status: "Triagem", //"estável",
    priority: "pouco-urgente",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    waitingTime: "25min",
    status: "Tratamento", //"sem risco",
    priority: "não-urgente",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    waitingTime: "27min",
    status: "Tratamento", //"sem risco",
    priority: "não-urgente",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "Emil Kowalski",
    waitingTime: "28min",
    status: "Tratamento", //"sem risco",
    priority: "não-urgente",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    waitingTime: "29min",
    status: "Avaliação", //"sem risco",
    priority: "não-urgente",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    waitingTime: "32min",
    status: "Avaliação", //"sem risco",
    priority: "não-urgente",
  },
];

export default function PatientsTable() {
  return (
    <div className="w-full">
      <h1 className={`text-sm font-bold block`}>Pacientes recentes</h1>
      <div className="mt-3 mb-8 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-y-scroll rounded-md h-[24rem] md:h-[16.5rem] bg-gray-100  md:border p-0 md:pt-0">
              <div className="md:hidden p-1">
                {patients?.map((patient) => (
                  <div
                    key={patient.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-1 flex items-center">
                          <div className="flex items-center gap-2">
                            <p className="text-sm">{patient.name}</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">
                          {patient.waitingTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Status</p>
                        <p className="font-medium text-sm">{patient.status}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Prioridade</p>
                        <p
                          className={clsx("p-1 rounded font-medium text-sm", {
                            "bg-[#E5241D] text-white":
                              "emergência" == patient.priority,
                            "bg-[#F49825] text-white":
                              "muito-urgente" == patient.priority,
                            "bg-[#FDCC37] text-white":
                              "urgente" == patient.priority,
                            "bg-[#4CAE3F] text-white":
                              "pouco-urgente" == patient.priority,
                            "bg-[#3E4999] text-white":
                              "não-urgente" == patient.priority,
                          })}
                        >
                          {patient.priority}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-100 text-left text-sm font-normal">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 font-bold text-gray-500 sm:pl-6"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-0 py-3 font-bold text-gray-500"
                    >
                      Tempo de espera
                    </th>
                    <th
                      scope="col"
                      className="px-0 py-3 font-bold text-gray-500"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-0 py-3 font-bold text-gray-500"
                    >
                      Prioridade
                    </th>
                    <th
                      scope="col"
                      className="px-0 py-3 font-bold text-gray-500"
                    >
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <MoreVertical className="cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Opções</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link href="/dashboard/patients">
                              Ver todos os pacientes
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Exportar dados</DropdownMenuItem>
                          <DropdownMenuItem>Gerar relatórios</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-gray-900">
                  {patients.map((patient) => (
                    <tr key={patient.id} className="group">
                      <td className="whitespace-nowrap bg-white px-4 py-4 text-sm">
                        {patient.name}
                      </td>
                      <td className="whitespace-nowrap bg-white py-4 text-sm">
                        {patient.waitingTime}
                      </td>
                      <td className="whitespace-nowrap bg-white py-4 text-sm">
                        {patient.status}
                      </td>
                      <td className="whitespace-nowrap bg-white py-4 text-sm">
                        <span
                          className={clsx("p-1 rounded font-bold", {
                            "bg-[#E5241D] text-white":
                              "emergência" == patient.priority,
                            "bg-[#F49825] text-white":
                              "muito-urgente" == patient.priority,
                            "bg-[#FDCC37] text-white":
                              "urgente" == patient.priority,
                            "bg-[#4CAE3F] text-white":
                              "pouco-urgente" == patient.priority,
                            "bg-[#3E4999] text-white":
                              "não-urgente" == patient.priority,
                          })}
                        >
                          {patient.priority}
                        </span>
                      </td>
                      <td className="whitespace-nowrap bg-white py-4 text-sm">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Opções</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                            <DropdownMenuItem>Ver histórico</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PatientsTableComponent() {
  return (
    <div className="w-full">
      <div className="mt-3 mb-8 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-y-scroll rounded-md h-[78vh] bg-gray-100  md:border p-0 md:pt-0">
              <div className="md:hidden p-1">
                {patients?.map((patient) => (
                  <div
                    key={patient.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-1 flex items-center">
                          <div className="flex items-center gap-2">
                            <p className="text-sm">{patient.name}</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">
                          {patient.waitingTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Status</p>
                        <p className="font-medium text-sm">{patient.status}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Prioridade</p>
                        <p
                          className={clsx("p-1 rounded font-medium text-sm", {
                            "bg-[#E5241D] text-white":
                              "emergência" == patient.priority,
                            "bg-[#F49825] text-white":
                              "muito-urgente" == patient.priority,
                            "bg-[#FDCC37] text-white":
                              "urgente" == patient.priority,
                            "bg-[#4CAE3F] text-white":
                              "pouco-urgente" == patient.priority,
                            "bg-[#3E4999] text-white":
                              "não-urgente" == patient.priority,
                          })}
                        >
                          {patient.priority}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-100 text-left text-sm font-normal">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 font-bold text-gray-500 sm:pl-6"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-0 py-3 font-bold text-gray-500"
                    >
                      Tempo de espera
                    </th>
                    <th
                      scope="col"
                      className="px-0 py-3 font-bold text-gray-500"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-0 py-3 font-bold text-gray-500"
                    >
                      Prioridade
                    </th>
                    <th
                      scope="col"
                      className="px-0 py-3 font-bold text-gray-500"
                    >
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <MoreVertical className="cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Opções</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Exportar dados</DropdownMenuItem>
                          <DropdownMenuItem>Gerar relatórios</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-gray-900">
                  {patients.map((patient) => (
                    <tr key={patient.id} className="group">
                      <td className="whitespace-nowrap bg-white px-4 py-4 text-sm">
                        {patient.name}
                      </td>
                      <td className="whitespace-nowrap bg-white py-4 text-sm">
                        {patient.waitingTime}
                      </td>
                      <td className="whitespace-nowrap bg-white py-4 text-sm">
                        {patient.status}
                      </td>
                      <td className="whitespace-nowrap bg-white py-4 text-sm">
                        <span
                          className={clsx("p-1 rounded font-bold", {
                            "bg-[#E5241D] text-white":
                              "emergência" == patient.priority,
                            "bg-[#F49825] text-white":
                              "muito-urgente" == patient.priority,
                            "bg-[#FDCC37] text-white":
                              "urgente" == patient.priority,
                            "bg-[#4CAE3F] text-white":
                              "pouco-urgente" == patient.priority,
                            "bg-[#3E4999] text-white":
                              "não-urgente" == patient.priority,
                          })}
                        >
                          {patient.priority}
                        </span>
                      </td>
                      <td className="whitespace-nowrap bg-white py-4 text-sm">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Opções</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                            <DropdownMenuItem>Ver histórico</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
