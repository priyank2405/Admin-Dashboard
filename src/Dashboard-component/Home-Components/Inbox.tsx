import { Mail } from "lucide-react";

const inboxData = [
  {
    id: 1,
    title: "New Order Received",
    message: "Order #1024 has been placed successfully",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Order Cancelled",
    message: "Customer cancelled order #1020",
    time: "15 min ago",
  },
  {
    id: 3,
    title: "Payment Successful",
    message: "₹2,450 credited to your account",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "New Customer Review",
    message: "You received a 5★ rating from Priya",
    time: "3 hours ago",
  },
  {
    id: 5,
    title: "Refund Processed",
    message: "Refund for order #1011 completed",
    time: "Yesterday",
  },
];

const Inbox = () => {
  return (
    <div className="space-y-6">

      <div className="bg-white rounded-xl shadow-sm border">
        {inboxData.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between p-4 border-b last:border-b-0 hover:bg-gray-50 transition"
          >
            <div className="flex gap-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Mail className="w-4 h-4 text-[#FF5533]" />
              </div>

              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.message}</p>
              </div>
            </div>

            <span className="text-xs text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
