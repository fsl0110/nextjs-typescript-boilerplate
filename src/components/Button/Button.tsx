import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

// Storybook error: var trimmedText = (tag.text || '').trim();
// occurs when using @ in comments or using HTMLAttributes which uses @ in comments
// https://github.com/styleguidist/react-docgen-typescript/issues/356
// switched to typescript@4.2.4

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * What background color to use?
   *
   */
  color?: 'gray' | 'blue' | 'green';
  /**
   * How large should the button be?
   *
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  color = 'blue',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const styles = classNames({
    'bg-gray-400': color === 'gray',
    'bg-blue-400': color === 'blue',
    'bg-green-400': color === 'green',
    'text-base px-2.5 py-1': size === 'sm',
    'text-xl px-4 py-1.5': size === 'md',
    'text-3xl px-6 py-2.5': size === 'lg',
  });

  return (
    <button
      type="button"
      className={`text-white rounded-md ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
