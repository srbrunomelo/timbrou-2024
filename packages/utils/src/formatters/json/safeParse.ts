import {
	type TLeftRightReturn,
	left,
	right,
} from "../../patterns/left-right-return";

export function safeParse<T = Record<string, unknown>>(
	value: string,
): TLeftRightReturn<T> {
	try {
		if (typeof value !== "string")
			return left({ message: "Value is not a string" });
		return right(JSON.parse(value));
	} catch (error) {
		return left({ message: value, key: "json-parse-error" });
	}
}
