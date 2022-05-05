import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import StorageContext from "../Storage/Context";

const RoutesPrivate = ({ component: Component, ...rest}) => {

    const {token} = useContext(StorageContext);

    return(
        <Route
            {...rest}
            render = { () => token 
            ? <Component {...rest} />
            : <Redirect from ="/" to = "/login"/>}
        />
    )
}

export default RoutesPrivate;