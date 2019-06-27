import React, { Component } from "react"
import axios from "axios" 
const { Provider, Consumer} = React.createContext()

class BlogProvider extends Component{
    constructor(props){
        super(props)
            this.state = {
                posts: [],
                
            }
    }


    getPosts = () => {
        axios.get("/blogs").then((response) => {
            // console.log(response.data)
            this.setState({posts: response.data})
            // console.log(response.data)
        })
    }

    postNew = (post) => {
        // axios.post().then(response => {
            const {title, description, author, blogBody, imgUrl, tags, date} = post
            axios.post('/blogs', {title, description, author, blogBody, imgUrl, tags, date })
            .then((response) => {
            this.setState(prevState => {
                    return {posts:[response.data, ...prevState.posts ]}
                }
            )
        })
    }

    newPosts = () => {
        this.setState((prevState) => {
            return {

            }
        })
    }

    componentDidMount(){
        this.getPosts()
    }

    render() {
        return(
            <Provider value = {{
                ...this.state,
                postNew: this.postNew
            }}>
            {this.props.children}
            </Provider>
        )
    }
}
export default BlogProvider

export const withPosts = (Comp) => {
    return props => <Consumer>
                        {value => <Comp {...value}{...props} />}
                    </Consumer>
}
