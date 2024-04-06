import React from 'react';
import tasksData from '../data/tasksData';

const Home = () => {
  return (
    <main>
      <div className="grid grid-cols-2 gap-10 p-5 min-[400px]:grid-cols-3">
        {tasksData.map((task) => (
          <div key={task.id} className="w-full aspect-video shadow-[0_0_10px_indigo] relative">
            <span className="absolute p-2 bg-indigo-950 text-white rounded-br-lg">
            <p>Task# {task.id}</p>
            </span>
            <img src={task.image} alt={`PC Icon ${task.id}`}  />
            <p>{task.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
