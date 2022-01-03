export type SuiHandler<T, G> = (item: T) => G;
export type SuiBooleanHandler<T> = SuiHandler<T, boolean>;
