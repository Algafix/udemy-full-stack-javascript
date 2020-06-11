import React, {Component} from 'react';

class TeamMembers extends Component {

    render() {
        return(
            <div className="col-sm-4">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src={this.props.image} alt="" />
                    <h4>{this.props.name}</h4>
                    <p className="text-muted">{this.props.position}</p>
                    <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                        <a href="#">
                        <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">
                        <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
        );
    }

}

export default TeamMembers;