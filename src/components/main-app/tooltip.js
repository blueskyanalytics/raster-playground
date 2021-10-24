import React, {useState} from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const  Tooltip = ({content}) => {
    return(
        <div>
            <Tippy content={content}>
                <a
                href="#add"
                className="iconButton fa fa-lg fa-info-circle"
                >
                {' '}
                </a>
            </Tippy>
        </div>
    );
};


export default Tooltip;