import React, { useState } from 'react'
import PageBanner from '../src/components/PageBanner'
import Layout from '../src/layout/Layout'
import WellernAccordion from '../src/components/WellernAccordion'
import { Accordion } from 'react-bootstrap'
import Link from 'next/link'

const websiteDesigning= () => {

  const [active, setActive] = useState(`collapse1`);
  const onClick = (value) => {
      console.log(value);
      setActive(value === active ? "" : value);
  };

  const tasks = [
      'Beautiful & Functional Layout',
      'Responsive In All Devices',
      'User & SEO Friendly',
      'Ad Copy and creative creation',
      'Basic Campaign creation',
      'Implementation of Re-marketing & Conversion tracking code on the site',
      'Increase keyword quality score (improve landing page experience, ctr and ad relevancy)',
      'Improve the keywords performance using search term report (adding keywords and -ve keywords)',
      'Usage of conversion optimizer after 15 conversions in the account',
      'Weekly campaign optimization to maintain leads and cost per lead',
      'Re-marketing / Display campaign creation',
      'GSP Campaign Creation',
      'Merchant Center Account creation for E-commerce',
      'Uploading of shopping feed in the Merchant Center account',
      'Shopping Campaign',
      'Dynamic Re-marketing campaign'
     
  ];


  return (
      <Layout>
          <PageBanner pageName={"Website Designing"} />
          <section className="course-details-area pt-130 rpt-100">
              <div className="container">
                  <div className="row large-gap">
                      <div className="col-lg-6">
                          <div className="course-details-content">
                              <div className="course-header">
                                  <span className="category">Website Designing</span>
                                  <img src="assets/images/shapes/line-shape.png" alt="Line" />
                                  <span className="off">30% off</span>
                                  <div className="ratting">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span>(50)</span>
                                  </div>
                              </div>
                              <h2>Responsive All Devices</h2>
                              {/* <ul className="author-date-enroll">
                                  <li>
                                      <img
                                          src="assets/images/coachs/couse-author.jpg"
                                          alt="Authro"
                                      />
                                      <h6>Donald J. Miller</h6>
                                  </li>
                                  <li>
                                      <i className="fas fa-cloud-upload-alt" /> Last Update
                                      February 15, 2022
                                  </li>
                                  <li>
                                      <i className="far fa-user" /> 25 Enrolled
                                  </li>
                              </ul> */}
                              <div className="image mb-35">
                                  <img
                                      src="https://www.ujudebug.com/wp-content/uploads/2019/11/Web-Design-Course-Fees-and-Duration-In-guwahati.jpg"
                                      alt="Course Details"
                                  />
                              </div>
                              <h3>Hire Dedicated Web Designer:-</h3>
                              <p>   
                              If you run multiple websites, you know maintaining them is a tough task.  By hiring a dedicated web designer, you have complete involvement and direct control over the web solutions that are provided to you. There is unshared focus on integrating your visions and concepts in exactly the way you want. With the financial benefits of off-shore development, you enjoy the control of in-house staff. Leading companies around the globe have been doing this with great success. You may follow their lead and hire dedicated web designers to reap the outlined benefits. We are there to assist you at every single step.
                              In 5 seconds, a Mobile Web Visitor Decides to Stay or Leave! Mobile Web Traffic is Task-Oriented & Buys More Often, therefore, to lure them a high-performance mobile website is what you will need to cash in! Get a Responsive Website that presents optimal viewing experience across a range of digital media platforms, and who could be better than us to do it for you? If you think a stunning, fully-loaded Desktop Website is good enough as a lead generation tool, there are reasons to rethink. “A simple and highly functional mobile website by us can return you the opportunity for conversions that you might have missed!”

                              </p>
                              {/* <h3 className="mt-40">Requirements</h3>
                              <ul className="list-style-two mb-45">
                                  <li>
                                      DevTools Debugging Tips And Shortcuts (Chrome, Firefox,
                                      Edge)
                                  </li>
                                  <li>
                                      Front-End Performance Checklist 2021 (PDF, Apple Pages, MS
                                      Word)
                                  </li>
                                  <li>
                                      A Smashing Guide To The World Of Search Engine Optimization
                                  </li>
                              </ul>
                              <h3>Target Audience</h3>
                              <ul className="list-style-two mb-45">
                                  <li>Any Job Holders, Students</li>
                                  <li>Corporate Trainer</li>
                                  <li>Educators (Teachers, Lecturer, Faculty)</li>
                              </ul>
                              <h3>Course Curriculum in Web Design</h3>
                              <Accordion
                                  className="faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s"
                                  id="course-faq"
                                  defaultActiveKey="collapse1"
                              >
                                  <WellernAccordion
                                      eventName={"collapse1"}
                                      title={"Introduce Courses"}
                                      active={active}
                                      onClick={() => onClick("collapse1")}
                                  >
                                      <ul className="course-video-list">
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">What is Web Design ?</span>{" "}
                                                  <i className="far fa-play-circle" />{" "}
                                                  <span className="duration">18:23</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">
                                                      Diffent Between UX and UI Design ?
                                                  </span>{" "}
                                                  <i className="far fa-play-circle" />
                                                  <span className="duration">35:24</span>{" "}
                                                  <i className="fas fa-lock" />
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">
                                                      Importance Of Typography ?
                                                  </span>
                                                  <i className="far fa-play-circle" />{" "}
                                                  <span className="duration">120:24</span>{" "}
                                                  <i className="fas fa-lock" />
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">What is Warframe ?</span>
                                                  <i className="far fa-play-circle" />{" "}
                                                  <span className="duration">13:24</span>{" "}
                                                  <i className="fas fa-lock" />
                                              </a>
                                          </li>
                                      </ul>
                                  </WellernAccordion>
                                  <WellernAccordion
                                      title={"Practical Class "}
                                      eventName={"collaps2"}
                                      active={active}
                                      onClick={() => onClick("collaps2")}
                                  >
                                      <ul className="course-video-list">
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">What is Web Design ?</span>{" "}
                                                  <i className="far fa-play-circle" />{" "}
                                                  <span className="duration">18:23</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">
                                                      Diffent Between UX and UI Design ?
                                                  </span>{" "}
                                                  <i className="far fa-play-circle" />
                                                  <span className="duration">35:24</span>{" "}
                                                  <i className="fas fa-lock" />
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">
                                                      Importance Of Typography ?
                                                  </span>
                                                  <i className="far fa-play-circle" />{" "}
                                                  <span className="duration">120:24</span>{" "}
                                                  <i className="fas fa-lock" />
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">What is Warframe ?</span>
                                                  <i className="far fa-play-circle" />{" "}
                                                  <span className="duration">13:24</span>{" "}
                                                  <i className="fas fa-lock" />
                                              </a>
                                          </li>
                                      </ul>
                                  </WellernAccordion>
                                  <WellernAccordion
                                      title={"Advance Project Class "}
                                      eventName={"collaps3"}
                                      active={active}
                                      onClick={() => onClick("collaps3")}
                                  >
                                      <ul className="course-video-list">
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">What is Web Design ?</span>{" "}
                                                  <i className="far fa-play-circle" />{" "}
                                                  <span className="duration">18:23</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">
                                                      Diffent Between UX and UI Design ?
                                                  </span>{" "}
                                                  <i className="far fa-play-circle" />
                                                  <span className="duration">35:24</span>{" "}
                                                  <i className="fas fa-lock" />
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">
                                                      Importance Of Typography ?
                                                  </span>
                                                  <i className="far fa-play-circle" />{" "}
                                                  <span className="duration">120:24</span>{" "}
                                                  <i className="fas fa-lock" />
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                                  className="mfp-iframe course-video-play"
                                              >
                                                  <span className="title">What is Warframe ?</span>
                                                  <i className="far fa-play-circle" />{" "}
                                                  <span className="duration">13:24</span>{" "}
                                                  <i className="fas fa-lock" />
                                              </a>
                                          </li>
                                      </ul>
                                  </WellernAccordion>
                              </Accordion>
                              <h3>Instructors</h3>
                              <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                                  <div className="row align-items-center">
                                      <div className="col-sm-5">
                                          <div className="instructor-image">
                                              <img
                                                  src="assets/images/teams/instructor.jpg"
                                                  alt="instructor"
                                              />
                                          </div>
                                      </div>
                                      <div className="col-md-4 col-sm-6">
                                          <div className="instructor-details">
                                              <h4>John D. Mathews</h4>
                                              <span className="designations">
                                                  Senior Web Designer
                                              </span>
                                              <div className="ratting mb-10">
                                                  <i className="fas fa-star" />
                                                  <i className="fas fa-star" />
                                                  <i className="fas fa-star" />
                                                  <i className="fas fa-star" />
                                                  <i className="fas fa-star" />
                                                  <span>(50)</span>
                                              </div>
                                              <p>
                                                  Sit amet consectet adipising elit sed do eiusmod
                                                  incididunt ut labore et dolore magna
                                              </p>
                                              <h5>Follow Me</h5>
                                              <div className="social-style-two">
                                                  <Link href="/contact">
                                                      <a>
                                                          <i className="fab fa-twitter" />
                                                      </a>
                                                  </Link>
                                                  <Link href="/contact">
                                                      <a>
                                                          <i className="fab fa-facebook-f" />
                                                      </a>
                                                  </Link>
                                                  <Link href="/contact">
                                                      <a>
                                                          <i className="fab fa-instagram" />
                                                      </a>
                                                  </Link>
                                                  <Link href="/contact">
                                                      <a>
                                                          <i className="fab fa-pinterest-p" />
                                                      </a>
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <h3>Student Feedback</h3>
                              <div className="student-feedback pt-10 wow fadeInUp delay-0-2s">
                                  <div className="row">
                                      <div className="col-sm-5">
                                          <div className="student-average-feedback bg-green text-center text-white">
                                              <b>5.0</b>
                                              <div className="ratting mb-10">
                                                  <i className="fas fa-star" />
                                                  <i className="fas fa-star" />
                                                  <i className="fas fa-star" />
                                                  <i className="fas fa-star" />
                                                  <i className="fas fa-star" />
                                              </div>
                                              <h6>Total 1 Rating</h6>
                                          </div>
                                      </div>
                                      <div className="col-sm-7 align-self-center">
                                          <div className="student-feedback-details">
                                              <div className="student-feedback-author mb-20">
                                                  <img
                                                      src="assets/images/coachs/feedback-author.jpg"
                                                      alt="Authro"
                                                  />
                                                  <div className="content">
                                                      <h4>Lucius D. Thomas</h4>
                                                      <span className="designations">
                                                          IT Students (Basic)
                                                      </span>
                                                  </div>
                                              </div>
                                              <div className="ratting-total">
                                                  <div className="ratting-total-item">
                                                      <div className="ratting mb-10">
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <span>(5)</span>
                                                      </div>
                                                      <span className="ratting-bar">
                                                          <span style={{ width: "100%" }} />
                                                      </span>
                                                      <span className="ratting-number">1 Rating</span>
                                                  </div>
                                                  <div className="ratting-total-item">
                                                      <div className="ratting mb-10">
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star" />
                                                          <span>(4)</span>
                                                      </div>
                                                      <span className="ratting-bar">
                                                          <span style={{ width: 0 }} />
                                                      </span>
                                                      <span className="ratting-number">0 Rating</span>
                                                  </div>
                                                  <div className="ratting-total-item">
                                                      <div className="ratting mb-10">
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star" />
                                                          <i className="fas fa-star" />
                                                          <span>(3)</span>
                                                      </div>
                                                      <span className="ratting-bar">
                                                          <span style={{ width: 0 }} />
                                                      </span>
                                                      <span className="ratting-number">0 Rating</span>
                                                  </div>
                                                  <div className="ratting-total-item">
                                                      <div className="ratting mb-10">
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star" />
                                                          <i className="fas fa-star" />
                                                          <i className="fas fa-star" />
                                                          <span>(2)</span>
                                                      </div>
                                                      <span className="ratting-bar">
                                                          <span style={{ width: 0 }} />
                                                      </span>
                                                      <span className="ratting-number">0 Rating</span>
                                                  </div>
                                                  <div className="ratting-total-item">
                                                      <div className="ratting mb-10">
                                                          <i className="fas fa-star selected" />
                                                          <i className="fas fa-star" />
                                                          <i className="fas fa-star" />
                                                          <i className="fas fa-star" />
                                                          <i className="fas fa-star" />
                                                          <span>(1)</span>
                                                      </div>
                                                      <span className="ratting-bar">
                                                          <span style={{ width: 0 }} />
                                                      </span>
                                                      <span className="ratting-number">0 Rating</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div> */}
                          </div>
                      </div>
                      <div className="col-lg-6">

                          <h3 className="mt-40">Benefits Of Our Website Designing Services:-</h3>
                          <ul className="list-style-two mb-45">

                              {
                                  tasks.map((item) => (
                                      <li>
                                          {item}
                                      </li>
                                  ))
                              }
                              <li>
                                  Keywords Research.
                              </li>
                              <li>
                                  Front-End Performance Checklist 2021 (PDF, Apple Pages, MS
                                  Word)
                              </li>
                              <li>
                                  A Smashing Guide To The World Of Search Engine Optimization
                              </li>
                          </ul>

                          {/* <div className="course-sidebar rmt-75">
                              <div className="widget widget-course-details wow fadeInUp delay-0-2s">
                                  <div className="widget-video">
                                      <img
                                          src="assets/images/widgets/course-details.jpg"
                                          alt="Course Details"
                                      />
                                      <a
                                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                          className="mfp-iframe youtube-video-play"
                                      >
                                          <i className="fas fa-play" />
                                      </a>
                                  </div>
                                  <div className="price-off">
                                      <span className="price">259.83</span>
                                      <span className="off">25% off</span>
                                  </div>
                                  <ul className="course-details-list mb-25">
                                      <li>
                                          <i className="far fa-file-alt" />{" "}
                                          <span>Course Level</span> <b>Beginner</b>
                                      </li>
                                      <li>
                                          <i className="far fa-clock" /> <span>Duration</span>{" "}
                                          <b>25.5 Hr</b>
                                      </li>
                                      <li>
                                          <i className="far fa-play-circle" /> <span>Lectures</span>{" "}
                                          <b>9 Lectures</b>
                                      </li>
                                      <li>
                                          <i className="far fa-clipboard" /> <span>Subject</span>{" "}
                                          <b>Web Design</b>
                                      </li>
                                      <li>
                                          <i className="fas fa-globe" /> <span>Language</span>{" "}
                                          <b>English</b>
                                      </li>
                                  </ul>
                                  <p>
                                      Sit amet consectetur adipiscin sed eiusmod tempor incidide
                                  </p>
                                  <Link href="/contact">
                                      <a className="theme-btn">
                                          add to cart <i className="fas fa-arrow-right" />
                                      </a>
                                  </Link>
                                  <div className="social-style-two d-flex">
                                      <Link href="/contact">
                                          <a>
                                              <i className="fab fa-twitter" />
                                          </a>
                                      </Link>
                                      <Link href="/contact">
                                          <a>
                                              <i className="fab fa-facebook-f" />
                                          </a>
                                      </Link>
                                      <Link href="/contact">
                                          <a>
                                              <i className="fab fa-instagram" />
                                          </a>
                                      </Link>
                                      <Link href="/contact">
                                          <a>
                                              <i className="fab fa-pinterest-p" />
                                          </a>
                                      </Link>
                                  </div>
                              </div>
                              <div className="widget widget-menu wow fadeInUp delay-0-2s">
                                  <h4 className="widget-title">Category</h4>
                                  <ul>
                                      <li>
                                          <Link href="/course-list">
                                              <a>Business Coach </a>
                                          </Link>{" "}
                                          <span>(25)</span>
                                      </li>
                                      <li>
                                          <Link href="/course-list">
                                              <a>Life Coach </a>
                                          </Link>{" "}
                                          <span>(07)</span>
                                      </li>
                                      <li>
                                          <Link href="/course-list">
                                              <a>Health Coach </a>
                                          </Link>{" "}
                                          <span>(12)</span>
                                      </li>
                                      <li>
                                          <Link href="/course-list">
                                              <a>Web Design </a>
                                          </Link>{" "}
                                          <span>(55)</span>
                                      </li>
                                      <li>
                                          <Link href="/course-list">
                                              <a>Web Development </a>
                                          </Link>{" "}
                                          <span>(14)</span>
                                      </li>
                                      <li>
                                          <Link href="/course-list">
                                              <a>SEO Optimizations </a>
                                          </Link>{" "}
                                          <span>(30)</span>
                                      </li>
                                      <li>
                                          <Link href="/course-list">
                                              <a>Digital Analysis </a>
                                          </Link>{" "}
                                          <span>(18)</span>
                                      </li>
                                  </ul>
                              </div>
                              <div className="widget widget-recent-courses wow fadeInUp delay-0-2s">
                                  <h4 className="widget-title">Recent Courses</h4>
                                  <ul>
                                      <li>
                                          <div className="image">
                                              <img
                                                  src="assets/images/widgets/course1.jpg"
                                                  alt="Course"
                                              />
                                          </div>
                                          <div className="content">
                                              <h6>
                                                  <Link href="/course-details">
                                                      How to Learn Basic Web (UI) Design
                                                  </Link>
                                              </h6>
                                              <span>
                                                  By <Link href="/course-grid">Williams</Link>
                                              </span>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="image">
                                              <img
                                                  src="assets/images/widgets/course2.jpg"
                                                  alt="Course"
                                              />
                                          </div>
                                          <div className="content">
                                              <h6>
                                                  <Link href="/course-details">
                                                      How to Learn Basic Web Development
                                                  </Link>
                                              </h6>
                                              <span>
                                                  By <Link href="/course-grid">Somalia</Link>
                                              </span>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="image">
                                              <img
                                                  src="assets/images/widgets/course3.jpg"
                                                  alt="Course"
                                              />
                                          </div>
                                          <div className="content">
                                              <h6>
                                                  <Link href="/course-details">
                                                      How to Learn Basic (SEO) Marketing
                                                  </Link>
                                              </h6>
                                              <span>
                                                  By <Link href="/course-grid">Blanchard</Link>
                                              </span>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="image">
                                              <img
                                                  src="assets/images/widgets/course4.jpg"
                                                  alt="Course"
                                              />
                                          </div>
                                          <div className="content">
                                              <h6>
                                                  <Link href="/course-details">
                                                      Business Strategy Managements
                                                  </Link>
                                              </h6>
                                              <span>
                                                  By <Link href="/course-grid">Johnson</Link>
                                              </span>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </div> */}
                      </div>
                  </div>
              </div>
          </section>
          {/* Course Details End */}
          {/* Recent Coach Start */}
          {/* <section className="coach-section-two rel z-1 pt-120 rpt-90 pb-130 rpb-100">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-7 col-md-8">
                          <div className="section-title text-center mb-45">
                              <span className="sub-title-two">Latest Courses</span>
                              <h2>Browser Latest Courses</h2>
                          </div>
                      </div>
                  </div>
                  <Slider {...coachSlider} className="coach-slider">
                      <div className="coach-item style-two wow fadeInUp delay-0-2s">
                          <div className="coach-image">
                              <img src="assets/images/coachs/coach1.jpg" alt="Coach" />
                          </div>
                          <div className="coach-content">
                              <a href="#" className="category">
                                  Web Design
                              </a>
                              <h4>
                                  <a href="#">
                                      How to Learn Basic Web Design by Photoshop and Figma
                                  </a>
                              </h4>
                              <ul className="coach-footer">
                                  <li>
                                      <i className="fas fa-user-graduate" />
                                      <span>
                                          By <b>Bennie L.</b>
                                      </span>
                                  </li>
                                  <li>
                                      <i className="far fa-file-alt" />
                                      <span>12 Lessions</span>
                                  </li>
                                  <li>
                                      <i className="far fa-user" />
                                      <span>seats</span>
                                  </li>
                              </ul>
                              <div className="ratting-price">
                                  <div className="ratting">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span>(50)</span>
                                  </div>
                                  <span className="price">95</span>
                              </div>
                          </div>
                      </div>
                      <div className="coach-item style-two wow fadeInUp delay-0-4s">
                          <div className="coach-image">
                              <img src="assets/images/coachs/coach2.jpg" alt="Coach" />
                          </div>
                          <div className="coach-content">
                              <a href="#" className="category">
                                  Development
                              </a>
                              <h4>
                                  <a href="#">
                                      How to Learn Web Development by Php and WordPress
                                  </a>
                              </h4>
                              <ul className="coach-footer">
                                  <li>
                                      <i className="fas fa-user-graduate" />
                                      <span>
                                          By <b>Bennie L.</b>
                                      </span>
                                  </li>
                                  <li>
                                      <i className="far fa-file-alt" />
                                      <span>12 Lessions</span>
                                  </li>
                                  <li>
                                      <i className="far fa-user" />
                                      <span>seats</span>
                                  </li>
                              </ul>
                              <div className="ratting-price">
                                  <div className="ratting">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span>(32)</span>
                                  </div>
                                  <span className="price">38</span>
                              </div>
                          </div>
                      </div>
                      <div className="coach-item style-two wow fadeInUp delay-0-6s">
                          <div className="coach-image">
                              <img src="assets/images/coachs/coach3.jpg" alt="Coach" />
                          </div>
                          <div className="coach-content">
                              <a href="#" className="category">
                                  Marketing
                              </a>
                              <h4>
                                  <a href="#">
                                      How to Learn Basic Marketing Strategy for Research
                                  </a>
                              </h4>
                              <ul className="coach-footer">
                                  <li>
                                      <i className="fas fa-user-graduate" />
                                      <span>
                                          By <b>Bennie L.</b>
                                      </span>
                                  </li>
                                  <li>
                                      <i className="far fa-file-alt" />
                                      <span>12 Lessions</span>
                                  </li>
                                  <li>
                                      <i className="far fa-user" />
                                      <span>seats</span>
                                  </li>
                              </ul>
                              <div className="ratting-price">
                                  <div className="ratting">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span>(68)</span>
                                  </div>
                                  <span className="price">0</span>
                              </div>
                          </div>
                      </div>
                      <div className="coach-item style-two wow fadeInUp delay-0-2s">
                          <div className="coach-image">
                              <img src="assets/images/coachs/coach1.jpg" alt="Coach" />
                          </div>
                          <div className="coach-content">
                              <a href="#" className="category">
                                  Web Design
                              </a>
                              <h4>
                                  <a href="#">
                                      How to Learn Basic Web Design by Photoshop and Figma
                                  </a>
                              </h4>
                              <ul className="coach-footer">
                                  <li>
                                      <i className="fas fa-user-graduate" />
                                      <span>
                                          By <b>Bennie L.</b>
                                      </span>
                                  </li>
                                  <li>
                                      <i className="far fa-file-alt" />
                                      <span>12 Lessions</span>
                                  </li>
                                  <li>
                                      <i className="far fa-user" />
                                      <span>seats</span>
                                  </li>
                              </ul>
                              <div className="ratting-price">
                                  <div className="ratting">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span>(50)</span>
                                  </div>
                                  <span className="price">95</span>
                              </div>
                          </div>
                      </div>
                      <div className="coach-item style-two wow fadeInUp delay-0-4s">
                          <div className="coach-image">
                              <img src="assets/images/coachs/coach2.jpg" alt="Coach" />
                          </div>
                          <div className="coach-content">
                              <a href="#" className="category">
                                  Development
                              </a>
                              <h4>
                                  <a href="#">
                                      How to Learn Web Development by Php and WordPress
                                  </a>
                              </h4>
                              <ul className="coach-footer">
                                  <li>
                                      <i className="fas fa-user-graduate" />
                                      <span>
                                          By <b>Bennie L.</b>
                                      </span>
                                  </li>
                                  <li>
                                      <i className="far fa-file-alt" />
                                      <span>12 Lessions</span>
                                  </li>
                                  <li>
                                      <i className="far fa-user" />
                                      <span>seats</span>
                                  </li>
                              </ul>
                              <div className="ratting-price">
                                  <div className="ratting">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span>(32)</span>
                                  </div>
                                  <span className="price">38</span>
                              </div>
                          </div>
                      </div>
                      <div className="coach-item style-two wow fadeInUp delay-0-6s">
                          <div className="coach-image">
                              <img src="assets/images/coachs/coach3.jpg" alt="Coach" />
                          </div>
                          <div className="coach-content">
                              <a href="#" className="category">
                                  Marketing
                              </a>
                              <h4>
                                  <a href="#">
                                      How to Learn Basic Marketing Strategy for Research
                                  </a>
                              </h4>
                              <ul className="coach-footer">
                                  <li>
                                      <i className="fas fa-user-graduate" />
                                      <span>
                                          By <b>Bennie L.</b>
                                      </span>
                                  </li>
                                  <li>
                                      <i className="far fa-file-alt" />
                                      <span>12 Lessions</span>
                                  </li>
                                  <li>
                                      <i className="far fa-user" />
                                      <span>seats</span>
                                  </li>
                              </ul>
                              <div className="ratting-price">
                                  <div className="ratting">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span>(68)</span>
                                  </div>
                                  <span className="price">0</span>
                              </div>
                          </div>
                      </div>
                  </Slider>
              </div>
          </section> */}
      </Layout>
  )
}

export default websiteDesigning