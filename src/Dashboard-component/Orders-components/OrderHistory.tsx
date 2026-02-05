const OrderHistory = () => {
  const orders = [
    { id: "#1021", customer: "Rahul Sharma", item: "Veg Biryani", amount: "₹250", status: "Delivered" },
    { id: "#1022", customer: "Priya Singh", item: "Paneer Pizza", amount: "₹399", status: "Delivered" },
    { id: "#1023", customer: "Amit Kumar", item: "Burger Combo", amount: "₹180", status: "Delivered" },
    { id: "#1024", customer: "Neha Verma", item: "Masala Dosa", amount: "₹120", status: "Delivered" },
    { id: "#1025", customer: "Rohit Mehta", item: "Chicken Biryani", amount: "₹320", status: "Delivered" },
    { id: "#1021", customer: "Rahul Sharma", item: "Veg Biryani", amount: "₹250", status: "Delivered" },
    { id: "#1022", customer: "Priya Singh", item: "Paneer Pizza", amount: "₹399", status: "Delivered" },
    { id: "#1023", customer: "Amit Kumar", item: "Burger Combo", amount: "₹180", status: "Delivered" },
    { id: "#1024", customer: "Neha Verma", item: "Masala Dosa", amount: "₹120", status: "Delivered" },
    { id: "#1025", customer: "Rohit Mehta", item: "Chicken Biryani", amount: "₹320", status: "Delivered" },
    { id: "#1021", customer: "Rahul Sharma", item: "Veg Biryani", amount: "₹250", status: "Delivered" },
    { id: "#1022", customer: "Priya Singh", item: "Paneer Pizza", amount: "₹399", status: "Delivered" }
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
            {orders.map((order, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.item}</td>
                <td className="p-3">{order.amount}</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
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

export default OrderHistory;
