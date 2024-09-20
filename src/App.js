import  {useState,useEffect} from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Form from './components/Form';
function App() {
  const [articles, setArticles] = useState([]);
  const [editedArticle, setEditArticle] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/get",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setArticles(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }, [])
  const editArticle = (article,a) => {
    {if (a===0){
      console.log("a=0");
    }
  }
    // console.log(article);
    setEditArticle(article);
  }
const updatedData = (article) => {
  const newArticles = articles.map((art) => {
    if (art.id === article.id) {
      return article;
    }
    return art;
  });
  setArticles(newArticles);
}
const openForm = () => { 
  setEditArticle({title: "", body: ""});
}
const insertArticle = (article) => {
  setArticles([...articles, article]);
}
const delecteArticle = (article) => {
  const newArticles = articles.filter((art) => art.id !== article.id);
  setArticles(newArticles);
}
  return (
    <div className="App">
      <div className='row'>
          <div className='col'>
          <h1>FLSK AND REACT FULL STACK</h1>

          </div>
          <div className='col'>
            <button className='btn btn-success'  onClick={openForm}>Add Article</button>
          </div>
      </div>
      <hr></hr>
      <ArticleList key={articles.Id} articles={articles} editArticle={editArticle} deleteArticle={delecteArticle}/>
      {editedArticle ?
      <Form article={editedArticle} updatedData={updatedData } insertArticle={insertArticle}/>: null}
    </div>
  );
}
export default App;
