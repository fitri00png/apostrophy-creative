
import './globals.css'

export const metadata = {
  title: 'Apostrophy Creative',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
