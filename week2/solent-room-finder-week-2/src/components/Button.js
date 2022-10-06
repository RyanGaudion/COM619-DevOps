export default function Button({ onClick, children }) {
  return (
    <>
      <a onClick={onClick} className="blue-button">
        {children}
      </a>
    </>
  );
}
