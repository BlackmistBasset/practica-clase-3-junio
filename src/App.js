import './App.scss';
// import { Form } from './components/Form';
import lista from './assets/lista'
import Desplegable from './components/Desplegable';


function App() {
  return (
    // <div class='container'>
    //   <Form />
    // </div>
    <>
    <h1>Toggles con React y useState :) </h1>
    {lista.map(item => <Desplegable question={item.title} answer={item.content} key={item.id} />)}
    </>
  )
}

export default App;
