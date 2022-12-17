import escape from '../utils/escape.js';

export default function datasetModule(vnode, attributes) {
	var dataset = vnode.data.dataset || {};

	for (const [key, value] of Object.entries(dataset)) {
		attributes.set(`data-${key}`, escape(value));
	}
}
