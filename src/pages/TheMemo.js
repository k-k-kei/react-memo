import React, { useState } from "react";
import MemosShow from "../component/inputParts/MemosShow";

// Material-UIのインポート
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// テキストフォームのスタイル
const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

    button: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

// メモの保存と表示
const Memo = () => {
  const [memos, setState] = useState(["memo1", "memo2", "memo3"]);
  const [text, setText] = useState("");
  const classes = useStyles();

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
      <TextField value={text} onChange={handleChange} label="メモを追加" className={classes.form} />
      {/* ボタンコンポーネント */}
      <Button onClick={saveMemo} variant="contained" color="primary" className={classes.button}>
        save
      </Button>
      {/* メモ表示コンポーネント */}
      <MemosShow memos={memos} />
    </>
  );
};

export default Memo;
