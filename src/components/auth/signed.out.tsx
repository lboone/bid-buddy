import React, {use} from 'react'
import { auth } from "@/auth"

interface SignedOutProps {
  children: React.ReactNode
}

export const SignedOut =  ({ children }: SignedOutProps) => {
   const signedOut = use(isSignedOut())

  if(!signedOut) return <></>
  return (
    <>
    {children}
    </>
  )
}

const isSignedOut = async () => {
  const session = await auth();
  return !!session?.user === false
}