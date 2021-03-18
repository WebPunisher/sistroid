import React from 'react';

import {Link} from 'react-router-dom';

import './style.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/remixicon/remixicon.css';

import banner from './assets/img/hero-img.png';
import sarp from './assets/img/team/sarp.png'
import talha from './assets/img/team/talha.jpg'
import team1 from './assets/img/team/team-1.jpg';
import team2 from './assets/img/team/team-3.jpg';

 const Homepage = () =>{

    return (
       
        <div className="landingpage">
            <header id="header" class="fixed-top myheader">
                <div class="container d-flex align-items-center">

                <h1 class="logo mr-auto"><a href="/">Sistroid</a></h1>
        
               
                <nav class="nav-menu d-none d-lg-block">
                    <ul className="myUl">
                    <li class="active"><a href="/">Home</a></li>
                    
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#team">Team</a></li>
                    <li class="drop-down"><a href="/">Drop Down</a>
                        <ul>
                        <li><a href="/">Drop Down 1</a></li>
                        <li class="drop-down"><a href="/">Deep Drop Down</a>
                            <ul>
                            <li><a href="/">Deep Drop Down 1</a></li>
                            <li><a href="/">Deep Drop Down 2</a></li>
                            <li><a href="/">Deep Drop Down 3</a></li>
                            <li><a href="/">Deep Drop Down 4</a></li>
                            <li><a href="/">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Drop Down 2</a></li>
                        <li><a href="/">Drop Down 3</a></li>
                        <li><a href="/">Drop Down 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Contact</a></li>

                    </ul>
                </nav>
                <a href="#about" class="get-started-btn scrollto myLinks">Get Started</a>
                <Link to="/signin" class="get-started-btn  myLinks">Sign In</Link>

              </div>
            </header>
  
  
  <section id="hero" class="d-flex align-items-center">


    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Better Solutions For Your Institution</h1>
          <h2>Sistroid brings you and your academia the freedom. No more on-premise!</h2>
          <div class="d-lg-flex">
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
            <a href="https://www.youtube.com/watch?v=t_nRK1UtbgQ&feature=youtu.be&ab_channel=Kuzey%C3%87etin" class="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i class="icofont-play-alt-2"></i></a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={banner} class="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>
   

  </section>
  <main id="main">

    
    <section id="cliens" class="cliens section-bg">
      <div class="container">

        <div class="row" data-aos="zoom-in">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-1.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-2.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-3.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-4.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-5.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-6.png" class="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>

    <div id="about" className="anchor"></div>
    <section  class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <p>
             We are bunch of developers studying with our supervisors. One day, we decided to break free our university from chains. We have several aces up our sleeve to achieve our goal.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Desire to work hard and succeed to finish what we've started.</li>
              <li><i class="ri-check-double-line"></i> Two supervisors, Ahmet Cuneyt Tantug and Yusuf Yaslan to steer the wheel.</li>
              <li><i class="ri-check-double-line"></i> Background in web development, cloud infrastructure and software engineering.</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
               A good beginning is half the battle. We've started strong, mounted and fast. We are planning to move forward just as well.
               Now the time is yours, fasten your seat belts and feel free in clouds more than ever. Our flight has begun!
            </p>
            <a href="/" class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>

    
    <div id="services" className="anchor"></div>
    <section  class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="/"> Cloudification</a></h4>
              <p> Quite time to free yourself from the burden of your on-premise system and feel the freedom and power in clouds.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4><a href="/">Modern UI</a></h4>
              <p>Sistroid submits all its services through a well designed UI to maximize user experience.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4><a href="/"> Performance</a></h4>
              <p> No more freezy white screens on registration days. Sistroid lifts the process via scalable cloud deployments.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-layer"></i></div>
              <h4><a href="/"> Vault </a></h4>
              <p>Your data is SECURE! Sleep more peaceful than ever, we have many agents dealing with the security part. </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">

        <div class="row">
          <div class="col-lg-9 text-center text-lg-left">
            <h3>Call To Action</h3>
            <p> The world and how things work has changed lightning fast. In today's world it is just a burden to keep your systems on-premise
               and do all the hardwork that you are not supposed to do. It is time for the change!</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="/">Call To Action</a>
          </div>
        </div>

      </div>
    </section>

   
    

    <div id="team" className="anchor"></div>
    <section  class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Our team consist of strong ITU members who are specialists in their area of study. Here are their titles and contact information.
             Feel free to reach whenever you want. No questions will last long unanswered.</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src={sarp} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Sarp Ozdemir</h4>
                <span>Backend Developer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div class="pic"><img src={talha} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Talha Unsel</h4>
                <span>Frontend Developer</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div class="social">
                   <a href="https://www.linkedin.com/in/talhaunsel/"><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.instagram.com/talhaunsel/?hl=en"><i class="ri-instagram-fill"></i></a>
                  <a href="https://www.linkedin.com/in/talhaunsel/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div class="pic"><img src={team1} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Ahmet Cuneyt Tantug</h4>
                <span>Database Administrator </span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic"><img src={team2} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Yusuf Yaslan</h4>
                <span>Infrastructure Engineer</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-facebook-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    
    <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Pricing</h2>
          <p>Choose whichever plan fits best to you and your institution. You can try Sistroid with a free account for unlimited time, but we don't believe that it will take long.
             Feel free to contact our service if you demand private plans specific for your situation.
          </p>
        </div>

        <div class="row">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="box">
              <h3>Free Plan</h3>
              <h4><sup>$</sup>0<span>per month</span></h4>
              <ul>
                <li><i class="bx bx-check"></i> Up to 50 users</li>
                <li><i class="bx bx-check"></i> Grading </li>
                <li><i class="bx bx-check"></i> Managing Students</li>
                <li class="na"><i class="bx bx-x"></i> <span>Analytics</span></li>
                <li class="na"><i class="bx bx-x"></i> <span>Case Breakdown for Students</span></li>
              </ul>
              <a href="/" class="buy-btn">Get Started</a>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div class="box featured">
              <h3>Average Plan</h3>
              <h4><sup>$</sup>49<span>per month</span></h4>
              <ul>
                <li><i class="bx bx-check"></i> Up to 10.000 users</li>
                <li><i class="bx bx-check"></i> Advanced Grading</li>
                <li><i class="bx bx-check"></i> Managing Institution</li>
                <li><i class="bx bx-check"></i> Analytics</li>
                <li><i class="bx bx-check"></i> Case Breakdown for Students </li>
              </ul>
              <a href="/" class="buy-btn">Get Started</a>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div class="box">
              <h3>Freedom Plan</h3>
              <h4><sup>$</sup>99<span>per month</span></h4>
              <ul>
                <li><i class="bx bx-check"></i> Up to 100.000 users</li>
                <li><i class="bx bx-check"></i> Advanced Grading</li>
                <li><i class="bx bx-check"></i> Managing Institution</li>
                <li><i class="bx bx-check"></i> Analytics</li>
                <li><i class="bx bx-check"></i> Case Breakdown for Students </li>
              </ul>
              <a href="/" class="buy-btn">Get Started</a>
            </div>
          </div>

        </div>

      </div>
    </section>

    
    {/* <section id="faq" class="faq section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-2" class="collapsed">Feugiat scelerisque varius morbi enim nunc? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" class="collapse" data-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-3" class="collapsed">Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" class="collapse" data-parent=".faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-4" class="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" class="collapse" data-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-5" class="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" class="collapse" data-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section> */}

    <div id="contact" className="anchor"></div>
    <section  class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
         
            <form action="forms/contact.php" method="post"  class="php-email-form">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

  </main>

 
  <footer id="footer">

    {/* <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div> */}

    <div class="footer-top">
      <div class="container">
        <div class="row">

          {/* <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Arsha</h3>
            <p>
              A108 Adam Street <br>
              New York, NY 535022<br>
              United States <br><br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>
          </div> */}

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="social-links mt-3">
              <a href="/" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="/" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="/" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="/" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

  <a href="/" class="back-to-top"><i class="ri-arrow-up-line"></i></a>
  {/* <div id="preloader"></div>    */}
    </div>
    )
}


export default Homepage;