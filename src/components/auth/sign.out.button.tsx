import { signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import ToolTipComponent from "../ToolTipComponent"

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <ToolTipComponent props={{ content: "Sign out" }}>
        <Button type="submit" variant="primary" size="icon"><LogOut className="size-5" /></Button>
      </ToolTipComponent>
    </form>
  )
}