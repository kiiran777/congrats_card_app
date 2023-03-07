const element = (
  // Write your code here.
  <div className="bg-container">
    <div className="container">
      <h1 className="heading">Congratulation</h1>
      <div className="card">
        <div className="card-container">
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
          <h1>Kiran V</h1>
          <p>
            Vishnu institute of computer education and technology,Bhimavaram
          </p>
          <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
