import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Signup2 from './Signup2';
import Pay from './Pay';
import Module from './Module';
import Circle from './Circle';
import More from './More';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/four' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup/createpassword' element={<Signup2 />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/pay' element={<Pay />} />
          <Route path='/dashboard/module' element={<Module />} />
          <Route path='/dashboard/circle' element={<Circle />} />
          <Route path='/dashboard/more' element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
