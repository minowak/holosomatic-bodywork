type ButtonProps = {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className="cursor-pointer py-4 px-8 w-fit border-[3px] border-primary bg-white text-primary duration-300 hover:text-white hover:bg-primary">
      {label}
    </div>
  );
}
