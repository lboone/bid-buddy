import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { Tooltip } from "@radix-ui/react-tooltip"
import { Github } from "lucide-react"
import ToolTipComponent from "../ToolTipComponent"
 
export function SignInGithubButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <ToolTipComponent props={{ content: "Sign in with Github" }}>
        <Button type="submit" variant="primary" size="icon"><Github className="size-5" /></Button>
      </ToolTipComponent>
        

      
    </form>
  )
} 