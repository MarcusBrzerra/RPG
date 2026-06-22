import { useState } from "react";
import dado from "../assets/dado.png"

const Topbar = () => {
    return(
        <>
            <header className="topbar">
                {/*<img src={dado} alt="logo de um dado de 20 lados" /> */}
                <h1>RPG</h1>
                <p>topbar</p>
            </header>
        </>
    );
}
export default Topbar;