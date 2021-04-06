import React from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

function HeaderLogo(){
    return (
        <div className="HeaderLogo">
            <MonetizationOnIcon />
            COIN
        </div>
    )
}

function HeaderItem({className, Icon, title, onClick}) {
    return (
        <div className={`HeaderItem ${className}`} onClick={onClick} >
            <Icon />
            <p>{title}</p>
        </div>
    )
}

function HeaderLeft() {
    return (
        <div className="HeaderLeft">
            <HeaderItem  className={'wallet'}  Icon={AccountBalanceWalletIcon} title="12 $" />
        </div>
    )
}

/* function HeaderRight() {
    const dispatch = useDispatch()
    
    return (
        <div className="HeaderRight">
           <HeaderItem  Icon={() => <></>} title="Log In" onClick={() => dispatch(logInClicked())} />
           <HeaderItem  Icon={() => <></>} title="Sign In" onClick={() => dispatch(signOnClicked())} />
        </div>
    )
} */

function Header({setOpenSignIn}) {
    return (
        <div className="Header">
            <HeaderLogo />
            <HeaderLeft />
        </div>
    )
}

export default Header
