import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of }  from 'rxjs';
import { Task } from 'src/app/model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceUrl: string;
  
  constructor(private http:HttpClient) {
    this.serviceUrl="http://localhost:3000/tasks"
   }

  //  addTask(task:Task):Observable<Task>
  //  {
  //   return this.http.post<Task>(this.serviceUrl,task);
  //  }
  addTask(task:Task):Observable<Task>
  {
    return this.http.post<Task>(this.serviceUrl,task);
  }
  //  getAllTask(task:Task):Observable<Task>
  //  {
  //   return this.http.get<Task[]>(this.serviceUrl);
  //  }

  getAllTask():Observable<Task[]>
  {
    return this.http.get<Task[]>(this.serviceUrl);
  }

  //  deleteTask(task:Task): Observable<Task>
  //  {
  //   return this.http.delete<Task>(this.serviceUrl+'/'+task.id);
  //  }

  deleteTask(task:Task):Observable<Task>
  {
    return this.http.delete<Task>(this.serviceUrl+'/'+task.id);
  }
  //  editTask(task:Task):Observable<Task>
  //  {
  //   return this.http.put<Task>(this.serviceUrl+'/'+task.id,task);
  //  }

    editTask(task:Task):Observable<Task>
    {
      return this.http.put<Task>(this.serviceUrl+'/'+task.id,task);
    }


     
// storageProvider=[ { "name": "AWS",
// "path": "s3://op-workflow-input-dev/",
// "id": 1,
//  "type": "AWS"
// },
// {
// "name": "AZURE",
//  "path": "azureBucketName",
//  "id": 2,
//  "type": "AZURE"
//  },
// {
// "name": "GCP",
// "path": "gcpBucketName",
// "id": 3,
// "type": "GCP"
// }
// ]

// getStorageProvider():Observable<any[]>{
// return of(this.storageProvider)
// }



}
