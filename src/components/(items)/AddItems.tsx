import React from "react";
import { database } from "@/db/database";
import { items as itemsSchema } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { SignedIn, SignedOut } from "@/components/auth";
import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AddItemsForm = async () => {
  const session = await auth();
  if (!session) return null;
  if (!session.user) return null;

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>
          <h1 className="text-4xl font bold">Post an item to sell</h1>
        </CardTitle>
        <CardDescription>Start the bidding today!</CardDescription>
      </CardHeader>
      <CardContent>
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
          <div className="flex flex-col gap-4">
            <Input name="name" placeholder="Name your item" />
            <Button variant="primary" type="submit">
              Post Item
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddItemsForm;
