const Button = ({onClick, child}) => {
  return (
    <>
      <button onClick={onClick}>{child}</button>
    </>
  );
};

export default Button;