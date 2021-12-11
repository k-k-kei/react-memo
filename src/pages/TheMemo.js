import React, { useState } from 'react';
import MemosShow from "../component/inputParts/MemosShow";
import TextInputForm from "../component/inputParts/TextInputForm";
import Button from "../component/generalParts/Button";

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
      {/* テキストインプットフォームコンポーネント */}
      <TextInputForm value={text} onChange={handleChange} />
      {/* ボタンコンポーネント */}
      <Button onClick={saveMemo} child={"save"} />
      {/* メモ表示コンポーネント */}
      <MemosShow memos={memos} />
    </>
  );
}

export default Memo;