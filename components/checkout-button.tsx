"use client";

import { useState } from "react";
import { config } from "@/lib/config";

export function CheckoutButton({ cartId }: { cartId: string }) {
  const [pending, setPending] = useState(false);

  async function checkout() {
    setPending(true);

    const response = await fetch(`${config.siteUrl}/api/checkout`, {
      method: "POST",
      body: JSON.stringify({ cartId }),
    });
    const { url } = (await response.json()) as { url: string };

    window.location.assign(url);
  }

  return (
    <button type="button" disabled={pending} onClick={checkout}>
      Pay now
    </button>
  );
}
