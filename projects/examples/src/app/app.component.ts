import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item, Options } from '../../../ngx-multiselect/src/lib/model';
import { APIService } from './api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  choices: Item[] = [];
  states: Item[] = [];
  options: Options = {
    dropdownPlacement: 'dropdown-center',
    showSearch: true,
  };
  selectedStates: { [key: string]: Item } = {};

  apiSub: Subscription | null = null;

  constructor(private apiService: APIService) {}
  ngOnDestroy(): void {
    if (this.apiSub) {
      this.apiSub.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.choices.push(
      {
        name: 'Option 1',
      },
      {
        name: 'Option 2',
      }
    );
    this.apiSub = this.apiService.getAllStates().subscribe((data) => {
      const _states = [];
      for (const key in data) {
        _states.push({ id: key, name: data[key] });
      }
      this.states = [..._states];
    });
  }

  staticSelected(selected: { item: Item; isAll: boolean }) {
    console.log(selected);
  }
  stateSelected(selectedState: { item: Item; isAll: boolean }) {
    if (selectedState.item.id) {
      if (this.selectedStates[selectedState.item.id] !== undefined) {
        delete this.selectedStates[selectedState.item.id];
      } else {
        this.selectedStates[selectedState.item.id] = selectedState.item;
      }
    }
  }
}
