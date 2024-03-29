/**
 * null is not a valid filter prop
 * Use negative filter "!" combined with wildcard filter "*" to define a filter for the absence of a value
 * ex: an order list call with \{ xp: \{ hasPaid: '!*' \} \} would return a list of orders where xp.hasPaid is null or undefined
 * https://ordercloud.io/features/advanced-querying#filtering
 */
type FilterProp = string | string[] | number | boolean | undefined

/**
 * Used on list calls to filter a list of items
 * https://ordercloud.io/features/advanced-querying#filtering
 */

export type Filters = {
  [key: string]: FilterProp
}
