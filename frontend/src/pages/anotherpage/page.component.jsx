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
              <div class="pic"><img src='data:image/jpeg;base64,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' class="img-fluid" alt=""/></div>
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
                <span>Fullstack Engineer</span>
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
              <div class="pic"><img src='data:image/jpeg;base64,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' class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Ata Baris Akin</h4>
                <span>Software Engineer </span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div class="social">
                  <a href="twitter.com/cuneydtantug"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div class="pic"><img src='data:image/jpeg;base64,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' class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Prof. Cuneyt Tantug</h4>
                <span> Architecture Supervisor </span>
                <p>Bilgisayar Mühendisi, Yapay Zekâ, Makine Öğrenmesi, Derin Öğrenme</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
                  <a href="/"><i class="ri-instagram-fill"></i></a>
                  <a href="/"> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic"><img src='data:image/jpeg;base64,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' class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Prof. Yusuf Yaslan</h4>
                <span>Infrastructure Supervisor</span>
                <p>Assistant Professor, Department of Computer Engineering</p>
                <div class="social">
                  <a href="/"><i class="ri-twitter-fill"></i></a>
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
              <h4><sup>$</sup>99<span>per month</span></h4>
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
              <h4><sup>$</sup>599<span>per month</span></h4>
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
                <p>Maslak, 34467 Sarıyer/İstanbul </p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>sistroid@hotmail.com</p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+90 5072707643</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.478086934154!2d29.01785755094263!3d41.10224872148414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5dd2032fb11%3A0x629c5e4a976cff27!2zTWFzbGFrLCDEsFTDnCBBeWF6YcSfYSBLYW1ww7xzw7wsIDM0NDg1IFNhcsSxeWVyL8Swc3RhbmJ1bA!5e0!3m2!1sen!2str!4v1622562724856!5m2!1sen!2str" width="400" height="390"  allowfullscreen="" loading="lazy"></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0"  allowfullscreen></iframe> */}
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