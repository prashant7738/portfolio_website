// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from Django API
    axios.get('http://localhost:8000/api/projects/')  // Adjust URL if needed
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div>
        {projects.length === 0 ? (
          <p>No projects to display</p>
        ) : (
          projects.map(project => (
            <div key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;
