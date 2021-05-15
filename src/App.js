import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({duration:2000});


function App() {
  return (

    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/contact' component={Contact} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
      </Router>
    </>

  );
}

export default App;
