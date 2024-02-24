import { Suspense } from "react";
import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-none">
        <Suspense fallback={<div></div>}>
          <SideNav />
        </Suspense>
      </div>
      <div className="flex-grow mt-16 md:overflow-y-auto md:mt-0">
        {children}
      </div>
    </div>
  );
}
