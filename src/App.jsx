import {Routes, Route} from 'react-router-dom';

// components
import Portfolio from './Pages/Portfolio/Portfolio2';
import Error from './Pages/Error/error';

const App = () => {
  return ( 
    <div>
      <Routes>
        <Route path='/Portfolio2' element= {<Portfolio/>}> </Route>
        <Route path='*' element= {<Error/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;