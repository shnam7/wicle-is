export type Glob = string | readonly string[]

const _is = (a: any, name: string): boolean =>
    Object.prototype.toString.call(a) === '[object ' + name + ']'

/**
 * Collectin of type-checking functions
 */
export const types = {
    isArray: (a: unknown) => _is(a, 'Array'),
    isObject: (a: unknown) => _is(a, 'Object'),
    isFunction: (a: unknown) =>
        typeof a === 'function' && !/^class\s/.test(Function.prototype.toString.call(a)),
    isString: (a: unknown) => _is(a, 'String'),
    isNumber: (a: unknown) => _is(a, 'Number'),
    isDate: (a: unknown) => _is(a, 'Date'),
    isRegExp: (a: unknown) => _is(a, 'RegExp'),
    isError: (a: unknown) => _is(a, 'Error'),
    isSymbol: (a: unknown) => _is(a, 'Symbol'),
    isMap: (a: unknown) => _is(a, 'Map'),
    isWeakMap: (a: unknown) => _is(a, 'WeakMap'),
    isSet: (a: unknown) => _is(a, 'Set'),
    isWeakSet: (a: unknown) => _is(a, 'WeakSet'),
    isClass: (a: unknown) =>
        typeof a === 'function' && /^class\s/.test(Function.prototype.toString.call(a)),

    isPromise: (a: unknown) =>
        typeof a === 'object' && a !== null && typeof (a as Promise<unknown>).then === 'function',
    isAsyncFunction: (a: unknown) =>
        typeof a === 'function' && /^async\s/.test(Function.prototype.toString.call(a)),
    isGlob: (value: unknown): value is string =>
        typeof value === 'string' ||
        (Array.isArray(value) && value.every(item => typeof item === 'string')),
}

export default types
