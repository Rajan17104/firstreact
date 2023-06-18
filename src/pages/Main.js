import React, { Component } from 'react';
 class Main extends Component {
    render() {
        return (
            <div >
                <header id="main-header">

                    <div className="container">
                        <a href="#" className="logo">
                            <img src="./assets/image/Logo.png" alt="" />
                        </a>

                        <nav>
                            <i className="fa-solid fa-bars" onclick="toggleMenu()"></i>
                            <ul id="menu">
                                <i className="fa-solid fa-xmark" onclick="toggleMenu()"></i>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li>
                                    <a href="#">Package <i className="fa-solid fa-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Oreo</a></li>
                                        <li>
                                            <a href="#">Parle  <i className="fa-solid fa-chevron-right"></i></a>
                                            <ul>
                                                <li><a href="#">Gold</a></li>
                                                <li><a href="#">Silver</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">cremy</a></li>
                                        <li><a href="#">Moneco</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Destination <i className="fa-solid fa-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">London</a></li>
                                        <li><a href="#">USA</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Blog <i className="fa-solid fa-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Login</a></li>
                                        <li><a href="#">Delete</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>

                        <a href="#" className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </div>


                </header >


                <main />
                <section id="hero" />
                <div id="particles-js"></div>
                <div className="container">
                    <div className="hero-data">
                        <h1>Make in <br /> your journey.</h1>
                        <h1 className="cd-headline rotate-1">
                            <span>Make in <br /> your</span>
                            <span className="cd-words-wrapper">
                                <b className="is-visible">journey.</b>
                                <b>trip.</b>
                                <b>holiday.</b>
                            </span>
                        </h1>
                        <p>Explore the world with what you love beautiful <br />
                            natural beauty.</p>


                        <div className="search">
                            <form action="" className="search-data">
                                <select name="Location">
                                    <option value="0">Location</option>
                                    <option value="1">surat</option>
                                    <option value="2">baroda</option>
                                    <option value="3">vapi</option>
                                </select>

                                <select name="Date">
                                    <option value="0">Date</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                                <select name="People">
                                    <option value="0">People</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                                <input type="submit" className="explore-btn" value="Explore now" />
                            </form>
                        </div>
                        <p> <span>Popular Place :</span> Bali, Istanbul, Rome, Paris.</p>
                    </div>
                </div>
                <div />

                <section />

                <section id="explore">
                    <div className="container">
                        <div className="main-titel">
                            <h2>Explore new worlds with <br /> exotic natural scenery</h2>
                            <p>Explore the world with what you love beautiful natural beauty.</p>
                        </div>


                        <div className="explore-slider-section">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper explore-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="card-img">
                                            <img src="./assets/image/pexels-frank-cone-2258536.jpg" alt="" />
                                        </div>
                                        <div className="card-text">
                                            <div className="explore-circle">
                                                <span>“</span>
                                            </div>
                                            <h2>Bali, Indonesia.</h2>
                                            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card-img">
                                            <img src="./assets/image/pexels-petr-ganaj-4045962.jpg" alt="" />
                                        </div>
                                        <div className="card-text">
                                            <div className="explore-circle">
                                                <span>“</span>
                                            </div>
                                            <h2>Lion, Gujrat.</h2>
                                            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card-img">
                                            <img src="./assets/image/pexels-riccardo-307008.jpg" alt="" />
                                        </div>
                                        <div className="card-text">
                                            <div className="explore-circle">
                                                <span>“</span>
                                            </div>
                                            <h2>Mountan, Uk.</h2>
                                            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card-img">
                                            <img src="./assets/image/photographer-hand-holding-camera-standing-viewpoint-clouds-panorama-viewpoint-sunrise.jpg"
                                                alt="" />
                                        </div>
                                        <div className="card-text">
                                            <div className="explore-circle">
                                                <span>“</span>
                                            </div>
                                            <h2>Nature, Nasa.</h2>
                                            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card-img">
                                            <img src="./assets/image/pexels-frank-cone-2258536.jpg" alt="" />
                                        </div>
                                        <div className="card-text">
                                            <div className="explore-circle">
                                                <span>“</span>
                                            </div>
                                            <h2>Bali, Indonesia.</h2>
                                            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card-img">
                                            <img src="./assets/image/pexels-riccardo-307008.jpg" alt="" />
                                        </div>
                                        <div className="card-text">
                                            <div className="explore-circle">
                                                <span>“</span>
                                            </div>
                                            <h2>Nature, Nasa.</h2>
                                            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card-img">
                                            <img src="./assets/image/pexels-petr-ganaj-4045962.jpg" alt="" />
                                        </div>
                                        <div className="card-text">
                                            <div className="explore-circle">
                                                <span>“</span>
                                            </div>
                                            <h2>Lion, Gujrat.</h2>
                                            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="why" />
                <div className="container" />
                <div className="main-why" />
                <div className="why_data">
                    <h2>Why choose Us?</h2>
                    <p>our services have been trusted by world travelers.</p>
                </div>
                <div className="why_btn">
                    <div className="prev-1"></div>
                    <div className="next-1"></div>
                </div>
                <div className="swiper why_slider" />
                <div className="swiper-wrapper" />
                <div className="swiper-slide" />
                <div className="why_images" />
                <div className="why_img">
                    <img src="./assets/image/Group 31 (3).png" alt="" />
                </div>
                <div className="why_desc" />
                <h4>Best Service</h4>
                <p />our service is reliable and <br />convenient, our service is<br /> quality.<p />
                <a href="#">Learn more <img src="./assets/image/Vector 3 (1).png" alt="" /></a>
                <div />
                <div className="swiper-slide" />
                <div className="why_images">
                    <div className="why_img">
                        <img src="./assets/image/Group 31 (4).png" alt="" />
                    </div>
                    <div className="why_desc">
                        <h4>Price Guarantee</h4>
                        <p />our service is reliable and <br />convenient, our service is<br /> quality.<p />
                        <a href="#">Learn more <img src="./assets/image/Vector 3 (1).png" alt="" /></a>

                        <div />
                    </div>
                </div>
                <div className="swiper-slide" />
                <div className="why_images">
                    <div className="why_img">
                        <img src="./assets/image/Group 31 (5).png" alt="" />
                    </div>
                    <div className="why_desc">
                        <h4>Handpicked Hotels</h4>
                        <p />our service is reliable and <br />convenient, our service is<br /> quality.<p />
                        <a href="#">Learn more <img src="./assets/image/Vector 3 (1).png" alt="" /></a>

                        <div />
                    </div>
                </div>
                <div className="swiper-slide" />
                <div className="why_images">
                    <div className="why_img">
                        <img src="./assets/image/Group 31 (3).png" alt="" />
                    </div>
                    <div className="why_desc">
                        <h4>Best Service</h4>
                        <p />our service is reliable and <br />convenient, our service is<br /> quality.<p />
                        <a href="#">Learn more <img src="./assets/image/Vector 3 (1).png" alt="" /></a>

                        <div />
                    </div>
                </div>
                <div className="swiper-slide" />
                <div className="why_images">
                    <div className="why_img">
                        <img src="./assets/image/Group 31 (4).png" alt="" />
                    </div>
                    <div className="why_desc">
                        <h4>Price Guarantee</h4>
                        <p />our service is reliable and <br />convenient, our service is<br /> quality.<p />
                        <a href="#">Learn more <img src="./assets/image/Vector 3 (1).png" alt="" /></a>

                        <div />
                    </div>
                </div>
                <div className="swiper-slide" />
                <div className="why_images">
                    <div className="why_img">
                        <img src="./assets/image/Group 31 (5).png" alt="" />
                    </div>
                    <div className="why_desc">
                        <h4>Handpicked Hotels</h4>
                        <p />our service is reliable and <br />convenient, our service is<br /> quality.<p />
                        <a href="#">Learn more <img src="./assets/image/Vector 3 (1).png" alt="" /></a>

                        <div />
                        <div />
                    </div>
                    <div className="swiper-slide" />
                    <div className="why_images" />
                    <div className="why_img">
                        <img src="./assets/image/Group 31 (3).png" alt="" />
                    </div>
                    <div className="why_desc" />
                    <h4>Best Service</h4>
                    <p />our service is reliable and <br />convenient, our service is<br /> quality.<p />
                    <a href="#">Learn more <img src="./assets/image/Vector 3 (1).png" alt="" /></a>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <section />

                    <section id="our" />
                    <div className="container"></div>
                    <div className="main-titel" />
                    <h2>Our tour partner</h2>
                    <p />There are many variation of passage of lorem ipsum available but <br /> the majority have suffered
                    alteration <p />
                    <div />

                    <div className="our-img" />
                    <img src="./assets/image/Katana (1).png" alt="" />
                    <img src="./assets/image/travava (1).png" alt="" />
                    <img src="./assets/image/bigui (1).png" alt="" />
                    <img src="./assets/image/Booking.com (1).png" alt="" />
                    <img src="./assets/image/Jakmaen (1).png" alt="" />
                </div>
                <div />
                <section />

                <section id="client">
                    <div className="client-container">
                        <div className="titel">
                            <h3>TESTIMONIAL</h3>
                            <h2>What our client say</h2>
                            <p>Create a visual identity for your company and a <br /> overall brand</p>
                        </div>
                        <div className="client-slide-section">
                            <div className="prev2"></div>
                            <div className="next2"></div>
                        </div>
                        <div className="swiper client-Swiper">

                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="client-img">
                                        <img src="./assets/image/Mask Group (1).png" alt="" />
                                    </div>
                                    <div className="client-mani-slider">
                                        <div className="client-name">
                                            <h4>Sara Jay</h4>
                                            <p>Treveller</p>
                                        </div>
                                        <div className="client-data">
                                            <img src="./assets/image/Star.png" alt="" />
                                            <p>Before we define any approach,  we need to deline the brands  overall
                                                goal.
                                                We then need to  dive.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="client-img">
                                        <img src="./assets/image/Mask Group.png" alt="" />
                                    </div>
                                    <div className="client-mani-slider">
                                        <div className="client-name">
                                            <h4>Cristian Daniel</h4>
                                            <p>Treveller</p>
                                        </div>
                                        <div className="client-data">
                                            <img src="./assets/image/Star.png" alt="" />
                                            <p>Before we define any approach,  we need to deline the brands  overall
                                                goal.
                                                We then need to  dive.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="client-img">
                                        <img src="./assets/image/client 3.png" alt="" />
                                    </div>
                                    <div className="client-mani-slider">
                                        <div className="client-name">
                                            <h4>Kausar Hasan</h4>
                                            <p>Treveller</p>
                                        </div>
                                        <div className="client-data">
                                            <img src="./assets/image/Star.png" alt="" />
                                            <p>Before we define any approach,  we need to deline the brands  overall
                                                goal.
                                                We then need to  dive.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="client-img">
                                        <img src="./assets/image/Mask Group (1).png" alt="" />
                                    </div>
                                    <div className="client-mani-slider">
                                        <div className="client-name">
                                            <h4>Sara Jay</h4>
                                            <p>Treveller</p>
                                        </div>
                                        <div className="client-data">
                                            <img src="./assets/image/Star.png" alt="" />
                                            <p>Before we define any approach,  we need to deline the brands  overall
                                                goal.
                                                We then need to  dive.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="client-img">
                                        <img src="./assets/image/Mask Group.png" alt="" />
                                    </div>
                                    <div className="client-mani-slider">
                                        <div className="client-name">
                                            <h4>Cristian Daniel</h4>
                                            <p>Treveller</p>
                                        </div>
                                        <div className="client-data">
                                            <img src="./assets/image/Star.png" alt="" />
                                            <p>Before we define any approach,  we need to deline the brands  overall
                                                goal.
                                                We then need to  dive.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="client-img">
                                        <img src="./assets/image/client 3.png" alt="" />
                                    </div>
                                    <div className="client-mani-slider">
                                        <div className="client-name">
                                            <h5>Kausar Hasan</h5>
                                            <p>Treveller</p>
                                        </div>
                                        <div className="client-data">
                                            <img src="./assets/image/Star.png" alt="" />
                                            <p>Before we define any approach,  we need to deline the brands  overall
                                                goal.
                                                We then need to  dive.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="subcribe">
                    <div className="container">
                        <div className="main-subcribe">
                            <div className="main-titel1">
                                <h2>Subcribe to get special price</h2>
                                <p>Dont wanna miss something? subscribe right now and get special <br /> promotion and monthly
                                    newsletter</p>
                            </div>

                            <div className="type">
                                <h4>Type your email here</h4>

                                <div className="type-btn">
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <main />

                <footer>
                    <section id="top">
                        <div className="container">
                            <div className="buttom">
                                <div className="traveller">
                                    <div className="traveller1">
                                        <img src="./assets/image/Group 228.png" alt="" />
                                    </div>
                                    <p />Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quisque pharetra condimentum.
                                    <p />
                                </div>
                                <div className="contact">
                                    <h4>Contact Information</h4>
                                    <ul>
                                        <li><a href="#"><i className="fa-sharp fa-solid fa-location-dot"></i> 732 Despard St,
                                            Atlanta</a>
                                        </li>
                                        <li><a href="#"><i className="fa-solid fa-envelope"></i>+97 888 8888</a></li>
                                        <li><a href="#"><i className="fa-solid fa-phone"></i>info@traveller.com</a></li>
                                    </ul>
                                </div>
                                <div className="quick">
                                    <h4>Quick Link</h4>
                                    <ul>
                                        <li><a href="#">Home</a> </li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Tours</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="follow ">
                                    <h4>Follow Us</h4>
                                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="bottom">
                        <div className="copyright">
                            <p>Copyright © 2021 UNQ Design</p>
                        </div>
                    </section>
                </footer>

                <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
                <script src="https://code.jquery.com/jquery-3.6.4.min.js"
                    integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/kursor@0.0.14/dist/kursor.js"></script>

                <script src="./assets/js/main.js"></script>
                <script src="./assets/js/particles.js"></script>
                <script src="./assets/js/app.js"></script> 
{/* 
                 <script>
                    var kursorx = new kursor({
                        type - 3,
                        color - 'rgba(200,100,0)'
                    })
                </script>


                <script>
                    var swiper = new Swiper,(".explore-slider", {
                        slidesPerView - 1,
                        spaceBetween - 10,
                        pagination = {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        navigation = {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        breakpoints = {
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        },
                    });
                </script>

                <script>
                    var swiper1 = new Swiper(".why_slider", {
                        slidesPerView = 1,
                        spaceBetween = 10,
                        pagination = {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        navigation = {
                            nextEl: '.next-1',
                            prevEl: '.prev-1',
                        },
                        breakpoints = {
                            640: {
                                slidesPeView: 1,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: -12,
                            },
                        },
    });
                </script>



                <script>
                    var swiper2 = new Swiper(".client-Swiper", {
                        slidesPerView = 1,
                        spaceBetween = 10,
                        pagination = {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        navigation = {
                            nextEl: '.next2',
                            prevEl: '.prev2',
                        },
                        breakpoints = {
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3.4,
                                spaceBetween: 30,
                            },
                        },
    });
                </script> 

                 <script>
                    window.onscroll = function () {
            if (window.scrollY > 20) {
                        document.getElementById("main-header").classList.add("dark-header")
                    } else {
                        document.getElementById("main-header").classList.remove("dark-header")
                    }
            }
                </script>

 */}



            </div>

        );
    }
}
export default Main