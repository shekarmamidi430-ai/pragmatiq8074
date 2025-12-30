"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import { Switch, Modal, message, Row, Col } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

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

        <h1>Increase Your Chances</h1>

        <p>
          Whether you are an early stage startup, or are looking at growth,
          scaling or transformation, with our unique approach and technical
          expertise we assure to take your product to the next level.
        </p>

        <h2>What We Do</h2>

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
                  src="/choose1.png"
                  alt="Feature"
                  width={370}
                  height={80}
                  className={styles.iconImg}
                />
              </div>
            </Col>

            <Col span={16} className={styles.right}>
              <h3>Turn ideas to products</h3>

              <div className={styles.item}>
                <span className={styles.dot} />
                <div>
                  <h4>Build an MVP</h4>
                  <p>
                    We nail the minimum features required to validate your core
                    hypothesis and get your MVP to market in 90–120 days.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <span className={styles.dot} />
                <div>
                  <h4>Show real value</h4>
                  <p>
                    We evolve your MVP into a feature-rich product users are
                    happy to pay for.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <span className={styles.dot} />
                <div>
                  <h4>Move to market at scale</h4>
                  <p>
                    We optimize databases, caching, automation, and system
                    architecture.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className={styles.row}>
            <Col span={8} className={styles.left}>
              <div className={styles.iconBox}>
                <Image
                  src="/choose2.png"
                  alt="Feature"
                  width={270}
                  height={80}
                  className={styles.iconImg}
                />
              </div>
            </Col>

            <Col span={16} className={styles.right}>
              <h3>Fast-track tech pace</h3>

              <div className={styles.item}>
                <span className={styles.dot} />
                <div>
                  <h4>Build powerful systems</h4>
                  <p>
                    We help engineering teams align to business demands faster.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <span className={styles.dot} />
                <div>
                  <h4>Enhance tech stack</h4>
                  <p>
                    We integrate complementary tools to increase engagement.
                  </p>
                </div>
              </div>
            </Col>
          </Row>


          <Row className={styles.row}>
            <Col span={8} className={styles.left}>
              <div className={styles.iconBox}>
                <Image
                  src="/choose3.png"
                  alt="Feature"
                  width={370}
                  height={80}
                  className={styles.iconImg}
                />
              </div>
            </Col>

            <Col span={16} className={styles.right}>
              <h3>Bridge tech skill gaps</h3>

              <div className={styles.item}>
                <span className={styles.dot} />
                <div>
                  <h4>Grow in-house teams</h4>
                  <p>
                    We invest heavily in emerging technologies to future-proof
                    your product.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <span className={styles.dot} />
                <div>
                  <h4>Support business outcomes</h4>
                  <p>
                    UX, DevOps, AI, and Data teams support your growth goals.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <footer className={styles.footer7}>
        <div className={styles.container7}>
          <div className={styles.left7}>
            <Image src="/prag.png" alt="Pragmatiq" width={146} height={46} />
            <button className={styles.contactBtn7} onClick={showModal}>
              Contact Us
            </button>
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
              <p>AI & Data Science</p>
              <p>Cloud & DevOps</p>
            </div>

            <div className={styles.column7}>
              <h4>Address</h4>
              <p>9999664467</p>
              <p>purplogener.in</p>
              <p>
                Kondapur, Hitech City,
                <br />
                Hyderabad, India
              </p>
            </div>
          </div>
        </div>
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
