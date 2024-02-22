import Image from "next/image";


export default function Logo(){

  return (
    <Image alt="logo-Kwanda" src={`/assets/logo-kwanda.png`} className="select-none" width={130} height={46} ></Image>
  )
}