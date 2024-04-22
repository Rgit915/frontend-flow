import React from "react";
import tasksData from "../data/tasksData";
import Button from "../components/Button";

const Home = () => {
  return (
    <main>
      <div className="grid grid-cols-2 gap-10 p-5 min-[400px]:grid-cols-3">
        {tasksData.map((task) => (
          <div
            key={task.id}
            className="w-full h-full aspect-video shadow-[0_0_10px_indigo] relative rounded-xl"
          >
            {/* <span className="absolute p-2 bg-indigo-950 text-white rounded-br-lg">
            <p>Task# {task.id}</p>
            </span> */}
            <img
              className="bg-cover rounded-xl hover:scale-105 transition-transform duration-700 ease-in-out"
              src={task.image}
              alt={`PC Icon ${task.id}`}
            />
            <div className="overlay rounded-b-xl space-y-2 font-mono">
              <ul className="list-none flex space-x-2  ">
                {/* Using map to render list items */}
                {task.description.map((item, index) => (
                  <li key={index} className=" text-slate-200 font-bold  px-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-2">
                <Button to={task.liveLink} value={"Live Demo"}/>
                <p>|</p>
                <Button to={task.codeRepo} value={"Code Repo"}/>
                <p>|</p>
                <Button to={task.watchHere} value={"Watch here"}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
