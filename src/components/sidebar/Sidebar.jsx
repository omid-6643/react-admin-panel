import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">HopeWayTeam</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon />
            <span>dashbord</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <AddBusinessIcon />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <li>
            <InsertChartIcon />
            <span>stats</span>
          </li>
          <li>
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="botttom">color options</div>
    </div>
  );
};

export default Sidebar;
