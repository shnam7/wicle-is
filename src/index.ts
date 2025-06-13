/* eslint-disable @typescript-eslint/naming-convention */
const _is = (a: any, name: string): boolean =>
    Object.prototype.toString.call(a) === '[object ' + name + ']'

/**
 * Collectin of type-checking functions
 */
const _isCollection = {
    Array: (a: unknown) => _is(a, 'Array'),
    Object: (a: unknown) => _is(a, 'Object'),
    Function: (a: unknown) =>
        typeof a === 'function' && !/^class\s/.test(Function.prototype.toString.call(a)),
    String: (a: unknown) => _is(a, 'String'),
    Number: (a: unknown) => _is(a, 'Number'),
    Date: (a: unknown) => _is(a, 'Date'),
    RegExp: (a: unknown) => _is(a, 'RegExp'),
    Error: (a: unknown) => _is(a, 'Error'),
    Symbol: (a: unknown) => _is(a, 'Symbol'),
    Map: (a: unknown) => _is(a, 'Map'),
    WeakMap: (a: unknown) => _is(a, 'WeakMap'),
    Set: (a: unknown) => _is(a, 'Set'),
    WeakSet: (a: unknown) => _is(a, 'WeakSet'),
    Class: (a: unknown) =>
        typeof a === 'function' && /^class\s/.test(Function.prototype.toString.call(a)),

    Promise: (a: unknown) =>
        typeof a === 'object' && a !== null && typeof (a as Promise<unknown>).then === 'function',
    AsyncFunction: (a: unknown) =>
        typeof a === 'function' && /^async\s/.test(Function.prototype.toString.call(a)),
}

export default _isCollection
