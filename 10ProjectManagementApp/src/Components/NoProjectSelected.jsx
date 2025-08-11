import './NoProjectSelected.css'
import Pic from '../assets/Noproject.png'

export default function NoProjectSelected({ showbutton }) {
  return (
    <div className='no'>
      <div className="no1">
        <img src={Pic} alt="No project" />
      </div>
      <div className="no2">
        <h2 className='head2'>Select a project or Get started with new one.</h2>
      </div>

      <p className='p1'>
        <button className='Createprobtn' onClick={showbutton}>Create Project</button>
      </p>
    </div>
  )
}
