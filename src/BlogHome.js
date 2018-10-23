import React, { Component } from 'react';
import { Link } from 'react-router'
import Butter from 'buttercms'

const butter = Butter('c9c40a5361a0fb34dbc5d7b475dcc7d45effb6dd');

class BlogHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  fetchPosts(page) {
    butter.post.list({page: page, page_size: 10}).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })
    });
  }

  fetchCategories(){
    butter.category.list()
  .then(function(resp) {
    console.log(resp.data)
  }).catch(function(resp) {
    console.log(resp)
  });
  }
  
  componentWillMount() {
    let page = this.props.params.page || 1;

    this.fetchPosts(page)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});

    let page = nextProps.params.page || 1;

    this.fetchPosts(page)
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;

      return (
        <section>
          <div class="posts">
          {this.state.resp.data.map((post) => {
            return (
              <div key={post.slug}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </div>
            )
          })}

          <br />

          <div>
            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
          </div>
          </div>
          <div class="categories">Categories</div>
        </section>
        
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default BlogHome;