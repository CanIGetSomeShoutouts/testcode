import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import About from './about'
import Food from './food'

export default class App extends PureComponent {


    render() {
        return (
            <Router>
                <React.Fragment>
                    <p>App Component</p>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/food-choices">Food</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={App}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/food-choices" component={Food}></Route>
                </React.Fragment>
            </Router>

        )
    }
}