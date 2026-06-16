import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faLayerGroup,
  faCodeMerge,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Tag from "./ui/Tag";
import styles from "./PortfolioGrid.module.css";
import { education, experiences, highlights, projects, techStack} from "../content";
import {} from "../content"

function PortfolioGrid() {

  useEffect(() => {
    if (!document.getElementById("testdome-embed-script")) {
      const script = document.createElement("script");
      script.id = "testdome-embed-script";
      script.src =
        "https://www.testdome.com/content/certificates/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    if (!document.getElementById("testdome-embed-css")) {
      const link = document.createElement("link");
      link.id = "testdome-embed-css";
      link.href =
        "https://www.testdome.com/content/certificates/embed.css";
      link.rel = "stylesheet";
      link.type = "text/css";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className={styles.grid} id="projects">
      {highlights.map((item) => (
        <Card key={item.title} className={styles.highlight} variant="accent">
          {/* <p className={styles.eyebrow}>Focus</p> */}
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardBody}>{item.description}</p>
          <Button href={item.cta.href} variant="primary">
            {item.cta.label}
          </Button>
        </Card>
      ))}

      <Card className={styles.stackCard}>
        <div className={styles.cardHead}>
          <h3 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faLayerGroup} /> Tech Stack
          </h3>
          <hr/>
        </div>
        <div className={styles.stackGrid}>
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className={styles.stackGroup}>
              <p className={styles.stackLabel}>{category}</p>
              <div className={styles.tagRow}>
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className={styles.timelineCard} id="experience">
        <div className={styles.cardHead}>
          <h3 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faBriefcase} /> Experience
          </h3>
          <hr/>
        </div>
        <div className={styles.timeline}>
          {experiences.map((item) => (
            <article key={`${item.role}-${item.period}`} className={styles.timelineItem}>
              <div className={styles.timelineTop}>
                <h4>{item.role}
                </h4> 
                <span>{item.period}</span>
              </div>
              <p className={styles.timelineOrg}>{item.org}</p>
              <ul className={styles.timelineDetails}>
                {item.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              {item.skills && (
                <div className={styles.tagRow}>
                  {item.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Card>

      <Card className={styles.timelineCard}>
        <div className={styles.cardHead}>
          <h3 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </h3>
          <hr/>
        </div>
        <div className={styles.timeline}>
          {education.map((item) => (
            <article key={`${item.school}-${item.period}`} className={styles.timelineItem}>
              <div className={styles.timelineTop}>
                <h4>{item.school}</h4>
                <span>{item.period}</span>
              </div>
              <p className={styles.timelineOrg}>{item.detail}</p>
              <ul className={styles.timelineDetails}>
                {Array.isArray(item.bullets) ? (
                  item.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)
                ) : (
                  <li>{item.bullets}</li>
                )}
              </ul>
            </article>
          ))}
        </div>
      </Card>

      <Card className={styles.projectsCard}>
        <div className={styles.cardHead}>
          <h3 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faCodeMerge} /> 
            Personal Projects
          </h3>
           <hr/>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article key={project.name} className={styles.projectItem}>
              <img src={project.image} alt={project.name} />
              <div className={styles.projectBody}>
                <h4>{project.name} <hr /> </h4>
                <p>
                  <strong>Tech Stacks: </strong>
                  {project.techStack.join(", ")}
                </p>
                  <p>
                   <strong>Description:</strong> {project.description}
                  </p>
                <p>
                  <strong>Status:</strong> {project.status}
                </p>
                  {project.href !== "#" && (
                    <Button size="sm" href={project.href} target="_blank">
                      View Project
                    </Button>
                  )}
              </div>
            </article>
          ))}
        </div>
      </Card>

      {/* certifications */} 
     <Card className={styles.timelineCard}>
  <div className={styles.cardHead}>
    <h3 className={styles.sectionTitle}>
      <FontAwesomeIcon icon={faTrophy} />
      Certifications
    </h3>
    <hr />
  </div>

  <div className={styles.certGrid}>

    {/* JavaScript */}
    <a
      href="https://www.testdome.com/certificates/3deda3907b6f496f8b387064c58a0ac9"
      className="testdome-certificate-stamp gold"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="testdome-certificate-name">Renz Jorges Jared...</span>
      <span className="testdome-certificate-test-name">JavaScript</span>
      <span className="testdome-certificate-card-logo">
        TestDome<br />
        Certificate
      </span>
    </a>

    {/* Scrum Master */}
    <a
      href="https://www.testdome.com/certificates/3cedbd636442430db12bc89dc9fb6855"
      className="testdome-certificate-stamp silver"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="testdome-certificate-name">Renz Jorges Jared...</span>
      <span className="testdome-certificate-test-name">Scrum Master</span>
      <span className="testdome-certificate-card-logo">
        TestDome<br />
        Certificate
      </span>
    </a>

    {/* C++ */}
    <a
      href="https://www.testdome.com/certificates/85b7f49489904a2d946509fe3f994667"
      className="testdome-certificate-stamp gold"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="testdome-certificate-name">Renz Jorges Jared...</span>
      <span className="testdome-certificate-test-name">C++</span>
      <span className="testdome-certificate-card-logo">
        TestDome<br />
        Certificate
      </span>
    </a>

    {/* React */}
    <a
      href="https://www.testdome.com/certificates/4e8ab47fc24f4780b6082c817f8ce387"
      className="testdome-certificate-stamp gold"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="testdome-certificate-name">Renz Jorges Jared...</span>
      <span className="testdome-certificate-test-name">React</span>
      <span className="testdome-certificate-card-logo">
        TestDome<br />
        Certificate
      </span>
    </a>

    {/* Laravel */}
    <a
      href="https://www.testdome.com/certificates/40daa1e938264231934b4faa17c2fd07"
      className="testdome-certificate-stamp silver"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="testdome-certificate-name">Renz Jorges Jared...</span>
      <span className="testdome-certificate-test-name">Laravel</span>
      <span className="testdome-certificate-card-logo">
        TestDome<br />
        Certificate
      </span>
    </a>

  </div>
</Card>

      
    </section>
  );
}

export default PortfolioGrid;
