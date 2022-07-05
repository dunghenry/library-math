export class Array {
    public static reduce(array: number[], initialValue?: number): number {
        const result = array.reduce((previousValue: number, currentValue: number) => {
            return previousValue + currentValue;
        }, initialValue ? initialValue : 0);
        return result;
    }
    public static concat(arrayOne: number[], arrayTwo: number[]): number[] {
        return arrayOne.concat(arrayTwo);
    }
    public static join(array: number[]): string {
        let data: string = "";
        for (let i = 0; i < array.length; i++) {
            data += `${array[i]},`;
        }
        data = data.slice(0, data.lastIndexOf(','));
        return data;
    }
}