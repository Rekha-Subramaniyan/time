class SpecialHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
  <header id="rs-header" class="rs-header">
    <div class="topbar-area">
      <div class="container">
        <div class="row rs-vertical-middle">
          <div class="col-lg-3">
            <div class="logo-part">
              <a href="index.html"><img src="assets/mps/mpslogo1.png" class="main-logo" alt=""></a>
            </div>
          </div>
  
          <div class="col-lg-9 text-right">
            <ul class="rs-contact-info">
              <li class="contact-part">
                <i class="flaticon-email"></i>
                <span class="contact-info">
                  <span>E-mail</span>
                  <a href="mailto:info@mpssociety.ca"> info@mpssociety.ca</a>
                </span>
              </li>
  
              <li class="contact-part ">
                <i class="flaticon-call"></i>
                <span class="contact-info">
                  <span>Phone</span>
                  <a href="tel:1-(800)-667-1846">1-(800)-667-1846</a>
                </span>
              </li>
  
              <!-- LANGUAGE TOGGLE (FIXED) -->
              <li class="contact-part no-border">
                <div class="contact-info" style="display:flex; align-items:center; gap:8px;">
                  
                  <!-- French (faded at start) -->
                  <span id="lang-eng" class="lang-label" style="opacity:0.4; cursor:pointer;">
                    English
                  </span>
  
                  <!-- Toggle (default OFF = English mode) -->
                  <i class="fa-solid fa-toggle-off language"
                     id="lang-toggle"
                     role="button"
                     tabindex="0"
                     aria-pressed="false"
                     style="color:#198754; font-size:30px; cursor:pointer; margin-right: 0px">
                  </i>
  
                  <!-- English (highlighted) -->
                  <span id="lang-fr" class="lang-label" style="opacity:1; cursor:pointer;">
                    French
                  </span>
  
                </div>
              </li>
            </ul>
          </div>
  
        </div>
      </div>
    </div>
  
    <!-- MENU START -->
    <!-- YOUR MENU CODE BELOW — unchanged -->
    <div class="menu-area menu-sticky">
        <div class="container">
            <div class="logo-area">
                <a href="index.html">
                    <img class="sticky-logo" src="assets/mps/mpslogo1.png" alt="logo">
                </a>
            </div>
            <div class="rs-menu-area">
                <div class="main-menu">
                    <div class="mobile-menu">
                        <a href="index.html" class="mobile-logo">
                            <img src="assets/mps/logo-dark.png" alt="logo">
                        </a>
                        <a href="#" class="rs-menu-toggle rs-menu-toggle-close">
                            <i class="fa fa-bars"></i>
                        </a>
                    </div>
  
                    <nav class="rs-menu">
                        <ul class="nav-menu">
                            <li><a href="index.html">Home</a></li>
                            <li class="menu-item-has-children">
                                <a href="about.html">About</a>
                                <ul class="sub-menu">
                                    <li><a href="about-mps.html">About MPS</a></li>
                                    <li><a href="our-team.html">Our Team</a></li>
                                </ul>
                            </li>
  
                            <li class="menu-item-has-children">
                                <a href="community-of-care.html">Community of care</a>
                                <ul class="sub-menu">
                                    <li><a href="#0">We Care</a></li>
                                    <li><a href="community-resources.html">Community Resource Database</a></li>
                                    <li><a href="clinical-trials.html">Clinical Trials</a></li>
                                    <li><a href="#0">Grants</a></li>
                                    <li><a href="#0">Hold an event in your Community</a></li>
                                    <li><a href="education-center.html">Education Center</a></li>
                                </ul>
                            </li>
  
                            <li class="menu-item-has-children">
                                <a href="#0">Clinical Practice</a>
                                <ul class="sub-menu">
                                    
                                </ul>
                            </li>
  
                            <li class="menu-item-has-children">
                                <a href="#0">Driving Change</a>
                                <ul class="sub-menu">
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
  
            <div class="expand-btn-inner search-icon hidden-sticky hidden-md">
                <div class="btn" style="display:flex; align-items:center; gap:20px;">
                  <div>
                    <button>Accessibility</button>
                  </div>
                  <div>
                    <button><a href="https://www.zeffy.com/en-CA/donation-form/donate-to-support-the-mps-journey" target="_blank" style="color:#000">Donate</a></button>
                  </div>
  
                  <div class="btn1">
                    <button><a href="contact.html">Get Support</a></button>
                  </div>
                </div>
            </div>
  
        </div>
    </div>
    <!-- MENU END -->
  </header>
      `;
  
      // Highlight current menu item
      const currentPage = window.location.pathname.split("/").pop();
      const menuLinks = document.querySelectorAll(".nav-menu li a");
      menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.parentElement.classList.add("current-menu-item");
        }
      });
  
      // LANGUAGE TOGGLE LOGIC (FIXED DEFAULT = ENGLISH)
      // LANGUAGE TOGGLE LOGIC (DEFAULT = ENGLISH)
(function () {
    const toggle = document.getElementById('lang-toggle');
    const engLabel = document.getElementById('lang-eng'); // English on LEFT
    const frLabel = document.getElementById('lang-fr');   // French on RIGHT
  
    const STORAGE_KEY = 'site-language';
  
    // Always start in English
    localStorage.setItem(STORAGE_KEY, 'en');
    setLanguage(false); // false = English
  
    toggle.addEventListener('click', () => {
      setLanguage(!isActive());
    });
  
    // Left label → English
    engLabel.addEventListener("click", () => setLanguage(false));
  
    // Right label → French
    frLabel.addEventListener("click", () => setLanguage(true));
  
    function isActive() {
      return toggle.classList.contains('active');
    }
  
    function setLanguage(useFrench) {
      toggle.classList.toggle('active', useFrench);
      toggle.setAttribute('aria-pressed', useFrench ? 'true' : 'false');
  
      if (useFrench) {
        // 🔵 French mode ON
        engLabel.style.opacity = '0.4';  // English dim
        frLabel.style.opacity = '1';     // French bright
        toggle.classList.remove('fa-toggle-off');
        toggle.classList.add('fa-toggle-on');
        localStorage.setItem(STORAGE_KEY, 'fr');
      } else {
        // 🔵 English mode ON (default)
        engLabel.style.opacity = '1';    // English bright
        frLabel.style.opacity = '0.4';   // French dim
        toggle.classList.remove('fa-toggle-on');
        toggle.classList.add('fa-toggle-off');
        localStorage.setItem(STORAGE_KEY, 'en');
      }
    }
  })();
  
    }
  }
 
 class SpecialFooter extends HTMLElement {
     connectedCallback() {
         this.innerHTML = `
         <footer id="rs-footer" class="rs-footer style2">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12 footer-widget">
                            <div class="footer-logo mb-20">
                                <a href="index.html"><img src="assets/mps/footer-logo.png" height="60" alt=""></a>
                            </div>
                              <div class="textwidget white-color pb-10"><p>The Canadian MPS Society supports families, raises awareness, and funds research to improve lives affected by MPS, offering advocacy, resources, and hope.</p>
                              </div>
                              <ul class="footer-social md-mb-30">  
    <li> 
        <a href="https://www.facebook.com/people/Canadian-MPS-Society/100064516937111/#" target="_blank">
            <span><i class="fa-brands fa-facebook-f"></i></span>
        </a> 
    </li>

    <li> 
        <a href="https://x.com/CanMPSSociety" target="_blank">
            <span><i class="fa-brands fa-x-twitter"></i></span>
        </a> 
    </li>

    <li> 
        <a href="https://www.linkedin.com/company/canadianmpssociety/" target="_blank">
            <span><i class="fa-brands fa-linkedin-in"></i></span>
        </a> 
    </li>

    <li> 
        <a href="https://www.instagram.com/canadian.mps.society/" target="_blank">
            <span><i class="fa-brands fa-instagram"></i></span>
        </a> 
    </li>
</ul>
                        </div>
                        <div class="col-lg-2 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                            <h3 class="widget-title">Quick Links</h3>
                            <ul class="site-map">
                                <li><a href="software-development.html">About Us</a></li>
                                <li><a href="web-development.html">Support</a></li>
                                <li><a href="analytic-solutions.html">About MPS</a></li>
                                <li><a href="cloud-and-devops.html">Get Involved</a></li>
                                <li><a href="product-design.html">New Events</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                            <h3 class="widget-title">Useful Links</h3>
                            <ul class="site-map">
                                <li><a href="software-development.html">Remembring Our Children</a></li>
                                <li><a href="web-development.html">Become a Member </a></li>
                                <li><a href="analytic-solutions.html">Financial Assistance</a></li>
                                <li><a href="cloud-and-devops.html">Hitory of MPS</a></li>
                                <li><a href="product-design.html">Help Fundraise</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                            <h3 class="widget-title">Contact Info</h3>
                            <ul class="address-widget">
                                <li>
                                    <i class="flaticon-location"></i>
                                    <div class="desc"> 2 Campbell Drive, Suite 759
                                        Uxbridge, ON L9P 0A3</div>
                                </li>
                                <li>
                                    <i class="flaticon-call"></i>
                                    <div class="desc">
                                       <a href="tel:1-(800)-667-1846">1-(800)-667-1846</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="flaticon-call"></i>
                                    <div class="desc">
                                       <a href="tel:1-(604) 924-5130">1-(604) 924-5130</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="flaticon-email"></i>
                                    <div class="desc">
                                        <a href="mailto:support@timelessfoundation.in">info@mpssociety.ca</a>
                                    </div>
                                </li>
                                <!-- <li>
                                    <i class="flaticon-clock-1"></i>
                                    <div class="desc">
                                        Opening Hours: 10:00 - 18:00   
                                    </div>
                                </li> -->
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">                    
                    <div>
                        <div>
                            <div class="copyright" style="text-align: center;">
                                <p>&copy; Copyright 2022 <a href="https://www.mpssociety.ca/" target="_blank" style= "color:#fff"> Canadian MPS Society</a> for Mucopolysaccharide & Related Diseases | All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`
     }
 }
 
 customElements.define('special-header', SpecialHeader)
 customElements.define('special-footer', SpecialFooter)