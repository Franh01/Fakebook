import s from './Posts.module.css';
import Post from '../post/Post';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/postsAction';
import { useEffect, useState } from 'react';



export default function Posts() {
    const dispatch = useDispatch()
    const postsReducer = useSelector((state) => state.postsReducer.posts);
    const [pageState, setPageState] = useState(postsReducer);
    
    useEffect(() => {
        dispatch(getPosts())
    }, [pageState, dispatch])

    useEffect(() => {
        setPageState(postsReducer)
    },[dispatch])
    
    // console.log(postsReducer)
    
    return (
        <div className={s.mainContainer}>            
            <div className={s.cardsContainer}>
            {
                postsReducer.map(p => (
                    <Post
                        id={p.id}
                        key={p.id}
                        name={p.name}
                        title={p.title}
                        content={p.content}
                        url={p.url}
                    />
                ))
                }
            </div>
        </div>
    )
}