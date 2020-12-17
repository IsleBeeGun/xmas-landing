const template = document.createElement('template');
template.innerHTML = `
  <style>

    .tooltip-container {
      display: inline-block;
      position: relative;
      z-index: 2;
    }
    
    .cancel {
      display: none;
    }

    svg {
      width: 12px;
      cursor: pointer;
    }

    .notify-container {
      position: absolute;
      bottom: 125%;
      z-index: 9;
      width: 15.375rem;
      height: max-content;
      background: white; 
      box-shadow: 2px 6px 20px rgba(0, 0, 0, 0.25);
      font-size: 0.75rem;
      line-height: 0.9rem;
      border-radius: 15px;
      padding: 1rem;
      transform: scale(0);
      transform-origin: bottom left;
      transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
    }

    .tooltip-backdrop {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 2;
      background-color: transparent;
    }
    
  </style>

  <div class="tooltip-backdrop"></div>
  <div class="tooltip-container">

    <svg viewBox="0 0 12 12" class="alert" fill="none" >
    
        <path d="M6 9.45703C6.3236 9.45703 6.58594 9.1947 6.58594 8.87109C6.58594 8.54749 6.3236 8.28516 6 8.28516C5.6764 8.28516 5.41406 8.54749 5.41406 8.87109C5.41406 9.1947 5.6764 9.45703 6 9.45703Z" fill="#D2D2D2"/>
        <path d="M6 0C2.68397 0 0 2.68352 0 6C0 9.31603 2.68352 12 6 12C9.31603 12 12 9.31648 12 6C12 2.68397 9.31648 0 6 0ZM6 11.0625C3.2021 11.0625 0.9375 8.79827 0.9375 6C0.9375 3.2021 3.20173 0.9375 6 0.9375C8.7979 0.9375 11.0625 3.20173 11.0625 6C11.0625 8.7979 8.79827 11.0625 6 11.0625Z" fill="#D2D2D2"/>
        <path d="M6 3.01172C4.96613 3.01172 4.125 3.85284 4.125 4.88672C4.125 5.14561 4.33486 5.35547 4.59375 5.35547C4.85264 5.35547 5.0625 5.14561 5.0625 4.88672C5.0625 4.36978 5.48306 3.94922 6 3.94922C6.51694 3.94922 6.9375 4.36978 6.9375 4.88672C6.9375 5.40366 6.51694 5.82422 6 5.82422C5.74111 5.82422 5.53125 6.03408 5.53125 6.29297V7.46484C5.53125 7.72373 5.74111 7.93359 6 7.93359C6.25889 7.93359 6.46875 7.72373 6.46875 7.46484V6.7024C7.27655 6.49373 7.875 5.7588 7.875 4.88672C7.875 3.85284 7.03387 3.01172 6 3.01172Z" fill="#D2D2D2"/>
     
    </svg>



    <svg viewBox="0 0 28 28" class="cancel">
      <g id="exit" transform="translate(-943 -484)">
        <circle id="Эллипс_3" data-name="Эллипс 3" cx="14" cy="14" r="14" transform="translate(943 484)" fill="#2a3985"/>
        <rect id="Прямоугольник_1" data-name="Прямоугольник 1" width="2" height="12" transform="translate(952.197 494.818) rotate(-45)" fill="#fff"/>
        <rect id="Прямоугольник_4" data-name="Прямоугольник 4" width="2" height="12" transform="translate(960.682 493.404) rotate(45)" fill="#fff"/>
      </g>
    </svg>

    <div class="notify-container">
      <slot name="message" />
    </div>

  </div>
`;

class PopupNotify extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  tooltip(expandState) {
    const tooltip = this.shadowRoot.querySelector('.notify-container');
    const alert = this.shadowRoot.querySelector('.alert');
    const cancel = this.shadowRoot.querySelector('.cancel');
    const backdrop = this.shadowRoot.querySelector('.tooltip-backdrop');
    if (expandState == true) {
      tooltip.style.transform = 'scale(1)';
      alert.style.display = 'none';
      cancel.style.display = 'block';
      backdrop.style.display = 'block';
    } else {
      tooltip.style.transform = 'scale(0)';
      alert.style.display = 'block';
      cancel.style.display = 'none';
      backdrop.style.display = 'none';
    }
  }
  connectedCallback() {
    this.shadowRoot.querySelector('.alert').addEventListener('click', () => {
      this.tooltip(true);
    });
    this.shadowRoot.querySelector('.cancel').addEventListener('click', () => {
      this.tooltip(false);
    });
    this.shadowRoot
      .querySelector('.tooltip-backdrop')
      .addEventListener('click', () => {
        this.tooltip(false);
      });
    if (this.getAttribute('tip_background')) {
      this.shadowRoot.querySelector(
        '.notify-container'
      ).style.background = this.getAttribute('tip_background');
    }
    if (this.getAttribute('tip_color')) {
      this.shadowRoot.querySelector(
        '.notify-container'
      ).style.color = this.getAttribute('tip_color');
    }
    if (this.getAttribute('tip_position')) {
      switch (this.getAttribute('tip_position')) {
        case 'bottom':
          {
            this.shadowRoot.querySelector('.notify-container').style.bottom =
              '0%';
            this.shadowRoot.querySelector('.notify-container').style.top =
              '125%';
            this.shadowRoot.querySelector(
              '.notify-container'
            ).style.transformOrigin = 'top left';
          }
          break;
        case 'top':
          {
            if (window.innerWidth < 758) {
              this.shadowRoot.querySelector('.notify-container').style.width =
                '10rem';
              this.shadowRoot.querySelector('.notify-container').style.bottom =
                '125%';
              this.shadowRoot.querySelector('.notify-container').style.right =
                '0%';
              this.shadowRoot.querySelector(
                '.notify-container'
              ).style.transformOrigin = 'bottom right';
            } else if (window.innerWidth < 1220) {
              this.shadowRoot.querySelector('.notify-container').style.width =
                '8rem';
              this.shadowRoot.querySelector(
                '.notify-container'
              ).style.transformOrigin = 'bottom left';
            } else {
              this.shadowRoot.querySelector('.notify-container').style.bottom =
                '125%';
              this.shadowRoot.querySelector(
                '.notify-container'
              ).style.transformOrigin = 'bottom left';
            }
          }
          break;
        case 'top-left':
          {
            if (window.innerWidth < 758) {
              this.shadowRoot.querySelector('.notify-container').style.width =
                '10rem';
            }
            this.shadowRoot.querySelector('.notify-container').style.bottom =
              '125%';
            this.shadowRoot.querySelector('.notify-container').style.right =
              '0%';
            this.shadowRoot.querySelector(
              '.notify-container'
            ).style.transformOrigin = 'bottom right';
          }
          break;
        default:
          {
            if (window.innerWidth < 758) {
              this.shadowRoot.querySelector('.notify-container').style.width =
                '10rem';
              this.shadowRoot.querySelector('.notify-container').style.bottom =
                '125%';
              this.shadowRoot.querySelector('.notify-container').style.right =
                '0%';
              this.shadowRoot.querySelector(
                '.notify-container'
              ).style.transformOrigin = 'bottom right';
            } else {
              this.shadowRoot.querySelector('.notify-container').style.bottom =
                '125%';
              this.shadowRoot.querySelector(
                '.notify-container'
              ).style.transformOrigin = 'bottom left';
            }
          }
          break;
      }
    }
  }
}

if (typeof window.ShadowRoot === 'function') {
  window.customElements.define('popup-notify', PopupNotify);
}
