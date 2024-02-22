import SideNav from "../ui/dashboard/sidenav";

export default function Layout({children}:{children:React.ReactNode}){
  return(
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-none">
        <SideNav />
      </div>
      <div className="flex-grow p-6 mt-16 md:overflow-y-auto md:p-12 md:mt-0">{children}</div>
    </div>
  )
}