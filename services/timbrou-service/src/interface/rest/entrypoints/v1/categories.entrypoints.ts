import { logger } from "@/adapters/logger";
import { CreateCategory } from "@/features/category/create-category";
import { ListCategories } from "@/features/category/list-categories";
import { UpdateCategory } from "@/features/category/update-category";
import { type Context, Hono } from "hono";

function CategoriesEntrypointsFactory() {
	async function listCategories(context: Context) {
		const performance = logger.performance("get /v1/categories");
		performance.start();
		const [error, categories] = await ListCategories({
      filters: {
        limit: 10,
        page: 1,
      }
    });
		performance.finish();
		if (!categories) {
			return context.json(error, { status: error.code ?? 500 });
		}

		return context.json(categories, { status: 200 });
	}

	async function createCategory(context: Context) {
		const performance = logger.performance("get /v1/categories");
		performance.start();
    const data = await context.req.json()
		const [error, category] = await CreateCategory(data);
		performance.finish();
		if (!category) {
			return context.json(error, { status: error.code ?? 500 });
		}

		return context.json(category, { status: 200 });
	}

	async function updateCategory(context: Context) {
    const id = context.req.param('id')
		const performance = logger.performance(`put /v1/categories/${id}`);
		performance.start();
    const data = await context.req.json()
		const [error, category] = await UpdateCategory({ id, data });
		performance.finish();
		if (!category) {
			return context.json(error, { status: error.code ?? 500 });
		}

		return context.json(category, { status: 200 });
	}

	function routes() {
		const categories = new Hono();

		categories.get("/", listCategories);
		categories.post("/", createCategory);
		categories.put("/:id", updateCategory);

		return categories;
	}

	return {
		routes,
	};
}

export const CategoriesEntrypoints = CategoriesEntrypointsFactory();
