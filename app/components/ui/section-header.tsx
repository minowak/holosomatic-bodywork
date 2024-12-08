type Props = {
  label: string;
}

export const SectionHeader: React.FC<Props> = ({ label }) => {
  return (
    <div className="relative h-[40px] w-[350px]">
      <div className="z-20 absolute bg-red-50 lightSalmon top-4 left-0 right-0 h-[14px]"></div>
      <div className="z-30 absolute inset-0 text-xl">{label}</div>
    </div>
  );
}
