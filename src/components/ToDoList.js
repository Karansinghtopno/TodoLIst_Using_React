import React, { useState, useEffect } from "react";
import todo from "../images/todo-1.jpg";
import "./ToDoList.css";
// import {FaHandPeace} from 'react-icons/fa'

const getListFromLocal=()=>{
  let list =localStorage.getItem("todolist");
  // console.log(list);
  if(list){
    return  JSON.parse( localStorage.getItem("todolist"));
  }
  else return [];
} 

const ToDoList = () => {
  //state for input data
  const [inputData, setInputData] = useState("");

  //state for storing data
  const [items, setItems] = useState(getListFromLocal());

  //function for adding the items to an empty array
  const addItem = () => {
    if (!inputData) return;
    const listObject={ id:new Date().getTime().toString(), list:inputData}
    setItems([...items, listObject]);
    setInputData("");
    // console.log(listObject);
  };

  //deleting an item in an item list
  const deleteItem = (index) => {
    console.log("removing from index: ", index);
    const updatedItems = items.filter((element) => {
      return index !== element.id;
    });
    setItems(updatedItems);
  };

  //removing all the items at once
  const removeAll = () => {
    setItems([]);
  };

  //add data to local storage
   //local storege always store in key, value pair
    // keys & value is always in string format
  useEffect(() => {
   
    localStorage.setItem("todolist", JSON.stringify(items))
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img className="image" src={todo} alt="todo logo" />
            <figcaption>
              {" "}
              Add Your List Here{" "}
              <span>
                <i class="fa-solid fa-pen-clip"></i>
              </span>
            </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i
              title="Add Item"
              class="fa-solid fa-plus icon"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItems">
            {items.map((element) => {
              return (
                <div className="eachItem" key={element.id}>
                  <h3>{element.list}</h3>
                  <i
                    title="Delete Item"
                    class="fa-solid fa-trash-can"
                    onClick={() => deleteItem(element.id)}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="button-div">
            <button onClick={removeAll}> Remove All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
