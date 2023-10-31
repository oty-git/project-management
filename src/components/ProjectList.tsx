import React, {FC} from 'react';
import {Project} from '../projects/Project';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: FC<ProjectListProps> = ({projects}) => (
  <div>
    {projects.map((project) => (
      <div key={project.id}>
        <div>
          <section>
            <h5>
              <strong>{project.name}</strong>
            </h5>
            <p>{project.description}</p>
          </section>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectList;
