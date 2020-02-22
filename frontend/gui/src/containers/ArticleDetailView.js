import React from 'react'
import axios from 'axios'
import {Card} from 'antd'

class ArticleDetail extends React.Component{
    state = {
        article: {}
    }

    componentDidMount(){
        const articleId = this.props.match.params.articleId;
         axios.get(`http://localhost:8000/api/${articleId}`)
         .then(res =>{
             this.setState({
                 article:res.data
             });
             console.log(res.data)
         })
    }

    render(){
        return(
            <Card title={this.state.title}>
                <p>{this.state.article.content}</p>
            </Card>
        )
    }
}

export default ArticleDetail;