import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={ this.props.avatar } alt={ this.props.first_name } />
                    <div className="card-body">
                        <h4 className="card-title">{ this.props.first_name } { this.props.last_name }</h4>
                        <a href="#" className="btn btn-primary">Follow</a>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}

export default Card;
