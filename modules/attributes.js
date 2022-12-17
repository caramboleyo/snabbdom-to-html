import escape from '../utils/escape.js';

export default function attrsModule(vnode, attributes) {
	var attrs = vnode.data.attrs || {};

	for (const [key, value] of Object.entries(attrs)) {
		attributes.set(key, escape(value));
	}
}
