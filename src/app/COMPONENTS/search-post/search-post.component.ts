import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from '../../../../node_modules/rxjs';
import { distinctUntilChanged, debounceTime } from '../../../../node_modules/rxjs/operators';


@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent implements OnInit {

  searchText = new FormControl();
  searchText$: Observable<string> = this.searchText.valueChanges;
  @Output() searchTextChanged = new EventEmitter<string>();

  constructor() {
    this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(response => {
      this.searchTextChanged.emit(response);
    })
  }

  ngOnInit() {
    this.searchText.setValue('');
  }

}
