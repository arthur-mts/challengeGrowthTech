import React, { Component } from "react";

import './style.css';

import userLogo from '../../assets/user.png';

interface IPost {
    body: string;
    id: number;
    title: string;
    userId: number;
}


interface IProps {
    post: IPost;
    userName: string;
}

export default class Post extends Component<IProps>{

    render() {
        return (
            <li>
                <div className="postHeader">
                    <div className="userIcon">{this.props.userName.split(' ').map((e) => e.charAt(0))}</div>
                    <div className="postInfo">
                        <h3>
                            {this.props.post.title}
                        </h3>
                        <p className="username">
                            {this.props.userName}
                        </p>
                    </div>
                </div>
                <p>
                    {this.props.post.body}
                </p>
            </li>
        )
    }
}