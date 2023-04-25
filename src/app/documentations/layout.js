import './../globals.css'
import Header from "./../components/header";
import { ContactUs } from '../components/Contact';

export const metadata = {
  title: 'Tech',
}
export default function Layout({ children }) {
  return (
  <>
    <div className="max-w-3xl mx-auto my-7">
      {children}
    </div>
    <ContactUs/>
  </>
  );
}
