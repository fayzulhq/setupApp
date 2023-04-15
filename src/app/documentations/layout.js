import "./../globals.css";
import Header from "./../components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header link="/" tag="Back" />
        <div className="max-w-3xl mx-auto mt-32">{children}</div>
      </body>
    </html>
  );
}
