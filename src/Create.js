import './Create.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Keshava');
    const [isPending, setIsPending] = useState(false);


    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, body, author };
        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlog) 
        }).then(
            console.log('blog added'),
            history.push('/'),
            setIsPending(false)
        )


    }

    return (
        <div className="create h-100">
            <h1 className='heading'>Create a Dojo Blog</h1>
            <div className="container">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <label >Blog Title:</label>
                            <input type="text" placeholder='Enter Blog Title' className='form-control w-95'
                                value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>

                        <div className="row">
                            <label >Blog Body:</label>
                            <textarea placeholder='Enter blog description' className='form-control w-95' value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                        </div>

                        <div className="row">
                            <label >Blog Author:</label>
                            <select value={author} onChange={(e) => setAuthor(e.target.value)} className='form-control w-100'>
                                <option value="Keshava">Keshava</option>
                                <option value="Tagore">Tagore</option>
                                <option value="Shiva">Shiva</option>
                            </select>
                        </div>


                        <div className="row btn-row">
                            {!isPending && <button className='btn'>Add Blog</button>}
                            {isPending && <button className='btn' disabled>Adding Blog...</button>}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Create;