import {
  Component,
  OnInit,
  ɵclearResolutionOfComponentResourcesQueue,
} from '@angular/core';
import { from } from 'rxjs';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-googleform',
  templateUrl: './googleform.component.html',
  styleUrls: ['./googleform.component.scss'],
})
export class GoogleformComponent implements OnInit {
  checkoutForm: FormGroup;
  options: Array<string> = ['textInput', 'multiChoice', 'checkbox', 'dowpDown'];
  gender = ['Male', 'Female'];
  selectedOptionsValue: string = '';
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({
      testformname: ['', Validators.required],
      formdescriptions: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
      items: this.formBuilder.array([
        this.formBuilder.group({
          question: [''],
          textanswer: [''],
        }),
      ]),
      addDynamicElement: this.formBuilder.array([]),
      addinputElement: this.formBuilder.array([]),
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }
  ngOnInit() {
    console.log(this.f.items.value.length);
    console.log(this.f.items.value);
    const itemVal = this.f.items.value;
    console.log(itemVal[0].itemId);
    console.log(itemVal[0].textanswer);
    this.checkoutForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  changeOptions(value: string, index: number) {
    this.selectedOptionsValue = value[index];
  }
  get items() {
    return this.checkoutForm.get('items') as FormArray;
  }
  addNewItem() {
    const itemLength = this.items.length;
    const newItem = this.formBuilder.group({
      question: [itemLength + 1],
      textanswer: [''],
    });
    this.items.push(newItem);
  }

  removeItem(itemId: number) {
    this.items.removeAt(itemId);
  }
  postData() {
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value);
    console.log('testformname:- ' + this.checkoutForm.value.testformname);
    console.log('quantity:- ' + this.checkoutForm.value.quantity);
    console.log('terms:- ' + this.checkoutForm.value.terms);

    this.resetForm();
  }

  resetForm() {
    this.checkoutForm.reset();
  }

  /*############### Add Dynamic Elements ###############*/
  get addDynamicElement() {
    return this.checkoutForm.get('addDynamicElement') as FormArray;
  }
  removecheckItem(itemId: number) {
    this.addDynamicElement.removeAt(itemId);
  }
  addSuperPowers() {
    this.addDynamicElement.push(this.formBuilder.control(''));
  }

  /*############### Add Dynamic Elements ###############*/
  get addinputElement() {
    return this.checkoutForm.get('addDynamicElement') as FormArray;
  }
  removeinputItem(itemId: number) {
    this.addinputElement.removeAt(itemId);
  }
  addInput() {
    this.addinputElement.push(this.formBuilder.control(''));
  }
}
