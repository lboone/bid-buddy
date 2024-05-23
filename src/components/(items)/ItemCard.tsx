import React from 'react'
import { items as itemsSchema } from "@/db/schema";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

interface ItemCardProps {
  item: any;
}
const ItemCard = ({item}: ItemCardProps) => {
  return (
        <Card key={item.id}>
      <CardHeader>
        <CardTitle>
          <h1 className="text-2xl font-bold">{item.name}</h1>
        </CardTitle>
        <CardDescription>{''}</CardDescription>
      </CardHeader>
      <CardContent>
        {''}
      </CardContent>
    </Card>
  )
}

export default ItemCard