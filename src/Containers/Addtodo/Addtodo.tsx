import * as React from 'react';
import { TodoItemVm } from '../../Models/TodoItem';
import TodoRequest from '../../api/TodoRequest';
import status from '../../api/HttpStatusCode';
import { RouteComponentProps } from 'react-router';

export interface AddtodoState {
  todo: TodoItemVm;
}
interface AddtodoProps extends RouteComponentProps<{}> {
}

class Addtodo extends React.Component<AddtodoProps, AddtodoState> {

  public state = {  
    todo: { 
      name: '',
      description: '',
      isComplete: false,
    } 
  };
  
  public handleChangeFor = (propertyName: string) => (event: React.FormEvent<HTMLInputElement>) => {
    if (propertyName === 'isComplete') {
      this.setState({todo: { ...this.state.todo, [propertyName]: event.currentTarget.checked } });
    } else {
      this.setState({todo: { ...this.state.todo, [propertyName]: event.currentTarget.value } });
    }
  }

  public handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let res = await TodoRequest.post(this.state.todo);
    if (res  === status.CREATED) {
      this.setState({todo: new TodoItemVm});
      this.props.history.push('/todos');
    }
  } 

  public render() {
    const { name, description, isComplete } = this.state.todo;
    return (
      <div>
        <br />
        <form>
          <label>Name: </label>
          <input type="text" onChange={this.handleChangeFor('name')} value={name} />
          <label>Description: </label>
          <input type="text" onChange={this.handleChangeFor('description')} value={description} />
          <label>is it completed?: </label>
          <input type="checkbox" onChange={this.handleChangeFor('isComplete')} checked={isComplete} />
          <button onClick={() => this.handleSubmit} >post todo</button>
        </form>
      </div>
    );
  }
}
export default Addtodo;