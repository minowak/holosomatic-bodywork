type ButtonProps = {
  label: string;
  href: string;
}

export const Button: React.FC<ButtonProps> = ({ label, href }) => {
  return (
    <a href={href}>
      <div className="text-3xl cursor-pointer py-3 px-10 w-fit border-[3px] border-btn bg-white text-btn duration-300 hover:text-white hover:bg-btn font-libreBodoni italic">
        {label}
      </div>
    </a>
  );
}
