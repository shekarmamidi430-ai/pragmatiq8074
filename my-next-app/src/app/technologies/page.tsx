"use client";

import { useState , useEffect } from "react";
import Image from "next/image";
import { Modal, message,Switch,  } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import styles from "./page.module.css";
import Link from "next/link";


const techData = [
  {
    title: "AI Enabled Application",
    icon: "/tech1.png",
    description:
      "We build AI-powered applications that automate processes, analyze data, and deliver intelligent insights."
  },
  {
    title: "ERP Consulting and Development",
    icon: "/tech2.png",
    description:
      "End-to-end ERP consulting and development to streamline operations and improve business efficiency."
  },
  {
    title: "Web Development",
    icon: "/tech3.png",
    description:
      "Modern, scalable, and high-performance web applications tailored to your business needs."
  },
  {
    title: "Mobile App Development",
    icon: "/tech4.png",
    description:
      "Native and cross-platform mobile apps with seamless user experience and strong performance."
  },
  {
    title: "Data Visualization",
    icon: "/tech5.png",
    description:
      "Interactive dashboards and visual analytics that transform complex data into clear insights."
  },
  {
    title: "Frontend Development",
    icon: "/tech6.png",
    description:
      "Pixel-perfect frontend interfaces using modern frameworks and best UX practices."
  },
  {
    title: "UIUX Designing",
    icon: "",
    description:
      "User-centric UI/UX designs that enhance usability, engagement, and brand experience."
  },
  {
    title: "Enterprises Portals",
    icon: "/tech8.png",
    description:
      "Secure and scalable enterprise portals for internal operations and customer engagement."
  },
  {
    title: "Open source CMS & E-commerce",
    icon: "/icons/cms.svg",
    description:
      "Custom CMS and e-commerce solutions using powerful open-source platforms."
  }
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


      <section className={styles.section}>


        <div className={styles.frameBox}>

          <span className={`${styles.frame} ${styles.topLeft}`} />
          <span className={`${styles.frame} ${styles.topRight}`} />
          <span className={`${styles.frame} ${styles.bottomLeft}`} />
          <span className={`${styles.frame} ${styles.bottomRight}`} />


        <button className={styles.contactBtn} onClick={showModal}>
          Contact Us
        </button>
        

          <h2 className={styles.heading}>Technologies</h2>
          <p className={styles.subText}>
            We'll help you choose technologies, setup the right architecture, and
            leverage emerging tools and trends, all the while keeping the product
            vision intact.
          </p>
        </div>

 <div className={styles.grid}>
  {techData.map((item, i) => (
    <div key={i} className={styles.card}>
      <div className={styles.iconWrap}>
        <Image src={item.icon} alt={item.title} width={128} height={48} />
        <span className={styles.iconLine} />
      </div>

      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  ))}
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
