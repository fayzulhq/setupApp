import Image from "next/image";
import { Inter } from "next/font/google";
import CodeButton from "./components/code";
import IconSection from "./components/iconSection";
import Content from "./components/content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hidden lg:flex">
          Create by&nbsp;
          <code className="font-mono font-bold">Fayzulhq</code>
        </p>
      </div>

      <h1 className="xl:text-[72px] text-4xl font-semibold my-24 ">
        SetUp My Work!!
      </h1>

     <IconSection />
     <div className="bg-slate-500 mx-auto max-w-lg">
        <Content/>
     </div>
    </main>
  );
}
