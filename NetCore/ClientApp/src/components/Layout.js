import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

export default props => (
    <div>
        <div class="header">
            <div class="navMenu">
                <div class="menuItem">
                    <Link to={'/tournamentlist'}>
                        Tournaments
                    </Link>
                </div>
                <div class="menuItem">
                    <a href="#">News</a>
                </div>
                <div class="menuItem">
                    <a href="#">Champions</a>
                </div>
            </div>
            <div class="profileContainer">
                <div class="userPhoto">

                </div>
                <div class="userRightBlock">
                    <div class="userInfo">
                        Name LastName
                    </div>
                    <div class="userButtons">
                        <div class="logOutButton">
                            <a href="#">Log out</a>
                        </div>
                        <div class="profileButton">
                            <a href="#">To profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            {props.children}
        </div>
    </div>
);
