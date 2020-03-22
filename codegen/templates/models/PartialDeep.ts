/**
 * Make all properties and nested properties in T required
 *
 * Typescript's Partial helper only goes one level deep
 * however partial for OrderCloud requests means Partial for any nested sub-model as well
 *
 * @typeParam T represents the type whos fields and nested fields will be optional
 */
export type PartialDeep<T> = T extends object ? PartialObjectDeep<T> : T

type PartialObjectDeep<T extends object> = {
  [P in keyof T]?: PartialDeep<T[P]>
}
