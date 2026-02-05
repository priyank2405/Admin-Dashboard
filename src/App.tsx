import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import Navbar from "./Dashboard-component/Navbar";
import AppSidebar from "./Dashboard-component/Sidebar";
import Homepage from "./Dashboard-component/Homepage";
import Login from "./Dashboard-component/Login";

function App() {
 
  const isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin) {
    return <Login />;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <SidebarInset className="flex flex-col">
          <Navbar />

          <main className="flex-1 p-4 overflow-auto">
            <Homepage />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default App;
