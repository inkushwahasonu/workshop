import React, { useEffect, useState } from "react";
import { InputField } from "../../interface/toList";

import "./TaskListItem.scss";

const TaskListItem: React.FC = () => {
  const [inputFields, setInputFields] = useState<InputField[]>([]);

  useEffect(() => {
    const storedTaskList = JSON.parse(
      localStorage.getItem("taskList") as string
    );
    if (storedTaskList) {
      setInputFields(storedTaskList);
    } else {
      setInputFields([{ value: "" }]);
    }
  }, []);

  const handleAddField = () => {
    if (inputFields[inputFields.length - 1].value.trim() !== "") {
      setInputFields([...inputFields, { value: "" }]);
    }
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
    localStorage.setItem("taskList", JSON.stringify(values));
    handleAddField();
  };

  const handleRemoveField = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);

    localStorage.setItem("taskList", JSON.stringify(values));
  };

  const handleComplete = (index: number, isChecked: boolean) => {
    const values = [...inputFields];

    if (isChecked) {
      console.log(values[index]);

      let completedList = [];

      const newCompletedList = JSON.parse(
        localStorage.getItem("completedTask") as string
      );

      if (newCompletedList) {
        completedList = newCompletedList;
      }

      completedList.push(values[index]);
      localStorage.setItem("completedTask", JSON.stringify(completedList));
      values.splice(index, 1);
      setInputFields(values);
      localStorage.setItem("taskList", JSON.stringify(values));
    }
  };
  return (
    <>
      <div className="task_list_section">
        {inputFields.map((inputField, index) => (
          <div key={index} className="task_list_item">
            {inputField.value ? (
              <input
                title="checkbox"
                type="checkbox"
                className="checkbox"
                onChange={(event) =>
                  handleComplete(index, event.target.checked)
                }
              />
            ) : (
              <>+</>
            )}

            <input
              className="task_input"
              title="input"
              type="text"
              placeholder="Add new task"
              value={inputField.value}
              onChange={(event) => handleChange(index, event)}
            />
            {inputField.value && (
              <>
                <button
                  className="remove_button"
                  onClick={() => handleRemoveField(index)}
                >
                  Remove
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskListItem;
