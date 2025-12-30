
"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Switch, Modal, message, } from "antd";
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

                <div className={styles.contactWrap1}>
                    <Switch
                        checked={dark}
                        onChange={toggleTheme}
                        checkedChildren={<MoonOutlined />}
                        unCheckedChildren={<SunOutlined />}
                    />
                </div>
            </header>

            <div>

                <button className={styles.contactButton} onClick={showModal}>
                    Contact Us
                </button>

                <section className={styles.wrapper}>
                    <span className={`${styles.corner} ${styles.tl}`} />
                    <span className={`${styles.corner} ${styles.tr}`} />
                    <span className={`${styles.corner} ${styles.bl}`} />
                    <span className={`${styles.corner} ${styles.br}`} />

                    <h1 className={styles.title}>Careers</h1>

                    <div className={styles.nav}>
                        <span>Learn</span>
                        <span>Engage</span>
                        <span>Influence</span>
                    </div>
                </section>
            </div>

            <section className={styles.wrapper1}>


                <div className={styles.row}>
                    <div className={styles.left}>
                        <h1>01</h1>
                        <span className={styles.purple}>Learn</span>
                    </div>

                    <div className={styles.right}>
                        <h2>Stay ahead of the curve</h2>
                        <p>
                            Startups must use the latest tools and technologies to stay ahead
                            in the competition. Being tech addicts, this gives us all the more
                            reason to learn and apply the latest technologies and trends. We
                            never stop learning. Learn continuously and stay ahead of your
                            peers outside the organization.
                        </p>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.left}>
                        <h1>02</h1>
                        <span className={styles.purple}>Engage</span>
                    </div>

                    <div className={styles.right}>
                        <h2>Work with the best</h2>
                        <p>
                            However clichéd it sounds; our people are our assets. We choose them
                            carefully. For example, all our developers are graduates from the
                            top 20 engineering colleges. Not even all the IITs and NITs make it
                            to our list! Be continuously challenged by peers as smart as you.
                            Bring out the best in yourself every day.
                        </p>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.left}>
                        <h1>03</h1>
                        <span className={styles.purple}>Influence</span>
                    </div>

                    <div className={styles.right}>
                        <h2>Make an impact</h2>
                        <p>
                            Working for startups requires you to unleash your entrepreneurial
                            spirit. At Pragmatiq, you work for a startup, without the risks
                            associated with joining a startup. Our customers are open to new
                            ideas and you have the freedom to get the job done your way. With
                            a setup of small teams, you get the opportunity to make a
                            difference.
                        </p>
                    </div>
                </div>

            </section>




        <section className={styles.wrapper2}>
  <div className={styles.leftPanel}>
    <div className={styles.leftTop}>
      <h2>Inside<br />Pragmatiq</h2>
    </div>

    <div className={styles.leftBottom}>
      <h2>Current<br />Openings</h2>
    </div>
  </div>

  <div className={styles.rightPanel}>

    <div className={styles.imageWrap}>
      <Image
        src="/office.jpg"
        alt="Office"
        fill
        className={styles.image}
      />
    </div>


    <div className={styles.jobsGrid}>
      {[
        { title: "Full Stack Developer", exp: "3.6 to 6 years" },
        { title: "Flutter developer", exp: "5 – 7 years" },
        { title: "UI/UX Designer", exp: "6 to 8 years" },
        { title: "Node JS Developer", exp: "3.5 to 5.5 years" },
        { title: "Python Developer", exp: "4 to 7 years" },
        { title: "Java Developer", exp: "6 to 18 months" },
      ].map((job, i) => (
        <div key={i} className={styles.jobCard}>
          <span className={styles.trending}>Trending</span>
          <h3>{job.title}</h3>
          <p>
            Years of Experience:<br />
            <strong>{job.exp}</strong>
          </p>
  
        </div>
      ))}
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
