import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen bg-slate-600 flex flex-col justify-center items-center">
      <section className='w-1/3 min-w-96 h-4/5 bg-slate-50 flex flex-col justify-center items-center'>
        <img src={logo} className="w-32" alt="logo" />
      </section>
    </div>
  );
}

export default App;
