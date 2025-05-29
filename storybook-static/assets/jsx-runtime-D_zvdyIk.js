var s={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o;/**
 * Initializes and returns the minimal React JSX runtime exports.
 *
 * Sets up the React element and fragment symbols, and defines the JSX factory functions for element creation. Ensures initialization occurs only once per module instance.
 *
 * @returns {object} An object containing `Fragment`, `jsx`, and `jsxs` for React JSX element creation.
 */
function d(){if(o)return e;o=1;var R=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(v,r,t){var u=null;if(t!==void 0&&(u=""+t),r.key!==void 0&&(u=""+r.key),"key"in r){t={};for(var n in r)n!=="key"&&(t[n]=r[n])}else t=r;return r=t.ref,{$$typeof:R,type:v,key:u,ref:r!==void 0?r:null,props:t}}return e.Fragment=a,e.jsx=i,e.jsxs=i,e}var x;/**
 * Initializes and returns the React JSX runtime exports, ensuring initialization occurs only once.
 *
 * @returns {object} The React JSX runtime exports containing JSX factory functions and fragment symbol.
 */
function l(){return x||(x=1,s.exports=d()),s.exports}var p=l();export{p as j};
