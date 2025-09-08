import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the client's IP address
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const clientIp = forwarded?.split(',')[0] || realIp

  // Allow localhost/127.0.0.1 and IPv6 localhost (::1)
  const allowedIps = [
    '127.0.0.1',
    'localhost',
    '::1',
    '::ffff:127.0.0.1'
  ]

  // Check if the request is coming from localhost
  const isLocalhost = allowedIps.some(ip => 
    clientIp?.includes(ip) || 
    request.headers.get('host')?.includes('localhost') ||
    request.headers.get('host')?.includes('127.0.0.1')
  )

  // If not from localhost, return 403 Forbidden
  if (!isLocalhost) {
    return new NextResponse(
      JSON.stringify({ 
        message: 'Access restricted. This site is temporarily unavailable.',
        timestamp: new Date().toISOString()
      }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'X-Robots-Tag': 'noindex'
        }
      }
    )
  }

  // Allow the request to continue
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
