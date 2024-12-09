type Props = {
  label: string;
  stripeColor?: string;
  className?: string;
}

export const SectionHeader: React.FC<Props> = ({ label, stripeColor, className }) => {
  return (
    <div className="relative h-[40px] w-[350px]">
      <div className={"z-20 absolute top-4 left-0 right-0 h-[14px] " + (stripeColor || "bg-red-50")}></div>
      <div className={"text-center z-30 absolute inset-0 text-xl text-primary " + className}>{label}</div>
    </div>
  );
}
