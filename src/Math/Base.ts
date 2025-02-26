export abstract class BaseMath {
    protected static validateNumber(...values: number[]): void {
        for (const value of values) {
            if(typeof value !== 'number' || isNaN(value)){
                throw new Error("All inputs must be valid numbers");
            }
        }
    }
}