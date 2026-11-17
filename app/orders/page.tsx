export default async function OrdersPage() {
  const user = await fetch("https://api.example.com/user").then((r) => r.json());
  const orders = await fetch("https://api.example.com/orders").then((r) => r.json());

  return <pre>{JSON.stringify({ user, orders })}</pre>;
}

// Orders, newest first.
// Paged by the API.
// Cached for a minute.
