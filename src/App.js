import img from './imageInSrc.jpg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
     <div style={{border:'solid 1px black',maxWidth:"100vw",}} >  
      <h1 className='titleRed'>WALID</h1>  

        <br />

       <img style ={{width:530, height:360 }} src={img} alt='GoMyCode'/> 
       
       <br />

          <img style ={{width:640, height:440 }} src='/imageInPublic.jpg' alt='gomycode'/>  

</div>  

<video style ={{width:320, height:240 }} controls>  

   <source src='myVideo.mp4' type='video/mp4'/> 

</video>

</div>
  );
}

export default App;
