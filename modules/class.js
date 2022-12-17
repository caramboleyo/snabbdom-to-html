export default function classModule(vnode, attributes) {
	let values;
	const _add = [];
	const _remove = [];
	const classes = vnode.data.class || {};
	let existing = attributes.get('class');
	existing = existing.length > 0 ? existing.split(' ') : [];

	for (const [key, value] of Object.entries(classes)) {
		if (value) {
			_add.push(key);
		} else {
			_remove.push(key);
		}
	}

	values = [...new Set(existing.concat(_add))].filter(value => {
		return _remove.indexOf(value) === -1;
	});

	if (values.length) {
		attributes.set('class', values.join(' '));
	}
}
