import { GuitarIcon } from "lucide-react";

export default function NotFoundPage() {
	return (
		<div className="flex min-h-full flex-col bg-white pb-12 pt-16">
			<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
				<div className="flex flex-shrink-0 justify-center">
					<a href="#" className="inline-flex">
						<span className="sr-only">Timbrou</span>
            <GuitarIcon className="h-12 w-auto text-pure" />
					</a>
				</div>
				<div className="py-16">
					<div className="text-center">
						<p className="text-base font-semibold text-pure">404</p>
						<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							Page not found.
						</h1>
						<p className="mt-2 text-base text-gray-500">
							Sorry, we couldn’t find the page you’re looking for.
						</p>
						<div className="mt-6">
							<a
								href="#"
								className="text-base font-medium text-pure hover:text-indigo-500"
							>
								Go back home
								<span aria-hidden="true"> &rarr;</span>
							</a>
						</div>
					</div>
				</div>
			</main>
			<footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8">
				<nav className="flex justify-center space-x-4">
					<a
						href="#"
						className="text-sm font-medium text-gray-500 hover:text-gray-600"
					>
						Contact Support
					</a>
					<span
						aria-hidden="true"
						className="inline-block border-l border-gray-300"
					/>
					<a
						href="#"
						className="text-sm font-medium text-gray-500 hover:text-gray-600"
					>
						Status
					</a>
				</nav>
			</footer>
		</div>
	);
}
