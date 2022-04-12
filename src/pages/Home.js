import React from 'react'
import{Link} from 'react-router-dom';
import './Home.css';
import rightimage from './../assets/img/choose-03.jpg';

function Home() {
  return (
    <div className="home">

    <div className='container'>

        <div className='row'>
          <div className='col-md-6'>
          <img src={rightimage} alt="right-banner-image" className="left-img img-fluid" />
          </div>

          <div className='col-md-4'>
          <h2 className='home-text1'>RECORD YOUR SCREEN! <br /><br />
          <Link to='/screenRecording'><button className='btn btn-primary btn-lg'>Start now</button></Link>
          
          </h2>
          </div>


     

      </div>
    </div>
        </div>
    
  )
}
 
export default Home