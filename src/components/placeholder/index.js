import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

/**
 * Placeholder Component
 */
class Placeholder extends React.Component {
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
        return (
            <div>Placeholder</div>
        );
    }
};

/**
 * Maps redux state values to component properties
 * @param  {Object} state Redux state
 * @return {Object}
 */
function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(Placeholder));
