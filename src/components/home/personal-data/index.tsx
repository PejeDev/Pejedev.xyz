'use client'
import Link from 'next/link'
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
      <p>a.k.a <Link href="https://twitter.com/PejeDev">PejeDev</Link></p>
      <p className={Style.glassFrame}>
        I&apos;m a Senior Software Developer based in Bogota, Colombia. <br />
        I&apos;m currently working at&nbsp;
        <Link href="https://www.9ncr.com/">9North</Link> as a Senior Frontend Developer.
        <br />
        Also at my free time slaying some bugs and adding new features to&nbsp;
        <Link href="https://m-35.co/">M-35</Link> as Main Video Game Developer.
      </p>
    </div>
  )
}
