import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class MtoResFaseService {

  constructor(private baseService: BaseService) {

  }

  getMtoResFase() {
    const url = environment.getMtoResFase;
    return this.baseService.getQuery(`${url}`);
  }



}
