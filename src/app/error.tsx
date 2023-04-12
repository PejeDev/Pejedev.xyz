'use client'
import Image from 'next/image'
import Style from './error.module.css'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error ({ error, reset }: ErrorProps): JSX.Element {
  return (
    <div className={Style['error-container']}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <Image src='/assets/500.svg' alt='Ghost' width={600} height={600} />
    </div>
  )
}
