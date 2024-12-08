import { Logo } from "./svg/logo";

export const Header: React.FC = () => {
  return (
    <header className="z-20 text-primary px-8 py-4 bg-white">
      <div className="flex justify-between gap-4">
        <div className="flex gap-4 items-center flex-1">
          <div><Logo className="size-8" /></div>
          <div>
            <span className="font-bold mr-2">Yuliia Pinchuk</span>
            Holosomatic Bodywork Facilitator
          </div>
        </div>
        <menu className="flex gap-4 flex-1 justify-center">
          <MenuItem label="HOME" />
          <MenuItem label="SERVICES" />
          <MenuItem label="ABOUT" />
          <MenuItem label="METHOD" />
          <MenuItem label="CONTACT" />
        </menu>
        <div className="flex-1 text-right">
          English
        </div>
      </div>
    </header>
  );
}

type MenuItemProps = {
  label: string;
  anchor?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, anchor }) => {
  return <div className="duration-150 hover:text-secondary cursor-pointer">{label}</div>
}
