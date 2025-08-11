import { useState, useRef } from 'react'
import Sidebar from './Components/Sidebar'
import LearningReact from './Components/Learningreact'
import NewProject from './Components/NewProject'
import NoProjectSelected from './Components/NoProjectSelected'
import './App.css'

export default function App() {
  const [showNewProject, setShowNewProject] = useState(false)
  const [projectTitle, setProjectTitle] = useState('')
  const [showLearning, setShowLearning] = useState(false)

  const titleref = useRef()
  const Descriptionref = useRef()
  const Duedateref = useRef()

  function handleCreateProject() {
    setShowNewProject(true)
    setShowLearning(false)
  }

  function handleSave() {
    const enterTitle = titleref.current.value.trim()
    const enterDescription = Descriptionref.current.value.trim()
    const enterDuedate = Duedateref.current.value

    if (!enterTitle) {
      alert("Title can't be empty")
      return
    }

    setProjectTitle(enterTitle)
    setShowNewProject(false)
   
    console.log('Saved:', {
      title: enterTitle,
      description: enterDescription,
      dueDate: enterDuedate
    })
  }

  function handleClear() {
    titleref.current.value = ''
    Descriptionref.current.value = ''
    Duedateref.current.value = ''
    setShowNewProject(false)
  }

  function handleProjectClick() {
    if (projectTitle) {
      setShowLearning(true)
      setShowNewProject(false)
    }
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar
          newProjAdd={projectTitle}
          newLearningbtn={handleProjectClick}  // clicking project title button
          onAddProject={handleCreateProject}  // clicking "+ ADD Projects" button
        />
        <div style={{ marginLeft: '20px' }}>
          {showNewProject ? (
            <NewProject
              ref1={titleref}
              ref2={Descriptionref}
              ref3={Duedateref}
              saver={handleSave}
              deleter={handleClear}
            />
          ) : showLearning ? (
            <LearningReact />
          ) : (
            <NoProjectSelected showbutton={handleCreateProject} />
          )}
        </div>
      </div>
    </>
  )
}
