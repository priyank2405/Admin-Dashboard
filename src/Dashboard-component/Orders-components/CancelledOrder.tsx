const CancelledOrders = () => {
  const cancelledOrders = [
    {
      id: "#1041",
      customer: "Rohan Sharma",
      item: "Chicken Biryani",
      amount: "₹320",
      status: "Cancelled",
    },
    {
      id: "#1042",
      customer: "Neha Gupta",
      item: "Paneer Tikka",
      amount: "₹260",
      status: "Cancelled",
    },
    {
      id: "#1043",
      customer: "Amit Verma",
      item: "Veg Burger",
      amount: "₹150",
      status: "Cancelled",
    },
    {
      id: "#1044",
      customer: "Simran Kaur",
      item: "Hakka Noodles",
      amount: "₹220",
      status: "Cancelled",
    },
    {
      id: "#1045",
      customer: "Vikas Patel",
      item: "Masala Dosa",
      amount: "₹140",
      status: "Cancelled",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Item</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {cancelledOrders.map((order, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3 font-medium">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.item}</td>
                <td className="p-3">{order.amount}</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-600">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default CancelledOrders;
