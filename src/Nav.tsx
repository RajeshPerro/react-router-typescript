import * as React from 'react'

import { ConnectedRouter } from 'connected-react-router'

import { History } from 'history'
import routes from './routes'

interface IAppProps {
    history: History;
}

const Nav = ({ history }: IAppProps) => {
    return (
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    )
}

export default Nav