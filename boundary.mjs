// Cookie bags have no prototype; arbitrary cookie names remain data keys.
export function empty_bag() { return Object.create(null); }
export function bag_has(bag, key) { return Object.prototype.hasOwnProperty.call(bag, key); }
export function bag_set(bag, key, value) { bag[key] = value; return bag; }
export function bag_get(bag, key) { return bag_has(bag, key) ? bag[key] : undefined; }
export function encode_uri(value) { return encodeURIComponent(value); }
export function decode_uri(value) { return decodeURIComponent(value); }
export function gmt_expires(unix) { return new Date(unix * 1000).toUTCString(); }
