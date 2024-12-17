import React from 'react'
import Link from 'next/link'




const Logo = () => {
  return (
    <div className='flex item-center'>
  
      <Link href="/">
      
          <svg fill="none" height="48" viewBox="0 0 40 48" width="40" xmlns="http://www.w3.org/2000/svg">
            <path d="m0 14.5264v18.9473l17.8947-12.2437v-18.94741z" fill="#6938ef" opacity=".5"/>
            <path d="m0 33.4737v-18.9474l17.8947 12.2438v18.9474z" fill="#1570ef" opacity=".5"/>
            <path d="m40 14.5263v18.9474l-17.8947-12.2438v-18.94737z" fill="#6938ef" opacity=".5"/>
            <path d="m40 33.4737v-18.9474l-17.8947 12.2438v18.9474z" fill="#1570ef" opacity=".5"/>
          </svg>
        
      </Link>
    <h2 className="ml-4 text-5xl font-serif">DOCUFY</h2>
    </div>
  )
}

export default Logo
