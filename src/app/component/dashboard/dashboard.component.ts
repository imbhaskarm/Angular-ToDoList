import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj: Task=new Task();
  taskArr:Task[]=[];

  addTaskValue: string='';
  editTaskValue: string='';
  


  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.taskObj=new Task();
    this.taskArr=[];
    this.addTaskValue='';
    this.editTaskValue='';
    this.getAllTask();
  }

  getAllTask(){
    this.crudService.getAllTask().subscribe({next:(res)=>{
      this.taskArr=res,
      console.log("hello",res)}
    ,error:(err)=>
      alert("Unable to get list of tasks")
    });
}



addTask()
{
  this.taskObj.task_name=this.addTaskValue;
  this.crudService.addTask(this.taskObj).subscribe({next:(res)=>
    this.ngOnInit()
  ,error:(err)=>
    alert("Unable to add the task into the list"),
});
  
   
}

editTask()
{
  this.taskObj.task_name=this.editTaskValue;
  this.crudService.editTask(this.taskObj).subscribe({next:(res)=>
    this.ngOnInit(),
  error:(err)=>
    alert("Unable to edit the task into the list")
});
}

deleteTask(etask:Task)
{
  this.crudService.deleteTask(etask).subscribe({next:(res)=>
  this.ngOnInit(),
  error:(err)=>
  alert("Unable to delete the task from the list")
  });
}

call(etask: Task)
{
  this.taskObj=etask;
  this.editTaskValue=etask.task_name;
}


 




}
