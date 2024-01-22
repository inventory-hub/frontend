import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductFiltersState = {
  category?: string;
};

type ProductFiltersActions = {
  setCategory: (category: string) => void;
};

type ProductFiltersStore = ProductFiltersState & ProductFiltersActions;

export const useProductsFiltersStore = create<ProductFiltersStore>()(
  persist(
    (set) => ({
      category: undefined,
      setCategory: (category) => set({ category }),
    }),
    { name: "product-filters" }
  )
);
