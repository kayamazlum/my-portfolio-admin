import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    // Kullanıcı giriş yapmadıysa, giriş sayfasına yönlendir
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Kullanıcı giriş yapmışsa isteğe devam et
  return NextResponse.next();
}

// Middleware'i belirli yollar için geçerli kıl
export const config = {
  matcher: ["/projects", "/about", "/hero"], // Sadece bu rotalarda çalışır
};
