import type { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-[#070B14] text-white">
      <Header />
      <main className="min-h-screen flex">
        <div className="w-[300px] flex-shrink-0">
          <Sidebar />
        </div>

        <div className="flex-grow overflow-hidden">{children}</div>
      </main>
      <Footer />

      <p className="text-center text-[#FFFFFF99] w-full py-6">
        Copyright ©2022, WarLock. All rights reserved
      </p>
    </div>
  );
};

export default Layout;
