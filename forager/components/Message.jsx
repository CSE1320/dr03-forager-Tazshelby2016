import React from 'react';
import {warningMessage} from '../data/development';

const Message = () => {
    return (
        <div className="message bg-red-500 rounded-xl bg-[#FF5050] text-sm w-full h-auto font-medium text-white px-8 py-4">
            <div className="header flex items-center">
                <img className="w-26 h-26" src={warningMessage.icon}></img>
                <h1 className="uppercase">{warningMessage.header}</h1>
            </div>
            <p className="">{warningMessage.message}</p>
        </div>
    );
};

export default Message;