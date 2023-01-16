
export const printObject = (argument: any) => {
    console.log(argument);
}

export function genericFunction<T> (argument: any){
    return argument;
}

export const genericFunctionArrow = <T>( argument: T ) => {
    return argument;
}

