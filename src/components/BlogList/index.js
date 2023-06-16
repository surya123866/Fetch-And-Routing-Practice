import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    console.log(data)

    const updatedData = data.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogsList: updatedData, isLoading: false})
    console.log(data)
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogsList.map(each => (
              <BlogItem details={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
