import React from 'react'
import SkilComponent from '../../component/newSkil/SkilComponent'
import { sertification } from '../../data'

const Skil = () => {
  return (
    <>
    <SkilComponent SkilData={sertification} isView={false}/>
    </>
  )
}

export default Skil