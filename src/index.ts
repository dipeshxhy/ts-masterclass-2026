let number: readonly number[] = [1, 2, 3];

// number.push(4) // Error: Property 'push' does not exist on type 'readonly number[]'.
type ReadonlyTuple = readonly [number, string, boolean];
const readonlyTuple: ReadonlyTuple = [42, 'hello', true];

// alternative syntax
type ReadonlyTupleAlt = Readonly<[number, string, boolean]>;
const readonlyTupleAlt: ReadonlyTupleAlt = [42, 'hello', true];
