
import './App.css';
import Container from './Components/Container/Container';
import Headcontainer from './Components/HeadContainer/Headcontainer';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Headcontainer />
      <Container />
    </div>
  );
}

export default App;
