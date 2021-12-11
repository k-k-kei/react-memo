import React, { useState } from 'react';
import MemosShow from "../component/inputParts/MemosShow";

const Memo = () => {
  const [memos, setState] = useState(["memo1", "memo2", "memo3"]);
  const [text, setText] = useState("");
  
  const handleChange = (e) => {
    setText(() => e.target.value);
  }

const saveMemo = () => {
  const addedMemos = memos.slice();
  addedMemos.push(text);
  setState(() => addedMemos);
}

  return (
    <>
      <h1>Memo App for React</h1>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={saveMemo}>保存</button>
      <MemosShow memos={memos} />
    </>
  );
}

export default Memo;