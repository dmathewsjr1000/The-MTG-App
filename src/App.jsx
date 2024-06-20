import { Routes, Route } from 'react-router-dom'
import  HomePage  from './Pages/HomePage'
import NavBar from './Components/Navbar'
import ProfilePage from './Pages/ProfilePage'
import DeckBuilding from './Pages/DeckBuildingPage'
import CardSearchPage from './Pages/CardSearchPage'
import { useState } from 'react'
import { ThemeContext } from './Context/ThemeContext'
import './App.css'
import MainLayout from './Components/MainLayout'
import UserProvider from './Context/UserContext'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import DeckBuildingPage from './Pages/DeckBuildingPage'

function App() {
  const [theme, setTheme] = useState('light')  
  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}> 
        <MainLayout>
          <UserProvider>
            <NavBar />
       {/* <h1>Project Manager</h1>  */}
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/card_search' element={<CardSearchPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/deck_building' element={<DeckBuildingPage />} />
              <Route path='/register' element={<SignUpPage />} />
              <Route path='/login' element={<LoginPage />} />
          </Routes>
          </UserProvider>
        </MainLayout>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
