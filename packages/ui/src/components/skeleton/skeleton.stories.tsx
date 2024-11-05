import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
	title: "Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	args: {
		className: "w-32 h-8",
	},
};

export const Square: Story = {
	args: {
		className: "size-24",
	},
};

export const Circle: Story = {
	args: {
		className: "w-24 h-24 rounded-full",
	},
};
