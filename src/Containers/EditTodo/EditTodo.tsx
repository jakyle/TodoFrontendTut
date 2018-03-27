import * as React from 'react';
import TodoItem  from '../../Models/TodoItem';
import TodoRequest from '../../api/TodoRequest';
import status from '../../api/HttpStatusCode';
import { RouteComponentProps } from 'react-router';
import TodoForm from '../../Components/TodoForm/TodoForm';

interface EdittodoState {
  todo: TodoItem;
}

interface Identifiable {id: string; }

interface EdittodoProps extends RouteComponentProps<Identifiable> { }

class Edittodo extends React.Component<EdittodoProps, EdittodoState> {

  public state = {  
    todo: { 
      id: 0,
      name: '',
      description: '',
      isComplete: false,
    },
  };

  public async componentDidMount()  {
    let id = parseInt(this.props.match.params.id, undefined);
    await TodoRequest.get(id)
      .then((res) => this.setState({todo: res.data as TodoItem}));
  }

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
    let resCode = await TodoRequest.put(this.state.todo.id, this.state.todo).then((res) => res.status);
    if (resCode === status.NO_CONTENT) {
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
export default Edittodo;