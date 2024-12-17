import React from 'react';
import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import { Button } from "@/components/ui/button"


const Navbar = () => {
  return (
    <div className='my-2 mx-5 flex  justify-between item-center py-3'>
    <Logo/>
      <div>
        <SignedOut>
          <SignInButton><Button>Sign In</Button></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
