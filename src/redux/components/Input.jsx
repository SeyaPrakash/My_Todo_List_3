import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../modules/posts';
import { PostBox,InputBox,InputLabel,Inputs,PostBoxButton } from '../../styles/styles';

const Input = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputContent = (event) => {
    setContent(event.target.value);
  };

  const dispatch = useDispatch();
  
  return(
    <PostBox>
        <InputBox>
          <InputLabel>Title</InputLabel>
          <Inputs name='title' value={title} onChange={inputTitle} />
          <InputLabel>Content</InputLabel>
          <Inputs name='content' value={content} onChange={inputContent} />
        </InputBox>
        <PostBoxButton
          onClick={() => {
            dispatch(addPost(title, setTitle, content, setContent));
          }}
        >
          Add
        </PostBoxButton>
      </PostBox>
  );
};

export default Input;