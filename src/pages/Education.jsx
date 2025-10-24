import React from "react";
import { EDUCATION } from "../data/education";
import "../styles/education.css";
import { FaUniversity, FaLaptopCode, FaSchool, FaCertificate } from "react-icons/fa";

export default function Education() {
    // Added FaCertificate as the 4th icon for Higher Secondary Certificate
    const icons = [<FaUniversity />, <FaLaptopCode />, <FaSchool />, <FaCertificate />];

    return (
        <section className="education">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
                {EDUCATION.map((e, i) => (
                    <div key={i} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                        <div className="timeline-icon">{icons[i]}</div>
                        <div className="timeline-card">
                            <span className="timeline-period">{e.period}</span>
                            <h3 className="degree">{e.degree}</h3>
                            <p className="institute">{e.institute}</p>
                            <p className="details">{e.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}