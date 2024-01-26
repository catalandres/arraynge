import { array } from "../index";

describe('array', 

    () => {

        it('should return an empty array when given undefined', 
            () => {
                expect(array(undefined)).toEqual([]);
            }
        );

        it('should return an array with one element when given a single element', 
            () => {
                expect(array(1)).toEqual([1]);
            }
        );

        it('should return an array with multiple elements when given multiple elements',
            () => {
                expect(array([1, 2, 3])).toEqual([1, 2, 3]);
            }
        );

        it('should return an empty array when given an empty array',
            () => {
                expect(array([])).toEqual([]);
            }
        );

        it('should return an empty string in an array when given an empty string',
            () => {
                expect(array('')).toEqual(['']);
            }
        );

        it('should return an array with mixed types when given mixed types',
            () => {
                expect(array([1, '2', 3])).toEqual([1, '2', 3]);
            }
        );

    }
);