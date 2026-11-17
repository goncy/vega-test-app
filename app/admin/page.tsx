import { getRecentOrders } from "@/lib/db";
import { formatCents } from "@/lib/currency";

export const metadata = { title: "Recent orders" };

// Only staff get here: the proxy sends everyone else to /login.
export default async function AdminPage() {
  const orders = await getRecentOrders();

  return (
    <main>
      <h1>Recent orders</h1>
      <table>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerEmail}</td>
              <td>{order.shippingAddress}</td>
              <td>{formatCents(order.totalCents)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
