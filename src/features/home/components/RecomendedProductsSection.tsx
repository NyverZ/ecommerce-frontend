"use client";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ProductsSortBy, useGetProducts } from "../api/getProducts";

export const RecomendedProductsSection = () => {
  const { data: products } = useGetProducts({
    input: {
      sortBy: ProductsSortBy.RECOMMENDED,
      limit: 6,
    },
  });

  return (
    <section className="w-full container mx-auto px-4 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Recomended Product </h2>
          <p className="text-muted-foreground text-sm">
            handpick products just for you
          </p>
        </div>

        <Link href="/products">
          <Button variant="ghost">
            View All
            <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category?.name}
              description={product.description}
              price={product.price}
              ImageUrl={product.imageUrl}
            />
          );
        })}
      </div>
    </section>
  );
};
