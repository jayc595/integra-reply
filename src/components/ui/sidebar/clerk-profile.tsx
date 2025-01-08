import { ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import Loader from '../loader'
import { Button } from '../button'
import { User } from 'lucide-react'

type Props = {}

const ClerkUserProfile = (props: Props) => {
  return (
    <>
        <ClerkLoading>
            {/* <Loader loading>
                <></>
            </Loader> */}
            <SignedOut>
                <SignInButton>
                    <Button className='rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70'>
                        <User/>
                        Login
                    </Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton>
                    <UserButton.UserProfileLink
                        label='Dashboard'
                        url={`dashboard`}
                        labelIcon={<User size={16}/>}
                    />
                </UserButton>
            </SignedIn>
        </ClerkLoading>
    </>
  )
}

export default ClerkUserProfile