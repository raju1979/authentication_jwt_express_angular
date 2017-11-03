import { Component, OnInit, Input, ElementRef, ViewChild, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../directives/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {

  @Input('placeholder') textPlaceholder:string;
  @Input('icon') inputIcon:string;

  @ViewChild('input') inputField:ElementRef;

  input:InputRefDirective;

// @ContentChild(InputRefDirective) input:InputRefDirective; 



  constructor(private _el:ElementRef) { }

  ngOnInit() {
    
    
  }

  ngAfterContentInit() {
    
    if(!this.input){
      console.error('not correctly initialized, no Input')
    }
    
  }

  @HostBinding('class.input-focus')
  get isInputFocus(){
    return this.input ? this.input.focus :false;
  }


  getClasses(){
    const cssClass = [];
    cssClass.push('fa');
    if(this.inputIcon){
      cssClass.push('fa-'+this.inputIcon);
    }
    return cssClass;
  }

  get classes(){
    const cssClass = {
      'fa':true
    }
    if(this.inputIcon){
      cssClass[`fa-${this.inputIcon}`] = true
    }

    console.log(cssClass);
    return cssClass;
  }

}
