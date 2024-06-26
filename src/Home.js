import BlogList from './BlogList';
import './Home.css'
import useFetchData from './useFetchData';

const Home = () => {
    const { data: blogs, isPending, error } = useFetchData('http://localhost:8000/blogs')

    return (
        <div className="home">
            <div className="loading-state">
                {isPending && <div className='loading'>Loading...</div>}
                {error && <div className='error'>{error}</div>}
            </div>

            {blogs && <div className="blog-lists">
                <BlogList blogs={blogs} title={"All Blogs"} />
            </div>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Keshava')} title={"Keshava's Blogs"} /> */}
        </div>
    );
}

export default Home;