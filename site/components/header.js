const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    header {
      box-sizing: border-box;
      padding: 1.5vh 5vw 0 5vw;
      position: relative;
      width: 100%;
    }

    nav {
      margin: 0 auto;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5vw;
      list-style: none;
      margin: 0 auto;
    }

    a {
      text-decoration: none;
      color: #fff;
      display: block;
    }

    strong {
      border-bottom: 1px solid;
      display: block;
    }

    @media only screen and (max-width: 680px) {
      ul {
        justify-content: space-between;
        width: 100%;
      }

      li { font-size: 16px; }
    }
  </style>
  <header>
    <nav>
      <ul>
        <li><a id="home" href="/home.html">Home</a>
        <li><a id="worlds" href="/worlds.html">Worlds</a>
        <li><a id="tutorials" href="/tutorials.html">Tutorials</a>
        <li><a id="roadmap" href="/roadmap.html">Roadmap</a>
        <li><a id="blog" href="/blog.html">Blog</a>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);

    // Wrap the selected link in <strong>.
    var selectedId = this.attributes.selected.value;
    var elementHtml = shadowRoot.getElementById(selectedId).innerHTML;
    var newHtml = "<strong>" + elementHtml + "</strong>";
    shadowRoot.getElementById(selectedId).innerHTML = newHtml;
  }
}

customElements.define('header-component', Header);
