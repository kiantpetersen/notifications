import { useEffect, useState } from 'react'
import avatarImg1 from '../images/44.jpg'
import avatarImg2 from '../images/avatar-jacob-thompson.webp'
import './App.css'
import './queries.css'
import data from './Components/data'
import NotificationCard from './Components/NotificationCard'

function App() {
  const [num, setNum] = useState(0)
  const [notes, setNotes] = useState(data)
  function handleClick(id) {
    readNote(id)
  }

  function getNotifications() {
    return notes.map(note => {
      return <NotificationCard onClick={handleClick} key={note.id} notification={note} />
    })
  }

  function countNotifications(arr) {
    let count = 0;
    arr.map(note => {
      note.visited === false ? count++ : count
    })
    setNum(count)
    // return count

  }
  useEffect(() => {
    countNotifications(data)
  }, [data])

  function readNote(id) {
    let res = notes.map(note => {

      if (note.id === id && note.visited === false) {
        setNum(prev => prev - 1)
        return { ...note, visited: true }
      } else {
        return note
      }

    })


    setNotes(res)


  }

  function readAll() {
    let res = notes.map(note =>
      note.visited === false
        ? { ...note, visited: true }
        : note)

    setNotes(res)
    setNum(0)
  }




  return (
    <div className='notifications-holder'>
      <div className='notifications-header'>
        <h2 className='heading-content notification-heading'>Notifications<span className='note-count'>{num}</span></h2>
        <p className='heading-content' onClick={readAll}>Mark all as read</p>
      </div>
      <div className='notifications-box'>
        {getNotifications()}
      </div>

    </div>
  )
}

export default App
