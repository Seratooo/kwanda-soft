import { Plus } from "lucide-react";

export default function Page() {
  return (
    <main className="w-full h-screen p-2 md:p-4 space-y-4 overflow-hidden">
      <div className="bg-gray-100/90 p-8 rounded-md space-y-6">
        <div className="flex justify-between">
          <label htmlFor="patient-1">
            <div className="bg-teal-100 w-64 h-16 flex gap-2 items-center p-4 rounded-md border-teal-500 border-[2px]">
              <input type="radio" name="inputPatient" id="patient-1" />
              <p className="text-xs font-bold">Paciente normal</p>
            </div>
          </label>
          <label htmlFor="patient-2">
            <div className="bg-white w-64 h-16 flex gap-2 items-center p-4 rounded-md border-gray-200 border-[2px]">
              <input type="radio" name="inputPatient" id="patient-2" />
              <p className="text-xs font-bold">Recém nascido</p>
            </div>
          </label>
          <label htmlFor="patient-3">
            <div className="bg-white w-64 h-16 flex gap-2 items-center p-4 rounded-md border-gray-200 border-[2px]">
              <input type="radio" name="inputPatient" id="patient-3" />
              <p className="text-xs font-bold">Paciente não identificado</p>
            </div>
          </label>
        </div>
        <hr className="border-white" />
        <div>
          <div className="bg-white p-4 rounded-md space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Nome</p>
                <input
                  type="text"
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                  placeholder="O seu nome"
                />
              </label>
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Data de nascimento</p>
                <input
                  type="date"
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                  placeholder="Aug, 20, 1992"
                />
              </label>
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Sexo</p>
                <div className="flex gap-4 p-2 w-64">
                  <span className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      className=" bg-gray-100"
                    />
                    <p className="text-xs">Masculino</p>
                  </span>
                  <span className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      className=" bg-gray-100"
                    />
                    <p className="text-xs">Femenino</p>
                  </span>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Nº B.I</p>
                <input
                  type="text"
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                  placeholder="Nº Bilhete de identidade"
                />
              </label>
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Telefone</p>
                <input
                  type="text"
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                  placeholder="Nº de telefone"
                />
              </label>
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Email</p>
                <input
                  type="email"
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                  placeholder="email"
                />
              </label>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Endereço</p>
                <input
                  type="text"
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                  placeholder="..."
                />
              </label>
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Rua</p>
                <input
                  type="text"
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                  placeholder="..."
                />
              </label>
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Estado/Província</p>
                <select
                  name=""
                  id=""
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                >
                  <option value="">Luanda</option>
                </select>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Cidade</p>
                <input
                  type="text"
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                  placeholder="..."
                />
              </label>
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">País/Região</p>
                <select
                  name=""
                  id=""
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                >
                  <option value="">Luanda</option>
                </select>
              </label>
              <label htmlFor="" className="space-y-1">
                <p className="text-xs font-bold">Religião/Crença</p>
                <select
                  name=""
                  id=""
                  className="p-2 text-xs w-64 rounded-sm bg-gray-100"
                >
                  <option value="">Luanda</option>
                </select>
              </label>
            </div>
            <div className="flex gap-[25%]">
              <label htmlFor="fileImage" className="cursor-pointer">
                <p className="text-xs font-bold">Imagem</p>
                <div className="flex items-center justify-center w-24 h-24 mt-1 border-[2px] border-dashed border-gray-200 rounded-md">
                  <Plus className="text-gray-400" />
                </div>
                <input type="file" name="" id="fileImage" className="hidden" />
              </label>
              <label htmlFor="fileDocuments" className="cursor-pointer">
                <p className="text-xs font-bold">Documentos</p>
                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-24 h-24 mt-1 border-[2px] border-dashed border-gray-200 rounded-md">
                    <Plus className="text-gray-400" />
                  </div>
                  <div className="flex items-center justify-center w-24 h-24 mt-1 border-[2px] border-dashed border-gray-200 rounded-md">
                    <Plus className="text-gray-400" />
                  </div>
                  <input
                    type="file"
                    name=""
                    id="fileDocuments"
                    className="hidden"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
