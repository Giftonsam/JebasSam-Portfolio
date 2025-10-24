import React, { useState } from "react";
import emailjs from "emailjs-com";
import { PROFILE } from "../data/profile";
import "../styles/contact.css";
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaGlobe,
    FaFileDownload,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_f2k4k9i",     // 🔹 Replace with EmailJS service ID
                "template_dkwpgg3",    // 🔹 Replace with EmailJS template ID
                { 
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                    reply_to: form.email,
                },
                "NjjNI3nE2AeU3P4Fh"      // 🔹 Replace with EmailJS public key
            )
            .then(
                () => {
                    setSent(true);
                    setError("");
                    setForm({ name: "", email: "", message: "" });
                    setTimeout(() => setSent(false), 4000);
                },
                (err) => {
                    console.error("EmailJS Error:", err);
                    setError("❌ Something went wrong. Please try again later.");
                }
            );
    };

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <p className="contact-subtitle">
                Let’s connect! Feel free to reach out through the form or directly.
            </p>

            <div className="contact-grid">
                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                    />
                    <textarea
                        rows="6"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                    />
                    <div className="contact-actions">
                        <button className="btn primary" type="submit">
                            Send Message
                        </button>
                    </div>
                    {sent && <div className="toast">✅ Message sent successfully!</div>}
                    {error && <div className="toast error">{error}</div>}
                </form>

                {/* Contact Info */}
                <aside className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>
                        <FaEnvelope className="icon" />{" "}
                        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                    </p>
                    <p>
                        <FaPhoneAlt className="icon" />{" "}
                        <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
                    </p>

                    <div className="contact-socials">
                        <a
                            className="social-btn linkedin"
                            href={PROFILE.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a
                            className="social-btn github"
                            href={PROFILE.socials.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub /> GitHub
                        </a>
                        <a
                            className="social-btn instagram"
                            href={PROFILE.socials.instagram_personal}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram /> Instagram
                        </a>
                        <a
                            className="social-btn netlify"
                            href={PROFILE.socials.netlify}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGlobe /> Netlify
                        </a>
                        <a className="social-btn resume" href={PROFILE.socials.resume} download>
                            <FaFileDownload /> Resume
                        </a>
                    </div>
                </aside>
            </div>
        </section>
    );
}
