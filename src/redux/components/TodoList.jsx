import { useSelector } from "react-redux";
import { How, PostBoxLayout } from "../../styles/styles";
import WorkingPoster from "./WorkingPoster";
import DonePoster from "./DonePoster";

const TodoList = () => {
  const posts = useSelector((state) => {
    return state.posts;
  });

  return (
    <main style={{ padding: "0 24px" }}>
      <How>Working..🔥</How>
      <PostBoxLayout>
        {posts
          .filter((item) => {
            return item.isDone === false;
          })
          .map(function (item) {
            return <WorkingPoster key={item.id} item={item} />;
          })}
      </PostBoxLayout>

      <How>Done..!🎉</How>
      <PostBoxLayout>
        {posts
          .filter((item) => {
            return item.isDone === true;
          })
          .map(function (item) {
            return <DonePoster key={item.id} item={item} />;
          })}
      </PostBoxLayout>
    </main>
  );
};

export default TodoList;
