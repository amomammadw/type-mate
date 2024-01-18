/**
 * @description is the value string or not
 * @returns boolean
 * @param string your value
 * @example isString('mmd')
 */
export const isString = (value: any) => typeof value === "string";

/**
 * @description is the value number or not
 * @returns boolean
 * @param any your value
 * @example isNumber(2)
 */
export const isNumber = (value: any) => typeof value === "number";

/**
 * @description is the value undefined or not
 * @returns boolean
 * @param any your value
 * @example isUndefined('mmd')
 */
export const isUndefined = (value: any) => typeof value === "undefined";

/**
 * @description is the value object or not
 * @returns boolean
 * @param object your value
 * @example isObject({name:'mmd'})
 */
export const isObject = (value: any) => typeof value === "object";

/**
 * @description is the value symbol or not
 * @returns boolean
 * @param symbol your value
 * @example isSymbol({name:'mmd'})
 */
export const isSymbol = (value: any) => typeof value === "symbol";

/**
 * @description is the value boolean or not
 * @returns boolean
 * @param symbol your value
 * @example isBoolean()
 */
export const isBoolean = (value: any) => typeof value === "boolean";

/**
 * @description is the value null or not
 * @returns boolean
 * @param value your value
 * @example isNull
 */
export const isNull = (value: any) => value === null;
