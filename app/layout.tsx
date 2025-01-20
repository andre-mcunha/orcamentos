import React from 'react'
import './globals.css'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}