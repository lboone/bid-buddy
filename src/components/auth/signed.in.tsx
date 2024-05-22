import React, {use} from 'react'
import { auth } from "@/auth"

interface SignedInProps {
  children: React.ReactNode
}

export const SignedIn =  ({ children }: SignedInProps) => {
   const signedIn = use(isSignedIn())

  if(!signedIn) return <></>
  return (
    <>
    {children}
    </>
  )
}

const isSignedIn = async () => {
  const session = await auth();
  return !!session?.user
}
