import "./../globals.css";
import Header from "./../components/header";


export const metadata = {
  title: 'Tech',
}
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header link="/" tag="Back"/>
        <div className="max-w-3xl mx-auto mt-32">{children}</div>
      </body>
    </html>
  );
}
