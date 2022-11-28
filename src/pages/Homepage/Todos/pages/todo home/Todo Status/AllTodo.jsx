import React from 'react';
import PerTodo from '../../../compontns/PerTodo';

const AllTodo = ({ taskData, TaskStatus }) => {
  return (
    <div>
      {taskData.length === 0 && (
        <p className="md:text-2xl text-slate-800 my-4 text-xl font-bold text-center">
          No task exist
        </p>
      )}
      <div className="md:grid-cols-2 xl:grid-cols-3 grid grid-cols-2 gap-2 py-2">
        {taskData.map((value, index) => {
          return <PerTodo todoBG={'blue'} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AllTodo;
