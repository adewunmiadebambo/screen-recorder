import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Record from './Record'
import Home from './pages/Home';
import Works from './pages/Works';
import Testimonial from './pages/Testimonial';
import Navbar from './pages/Navbar';
import ScreenRecording from './ScreenRecording';
import Footer from './pages/Footer';


function App() {
  return (
 <div className="App"  >
   <Router>
     <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/works" exact component={Works} />
      <Route path="/screenRecording" exact component={ScreenRecording} />
      <Route path="/testimonial" exact component={Testimonial} />
      </Switch>
      <Footer />
   </Router>
   {/* <Start /> */}
    </div>   
  );
}
export default App;