import type { ReactNode } from "react";

function UniBlock({ children }: { children?: ReactNode }) {
  return <div className="flex max-md:flex-col items-center gap-5">{children}</div>;
}

function Text({ children }: { children?: ReactNode }) {
  return <div className="space-y-5 md:w-207.5 text-[24px] max-lg:text-[20px] max-md:text-[16px]">{children}</div>;
}

function List({ children }: { children?: ReactNode }) {
  return (
    <ul className="space-y-5 list-disc list-inside pl-[12.5px] text-[24px] max-lg:text-[20px] max-md:text-[16px]">
      {children}
    </ul>
  );
}

function Image({ src }: { src: string }) {
  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
}

UniBlock.Text = Text;
UniBlock.List = List;
UniBlock.Image = Image;

export default UniBlock;
