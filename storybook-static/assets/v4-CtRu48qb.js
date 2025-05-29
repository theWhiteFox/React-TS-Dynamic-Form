let e;const o=new Uint8Array(16);/**
 * Fills a 16-byte buffer with cryptographically secure random values.
 *
 * @returns {Uint8Array} A buffer containing 16 random bytes.
 *
 * @throws {Error} If {@link crypto.getRandomValues} is not supported in the current environment.
 */
function i(){if(!e&&(e=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}const u=[];for(let n=0;n<256;++n)u.push((n+256).toString(16).slice(1));/**
 * Formats a 16-byte array as a UUID string.
 *
 * @param {Uint8Array} n - The byte array containing the UUID bytes.
 * @param {number} [t=0] - The starting offset within the array.
 * @returns {string} The formatted UUID string in the form `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
 */
function p(n,t=0){return u[n[t+0]]+u[n[t+1]]+u[n[t+2]]+u[n[t+3]]+"-"+u[n[t+4]]+u[n[t+5]]+"-"+u[n[t+6]]+u[n[t+7]]+"-"+u[n[t+8]]+u[n[t+9]]+"-"+u[n[t+10]]+u[n[t+11]]+u[n[t+12]]+u[n[t+13]]+u[n[t+14]]+u[n[t+15]]}const y=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),c={randomUUID:y};/**
 * Generates a version 4 UUID (random-based).
 *
 * Uses the native `crypto.randomUUID()` if available and no options are provided. Otherwise, generates a UUID using a cryptographically secure random number generator, conforming to RFC 4122 by setting the appropriate version and variant bits.
 *
 * @param {Object} [n] - Optional options object. If provided, may specify a custom random byte array (`random`) or random number generator function (`rng`).
 * @returns {string} A randomly generated UUID string in the format `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.
 */
function r(n,t,m){if(c.randomUUID&&!n)return c.randomUUID();n=n||{};const d=n.random||(n.rng||i)();return d[6]=d[6]&15|64,d[8]=d[8]&63|128,p(d)}export{r as v};
