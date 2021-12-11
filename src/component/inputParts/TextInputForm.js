const TextInputForm = ({value, onChange}) => {
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

export default TextInputForm;