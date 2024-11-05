export type ElementType<T extends Iterable<any>> = T extends Iterable<infer E> ? E : never
