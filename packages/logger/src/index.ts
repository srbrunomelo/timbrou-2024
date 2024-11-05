import debug from "debug";

export const createLogger = (namespace: string) => debug(namespace);

export function LoggerFactory() {
	let namespaceLogger = "";

	function bootstrap(namespace: string) {
		namespaceLogger = namespace;
	}

	function debug() {
		return createLogger(namespaceLogger).extend("debug");
	}

	function info() {
		return createLogger(namespaceLogger).extend("info");
	}

	function warn() {
		return createLogger(namespaceLogger).extend("warn");
	}

	function error() {
		return createLogger(namespaceLogger).extend("error");
	}

	function perf(text: string) {
		const customLogger = debug().extend("performance");
		let startTime = 0;

		function start() {
			startTime = performance.now();
		}

		function finish() {
			const diff = performance.now() - startTime;
			customLogger(`${text} - Duration: ${diff} milliseconds`);
		}

		return {
			start,
			finish,
		};
	}

	return {
		bootstrap,
		performance: perf,
		get debug() {
			return debug();
		},
		get info() {
			return info();
		},
		get warn() {
			return warn();
		},
		get error() {
			return error();
		},
		extend(namespace: string) {
			return {
				debug: debug().extend(namespace),
				info: info().extend(namespace),
				warn: warn().extend(namespace),
				error: error().extend(namespace),
			};
		},
	};
}

export const Logger = LoggerFactory();
