import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">HopeWayTeam</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li><span>dashbord</span></li>
          <li><span>dashbord</span></li>
          <li><span>dashbord</span></li>
          <li><span>dashbord</span></li>
        </ul>
      </div>
      <div className="botttom">color options</div>
    </div>
  );
};

export default Sidebar;
