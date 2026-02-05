import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Dashboard-component/Navbar";
import AppSidebar from "./Dashboard-component/Sidebar";
import Homepage from "./Dashboard-component/Home-Components/Homepage";
import Login from "./Dashboard-component/Login";
import Inbox from "./Dashboard-component/Home-Components/Inbox";
import CalendarPage from "./Dashboard-component/Home-Components/Calendar";
import Offers from "./Dashboard-component/Home-Components/Offers";
import OrderHistory from "./Dashboard-component/Orders-components/OrderHistory";
import PendingOrders from "./Dashboard-component/Orders-components/PendingOrders";
import CancelledOrders from "./Dashboard-component/Orders-components/CancelledOrder";
import Settings from "./Dashboard-component/Home-Components/Settings";

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

          <main className="flex-1 px-4 pb-4  overflow-auto">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/orders/history" element={<OrderHistory />} />
              <Route path="/orders/pending" element={<PendingOrders />} />
              <Route path="/orders/returns" element={<CancelledOrders />} />

            </Routes>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default App;
