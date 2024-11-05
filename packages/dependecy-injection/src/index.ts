// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Action<T, K = any> = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ctx: any
) => (params?: T) => K | Promise<K>;

function DependencyInjectionBuilder() {
  const container = new Map<string, unknown>();

  function bind<T>(key: string, value: T) {
    console.log(`Binding ${key}`);
    container.set(key, value);
  }

  function resolve<T>(key: string): T {
    if (!container.has(key)) {
      throw new Error(`No binding found for key: ${key}`);
    }

    return container.get(key) as T;
  }

  function inject<T, K>(action: Action<T, K>, dependencies: string[]) {
    const ctx: Record<string, unknown> = {};
    for (const key of dependencies) {
      ctx[key] = resolve(key);
    }
    return action(ctx);
  }

  return {
    bind,
    resolve,
    inject,
  };
}

export default DependencyInjectionBuilder();
