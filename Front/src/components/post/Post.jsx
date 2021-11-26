import s from './Post.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getPosts } from '../../redux/actions/postsAction';
import { useEffect, useState } from 'react';

//! hacer un estado para pasarle al onclick y usarlo con useeffect para que en cada delete se actualice el componente


export default function Posts({ id, name, title, content, url }) {
    const dispatch = useDispatch();
    const postsState = useSelector((state) => state.postsReducer.posts);
    const [stateUpdate, setStateUpdate] = useState(postsState)
    
    function handleOnClick() {
        dispatch(deletePost(id))
        setStateUpdate(postsState)
        setTimeout(() => {
            dispatch(getPosts())
        }, 100);
    }
    
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, stateUpdate])
    return (
        <div>
            <div className={s.cardContainer}>
                <div className={s.firstLine}>
                    <div className={s.nameContainer}><h3 className={s.name}>{name}</h3></div>                
                    <button className={s.deleteBtn} onClick={handleOnClick}>X</button>
                </div>
                <div className={s.textContainer}>
                    <h2 className={s.titulo}>{title}</h2>
                    <p className={s.content}>{content}</p>
                </div>
                {url !== undefined ?
                    <div className={s.imagenes}>
                        <a href={url} target='_blank' rel="noreferrer"><img className={s.image} src={url} alt='userimg' /></a>
                    </div>
                    :
                    <div></div>}
                
            </div>            
        </div>
    );
};