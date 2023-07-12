import React, { useState } from 'react';
import "../styles/App.css";
import {Display,ActionBar} from './index';


function App(){
  
 return (
         <div className="app">
            <Display/>
            <ActionBar/>
         </div>
  );
}
  export default App;