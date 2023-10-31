import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IProject} from '../types/IProject';

export const projectAPI = createApi({
  reducerPath: 'projectAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
  tagTypes: ['Project'],
  endpoints: (build) => ({
    fetchAllProjects: build.query<IProject[], number>({
      query: (limit: number = 5) => ({
        url: `/projects`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ['Project'],
    }),
    createProject: build.mutation<IProject, IProject>({
      query: (project) => ({
        url: `/projects`,
        method: 'POST',
        body: project,
      }),
      invalidatesTags: ['Project'],
    }),
    updateProject: build.mutation<IProject, IProject>({
      query: (project) => ({
        url: `/projects/${project.id}`,
        method: 'PUT',
        body: project,
      }),
      invalidatesTags: ['Project'],
    }),
    deleteProject: build.mutation<IProject, IProject>({
      query: (project) => ({
        url: `/projects/${project.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Project'],
    }),
  }),
});
