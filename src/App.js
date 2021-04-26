import './App.css';
import neutral from './neutral.png';
import {useHistory} from 'react-router-dom';

function App() {
  let history = useHistory();

  return (
    <div className="container-sm">
      <img onClick = {() => history.push('/Counter')} src = "/positive.png" alt = "Positive img"/>
      <img src = {neutral} alt = "neutral img"/>
    </div>
  );
}

export default App;
