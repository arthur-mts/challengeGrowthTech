import React, { useState, Component } from 'react';
import Post from './components/Posts';

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface UserPosts {
  companyName: string;
  userName: string;
  posts: Array<IPost>;
}

interface IState {
  text: string;
  posts: Array<UserPosts>;
  error: boolean;
}

interface IProps {

}

export default class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      error: false,
      text: '',
      posts: []
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: e.target.value });
  }

  private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();


    fetch(`http://localhost:3333/users/${this.state.text || 'default'}/posts`)
      .then(response => response.json()
        .then((data: Array<UserPosts>) => {
          this.setState({ posts: data });
          if (!data.length) {
            this.setState({ error: true });
          }
        })
      );
  }

  render() {
    return (
      <main className="container">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.handleChangeText} placeholder="Nome do grupo" type="text" />
          <button type="submit" className="btn"> Buscar grupo </button>
        </form>
        {this.state.posts.length ? (
          <div className="content">
            <ul>
              {
                this.state.posts.map((item) => {
                  return (
                    item.posts.map(post => {
                      return (
                        <Post userName={item.userName} post={post} />
                      )
                    })
                  )
                })
              }
            </ul>
          </div>) :
          this.state.error ?
            (
              <span className="error"> Posts não encontrados!</span>
            )
            :
            (
              <></>
            )}

      </main>
    );
  }
}
