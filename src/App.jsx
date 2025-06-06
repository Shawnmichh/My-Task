import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import Card from './components/card'
import Address from './pages/Address'
import Loader from './components/Loader'
import {Routes, Route} from 'react-router-dom'
import Feature from './pages/Feature'

export default function App(){
  const [showSidebar, setShowSidebar] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setIsLoading(false),2000);
  },[]);

  return(
    <>
      {isLoading ?(
        <Loader />):(
      <div className='d-flex'>
        {!showSidebar && (
          <button
            className="btn btn-outline-dark p-2 position-fixed"
            onClick={() => setShowSidebar(true)}
          >
            ☰
          </button>
        )}
        {showSidebar && <Sidebar onToggle={()=>setShowSidebar(false)} />}
        <div className='flex-grow-1'>
          <div className={`main_content ${showSidebar ? 'width_sidebar':'full_width'}`}>
            <Routes>
              <Route path='/' element={<Card />} />
              <Route path='/feature1' element={<Feature title= 'feature1' />} />
              <Route path='/feature2' element={<Feature title= 'feature2' />} />
              <Route path='/feature3' element={<Feature title= 'feature3' />} />
              <Route path='/feature4' element={<Feature title= 'feature4' />} />
              <Route path='/feature5' element={<Address />}/>
            </Routes>
          </div>
        </div>
      </div>
        )}
    </>
  );
}
