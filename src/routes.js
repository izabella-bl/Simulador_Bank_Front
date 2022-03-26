import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Transferir from "./pages/Transferir";
import TelaInicial from "./pages/TelaInicial";


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/transferir" component={Transferir} />
                <Route path="/home" component={TelaInicial} />
            </Switch>
        
        </BrowserRouter>
    );
};

export default Routes;