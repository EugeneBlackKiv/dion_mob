export class AirlineFly extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>

        .airline_fly_section {
          position: relative;
          overflow: hidden; /* clips anything leaving the box */
          width: 100vw;
          height: 110vh;    /* or enough height for your planes */
        }

        .background_positioning{
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          margin-top: -248px;
        }
        .container_avion_1{
          position: absolute;
          left: 50%;
          top: 420px;
          transform: translateX(-50%) ;          
        }
        .avion_1 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 40s infinite linear;
          animation-delay: -10s;
        }
        .container_avion_2{
          position: absolute;
          left: 50%;
          top: 500px;
          transform: translateX(-50%) ; 
        }        
        .avion_2 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 60s infinite linear;
          animation-delay: -10s;
        }
        .container_avion_3{
          position: absolute;
          left: 50%;
          top: 600px;
          transform: translateX(-50%) ; 
        }      
        .avion_3 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 50s infinite linear;
          animation-delay: -16s;
        }
        .container_avion_4{
          position: absolute;
          left: 50%;
          top: 580px;
          transform: translateX(-50%) ; 
        }
        .avion_4 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 40s infinite linear;
          animation-delay: -30s;
        }
        .container_avion_5{
          position: absolute;
          left: 50%;
          top: 600px;
          transform: translateX(-50%) ; 
        }        
        .avion_5{
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 60s infinite linear;
          animation-delay: -48s;
        }
        
        .container_avion_6{
          position: absolute;
          left: 50%;
          top: 700px;
          transform: translateX(-50%) ; 
        }
        .avion_6 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 32s infinite linear;
          animation-delay: -16s;
        }
        
        .container_avion_7{
          position: absolute;
          left: 50%;
          top: 800px;
          transform: translateX(-50%) ; 
        }      
        .avion_7 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 50s infinite linear;
          animation-delay: -10s;
        }
        
        .plane_color{
          fill: var(--surface-surface);
        }
        
        .back_line_color{
          stroke: var(--outline-outline-variant, #E7E7EE);
        }
        
        @keyframes move {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        /*.blur_light {*/
        /*  width: 343px;*/
        /*  height: 343px;*/
        /*  position: absolute;*/
        /*  top: 50%;*/
        /*  left: 50%;*/
        /*  transform: translate(-50%, 50%);*/
        /*  border-radius: 50%;*/
        /*  background: var(--primary-primary, #805BFF);*/
        /*  filter: blur(180px);*/
        /*  max-width: 100vw;   !* don’t exceed viewport *!*/
        /*  overflow: hidden;   !* clip blur overflow *!*/
        /*}*/
                
        
      </style>

      <div class="airline_fly_section">
<!--        <div class="blur_light"></div>-->

        <div class="container_avion_1">
          <svg class="avion_1" xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 55 52" fill="red">
            <path class="plane_color" d="M19.7767 51.706L15.8213 51.706L22.4136 29.9351L7.91067 28.5744L2.63689 36.7385H9.7504e-07L2.63689 25.853L0 14.9675H2.63689L7.91067 23.1316L22.4136 21.771L15.8213 3.10882e-07L19.7767 0L32.9611 21.771L40.8718 21.771C43.0604 21.771 54.0563 22.2812 54.0563 25.853C54.0563 29.4248 43.0604 29.9351 40.8718 29.9351L32.9611 29.9351L19.7767 51.706Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_2">
          <svg class="avion_2" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path class="plane_color" d="M11.4513 29.6661L9.23178 29.6661L12.931 17.4494L4.79272 16.6858L1.83335 21.2671H0.353665L1.83335 15.1587L0.353664 9.05037H1.83335L4.79272 13.6316L12.931 12.8681L9.23178 0.651367L11.4513 0.651367L18.8497 12.8681L23.2888 12.8681C24.5169 12.8681 30.6872 13.1544 30.6872 15.1587C30.6872 17.163 24.5169 17.4494 23.2888 17.4494L18.8497 17.4494L11.4513 29.6661Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_3">
          <svg class="avion_3" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path class="plane_color" d="M11.4513 29.6661L9.23178 29.6661L12.931 17.4494L4.79272 16.6858L1.83335 21.2671H0.353665L1.83335 15.1587L0.353664 9.05037H1.83335L4.79272 13.6316L12.931 12.8681L9.23178 0.651367L11.4513 0.651367L18.8497 12.8681L23.2888 12.8681C24.5169 12.8681 30.6872 13.1544 30.6872 15.1587C30.6872 17.163 24.5169 17.4494 23.2888 17.4494L18.8497 17.4494L11.4513 29.6661Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_4">
          <svg class="avion_4" xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 55 52" fill="none">
            <path class="plane_color" d="M19.7767 51.706L15.8213 51.706L22.4136 29.9351L7.91067 28.5744L2.63689 36.7385H9.7504e-07L2.63689 25.853L0 14.9675H2.63689L7.91067 23.1316L22.4136 21.771L15.8213 3.10882e-07L19.7767 0L32.9611 21.771L40.8718 21.771C43.0604 21.771 54.0563 22.2812 54.0563 25.853C54.0563 29.4248 43.0604 29.9351 40.8718 29.9351L32.9611 29.9351L19.7767 51.706Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_5">
          <svg class="avion_5" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path class="plane_color" d="M11.4513 29.6661L9.23178 29.6661L12.931 17.4494L4.79272 16.6858L1.83335 21.2671H0.353665L1.83335 15.1587L0.353664 9.05037H1.83335L4.79272 13.6316L12.931 12.8681L9.23178 0.651367L11.4513 0.651367L18.8497 12.8681L23.2888 12.8681C24.5169 12.8681 30.6872 13.1544 30.6872 15.1587C30.6872 17.163 24.5169 17.4494 23.2888 17.4494L18.8497 17.4494L11.4513 29.6661Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_6">
          <svg class="avion_6" xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 55 52" fill="none">
            <path class="plane_color" d="M19.7767 51.706L15.8213 51.706L22.4136 29.9351L7.91067 28.5744L2.63689 36.7385H9.7504e-07L2.63689 25.853L0 14.9675H2.63689L7.91067 23.1316L22.4136 21.771L15.8213 3.10882e-07L19.7767 0L32.9611 21.771L40.8718 21.771C43.0604 21.771 54.0563 22.2812 54.0563 25.853C54.0563 29.4248 43.0604 29.9351 40.8718 29.9351L32.9611 29.9351L19.7767 51.706Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_7">
          <svg class="avion_7" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path class="plane_color" d="M11.4513 29.6661L9.23178 29.6661L12.931 17.4494L4.79272 16.6858L1.83335 21.2671H0.353665L1.83335 15.1587L0.353664 9.05037H1.83335L4.79272 13.6316L12.931 12.8681L9.23178 0.651367L11.4513 0.651367L18.8497 12.8681L23.2888 12.8681C24.5169 12.8681 30.6872 13.1544 30.6872 15.1587C30.6872 17.163 24.5169 17.4494 23.2888 17.4494L18.8497 17.4494L11.4513 29.6661Z" fill="white"/>
          </svg>
        </div>
        
      </div>
      
    `;
  }

  // connectedCallback() {
  //   const inaltimeaZonei = window.innerHeight;
  //
  //   let start = 0;
  //   let end = 400;
  //   let elementNume = ".airline_fly_section";
  //
  //   const parametriiAnimatiei = (startPoint, endPoint, className) => {
  //     const elementPornire = this.shadowRoot.querySelector(className);
  //     let valoareScroll = window.scrollY;
  //
  //     if (valoareScroll < startPoint) valoareScroll = startPoint;
  //     if (valoareScroll > endPoint) valoareScroll = endPoint;
  //
  //     let progress = (valoareScroll - startPoint) / (endPoint - startPoint);
  //     let marginTop = progress * (endPoint - startPoint);
  //     let opacitate = 1 - (progress * (endPoint - startPoint) * 0.004);
  //
  //     elementPornire.style.transform = `translateY(${marginTop}px)`;
  //     elementPornire.style.opacity = opacitate;
  //
  //     // console.log(`progress: ${progress}, translateY: ${marginTop} opacity: ${opacitate}`);
  //   };
  //
  //   let ticking = false;
  //
  //   const monitorScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         parametriiAnimatiei(start, end, elementNume);
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };
  //
  //   window.addEventListener("scroll", monitorScroll);
  // }

}

customElements.define('airline-fly', AirlineFly);

