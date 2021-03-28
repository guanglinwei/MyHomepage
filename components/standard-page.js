import * as React from "react";
import HeaderNavBar from "./headernavbar";

const StandardPage = ({ children }) => {
    return (
        <React.Fragment>
            <HeaderNavBar/>
            <main>
                {children}
            </main>
            <br/>
        </React.Fragment>
    );
};

export default StandardPage;