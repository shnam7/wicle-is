export type Glob = string | readonly string[]

const _is = (a: unknown, name: string): boolean =>
    Object.prototype.toString.call(a) === '[object ' + name + ']'

export const isArray = (a: unknown): a is unknown[] => _is(a, 'Array')
export const isObject = (a: unknown): a is Record<string, unknown> => _is(a, 'Object')
export const isFunction = (a: unknown): a is (...args: unknown[]) => unknown =>
    typeof a === 'function' && !/^class\s/u.test(Function.prototype.toString.call(a))
export const isString = (a: unknown): a is string => _is(a, 'String')
export const isNumber = (a: unknown): a is number => _is(a, 'Number')
export const isDate = (a: unknown): a is Date => _is(a, 'Date')
export const isRegExp = (a: unknown): a is RegExp => _is(a, 'RegExp')
export const isError = (a: unknown): a is Error => _is(a, 'Error')
export const isSymbol = (a: unknown): a is symbol => _is(a, 'Symbol')
export const isMap = (a: unknown): a is Map<unknown, unknown> => _is(a, 'Map')
export const isWeakMap = (a: unknown): a is WeakMap<WeakKey, unknown> => _is(a, 'WeakMap')
export const isSet = (a: unknown): a is Set<unknown> => _is(a, 'Set')
export const isWeakSet = (a: unknown): a is WeakSet<WeakKey> => _is(a, 'WeakSet')
export const isClass = (a: unknown): a is new (...args: unknown[]) => unknown =>
    typeof a === 'function' && /^class\s/u.test(Function.prototype.toString.call(a))
export const isPromise = (a: unknown) =>
    typeof a === 'object' && a !== null && typeof (a as Promise<unknown>).then === 'function'
export const isAsyncFunction = (a: unknown): a is (...args: unknown[]) => Promise<unknown> =>
    typeof a === 'function' && /^async\s/u.test(Function.prototype.toString.call(a))
export const isGlob = (value: unknown): value is Glob =>
    typeof value === 'string' ||
    (Array.isArray(value) && value.every(item => typeof item === 'string'))

/**
 * Collection of type-checking functions
 */
export const typesCheckers = {
    isArray,
    isObject,
    isFunction,
    isString,
    isNumber,
    isDate,
    isRegExp,
    isError,
    isSymbol,
    isMap,
    isWeakMap,
    isSet,
    isWeakSet,
    isClass,
    isPromise,
    isAsyncFunction,
    isGlob,
}

export default typesCheckers
