import React from "react";
import { useState} from "react";
import todo from "../images/to-do-list.svg"

function ToDoList() {
  const [inputData,setInputData]= useState("");
  const [items,setItems]=useState([]);


  //Add Item
  const addItem = () => {
    if(!inputData){

    }else{
      setItems([...items,inputData]);
      setInputData("");
    }
    
  }
  //Delete Item
  //id of an element of the list that is array
  const deleteItem=(id)=>{
    console.log(id);

    const updatedItems = items.filter((element,index)=>{
      console.log(element);
      return index !== id;
    })
    // console.log(updatedItems);
    setItems(updatedItems);
    console.log(items);

  };
  const removeAll=()=>{
    setItems([]);
  }



  return <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todo_logo" />
            <figcaption>Add Your Text Here 👇👇</figcaption>
          </figure>

          <div className="addItems">
            <input type="text" placeholder=' ✍️ Add Items.... '
            value={inputData}
            onChange={(e)=> setInputData(e.target.value)}
            />
            <i className=" fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
            
          </div>

          <div className="showItems">
            {
              items.map((element,ind)=>{
                return(
                  <div className="eachItem" key={ind}>
                  <h3>{element}</h3>
                  <i className="fa fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(ind)} ></i>
                  </div>

                );
              })
            }

            
            
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll} ><span>CHECK LIST</span> </button>
          </div>
          
        </div>
      </div>
  </>;
}

export default ToDoList;
