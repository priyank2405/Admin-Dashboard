import { SidebarProvider } from "./components/ui/sidebar";
import Navbar from "./Dashboard-component/Navbar";
import AppSidebar from "./Dashboard-component/Sidebar";

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1">
          <Navbar />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
