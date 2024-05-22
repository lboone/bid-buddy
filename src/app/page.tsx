import Image from "next/image";
import { database } from '@/db/database'
import { bids as bidsSchema } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { SignInGithubButton, SignOutButton, UserAvatar, SignedIn, SignedOut } from "@/components/auth";

export default async function Home() {
  const bids = await database.query.bids.findMany();

  return (
    <main className="container mx-auto py-12">
      <SignedOut>
      <SignInGithubButton />
      </SignedOut>
      <SignedIn>
        <div className="m-4"><UserAvatar /></div>
      </SignedIn>
      <form action={async (formData: FormData) => {
        'use server'
        const bid = formData.get('bid') as string
        await database.insert(bidsSchema).values({})
        revalidatePath("/")
      }}>
        <Input name="bid" placeholder="Bid" />
        <Button type="submit">Place Bid</Button>
      </form>
      {bids.map((bid) => (
        <div key={bid.id}>
          <p>{bid.id}</p>
        </div>
      ))}
      
    </main>
  );
}
