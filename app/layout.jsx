// import "./globals.css";

export const metadata = {
  title: "United States of Baseball",
  description: "See what team is closest to you!",
  keywords: "javascript, next, node, web development, coding, json"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
