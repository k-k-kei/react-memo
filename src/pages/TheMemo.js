import React, { useState } from "react";
import MemosShow from "../component/inputParts/MemosShow";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Memo = () => {
  const [memos, setState] = useState(["memo1", "memo2", "memo3"]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(() => e.target.value);
  };

  const saveMemo = () => {
    const addedMemos = memos.slice();
    addedMemos.push(text);
    setState(() => addedMemos);
  };

  return (
    <>
      <h1>Memo App for React</h1>
      {/* テキストインプットフォームコンポーネント */}
      <TextField value={text} onChange={handleChange} label="メモを追加" />
      {/* ボタンコンポーネント */}
      <Button onClick={saveMemo} variant="contained" color="primary">
        save
      </Button>
      {/* メモ表示コンポーネント */}
      <MemosShow memos={memos} />
    </>
  );
};

export default Memo;
