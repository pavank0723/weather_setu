import './App.css';
import TopButtons from './components/TopButtons';
import InputButton from './components/InputButton';
import TimeAndLocation from './components/TimeAndLocation';
import TempDetail from './components/TempDetail';
import Forecast from './components/Forecast';

function App() {
  return <div className='mx-auto rounded-md max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl shadow-gray-300'>
    <TopButtons />
    <InputButton />

    <TimeAndLocation />
    <TempDetail />
    <Forecast title='Today Forecast' />
    <Forecast title='Daily Forecast' />
  </div>
}

export default App;
