import { Link } from "react-router-dom";
import RemoveButton from "./RemoveButton";
import { useDispatch } from "react-redux";
import { done } from '../modules/posts';
import { PostedBox,PostedBoxOfBox,Btn,DoneBtn,PostTitle,PostContent } from '../../styles/styles';

const WorkingPoster = ({ item}) => {

  const dispatch = useDispatch();

  return (
    <PostedBox>
      <PostedBoxOfBox>
        <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
          <div>
            Details
          </div>
        </Link>
        
        <PostTitle>{item.title}</PostTitle>
        <PostContent>{item.content}</PostContent>
      </PostedBoxOfBox>
      <Btn key={item.id}>
        <RemoveButton item={item} />
        <DoneBtn onClick={() => dispatch(done(item.id))}>Done</DoneBtn>
      </Btn>
    </PostedBox>
  );
};

export default WorkingPoster;
