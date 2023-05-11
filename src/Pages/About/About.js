import React from 'react';
import "./about.scss";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

const About = () => {
    return (
        <div className='about'>
            <div className="about-wrap">

                <div className="section-1">
                    <div className="logo-wrap">
                        <img width={100} src="https://ik.imagekit.io/egjzyz51e/Picsart_23-04-19_15-20-49-513.png?updatedAt=1681898096563" alt="" />
                    </div>



                </div>

                <div className="section-2">
                    <div className="header">
                        <img src="https://ik.imagekit.io/egjzyz51e/nastuh-abootalebi-yWwob8kwOCk-unsplash__1_.jpg?updatedAt=1682086792653" alt="" />
                    </div>
                    <div className="title">
                        <h1>About</h1>
                    </div>
                </div>

                <div className="section-3">
                    <div className="portfolio">
                        <div className="portfolio-wrap">
                            <div className="portfolio-item">
                                <div className="company-detail">
                                    <div className="cont">


                                        <div className="cont-left">

                                            <img src="https://ik.imagekit.io/egjzyz51e/nastuh-abootalebi-yWwob8kwOCk-unsplash__1_.jpg?updatedAt=1682086792653" alt="" />
                                            <img src="https://ik.imagekit.io/egjzyz51e/nastuh-abootalebi-yWwob8kwOCk-unsplash__1_.jpg?updatedAt=1682086792653" alt="" />
                                            <img src="https://ik.imagekit.io/egjzyz51e/nastuh-abootalebi-yWwob8kwOCk-unsplash__1_.jpg?updatedAt=1682086792653" alt="" />
                                            <img src="https://ik.imagekit.io/egjzyz51e/nastuh-abootalebi-yWwob8kwOCk-unsplash__1_.jpg?updatedAt=1682086792653" alt="" />
                                        </div>

                                        <div className="cont-right">
                                            <h1>NM ASSOCIATES</h1>
                                            <p>
                                                NM associates was founded in Jamul in 2014 by architect Megha Nayak  and has since grown into a firm of  talented designers and professionals who believe in creating inspirational projects. Through our designs, we strive to find the perfect balance between comfort, practicality and beauty. Our goal is not only to create stunning structures, but to improve lives. Our work is mostly based in the bhilai durg and raipur area, but we are willing to travel for an awesome project. Contact us to learn what we’re able to accomplish.
                                            </p>

                                        </div>


                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-4">

                    <div className="founder-details">
                        <div className="founder-details-wrap">
                            <div className="f-left">
                                <div className="det-l">
                                    <img src="https://ik.imagekit.io/egjzyz51e/WhatsApp_Image_2023-04-28_at_11.02.27_PM.jpeg?updatedAt=1682703192652" alt="" />
                                    <h1>Namrata Nayak</h1>
                                    <h3>Arctitect</h3>
                                </div>
                            </div>
                            <div className="f-right">
                                <div className="f-right-wrap">
                                    <div className="personal-hi">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint atque reiciendis reprehenderit inventore totam minima nisi dolores expedita incidunt nemo ratione, earum vitae praesentium commodi libero natus rem maiores.</p>
                                    </div>

                                    <div className="social-icon">
                                        <Link><FaFacebook className='icon-face' /></Link>
                                        <Link><FaInstagram className='icon-face'/></Link>
                                        <Link><FaPhone className='icon-face'/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About