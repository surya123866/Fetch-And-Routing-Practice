import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {details} = this.props
    const {id, title, author, avatarUrl, imageUrl, topic} = details
    return (
      <Link to={`/blogs/${id}`} className="link">
        <li className="flexRow listContainer">
          <div>
            <img className="thumbnail" src={imageUrl} alt={title} />
          </div>
          <div>
            <p>{topic}</p>
            <h1>{title}</h1>
            <div className="flexRow">
              <img className="avatar" src={avatarUrl} alt={author} />
              <p>{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
