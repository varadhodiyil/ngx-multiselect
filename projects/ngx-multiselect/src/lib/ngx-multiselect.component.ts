import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, Options } from './model';

@Component({
  selector: 'ngx-multiselect',
  templateUrl: './ngx-multiselect.component.html',
  styleUrls: ['./ngx-multiselect.component.scss'],
})
export class NgxMultiselectComponent implements OnInit {
  ngOnInit(): void {}

  @Input() placeholder: string | undefined;
  @Input() options: Options | undefined;

  @Output() selected = new EventEmitter<{ item: Item; isAll: boolean }>(false);
  all: Item = {
    id: undefined,
    name: 'All',
    checked: false,
    visible: true,
  };

  @Input('items')
  set items(items: any[]) {
    this._choices = items;
    let totalChecked = 0;
    this._choices.map((item, index) => {
      item.checked = item.checked || false;
      item.visible = item.visible || true;
      item.id = item.id || index;
      if (item.checked) {
        totalChecked += 1;
      }
    });

    if (this._choices.length === 0) {
      this.all.visible = false;
    } else {
      this.all.visible = true;
    }
    if (totalChecked > 0 && totalChecked === items.length) {
      this.all.checked = true;
    }
  }

  _choices: Item[] = [];

  private searchText = '';

  get search(): string {
    return this.searchText;
  }

  set search(searchText: string) {
    this.searchText = searchText;

    const search = this.searchText.toLowerCase();
    if (!search) {
      this.all.visible = true;
    }
    let matches = 0;
    this._choices.forEach((i, index) => {
      if (i.name.toLowerCase().indexOf(search) !== -1) {
        i.visible = true;
        matches += 1;
      } else {
        i.visible = false;
      }
    });
    if (matches === this._choices.length) {
      this.all.visible = true;
    } else {
      this.all.visible = false;
    }
  }
  get selectedOptions() {
    return this.all && this.all.checked
      ? this.all.name
      : this._choices
          .filter((i) => i.checked && i.visible)
          .map((i) => i.name)
          .join(', ');
  }

  get checked(): number {
    return this._choices.filter((i) => i.checked).length;
  }

  trackById(index: number, item: Item): number | undefined | string {
    return item.id;
  }

  onChange($event: any, item: Item, index: number | undefined): void {
    const selected = $event.target.checked;
    if (index === undefined) {
      this.all.checked = selected;
      for (const iterator of this._choices) {
        iterator.checked = selected;
      }
    } else {
      this._choices[index].checked = selected;

      if (this.all) {
        if (this.all.checked) {
          this.all.checked = false;
        }
        const allChecked = this._choices
          .filter((i) => i.id !== null)
          .every((i) => i.checked);
        this.all.checked = allChecked;
      }
    }

    this.selected.emit({ item: item, isAll: this.all.checked === true });
  }
}
