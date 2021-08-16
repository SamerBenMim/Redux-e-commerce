import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/homePage';
import CheckoutPage from './pages/chekout.jsx/checkout';
import ShopPage from './pages/shop/shopPage';
import Header from './Components/header/header';
import SignInUp from './pages/Sign-in-up/Sign-in-up.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/chekout.jsx/checkout';
class App extends Component {
  unsubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser} = this.props;   
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=> {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot =>{
         setCurrentUser({
             id:snapShot.id,
             ...snapShot.data(),  
         })
       });
     } 
     setCurrentUser(userAuth)
   })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render() {
    
      return (
        <div >
          <Header />
          <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route path='/shop' component={ShopPage}/>
          {/* <Route path='/signin' component={SignInUp}/> */}
          <Route exact path='/signin' render={()=>
            this.props.currentUser ? (<Redirect to ='/' />):( <SignInUp/>)}
            />
          </Switch>
        </div>
      );
    
  }
}
// const mapStateToProps =({user})=>({
//   currentUser: user.currentUser
// })
const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// null because we don't need the user in App component
//reducer(state,)