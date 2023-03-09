
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClicked from './components/FunctionClicked';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

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
      {/* <Message/> */}

      {/* setState practiece */}
      {/* <Counter/> */}

      {/* Destructuring props and state */}
      {/* <Greet name="Priya" heroName="Wonder Women"/>
      <Welcome name="Kishan" heroName="Superman"/> */}

      {/* Event Handling */}
      {/* <FunctionClicked/>
      <ClassClick/> */}

      {/* Binding Event Handlers */}
      {/* <EventBind/> */}

      {/* Methods as props (child to parent communication) */}
      {/* <ParentComponent/> */}

      {/* Conditional rendering */}
      <UserGreeting/>

      {/* List Rendering */}
      <NameList/>

    </div>
  );
}

export default App;
