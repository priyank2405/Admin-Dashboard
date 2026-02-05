import { useState } from "react";
import { Calendar } from "../../components/ui/calendar";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const ordersData = [
    { date: "2026-02-08", orders: 20, cancelled: 5 },
    { date: "2026-02-09", orders: 35, cancelled: 2 },
    { date: "2026-02-10", orders: 50, cancelled: 6 },
    { date: "2026-02-11", orders: 55, cancelled: 7 },
    { date: "2026-02-12", orders: 58, cancelled: 9 },
    { date: "2026-02-13", orders: 45, cancelled: 3 },
    { date: "2026-02-14", orders: 49, cancelled: 5 },
    { date: "2026-02-15", orders: 51, cancelled: 2 },
    { date: "2026-02-16", orders: 57, cancelled: 8 },
    { date: "2026-02-17", orders: 46, cancelled: 6 },
    { date: "2026-02-18", orders: 56, cancelled: 3 },
    { date: "2026-02-19", orders: 38, cancelled: 4 },
    { date: "2026-02-20", orders: 35, cancelled: 1 },
  ];

  const formattedDate = selectedDate
    ? selectedDate.toISOString().split("T")[0]
    : "";

  const todayData = ordersData.find(
    (item) => item.date === formattedDate
  );

  return (
    <div className="space-y-4">
      {/* Calendar + Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Calendar */}
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>

        {/* Event / Orders Info */}
        <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-2">
            {selectedDate
              ? selectedDate.toDateString()
              : "Select a date"}
          </h2>

          {todayData ? (
            <div className="space-y-1">
              <p className="text-green-600 font-medium">
                📦 Orders: {todayData.orders}
              </p>
              <p className="text-red-500 font-medium">
                ❌ Cancelled: {todayData.cancelled}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">
              No orders/events for this date
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default CalendarPage;
