
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/> */}
      {/* <Hello/> */}

      {/* props with functional components */}
      {/* <Greet name="Priya" heroName="Wonder Women">
        <p>This is children props</p>
      </Greet>
      <Greet name="Kishan" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Pavi" heroName="Batman"/> */}

      {/* props with class components */}
      {/* <Welcome name="Priya" heroName="Wonder Women"/>
      <Welcome name="Kishan" heroName="Superman"/>
      <Welcome name="Pavi" heroName="Batman"/> */}

      {/* State in class example */}
      <Message/>

    </div>
  );
}

export default App;
