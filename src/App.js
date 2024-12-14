import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  // Define enhanced internal CSS styles
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#f4f4f9",
    },
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#007bff",
      padding: "10px 20px",
      color: "white",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    logo: {
      height: "50px",
    },
    navbarButton: {
      background: "linear-gradient(90deg, #0066cc, #004d99)",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      marginLeft: "10px",
      cursor: "pointer",
      transition: "all 0.3s",
      fontSize: "14px",
    },
    navbarButtonHover: {
      background: "linear-gradient(90deg, #004d99, #003366)",
    },
    header: {
      textAlign: "center",
      padding: "50px 0",
      backgroundColor: "#e8f0fe",
      borderBottom: "1px solid #ddd",
    },
    options: {
      display: "flex",
      justifyContent: "space-around",
      padding: "20px",
      gap: "20px",
    },
    option: {
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s",
      backgroundColor: "#fff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    optionHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    },
    optionImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "10px",
    },
    section: {
      padding: "20px",
      margin: "20px 0",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    contactInfo: {
      textAlign: "center",
      lineHeight: "1.5",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      fontWeight: "bold",
    },
    linkHover: {
      color: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <img src="logo.jpg" alt="Logo" style={styles.logo} />
        <button
          style={styles.navbarButton}
          onClick={() =>
            document.getElementById("home-details").scrollIntoView({ behavior: "smooth" })
          }
        >
          Home
        </button>
        <button
          style={styles.navbarButton}
          onClick={() =>
            document.getElementById("about").scrollIntoView({ behavior: "smooth" })
          }
        >
          About
        </button>
        <button
          style={styles.navbarButton}
          onClick={() =>
            document.getElementById("doctor-info").scrollIntoView({ behavior: "smooth" })
          }
        >
          About the Doctor
        </button>
        <button
          style={styles.navbarButton}
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Us
        </button>
      </div>

      {/* Header */}
      <header style={styles.header}>
        <h1>Welcome to the Khatushyam Healthcare Services</h1>
      </header>

      {/* Options Section */}
      <main>
        <div style={styles.options}>
          <div
            style={styles.option}
            onClick={() => navigate("/book-appointment")}
          >
            <img src="image3.png" alt="Book Appointment" style={styles.optionImage} />
            <h2>Book an Appointment</h2>
            <p>Patients can easily book an appointment with a doctor.</p>
          </div>
          <div
            style={styles.option}
            onClick={() => navigate("/doctor-login")}
          >
            <img src="image1.png" alt="Doctor's Database" style={styles.optionImage} />
            <h2>Doctor's Database/Login</h2>
            <p>Doctors can view appointments and manage their schedule.</p>
          </div>
        </div>

        {/* Home Details Section */}
        <section id="home-details" style={{ ...styles.section, textAlign: "justify" }}>
          <h2 style={{ textAlign: "center", color: "#007bff" }}>Home Details</h2>
          <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
            Khatushyam Healthcare Services is designed to streamline the process of booking
            appointments with healthcare providers. Patients can navigate the platform
            effortlessly to find available doctors, view their schedules, and book appointments
            at their convenience.
          </p>
          <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
            To use the system, simply click on the <strong>"Book an Appointment"</strong>
            option to start the process. You'll be guided through selecting a doctor, choosing
            a date and time, and confirming your appointment. For doctors, the
            <strong>"Doctor's Database/Login"</strong> option provides tools to manage
            appointments and access patient information securely.
          </p>
          <p style={{ lineHeight: "1.8" }}>
            Our goal is to provide a user-friendly experience that enhances interactions
            between patients and healthcare providers, making healthcare more accessible
            and efficient.
          </p>
        </section>

        <section id="about" style={{ ...styles.section, textAlign: "justify" }}>
          <h2 style={{ textAlign: "center", color: "#007bff" }}>About The Khatushyam Healthcare Services</h2>
          <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
            Khatushyam Healthcare Services is an innovative platform designed to simplify and optimize
            the scheduling process for medical appointments. It bridges the gap between healthcare providers
            and patients, offering a seamless, technology-driven solution for managing appointments.
          </p>
          <h3 style={{ color: "#0056b3", marginTop: "20px" }}>Vision</h3>
          <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
            Our vision is to revolutionize healthcare accessibility by integrating advanced technology into
            medical appointment management. We aim to create a world where scheduling appointments is as
            effortless as sending a message, eliminating delays and improving patient care.
          </p>
          <h3 style={{ color: "#0056b3", marginTop: "20px" }}>Mission</h3>
          <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
            To empower patients and healthcare providers with tools that enhance their interactions. Our
            mission is to simplify administrative tasks for doctors while giving patients a convenient
            way to book appointments, enabling a more efficient and stress-free healthcare experience.
          </p>
          <h3 style={{ color: "#0056b3", marginTop: "20px" }}>Purpose</h3>
          <p style={{ lineHeight: "1.8" }}>
            The primary purpose of the Khatushyam Healthcare Services is to bridge inefficiencies in traditional
            scheduling methods. By leveraging technology, it enhances health service accessibility, organizes
            medical practices, and ultimately contributes to better healthcare outcomes.
          </p>
        </section>

        {/* About Doctor Section */}
        <section id="doctor-info" style={{ ...styles.section, textAlign: "justify" }}>
          <h2 style={{ textAlign: "center", color: "#007bff" }}>About the Doctor</h2>
          <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
            Dr. Vipin Galav is a renowned healthcare professional with over a decade of experience
            in providing quality medical care. Specializing in general medicine, he is committed
            to improving patient outcomes through personalized treatment plans and compassionate care.
          </p>
          <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
            <strong>Education:</strong> Dr. Galav completed his MBBS from the prestigious All India Institute of Medical Sciences (AIIMS) and pursued his MD in Internal Medicine at the same institution. He has also attended specialized training programs in preventive healthcare and chronic disease management.
          </p>
          <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
            <strong>Experience:</strong> With over 12 years in the medical field, Dr. Galav has worked in top-tier hospitals, including Apollo Hospitals and Fortis Healthcare. His extensive experience includes treating a wide range of medical conditions and managing patient care in both outpatient and inpatient settings.
          </p>
          <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
            <strong>Awards & Recognition:</strong> He has been recognized for his excellence in patient care and has received the "Best Physician Award" from the Indian Medical Association.
          </p>
          <p style={{ lineHeight: "1.8" }}>
            To schedule an appointment with Dr. Vipin Galav, navigate to the "Book an Appointment"
            section. We are here to assist you with any medical needs.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ ...styles.section, textAlign: "center" }}>
          <h2 style={{ color: "#007bff", marginBottom: "20px" }}>Contact Us</h2>
          <div style={{ lineHeight: "2", fontSize: "16px" }}>
          <p>
              <b>Phone: </b>
              <a href="tel:+917599406897" style={styles.link}>
                +91-7599406897
              </a>
            </p>
            <p>
              <b>Email: </b>
              <a href="mailto:docappointmentsys@gmail.com" style={styles.link}>
                KhatushyamHealthcareServices123@gmail.com
              </a>
            </p>
            <p>
              <b>Address: </b>
              Khatushyam Healthcare Services, Anwalkhera, Agra, Uttar Pradesh, India
            </p>
            <p>
              <b>Follow Us: </b>
              <a href="https://facebook.com" style={styles.link} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>,
              <a href="https://twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>,
              <a href="https://linkedin.com" style={styles.link} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>,
              <a href="https://youtube.com" style={styles.link} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </p>
          </div>
          
        </section>
        
      </main>
    </div>
  );
}

export default App;
