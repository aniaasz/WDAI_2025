import {useEffect, useState} from "react";
import Komentarz from "./Komentarz";

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

function Komentarze(){

    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/comments")
            .then((res: Response) => res.json())
            .then(
                (data: { comments: Comment[]}) => {
                    setComments(data.comments);
                }
            );
    }, []);

    return (
        <div className="comment-container">
            {comments.map((comment: Comment) => (
                <Komentarz
                    id = {comment.id}
                    body = {comment.body}
                    postId = {comment.postId}
                    likes = {comment.likes}
                    user = {comment.user}
                />
            ))}
        </div>
    );


}

export default Komentarze;