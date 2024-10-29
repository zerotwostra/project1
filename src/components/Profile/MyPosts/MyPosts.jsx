import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'WelCoMe-t0-mY-PaGe:з', likesCount: 122 },
        { id: 2, message: "Hell0 eVerYnaYn", likesCount: 228 }
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>I posted</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;