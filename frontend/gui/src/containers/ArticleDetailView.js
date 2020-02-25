import React from 'react'
import axios from 'axios'

import {Button, Card} from 'antd'
import CustomForm from '../components/Form'

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

    handleDelete = (event) =>{
        const articleId = this.props.match.params.articleId;
        axios.delete(`http://localhost:8000/api/${articleId}`);
        this.props.history.push('/'); 
        this.forceUpdate();  
    }

    render(){
        return(
            <div>
                <Card title={this.state.title}>
                    <p>{this.state.article.content}</p>
                </Card>
            <CustomForm
                requestType="put"
                articleId={this.props.match.params.articleId}
                btnText="Update"
            />
            <form onSubmit={this.handleDelete}>
                <Button type="danger" htlmType="submit">Delete</Button>
            </form>
            </div>
        )
    }
}

export default ArticleDetail;