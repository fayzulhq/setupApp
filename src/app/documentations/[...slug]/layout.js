import './../../globals.css'
import Header from '@/app/components/header';
import { ContactUs } from '@/app/components/Contact';

export const metadata = {
  title: 'Tech',
}
export default function Layout({ children }) {
  return (
  <>
    <Header link="/documentations" tag="Back slug"/>
    <div className="max-w-3xl mx-auto my-24">{children}
    </div>
    <ContactUs/>
  </>
  );
}
