export function arraynge<Type>(input: Type | Type[] | undefined): Type[] {
    if (input === undefined) {
        return [];
    } else {
        return Array.isArray(input) ? input : [input];
    }
}