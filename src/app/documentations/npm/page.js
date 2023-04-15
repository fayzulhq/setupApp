import React from 'react'
import TitleSection from '@/app/components/TitleSection'
import ParagraphSection from '@/app/components/ParagraphSection'

const SetupNpm = () => {
  return (
    <div>
      <TitleSection text='NPM'/>
      <ParagraphSection text="The NPM – Node Package Manager is the default package manager for NodeJs. Basically, NodeJs is a JavaScript runtime environment, allowing developers to develop the scalable application in a given time."/>

      <ParagraphSection text='NPM allows open-source web developers to share and borrow packages for app development. Also, it works as a command-line utility for the application for installing packages in the project, dependency management, and even version management.'/>
    </div>

  )
}

export default SetupNpm