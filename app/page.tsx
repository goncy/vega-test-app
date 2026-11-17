import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Acme Outdoor</h1>
      <p>Tents, packs and boots, tested on the trail by our own staff.</p>
      <Link href="/checkout">Go to checkout</Link>
    </main>
  );
}
