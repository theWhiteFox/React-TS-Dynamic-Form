import{R as e}from"./index-D4lIrffr.js";const o={},c=e.createContext(o);/**
 * Returns a memoized object containing MDX components, merging the current context with the provided components.
 *
 * If {@link n} is a function, it is called with the current context value to produce the merged components. Otherwise, the context value and {@link n} are shallow merged.
 *
 * @param {object|function} n - Components to merge with the current context, or a function that returns components given the current context.
 * @returns {object} The merged MDX components object.
 */
function u(n){const t=e.useContext(c);return e.useMemo(function(){return typeof n=="function"?n(t):{...t,...n}},[t,n])}/**
 * Provides MDX component mappings to its descendants via React context.
 *
 * Determines the set of MDX components to provide based on the `disableParentContext` prop:
 * - If `disableParentContext` is true, only the `components` prop is used (as a function or object).
 * - Otherwise, merges the `components` prop with the parent context.
 *
 * @param {Object} n - Props for the provider.
 * @param {Object|Function} [n.components] - MDX component mappings or a function returning them.
 * @param {boolean} [n.disableParentContext] - If true, disables merging with parent context.
 * @param {React.ReactNode} n.children - Child elements to render within the provider.
 * @returns {React.ReactElement} The context provider wrapping the children.
 */
function m(n){let t;return n.disableParentContext?t=typeof n.components=="function"?n.components(o):n.components||o:t=u(n.components),e.createElement(c.Provider,{value:t},n.children)}export{m as MDXProvider,u as useMDXComponents};
