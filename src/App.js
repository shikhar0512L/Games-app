import * as React from 'react';
import FreeFire from './components/Ff';
import Navbar from './components/Navbar';
import Mine from './components/Mine';
import Bgmi from './components/Bgmi';
import Roblox from './components/Roblox';
import Call from './components/Call';
import Coc from './components/Coc';
import Appex from './components/Appex';
import Gta from './components/Gta';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Wcc from './components/Wcc';

function App() {
  return (
<>
<Router>
  <Navbar/>
      <div>
        <Switch>
        <Route exact path="/Ff"><FreeFire/></Route> 
        <Route exact path="/Mine"> <Mine/> </Route> 
        <Route exact path="/Bgmi"> <Bgmi/> </Route>
        <Route exact path="/Roblox"> <Roblox/> </Route>
        <Route exact path="/Call"><Call/> </Route>
        <Route exact path="/Coc"><Coc/> </Route>
        <Route exact path="/Appex"> <Appex/> </Route>
        <Route exact path="/Gta"> <Gta/> </Route>
        <Route exact path="/Wcc"> <Wcc/> </Route>
        <Route exact path="/"> <FreeFire/> <Call/>  <Roblox/>  <Mine/> <Coc/>  <Appex/> <Gta/> <Wcc/> </Route>
        </Switch>
      </div>
    </Router>
</>
  );
}

export default App;