import {useState} from "react";

interface User {
    id: number;
    username: string;
    fullName: string;
}

interface Comment{
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User
}

function Komentarz(props:Comment){

    const [likes , setLikes] = useState<number>(props.likes);
    const [like , setLike] = useState<boolean>(false);
    const [dislike , setDislike] = useState<boolean>(false);


    const Like = () => {

        if (like){
            setLike(false);
            setLikes((prev:number) => prev - 1)
        }
        else{
            setLike(true);
            setLikes((prev:number) => prev + 1)
            if(dislike){
                setDislike(false);
                setLikes((prev:number) => prev + 1)
            }
        }
    }

    const Dislike = () => {

        if (dislike){
            setDislike(false);
            setLikes((prev:number) => prev + 1)
        }
        else{
            setDislike(true);
            setLikes((prev:number) => prev - 1)
            if(like){
                setLike(false);
                setLikes((prev:number) => prev - 1)
            }
        }
    }




    return (
        <>

            <div className="comment">
                <div className="comment-user">
                    <div className="user-avatar">{props.user.fullName[0]}</div>
                    <div>{props.user.fullName}</div>
                    <div>@{props.user.username}</div>
                </div>
                <div className="comment-body">{props.body}</div>
                <div className="comment-likes">
                    <div>{likes}</div>
                    <div className={like ? "liked" : "unliked"} onClick={Like}>
                        👍
                    </div>
                    <div className={dislike ? "disliked" : "undisliked"} onClick={Dislike}>
                        👎
                    </div>
                </div>

            </div>



        </>
    )

}

export default Komentarz;