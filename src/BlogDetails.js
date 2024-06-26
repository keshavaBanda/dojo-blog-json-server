import { useParams, useHistory } from "react-router-dom";
import useFetchData from "./useFetchData";
import './BlogDetails.css'


const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetchData('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDeleteBlog = () => { 
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
     }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (<div>
                <article>
                    <h2 className="text-align">{blog.title}</h2>
                    <div className="mt-5">
                        <p>{blog.body}</p>
                        <h4>Thank you for Support</h4>
                        <div className="tag">
                            <span className="author m-0">developed by author
                                <p className="center m-0">{blog.author}</p>
                            </span>
                        </div>
                        
                        {!isPending && <button className="delete-blog" onClick={handleDeleteBlog}>Delete Blog</button>}
                    </div>
                </article>
            </div>)}
            
        </div>
    );
}

export default BlogDetails;