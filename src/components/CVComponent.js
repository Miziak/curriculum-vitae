import hyperHTML from 'hyperhtml';

export default class CVComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.renderFunction = hyperHTML(this.shadowRoot.getRootNode());
  }

  connectedCallback() {
    this.renderTemplate(this.getAttributes());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.renderTemplate({
        ...this.getAttributes(),
        [name]: newValue,
      });
    }
  }

  getAttributes() {
    return this.getAttributeNames().reduce((prev, curr) => ({
      ...prev,
      [curr]: this.getAttribute(curr),
    }), {});
  }

  renderTemplate(attrs) {
    this.render(this.renderFunction, attrs);
  }
}
