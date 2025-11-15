/**
* TypeScript interfaces for atomic components
*/

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  class?: string;
}

export interface BounceArrowProps {
  href?: string;
  icon?: string;
  iconSize?: 4 | 5 | 6 | 8 | 10 | 12;
  color?: string;
  class?: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  [key: string]: any; // For other HTML attributes
}

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  class?: string;
}

export interface IconProps {
  name: string;
  size?: 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
  class?: string;
  className?: string; // Deprecated - use class
}

export interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  srcset?: string;
  sizes?: string;
  class?: string;
  [key: string]: any; // For other HTML attributes
}

export interface LinkProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'subtle';
  underline?: boolean;
  external?: boolean;
  class?: string;
  [key: string]: any; // For other HTML attributes
}

export interface TextProps {
  variant?: 'body' | 'lead' | 'small' | 'caption';
  class?: string;
  [key: string]: any; // For other HTML attributes
}

export interface UnknownBlockProps {
  name: string;
}
