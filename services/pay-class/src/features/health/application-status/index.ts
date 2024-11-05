import { right } from "@repo/utils/patterns/left-right";

export const ApplicationStatus = async (_params: void, ctx = {}) => {
	return right({
		status: "ok",
	});
};
