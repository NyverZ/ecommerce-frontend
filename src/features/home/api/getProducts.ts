import { axiosInstance } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import { useQuery, queryOptions } from "@tanstack/react-query";

 export enum ProductsSortBy {
  RECOMMENDED = "recommended",
}

type GetProductsInput = {
  sortBy?: ProductsSortBy;
  limit?: number;
};

type GetProductsResponse = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category?: {
    name: string;
  } | null;
}[];

export const getProducts = async (input: GetProductsInput) => {
  const response = await axiosInstance.get<GetProductsResponse>("/products", {
    params: input,
  });
  return response.data;
};

export const getProductsQueryKey = () => ["products"];
export const getProductsQueryOptions = (input: GetProductsInput) => {
  return queryOptions({
    queryKey: getProductsQueryKey(),
    queryFn: () => getProducts(input),
  });
};
type useGetProductsParams = {
  queryConfig?: QueryConfig<typeof getProducts>;
  input?: GetProductsInput;
};
export const useGetProducts = ({
  queryConfig,
  input,
}: useGetProductsParams = {}) => {
  return useQuery({
    ...getProductsQueryOptions(input ?? {}),
    ...queryConfig,
  });
};
