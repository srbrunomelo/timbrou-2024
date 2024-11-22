"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";

const frequencies = [
	{ value: "monthly", label: "Monthly", priceSuffix: "/month" },
	{ value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
	{
		name: "Hobby",
		id: "tier-hobby",
		href: "#",
		price: { monthly: "$19", annually: "$199" },
		description: "The essentials to provide your best work for clients.",
		features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
		mostPopular: false,
	},
	{
		name: "Freelancer",
		id: "tier-freelancer",
		href: "#",
		price: { monthly: "$29", annually: "$299" },
		description: "The essentials to provide your best work for clients.",
		features: [
			"5 products",
			"Up to 1,000 subscribers",
			"Basic analytics",
			"48-hour support response time",
		],
		mostPopular: false,
	},
	{
		name: "Startup",
		id: "tier-startup",
		href: "#",
		price: { monthly: "$59", annually: "$599" },
		description: "A plan that scales with your rapidly growing business.",
		features: [
			"25 products",
			"Up to 10,000 subscribers",
			"Advanced analytics",
			"24-hour support response time",
			"Marketing automations",
		],
		mostPopular: true,
	},
	{
		name: "Enterprise",
		id: "tier-enterprise",
		href: "#",
		price: { monthly: "$99", annually: "$999" },
		description: "Dedicated support and infrastructure for your company.",
		features: [
			"Unlimited products",
			"Unlimited subscribers",
			"Advanced analytics",
			"1-hour, dedicated support response time",
			"Marketing automations",
			"Custom reporting tools",
		],
		mostPopular: false,
	},
];

function classNames(...classes: Array<string>) {
	return classes.filter(Boolean).join(" ");
}

export function FeaturedProducts() {
	const [frequency, setFrequency] = useState(frequencies[0]);

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
					<p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
						Pricing that grows with you
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
					Choose an affordable plan that’s packed with the best features for
					engaging your audience, creating customer loyalty, and driving sales.
				</p>
				<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
					{tiers.map((tier) => (
						<div
							key={tier.id}
							className={classNames(
								tier.mostPopular
									? "ring-2 ring-indigo-600"
									: "ring-1 ring-gray-200",
								"rounded-3xl p-8",
							)}
						>
							<h3
								id={tier.id}
								className={classNames(
									tier.mostPopular ? "text-indigo-600" : "text-gray-900",
									"text-lg/8 font-semibold",
								)}
							>
								{tier.name}
							</h3>
							<p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
							<p className="mt-6 flex items-baseline gap-x-1">
								<span className="text-4xl font-semibold tracking-tight text-gray-900">
									{tier.price[frequency.value]}
								</span>
								<span className="text-sm/6 font-semibold text-gray-600">
									{frequency.priceSuffix}
								</span>
							</p>
							<a
								href={tier.href}
								aria-describedby={tier.id}
								className={classNames(
									tier.mostPopular
										? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
										: "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
									"mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
								)}
							>
								Buy plan
							</a>
							<ul
								role="list"
								className="mt-8 space-y-3 text-sm/6 text-gray-600"
							>
								{tier.features.map((feature) => (
									<li key={feature} className="flex gap-x-3">
										<CheckIcon
											aria-hidden="true"
											className="h-6 w-5 flex-none text-indigo-600"
										/>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
