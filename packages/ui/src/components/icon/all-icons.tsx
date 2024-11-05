import React from "react";

export const AllIcons = {
	"chevron-down": React.lazy(() => import("./icons/chevron-down")),
	"chevron-left": React.lazy(() => import("./icons/chevron-left")),
};

export type IconName = keyof typeof AllIcons;
