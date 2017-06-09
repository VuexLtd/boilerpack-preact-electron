import { h, render, options } from 'preact';

import { App } from './App';

let node: Element;
export function main() {
    node = render(<App />, document.body, node);
}
