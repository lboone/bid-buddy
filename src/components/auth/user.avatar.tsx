import { auth } from "@/auth"
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import ToolTipComponent from "@/components/ToolTipComponent";
import { SignOutLink } from "@/components/auth";

export const UserAvatar = async () => {
    const session = await auth();

    if(!session?.user) return null

    const userName = session?.user?.name || ''
    const userEmail = session?.user?.email || ''

    const userCreds = (
      <div className="flex flex-col gap-2 justify-start">
        <div ><span className="text-amber-700 text-sm">name:</span> {userName}</div>
        <div ><span className="text-amber-700 text-sm">email:</span> {userEmail}</div>
        <hr />
        <SignOutLink />
      </div>
    )
  
  return (
    <div>
        {
            session?.user?.name 
            ? (<ToolTipComponent props={{content:<div>{userCreds}</div>}}><Image className="rounded-full" src={session?.user?.image || ''} alt="User Avatar" width={40} height={40} /></ToolTipComponent>)
            : (<ToolTipComponent props={{content:<>No Name</>}}><CircleUserRound className="mr-2 size-5" /></ToolTipComponent>)
        }
    </div>
  )
}