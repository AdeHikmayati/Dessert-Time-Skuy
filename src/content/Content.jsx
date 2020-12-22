import React, { Component, Fragment } from 'react';
import './Content.css';
import Post from './Post';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



class Content extends Component{
    // state = {
    //     meals: []
    // };
    constructor(props) {
        super(props)
        this.state = {
            meals: []
        };
    }
            
     

    getPostApi() {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
            .then(res => res.data.meals.map(post => ({
                idMeal: `${post.idMeal}`,
                strMeal: `${post.strMeal}`,
                strMealThumb: `${post.strMealThumb}`
            }))
        )
        .then(meals => {
            this.setState({
              meals,
              
            });
          })
    }
    //             const meals = res.data;
    //          //console.log(res.data);
    //         this.setState({
    //             meals
    //         })
    // })
        
    // }
    handleOpen = (data => {
        console.log(data)
        //  <Ingredient />;
       
    })
    
    
    componentDidMount() {

        this.getPostApi();
        
    }
        render() {
            const { meals } = this.state;
            return (
                <Fragment>
                    <p className="section-title">MENU</p>
                    <div className="content-wrapper">
                        {
                            meals.map(post => {
                                const { idMeal, strMeal, strMealThumb } = post;
                                return (<Post
                                    key={post.idMeal}
                                    data={post}
                        
                                    open={this.handleOpen}
                                />
                                );
                            })
        }
                    
                    </div>
                
                </Fragment>
            );
        }
    }


export default Content;