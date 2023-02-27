import "./navigation.styles.scss";

import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggle = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo"></CrownLogo>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon onClick={toggle}></CartIcon>
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Navigation;
