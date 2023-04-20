import "./../globals.css";
import Header from "./../components/header";
import { ContactUs } from "../components/Contact";

export const metadata = {
  title: 'Tech',
}
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header link="/" tag="Back"/>
        <div className="max-w-3xl mx-auto my-24">{children}
        </div>
      </body>
    </html>
  );
}
