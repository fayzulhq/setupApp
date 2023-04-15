import IconSection from "./components/iconSection";
import Content from "./components/content";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center p-24">

      <h1 className="xl:text-[72px] text-4xl font-semibold my-24 ">
        Quick SetUp !!
      </h1>

     <IconSection />
     <div className="mx-auto mt-64">
        <Content/>
     </div>
    </main>
  );
}
