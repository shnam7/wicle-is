export type Glob = string | readonly string[]

const _is = (a: any, name: string): boolean =>
    Object.prototype.toString.call(a) === '[object ' + name + ']'

export const isArray = (a: unknown) => _is(a, 'Array')
export const isObject = (a: unknown) => _is(a, 'Object')
export const isFunction = (a: unknown) =>
    typeof a === 'function' && !/^class\s/.test(Function.prototype.toString.call(a))
export const isString = (a: unknown) => _is(a, 'String')
export const isNumber = (a: unknown) => _is(a, 'Number')
export const isDate = (a: unknown) => _is(a, 'Date')
export const isRegExp = (a: unknown) => _is(a, 'RegExp')
export const isError = (a: unknown) => _is(a, 'Error')
export const isSymbol = (a: unknown) => _is(a, 'Symbol')
export const isMap = (a: unknown) => _is(a, 'Map')
export const isWeakMap = (a: unknown) => _is(a, 'WeakMap')
export const isSet = (a: unknown) => _is(a, 'Set')
export const isWeakSet = (a: unknown) => _is(a, 'WeakSet')
export const isClass = (a: unknown) =>
    typeof a === 'function' && /^class\s/.test(Function.prototype.toString.call(a))

export const isPromise = (a: unknown) =>
    typeof a === 'object' && a !== null && typeof (a as Promise<unknown>).then === 'function'
export const isAsyncFunction = (a: unknown) =>
    typeof a === 'function' && /^async\s/.test(Function.prototype.toString.call(a))
export const isGlob = (value: unknown): value is string =>
    typeof value === 'string' ||
    (Array.isArray(value) && value.every(item => typeof item === 'string'))

/**
 * Collectin of type-checking functions
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
