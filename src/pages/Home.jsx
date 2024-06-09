import Input from '../redux/components/Input';
import TodoList from '../redux/components/TodoList';

function Home() {

  return (
    <div>
      {/* Add a post */}
      <Input />
      {/* working, done post */}
      <TodoList/>
    </div>
  );
}

export default Home;
