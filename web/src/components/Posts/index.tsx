import React, { Component } from "react";

import './style.css';

interface IPost {
    body: string;
    id: number;
    title: string;
    userId: number;
}

interface IUserPost {
    company: string;
    userName: string;
    post: IPost;
}


interface IProps {
    userPost: IUserPost;
}

export default class Post extends Component<IProps>{

    render() {
        return (
            <li>
                <div className="postHeader">
                    <div className="userIcon">{this.props.userPost.userName.split(' ').map((e) => e.charAt(0))}</div>
                    <div className="postInfo">
                        <h3>
                            {this.props.userPost.post.title}
                        </h3>
                        <p className="username">
                            {this.props.userPost.userName}  (at {this.props.userPost.company})
                        </p>
                    </div>
                </div>
                <p>
                    {this.props.userPost.post.body}
                </p>
            </li>
        )
    }
}