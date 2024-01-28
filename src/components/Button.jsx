function Button({ type, content, className, disabled = false }) {
  return (
    <>
      <button
        type={type}
        className={`rounded-3xl bg-blue-700 text-lg hover:bg-blue-600 text-white min-w-16 hover:text-black ${className}`}
        // onClick={() => {
        //   clickHandler();
        // }}
        disabled={disabled}
      >
        {content}
      </button>
    </>
  );
}
export default Button;
