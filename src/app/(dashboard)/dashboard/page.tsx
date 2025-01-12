import { userInitialization } from '@/actions/user'
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const Dashboard = async (props: Props) => {
  const user = await userInitialization();

  if(user.status === 200 || user.status === 201){
    return redirect(`dashboard/${user.data?.clerkId}`)
  }

  return redirect(`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`)
}

export default Dashboard