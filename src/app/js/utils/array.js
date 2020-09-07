// NodeList 用の配列操作関数

export const map = (el, cb) => Array.prototype.map.call(el, cb);
export const forEach = (el, cb) => Array.prototype.forEach.call(el, cb);
export const every = (el, cb) => Array.prototype.every.call(el, cb);
export const filter = (el, cb) => Array.prototype.filter.call(el, cb);
