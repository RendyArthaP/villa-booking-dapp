import React, { FC, PropsWithChildren, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContentBox: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className='p-5'>
      <main>{children}</main>
    </div>
  );
};

export default ContentBox;
