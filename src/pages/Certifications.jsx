// Certifications.jsx - Certifications page component
import React, { useState } from 'react';
import { FaTimes, FaExternalLinkAlt, FaDownload, FaSearch } from 'react-icons/fa';
import '../styles/certifications.css';

// Certificate data - Add your actual certificates here
const CERTIFICATES = [
    {
        id: 1,
        title: "Placement Training",
        organization: "TAMILNADU ADVANCED TECHNICAL TRAINING INSTITUTE",
        date: "2022",
        image: "/certificates/1.jpg",
        description: "Certificate Cource on Placement Training",
        skills: ["English Grammer","Aptitude","Communication"]
        // credentialId: "UC-12345678"
        // verifyUrl: "https://example.com/verify/12345678"
    },
    {
        id: 2,
        title: "Zero Shadow Day",
        organization: "TAMILNADU SCIENCE AND TECHNOLOGY CENTRE, CHENNAI",
        date: "2022",
        image: "/certificates/2.jpg",
        description: "Regional Level Science Exhibition on Zero Shadow Day",
        skills: ["Get Knowledge about Shadow","Science Exhibition","Innovative Ideas"]
        // credentialId: "NT-87654321"
        // verifyUrl: "https://example.com/verify/87654321"
    },
    {
        id: 3,
        title: "SMART INDIA HACKATHON",
        organization: "Innovation Cell",
        date: "2022",
        image: "/certificates/3.jpg",
        description: "articipation in National Level Hackathon organized by Govt of India",
        skills: ["Hackathon", "Problem Solving", "Team Collaboration", "Innovation"]
        // credentialId: "IBM-11223344",
        // verifyUrl: "https://example.com/verify/11223344"
    },
    {
        id: 4,
        title: "IDEATHON 2022",
        organization: "Kangeyam groups of Institutions",
        date: "2022",
        image: "/certificates/4.jpg",
        description: "Participation in National Level Ideathon on AI based Security System",
        skills: ["AI", "Security", "Innovation", "Problem Solving"]
        // credentialId: "IBM-44332211",
        // verifyUrl: "https://example.com/verify/44332211"
    },
    {
        id: 5,
        title: "SJC's National level Innovation Feast",
        organization: "St.Joseph's College (Autonomous), Tiruchirappalli",
        date: "2023",
        image: "/certificates/5.jpg",
        description: "Participation in National Level Innovation Feast on multilingual Tamil poetry translation website with text-to-speech functionality",
        skills: ["Web Development", "NLP", "Text-to-Speech", "Innovation"]
        // credentialId: "WF-55667788",
        // verifyUrl: "https://example.com/verify/55667788"
    },
    // {
    //     id: 6,
    //     title: "Java Full Stack Development",
    //     organization: "QSpiders",
    //     date: "2024",
    //     image: "/certificates/6.jpg",
    //     description: "Complete Java Full Stack Development certification",
    //     skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    //     credentialId: "QS-99887766",
    //     verifyUrl: "https://example.com/verify/99887766"
    // },
    {
        id: 6,
        title: "Attendance Certificate",
        organization: "Patrician College of Arts and Science",
        date: "2023",
        image: "/certificates/6.jpg",
        description: "Attendance Certificate for the Academic Year 2020-2023",
        skills: ["Attendance"]
        // credentialId: "QS-99887766",
        // verifyUrl: "https://example.com/verify/99887766"
    },
    {
        id: 7,
        title: "International Conference on Embrasing Excellence in Computer Research And Innovations (EECRI-2024)",
        organization: "Patrician College of Arts and Science",
        date: "2024",
        image: "/certificates/7.jpg",
        description: "SMART CITY IN IOT Paper Presentation",
        skills: ["IoT", "Smart City", "Research", "Innovation"]
        // credentialId: "WF-55667788",
        // verifyUrl: "https://example.com/verify/55667788"
    },
    {
        id: 8,
        title: "CERTIFICATE OF APPRECIATION",
        organization: "Thiruthangal Nadar College",
        date: "2024",
        image: "/certificates/8.jpg",
        description: "For Creating an Innovation Cell Logo for Thiruthangal Nadar College",
        skills: ["Graphic Design", "Creativity", "Innovation"]
        // credentialId: "WF-55667788",
        // verifyUrl: "https://example.com/verify/55667788"
    },
    {
        id: 9,
        title: "2nd NATIONAL CONFERENCE",
        organization: "Thiruthangal Nadar College",
        date: "2024",
        image: "/certificates/9.jpg",
        description: "SMART HOME IN IoT Paper Presentation",
        skills: ["IoT", "Smart Home", "Research", "Innovation"]
        // credentialId: "WF-55667788",
        // verifyUrl: "https://example.com/verify/55667788"
    },
    // {
    //     id: 10,
    //     title: "Employability Skills Foundation",
    //     organization: "Wadhwani",
    //     date: "2024",
    //     image: "/certificates/10.jpg",
    //     description: "Essential skills for professional development and career growth",
    //     skills: ["Communication", "Leadership", "Problem Solving", "Team Work"],
    //     credentialId: "WF-55667788",
    //     verifyUrl: "https://example.com/verify/55667788"
    // }
    // ,
    // {
    //     id: 11,
    //     title: "Employability Skills Foundation",
    //     organization: "Wadhwani",
    //     date: "2024",
    //     image: "/certificates/11.jpg",
    //     description: "Essential skills for professional development and career growth",
    //     skills: ["Communication", "Leadership", "Problem Solving", "Team Work"],
    //     credentialId: "WF-55667788",
    //     verifyUrl: "https://example.com/verify/55667788"
    // },
    // {
    //     id: 12,
    //     title: "Employability Skills Foundation",
    //     organization: "Wadhwani",
    //     date: "2024",
    //     image: "/certificates/12.jpg",
    //     description: "Essential skills for professional development and career growth",
    //     skills: ["Communication", "Leadership", "Problem Solving", "Team Work"],
    //     credentialId: "WF-55667788",
    //     verifyUrl: "https://example.com/verify/55667788"
    // },
    // {
    //     id: 13,
    //     title: "Employability Skills Foundation",
    //     organization: "Wadhwani",
    //     date: "2024",
    //     image: "/certificates/13.jpg",
    //     description: "Essential skills for professional development and career growth",
    //     skills: ["Communication", "Leadership", "Problem Solving", "Team Work"],
    //     credentialId: "WF-55667788",
    //     verifyUrl: "https://example.com/verify/55667788"
    // },
    // {
    //     id: 14,
    //     title: "Employability Skills Foundation",
    //     organization: "Wadhwani",
    //     date: "2024",
    //     image: "/certificates/14.jpg",
    //     description: "Essential skills for professional development and career growth",
    //     skills: ["Communication", "Leadership", "Problem Solving", "Team Work"],
    //     credentialId: "WF-55667788",
    //     verifyUrl: "https://example.com/verify/55667788"
    // },
    {
        id: 15,
        title: "ADD ON COURSE ON ARTIFICIAL INTELLIGENCE FOR ECONOMICS",
        organization: "Thiruthangal Nadar College",
        date: "2024- 2025",
        image: "/certificates/15.jpg",
        description: "Essential skills for professional development and career growth",
        skills: ["Communication", "Problem Solving"]
        // credentialId: "WF-55667788",
        // verifyUrl: "https://example.com/verify/55667788"
    },
    {
        id: 16,
        title: "COURSE COMPLETION CERTIFICATE ON CORE AND ADVANCED PYTHON PROGRAMMING",
        organization: "Elysium Academy",
        date: "2021",
        image: "/certificates/16.jpg",
        description: "Completed Core and Advanced Python Programming Course",
        skills: ["Python", "Programming", "Problem Solving"]
        // credentialId: "WF-55667788",
        // verifyUrl: "https://example.com/verify/55667788"
    },
    {
        id: 18,
        title: "COURSE COMPLETION CERTIFICATE ON ADVANCED JAVA PROGRAMMING",
        organization: "Greens Technology",
        date: "2023",
        image: "/certificates/17.jpg",
        description: "Completed Advanced Java Programming Course",
        skills: ["Java", "Programming", "Problem Solving"]
        // credentialId: "WF-55667788",
        // verifyUrl: "https://example.com/verify/55667788"
    },
];

export default function Certifications() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSkill, setSelectedSkill] = useState('');

    // Get all unique skills
    const allSkills = [...new Set(CERTIFICATES.flatMap(cert => cert.skills))].sort();

    // Filter certificates based on search and skill filter
    const filteredCertificates = CERTIFICATES.filter(cert => {
        const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesSkill = selectedSkill === '' || cert.skills.includes(selectedSkill);

        return matchesSearch && matchesSkill;
    });

    const openModal = (certificate) => {
        setSelectedCertificate(certificate);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCertificate(null);
        document.body.style.overflow = 'unset';
    };

    const handleDownload = (certificate) => {
        // In a real application, you would implement actual download functionality
        console.log(`Downloading certificate: ${certificate.title}`);
        alert('Download functionality would be implemented here');
    };

    const handleVerify = (certificate) => {
        if (certificate.verifyUrl) {
            window.open(certificate.verifyUrl, '_blank');
        }
    };

    return (
        <section className="certifications">
            <div className="certifications-container">
                {/* Header */}
                <div className="certifications-header">
                    <h2>Certifications & Achievements</h2>
                    <p className="certifications-subtitle">
                        My professional certifications and achievements that showcase my expertise and commitment to continuous learning.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="certifications-controls">
                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search certifications..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <select
                        className="skill-filter"
                        value={selectedSkill}
                        onChange={(e) => setSelectedSkill(e.target.value)}
                    >
                        <option value="">All Skills</option>
                        {allSkills.map(skill => (
                            <option key={skill} value={skill}>{skill}</option>
                        ))}
                    </select>
                </div>

                {/* Results count */}
                <div className="results-count">
                    Showing {filteredCertificates.length} of {CERTIFICATES.length} certifications
                </div>

                {/* Certificates Grid */}
                <div className="certificates-grid">
                    {filteredCertificates.map((certificate) => (
                        <div
                            key={certificate.id}
                            className="certificate-card"
                            onClick={() => openModal(certificate)}
                        >
                            <div className="certificate-image">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DZXJ0aWZpY2F0ZSBJbWFnZTwvdGV4dD48L3N2Zz4=';
                                    }}
                                />
                                <div className="certificate-overlay">
                                    <span className="view-details">View Details</span>
                                </div>
                            </div>

                            <div className="certificate-info">
                                <h3 className="certificate-title">{certificate.title}</h3>
                                <p className="certificate-organization">{certificate.organization}</p>
                                <p className="certificate-date">{certificate.date}</p>

                                <div className="certificate-skills">
                                    {certificate.skills.slice(0, 3).map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                    {certificate.skills.length > 3 && (
                                        <span className="skill-tag more">+{certificate.skills.length - 3} more</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCertificates.length === 0 && (
                    <div className="no-results">
                        <p>No certifications found matching your criteria.</p>
                        <button
                            className="btn secondary"
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedSkill('');
                            }}
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedCertificate && (
                <div className="certificate-modal-overlay" onClick={closeModal}>
                    <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>

                        <div className="modal-content">
                            <div className="modal-image">
                                <img
                                    src={selectedCertificate.image}
                                    alt={selectedCertificate.title}
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DZXJ0aWZpY2F0ZSBJbWFnZTwvdGV4dD48L3N2Zz4=';
                                    }}
                                />
                            </div>

                            <div className="modal-details">
                                <h3>{selectedCertificate.title}</h3>
                                <p className="modal-organization">{selectedCertificate.organization}</p>
                                <p className="modal-date">Completed: {selectedCertificate.date}</p>
                                <p className="modal-description">{selectedCertificate.description}</p>

                                {selectedCertificate.credentialId && (
                                    <p className="credential-id">
                                        <strong>Credential ID:</strong> {selectedCertificate.credentialId}
                                    </p>
                                )}

                                <div className="modal-skills">
                                    <h4>Skills Gained:</h4>
                                    <div className="skills-list">
                                        {selectedCertificate.skills.map((skill, index) => (
                                            <span key={index} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-actions">
                                    <button
                                        className="btn primary"
                                        onClick={() => handleDownload(selectedCertificate)}
                                    >
                                        <FaDownload /> Download
                                    </button>

                                    {selectedCertificate.verifyUrl && (
                                        <button
                                            className="btn secondary"
                                            onClick={() => handleVerify(selectedCertificate)}
                                        >
                                            <FaExternalLinkAlt /> Verify
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}