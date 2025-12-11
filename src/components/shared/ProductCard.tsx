"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { toRupiah } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

const placeholderImageUrl =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type ProductCardPage = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  ImageUrl?: string;
};
export const ProductCard = (props: ProductCardPage) => {
  const handleAddToCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("add to products");
  };
  return (
    <Link href={`/products/${props.id}`}>
      <div className="rounded-xl border flex flex-col gap-4 aspect-4/3 overflow-clip">
        <div className="relative w-full h-full ">
          <Image
            src={placeholderImageUrl}
            unoptimized
            fill
            className="object-cover"
            alt="product Image"
          />
        </div>
        <div className="flex flex-col gap-4 p-4">
          {/* Title and Category */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{props.category}</p>
            <h3 className="text-lg font-bold">{props.name}</h3>
          </div>

          {/* Short Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {props.category}
          </p>
          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">{toRupiah(props.price)}</p>
            <Button variant="default" onClick={handleAddToCard}>
              <ShoppingCartIcon className="size-4" />
              Add Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
