import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // router: any;
  private list = null;
  private selectedType = 0;
  private keyword = '';
  private showList = null;

  constructor(
    private listService: ListService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.listService.getList().subscribe((data) => {
      this.list = data;
      this.setShowList();
    });
  }
  setShowList(type?) {
    if (!this.list) {
      return;
    }

    if (type !== undefined) {
      this.selectedType = type;
    }
    var TYPE = this.selectedType,
      KEYWORD = this.keyword.trim();
    if (TYPE === 0) {
      if (KEYWORD.length) {
        this.showList = this.list.filter(item => item.name.indexOf(KEYWORD) != -1);
      } else {
        this.showList = this.list.slice();
      }
    } else {
      if (KEYWORD.length) {
        this.showList = this.list.filter(item => item.type === TYPE && item.name.indexOf(KEYWORD) != -1);
      } else {
        this.showList = this.list.filter(item => item.type === TYPE);
      }
    }
  }

  del(id) {
    this.listService.del(id).subscribe(x => {
      alert('确定删除此条数据');
      this.fetchData();
    }, err => {
      alert('error');
    })

  }

  update(item) {
    // this.listService.update(item).toPromise().then(x => {
    //   this.fetchData();
    // }, err => {
    //   alert('error');
    // });
    this.router.navigate(['/demo/edit', item.id])
  }

  addForm() {
    this.router.navigate(['/demo/addForm']);
  }
}
