const ADD_POST = "posts/ADD_POST";
const DONE = "posts/DONE"
const NOT_YET = "posts/NOT_YET"
const DELETE_POST = "post/DELETE_POST"

export const addPost = (title, setTitle, content, setContent) => {
	return{
		type: ADD_POST,
		title,
		setTitle,
		content,
		setContent,
	};
}

export const done = (id) => {
	return{
		type: DONE,
		id,
	}
}

export const not_yet = (id) => {
	return{
		type: NOT_YET,
		id,
	}
}

export const delete_post = (id) => {
	return{
		type: DELETE_POST,
		id,
	}
}

const initialState = [
	{
		id: 1,
		title: "React",
		content: "Let's learn React basics!",
		isDone: false
	}
];

const posts = (state=initialState, action={}) => {
  switch(action.type) {
		case ADD_POST:{
			const newPost = {
				id: state.length===0 ? 1 : state.at(-1).id + 1,
				title: action.title,
				content: action.content,
				isDone: false,
			};
			const new_post = [...state,newPost];
			action.setTitle('');
			action.setContent('');
			return new_post;
		}
		case DELETE_POST:
			const newPost = state.filter((post) => post.id !== action.id);
			return newPost;
		case DONE:
			const changeIsDone = state.map((post) => {
				if (post.id === action.id) {
					return {
						id: action.id,
						title: post.title,
						content: post.content,
						isDone: true,
					};
				} else {
					return post;
				}
			});
			return changeIsDone;
		case NOT_YET:
			const notDonePost = state.map((post) => {
				if (post.id === action.id) {
					return {
						id: post.id,
						title: post.title,
						content: post.content,
						isDone: false,
					};
				} else {
					return post;
				}
			});
			return notDonePost;
    default:
      return state;
  }
} 

export default posts;