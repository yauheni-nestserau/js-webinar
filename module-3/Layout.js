'use strict';

const Element = require('./Element');

class Layout extends Element {
    constructor(name, url, locator) {
        super(name, locator);
        this.url = url;
    }

    setParent() {
        throw new Error('Layout cannot have a parent!');
    }

    load() {
        return browser.get(this.url);
    }
}

module.exports = Layout;