export interface Item {
  id?: number | string | undefined;
  name: string;
  checked?: boolean;
  visible?: boolean;
}

export class Options {
  dropdownPlacement?: 'dropdown-center' | 'dropup' | 'dropend' | 'dropstart' =
    'dropdown-center';
  showSearch?: boolean = true;
  showError?: boolean = false;
}
