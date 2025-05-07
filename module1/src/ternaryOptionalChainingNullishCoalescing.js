"use strict";
//  nulish coalescing operator
// null / undefined --> dicesion making
const isAuthenticated = null;
const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'guest';
console.log(result);
