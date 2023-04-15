import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const data = [
  {
    title: "React JS",
    description:
      "ReactJS adalah sebuah libraly JavaScript untuk UI yang interaktif dan dinamis di dalam aplikasi web menggunakan konsep komponen.",
  },
  {
    title: "TailwindCSS",
    description:
      "Tailwind CSS adalah framework CSS yang digunakan untuk merancang antarmuka pengguna (UI) pada aplikasi web dengan menggunakan kelas utilitas khusus styling komponen",
  },
  {
    title: "Next JS",
    description:
      "Next.js adalah framework React JS sisi server untuk membangun aplikasi web yang cepat, efisien, dan SEO-friendly dengan fitur-fitur seperti prerendering, routing dinamis, serta dukungan untuk pengembangan frontend dan backend dalam satu tempat.",
  },
  {
    title: "Vite",
    description:
      "Vite adalah sebuah alat pengembangan web yang cepat dan ringan (bundler) untuk membangun aplikasi web modern. Ia menawarkan pengalaman pengembangan yang cepat dengan waktu pembuatan (build) yang efisien",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript adalah bahasa pemrograman yang merupakan super set dari JavaScript, yang menambahkan fitur-fitur tipe statis dan dukungan untuk pengembangan berbasis objek yang ditingkatkan.",
  },
];

const Learn = () => {
  return (
    <>
    <h1 className="text-3xl leading-6 mb-12 font-semibold">What are they ?</h1>
      <div className="grid md:grid-cols-2 grid-flow-row gap-10">
        {data.map(({ title, description }) => (
          <div key={title} className="border border-white px-8 py-4 rounded-lg  hover:bg-white/10">
            <h2 className={`${inter.className} mb-3 text-xl md:text-2xl font-semibold`}>
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
        ))}
      </div>
    </>
  );
};

export default Learn;
