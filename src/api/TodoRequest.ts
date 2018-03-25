
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import TodoItem, { TodoItemVm } from '../Models/TodoItem';

class TodoRequest {

  private readonly _path: string = 'http://localhost:56926/api/TodoItems';
  private readonly _service: AxiosInstance = axios.create();

  public getAll(): Promise<TodoItem[] | string> {
    return this._service.get(this._path)
      .then((res: AxiosResponse<TodoItem[]>) => res.data)
      .catch((err: AxiosError) => err.message);
  }

  public get(id: number): Promise<TodoItem | string | undefined> {
    return this._service.get(`${this._path}/${id}`)
      .then((res: AxiosResponse<TodoItem[]>) => res.data.find((item: TodoItem) => item.id === id))
      .catch((err: AxiosError) => err.message);
  }

  public post(payload: TodoItemVm): Promise<string | number> {
    return this._service.post<TodoItemVm>(this._path, payload)
      .then((res: AxiosResponse) => res.status)
      .catch((err: AxiosError) => err.message);
  }

  public put(id: number, payload: TodoItemVm): Promise<number | string> {
    return this._service.put<TodoItemVm>(this._path, payload)
      .then((res: AxiosResponse) => res.status)
      .catch((err: AxiosError) => err.message);
  }

  public delete(id: number): Promise<number | string> {
    return this._service.delete(`${this._path}/${id}`)
      .then((res: AxiosResponse) => res.status)
      .catch((err: AxiosError) => err.message);
  }
}

export default new TodoRequest();