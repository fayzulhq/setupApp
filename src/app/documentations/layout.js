import "./../globals.css";
import Header from "./../components/header";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="pb-32">
        <Header link="/" tag="Back" />
        <div className="max-w-3xl mx-auto mt-32">{children}</div>
      </body>
    </html>
  );
}
