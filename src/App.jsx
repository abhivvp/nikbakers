// app component : it will act as an parent component for the rendered components

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from './redux/reducer/userSlice';
import NavBar from './components/NavBar';
import MainScreen from './Routes/MainScreen';
import Footer from './components/Footer';
import Login from './pages/Login';

const App = () => {
    // getting the state of the user slice
    // useSelector :  it is user to get a state from the redux store 
    const user = useSelector(state => state.user);
    console.log(user);
    // usedispatch : it is used for dispatching the reducer actions
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(logIn());
        dispatch(logOut());
    },[])

  return (
    <div>
      <>
      {/* navbar component goes here */}
      <NavBar/>
      {/* MainScreen Routes */}
      <MainScreen/>
      {/* footer goes here */}
      <Footer/>
      </>
    </div>
  )
}

export default App