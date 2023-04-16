import React from 'react'
import TitleSection from '@/app/components/TitleSection'
import ParagraphSection from '@/app/components/ParagraphSection'
import Image from 'next/image'

const SetupNpm = () => {
  return (
    <div className='px-10'>
      <TitleSection text='React'/>
      <ParagraphSection text="ReactJS is a simple, feature rich, component based JavaScript UI library. It can be used to develop small applications as well as big, complex applications. ReactJS provides minimal and solid feature set to kick-start a web application. React community compliments React library by providing large set of ready-made components to develop web application in a record time. React community also provides advanced concept like state management, routing, etc., on top of the React library." className='py-5'/>

      <ParagraphSection text='The salient features of React library are as follows −'/>
      
        <ParagraphSection text=' > Solid base architecture'/>
        <ParagraphSection text=' > Extensible architecture'/>
        <ParagraphSection text=' > Component based library'/>
        <ParagraphSection text=' > JSX based design architecture'/>
        <ParagraphSection text=' > Declarative UI library
'/>

      <TitleSection text='Prerequisites' className='mt-10 mb-5'/>
        <ParagraphSection text=' > RAM 4GB'/>
        <ParagraphSection text=' > CPU Intel Core i3TM i3 HQ CPU @2.50 GHz'/>
        <ParagraphSection text=' > ROM 256 GB'/>

      <TitleSection text='How to Install ReactJS with CRA? ' className='my-5'/>

      <ParagraphSection text='This chapter explains the installation of React library and its related tools in your machine. Before moving to the installation, let us verify the prerequisite first.React provides CLI tools for the developer to fast forward the creation, development and deployment of the React based web application. React CLI tools depends on the Node.js and must be installed in your system. Hopefully, you have installed Node.js on your machine. We can check it using the below command −.'/>

      <ParagraphSection text='Btw, CRA stands with create-react-app' className='my-5'/>

      <TitleSection text='Step-1 : Download and Install Node.js' className='text-xl mt-5 mb-3'/>
      
      <p className='text-md leading-6 text-slate-400'>You can check how to install NodeJs and npm in 
      <a href='http://localhost:3001/documentations/npm' target="_blank" className='text-white text-md'>our</a> page.
      </p>

      <Image className='my-10' src='/versionnpm.png' layout='responsive' width={100} height={100} alt='npm-install'/>

      <TitleSection text='Step-2 : Open CLI or terminal' className='text-xl mt-10 mb-3'/>
      <ParagraphSection text="Once Node.js is installed, open your favorite terminal. Don't worry, the terminal is like a magic door to access the world of web development! Now, you can enter this command to install ReactJS:" className='mb-5'/>

      <ParagraphSection text='Open a command prompt and go to your workspace.'/>
      <code className='bg-slate-400 ml-4 px-6 py-1 rounded-md inline-block'>cd /go/to/your/workspace</code>
      <Image src='/go-file.png' layout='responsive' width={100} height={100}/>
      <ParagraphSection text='In my case by default my machine is in Ikbal (my username), because i want to make a React project in my specific directory."ject" is my folder that containing all my project, so I point my terminal to the folder where I will create the React project'/>
      <a href='https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/' target="_blank" className='text-white text-md'>Check this page for basic CLI and terminal<a/>
    





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