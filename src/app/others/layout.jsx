import './../globals.css'
import { ContactUs } from '../components/Contact';

export const metadata = {
  title: 'Others',
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
