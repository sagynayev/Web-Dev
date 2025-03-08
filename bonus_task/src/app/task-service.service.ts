import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, title: 'homework', description: 'do homework Web development', category: 'Work', deadline: new Date() },
    { id: 2, title: 'Finish project django', description: 'do project on django', category: 'Work', deadline: new Date() },
    {id:3,title:'sport',description:'go to the gym',category:'Persenal',deadline: new Date()}
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  }
}
