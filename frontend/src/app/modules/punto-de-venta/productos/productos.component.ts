import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { MtoResFaseService } from 'src/app/services/mto-res-fase.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  formResFase: FormGroup;
  faseResBase: any[];
  selectTipoLit: any[];
  fases: FormArray;

  public cargando: boolean;
  public error: boolean;
  public mensajeError: string = '';

  constructor(
    public _fb: FormBuilder,
    private _mtoResFase: MtoResFaseService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.cargarResFase();
  }

  initForm(){
    this.formResFase = this._fb.group({
      fases: this._fb.array([]),
      fasesDinam: this._fb.array([])
    })
  }

  get Fases(){
    return this.formResFase.get('fases') as FormArray;
  }

  get FasesDinam(){
    return this.formResFase.get('fasesDinam') as FormArray;
  }

  cargarResFase(){
    this.cargando = true
    this._mtoResFase.getMtoResFase().subscribe((data: any) => {

      console.log(data);
      this.faseResBase = JSON.parse(data.message);
      console.log(this.faseResBase);


      /*
      this.faseResBase = JSON.parse(data.ES_SLL_MTO_RES_FASE);
      this.faseResBase.forEach(element => {
        let group = this._fb.group({
          FAR_ID_FASE_RESULTADO: new FormControl({value: element.FAR_ID_FASE_RESULTADO, disabled: true}),
          FAR_NM_FASE_RESULTADO: new FormControl({value: element.FAR_NM_FASE_RESULTADO, disabled: false}),
          FAR_DT_START: new FormControl({value:  element.FAR_DT_START  , disabled: false}),
          FAR_DT_END: new FormControl({value:  element.FAR_DT_END, disabled: false}),
          TPL_ID_TP_LITIGIO: new FormControl({value: element.TPL_ID_TP_LITIGIO, disabled: true}),
          TFA_ID_TP_FASE: new FormControl({ value: element.TFA_ID_TP_FASE, disabled: false }),
        });
        this.Fases.push(group);
      })
      this.cargando = false;
      */

    });
  }

  agregarResFase(){
    let arreglo = this._fb.group({
      FAR_ID_FASE_RESULTADO: new FormControl({ value: '', disabled: false }),
      FAR_NM_FASE_RESULTADO: new FormControl({ value: '', disabled: false }),       
      FAR_DT_START: new FormControl({ value: '', disabled: false }),
      FAR_DT_END: new FormControl({ value: '', disabled: false }),
      TPL_ID_TP_LITIGIO: new FormControl({ value: '', disabled: false }),
      TFA_ID_TP_FASE: new FormControl({ value: '', disabled: false }),
    })
    this.FasesDinam.push(arreglo);
  }


  recargarResFase(){
    this.removeItems();
    this.cargarResFase();
  }

 removeItems(){
  this.formResFase = this._fb.group({
    fases: this._fb.array([]),
    fasesDinam: this._fb.array([])
  });
 }

  removeResFaseDinam( idx: number) {
    (this.formResFase.controls.fasesDinam as FormArray).removeAt(idx);
  } 


}
