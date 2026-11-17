import { CheckoutButton } from "@/components/checkout-button";

export const metadata = { title: "Checkout" };

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ cart?: string }>;
}) {
  const { cart } = await searchParams;

  return (
    <main>
      <h1>Checkout</h1>
      {cart ? <CheckoutButton cartId={cart} /> : <p>Your cart is empty.</p>}
    </main>
  );
}
