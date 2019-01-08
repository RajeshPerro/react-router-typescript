import * as React from 'react'

import Hello from '../Hello';

export default class Home extends React.Component {
  public render() {
    return (
      <div className="container">
            <Hello name="Rajesh Ghosh " age={10} />
      </div>
    )
  }
}
