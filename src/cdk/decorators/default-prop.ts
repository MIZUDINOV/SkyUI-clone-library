import { SuiBooleanHandler } from '../types/handler';

export function suiDefaultProp<T extends object, K extends keyof T>(
    assertion?: SuiBooleanHandler<T[K]>,
    ...args: any[]
): PropertyDecorator {
    return (target, key) => {
        const { name } = target.constructor;
    };
}
