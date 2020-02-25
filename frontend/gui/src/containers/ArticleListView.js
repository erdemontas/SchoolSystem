import React from 'react'
import axios from 'axios'

import Articles from '../components/Article'
import CustomForm from '../components/Form'

class ArticleList extends React.Component{
    state = {
        articles: []
    }

    componentDidMount(){

        axios.get('http://localhost:8000/api/')
        .then(res =>{
            this.setState({
                articles:res.data
            });
            console.log(res.data)
        })
    }

    render(){
        return(
            <div>
                <Articles data={this.state.articles}/>
                <br></br>
                <h2>Create an article</h2>
                <CustomForm
                    requestType="post"
                    articleId={null}
                    btnText="Create"
                />
            </div>
        )
    }
}

export default ArticleList;