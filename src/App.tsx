import * as React from 'react';

import './App.css';


import { BrowserRouter} from 'react-router-dom';

import routes from './routes';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
      
        <div className="container-fluid">
          {routes}
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
