// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w-full h-screen bg-slate-300 flex flex-col justify-center items-center">
      <img src="field.jpg" className='absolute left-0 opacity-90 blur-sm'></img>
      <section className='w-1/3 z-10 min-w-96 h-4/5 bg-gradient-to-b from-blue-300 to-blue-400 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-medium text-white z-10 mb-2'>Sign In</h1>
        {/* <img src={logo} className="absolute w-1/3 c-" alt="logo" /> */}
        <form className='w-3/4 grid grid-cols-1 text-white text-lg gap-1 z-10 mb-6'>
          <label value=''>Username</label>
          <input
          className='placeholder-white shadow rounded bg-blue-300 p-1 pl-2 mb-6'
          placeholder='Username'
          ></input>

          <label value=''>Password</label>
          <input
          className='placeholder-white shadow rounded bg-blue-300 p-1 pl-2 mb-6'
          placeholder='Password'
          ></input>

          <div>
            <input className='' type="checkbox" id="vehicle3" name="check" value="Remember me"></input>
            <label className='p-1 text-md' for="check">Remember Me</label>
          </div>

          <button className='bg-white font-medium shadow-md rounded-md p-1 text-blue-500'>SIGN IN</button>
        </form>

        <p className='text-white text-lg'>Don't have an account?<a className='underline' href=''>Create account.</a></p>
      </section>
    </div>
  );
}

export default App;
