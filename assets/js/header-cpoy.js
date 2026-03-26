class SpecialHeader extends HTMLElement {
     connectedCallback() {
         this.innerHTML = `
         <header id="rs-header" class="rs-header">
                    <!-- Topbar Area Start -->
                    <div class="topbar-area">
                        <div class="container">
                            <div class="row rs-vertical-middle">
                                <div class="col-lg-3">
                                    <div class="logo-part">
                                        <a href="index.html"><img src="assets/mps/mpslogo1.png" class="main-logo" alt=""></a>
                                    </div>
                                </div>
                                <div class="col-lg-6 text-right">
                                    <ul class="rs-contact-info">
                                        <li class="contact-part">
                                            <i class="flaticon-email"></i>
                                            <span class="contact-info">
                                                <span>E-mail</span>
                                                <a href="mailto:info@mpssociety.ca"> info@mpssociety.ca</a>
                                            </span>
                                        </li>
                                        <li class="contact-part no-border">
                                             <i class="flaticon-call"></i>
                                            <span class="contact-info">
                                                <span>Phone</span>
                                                 <a href="tel:1-(800)-667-1846">1-(800)-667-1846</a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 text-right" id="langBox" aria-label="Language switch">
  <span id="lang-eng" class="lang-label">French</span>
  <i class="fa-solid fa-toggle-on language" id="lang-toggle" role="button" tabindex="0"
     aria-pressed="false" aria-label="Toggle language" style="color:#198754; font-size:30px;"></i>
  <span id="lang-fr" class="lang-label" style="opacity:0.4">English</span>
</div>

                                <script>
                                    function toggleLanguage() {
                                        const language = document.querySelector('.language');
                                        language.classList.toggle('active');
                                    }
                                </script>
                            </div>
                        </div>
                    </div>
                    <!-- Topbar Area End -->

                    <!-- Menu Start -->
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
                                            <img src="assets/mps/logo-white.png" alt="logo">
                                        </a>
                                        <a href="#" class="rs-menu-toggle rs-menu-toggle-close">
                                            <i class="fa fa-bars"></i>
                                        </a>
                                    </div>
                                    <nav class="rs-menu">
                                        <ul class="nav-menu">
                                            <li> <a href="index.html">Home</a>
                                             </li>
                                             <li class="menu-item-has-children">
                                                 <a href="about.html">About</a>
                                                 <ul class="sub-menu">
                                                     <li><a href="what-we-do.html">What we do</a> </li>
                                                     <li><a href="our-team.html">Our Team</a> </li>
                                                     <li><a href="our-stories.html">Our Stories</a> </li>
                                                     <li><a href="remembering-our-children.html">Remembering our children</a></li>
                                                 </ul>
                                             </li>
                                             <li class="menu-item-has-children">
                                                 <a href="#">Community of care</a>
                                                 <ul class="sub-menu">
                                                     <li><a href="get-help.html">Get Help</a> </li>
                                                     <li><a href="become-member.html">Become a Member</a> </li>
                                                     <li><a href="new-diagnosis.html">New Diagnosis</a> </li>
                                                     <li><a href="#0">Financial Assistance</a></li>
                                                     <li><a href="#0">Research Grants</a> </li>
                                                 </ul>
                                             </li>
                                             <li class="menu-item-has-children">
                                                 <a href="#">Support</a>
                                                 <ul class="sub-menu">
                                                     <li><a href="get-help.html">Get Help</a> </li>
                                                     <li><a href="become-member.html">Become a Member</a> </li>
                                                     <li><a href="new-diagnosis.html">New Diagnosis</a> </li>
                                                     <li><a href="#0">Financial Assistance</a></li>
                                                     <li><a href="#0">Research Grants</a> </li>
                                                 </ul>
                                             </li>
                                             <li class="menu-item-has-children">
                                                 <a href="about-mps.html">About MPS</a>
                                                 <ul class="sub-menu">
                                                     <li><a href="#0">Types and Treatments of MPS</a> </li>
                                                     <li><a href="#0">History of MPS</a> </li>
                                                     <li><a href="#0">Clinical Trials</a> </li>
                                                     <li><a href="#0">Publications</a></li>
                                                     <li><a href="#0">Resources & Educational Videos</a> </li>
                                                 </ul>
                                             </li>
                                             <li class="menu-item-has-children">
                                                <a href="get-involved.html">Get Involved</a>
                                                <ul class="sub-menu">
                                                    <li><a href="#0">Help Fundraise</a> </li>
                                                    <li><a href="volunteer.html">Volunteer</a></li>
                                                </ul>
                                             </li>
 
                                             <li class="menu-item-has-children">
                                                 <a href="#0">News & Events</a>
                                                 <ul class="sub-menu">
                                                     <li><a href="news-events.html">News</a> </li>
                                                     <li><a href="#0">We Care</a></li>
                                                 </ul>
                                              </li>
 
                                             <li>
                                                <a href="contact.html">Contact</a>
                                             </li>
                                         </ul> <!-- //.nav-menu -->
                                    </nav>                                        
                                </div> <!-- //.main-menu -->                                
                            </div>
                            <div class="expand-btn-inner search-icon hidden-sticky hidden-md">
                                <div class="btn" style="display: flex;align-items: center; gap: 20px;">
                                    <div>
                                        <button><a href="https://www.zeffy.com/en-CA/donation-form/donate-to-support-the-mps-journey" target="_blank" style="color:#000">Donate</a></button>
                                    </div>

                                    <div class="btn1">
                                        <button>Member Login</button>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                    <!-- Menu End -->
                </header>`

                const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll(".nav-menu li a");

    menuLinks.forEach(link => {
        if(link.getAttribute("href") === currentPage){
            link.parentElement.classList.add("current-menu-item");
        }
    });
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
                                <p>&copy; Copyright 2022 Canadian MPS Society for Mucopolysaccharide & Related Diseases | All Rights Reserved.</p>
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