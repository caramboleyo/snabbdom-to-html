import init from './init.js';
import attributes from './modules/attributes.js';
import props from './modules/props.js';
import class_ from './modules/class.js';
import style from './modules/style.js';
import dataset from './modules/dataset.js';

export const toHTML = init([attributes, props, class_, style, dataset]);
export default toHTML;
