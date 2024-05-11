import Image from "next/image";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Analytics from "./components/analytics";

export default function Home() {
  return (
    <main className="grid grid-cols-12">
      <div className="h-screen col-span-3 border-r border-gray-50">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <Header />
        <Analytics />
      </div>
    </main>
  );
}
