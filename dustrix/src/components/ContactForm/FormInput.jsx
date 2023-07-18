/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function FormInput({ labelFor, label, placeholder, id, type }) {
    // STATES
    const [input, setInput] = useState('');
    // HANDLER
    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };
    return (
        <div className="col-md-6 col-12">
            <div className="single-personal-info">
                <label htmlFor={labelFor}>{label}</label>
                <input
                    value={input}
                    onChange={onChangeHandler}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export default FormInput;
