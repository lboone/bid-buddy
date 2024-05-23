import React from 'react'
import { database } from "@/db/database";
import ItemCard from './ItemCard';

const ListItems = async() => {
    const allItems = await database.query.items.findMany();
  return (
    <div className="mt-6 space-y-5">
        <h1 className="text-2xl font-bold">Items for Sale</h1>
    <div className="grid grid-cols-4 gap-4">
        {allItems.map((item) => (
        <ItemCard item={item} />
      ))}
    </div>
    </div>
  )
}

export default ListItems