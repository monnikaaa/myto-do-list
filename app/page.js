"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const [completed, setcompleted] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    setdesc("");
    settitle("");
  };


  const deleteHandler = (i) =>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }


  const completeHandler = (i) =>{
    let copytask = [...maintask]
    let completedtask  = copytask.splice(i,1)
    setcompleted([...completed,completedtask])
    setmaintask(copytask)
  }


  let renderTask = <h2>No task Available</h2>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button className="bg-red-400 text-white rounded font-bold px-4 py-2"
            onClick={()=>{deleteHandler()}}
          >
            Delete
          </button>
          <button className="bg-green-400 text-white rounded font-bold px-4 py-2"
            onClick={()=>{completeHandler()}}
          >
            Completed
          </button>
        </li>
      );
    });
  }



  return (
    <>
      <h1 className="bg-purple-950 text-purple-100 p-5 text-5xl font-bold text-center">
        Monika's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-1xl rounded m-5 border-2 border-zinc-800 px-4 py-2"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-1xl rounded m-5 border-2 border-zinc-800 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black  text-purple-100  px-4 py-3 text-1xl font-bold rounded m-5">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-purple-200  text-black-600">
        <ul>{renderTask}</ul>
      </div>
      {/* <div className="mt-9 p-8 bg-slate-900">
          <ul>{rendercompleted}</ul>
      </div> */}
    </>
  );
};

export default page;
