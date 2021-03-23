// @flow
const a: string = 4 // just to check that type errors in declarations are ignored
const b: any = 4 // lint errors should be ignored too, but they aren't
