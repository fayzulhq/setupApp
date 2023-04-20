import TitleSection from '@/app/components/TitleSection'
import ParagraphSection from '@/app/components/ParagraphSection'
import Image from 'next/image'

const SetupNpm = () => {
  return (
    <div className='px-10'>
      <TitleSection text='ReactJs + TailwindCSS + vite'/>

      <ParagraphSection text="Eyy bro, listen up! Let me tell you about this wicked trio in web development: React, TailwindCSS, and Vite. They're like the ultimate squad that makes your web projects totally lit! 🚀🎨💻" className='py-5'/>

      <ParagraphSection text="So, React is this dope JavaScript library that lets you build interactive user interfaces with ease. It's all about reusable components that make your code clean and organized. You can create dynamic UIs that are smooth as butter, bro!" className='py-5'/>

      <ParagraphSection text="Then, we got TailwindCSS, which is like the swaggy stylist for your web pages. It's a super cool CSS library with a ton of pre-designed classes that you can use to style your web elements like a pro. You can customize your look and feel without breaking a sweat, man!" className='py-5'/>

      <ParagraphSection text="And last but not least, we got Vite, the speedy build tool that makes your development workflow fly! It's like the Ferrari of build tools, bro. It's super fast, super efficient, and makes your development experience smooth as silk. Say goodbye to slow build times, man!" className='py-5'/>

      <ParagraphSection text="When you combine React, TailwindCSS, and Vite, you're in for an epic web development experience. You can create web projects that are fast, stylish, and super fun to work on. It's the ultimate power trio that'll take your web dev game to the next level, bro! 🚀🔥💻" className='py-5'/>

      <TitleSection text='Why should you use Vite compare to CRA?' className='mt-10 mb-5'/>
        <ParagraphSection text=' > Lightning-fast'/>
        <ParagraphSection text=' > Easy-peasy config'/>
        <ParagraphSection text=' > Modular magic'/>
        <ParagraphSection text=' > Framework-friendly'/>
        <ParagraphSection text=' > Hot module replacement (HMR) awesomeness'/>
        <ParagraphSection text=' > Rich plugin ecosystem'/>
      
      <ParagraphSection text=' With these awesome benefits, Vite is a compelling choice for web developers who want a fast, efficient, and easy-to-configure development experience. Give it a try and unleash your web development superpowers with Vite! 💨🎨💻🌐🔧' className='py-5'/>

      <TitleSection text='How to Setup ReactJS + TailwindCSS with vite? ' className='my-5'/>

      {/* 1 */}
      <TitleSection text='Step-1 : Download and Install Node.js' className='text-xl mt-5 mb-3'/>
      
      <p className='text-md leading-6 text-slate-400'>Make sure you have Node.js and npm (Node Package Manager) installed on your computer. You can download and install them from the official Node.js
      <a href='https://nodejs.org/' target="_blank" className='text-white text-md'> official Node.js</a> page.
      </p>

      <Image className='my-10 rounded-md border border-slate-800' src='/versionnpm.png'  width={100} height={100} alt='npm-install'/>

      {/* 2 */}
      <TitleSection text='Step-2 : Create a New React Project' className='text-xl mt-10 mb-3'/>
      <ParagraphSection text="Open your terminal and run the following command to create a new React project using Create React App:"  className='mb-5'/>

      <Image src='/rt1.png'  width={100} height={100} className='my-10 rounded-md border border-slate-800'/>

      <ParagraphSection text='This will create a new React project in a folder called "my-react-app". You can replace "my-react-app" with the name of your project.' className='mb-5'/>

      {/* 3 */}
      <TitleSection text="Step 3: Install Vite as a Development Dependency" className='text-xl mt-10 mb-3'/>
      <ParagraphSection text='Next, navigate to the root folder of your React project by running the following command:' className='my-5'/>

      <Image src='/rt2.png' className='mb-5 rounded-md border border-slate-800'  width={100} height={100} alt='cra-install'/>

      <ParagraphSection text="Then, install Vite as a development dependency by running the following command:" className='mb-5'/>

      <Image src='/rv1.png' className='my-5 rounded-md border border-slate-800'  width={100} height={100} alt='cra-install'/>

      {/* 4 */}
      <TitleSection text='Step-4: Configure Vite for React' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="Create a vite.config.js file in the root of your project folder. Open the file and add the following configuration for React:" className='mb-5'/>

      <Image src='/rv2.png' className='my-5 rounded-md border border-slate-800'  width={100} height={100} alt='cra-install'/>
      
      {/* 5 */}
      <TitleSection text='Step 5: Install TailwindCSS' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="Next, install TailwindCSS as a dependency by running the following command:" className='mb-5'/>

      <Image src='/rv3.png' className='my-5 rounded-md border border-slate-800'  width={100} height={100} alt='cra-install'/>
      
      {/* 6 */}
      <TitleSection text='Step 6: Create a TailwindCSS Configuration File' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="Create a tailwind.config.js file in the root of your project folder by running:" className='mb-5'/>

      <Image src='/rv4.png' className='my-5 rounded-md border border-slate-800'  width={100} height={100} alt='cra-install'/>

      <ParagraphSection text="This will generate a default TailwindCSS configuration file." className='mb-5'/>
      
      {/* 7 */}
      <TitleSection text='Step 7: Import TailwindCSS into Your Project' className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="Open your project's main CSS file (usually src/index.css) and import TailwindCSS styles by adding the following line:" className='mb-5'/>

      <Image src='/rv5.png' className='my-5 rounded-md border border-slate-800'  width={100} height={100} alt='cra-install'/>

      {/* 8 */}
      <TitleSection text="Step 8: Add TailwindCSS Classes to Your Components" className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="You can now start using TailwindCSS classes in your React components to style your web pages. For example:" className='pb-5'/>

      <Image src='/rv6.png' className='my-5 rounded-md border border-slate-800'  width={100} height={100} alt='cra-install'/>

      {/* 9 */}
      <TitleSection text="Step 9: Start the Development Server" className='text-xl mt-10 mb-3'/>
      
      <ParagraphSection text="Finally, run the following command to start the Vite development server and see your React + TailwindCSS project in action:" className='pb-5'/>

      <Image src='/rv7.png' className='my-5 rounded-md border border-slate-800'  width={100} height={100} alt='cra-install'/>

      <ParagraphSection text="And that's it, bro! You're all set up with React, Vite, and TailwindCSS. Now you can create stunning web apps with super fast development workflow and stylish UIs. Happy coding, man! 🚀🎨💻" className='pb-5'/>

    </div>
  )
}

export default SetupNpm