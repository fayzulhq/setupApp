import TitleSection from '@/app/components/TitleSection'
import ParagraphSection from '@/app/components/ParagraphSection'
import Image from 'next/image'

const SetupNpm = () => {
  return (
    <div className='px-10'>
      <TitleSection text='ReactJs + TailwindCSS'/>
      <ParagraphSection text="Hey there, bro! So, have you heard about ReactJS and TailwindCSS? Well, ReactJS is a JavaScript framework that makes frontend coding super cool! You can create dynamic, fast, and awesome UI components. And then, there's TailwindCSS, which is like fuel for your ReactJS engine. It's a CSS library that provides a collection of cool classes to style your web pages to the max!.Don't miss out on the super cool and trendy vibes they bring to your web projects, bro! 🚀🎉" className='py-5'/>

      <TitleSection text='Why should you use ReactJS and TailwindCSS?' className='mt-10 mb-5'/>
        <ParagraphSection text=' > Fast performance'/>
        <ParagraphSection text=' > Sleek design'/>
        <ParagraphSection text=' > Easy to use'/>
        <ParagraphSection text=' > Large community'/>
        <ParagraphSection text=' > Customizable'/>
      
      <ParagraphSection text=' In summary, TailwindCSS offers fast performance, sleek design, ease of use, a large community, and customization options, making it a popular choice for modern web development. 💨🎨💻🌐🔧' className='py-5'/>

      <TitleSection text='How to Setup ReactJS + TailwindCSS with CRA? ' className='my-5'/>

      <ParagraphSection text='Btw, CRA stands with create-react-app' className='my-5'/>

      <TitleSection text='Step-1 : Download and Install Node.js' className='text-xl mt-5 mb-3'/>
      
      <p className='text-md leading-6 text-slate-400'>Make sure you have Node.js and npm (Node Package Manager) installed on your computer. You can download and install them from the official Node.js
      <a href='https://nodejs.org/' target="_blank" className='text-white text-md'> official Node.js</a> page.
      </p>

      <Image className='my-10 rounded-md border border-slate-800' src='/versionnpm.png' layout='responsive' width={100} height={100} alt='npm-install'/>

      <TitleSection text='Step-2 : Create a New React Project' className='text-xl mt-10 mb-3'/>
      <ParagraphSection text="Open your terminal and run the following command to create a new React project using Create React App:"  className='mb-5'/>

      <Image src='/rt1.png' layout='responsive' width={100} height={100} className='my-10 rounded-md border border-slate-8'/>

      <ParagraphSection text='This will create a new React project in a folder called "my-react-app". You can replace "my-react-app" with the name of your project.' className='mb-5'/>


      <TitleSection text='Step-3 : Install TailwindCSS' className='text-xl mt-10 mb-3'/>
      <ParagraphSection text='Next, navigate to the root folder of your React project by running the following command:' className='my-5'/>

      <Image src='/rt2.png' className='mb-5 rounded-md border border-slate-8' layout='responsive' width={100} height={100} alt='cra-install'/>

      <ParagraphSection text="Then, install TailwindCSS as a development dependency using npm:" className='mb-5'/>

      <Image src='/rt3.png' className='my-5 rounded-md border border-slate-8' layout='responsive' width={100} height={100} alt='cra-install'/>

      <TitleSection text='Step 4: Create a TailwindCSS Configuration File' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="After installing TailwindCSS, you need to create a configuration file. Run the following command in your project's root folder:" className='mb-5'/>

      <Image src='/rt4.png' className='my-5 rounded-md border border-slate-8' layout='responsive' width={100} height={100} alt='cra-install'/>
      
      <ParagraphSection text="This will generate a tailwind.config.js file in your project's root folder." className='mb-5'/>
      

      {/*  */}
      <TitleSection text='Step 5: Configure TailwindCSS' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="Open the tailwind.config.js file and configure your styles according to your preferences. You can define your own colors, fonts, spacing, and more in this file" className='mb-5'/>

      {/*  */}
      <TitleSection text='Step 6: Import TailwindCSS into your CSS' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="Next, you need to import TailwindCSS styles into your project's CSS file. Create a new CSS file (e.g., styles.css) in your project's src folder, and import TailwindCSS by adding the following line at the top of the file:" className='mb-5'/>

      <Image src='/rt5.png' className='my-5 rounded-md border border-slate-8' layout='responsive' width={100} height={100} alt='cra-install'/>
      
      {/*  */}
      <TitleSection text='Step 7: Add CSS File to Your Project' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="Now, you need to add the CSS file to your project. Open the src/index.js file in your project, and import the CSS file by adding the following line at the top of the file:" className='mb-5'/>

      <Image src='/rt6.png' className='my-5 rounded-md border border-slate-8' layout='responsive' width={100} height={100} alt='cra-install'/>

      {/*  */}
      <TitleSection text="Step 8: Start the Development Server" className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="Finally, you can start the development server by running the following command in your project's root folder:" className='pb-5'/>

      <Image src='/rt7.png' className='my-5 rounded-md border border-slate-8' layout='responsive' width={100} height={100} alt='cra-install'/>

      <ParagraphSection text="This will launch your React app with TailwindCSS styles applied!And there you have it, bro! You've successfully set up a project with ReactJS and TailwindCSS. Now you're ready to create amazing web pages with cool UI components and stylish designs. Happy coding, and keep rocking the web development world! 🚀🎉" className='pb-5'/>

    </div>
  )
}

export default SetupNpm