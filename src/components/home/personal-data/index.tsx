'use client'
import Style from './personal-data.module.css'
import Typewriter from 'typewriter-effect'

export function PersonalData (): JSX.Element {
  return (
    <div>
      <span>Hi, I&apos;m</span>
      <h1>Juan Castañeda</h1>
      <span><Typewriter
        options={{
          strings: ['Senior Software Developer', 'Video Game Developer Enthusiast', 'King Of The Meerkats'],
          autoStart: true,
          loop: true,
          delay: 25,
          deleteSpeed: 25
        }}
      /></span>
      <p>a.k.a <a title='@PejeDev Twitter profile' href="https://twitter.com/PejeDev">PejeDev</a></p>
      <p className={Style.glassFrame}>
        I&apos;m a Senior Software Developer based in Bogota, Colombia. <br />
        I&apos;m currently working at&nbsp;
        <a title='9North Webpage' href="https://www.9ncr.com/">9North</a> as a Senior Frontend Developer.
        <br />
        Also at my free time slaying some bugs and adding new features to&nbsp;
        <a title='M-35 Videogame Webpage' href="https://m-35.co/">M-35</a> as Main Video Game Developer.
      </p>
    </div>
  )
}
