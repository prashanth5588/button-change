import logo from './logo.svg';
import './App.css';
import ChangeButton from './changingButton';


function App() {
  return (
    <div class="bg-container">
      <h1 className='heading1'>Shop Headphones here</h1>
      <div class="content-container">
        <ChangeButton />
      </div>
    </div>
  );
}

export default App;
