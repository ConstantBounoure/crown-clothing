import "./navigation.styles.scss";

import { Outlet, Link } from "react-router-dom";
import { Fragment, useState, useContext } from "react";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const [displayCartDropdown, setDisplayCartDropwn] = useState(false);

    const onClickHandler = () => {
        console.log("mdr");
        setDisplayCartDropwn(true);
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
                    <CartIcon onClick={onClickHandler}></CartIcon>
                </div>
                {displayCartDropdown && <CartDropdown></CartDropdown>}
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Navigation;
