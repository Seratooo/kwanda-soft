import { LogOut, Plus } from "lucide-react";
import StackedBarChart from "../ui/dashboard/stackedBarChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PieChartElement from "../ui/dashboard/pieChart";
import PatientsTable from "../ui/patients/table";

const Patients = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    waitingTime: '10min',
    status: 'em risco',
    priority: 'emergência'
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    waitingTime: '13min',
    status: 'grave',
    priority: 'muito-urgente'
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    waitingTime: '20min',
    status: 'em risco',
    priority: 'emergência'
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    waitingTime: '22min',
    status: 'moderado',
    priority: 'urgente'
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    waitingTime: '22min',
    status: 'estável',
    priority: 'pouco-urgente'
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    waitingTime: '25min',
    status: 'sem risco',
    priority: 'não-urgente'
  },
  // {
  //   id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
  //   name: 'Evil Rabbit',
  //   waitingTime: '27min',
  //   status: 'sem risco',
  //   priority: 'não-urgente'
  // },
  // {
  //   id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
  //   name: 'Emil Kowalski',
  //   waitingTime: '28min',
  //   status: 'sem risco',
  //   priority: 'não-urgente'
  // },
  // {
  //   id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
  //   name: 'Amy Burns',
  //   waitingTime: '29min',
  //   status: 'sem risco',
  //   priority: 'não-urgente'
  // },
  // {
  //   id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
  //   name: 'Balazs Orban',
  //   waitingTime: '32min',
  //   status: 'sem risco',
  //   priority: 'não-urgente'
  // },
];

export default function Page() {
  return (
    <main className="w-full h-screen p-2 md:p-4 space-y-3">
      <div className="flex justify-end md:justify-between items-center">
        <p className="text-sm font-bold hidden md:block">Painel</p>
        <div className="flex gap-2">
          <button className="flex gap-1 bg-gray-100 p-2 text-gray-800 text-sm rounded-md shadow-sm">
            <Plus className="size-5 text-gray-400"></Plus>
            <p>Novo paciente</p>
          </button>
          <button className="flex gap-1 bg-teal-900 p-2 text-white text-sm rounded-md shadow-sm">
            <LogOut className="size-5" />
            <p>Sair</p>
          </button>
        </div>
      </div>

      <div className="flex gap-5 md:gap-6 flex-col md:flex-row md:justify-between">
        <div className="space-y-8 w-full">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between 2xl:justify-start">
            <div className="bg-teal-100 h-[6.5rem] w-full md:w-56 p-2 md:p-4 rounded-md">
              <p className="text-sm">Pacientes a espera</p>
              <p className="text-gray-700 font-bold text-4xl">12</p>
              <span className="flex gap-1 items-center">
                <div className="h-0 w-0 border-b-[12px] border-l-[7px] border-r-[7px] border-b-teal-900 border-l-transparent border-r-transparent" />
                <p className="text-sm">5.98%</p>
              </span>
            </div>

            <div className="bg-teal-100 h-[6.5rem] w-full md:w-56 p-2 md:p-4 rounded-md">
              <p className="text-sm">Pacientes atendidos</p>
              <p className="text-gray-700 font-bold text-4xl">487</p>
              <span className="flex gap-1 items-center">
                <div className="h-0 w-0 border-b-[12px] border-l-[7px] border-r-[7px] border-b-teal-900 border-l-transparent border-r-transparent" />
                <p className="text-sm">5.98%</p>
              </span>
            </div>

            <div className="bg-gray-100 h-[6.5rem] w-full md:w-56 p-2 md:p-4 rounded-md">
              <p className="text-sm">Consultas agendadas</p>
              <p className="text-gray-700 font-bold text-4xl">122</p>
              <span className="flex gap-1 items-center">
                <div className="h-0 w-0 border-b-[12px] border-l-[7px] border-r-[7px] border-b-teal-900 border-l-transparent border-r-transparent" />
                <p className="text-sm">5.98%</p>
              </span>
            </div>
          </div>
          <div className="h-60 md:h-80 w-full">
            <div className="flex justify-between">
              <p className="text-sm font-bold block">Estatísticas</p>
              <select
                name=""
                id="select1"
                defaultValue="2023"
                className="p-2 bg-gray-100 rounded-md text-xs"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <StackedBarChart />
          </div>
          <PatientsTable patients={Patients}/>
        </div>

        <div className="w-full md:w-72 h-screen space-y-6">
          <div className="border rounded-md">
            <div className="flex justify-between items-center p-2 md:p-4">
              <p className="text-sm font-bold block">Actividades</p>
              <select
                name=""
                id="select2"
                defaultValue="M"
                className="p-2 bg-gray-100 rounded-md text-xs"
              >
                <option value="D">Diariamente</option>
                <option value="M">Mensalmente</option>
                <option value="A">Anualmente</option>
              </select>
            </div>
            <div className="flex gap-4 items-center justify-center bg-gray-100 m-2 md:m-4 p-2 rounded-md">
              <Avatar>
                <AvatarImage
                  src="https://github.com/seratooo.png"
                  alt="@seratooo"
                />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold w-40">Abubacar Correia</p>
                <p className="text-gray-400 text-xs w-40">
                  In eu do do cillum lorem exercitation ea dolor.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center bg-gray-100 m-2 md:m-4 p-2 rounded-md">
              <Avatar>
                <AvatarImage
                  src="https://github.com/seratooo.png"
                  alt="@seratooo"
                />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold w-40">Abubacar Correia</p>
                <p className="text-gray-400 text-xs w-40">
                  In eu do do cillum lorem exercitation ea dolor.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center bg-gray-100 m-2 md:m-4 p-2 rounded-md">
              <Avatar>
                <AvatarImage
                  src="https://github.com/seratooo.png"
                  alt="@seratooo"
                />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold w-40">Abubacar Correia</p>
                <p className="text-gray-400 text-xs w-40">
                  In eu do do cillum lorem exercitation ea dolor.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center bg-gray-100 m-2 md:m-4 p-2 rounded-md">
              <Avatar>
                <AvatarImage
                  src="https://github.com/seratooo.png"
                  alt="@seratooo"
                />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold w-40">Abubacar Correia</p>
                <p className="text-gray-400 text-xs w-40">
                  In eu do do cillum lorem exercitation ea dolor.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col border rounded-md p-2 md:p-4">
            <div>
              <p className="text-sm font-bold">Estatísticas</p>
              <p className="text-gray-400 text-xs">
              De 1 à 15 Junho, 2023
              </p>
            </div>
            <div className="h-44">
              <PieChartElement />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
