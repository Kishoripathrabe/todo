import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
    list = [
      { id: 1, value: 'kishori' ,edit:false},
      { id: 2, value: 'prerna' ,edit:false },
    ];
  constructor() {}

  getlist() {
    return this.list;
  }
  createList(value: any) {
    let id = this.list.length + 1
    this.list.push({id: id, value: value, edit: false})
    return this.list;
  }

  editTask(taskId: any,value: any) {
      this.list =  this.list.map((res: any) =>{
      if(res.id == taskId){
           res.value = value;
           res.edit=false
      }
      return res;
     }
    )
   
    return this.list;
  }
  setEdit(taskId: any) {
    this.list =  this.list.map((res: any) =>{
    if(res.id == taskId){
         res.edit = true;
    }
    return res;
   }
  )
  return this.list;
}
  deleteTask(id:any) {
    let newId = 0;
   this.list =  this.list.filter((res: any) =>  res.id !== id && res.isChecked !== true);
   this.list.forEach((res: any) =>{
      newId = newId+1;
      res.id = newId;
   })
   return this.list;
  }
}
