import { PropsWithChildren, useEffect } from "react";

type Props = PropsWithChildren & {
  open?: boolean
  onOpenChanged?: (open: boolean) => void;
}

export const Fullscreen: React.FC<Props> = ({ children, open, onOpenChanged }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      {
        open ?
          <>
            <div className="z-[90] fixed inset-0 bg-black opacity-80" onClick={() => onOpenChanged && onOpenChanged(false)}></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]">
              {children}
            </div>
          </> : null
      }
    </>
  );
}
