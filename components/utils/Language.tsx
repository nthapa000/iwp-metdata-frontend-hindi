import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Language = () => {
  return (
    <Link href="https://iwp-metdata-frontend.vercel.app/" className="p-2">
    <Image src={"/global.png"} width={30} height={20} alt="IWF" />
  </Link>
  )
}

export default Language