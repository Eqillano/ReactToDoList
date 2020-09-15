import React, { useState, useEffect } from "react";
import { collatedTasks } from "../constants";
import { useTasks } from "../hooks";
import { Checkbox } from "./Checkbox";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import { useProjectValue, useSelectedProjectValue } from "../context";
import { AddTask } from "./AddTask";

function Tasks() {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = "";

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject);
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      <AddTask />
    </div>
  );
}

export default Tasks;
