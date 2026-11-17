const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

/** An amount in cents, such as `$129.00`. */
export function formatCents(cents: number): string {
  return formatter.format(cents / 100);
}
