"use client"
import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import useApi from "../hooks/useApi"
import { PRODUCTS_INITIAL_STATE } from "../constants/contexts";
import type { ProductsContextType } from "../types"
import  { type Product, FilterProducts } from "@gstore/core"

export const ProductsContext = createContext<ProductsContextType>(PRODUCTS_INITIAL_STATE)

export function ProductsContextProvider({ children}:{ children: React.ReactNode}) {
  const { httpGet } = useApi()
  const [search, setSearch] = useState<string>("")
  const [products, setProducts] = useState<Product[]>([])

  const loadProducts = useCallback(async () => {
    const products = await httpGet("/products")
    setProducts(products ?? [])
  }, [httpGet])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  const getProducts = useMemo(() => {
    if (!search) return products
    return new FilterProducts().execute(search, products)
  }, [products, search])

  return (
    <ProductsContext.Provider
      value={{
        search,
        product: getProducts,
        setSearch,
        productById: (id: number) =>
          products.find((prod) => prod.id === id) ?? null
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
