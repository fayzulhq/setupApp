import IconSection from "./components/iconSection";
import Content from "./components/content";
import Header from "./components/header";
import { ContactUs } from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Header tag="Quick" link="/" />
      <main className="flex min-h-screen flex-col justify-start items-center p-24">
        <h1 className="lg:text-[72px] text-4xl font-semibold my-24 text-center">
          Quick SetUp !!
        </h1>

        <IconSection />
        <div className="lg:mt-64 mt-32 ">
          <Content />
        </div>
      </main>
      <ContactUs/>
    </div>
  );
}
