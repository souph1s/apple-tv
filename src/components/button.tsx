import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

export const Button = ({ children, size = 'medium', className }: Props) => {
  const sizeClassNames = {
    small: 'text-xs px-2 py-1 cursor-pointer',
    medium: 'text-sm px-5 py-3 cursor-pointer',
    large: 'text-base px-8 py-4 cursor-pointer',
  };

  return (
    <button
      type="button"
      className={twMerge(
        'bg-white text-textBlack cursor-pointer rounded-full',
        sizeClassNames[size],
        className
      )}
    >
      {children}
    </button>
  );
};
