import Image from "next/image";
import { database } from "@/db/database";
import { items as itemsSchema } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import {
  SignInGithubButton,
  UserAvatar,
  SignedIn,
  SignedOut,
} from "@/components/auth";
import { auth } from "@/auth";

export default async function Home() {
  const allItems = await database.query.items.findMany();

  const session = await auth();
  if(!session) return null;
  if(!session.user) return null;

  return (
    <main className="container mx-auto py-12">
      <SignedOut>
        <div>
          <SignInGithubButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="m-4">
          <UserAvatar />
        </div>
      </SignedIn>
      <form
        action={async (formData: FormData) => {
          "use server";
          //const bid = formData.get("bid") as string;
          await database.insert(itemsSchema).values({
            name: formData.get("name") as string,
            userId: session?.user?.id!, 
          });
          revalidatePath("/");
        }}
      >
        <Input name="name" placeholder="Name your item" />
        <Button type="submit">Post Item</Button>
      </form>
      {allItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </main>
  );
}
