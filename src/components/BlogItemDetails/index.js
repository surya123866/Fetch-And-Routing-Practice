import {Component} from 'react'
import Oval from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
    console.log(updatedData)
  }

  render() {
    const {blogItemData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemData
    return (
      <div className="container">
        {isLoading ? (
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={2000}
            strokeWidthSecondary={2030}
            color="blue"
            secondaryColor="Grey"
          />
        ) : (
          <>
            <h1>{title}</h1>
            <div className="flexRow">
              <img className="avatar" src={avatarUrl} alt={author} />
              <p>{author}</p>
            </div>
            <img className="thumbnail" src={imageUrl} alt={title} />
            <p>{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
