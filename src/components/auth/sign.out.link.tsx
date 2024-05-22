import { signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export function SignOutLink() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      
        <Button type="submit" variant="link" className="justify-start p-0 hover:no-underline hover:text-amber-700 text-sm"><LogOut className="size-4 mr-2" />Sign Out</Button>
      
    </form>
  )
}