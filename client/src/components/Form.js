import React, { Component } from 'react'
// import axios from 'axios';
import { withPosts } from './GlobalProvider';
// import '../css/post-page.css'

class PostPage extends Component {
        constructor() {
            super()
            this.state={
                // title: '',
                // description: '',
                // author: '',
                // blogBody: '',
                // imgUrl: '',
                // tags: '',
                date: ''
            }
        }
        
        onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value})
        }

        onSubmit = (e) => {
            e.preventDefault()
            // const {title, description, author, blogBody, imgUrl, tags, date} = this.state
            this.props.postNew(this.state)
            // axios.post('/blogs', {title, description, author, blogBody, imgUrl, tags, date }).then((result) => {
            //         console.log("Posted successfully")
            // })
            this.setState({
                // title: '',
                // description: '',
                // author: '',
                // blogBody: '',
                // imgUrl: '',
                // tags: '',
                date: '' 
            })
        }
        
 
    render() {
        const { title, description, author, blogBody, imgUrl, tags, date } = this.state
        return (
            <div className='post-page-container'>
                <form onSubmit={this.onSubmit}>
                    <div className='split'>
                        <div className='left-inputs'>
                            <div className='input-container'>
                                <label>Title:</label>
                                <input 
                                className='input-title' 
                                required type='string' 
                                name='title' 
                                value={title} 
                                onChange={this.onChange}
                                placeholder='(Limit: 100 Characters)'
                                maxLength= '100' />
                            </div>

                            <div className='input-container'>
                                <label>Date:</label>
                                <input 
                                className='input-blogDate' 
                                type='date' 
                                name='date' 
                                value={date}
                                onChange={this.onChange}
                                placeholder='MM/DD/YYYY' />
                            </div>
                        </div>

                        <div className='right-inputs'>
                            <div className='input-container'>
                                <label>Author:</label>
                                <input 
                                className='input-author' 
                                required type='string' 
                                name='author' 
                                value={author}
                                onChange={this.onChange}
                                placeholder='Van Wiggles, Straussy' />
                            </div>

                            <div className='input-container'>
                                <label>Tags:</label>
                                <input 
                                className='input-blogTags' 
                                type='string' 
                                name='tags' 
                                value={tags}
                                onChange={this.onChange}
                                placeholder='rock, climbing, asshat' />
                            </div>
                        </div>
                    </div>

                    <div className='center-inputs'>

                        <div className='input-container'>
                            <label>Image URL:</label>
                            <input 
                            className='input-blogImgUrl'
                            size='50' 
                            type='string' 
                            name='imgUrl' 
                            value={imgUrl}
                            onChange={this.onChange}
                            placeholder='http://www.domain.com/images/tissuebox.jpg' />
                        </div>

                        <div className='input-container'>
                            <label>Desc:</label>
                            <textarea 
                            rows='1' cols='50' 
                            className='input-description' 
                            required type='string' 
                            name='description'
                            value={description}
                            onChange={this.onChange}
                            placeholder='Description'></textarea>
                        </div>
                        <div className='input-container'>
                            <label>Body:</label>
                            <textarea 
                            rows="10" cols="50" 
                            className='input-body' 
                            required type='string' 
                            name='blogBody'
                            value={blogBody}
                            onChange={this.onChange}
                            placeholder='Place the body of your blog post here.'
                            ></textarea>
                        </div>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )    
    }
}

export default withPosts(PostPage)