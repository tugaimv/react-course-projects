import React, { useState } from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label >Enter Text</label>
          <input 
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
        </div>
      </div>
      <Dropdown onSelect={setLanguage} selected={language} options={options}/>
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text}/>
    </div>
  );
}



export default Translate;