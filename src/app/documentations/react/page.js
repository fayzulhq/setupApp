import React from 'react'
import TitleSection from '@/app/components/TitleSection'
import ParagraphSection from '@/app/components/ParagraphSection'
import Image from 'next/image'

// text-sm leading-6 text-slate-500
const SetupNpm = () => {
  return (
    <div className='px-10'>
      <TitleSection text='React'/>
      <ParagraphSection text="npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well." className='py-5'/>

      <ParagraphSection text='npm consists of three distinct components :'/>
      
        <ParagraphSection text=' > the website'/>
        <ParagraphSection text=' > the Command Line Interface (CLI)'/>
        <ParagraphSection text=' > the registry'/>

      <ParagraphSection text='Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.' className='pt-5 pb-10'/>


      <TitleSection text='Use NPM to' className='mb-5'/>
        <ParagraphSection text=' > Adapt packages of code for your apps, or incorporate packages as they are.'/>
        <ParagraphSection text=' > Download standalone tools you can use right away.'/>
        <ParagraphSection text=' > Run packages without downloading using npx.'/>
        <ParagraphSection text=' > Share code with any npm user, anywhere.'/>
        <ParagraphSection text=' > Restrict code to specific developers.'/>
        <ParagraphSection text=' > Create organizations to coordinate package maintenance, coding, and developers.'/>
        <ParagraphSection text=' > Form virtual teams by using organizations.'/>
        <ParagraphSection text=' > Manage multiple versions of code and code dependencies.'/>
        <ParagraphSection text=' > Update applications easily when underlying code is updated.'/>
        <ParagraphSection text=' > Discover multiple ways to solve the same puzzle.'/>
        <ParagraphSection text=' > Find other developers who are working on similar problems and projects.'/>

      <TitleSection text='Prerequisites' className='mt-10 mb-5'/>
        <ParagraphSection text=' > RAM 4GB'/>
        <ParagraphSection text=' > CPU Intel Core i3TM i3 HQ CPU @2.50 GHz'/>
        <ParagraphSection text=' > ROM 256 GB'/>

      <TitleSection text='How to Install NPM' className='mt-10 mb-5' />
      <ParagraphSection text='Do you want to develop cool JavaScript applications? Make sure you have Node.js and npm installed on your computer. When you download and install Node.js, npm will be included as part of the Node.js installation package and will be automatically installed on your computer. Therefore, you will be able to use npm right away to manage JavaScript packages in your projects after installing Node.js.'/>

      <TitleSection text='Step-1 : Download and Install Node.js' className='text-xl mt-5 mb-3'/>
      
      <p className='text-md leading-6 text-slate-400'>
      Download the Windows Installer from NodeJs official website. Make sure you have downloaded the latest version of NodeJs. It includes the NPM package manager.The LTS (Long-term Support) version is highly recommended for you. After the download of the installer package, install it with a double-click on it.<br/><br/>
      For more clarity, please visit the official <a href='https://nodejs.org/en/download' className='text-white'>Node.js</a> website.
      </p>
      <Image className='my-5' src='/npm1.png' layout='responsive' width={100} height={100} alt='npm-install'/>

      <TitleSection text='Step-2 : Verify Node.js Installation' className='text-xl mt-10 mb-3'/>
      <ParagraphSection text='After Node.js installation is complete, open a terminal or command prompt and type the command/terminal node -v. If you see the version number of Node.js displayed, it means Node.js has been successfully installed on your computer.' className='mb-5'/>

      <p className='inline text-md leading-6 text-slate-400'>For Node  </p>
      <code className='bg-slate-400 ml-4 px-6 py-1 rounded-md inline-block'>node -v</code>
      <br/>
      <p className='inline text-md leading-6 text-slate-400 '>For npm  </p>
      <code className='bg-slate-400 ml-6 px-6 py-1 rounded-md inline-block mt-7'>npm -v</code>
      <Image className='my-10' src='/versionnpm.png' layout='responsive' width={100} height={100} alt='npm-install'/>
      <ParagraphSection text='In my case, the version of node.js is v18.12.1 and npm is 8.19.2.'/>
    </div>

  )
}

export default SetupNpm