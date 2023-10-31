import React, {useEffect, useState} from 'react';
import {projectAPI} from './projectAPI';
// import ProjectDetail from './ProjectDetail';
import {Project} from '../projects/Project';
import {useParams} from 'react-router-dom';
import mockProjects from '../projects/MockProjects';
import ProjectList from '../components/ProjectList';

function ProjectPage(props: any) {
  const [projects, setProjects] = useState<Project[] | null>(mockProjects);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState<string | null>(null);
  //   const params = useParams();
  //   const id = Number(params.id);

  //   useEffect(() => {
  //     setLoading(true);
  //     projectAPI
  //       .find(id)
  //       .then((data) => {
  //         setProject(data);
  //         setLoading(false);
  //       })
  //       .catch((e) => {
  //         setError(e);
  //         setLoading(false);
  //       });
  //   }, [id]);

  return (
    <div>
      <>
        <h1>Projects List</h1>
        {/* 
        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          </div>
        )} */}

        {projects && <ProjectList projects={projects} />}
      </>
    </div>
  );
}

export default ProjectPage;
