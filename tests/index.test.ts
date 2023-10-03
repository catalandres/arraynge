import { arraynge } from "..";

describe('arraynge', 

    () => {

        it('should return an empty array when given undefined', 
            () => {
                expect(arraynge(undefined)).toEqual([]);
            }
        );

        it('should return an array with one element when given a single element', 
            () => {
                expect(arraynge(1)).toEqual([1]);
            }
        );

        it('should return an array with multiple elements when given multiple elements',
            () => {
                expect(arraynge([1, 2, 3])).toEqual([1, 2, 3]);
            }
        );

        it('should return an empty array when given an empty array',
            () => {
                expect(arraynge([])).toEqual([]);
            }
        );

        it('should return an empty string in an array when given an empty string',
            () => {
                expect(arraynge('')).toEqual(['']);
            }
        );

        it('should return an array with mixed types when given mixed types',
            () => {
                expect(arraynge([1, '2', 3])).toEqual([1, '2', 3]);
            }
        );

    }
);