import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Containers/Navbar/Navbar';
import Home from './Containers/Home/Home';
import Todos from './Containers/Todos/Todos';
import Addtodo from './Containers/Addtodo/Addtodo';
import Edittodo from './Containers/EditTodo/EditTodo';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/addtodo" component={Addtodo} />
          <Route path="/edittodo/:id" component={Edittodo} />
          <Route path="/todos" component={Todos} />
        </Switch>
      </>
    );
  }
}

export default App;
