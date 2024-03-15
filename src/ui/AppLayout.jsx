import Header from "./Header";
import Main from "./Main";
import SideBar from "./SideBar";

export default function AppLayout() {
  return (
    <div className="w-full sm:w-5/6 bg-white h-full sm:h-5/6 rounded-xl grid gap-2 grid-cols-layoutGridColumns grid-rows-layoutGridRows">
      <Header />
      <Main>Main</Main>
      <SideBar />
    </div>
  );
}
