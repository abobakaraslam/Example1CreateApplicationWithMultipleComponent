import React from "react";

function App() {
  return (
    <div>
      {/* container 1: header */}
      <div className="text-center m-6">
        <h1>Web Development Course</h1>
        <p>
          In this course, you will learn about React, Next, Nest, Express and
          mongoDB
        </p>
      </div>
      {/* container 2: header */}
      <div className="text-center m-6">
        <h1>Nav Bar</h1>
        <p>This is navbar container</p>
      </div>
      {/* container 3: Home Page */}
      <div className="text-center m-6">
        <h1>Home page</h1>
        <p>This is home page container</p>
      </div>
      {/* container 4: Registration */}
      <div className="text-center m-6">
        <h1>Registration</h1>
        <p>This is Registration container</p>
      </div>
      {/* container 5: Login */}
      <div className="text-center m-6">
        <h1>Login</h1>
        <p>This is Login container</p>
      </div>
      {/* container 6: Diary */}
      <div className="text-center m-6">
        <h1>Diary</h1>
        <p>This is Diary container</p>
      </div>
    </div>
  );
}

export default App;
