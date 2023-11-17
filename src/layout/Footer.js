import Link from "next/link";
import { Fragment } from "react";
import Newsletters from "../components/Newsletters";

const Footer = ({ footer }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  switch (footer) {
    case 1:
      return <Footer1 scrollTop={scrollTop} />;
    case 3:
      return <Footer3 scrollTop={scrollTop} />;
    case 4:
      return <Footer4 scrollTop={scrollTop} />;
    default:
      return <DefaultFooter scrollTop={scrollTop} />;
  }
};
export default Footer;
const FollowIcon = () => (
  <Fragment>
    <Link href="https://www.facebook.com/tricklesolutions">
      <a>
        <i className="fab fa-facebook-f" />
      </a>
    </Link>
    <Link href="https://www.twitter.com/tricklesolutions">
      <a>
        <i className="fab fa-twitter" />
      </a>
    </Link>
    <Link href="https://www.linkdin.com/tricklesolutions">
      <a>
        <i className="fab fa-linkedin-in" />
      </a>
    </Link>
    <Link href="https://www.youtube.com/tricklesolutions">
      <a>
        <i className="fab fa-youtube" />
      </a>
    </Link>
  </Fragment>
),
  Services = () => (
    <Fragment>
      {/* <li>
        <Link href="/website-designing">Website Designing</Link>
      </li>
      <li>
        <Link href="/website-development">Website Development</Link>
      </li>
      <li>
        <Link href="/web-hosting">Web Hosting</Link>
      </li>
      <li>
        <Link href="/app-development">App Development</Link>
      </li>
      <li>
        <Link href="/digital-Markting">Digital Marketing</Link>
      </li>
      <li>
        <Link href="/graphic-designing">Graphic Designing</Link>
      </li>
      <li>
        <Link href="/Mern-development">Mern Development</Link>
      </li>
      <li>
        <Link href="/Php-development">Php Development</Link>
      </li> */}
    </Fragment>
  ),
  Resources = () => (
    <Fragment>
      {/* <li>
        <Link href="/contact">ERP Development</Link>
      </li>
      <li>
        <Link href="/contact">Support</Link>
      </li>
      <li>
        <Link href="/contact">Video Guides</Link>
      </li>
      <li>
        <Link href="/contact">Documentation</Link>
      </li>
      <li>
        <Link href="/contact">Security</Link>
      </li>
      <li>
        <Link href="/contact">Template</Link>
      </li> */}
    </Fragment>
  ),
  FooterBottom = () => (
    <Fragment>
      <li>
        <Link href="/faqs">Faqs</Link>
      </li>
      <li>
        <Link href="/contact">Links</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Payments</Link>
      </li>
    </Fragment>
  ),
  CopyRight = () => (
    <p>
      © {new Date().getFullYear()}. <Link href="/">Trickle Solutions</Link> All rights
      reserved.
    </p>
  ),
  DefaultFooter = ({ scrollTop }) => (
    <footer className="main-footer bg-blue">
      <div className="container">
        {/* <Newsletters /> */}
        <div className="row justify-content-between text-white pt-75">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">Design</h5>
              <li>
                <Link href="/website-designing">Website Designing</Link>
              </li>

              <li>
                <Link href="/graphic-designing">Graphic Designing</Link>
              </li>

              <li>
                <Link href="/psd-html">Figma To HTML Services</Link>
              </li>

              <li>
                <Link href="/mobile-web"> Mobile Web Design</Link>
              </li>

              <li>
                <Link href="/logo-services">Logo Design Services</Link>
              </li>

              {/* <p>
                Trickle Solutions are a technology driven and innovation oriented progressive company which provides a distinct platform that caters to a wide range of customers across the globe.
              </p> */}
              {/* <h5 className="pt-5">Follow Us</h5> */}
              <div className="social-style-one">
                {/* <FollowIcon /> */}
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Development</h5>

              <li>
                <Link href="/website-development">Website Development</Link>
              </li>

              <li>
                <Link href="/app-development">App Development</Link>
              </li>

              <li>
                <Link href="/contact">ERP Development</Link>
              </li>

              <li>
                <Link href="/Php-development">Php Development</Link>
              </li>

              <li>
                <Link href="/Wordpress-development">WordPress Development</Link>
              </li>

              <ul>
                <Services />
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Marketing</h5>

              <li>
                <Link href="/digital-Markting">Digital Marketing</Link>
              </li>

              <li>
                <Link href="/Seo-services">SEO / SMO Services</Link>
              </li>

              <li>
                <Link href="/affiliate-marketing">Affiliate Maketing</Link>
              </li>

              <li>
                <Link href="/web-hosting">Web Hosting</Link>
              </li>

              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget contact-info-widget">
                  <h5 className="footer-title">Get In Touch</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" /> Ravi Complex, Sultanpur Road,
                      Lucknow, 206001
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:support@gmail.com">info@tricklsolution.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a href="callto:+91 7290900835">7290900835</a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> Monday - Friday,
                      <br /> 10 am - 06 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-widget video-widget">
                  <p>Quis autem vel eum iure repre enderit voluptate</p>
                  {/* <div className="video-widget overlay my-20">
                    <img src="assets/images/footer/video.jpg" alt="Video" />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div> */}
                  <Link href="/about">
                    <a className="read-more">
                      view more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-dark-blue text-white rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          className="scroll-top scroll-to-target"
          data-target="html"
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  ),
  Footer4 = ({ scrollTop }) => (
    <footer className="main-footer footer-two bg-blue-two text-white">
      <div className="container">
        <div className="logo-inner style-two pt-85 pb-35">
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two1.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two5.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two3.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two4.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two2.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two6.png"
                alt="Client Logo"
              />
            </Link>
          </div>
        </div>
        <div className="row large-gap justify-content-between pt-85">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Us</h5>
              {/* <div className="footer-logo mb-25">
                <Link href="/">
                  <a>
                    <img src="assets/images/logos/logo-four.png" alt="Logo" />
                  </a>
                </Link>
              </div> */}
              <p>
                Trickle Solutions are a technology driven and innovation oriented progressive company which provides a distinct platform that caters to a wide range of customers across the globe.
              </p>
              <Link href="/about">
                <a className="read-more">
                  view more <i className="fas fa-arrow-right" />
                </a>
              </Link>
              <div className="social-style-one pt-10">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Services</h5>
              <ul>
                <Services />
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="footer-widget contact-info-widget">
              <h5 className="footer-title">Get In Touch</h5>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" /> Ravi Complex, Sultanpur Road,
                  Lucknow, 206001
                </li>
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">info@tricklesolutions.com</a>
                </li>
                <li>
                  <i className="fas fa-phone" />{" "}
                  <a href="callto:7290900835">7290900835</a>
                </li>
                <li>
                  <i className="far fa-clock" /> Monday - Friday,
                  <br /> 10 am - 06 pm
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget gallery-widget">
              <h5 className="footer-title">Gallery</h5>
              <div className="gallery-widget-wrap">
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery1.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery1.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery2.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery2.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery3.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery3.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery4.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery4.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery5.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery5.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery6.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery6.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
          className="scroll-top scroll-to-target"
          data-target="html"
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  );
