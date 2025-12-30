"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState , useEffect } from "react";
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Row, Col , Modal, message,   } from "antd";
import Link from "next/link";


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

                <div className={styles.contactWrap1}>
                    <Switch
                        checked={dark}
                        onChange={toggleTheme}
                        checkedChildren={<MoonOutlined />}
                        unCheckedChildren={<SunOutlined />}
                    />
                </div>
            </header>

            <div className={styles.top}>

                <span className={`${styles.frame} ${styles.topLeft}`} />
                <span className={`${styles.frame} ${styles.topRight}`} />
                <span className={`${styles.frame} ${styles.bottomLeft}`} />
                <span className={`${styles.frame} ${styles.bottomRight}`} />

                <h1>How We Do</h1>

                <p>
                    Our secret sauce. Learnings from building tech products for 200+ startups     .contactButton
                </p>


        <button className={styles.contactButton} onClick={showModal}>
          Contact Us
        </button>
            </div>


            <section className={styles.wrapper}>
                <div className={styles.container}>

                    <Row className={styles.row}>
                        <Col span={8} className={styles.left}>
                            <div className={styles.iconBox}>
                                <Image
                                    src="/image11.png"
                                    alt="Feature Icon"
                                    width={370}
                                    height={80}
                                    className={styles.iconImg}
                                />
                            </div>

                        </Col>
                        <Col span={16} className={styles.right}>
                            <h3>Successful startups need teams that live, breathe, and contribute to the product vision every day. We setup a dedicated team that is aligned to your success. You can focus on your business goals while we ensure:</h3>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>Delivery of features without detailed documentation and with minimal communication overhead</h4>

                                </div>
                            </div>


                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>Better and newer ways to do things</h4>

                                </div>
                            </div>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>A team that makes its own decisions based on the best interest of the product</h4>

                                </div>
                            </div>
                        </Col>
                    </Row>


                    <Row className={styles.row}>
                        <Col span={8} className={styles.left}>
                            <div className={styles.iconBox}>
                                <Image
                                    src="/image22.png"
                                    alt="Feature Icon"
                                    width={270}
                                    height={80}
                                    className={styles.iconImg}
                                />
                            </div>
                        </Col>
                        <Col span={16} className={styles.right}>
                            <h3>Startups work in an environment of constant change. We respond to change, at the same time do things the right way. Our time-tested software development processes ensure:
                            </h3>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>Handle last minute changes, yet track to long-term milestones</h4>

                                </div>
                            </div>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>A scalable product that can accommodate unexpected extensions</h4>

                                </div>
                            </div>


                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>A healthy balance between adding new features, reducing technical debt and fixing product issues</h4>

                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className={styles.row}>
                        <Col span={8} className={styles.left}>
                            <div className={styles.iconBox}>
                                <Image
                                    src="/image3.png"
                                    alt="Feature Icon"
                                    width={370}
                                    height={80}
                                    className={styles.iconImg}
                                />
                            </div>
                        </Col>
                        <Col span={16} className={styles.right}>
                            <h3>Every startup phase brings a set of challenges that requires you to change the way you work. What works while bootstrapping may not work while scaling to millions of users. We adapt to these changes by tailoring:
                            </h3>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>People best suited to your current lifecycle: full stack developers in the beginning Vs specialists at a later stage</h4>

                                </div>
                            </div>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>Emphasis on the right things at the right time: time to market in the beginning Vs robustness at a later stage</h4>

                                </div>

                            </div>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>Approach from a fluid process to a disciplined method as per the need: manual process in the beginning Vs automation at a later stage</h4>

                                </div>

                            </div>

                        </Col>
                    </Row>


                    <Row className={styles.row}>
                        <Col span={8} className={styles.left}>
                            <div className={styles.iconBox}>
                                <Image
                                    src="/image4.png"
                                    alt="Feature Icon"
                                    width={370}
                                    height={80}
                                    className={styles.iconImg}
                                />
                            </div>
                        </Col>
                        <Col span={16} className={styles.right}>
                            <h3>We understand that startups look to solve unsolved problems. We strongly believe that this requires the best available talent. Our developers are experienced graduates from India’s top 20 engineering schools. Having the finest brains in the industry ensures:</h3>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>Doers who are well-equipped to solve unique problems in your product</h4>

                                </div>
                            </div>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>A first-time right product shipped with every release</h4>

                                </div>
                            </div>

                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>New ideas that help you build a game-changing product</h4>

                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className={styles.row}>
                        <Col span={8} className={styles.left}>
                            <div className={styles.iconBox}>
                                <Image
                                    src="/image5.png"
                                    alt="Feature Icon"
                                    width={370}
                                    height={80}
                                    className={styles.iconImg}
                                />
                            </div>
                        </Col>
                        <Col span={16} className={styles.right}>
                            <h3>We invest time and efforts in learning new technologies before they become trends. Our R&D team plays a vital role in capability building with a systematic approach to learning and development and ensures:</h3>
                            <div className={styles.item}>
                                <span className={styles.dot} />
                                <div>
                                    <h4>Effective use of the latest tools and technologies to better your user experience, performance, and cost optimization</h4>

                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </section>

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

