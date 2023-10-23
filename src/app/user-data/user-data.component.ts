import { Component } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  user = {
    name: '',
    age: '',
    address: '',
    email: ''
  };

  userData: any[] = [];
  editingUser: any = null;

  addData(): void {
    this.userData.push({ ...this.user });
    this.clearForm();
  }

  editUser(userToEdit: any , index:number): void {
    this.user = { ...userToEdit };
  } 

  updateData(): void {
    const index = this.userData.findIndex( (user)=>{
      return user.name === this.user.name
    })
    this.deleteUser(index)
    this.addData()
  }
  
  // deleteUser(index: number): void {

  //   if (index >= 0) {
  //     this.userData.splice(index, 1);
  //   }
  // }

  deleteUser(index: number): void {
    if (index >= 0) {
      this.userData = this.userData.filter((user, i) => i !== index);
    }
  }

  clearForm(): void {
    this.user = {
      name: '',
      age: '',
      address: '',
      email: ''
    };
  }
}