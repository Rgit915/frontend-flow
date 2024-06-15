import tasksData from "../data/tasksData";
import Button from "../components/Button";

const Projects = () => {
  return (
    <main>
      <div className="grid grid-cols-1 gap-10 p-5 min-[400px] md:grid-cols-2 lg:grid-cols-3">
        {tasksData.map((task) => (
          <div
            key={task.id}
            className="w-full h-full aspect-video shadow-[0_0_10px_indigo] relative rounded-xl"
          >
            {/* <span className="absolute p-2 bg-indigo-950 text-white rounded-br-lg">
            <p>Task# {task.id}</p>
            </span> */}
            <img
              className="w-full h-full  rounded-xl hover:scale-75 transition-transform duration-700 ease-in-out object-cover object-left-top"
              src={task.image}
              alt={`PC Icon ${task.id}`}
            />
            {/* <div className="hidden">
              <div className="flex space-x-2 absolute px-2 py-4 text-nowrap">
                <Button to={task.liveLink} value={"Live"} />

                <Button to={task.codeRepo} value={"Code"} />

                <Button to={task.watchHere} value={"Watch here"} />
              </div>
            </div> */}
            <div className="overlay  rounded-b-xl space-y-2 font-mono ">
            <p className=" font-black text-[16px]  lg:text-[18px]">{task.title}</p>
              <ul className="list-none flex space-x-2  ">

                {/* Using map to render list items */}
                {task.tools.map((item, index) => (
                  <li key={index} className=" text-slate-200 font-bold text-sm px-2">
                    #{item}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center items-center space-x-2 text-nowrap">
                <Button to={task.liveLink} value={"Live"} />

                <Button to={task.codeRepo} value={"Code Repo"} />

                <Button to={task.watchHere} value={"Watch here"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
