export const isOdd = (number: number) => {
    if (typeof number === "number") {
        return number % 2 !== 0;
    } else {
        throw new Error("Please Enter Numbers Only");
    }
};

export const isEven = (number: number) => {
    if (typeof number === "number") {
        return number % 2 === 0;
    } else {
        throw new Error("Please Enter Numbers Only");
    }
};
