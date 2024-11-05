import type { Decorator, Preview } from "@storybook/react";
import * as React from "react";

import "../src/themes/default.css";

const preview: Preview = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
			expanded: true,
		},
	},
};

export const decorators: Decorator[] = [
	(Story) => {
		return (
			<div className="flex justify-center">
				<Story />
			</div>
		);
	},
];

export default preview;
