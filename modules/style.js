import escape from '../utils/escape.js';
import { kebabCase } from '../utils/kebab-case.js';

export default function styleModule(vnode, attributes) {
	var values = [];
	var style = vnode.data.style || {};

	// merge in `delayed` properties
	if (style.delayed) {
		Object.assign(style, style.delayed);
	}

	for (const [key, value] of Object.entries(style)) {
		// omit hook objects
		if (typeof value === 'string' || typeof value === 'number') {
			var kebabKey = kebabCase(key);
			values.push((key.match(/^--.*/) ? '--' + kebabKey : kebabKey) + ': ' + escape(value));
		}
	}

	if (values.length) {
		attributes.set('style', values.join('; '));
	}
}
