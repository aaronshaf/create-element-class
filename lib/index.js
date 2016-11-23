function createElementClass (proto) {
  function CustomElement () {
    var element = (typeof Reflect !== 'undefined')
      ? Reflect.construct(HTMLElement, [], CustomElement)
      : HTMLElement.call(Object.create(CustomElement.prototype))
    if (element.initialize) element.initialize()
    return element
  }
  Object.setPrototypeOf(CustomElement, HTMLElement)
  CustomElement.prototype = Object.create(HTMLElement.prototype)
  Object.keys(proto).forEach(function (key) {
    CustomElement.prototype[key] = proto[key]
  })

  return CustomElement
}

module.exports = createElementClass
