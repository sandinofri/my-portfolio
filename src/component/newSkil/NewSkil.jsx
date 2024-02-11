import React from 'react'
import SkilComponent from './SkilComponent'
import { newSertification } from '../../data'

const NewSkil = () => {
  return (
    <>
    <SkilComponent SkilData={newSertification} isView={true}/>
    </>
  )
}

export default NewSkil