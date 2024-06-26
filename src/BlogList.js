import './BlogList.css'
import { Link } from 'react-router-dom'
const BlogList = ({ blogs, title }) => {

    return (
        // <h2>{title}</h2>
        <div className="blog-list">
            <h2 className='text-align'>{title}</h2>
            {blogs.map((blog) => (
                <div className="m-5 text-align">
                    <Link to={`blogs/${blog.id}`} className="text-decoration">
                        <div className="blog-preview-card" key={blog.id}>
                            <h3>{blog.title}</h3>
                            <p>created by {blog.author}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;