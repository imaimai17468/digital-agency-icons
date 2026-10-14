export interface IconData {
  name: string;
  variant: 'fill' | 'line';
  svg: string;
  path: string;
  viewBox: string;
  width: number;
  height: number;
}

export interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: object;
  'aria-label'?: string;
  title?: string;
}

export type IconVariant = 'fill' | 'line';
