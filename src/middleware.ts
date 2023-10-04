import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  try {
    const cookie = req.cookies.get("connect.sid");
    if (!cookie) {
      return NextResponse.redirect(`${process.env.FRONTEND_DOMAIN}/login`);
    }

    // const res = await fetch("http://localhost:8000/api/v1/test/health-check");
    const res = await fetch(`${process.env.EXPRESS_DOMAIN}/sessions/check`, {
      method: "POST",
      credentials: "include",
      headers: {
        Cookie: `${cookie?.name}=${cookie.value}`,
      },
    });
    if (!res.ok) {
      return NextResponse.redirect(`${process.env.FRONTEND_DOMAIN}/login`, {
        status: 301,
      });
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Error 500: Internal Server Error"), {
      status: 500,
    });
  }
}

export const config = {
  matcher: [`/app/(.*)`, "/app"],
};
