export interface Cell {
  name: string;
  value: any;
  align: 'left' | 'center' | 'right';
}

export interface Column {
  name: string;
  type: string;
  width: number;
}
