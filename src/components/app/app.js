import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

// Views
import Placeholder from '../placeholder';

const PageFade = (props) => (
    <CSSTransition
        {...props}
        classNames="fade"
        timeout={500}
        mountOnEnter={true}
        unmountOnExit={true}
    />
);

/**
 * Main app component which wraps the rest of the components
 */
class App extends React.Component {
    /**
     * Class constructor
     */
    constructor() {
        super();
    }

    /**
     * React render method
     * @return {Object} React component
     */
    render() {
        const {location} = this.props;

        return (
            <TransitionGroup className="transition-group">
                <PageFade key={location.pathname}>
                    <section className="fix-container">
                        <Switch location={location}>
                            <Route exact path="/" component={Placeholder} />
                        </Switch>
                    </section>
                </PageFade>
            </TransitionGroup>
        );
    }
}

/**
 * Maps redux state values to component properties
 * @param  {Object} state Redux state
 * @return {Object}
 */
function mapStateToProps(state) {
    return {};
}

/**
 * Maps redux actions creators to component properties
 * @param  {function} dispatch Redux dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
