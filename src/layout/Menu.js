import Link from "next/link";
import { Fragment } from "react";




const serviceList = [

  {
    id: 1,
    Services: "Website Designing",
    link: "/website-designing"
  },

  {
    id: 2, Services: "App Dvelopment",
    link: "/app-development"
  },

  {
    id: 3, Services: "Digital Marketing",
    link: "/digital-Markrting"
  },

  {
    id: 4, Services: "Graphic Designing",
    link: "/graphic-designing"
  },

  {
    id: 5, Services: "Website Development",
    link: "/website-development"
  },

  {
    id: 6, Services: "Web Hosting",
    link: "/web-hosting"
  },

  {
    id: 7, Services: "Figma To HTML Services",
    link: "/psd-html"
  },

  {
    id: 8, Services: "MERN Development",
    link: "/Mern-development"
  },

  {
    id: 9, Services: "PHP Development",
    link: "/Php-development"
  },

  {
    id: 10, Services: "Logo Design Services",
    link: "/logo-services"
  },

  {
    id: 11, Services: "WordPress Development",
    link: "/Wordpress-development"
  },

  {
    id: 12, Services: "Native Development",
    link: "/Native-development"
  },

  {
    id: 13, Services: "Mobile Web Design",
    link: "/mobile-web"
  },

  {
    id: 14, Services: "SEO/SMO Services",
    link: "/Seo-services"
  },

  {
    id: 15, Services: "Affiliate Maketing",
    link: "/affiliate-marketing"
  },

  {
    id: 16, Services: "Ecommerence Web Hosting",
    link: "/ecom-hosting"
  },

  {
    id: 17, Services: "Window Dedicated Server ",
    link: "/window-server"
  },

  {
    id: 18, Services: "Multi Testing Services",
    link: "/testing-services"
  },

  {
    id: 19, Services: "Content Writing Services",
    link: "/content-services"
  },

 
]


export const Home = () => (

  <Fragment>
    {/* <li>
      <Link href="/">Home One</Link>
    </li> */}
    {/* <li>
      <Link href="/index2">Home Two</Link>
    </li> */}
    {/* <li>
      <Link href="/index3">Home Three</Link>
    </li> */}
    {/* <li>
      <Link href="/index4">Home Four</Link>
    </li> */}
  </Fragment>
);

export const Courses = () => (
  <Fragment>
    {/* <li>
      <Link href="/course-grid">course grid</Link>
    </li> */}
    {/* <li>
      <Link href="/course-list">course list</Link>
    </li> */}
    {/* <li>
      <Link href="/course-timeline">course timeline</Link>
    </li> */}
    {/* <li>
      <Link href="/course-details">course details</Link>
    </li> */}
  </Fragment>
);

export const Services = () => (




  <Fragment>

    <div className="row">
      {
        serviceList.map((item, index) => (
          <div className="col-4">
            <li key={index}>
              <Link href={item.link}>{item.Services}</Link>
            </li>
          </div>
        ))
      }
    </div>
    {/* <li>
      <Link href="/website-designing">Website Designing</Link>
    </li>

    <li>
      <Link href="/app-development">App Development</Link>
    </li>

    <li>
      <Link href="/website-development">Website Development</Link>
    </li>

    <li>
      <Link href="/digital-Markrting">Digital Marketing</Link>
    </li>

    <li>
      <Link href="/web-hosting">Web Hosting</Link>
    </li>

    <li>
      <Link href="/graphic-designing">Graphic Designing</Link>
    </li>

    <li>
      <Link href="/Mern-development">Mern Development</Link>
    </li>

    <li>
      <Link href="/Php-development">Php Development</Link>
    </li>

    <li>
      <Link href="/Wordpress-development">WordPress Development</Link>
    </li>

    <li>
      <Link href="/Native-development">Native Development</Link>
    </li>

    <li>
      <Link href="/Seo-services">SEO Services</Link>
    </li>

    <li>
      <Link href="/psd-html">PSD To HTML Services</Link>
    </li>

    <li>
      <Link href="/affiliate-marketing">Affiliate Maketing</Link>
    </li>

    <li>
      <Link href="/ecom-hosting"> Ecommerence Web Hosting </Link>
    </li> */}


  </Fragment>

);

export const Pages = () => (
  <Fragment>
    {/* <li>
      <Link href="/faqs">{`FAQ's`}</Link>
    </li> */}
    {/* <li>
      <Link href="/shop">Shop Page</Link>
    </li> */}
    {/* <li>
      <Link href="/product-details">product details</Link>
    </li> */}
    {/* <li>
      <Link href="/checkout">checkout</Link>
    </li> */}
    {/* <li>
      <Link href="/cart">cart page</Link>
    </li> */}
    {/* <li>
      <Link href="/instructors">all instructors</Link>
    </li> */}
    {/* <li>
      <Link href="/become-instructor">become instructor</Link>
    </li> */}
    {/* <li>
      <Link href="/gallery">gallery</Link>
    </li> */}
    {/* <li>
      <Link href="/pricing">pricing plan</Link>
    </li> */}
    {/* <li>
      <Link href="/contact">contact us</Link>
    </li> */}
    {/* <li>
      <Link href="/404">error Page</Link>
    </li> */}
  </Fragment>
);

export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog">Blog Page</Link>
    </li>
    {/* <li>
      <Link href="/blog-details">Blog Details</Link>
    </li> */}
  </Fragment>
);
