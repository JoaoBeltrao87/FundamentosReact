/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Bruno" idade={20} nerd={true} />
            <DiretaFilho nome="João" idade={17} nerd={false} />

        </div>
    )
}
