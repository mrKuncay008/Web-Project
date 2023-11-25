import Icon from "./menu.png";

const Main = () => {
  return (
    <div className="wrapper">
          <h1>TO-DO APP</h1>
        <div className="task-input">
          <img src={Icon} alt="icon" />
          <input type="text" placeholder="Add a new task" />
        </div>
        <div className="controls">
          <div className="filters">
            <span className="active" id="all">All Tasks</span>
            <span id="pending">Tersisa</span>
            <span id="completed">Selsai</span>
          </div>
      </div>
      <ul className="task-box" />
          <button className="clear-btn">Clear all</button>
    </div>
  )
}
export default Main