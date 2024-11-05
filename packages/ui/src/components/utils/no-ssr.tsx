import { useEnhancedEffect } from "@/hooks/useEnhancedEffect";
import { useEffect, useState } from "react";

export interface NoSsrProps {
	children?: React.ReactNode;
	defer?: boolean;
	fallback?: React.ReactNode;
}

export function NoSsr(props: NoSsrProps): React.JSX.Element {
	const { children, defer = false, fallback = null } = props;
	const [mountedState, setMountedState] = useState(false);

	useEnhancedEffect(() => {
		if (!defer) {
			setMountedState(true);
		}
	}, [defer]);

	useEffect(() => {
		if (defer) {
			setMountedState(true);
		}
	}, [defer]);

	return <>{mountedState ? children : fallback}</>;
}
