
"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Carousel, Switch, Row, Col, Modal, message, } from "antd";
import { MoonOutlined, SunOutlined, } from "@ant-design/icons";

const data = [
    {
        number: "01",
        title: "Turn ideas to products",
        description: "Turn your idea into a minimum viable product in 90 days.",
    },
    {
        number: "02",
        title: "Fast-track tech pace",
        description: "Accelerate your tech growth to keep pace with business demands.",
    },
    {
        number: "03",
        title: "Bridge tech skill gaps",
        description:
            "Access to a team of all-rounders to specialists in niche tech areas.",
    },
];


const customers = [
    {
        logo: "/logo2.png",
        text: `Pragmatiq has proven to be an excellent technology partner for ClinAlly. They seamlessly collaborated with our product team, efficiently collected user requirements, comprehended the scope of work, and consistently delivered high-quality products on time, providing continuous support.`,
        name: "Dr. Devraj Jindal",
        role: "CEO, Clinally",
        avatar: "/client1.jpg",
    },
    {
        logo: "/logo6.png",
        text: `As the founder of PadhoBadho, I highly recommend Pragmatiq Systems for their exceptional technical expertise in enhancing our website, server configurations, email setups, and AWS management. Their professionalism, dedication, and in-depth knowledge have significantly contributed to our platform's success.`,
        name: "Rajdeep Singh",
        role: "Founder & CEO, PadhoBadho",
        avatar: "/client.png",
    },
    {
        logo: "/logo9.png",
        text: `Pragmatiq is our technology partner since 2020. The team is professional and has in-depth knowledge of the subject. Leadership believes in quality work and long-term impact. They are not only the service provider but thought partners too.`,
        name: "Sudhir Patel",
        role: "Co-Founder & CEO, Quinary Global",
        avatar: "/clients.png",
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
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message: msg } = formData;
        if (!name || !email || !msg) {
            message.error("Please fill in all fields!");
            return;
        }

        console.log("Contact Form Submitted:", formData);
        message.success("Message sent successfully!");
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

            <section className={styles.hero0}>
                <h1 className={styles.heroTitle0}>
                    <span>We are</span>
                    <br />
                    <span className={styles.gradient0}>Startup Experts</span>
                </h1>
                <p className={styles.heroDesc0}>
                    A track record of building 100+ technology products over the last 05 years.{" "}
                    <strong className={styles.experienceStrong0}>Experience Matters!</strong>
                </p>
                <div className={styles.glow0} />
                <button className={styles.contactBtn} onClick={showModal}>
                    Contact Us
                </button>
            </section>

            <div className={styles.sectionWrapper1}>
                <div className={styles.leftSide1}>
                    <h1>PERS<br />ONAL<br />IZED</h1>
                </div>
                <div className={styles.rightSide1}>
                    <h2 className={styles.heading1}>What We Do</h2>
                    <Row gutter={[32, 32]}>
                        {data.map((item) => (
                            <Col xs={24} md={8} key={item.number}>
                                <div className={styles.card1}>
                                    <h1 className={styles.number1}>{item.number}</h1>
                                    <h3 className={styles.title1}>{item.title}</h3>
                                    <p className={styles.description1}>{item.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

            <section className={styles.worksSection8}>
                <h1 className={styles.heading8}>Our Personalized Products</h1>

                <div className={`${styles.workCard8} ${styles.second}`}>

                    <Image
                        src="/Group 46.png"
                        alt="Image 1"
                        fill
                        className={`${styles.bgImage8} ${styles.imageOne}`}
                    />


                    <Image
                        src="/group1.png"
                        alt="Image 2"
                        fill
                        className={`${styles.bgImage9} ${styles.imageTwo}`}
                    />

                    <Image
                        src="/group2.png"
                        alt="Image 3"
                        fill
                        className={`${styles.bgImage10} ${styles.imageThree}`}
                    />
                </div>
            </section>

            <section className={styles.servicesSection3}>
                <h2 className={styles.heading3}>Our Services</h2>
                <div className={styles.grid3}>
                    {[
                        { img: "/services1.png", text: "AI Enabled Application" },
                        { img: "/services2.png", text: "Mobile Apps" },
                        { img: "/services3.png", text: "Front End Develop" },
                        { img: "/services6.png", text: "Backend Develop" },
                        { img: "/services5.png", text: "UIUX" },
                        { img: "/services4.png", text: "Web Development" },
                    ].map((service, i) => (
                        <div className={styles.card3} key={i}>
                            <div className={styles.imageOnly3}>
                                <Image src={service.img} alt={service.text} width={132} height={72} />
                            </div>
                            <p className={styles.serviceText3}>{service.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section4}>
                <h2 className={styles.heading4}>Customer Speaks</h2>

                <Carousel
                    autoplay
                    autoplaySpeed={1200}
                    speed={500}
                    className={styles.carousel4}
                >
                    {customers.map((c, i) => (
                        <div key={i}>
                            <div className={styles.card4}>
                                <div className={styles.left4}>
                                    <h3>
                                        Customer
                                        <br />
                                        Speak
                                    </h3>
                                </div>

                                <div className={styles.right4}>
                                    <Image src={c.logo} alt="logo" width={200} height={70} />

                                    <p className={styles.text4}>{c.text}</p>

                                    <div className={styles.profile4}>
                                        <Image
                                            src={c.avatar}
                                            alt={c.name}
                                            width={56}
                                            height={56}
                                            className={styles.avatar4}
                                        />
                                        <div>
                                            <p className={styles.name4}>{c.name}</p>
                                            <p className={styles.role4}>{c.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </section>

            <section className={styles.section5}>
                <h2 className={styles.title5}>
                    <span className={styles.blue5}>Our</span>{" "}
                    <span className={styles.purple5}>Partners</span>
                </h2>
                <div className={styles.marqueeWrapper5}>
                    <div className={styles.marqueeContent5}>
                        <div className={styles.logos5}>
                            {["/task1.png", "/task2.png", "/task3.png", "/task4.png", "/task5.jpeg"].map((logo, i) => (
                                <Image key={i} src={logo} alt="partner" width={160} height={60} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.section6}>
                <h2 className={styles.heading6}>
                    <span className={styles.blue6}>News</span>
                    <span className={styles.purple6}>/Events</span>
                </h2>

                <div className={styles.cardGrid6}>
                    <div className={styles.card6}>
                        <div className={styles.imageWrap6}>
                            <Image src="/ceo1.png" alt="CEO Insights" fill className={styles.image6} />
                        </div>
                        <div className={styles.content6}>
                            <h3>CEO Insights - India</h3>
                            <p>Top 10 leaders from Telangana Startups</p>
                        </div>
                    </div>

                    <div className={styles.card6}>
                        <div className={styles.imageWrap6}>
                            <Image src="/ceo2.png" alt="ISCR Conference" fill className={styles.image6} />
                        </div>
                        <div className={styles.content6}>
                            <h3>Conferences</h3>
                            <p>ISCR 2023 - Technology in Clinical Research</p>
                        </div>
                    </div>

                    <div className={styles.card6}>
                        <div className={styles.imageWrap6}>
                            <Image src="/ceo3.png" alt="App Launch" fill className={styles.image6} />
                        </div>
                        <div className={styles.content6}>
                            <h3>App Launch</h3>
                            <p>
                                The education revolution is here. Experience our product &apos;Purplegene&apos;.
                            </p>
                        </div>
                    </div>
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






































