import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  const cookieStore = cookies();

  const authRoutes = ["/sign-up", "/sign-in"];

  const baseRoutes = ["/dashboard", "/dashboard/settings"];

  const commonAdminAndToutGuideRoutes = ["/test/commonAdminAndToutGuideRoutes"];

  const customerRoutes = ["/test/customerRoutes"];

  const tourGuideRoutes = ["/test/tourGuideRoutes"];

  const adminRoutes = ["/dashboard/categories"];

  const accessToken = cookieStore.get("accessToken");

  //  Kalo user udah punya accessToken, terus mau buka authRoutes. Redirect ke dashboard
  if (accessToken && authRoutes.includes(pathname)) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  //  Kalo user belom punya ccessToken dan pengen buka dashboard, redirect ke signup
  if (
    !accessToken &&
    (baseRoutes.includes(pathname) ||
      customerRoutes.includes(pathname) ||
      tourGuideRoutes.includes(pathname) ||
      adminRoutes.includes(pathname) ||
      commonAdminAndToutGuideRoutes.includes(pathname) ||
      pathname.startsWith("/dashboard"))
  ) {
    url.pathname = "/sign-up";
    return NextResponse.redirect(url);
  }

  //  Kalo user udah punya accessToken
  if (accessToken) {
    const user: any = jwtDecode(accessToken?.value as string);
    url.pathname = "/access-denied";

    // Kalo rolenya ADMINISTRATOR dan TOUR_GUIDE, terus mau akses customerRoutes. Redirect ke /access-denied
    if (
      (user.role === "ADMINISTRATOR" || user.role === "TOUR_GUIDE") &&
      customerRoutes.includes(pathname)
    ) {
      return NextResponse.redirect(url);
    }

    // Kalo rolenya ADMINISTRATOR dan CUSTOMER, terus mau akses tourGuideRoutes. Redirect ke /access-denied
    if (
      (user.role === "ADMINISTRATOR" || user.role === "CUSTOMER") &&
      tourGuideRoutes.includes(pathname)
    ) {
      return NextResponse.redirect(url);
    }

    // Kalo rolenya CUSTOMER dan TOUR_GUIDE, terus mau akses adminRoutes. Redirect ke /access-denied
    if (
      (user.role === "CUSTOMER" || user.role == "TOUR_GUIDE") &&
      adminRoutes.includes(pathname)
    ) {
      return NextResponse.redirect(url);
    }
  }
}
