import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './app.css';

import bootstrapStyles from 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
    render() {
        return (
            <div className={bootstrapStyles.container}>
                <p className={styles.paragraph}>{`I'm a JSX paragraph! isMobile is ${this.props.isMobile}`}</p>
            </div>
        );
    }
}

App.propTypes = {
    isMobile: PropTypes.bool
};
