export function cleanUndefinedProperties(obj: Record<string, unknown>) {
	return JSON.parse(JSON.stringify(obj));
}
