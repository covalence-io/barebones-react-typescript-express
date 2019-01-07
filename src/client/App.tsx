import * as React from 'react';

import './scss/app';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { name: null };
    }

    async componentWillMount() {
        let r = await fetch('/api/hello');
        let name = await r.json();
        this.setState({ name })
    }

    render () {
        return (
            <main className="container">
                <h1 className="covalence-blue">Hello {this.state.name}!</h1>
                <h2></h2>
            </main>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    name: string;
}