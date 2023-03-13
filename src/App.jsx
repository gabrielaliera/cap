import './App.css';
import React from 'react';
import { useState } from 'react';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;


function App() {
  
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });
  
  return (  
    <div>Hi</div>
  )
}

export default App
