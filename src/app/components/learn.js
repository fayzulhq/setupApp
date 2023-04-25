import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const data = [
  {
    title: "NPM",
    description:
      " It is a software package manager that is used primarily for installing, managing, and sharing packages or libraries written in JavaScript for use in Node.js projects. ",
    link: "https://docs.npmjs.com/about-npm",
  },
  {
    title: "React JS",
    description:
      "ReactJS is like a magical toolbox for creating interactive and dynamic user interfaces in web applications using the power of components. It's like building with LEGO blocks to create web experiences that will blow your users' minds!",
    link: "https://legacy.reactjs.org/docs/getting-started.html",
  },
  {
    title: "TailwindCSS",
    description:
      "Tailwind CSS is like a styling superhero for web UI! It's a CSS framework that lets you design user interfaces for web apps using special utility classes, making your styling superpowers go through the roof!",
    link: "https://tailwindcss.com/docs/installation",
  },
  {
    title: "Next JS",
    description:
      "Next.js is React's speedy sidekick for building fast, SEO-friendly web apps with prerendering, dynamic routing, and combined frontend/backend development superpowers!",
    link: "https://nextjs.org/",
  },
  {
    title: "Vite",
    description:
      "Vite is like a speedy and lightweight web development tool (bundler) for building modern web applications. It offers a turbocharged development experience with lightning-fast build times that'll make your web development dreams come true!",
    link: "https://vitejs.dev/guide/",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript is like JavaScript on steroids! It's a programming language that adds some superpowers like static typing and enhanced support for object-oriented development to good ol' JavaScript.",
    link: 'https://www.typescriptlang.org/'
  },
];

const Learn = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl leading-6 mb-12 font-semibold">
        What are they ?
      </h1>
      <div className="grid md:grid-cols-2 grid-flow-row gap-5 md:gap-10">
        {data.map(({ title, description, link }) => (
          <Link key={title} href={link} target='_blank'>
            <div className="border border-gray-700 px-5 py-4 rounded-lg hover:bg-gray-800 hover:border-none h-56">
              <h2
                className={`${inter.className} mb-3 text-xl md:text-2xl font-semibold`}
              >
                {title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p
                className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
              >
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Learn;
