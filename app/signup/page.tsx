import Image from "next/image"
import Link from "next/link"

export default function Signup(){
  return(
      <div>
        <header className="h-[5vh]">
          <Image alt="logo-kwanda" src='/assets/LOGO.png' width={130} height={46} />
        </header>
        <main className="max-w-6xl m-auto h-[95vh] flex justify-center">
          <div className="flex gap-28 w-full items-center justify-center">
            <Image alt="login-image" src='/assets/login-image.svg' width={339} height={325} />
            <div className="flex flex-col items-center py-8 gap-2 w-96 h-[25rem] shadow-md border rounded-md">
              <h3 className="text-base font-bold text-black">Crie uma conta</h3>
              <p className="text-xs text-gray-500">Inicie seu teste gratuito de 30 dias.</p>
              <div className="flex flex-col gap-4 w-full">
                <div className="inline-flex gap-2 justify-center">
                   <div className="bg-red-100 px-4 py-1 rounded-full">
                      <Image alt="google-icon" src='/assets/Vectorgoogle.svg' className="" width={12} height={12} />
                    </div>
                    <div className="bg-gray-100 px-4 py-1 rounded-full">
                      <Image alt="google-icon" src='/assets/Vectorfacebook.svg' className="" width={12} height={12} />
                    </div>
                    <div className="bg-gray-100 px-4 py-1 rounded-full">
                      <Image alt="google-icon" src='/assets/Vectorapple.svg' className="" width={12} height={12} />
                    </div>
                </div>
                
                <form className="flex flex-col gap-6 px-8 items-center">
                    <input type="text" name="name" id="name" placeholder="John Doe" className="w-full text-xs bg-gray-100 p-2 rounded-md border" />
                    <input type="email" name="email" id="email" placeholder="exemplo.email@gmail.com" className="w-full text-xs bg-gray-100 p-2 rounded-md border" />
                    <input type="password" name="password" id="password" placeholder="Insira pelo menos 8 caracteres." className="w-full text-xs bg-gray-100 p-2 rounded-md border" />
                    <button className="w-full roudend-md bg-teal-900 text-white text-xs p-3 rounded-md">
                      Inscreva-se
                    </button>
                    <p className="text-xs">Já esteve aqui antes? <Link href='/signin'><span className="text-teal-900">Entrar</span></Link></p>
                </form>
                  
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}