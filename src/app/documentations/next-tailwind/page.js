import React from 'react'
import TitleSection from '@/app/components/TitleSection'
import ParagraphSection from '@/app/components/ParagraphSection'
import Image from 'next/image'

const SetupNpm = () => {
  return (
    <div className='px-10'>
      <TitleSection text='Next.Js 13 + TailwindCSS '/>

      <ParagraphSection text="Next.js is a popular framework for React-based web development that offers additional features to make web development easier and more efficient. It provides solutions to common problems like server-side rendering (SSR), static site generation (SSG), and routing, making websites smoother and improving performance.🚀🎨💻" className='py-5'/>

      <ParagraphSection text="One of the exciting features of Next.js is SSR, which makes web pages load faster by generating HTML and CSS before sending them to the browser. Additionally, SSG makes websites static and serves them quickly and securely." className='py-5'/>

      <ParagraphSection text="Moreover, Next.js has easy-to-use routing features, making website navigation smooth and user-friendly. It also has a large community ecosystem and comprehensive documentation, making learning a breeze." className='py-5'/>

      <TitleSection text='Why should you use Next.Js 13 and Tailwind?' className='mt-10 mb-5'/>
        <ParagraphSection text=' > Improved Developer Experience'/>
        <ParagraphSection text=' > EFaster Development'/>
        <ParagraphSection text=' > Better Performance'/>
        <ParagraphSection text=' > Modern and Scalable Solutions'/>
        <ParagraphSection text=' > Flexibility and Customization'/>
        <ParagraphSection text=' > Rich plugin ecosystem'/>
      
      <ParagraphSection text="In summary, Next.js and Tailwind CSS can be a powerful combination for building modern, performant, and customizable web applications with improved developer experience and faster development workflows. Whether you're building a small prototype or a large-scale application, Next.js and Tailwind CSS can provide the tools and features you need to create high-quality web experiences.💨🎨💻🌐" className='py-5'/>

      <TitleSection text='How to Setup Next.Js 13 + TailwindCSS ? ' className='my-5'/>

      {/* 1 */}
      <TitleSection text='Step-1 : Download and Install Node.js' className='text-xl mt-5 mb-3'/>
      
      <p className='text-md leading-6 text-slate-400'>Make sure you have Node.js and npm (Node Package Manager) installed on your computer. You can download and install them from the official Node.js
      <a href='https://nodejs.org/' target="_blank" className='text-white text-md'> official Node.js</a> page.
      </p>

      <Image className='my-10 rounded-md border border-slate-800' src='/versionnpm.png' layout='responsive' width={100} height={100} alt='npm-install'/>

      {/* 2 */}
      <TitleSection text='Step-2 : Create a New Next.Js Project' className='text-xl mt-10 mb-3'/>
      <ParagraphSection text="Open your terminal and run the following command to create a new next project using 'npx create-next-app ...':"  className='mb-5'/>

      <Image src='/nt1.png' layout='responsive' width={100} height={100} className='my-10 rounded-md border border-slate-800'/>


      {/* 3 */}
      <TitleSection text="Step 3: Configure your next project" className='text-xl mt-10 mb-3'/>
      <ParagraphSection text='After running the command above you will be asked a number of questions and answer according to your project needs, but because we want to use tailwindCSS as our framework, choosing to choose tailwindCSS (by answering Yes) is mandatory. The rest, such as using Eslint, typescript and others, can you adjust to your needs' className='my-5'/>

      <Image src='/nt2.png' className='mb-5 rounded-md border border-slate-800' layout='responsive' width={100} height={100} alt='cra-install'/>

      <ParagraphSection text="Then, wait a moment until a message like the following appears:" className='mb-5'/>

      <Image src='/nt3.png' className='my-5 rounded-md border border-slate-800' layout='responsive' width={100} height={100} alt='cra-install'/>

      {/* 4 */}
      <TitleSection text='Step-4: Run your project' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="As usual, if you want to see how your project looks, first enter your project and type the command 'npm run dev'" className='mb-5'/>

      <Image src='/nt4.png' className='my-5 rounded-md border border-slate-800' layout='responsive' width={100} height={100} alt='cra-install'/>
      
      {/* 5 */}
      <TitleSection text='Step 5: Visit your project' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="After going through the steps above you will be given the localhost address where your website lives, if you are curious about your website then please visit the url that has been given" className='mb-5'/>

      <Image src='/nt5.png' className='my-5 rounded-md border border-slate-800' layout='responsive' width={100} height={100} alt='cra-install'/>
      
      <ParagraphSection text="And that's it, bro! You're all set up with Next.Js and TailwindCSS. Now you can create stunning web apps with super fast development workflow and stylish UIs. Happy coding, man! 🚀🎨💻" className='pb-5'/>

    </div>
  )
}

export default SetupNpm