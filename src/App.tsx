import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import Navbar from "./Dashboard-component/Navbar";
import AppSidebar from "./Dashboard-component/Sidebar";
import Homepage from "./Dashboard-component/Homepage";

function App() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
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
