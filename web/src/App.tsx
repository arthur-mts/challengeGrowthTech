import React, { Component } from 'react';
import Post from './components/Posts';

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

interface IState {
  text: string;
  posts: Array<IUserPost>;
  error: string | null;
}

interface IProps {

}

export default class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      error: null,
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


    fetch(`http://localhost:3333/posts/group/${this.state.text || 'default'}`)
      .then(response => response.json()
        .then((data: Array<IUserPost>) => {
          this.setState({ posts: data });
          if (!data.length) {
            this.setState({ error: 'Nenhum post encontrado' });
          }
        })
      ).catch(err => {
        this.setState({ error: 'Erro na conexão' })
      });
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
                this.state.posts.map((post) => {

                  return (
                    <Post userPost={post} />
                  )

                })
              }
            </ul>
          </div>) :
          this.state.error ?
            (
              <span className="error"> {this.state.error}</span>
            )
            :
            (
              <></>
            )}

      </main>
    );
  }
}
