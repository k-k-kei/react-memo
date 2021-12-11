const MemosShow = (props) => {
  const lists = props.memos.map((memo) => {
    return <li>{memo}</li>;
  });

  return (
    <div>
      <ul>{lists}</ul>
    </div>
  );
};

export default MemosShow;