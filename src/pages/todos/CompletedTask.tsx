import React, { useEffect, useState } from "react";
import { InputField } from "../../interface/toList";
import "./CompletedTask.scss";

const CompletedTask: React.FC = () => {
  const [inputFields, setInputFields] = useState<InputField[]>([]);

  useEffect(() => {
    const storedCompletedTask = JSON.parse(
      localStorage.getItem("completedTask") as string
    );
    if (storedCompletedTask) {
      setInputFields(storedCompletedTask);
    }
  }, []);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...inputFields];
    values[index].value = event.target.value;

    localStorage.setItem("completedTask", JSON.stringify(values));
    setInputFields(values);
  };

  const handleRemoveTask = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);

    localStorage.setItem("completedTask", JSON.stringify(values));
  };

  const handleCompleteTask = (index: number, isChecked: boolean) => {
    const values = [...inputFields];

    if (!isChecked) {
      let taskList = [];

      const newTaskList = JSON.parse(
        localStorage.getItem("taskList") as string
      );

      if (newTaskList) {
        taskList = newTaskList;
      }
      if (newTaskList[newTaskList.length - 1].value === "") {
        taskList.splice(newTaskList.length - 1, 0, values[index]);
      } else {
        taskList.push(values[index]);
      }

      localStorage.setItem("taskList", JSON.stringify(newTaskList));
      values.splice(index, 1);
      setInputFields(values);
      localStorage.setItem("completedTask", JSON.stringify(values));
    }
  };
  return (
    <>
      <div className="completed_task_section">
        {inputFields.map((item, index) => (
          <div key={index} className="completed_task_item">
            {item.value ? (
              <input
                title="checkbox"
                type="checkbox"
                checked
                onChange={(event) =>
                  handleCompleteTask(index, event.target.checked)
                }
              />
            ) : (
              <>+</>
            )}

            <input
              title="input"
              type="text"
              placeholder="Add task"
              value={item.value}
              onChange={(event) => handleChange(index, event)}
            />
            {item.value && (
              <>
                <button onClick={() => handleRemoveTask(index)}>Remove</button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CompletedTask;
