import { Link } from 'react-router-dom'
import './Not-found.css'
const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className='page-not-found'>404 Page Not Found</h1>
            <div className="Link">
                <Link to="/" >Go to Home</Link>
            </div>
        </div>
    );
}

export default NotFound;