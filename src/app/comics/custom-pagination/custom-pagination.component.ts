import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css']
})
export class CustomPaginationComponent implements OnInit {

  @Input() collectionSize: number;
  @Input() pageSize: number;
  @Input() currentPage: number;

  @Output() pageChange = new EventEmitter();
  
  totalPages: number;
  prevPage: number;
  nextPage: number;
  
  constructor() { }

  ngOnInit(): void {
    this.setPagesValues();
  }

  onPrevClick() {
    this.setPagesValues();
    this.pageChange.emit(this.prevPage);
  }

  onNextClick() {
    this.setPagesValues();  
    this.pageChange.emit(this.nextPage);
  }

  setPagesValues() {
    this.totalPages = Math.ceil(this.collectionSize/this.pageSize);
    this.prevPage = this.currentPage > 0 ? this.currentPage - 1 : this.currentPage;
    this.nextPage = this.currentPage < this.totalPages ? this.currentPage + 1 : this.currentPage;
  }
}
