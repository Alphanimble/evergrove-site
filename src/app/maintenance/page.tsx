import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Under Maintenance | EverGrove',
  description: 'We are currently performing scheduled maintenance. Please check back soon.',
  robots: 'noindex, nofollow'
}

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          {/* Maintenance Icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <svg 
                className="w-8 h-8 text-yellow-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            🔧 Under Maintenance
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-600 mb-6">
            We&apos;re currently performing scheduled maintenance to improve your experience.
          </p>

          {/* Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-gray-800 mb-2">What&apos;s happening?</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• System updates and improvements</li>
              <li>• Performance optimizations</li>
              <li>• Security enhancements</li>
            </ul>
          </div>

          {/* Time estimate */}
          <div className="text-sm text-gray-500 mb-6">
            <p>Expected completion: <span className="font-medium">Soon</span></p>
            <p className="mt-1">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Contact info */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-500">
              Need immediate assistance? Contact us at{' '}
              <a 
                href="mailto:support@evergrove.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                support@evergrove.com
              </a>
            </p>
          </div>
        </div>

        {/* Auto-refresh notice */}
        <p className="mt-4 text-xs text-gray-400">
          This page will automatically refresh every 30 seconds
        </p>
      </div>

      {/* Auto-refresh script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(function() {
              window.location.reload();
            }, 30000);
          `
        }}
      />
    </div>
  )
}
