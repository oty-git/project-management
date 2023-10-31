import React, {useState} from 'react';
import ProjectItem from './ProjectItem';
import {IProject} from '../types/IProject';
import {projectAPI} from '../services/projectApi';
import NewProjectModal from './NewProjectModal';

const ProjectList = () => {
  const [limit, setLimit] = useState(100);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: projects,
    error,
    isLoading,
  } = projectAPI.useFetchAllProjectsQuery(limit);
  const [createProject, {error: createProjectError}] =
    projectAPI.useCreateProjectMutation();
  const [updateProject, {}] = projectAPI.useUpdateProjectMutation();
  const [deleteProject, {}] = projectAPI.useDeleteProjectMutation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateProject = async ({name, description}: IProject) => {
    await createProject({name, description} as IProject).unwrap();
  };

  const handleRemove = (project: IProject) => {
    deleteProject(project);
  };

  const handleUpdate = (project: IProject) => {
    updateProject(project);
  };

  return (
    <div className="p-4">
      <div className="project__list">
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 mb-4 rounded"
        >
          Add new project
        </button>
        {isLoading && (
          <h1 className="mt-4 text-lg text-gray-700">Loading...</h1>
        )}
        {error && (
          <h1 className="mt-4 text-lg text-red-600">An error occurred</h1>
        )}

        {projects &&
          projects.map((project) => (
            <div key={project.id} className="mb-4 p-4 bg-white rounded shadow">
              <ProjectItem
                remove={handleRemove}
                update={() => {}}
                project={project}
              />
            </div>
          ))}
      </div>
      <NewProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        createProject={handleCreateProject}
      />
      {createProjectError && (
        <h1 className="mt-4 text-lg text-red-600">Failed to create project</h1>
      )}
    </div>
  );
};

export default ProjectList;
