import { Component } from '@angular/core';
import {Form} from 'src/app/models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  FormComp: Form[] = [];
  editId = 0;
  buttonText = 'Add';

  add(): void {
    if (this.editId === 0) {
      let form: Form = {
        id: this.FormComp.length + 1,
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
      };
      this.FormComp.push(form);
      this.name = '';
      this.email = '';
      this.phoneNumber = '';
      this.buttonText = 'Edit'; // Change the button text to 'Edit'
    } else {
      const updatedEdit = this.FormComp.findIndex(
        (form) => form.id === this.editId
      );
      if (updatedEdit !== -1) {
        this.FormComp[updatedEdit] = {
          id: this.editId,
          name: this.name,
          email: this.email,
          phoneNumber: this.phoneNumber,
        };
        this.editId = 0;
      }
      this.buttonText = 'Add'; // Change the button text back to 'Add'

    }
  }

  Delete(id: number): void {
    this.FormComp = this.FormComp.filter((x) => x.id !== id);
  }

  edit(id: number): void {
    this.editId = id;
    this.buttonText = 'Edit'; 
    const toEdit = this.FormComp.find((p) => p.id === id);
    if (toEdit) {
      this.name = toEdit.name;
      this.email = toEdit.email;
      this.phoneNumber = toEdit.phoneNumber;
    }
  }
}