'use client'
import Style from './personalData.module.css'
import Typewriter from 'typewriter-effect'

export function PersonalData (): JSX.Element {
  return (
    <div>
      <span>Hi, I&apos;m</span>
      <h1>Juan Castañeda</h1>
      <h2><Typewriter
        options={{
          strings: ['Senior Software Developer', 'Video Game Developer Enthusiast', 'King Of The Meerkats'],
          autoStart: true,
          loop: true,
          delay: 25,
          deleteSpeed: 25
        }}
      /></h2>
      <p>a.k.a <a href="https://twitter.com/PejeDev">PejeDev</a></p>
      <p className={Style.glassFrame}>
        I&apos;m a Senior Software Developer based in Bogota, Colombia. <br />
        I&apos;m currently working at&nbsp;
        <a href="https://www.9ncr.com/">9North</a> as a Senior Frontend Developer.
        <br />
        Also at my free time slaying some bugs and adding new features to&nbsp;
        <a href="https://m-35.co/">M-35</a> as Main Video Game Developer.
      </p>
    </div>
  )
}
