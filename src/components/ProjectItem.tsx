import React, {FC} from 'react';
import {IProject} from '../types/IProject';

interface ProjectItemProps {
  project: IProject;
  remove: (project: IProject) => void;
  update: (project: IProject) => void;
}

const ProjectItem: FC<ProjectItemProps> = ({project, remove, update}) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(project);
  };

  const handleUpdate = () => {
    // update({...project, name});
  };

  return (
    <div>
      <h2>Project Details</h2>
      <p>ID: {project.id}</p>
      <p>Name: {project.name}</p>
      <p>Description: {project.description}</p>
      <button onClick={handleUpdate}>Edit</button>

      <h3>Comments:</h3>
      <ul>
        {project?.comments?.map((comment, index) => (
          <li key={index}>
            <strong>User: {comment.userName}</strong>
            <p>Comment: {comment.comment}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={handleRemove}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center"
      >
        Delete
      </button>
    </div>
  );
};

export default ProjectItem;
