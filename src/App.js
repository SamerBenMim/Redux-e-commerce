import './App.css';
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shop/shopPage';
import Header from './Components/header/header';
import SignInUp from './pages/Sign-in-up/Sign-in-up.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser:null
    } 
  }

  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=> {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot =>{
         this.setState({
           currentUser:{
             id:snapShot.id,
             ...snapShot.data(), 
           }
         })
       });
     }
     this.setState({currentUser:userAuth})
   })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render() {
    
      return (
        <div >
          <Header currentUser={this.state.currentUser}/>
          <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInUp}/>
          </Switch>
        </div>
      );
    
  }
}


