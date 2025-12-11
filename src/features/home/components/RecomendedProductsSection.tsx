import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const mockProducts = [
  {
    id: "1",
    name: "product 1",
    category: "category 1",
    description: "Description 1",
    price: 200000,
  },
  {
    id: "2",
    name: "product 2",
    category: "category 2",
    description: "Description 2",
    price: 300000,
  },
  {
    id: "3",
    name: "product 3",
    category: "category 3",
    description: "Description 3",
    price: 400000,
  },
  {
    id: "4",
    name: "product 4",
    category: "category 4",
    description: "Description 4",
    price: 500000,
  },
  {
    id: "5",
    name: "product 5",
    category: "category 5",
    description: "Description 5",
    price: 600000,
  },
];
export const RecomendedProductsSection = () => {
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
        {mockProducts.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};
