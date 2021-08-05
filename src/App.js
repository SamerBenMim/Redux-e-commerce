import './App.css';
import {Switch,Route} from 'react-router-dom'
import HomePage from './Components/pages/homepage/homePage';
import ShopPage from './Components/pages/shop/shopPage';
import Header from './Components/header/header';
import SignInUp from './Components/pages/Sign-in-up/Sign-in-up';
function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInUp}/>
      </Switch>
    </div>
  );
}

export default App;
