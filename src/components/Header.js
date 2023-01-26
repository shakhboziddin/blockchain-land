import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Link className="w-full h-[40px] fixed z-[9999] text-center flex items-center justify-center bg-[url('https://blockchain.land/assets/image/hero/header_note.webp')]"> 
        <h3 className='text-[13px] font-[500]'>For a limited time only: CITIZENSHIP IS FREE! Claim the Airdrop!</h3>
    </Link>
  )
}

export default Header