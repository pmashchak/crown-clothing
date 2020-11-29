import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route, Link} from 'react-router-dom'

const HatsPage = (props) => {
  console.log(props)
  return(
  <div>
    <h1>HATS PAGE {props.match.params.id} </h1>
    <p> <Link to='/hats/12'>Hats</Link></p>
    <button onClick={() => props.history.push('/hats/17')}>Click</button>
  </div>)
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats/:id' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
