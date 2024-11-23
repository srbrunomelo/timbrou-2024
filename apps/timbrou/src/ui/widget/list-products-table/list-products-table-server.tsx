import { getProducts } from "@/data-access/product/get-products";
import { ListProductsTableClient } from "./list-products-table-client";

export async function ListProductsTableServer() {
	const products = await getProducts();
  console.log(products);
  

	return <ListProductsTableClient products={products} />;
}
