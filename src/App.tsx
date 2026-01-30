import { SidebarProvider } from "./components/ui/sidebar";
import Navbar from "./Dashboard-component/Navbar";
import AppSidebar from "./Dashboard-component/Sidebar";
import Homepage from "./Dashboard-component/Homepage";

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1 ml-[1080px]">
          <Navbar />
        </div>
      </div>
      <div>
        <Homepage />
      </div>
    </SidebarProvider>
  
  );
}

export default App;
