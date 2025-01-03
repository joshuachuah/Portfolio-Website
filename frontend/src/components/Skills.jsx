import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved,faBug,faChartLine,} from '@fortawesome/free-solid-svg-icons';
import useScrollAnimation from '../hooks/useScrollAnimation';
import 'devicon/devicon.min.css';

const skillsData = [
  {
    icon: 'devicon-python-plain colored',
    name: 'Python',
    color: '#FFD43B',
    bgColor: 'rgba(255, 212, 59, 0.1)',
    category: 'Languages',
    isDevicon: true
  },
  {
    icon: 'devicon-c-plain colored',
    name: 'C',
    color: '#03599C',
    bgColor: 'rgba(3, 89, 156, 0.1)',
    category: 'Languages',
    isDevicon: true
  },
  {
    icon: 'devicon-html5-plain colored',
    name: 'HTML',
    color: '#E34F26',
    bgColor: 'rgba(227, 79, 38, 0.1)',
    category: 'Frontend',
    isDevicon: true
  },
  {
    icon: 'devicon-css3-plain colored',
    name: 'CSS',
    color: '#1572B6',
    bgColor: 'rgba(21, 114, 182, 0.1)',
    category: 'Frontend',
    isDevicon: true
  },
  {
    icon: 'devicon-javascript-plain colored',
    name: 'JavaScript',
    color: '#F7DF1E',
    bgColor: 'rgba(247, 223, 30, 0.1)',
    category: 'Languages',
    isDevicon: true
  },
  {
    icon: 'devicon-mysql-plain colored',
    name: 'SQL',
    color: '#00618A',
    bgColor: 'rgba(0, 97, 138, 0.1)',
    category: 'Backend',
    isDevicon: true
  },
  {
    icon: 'devicon-csharp-plain colored',
    name: 'C#',
    color: '#682A7B', // Updated from #512BD4 to a more muted purple
    bgColor: 'rgba(104, 42, 123, 0.1)',
    category: 'Languages',
    isDevicon: true
  },
  {
    icon: faChartLine,
    name: 'R',
    color: '#276DC3',
    bgColor: 'rgba(39, 109, 195, 0.1)',
    category: 'Languages',
  },
  {
    icon: 'devicon-react-plain colored',
    name: 'React',
    color: '#61DAFB',
    bgColor: 'rgba(97, 218, 251, 0.1)',
    category: 'Frontend',
    isDevicon: true
  },
  {
    icon: 'devicon-linux-plain colored',
    name: 'Linux',
    color: 'black',
    bgColor: 'rgba(42, 42, 42, 0.1)',
    category: 'Tools',
    isDevicon: true
  },
  {
    icon: 'devicon-docker-plain colored',
    name: 'Docker',
    color: '#2496ED',
    bgColor: 'rgba(36, 150, 237, 0.1)',
    category: 'Tools',
    isDevicon: true
  },
  {
    icon: 'devicon-scikitlearn-plain colored',
    name: 'Scikit-learn',
    color: '#F7931E',
    bgColor: 'rgba(247, 147, 30, 0.1)',
    category: 'Data Science',
    isDevicon: true
  },
  {
    icon: 'devicon-jira-plain colored',
    name: 'Jira',
    color: '#0052CC',
    bgColor: 'rgba(0, 82, 204, 0.1)',
    category: 'Tools',
    isDevicon: true
  },
  {
    icon: 'devicon-bitbucket-plain colored',
    name: 'Bitbucket',
    color: '#172B4D',  // Updated from #0052CC to #2684FF to match the brighter blue
    bgColor: 'rgba(0, 71, 179, 0.08)',
    category: 'Tools',
    isDevicon: true
  },
  {
    icon: 'devicon-bootstrap-plain colored',
    name: 'Bootstrap',
    color: '#7952B3',
    bgColor: 'rgba(121, 82, 179, 0.1)',
    category: 'Frontend',
    isDevicon: true
  },
  {
    icon: faShieldHalved,
    name: 'Burp Suite',
    color: '#FF6633',
    bgColor: 'rgba(255, 102, 51, 0.1)',
    category: 'Security'
  },
  {
    icon: faBug,
    name: 'Metasploit',
    color: '#2A2A2A',
    bgColor: 'rgba(42, 42, 42, 0.1)',
    category: 'Security'
  },
  {
    icon: 'devicon-unity-plain colored',
    name: 'Unity',
    color: '#000000',
    bgColor: 'rgba(0, 0, 0, 0.1)',
    category: 'Game Dev',
    isDevicon: true
  },
  {
    icon: 'devicon-spring-plain colored',
    name: 'Spring Boot',
    color: '#6DB33F',
    bgColor: 'rgba(109, 179, 63, 0.1)',
    category: 'Backend',
    isDevicon: true
  }
];



const Skills = () => {
  const skillsRef = useScrollAnimation();

  return (
    <section id="skills" className="skills-section">
      <div className="container skills-container">
        <h2 className="section-title">🛠️ Skills & Technologies</h2>
        
        <div className="skills-content scroll-animation" ref={skillsRef}>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item"
                style={{
                  '--skill-color': skill.color,
                  '--skill-bg': skill.bgColor,
                  '--index': index
                }}
              >
                {skill.isDevicon ? (
                  <i className={`${skill.icon} skill-icon`}></i>
                ) : (
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                )}
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="skills-visualization">
            <div className="matrix-container">
              {skillsData.map((skill, index) => (
                <div 
                  key={index}
                  className="matrix-node"
                  style={{
                    '--index': index,
                    '--color': skill.color,
                    '--bg': skill.bgColor,
                    '--col': index % 8,
                    '--delay': `${index * -0.5}s`,
                    '--duration': `${4 + Math.random() * 4}s`
                  }}
                >
                  {skill.isDevicon ? (
                    <i className={`${skill.icon} matrix-icon`}></i>
                  ) : (
                    <FontAwesomeIcon icon={skill.icon} className="matrix-icon" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
