import React, { useEffect, useState } from "react";
import { InputField } from "../../interface/toList";

const CompletedListItem: React.FC = () => {
  const [inputFields, setInputFields] = useState<InputField[]>([]);

  useEffect(() => {
    const storedCompletedTask = JSON.parse(
      localStorage.getItem("completedTask") as string
    );
    if (storedCompletedTask) {
      setInputFields(storedCompletedTask);
    }
    // else {
    //   setInputFields([{ value: "" }]);
    // }
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

    localStorage.setItem("completedTask", JSON.stringify(values));
    setInputFields(values);
    handleAddField();
  };

  const handleRemoveField = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);

    localStorage.setItem("completedTask", JSON.stringify(values));
  };

  const handleComplete = (index: number, isChecked: boolean) => {
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
      <div>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            {inputField.value ? (
              <input
                title="checkbox"
                type="checkbox"
                checked
                onChange={(event) =>
                  handleComplete(index, event.target.checked)
                }
              />
            ) : (
              <>+</>
            )}

            <input
              title="input"
              type="text"
              value={inputField.value}
              onChange={(event) => handleChange(index, event)}
            />
            {inputField.value && (
              <>
                <button onClick={() => handleRemoveField(index)}>Remove</button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CompletedListItem;
