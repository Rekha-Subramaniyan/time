class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header_area" id="header_contents">
        <div class="top_bar style_one hide">
          <div class="auto-container">
            <div class="row">
              <div class="col-lg-12">
                <div class="top_inner">
                  <div class="left_side common_css">
                    <div class="contntent address">
                      <i class="icon-placeholder"></i>
                      <div class="text">
                        <small>Location</small> <span>Chennai, Porur</span>
                      </div>
                    </div>
                    <div class="contntent email">
                      <i class="icon-email"></i>
                      <div class="text">
                        <small>Email</small>
                        <a href="mailto:info@dodoinfotech.com">info@dodoinfotech.com</a>
                      </div>
                    </div>
                  </div>
                  <div class="right_side common_css">
                    <div class="contntent phone">
                      <i class="icon-phone-call"></i>
                      <div class="text">
                        <small>Phone</small>
                        <a href="tel:+919445552511">+91 94455 52511</a>
                      </div>
                    </div>

                    <div class="contntent media">
                      <div class="social_media_v_one style_two">
                        <ul>
                          <li>
                            <a class="a7" href="https://www.facebook.com/profile.php?id=100094346455746"
                              target="_blank">
                              <span class="fa fa-facebook"></span>
                            </a>
                          </li>
                          <li>
                            <a class="a7"
                              href="https://www.instagram.com/imperial_info_system?fbclid=IwAR3sld7XhKfKhzijM4zvNUGnCglEsYVfc6hQv024YayG1w0PgrGiZ9Zbnls"
                              target="_blank">
                              <span class="fa fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a class="a7" href="https://www.linkedin.com/feed/" target="_blank">
                              <span class="fa fa-linkedin"></span>
                            </a>
                          </li>
                          <li>
                            <a class="a7" href="https://www.youtube.com/channel/UCg9M1EJBIrgCjYlWxt4mQsg"
                              target="_blank">
                              <span class="fa fa-youtube"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pulser">
          <a href="tel:+919445552511" class="phone-icon">
            <i class="fa fa-phone"></i>
            <span class="phone-number">+91 94455 52511</span>
          </a>
        </div>

        <header class="header header_default style_one style_two_remade get_sticky_header">
          <div class="auto-container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                <div class="header_logo_box">
                  <div class="loggo">
                    <a href="index.html" class="logo navbar-brand">
                      <img src="assets/mps/mpslogo1.png" alt="Dodo" class="logo_default" />
                      <img src="assets/mps/mpslogo1.png" alt="Dodo" class="logo__sticky" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                <div class="navbar_togglers hamburger_menu">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
                <div class="header_content_collapse">
                  <div class="header_menu_box">
                    <div class="navigation_menu">
                      <ul id="myNavbar" class="navbar_nav">
                        <li class="menu-item menu-item-has-children active nav-item">
                          <a href="index.html" class="dropdown-toggle nav-link">
                            <span>Home</span>
                          </a>
                        </li>
                        <li class="menu-item menu-item-has-children nav-item">
                          <a href="free-web-development-consulting-in-nagercoil-about-us.html"
                            class="dropdown-toggle nav-link">
                            <span>About Us</span>
                          </a>
                        </li>
                        <li
                          class="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                          <a href="#" class="dropdown-toggle nav-link"><span>Services</span></a>
                          <ul class="dropdown-menu">
                            <li>
                              <div class="row">
                                <div class="col-lg-3 m_column">
                                  <h6>Web Developement</h6>
                                  <div class="list_item_box style_one">
                                    <ul>
                                      <li>
                                        <a href="basic-web-development-service-thiruvananthapuram.html">Basic Web
                                          Developement</a>
                                      </li>
                                      <li>
                                        <a href="dynamic-web-development-in-trichy.html">Dynamic Web Developement</a>
                                      </li>
                                      <li>
                                        <a href="custom-web-development-in-salem.html">Custom Web Developement</a>
                                      </li>
                                      <li>
                                        <a href="e-commerce-development-in-nagercoil.html">Ecommerce Developement</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-3 m_column">
                                  <h5>Mobile Applications</h5>
                                  <div class="list_item_box style_one">
                                    <ul>
                                      <li>
                                        <a href="android-application-development-omrchennai.html">Android
                                          Applications</a>
                                      </li>
                                      <li>
                                        <a href="ios-application-development-trivandrum.html">IOS Applications</a>
                                      </li>
                                      <li>
                                        <a href="flutter-application-development-in-erode.html">Flutter Developement
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-3 m_column">
                                  <h5>Digital Marketing</h5>
                                  <div class="list_item_box style_one">
                                    <ul>
                                      <li>
                                        <a href="seo-in-ernakulam.html">Search Engine Optimization</a>
                                      </li>
                                      <li>
                                        <a href="bulk-whatsapp-marketing-in-trivandrum.html">Whatsapp & SMS Marketing</a>
                                      </li>
                                      <li>
                                        <a href="social-media-marketing-in-coimbatore.html">Social Media Marketing</a>
                                      </li>
                                      <li>
                                        <a href="best-performace-marketing-company-in-pondicherry.html">Performance Marketing</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-3 m_column">
                                  <h5>Domain & Hosting</h5>

                                  <div class="list_item_box style_one">
                                    <ul>
                                      <li>
                                        <a href="domain-registration-in-thirunelveli.html">Domain Registration</a>
                                      </li>
                                      <li><a href="website-hosting-in-kochi.html">Website Hosting</a></li>

                                      <li>
                                        <a href="vps-cloud-hosting-in-erode.html">VPS & Cloud Hosting</a>
                                      </li>
                                      <li>
                                        <a href="reseller-hosting-in-trivandrum.html">Reseller Hosting</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children dropdown nav-item">
                          <a href="#" class="dropdown-toggle nav-link">
                            <span>Products</span>
                          </a>
                          <ul class="dropdown-menu">
                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>Matrimony Web & App</span>
                              </a>
                            </li>

                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>Property Buy, Sell and Rental </span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>School Management </span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>POS Restaurant Solutions</span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>CRM Booking Appointment</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children nav-item">
                          <a href="best-website-designing-company-in-trivandrum-clients.html"
                            class="dropdown-toggle nav-link">
                            <span>Clients</span>
                          </a>
                        </li>
                        <li class="menu-item menu-item-has-children dropdown nav-item">
                          <a href="#" class="dropdown-toggle nav-link">
                            <span>Training</span>
                          </a>
                          <ul class="dropdown-menu">
                            <li class="menu-item nav-item">
                              <a href="web-development-training-in-nagercoil.html" class="dropdown-item nav-link">
                                <span>Web Developement</span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="app-development-training-in-nagercoil.html" class="dropdown-item nav-link">
                                <span>Mobile App Developement</span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="digital-marketing-training-in-nagercoil.html" class="dropdown-item nav-link">
                                <span>Digital Marketing</span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="internship-companies-trainging-in-nagercoil.html" class="dropdown-item nav-link">
                                <span>Internship Programs</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children nav-item">
                          <a href="web-designer-jobs-in-nagercoil.html" class="dropdown-toggle nav-link">
                            <span>Jobs</span>
                          </a>
                        </li>

                        <li class="menu-item menu-item-has-children nav-item">
                          <a href="dodo-infotech-contact-details.html" class="dropdown-toggle nav-link">
                            <span>Contact Us</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="header_right_content helloarun">
                    <ul>
                      <li>
                        <button type="button" class="contact-toggler">
                          <i class="fa fa-question a43"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <!-- end of the loop -->
      </div>`

      const currentPath = window.location.pathname; 
        const navLinks = this.querySelectorAll('#myNavbar a');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (currentPath.endsWith(linkHref)) {
                this.querySelectorAll('#myNavbar li').forEach(li => {
                    li.classList.remove('active');
                });
                link.closest('li').classList.add('active');
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
                            <div class="footer-logo mb-30">
                                <a href="index.html"><img src="assets/mps/mpslogo1.png" alt=""></a>
                            </div>
                              <div class="textwidget white-color pb-30"><p>The Canadian MPS Society supports families, raises awareness, and funds research to improve lives affected by MPS, offering advocacy, resources, and hope.</p>
                              </div>
                              <ul class="footer-social md-mb-30">  
                                  <li> 
                                      <a href="#" target="_blank"><span><i class="fa fa-facebook"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="# " target="_blank"><span><i class="fa fa-twitter"></i></span></a> 
                                  </li>

                                  <li> 
                                      <a href="# " target="_blank"><span><i class="fa fa-pinterest-p"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="# " target="_blank"><span><i class="fa fa-instagram"></i></span></a> 
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