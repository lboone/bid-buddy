import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import ToolTipComponent from "../ToolTipComponent";
import { MailOpen } from "lucide-react";

export function SignInPostmarkButton() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("postmark", formData);
      }}
    >
      
        <ToolTipComponent
          props={{ content: "Sign in with Email Verification" }}
        >
          <div>
            <input type="text" name="email" placeholder="Email" />
            <Button type="submit" variant="primary" size="icon">
              <MailOpen className="size-5" />
            </Button>
          </div>
        </ToolTipComponent>
      
    </form>
  );
}
