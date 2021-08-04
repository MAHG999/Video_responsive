import './App.css';
import ReactPlayer from "react-player";
function App() {
  return (
    <div className="contenedor" >
      <ReactPlayer 
      url='https://www.youtube.com/watch?v=E-YzQsAe5eE'
      width='100%'
      height='100%'
      controls
      playing
      muted
      playbackRate={1.75}
      onEnded={() => alert('Terminói el video')}
      className="react-player"
      />
      
    </div>
  );
}

export default App;
