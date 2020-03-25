import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class Products {

  constructor(private baseService: BaseService) {

  }

  getMtoResFase() {
    const url = environment.getMtoResFase;
    return this.baseService.getQuery(`${url}?`);
  }

}

