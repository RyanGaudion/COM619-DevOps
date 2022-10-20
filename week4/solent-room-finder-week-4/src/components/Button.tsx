export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const {onClick, label, icon} = props;

  return (
    <>
      <button
        onClick={onClick}
        className={icon ? "blue-button" : "blue-button_no-icon"}
      >
        {icon} {label}
      </button>
    </>
  );
}
