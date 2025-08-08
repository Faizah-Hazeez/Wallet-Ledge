import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function Dashboard() {
  return (
    <main className="flex h-screen px-4 lg:px-10 py-6">
      <div className="hidden lg:block lg:w-[25%]">
        <Sidebar />
      </div>
      <div className="lg:w-[75%] w-full">
        <Main />
      </div>
    </main>
  );
}

export default Dashboard;
