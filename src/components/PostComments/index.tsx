import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

type Comment = {
    id: number;
    comment: string;
};

const PostComments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = { id: comments.length, comment: tempComment };
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <ul className={styles['post-comments']}>
                {comments.map(({ comment, id }) => (
                    <li
                        key={id}
                        data-testid="comment-element"
                        className={styles['post-comment']}
                    >
                        <p className={styles['post-comment-content']}>{comment}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
                <textarea
                    value={tempComment}
                    onChange={e => setTempComment(e.target.value)}
                    required
                    className={styles['post-comments-form-textarea']}
                    data-testid="comment-textarea"
                />
                <button
                    type="submit"
                    className={styles['post-comments-form-button']}
                    data-testid="comment-button"
                >
                    Comentar
                </button>
            </form>
        </div>
    );
};

export default PostComments;
