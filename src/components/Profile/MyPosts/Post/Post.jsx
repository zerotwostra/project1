import s from './Post.module.css';

const Post = (props) => {

    return (
        <div>
            <div className={s.item}>
                <img src='https://avatars.mds.yandex.net/i?id=b165cdae7122958ddf706bc5d2da273b_l-4749053-images-thumbs&n=13' />
                {props.message}
                <div>
                    <span>like </span>
                    {props.likesCount}
                </div>
            </div>
        </div>

    )
}

export default Post;