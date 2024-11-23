import { logger } from "@/adapters/logger";
import { CreateProduct } from "@/features/product/create-product";
import { ListProducts } from "@/features/product/list-products";
import { UpdateProduct } from "@/features/product/update-product";
import { type Context, Hono } from "hono";
import { validator } from "../../body-validator";
import { ProductCreateSchema } from "@/entities/product";

function ProductsEntrypointsFactory() {
	async function listProducts(context: Context) {
		const performance = logger.performance("get /v1/products");
		performance.start();
		const [error, products] = await ListProducts({
      filters: {
        limit: 10,
        page: 1,
      }
    });
		performance.finish();
		if (!products) {
			return context.json(error, { status: error.code ?? 500 });
		}

		return context.json(products, { status: 200 });
	}

	async function createProduct(context: Context) {
		const performance = logger.performance("get /v1/products");
		performance.start();
    const data = await context.req.json()
		const [error, product] = await CreateProduct(data);
		performance.finish();
		if (!product) {
			return context.json(error, { status: error.code ?? 500 });
		}

		return context.json(product, { status: 200 });
	}

	async function updateProduct(context: Context) {
    const id = context.req.param('id')
		const performance = logger.performance(`put /v1/products/${id}`);
		performance.start();
    const data = await context.req.json()
		const [error, product] = await UpdateProduct({ id, data });
		performance.finish();
		if (!product) {
			return context.json(error, { status: error.code ?? 500 });
		}

		return context.json(product, { status: 200 });
	}

	function routes() {
		const products = new Hono();

		products.get("/", listProducts);
		products.post("/", validator(ProductCreateSchema), createProduct);
		products.put("/:id", updateProduct);

		return products;
	}

	return {
		routes,
	};
}

export const ProductsEntrypoints = ProductsEntrypointsFactory();
