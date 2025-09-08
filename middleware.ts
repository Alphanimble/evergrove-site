import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Check for maintenance mode first
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'
  const isMaintenancePage = request.nextUrl.pathname === '/maintenance'
  
  // If in maintenance mode and not already on maintenance page, redirect
  if (isMaintenanceMode && !isMaintenancePage) {
    const maintenanceUrl = new URL('/maintenance', request.url)
    console.log(`Maintenance mode active - redirecting to maintenance page`)
    return NextResponse.redirect(maintenanceUrl)
  }
  
  // If maintenance mode is active, allow access to maintenance page only
  if (isMaintenanceMode && isMaintenancePage) {
    console.log(`Allowing access to maintenance page`)
    return NextResponse.next()
  }
  
  // Always check localhost restriction (unless we're in maintenance mode)
  if (!isMaintenanceMode) {
    const host = request.headers.get('host') || ''
    
    // Only allow localhost and 127.0.0.1 - be very strict
    const isLocalhost = host === 'localhost:3000' || 
                       host === '127.0.0.1:3000' ||
                       host === 'localhost' ||
                       host === '127.0.0.1' ||
                       host.startsWith('localhost:') ||
                       host.startsWith('127.0.0.1:')

    console.log(`Middleware check - Host: ${host}, IsLocalhost: ${isLocalhost}, MaintenanceMode: ${isMaintenanceMode}`)

    // Block everything that's not localhost
    if (!isLocalhost) {
      console.log(`Blocking access from host: ${host}`)
      return new NextResponse(
        `<!DOCTYPE html>
<html>
<head>
  <title>Access Restricted</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 100px; }
    .container { max-width: 500px; margin: 0 auto; }
    h1 { color: #d32f2f; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚫 Access Restricted</h1>
    <p>This website is temporarily unavailable for external access.</p>
    <p>Please contact the administrator if you need access.</p>
  </div>
</body>
</html>`,
        {
          status: 403,
          headers: {
            'Content-Type': 'text/html',
            'X-Robots-Tag': 'noindex'
          }
        }
      )
    }

    console.log(`Allowing access from host: ${host}`)
  }
  
  // Allow the request to continue
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except static files and Next.js internals
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
