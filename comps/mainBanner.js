import Image from 'next/image'
import React from 'react'
import hero from '../public/notice.jpeg'

export default function mainBanner() {
    return (
        <div><Image className="max-higth" src={hero} alt="mainbanner" /></div>
    )
}
