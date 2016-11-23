## Example usage

```
npm install create-element-class --save-dev
```

```javascript
const createElementClass = require('create-element-class')

const HelloWorld = createElementClass({
  attributeChangedCallback(name, oldValue, newValue) {},
  connectedCallback() {},
  disconnectedCallback() {}
})
HelloWorld.observedAttributes: ['foo', 'bar'],

customElements.define('hello-world', HelloWorld)
```

## Credit

Thank you, [Andy VanWagoner](https://github.com/thetalecrafter), for giving me permission to publish this after-hours experiment of yours.
