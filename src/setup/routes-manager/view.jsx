import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../../app/pages/home/home'
import About from '../../app/pages/about/about'
import Error from '../../app/pages/error/error'
import Contact from '../../app/pages/contact/contact'
import Event from '../../app/pages/event/event'
import GalleryList from '../../app/pages/others/gallary-list/gallery-list'

function View() {
  return (
    <Routes>
        <Route index element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/event-list' element={<Event />} ></Route>
        <Route path='/gallery-list' element={<GalleryList/>}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
  )
}

export default View