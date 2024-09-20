export default class ApiService {
    static UpdateArticle(id,body) {
        return fetch(`http://localhost:5000/update/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then ((response) => response.json())
    }
    static InsertArticle(body) {
        return fetch(`http://localhost:5000/add`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then ((response) => response.json())
    }
    static DeleteArticle(id) {
        return fetch(`http://localhost:5000/delete/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then ((response) => response.json())
    }
}

