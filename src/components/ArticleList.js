import React from 'react'
import ApiService from './ApiService';
import App from '../App';
function ArticleList(props) {
    const articles = props.articles
    const a=0;
    const editArticle = (article) => {
        props.editArticle(article,a);}
    const deleteArticle = (article) => {
        ApiService.DeleteArticle(article.id)
        .then(() => {
            props.deleteArticle(article);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
  return (
    <div>
        {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
      <div className='row'>
        <div className='col-md-1'>
            <button className='btn btn-primary' onClick={()=>editArticle(article)}>Edit</button>
        </div>
        <div className='col'>
            <button className='btn btn-danger' onClick={()=>deleteArticle(article)}>Delete</button>
      </div>
      </div>
      <hr></hr>
      </div>
    ))}
    </div>
  )
}

export default ArticleList