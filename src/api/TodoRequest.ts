import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig, AxiosPromise } from 'axios';
import TodoItem  from '../Models/TodoItem';

class TodoRequest {

  private _config: AxiosRequestConfig  = {
    baseURL: 'http://localhost:55260/api/TodoItems',
    timeout: 2000,
  };

  private readonly _service: AxiosInstance = axios.create(this._config);

  public  getAll(): Promise<AxiosResponse<TodoItem[]>> {
    return  this._service.get('');
  }

  public get(id: number): Promise<AxiosResponse<TodoItem>> { 
     return this._service.get(`/${id}`);
  }

  public async post(payload: TodoItem): Promise<string | number> {
    return await this._service.post<TodoItem>('', payload)
      .then((res: AxiosResponse) => res.status)
      .catch((err: AxiosError) => err.message);
  }

  public put(id: number, payload: TodoItem): AxiosPromise<TodoItem> {
    return this._service.put<TodoItem>(`/${id}`, payload);
  }

  public async delete(id: number): Promise<number | string> {
    return await this._service.delete(`/${id}`)
      .then((res: AxiosResponse) => res.status)
      .catch((err: AxiosError) => err.message);
  }
}

export default new TodoRequest();