import aboutme from "../images/AboutMePic.jpg";

function About() {
  return (
    <div>
      <h2>About</h2>
      <div className="about">
        <img src={aboutme} alt="Sarah Bryant" />
        <div className="about-content">
          <h2>Sarah Bryant</h2>
          <p>
            Hello! I'm a proud mom, current hairstylist, and soon-to-be graduate
            of UNCC's Full Stack Coding Bootcamp in April 2024, I embody
            versatility and a passion for continuous learning. Balancing my
            roles as a caregiver, artist, and budding technologist, I thrive on
            embracing new challenges and expanding my skill set. Whether I'm
            creating stunning hairstyles or crafting innovative digital
            solutions, my dedication to excellence and adaptability defines my
            journey.{" "}
          </p>
        </div>
      </div>
    </div>
  );
} // Add closing parenthesis and semicolon here

export default About;
