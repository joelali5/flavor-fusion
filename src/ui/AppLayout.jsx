import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SideBar from "./SideBar";

export default function AppLayout() {
  return (
    <div className="w-full bg-white h-full grid gap-2 grid-cols-layoutGridColumns grid-rows-layoutGridRows fixed">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <SideBar />
    </div>
  );
}
