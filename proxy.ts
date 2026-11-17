import { type NextRequest, NextResponse } from "next/server";

interface StorefrontFlags {
  maintenance: boolean;
}

export async function proxy(request: NextRequest) {
  const flags: StorefrontFlags = await fetch("https://flags.acme-outdoor.com/v1/storefront", {
    headers: { authorization: `Bearer ${process.env.FLAGS_API_TOKEN}` },
  }).then((response) => response.json());

  if (flags.maintenance) {
    return NextResponse.rewrite(new URL("/maintenance", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/admin") && !request.cookies.has("admin_session")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
