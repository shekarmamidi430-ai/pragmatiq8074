


"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Carousel, Switch, Row, Col, Modal, message, } from "antd";
import { MoonOutlined, SunOutlined, } from "@ant-design/icons";



const articles = [
    {
        title: "Types of Learning Skills : Based on Vedic Personalities",
        img: "/articles1.jpg",
    },
    {
        title: "Trending Components in React Js",
        img: "/articles2.png",
    },
    {
        title: "Indian Healthcare developing with ABHA",
        img: "/articles3.png",
    },
    {
        title: "Types of Learning Skills : Based on Vedic Personalities",
        img: "/articles4.png",
    },
    {
        title: "Types of Learning Skills : Based on Vedic Personalities",
        img: "/articles5.png",
    },
    {
        title: "Indian Healthcare developing with ABHA",
        img: "/articles6.png",
    },
];





export default function Home() {

  const [dark, setDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = (checked: boolean) => {
    setDark(checked);

    if (checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };


  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      message.error("Please fill all fields");
      return;
    }

    console.log("Form Data:", formData);
    message.success("Message sent!");

    setFormData({ name: "", email: "", message: "" });
    setIsModalOpen(false);
  };

    return (
        <main className={styles.page}>

            <header className={styles.navbar}>
                    <Link href="/dashboard" className="pragmatiqLogo">
          <Image
            src="/prag.png"
            alt="Pragmatiq"
            width={164}
            height={64}
            className="logoImage"
            priority
          />
        </Link>
                <nav className={styles.navLinks}>
                    <Link href="/whatwedo">What We Do</Link>
                    <Link href="/howwedo">How We Do</Link>
                    <Link href="/technologies">Technologies</Link>
                    <Link href="/ourworks">Our Works</Link>
                    <Link href="/insights">Insights</Link>
                    <Link href="/aboutus">About Us</Link>
                    <Link href="/careers">Careers</Link>
                </nav>

       
            </header>




  
        <button className={styles.contactButton} onClick={showModal}>
          Contact Us
        </button>

  <section className={styles.insightsSection}>
    <div className={styles.headingWrapper}>

      <span className={`${styles.frame} ${styles.topLeft}`} />
      <span className={`${styles.frame} ${styles.topRight}`} />
      <span className={`${styles.frame} ${styles.bottomLeft}`} />
      <span className={`${styles.frame} ${styles.bottomRight}`} />

  
      <h1 className={styles.heading}>Insights</h1>
      <p className={styles.subHeading}>
        Our people love discussing technology. Read on to know our thoughts on the
        key drivers of startup business transformation and innovation.
      </p>
    </div>
  </section>




            <main className={styles.container9}>
                <h1 className={styles.title9}>Articles</h1>
                <p className={styles.subtitle9}>
                    Access insightful articles and feature stories.
                </p>

                <div className={styles.grid9}>
                    {articles.map((item, i) => (
                        <div className={styles.card9} key={i}>
                            <div className={styles.imageWrap9}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className={styles.image9}
                                />
                            </div>

                            <h3 className={styles.cardTitle9}>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </main>


            <footer className={styles.footer7}>
                <div className={styles.container7}>
                    <div className={styles.left7}>
                        <div className={styles.logoWrap7}>
                            <Image src="/prag.png" alt="Pragmatiq" width={146} height={46} />
                        </div>
                        <button className={styles.contactBtn7} onClick={showModal}>Contact Us</button>
                    </div>

                    <div className={styles.right7}>
                        <div className={styles.column7}>
                            <h4>Quick Links</h4>
                            <p>Home</p>
                            <p>What We Do</p>
                            <p>How We Do</p>
                            <p>Technologies</p>
                            <p>Our Works</p>
                            <p>Insights</p>
                            <p>About Us</p>
                            <p>Careers</p>
                        </div>

                        <div className={styles.column7}>
                            <h4>Services</h4>
                            <p>UI/UX Design</p>
                            <p>Mobile App Development</p>
                            <p>Frontend Development</p>
                            <p>Backend Development</p>
                            <p>Artificial Intelligence (AI)</p>
                            <p>Data Analytics & Data Science</p>
                            <p>Cloud & DevOps</p>
                        </div>

                        <div className={styles.column7}>
                            <h4>Address</h4>
                            <p>9999664467</p>
                            <p>purplogener.in</p>
                            <p>
                                Kondapur, Hitech City,<br />
                                Hyderabad, India
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightBorder7} />
            </footer>




                      <Modal


                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
            >
                <div className={styles.contactWrapper11}>
                    <div className={styles.contactCard11}>
                        <div className={styles.contactHeader11}>
                            <h1>Contact Us</h1>

                        </div>

                        <div className={styles.formGroup11}>
                            <label className={styles.label11}>Purpose*</label>
                            <div className={styles.radioGroup11}>
                                <label>
                                    <input type="radio" name="purpose" /> Business
                                </label>
                                <label>
                                    <input type="radio" name="purpose" /> Careers
                                </label>
                                <label>
                                    <input type="radio" name="purpose" defaultChecked /> General
                                </label>
                            </div>
                        </div>

                        <input className={styles.input11} placeholder="First name" />
                        <input className={styles.input11} placeholder="Last name" />
                        <input className={styles.input11} placeholder="Company name" />
                        <input className={styles.input11} placeholder="Email*" />
                        <input className={styles.input11} placeholder="Phone number*" />

                        <textarea
                            className={styles.textarea11}
                            placeholder="How we can help you"
                            rows={3}
                        />

                        <div className={styles.submitWrapper11}>
                            <button className={styles.submitBtn11} onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </Modal> 



        </main>
    );
}
