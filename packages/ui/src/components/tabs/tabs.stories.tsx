import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./tabs";

const meta: Meta<typeof Tabs> = {
	title: "Tabs",
	component: Tabs,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	render: () => {
		const [active, setActive] = useState("tab1");
		return (
			<div className="flex flex-col gap-4">
				<Tabs active={active} onTabChange={setActive}>
					<Tabs.Header>
						<Tabs.Trigger identifier="tab1">Tab 1</Tabs.Trigger>
						<Tabs.Trigger identifier="tab2">Tab 2</Tabs.Trigger>
					</Tabs.Header>
					<Tabs.Content>
						<Tabs.Body identifier="tab1">Tab 1</Tabs.Body>
						<Tabs.Body identifier="tab2">Tab 2</Tabs.Body>
					</Tabs.Content>
				</Tabs>
			</div>
		);
	},
};
