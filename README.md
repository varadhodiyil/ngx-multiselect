# Bootstrap MultiSelect For Angular

### Libraries :

    - Bootstrap 5.13
    - Angular 16

### Installation

```
npm i ngx-multiselectv2
```

### Configuration

Customisation :

```
{
  dropdownPlacement?: 'dropdown-center' | 'dropup' | 'dropend' | 'dropstart'
  showSearch?: boolean ;
  showError?: boolean;
}

```

Choices Properties

```
{
  id?: number | string | undefined;
  name: string;
  checked?: boolean;
  visible?: boolean;
}
```

- If `id` is not passed for an item, Idex is assumed as the id
- name -> Label
- Checked - Initial (Checked/not)
- Visible - Show the Item

Component

```
<ngx-multiselect
    [items]="items"
    [options]="{
    showSearch: true,
    dropdownPlacement: 'dropdown-center'
    }"
    (selected)="stateSelected($event)"
></ngx-multiselect>

```
