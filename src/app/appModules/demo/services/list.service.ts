
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { delay } from 'rxjs/operators';

@Injectable()
export class ListService {
  list = [{
    id: 1,
    name: '测试1',
    type: 1,
    remark: '备注a'
  }, {
    id: 2,
    name: '测试2',
    type: 2,
    remark: '备注b'
  }, {
    id: 3,
    name: '测试3',
    type: 3,
    remark: 'cc'
  }, {
    id: 4,
    name: '测试4',
    type: 2,
    remark: 'dd'
  }, {
    id: 5,
    name: '我的测试',
    type: 3,
    remark: '备注a'
  }, {
    id: 6,
    name: 'app',
    type: 2,
    remark: '备注b'
  }, {
    id: 7,
    name: 'demo',
    type: 1,
    remark: 'cc'
  }, {
    id: 8,
    name: 'yyyiiiyuyii444',
    type: 3,
    remark: 'dd'
  }];

  states = [
    {
      id: 1,
      title: '笔记本'
    },
    {
      id: 2,
      title: '台式机'
    }
  ]

  getList() {
    return Observable.of(this.list).delay(500);
  }

  getState() {
    return Observable.of(this.states).delay(500);
  }

  update(item) {
    const index = _.findIndex(this.list, x => x.id === item.id);
    if (index >= 0) {
      this.list[index] = item;
      return Observable.of(true).delay(500);
    }
    return Observable.throw(false);
  }

  del(id) {
    if (_.some(this.list, x => x.id === id)) {
      _.remove(this.list, x => { return x.id === id; });
      return Observable.of(true).delay(500);
    }
    return Observable.throw(false).delay(500);
  }

  getEditDetail(id) {
    const index = _.findIndex(this.list, x => x.id === Number(id));
    if (index >= 0) {
      return Observable.of(this.list[index]).delay(500);
    }
    return Observable.throw(null);
  }

  addForm(item) {
    const id = _.maxBy(this.list, x => x.id).id + 1;
    item.id = id;
    this.list.push(item);
    return Observable.of(true);
  }

  updateForm(id, item) {
    const index = _.findIndex(this.list, x => x.id === Number(id));
    if (index >= 0) {
      this.list[index] = item;
      return Observable.of(true).delay(500);
    }
    return Observable.of(null);
  }

}
