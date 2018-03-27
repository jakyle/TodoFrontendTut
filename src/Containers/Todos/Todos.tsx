import * as React from 'react';
import TodoItem from '../../Models/TodoItem';
import TodoRequest from '../../api/TodoRequest';
import './Todo.css';
import { RouteComponentProps } from 'react-router';

export interface FormState {
  items: TodoItem[];
}
interface FormProps extends RouteComponentProps<{}> {
}
class Todos extends React.Component<FormProps, FormState> {

  public state = { 
    items: new Array<TodoItem>(),
  };

  public async componentDidMount() {
    await TodoRequest.getAll()
      .then((items) => this.setState({items: items.data as TodoItem[]}));
  }

  public RemoveHandler = (id: number) => {
    let itemsCopy = [...this.state.items];
    let removedItem = itemsCopy.filter(item => item.id !== id);
    this.setState({items: removedItem});
    TodoRequest.delete(id);
  }

  public EditHandler = (id: number) => {
    this.props.history.push(`/edittodo/${id}`);
  }
  
  public render() {
    const { items } = this.state;
    const itemsList = items.map((item) => (
      <li className="Todo-item" key={item.id}>
        <h3>{item.name}</h3>
        <h5>{item.description}</h5>
        <button onClick={() => this.RemoveHandler(item.id)}>Remove</button>
        <button onClick={() => this.EditHandler(item.id)}>Edit</button>
      </li>
    ));
    return (
      <div className="Todo">
        {items.length > 0 
          ? <ul className="Todo-List">{itemsList}</ul>
          : <p>Currently no Todo items</p>
        }
      </div>
    );
  }
}
export default Todos;