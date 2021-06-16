import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StickyNavbar from './components/navbar'
import ProjectCardNoImage from './components/projectCardNoImage';

function App() {
  return (
    <div className="App">
      <StickyNavbar/>
      <header className="App-header">
      <ProjectCardNoImage></ProjectCardNoImage>
      <ProjectCardNoImage></ProjectCardNoImage>
      <ProjectCardNoImage></ProjectCardNoImage>
      <ProjectCardNoImage></ProjectCardNoImage>
      <ProjectCardNoImage></ProjectCardNoImage>
      <ProjectCardNoImage></ProjectCardNoImage>
      <ProjectCardNoImage></ProjectCardNoImage>
      </header>
    </div>
  );
}

export default App;
