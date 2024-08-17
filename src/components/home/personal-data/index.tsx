'use client'
import { Link } from '@nextui-org/link'
import { Card, CardBody } from '@nextui-org/react'
import Typewriter from 'typewriter-effect'

export function PersonalData(): JSX.Element {
  return (
    <div>
      <span>Hi, I&apos;m</span>
      <h1>Juan Castañeda</h1>
      <span>
        <Typewriter
          options={{
            strings: [
              'AI/ML Software Engineer L3',
              'Video Game Developer Enthusiast',
              'King Of Mice',
            ],
            autoStart: true,
            loop: true,
            delay: 25,
            deleteSpeed: 25,
          }}
        />
      </span>
      <p>
        a.k.a{' '}
        <Link
          title="@PejeDev Twitter profile"
          href="https://twitter.com/PejeDev"
        >
          PejeDev
        </Link>
      </p>
      <Card shadow="sm">
        <CardBody>
          <p>
            I&apos;m a Developer based in Bogota, Colombia. <br />
            I&apos;m currently working at&nbsp;
            <Link title="Twilio Homepage" href="https://www.twilio.com/">
              Twilio&nbsp;
            </Link>
            as a AI/ML Software Engineer L3.
            <br />
            Also at my free time slaying some bugs and adding new features
            to&nbsp;
            <Link title="M-35 Videogame Webpage" href="https://m-35.co/">
              M-35
            </Link>{' '}
            as Main Video Game Developer.
          </p>
        </CardBody>
      </Card>
    </div>
  )
}
