import Product from "./Product";

export default class FilterProducts {
  execute(search: string, product: Product[]): Product[] {
    const terms = search.toLowerCase().split(" ");
    return product.filter((product) => {
      const text = `
                ${product.name}
                ${product.description}
                ${Object.values(product.specifications).join(" ")}
                ${product.tradeMark}
            `.toLowerCase();
      return terms.every((term) => text.includes(term));
    });
  }
}
