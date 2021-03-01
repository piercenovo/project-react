import './App.css';
import Message from './Message';

const Description = () =>{
  return <p>Esta es una app de prueba</p>
}


const App = ()=> {
  // const message = 'Hello World.'
  return (
    <div className="App">
      <Message color='red' message='Este es el inicio'/>
      <Message color='blue' message='De algo muy grande.'/>
      <Description/>
    </div>
  );
}

export default App;
