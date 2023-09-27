import React from 'react';

const PrototypeForm = {
    key1: 'Barbara',
    key2: 'Hepworth',
    key3: 'bhepworth@react.com',
    key4: 'love cats',
};

const fieldStyle = {
    marginBottom: '10px',
};

function SimpleForm() {
    return (
        <div>
            <form>
                {Object.keys(PrototypeForm).map((key) => (
                    <div key={key} className="form-group" style={fieldStyle}>
                        <label htmlFor={key} style={{ fontWeight: 'bold' }}>{key}:</label>
                        <input type="text" id={key} name={key} value={PrototypeForm[key]} readOnly />
                        <p>{PrototypeForm[key]}</p>
                    </div>
                ))}
            </form>
        </div>
    );
}

export default SimpleForm;