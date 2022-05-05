import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import StorageContext
 from "components/Store/Context";

const RoutesPrivate = ({ component: Component, ...rest}) => {

    const {token} = useContext(StorageContext);

    return(
        <Route
            {...rest}
            render = { () => token 
            ? <Component {...rest} />
            : <Redirect to = "/login"/>}
        />
    )
}

export default RoutesPrivate;