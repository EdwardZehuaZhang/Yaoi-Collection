// src/app/layout.js
import './globals.css';
import NavigationBar from './components/NavigationBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
        {/* Optionally add <Footer /> here */}
      </body>
    </html>
  );
}
