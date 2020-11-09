import React, { Component, Fragment } from 'react';
import './Content.css';
import Post from './Post';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


class Content extends Component{
    state = {
        post: []
        
    }

    getPostApi = () => {
        axios.get(' http://localhost:3004/posts')
        .then((res) => {
             //console.log(res.data);
            this.setState({
                post: res.data
            })
    })
        
    }
    handleOpen = (data => {
        console.log(data)
    })
    // handleRemove = (data) => {
    //     console.log(data)
    //     axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
    //    //    console.log(result)
    //       this.getPostApi()
    //       })
    // }

    
    componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//             .then(json => {
//                 this.setState({
//           post: json
//       })
//   })        
        this.getPostApi();
        
    }
    render() {
        return (
            <Fragment>
                <p className="section-title">MENU</p>
                <div className="content-wrapper">
                {
                    this.state.post.map(post =>{
                        return <Post
                            key={post.idMeal}
                           data={post}
                        //    remove={this.handleRemove}
                            open={this.handleOpen}
                        />
                    })
                    }
                    </div>
                
            </Fragment>
        )
    }
}

export default Content;