import{b as l,g as p}from"./index-D4lIrffr.js";/**
 * Merges enumerable properties from an array of source objects into a target object, excluding properties named "default", and freezes the resulting object as a module.
 *
 * @param {object} t - The target object to receive properties.
 * @param {Array<object>} e - An array of source objects whose properties are merged into {@link t}.
 * @returns {object} The frozen target object with merged properties and a `Symbol.toStringTag` of "Module".
 */
function d(t,e){for(var r=0;r<e.length;r++){const o=e[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in t)){const a=Object.getOwnPropertyDescriptor(o,s);a&&Object.defineProperty(t,s,a.get?a:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},n={};/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;/**
 * Initializes and returns a module object that wraps the `act` function, logging a deprecation warning on its first use.
 *
 * The returned object exposes an `act` method that, on its first invocation, warns that `ReactDOMTestUtils.act` is deprecated in favor of `React.act`, then delegates to the original `act` implementation.
 *
 * @returns {object} The module object with the wrapped `act` function.
 */
function m(){if(c)return n;c=1;var t=l(),e=!1;return n.act=function(r){return e===!1&&(e=!0,console.error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")),t.act(r)},n}var u;/**
 * Returns the module exports, ensuring initialization occurs only once.
 *
 * @returns {object} The initialized module exports.
 */
function g(){return u||(u=1,i.exports=m()),i.exports}var f=g();const U=p(f),b=d({__proto__:null,default:U},[f]);export{b as t};
