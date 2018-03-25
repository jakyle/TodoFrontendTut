export default class TodoItem {
  public id: number;
  public name: string; 
  public description: string; 
  public isComplete: boolean; 
}

export class TodoItemVm {
  public name: string; 
  public description: string; 
  public isComplete?: boolean; 
}