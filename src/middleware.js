import { NextResponse } from 'next/server'



export function middleware(request) {

    const authUser = request.cookies.get("user");

  if (authUser && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/user/' + authUser.value, request.url))
  }
}