import '../globals.css';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
