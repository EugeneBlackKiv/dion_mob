export class ActiveSearch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: flex;
          width: 172px;
          height: 12px;
          /*width: 204px;*/
          /*height: 20px;*/
          align-items: flex-start;
          align-content: flex-start;
          gap: 4px;
          flex-wrap: wrap;
        }

        .dot {
          width: 4px;
          height: 4px;
          flex-shrink: 0;
          border-radius: 4px;
          background: var(--primary-primary, #805BFF);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .small {
          transform: scale(0.5);
          opacity: 0.6;
        }

        .large {
          transform: scale(1);
          opacity: 1;
        }
      </style>

      <div class="container">
        <div class="dot small"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        -->
        <div class="dot small"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot large"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot small"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
        <div class="dot large"></div>
        <div class="dot small"></div>
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot large"></div>-->
        
<!--        <div class="dot small"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot large"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->
<!--        <div class="dot small"></div>-->

      </div>
    `;
  }

  connectedCallback() {
    const dots = [...this.shadowRoot.querySelectorAll(".dot")];

    const animateRandom = () => {
      // Pick a random dot
      const dot = dots[Math.floor(Math.random() * dots.length)];
      // Toggle its size
      dot.classList.toggle("small");
      dot.classList.toggle("large");

      // Repeat after a random delay
      setTimeout(animateRandom, 50 + Math.random() * 100);
    };

    animateRandom(); // start loop
  }
}

customElements.define("active-search", ActiveSearch);
