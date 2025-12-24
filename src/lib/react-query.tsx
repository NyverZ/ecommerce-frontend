import {
  type UseMutationOptions,
  type DefaultOptions,
} from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
  },
} satisfies DefaultOptions;

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

export type MultilationConfig<
  MultilationFnType extends (...args: any) => Promise<any>
> = UseMutationOptions<
  ApiFnReturnType<MultilationFnType>,
  Error,
  Parameters<MultilationFnType>[0]
>;