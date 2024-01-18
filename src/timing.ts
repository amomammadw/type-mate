/**
 * @description sets a delay and a timeout to execute your function
 * @returns function
 * @param fn your function
 * @param delay your delay to execute function in ms
 * @example delay(()=>console.log('test),4000)
 */
export const delay = (fn: VoidFunction, delay: number) => {
    return setTimeout(() => {
        fn();
    }, delay);
};
