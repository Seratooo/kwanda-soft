import Image from "next/image"
import Link from "next/link"


export default function Signin(){
  return(
      <div>
        <header className="h-[5vh]">
          <Image alt="logo-kwanda" src='/assets/LOGO.png' width={130} height={46} />
        </header>
        <main className="max-w-6xl m-auto h-[95vh] flex justify-center">
          <div className="flex gap-28 w-full items-center justify-center">
            <Image alt="login-image" src='/assets/login-image.svg' width={339} height={325} />
            <div className="flex flex-col py-8 gap-2 w-96 h-[25rem] shadow-md border rounded-md">
              <h3 className="px-8 text-base font-bold text-black">Bem-vindo de volta 👋</h3>
              <p className="px-8 text-xs text-gray-500">Acesse sua conta.</p>
              <div className="flex flex-col gap-4 w-full">
                <form className="flex flex-col gap-6 px-8 items-center">
                  <input type="email" name="email" id="email" placeholder="exemplo.email@gmail.com" className="w-full text-xs bg-gray-100 p-2 rounded-md border" />
                  <input type="password" name="password" id="password" placeholder="Insira a sua password aqui" className="w-full text-xs bg-gray-100 p-2 rounded-md border" />
                  <div className="w-full space-y-2">
                      <input type="text" name="clinic-name" id="clinic-name" disabled placeholder="Clínica Maria" className="w-full text-xs bg-gray-100 p-2 rounded-md border" />
                      <div className="w-full inline-flex justify-between">
                        <div className="flex gap-1 items-center">
                          <input type="checkbox" className="accent-teal-900" checked name="" id="" /><p className="text-xs">Lembre-se de mim</p>
                        </div>
                        <p className="text-xs text-teal-900">Esqueceu a senha?</p>
                      </div>
                  </div>

                  <button className="w-full roudend-md bg-teal-900 text-white text-xs p-3 rounded-md">
                      Continuar
                  </button>
                  <p className="text-xs">Não tem uma conta? <Link href='signup'><span className="text-teal-900">Inscreva-se</span></Link></p>
                </form>
                  
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}