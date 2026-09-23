class Logo extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      .sidebar-header-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .sidebar-header-title a {
        color: hsl(0, 0%, 100%);
        text-decoration: none;
      }
    </style>

      <div class="sidebar-header-title">
        <a href="#">
          <h2>AtomGPT</h2>
        </a>
    </div>
    `
  }
}

customElements.define('logo-component', Logo);