import React from 'react';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/' component={Welcome}/>
     </Switch>
    </div>
  );
}

export default App;
