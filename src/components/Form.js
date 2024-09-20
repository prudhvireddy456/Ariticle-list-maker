import React , {useState,useEffect }from 'react'
import ApiService from './ApiService';
function Form(props) {
    const [title, setTitle] = useState(props.article.title);
    const [body, setBody] = useState(props.article.body);
    useEffect(() => {
        setTitle(props.article.title);
        setBody(props.article.body);
    }, [props.article])
    const updateArticle=()=>{
        ApiService.UpdateArticle(props.article.id, {title, body})
        .then((response) => {
            props.updatedData(response);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
    const insertArticle=()=>{
        ApiService.InsertArticle({title, body})
        .then((response) => {
            props.insertArticle(response,);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }

  return (
    <div>
        {props.article 
        ? (<div className='mb-3'>
        <label htmlFor='title' className='form-label'>Title</label>
        <input type='text' className='form-control' id='title' placeholder='please enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>

        <label htmlFor='body' className='form-label'>Body</label>
        <textarea rows="5" className='form-control' id='body' placeholder='please enter body' value={body} onChange={(e)=>setBody(e.target.value)}/>
        {props.article.id ? <button className='btn btn-success mt-3' onClick={()=>updateArticle()}>Update</button> :
        <button className='btn btn-primary mt-3' onClick={()=>insertArticle()}>INSERT</button>}
    </div>) :null
    }

    </div>
  )
}

export default Form