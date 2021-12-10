import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(() => e.target.value);
  }

  return (
    <div>
      <h1>Memo App for React</h1>
      <p>テキスト：{ text }</p>
      <input type="text" value={text} onChange={handleChange} />
      <button>保存</button>
      <div>
        <ul>
          <li>memo1</li>
          <li>memo2</li>
          <li>memo3</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
