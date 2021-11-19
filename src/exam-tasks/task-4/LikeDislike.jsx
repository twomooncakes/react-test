import { useReducer, useState } from 'react';

const initialState = {
    likes: 12,
    dislikes: 2
}


function likeReducer(state, action) {
    switch(action.type) {
        case "like":
            return { ...state, likes: state.likes + action.payload }
        case "dislike":
            return { ...state, dislikes: state.dislikes + action.payload }
        default:
            return state;
    }
};

function LikeDislike() {
    const [state, dispatch] = useReducer(likeReducer, initialState);
    const [status, setStatus] = useState(null)

    const handleLike = () => {
        if(status === 'like') {
            setStatus(null);
            dispatch({ type: 'like', payload: -1 });
        } else {
            if(status === 'dislike') {
                dispatch({ type: 'dislike', payload: -1 });
            }
            setStatus('like');
            dispatch({ type: 'like', payload: 1 });
        }
        
    };

    const handleDislike = () => {
        if(status === 'dislike') {
            setStatus(null);
            dispatch({ type: 'dislike', payload: -1 });
        } else {
            if(status === 'like') {
                dispatch({ type: 'like', payload: -1 });
            }
            setStatus('dislike');
            dispatch({ type: 'dislike', payload: 1 });
        }
    };

    return (
        <div>
            <button onClick={handleLike}>
                <span>{state.likes}</span>
            </button>
            <button onClick={handleDislike}>
                <span>{state.dislikes}</span>
            </button>
        </div>
    );
}

export default LikeDislike;