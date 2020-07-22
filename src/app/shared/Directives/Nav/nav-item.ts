export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  link?: string;
  children?: NavItem[];
}