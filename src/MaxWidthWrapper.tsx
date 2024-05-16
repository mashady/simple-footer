import { ReactNode } from "react";
/**
 * This is a reusable component for handle the max width of any content on the project
 */

/**
 * min-h-[calc(100vh-3.5rem-1px)]              <===================
 *
 * the line above is four handle the min height of the content
 */

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`max-w-[1280px] mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default MaxWidthWrapper;
