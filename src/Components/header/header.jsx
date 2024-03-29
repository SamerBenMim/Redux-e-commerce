import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import {ReactComponent as Logo} from '../../assets/4.1 crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-drop-down/cart-drop-down'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors' 
import { createStructuredSelector } from 'reselect'

const Header = ({currentUser,hidden}) => {
    return (
        <div className='header'>
            <Link to='/'>
                <Logo className='logo-container'/>
            </Link>
            <div className='options'>
                <Link className='option' to="/shop">
                    SHOP
                </Link>
                <Link className='option' to="/contact">
                    CONTACT
                </Link>
                    { currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                        
                    }
                    <CartIcon/>
            </div>
            { 
            hidden ? null : <CartDropDown/>
            }
        </div>
    );
}
// const mapStateToProps = ({user:{currentUser},cart :{hidden}}) => ({
//     // currentUser: state.user.currentUser
//     currentUser,
//     hidden
// });
const mapStateToProps = createStructuredSelector({
    // currentUser: state.user.currentUser
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});
  export default connect(mapStateToProps)(Header);
