# Snabbdom to HTML

Render [Snabbdom](https://github.com/paldepind/snabbdom) Vnode’s to HTML strings

## Usage

```javascript
import { h } from 'https://esm.sh/snabbdom';
import toHTML from './index.js';

var output = toHTML(h('div', { style: { color: 'red' } }, 'The quick brown fox jumps'));

console.log(output);
// => <div style="color: red">The quick brown fox jumps</div>
```

### Advanced usage

This library is built replicating the modular approach used in Snabbdom. So you can do the following if you need to implement any custom functionality.

```js
import { h } from 'https://esm.sh/snabbdom';
import init from './init.js';
import class_ from './modules/class.js';
import props from './modules/props.js';
import attributes from './modules/attributes.js';
import style from './modules/style.js';

const toHTML = init([class_, props, attributes, style]);

var output = toHTML(h('div', { style: { color: 'lime' } }, 'over the lazy fox'));

console.log(output);
// => <div style="color: lime">over the lazy fox</div>
```

The `init` function accepts an array of functions (modules). Modules have the following signature: `(vnode, attributes) => undefined`, where `attributes` is an [ES2015 Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) instance.

You can do `attributes.set(key, value)`, `attributes.get(key)` and `attributes.delete(key)` and so on. You can check out the built-in modules to get the idea.

The built-in modules are available from `snabbdom-to-html/modules`, and these are:

-   `attributes.js`
-   `class.js`
-   `dataset.js`
-   `props.js`
-   `style.js`

## License

MIT
