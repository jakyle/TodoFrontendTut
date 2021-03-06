import * as React from 'react';
import TodoItem from '../../Models/TodoItem';
import TodoRequest from '../../api/TodoRequest';
import status from '../../api/HttpStatusCode';
import { RouteComponentProps } from 'react-router';
import TodoForm from '../../Components/TodoForm/TodoForm';

interface AddtodoState {
  todo: TodoItem;
}
interface AddtodoProps extends RouteComponentProps<{}> { }

class Addtodo extends React.Component<AddtodoProps, AddtodoState> {

  public state = {  
    todo: { 
      id: 0,
      name: '',
      description: '',
      isComplete: false,
    } 
  };
  
  public handleChangeFor = (propertyName: string) => (event: React.FormEvent<HTMLInputElement>) => {
    const todoCopy = {...this.state.todo};
    if (propertyName === 'isComplete') {
      todoCopy[propertyName] = event.currentTarget.checked;
      this.setState({todo: todoCopy });
    } else {
      todoCopy[propertyName] = event.currentTarget.value;
      this.setState({todo: todoCopy });
    }
  }

  public handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let res = await TodoRequest.post(this.state.todo);
    if (res === status.CREATED) {
      this.setState({todo: new TodoItem});
      this.props.history.push('/todos');
    }
  } 

  public render() {
    return (
      <TodoForm 
        item={this.state.todo} 
        change={this.handleChangeFor} 
        submit={this.handleSubmit}
      />)
    ;
  }
}
export default Addtodo;