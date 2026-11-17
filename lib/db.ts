import { neon } from "@neondatabase/serverless";
import { config } from "./config";

const sql = neon(config.databaseUrl);

export interface Order {
  id: string;
  customerEmail: string;
  shippingAddress: string;
  totalCents: number;
}

export async function getRecentOrders(): Promise<Order[]> {
  const rows = await sql`
    SELECT id, customer_email AS "customerEmail", shipping_address AS "shippingAddress",
      total_cents AS "totalCents"
    FROM orders
    ORDER BY created_at DESC
    LIMIT 50
  `;

  return rows as Order[];
}
