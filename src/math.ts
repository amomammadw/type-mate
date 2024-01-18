/**
 * @description is the value odd or not
 * @returns boolean
 * @param number your value
 * @example isOdd(31)
 */
export const isOdd = (number: number) => {
    if (typeof number === "number") {
        return number % 2 !== 0;
    } else {
        throw new Error("Please Enter Numbers Only");
    }
};

/**
 * @description is the value even or not
 * @returns boolean
 * @param number your value
 * @example isEven(31)
 */
export const isEven = (number: number) => {
    if (typeof number === "number") {
        return number % 2 === 0;
    } else {
        throw new Error("Please Enter Numbers Only");
    }
};

/**
 * @description divide two numbers
 * @returns divided number
 * @param number firstNumber
 * @param number secondNumber
 * @example divide(31,14)
 */
export const divide = (firstNumber: number, secondNumber: number) => {
    if (typeof firstNumber === "number" && typeof secondNumber === "number") {
        return firstNumber / secondNumber;
    } else {
        throw new Error("Please Enter Numbers Only");
    }
};
