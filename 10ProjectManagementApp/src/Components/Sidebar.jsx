import '../App.css';

export default function Sidebar({ newProjAdd, newLearningbtn, onAddProject }) {
  return (
    <div className='Container1'>
      <div className='Container2'>YOUR PROJECTS</div>

      <button className='adprbtn' onClick={onAddProject}> + ADD Projects</button>

      <div>
        <button
          onClick={newLearningbtn}
          className='newcontentbtn'
          disabled={!newProjAdd}  // disables if no project saved yet
        >
          {newProjAdd || 'No Project Yet'}
        </button>
      </div>
    </div>
  );
}
