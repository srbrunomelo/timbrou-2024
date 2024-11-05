import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	tags: ["autodocs"],
	args: {
		children: "Button",
	},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		variant: "default",
		children: "Button",
	},
};
export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Button",
	},
};
export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Button",
	},
};
export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Button",
	},
};
export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Button",
	},
};
export const Link: Story = {
	args: {
		variant: "link",
		children: "Button",
	},
};
