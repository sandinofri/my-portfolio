import React from 'react'
import ProjectComponent from './ProjectComponent'
import { newProject } from '../../data'

const NewProject = () => {
  return (
    <>
    <ProjectComponent projectData={newProject} isView={true}/>
    </>
  )
}

export default NewProject