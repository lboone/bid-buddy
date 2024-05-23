import AddItemsForm from "@/components/(items)/AddItems";
import ListItems from "@/components/(items)/ListItems";
import { List } from "lucide-react";

export default function Home() {

  return (
    <main className="container mx-auto py-12">
      <AddItemsForm />
      <ListItems />
    </main>
  );
}
