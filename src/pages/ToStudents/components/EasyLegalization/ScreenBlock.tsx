import type { ReactNode } from "react";

function ScreenBlock({ children }: { children: ReactNode }) {
  return <div className="w-136.5 max-lg:w-110 max-md:w-70 space-y-5">{children}</div>;
}

function Header({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div className="w-full border-2 border-primary-yellow rounded-2xl py-5.5 max-lg:py-4.25 max-md:py-2.5 flex justify-center items-center gap-6 bg-white">
      <img src={icon} alt="" />
      <p className="roboto text-[24px] leading-7">{children}</p>
    </div>
  );
}

function Description({ children }: { children: ReactNode }) {
  return <div className="px-4">{children}</div>;
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc list-inside space-y-5 mt-5">{children}</ul>;
}

ScreenBlock.Header = Header;
ScreenBlock.Description = Description;
ScreenBlock.List = List;

export default ScreenBlock;
