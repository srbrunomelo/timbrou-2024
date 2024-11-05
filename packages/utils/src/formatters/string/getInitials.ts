export function getInitials(name: string) {
	const words = name.split(" ");
	const initials = words
		.map((word) => word[0])
		.join("")
		.toUpperCase();
	if (initials.length >= 2) return initials.slice(0, 2);
	return words[0].slice(0, 2).toUpperCase();
}
