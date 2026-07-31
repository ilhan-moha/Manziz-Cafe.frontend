import { FaUserCircle } from "react-icons/fa";
import "../../styles/topbar.css";

function Topbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="topbar">

     

      <div className="topbar-right">

       

        <div className="user-profile">
          <FaUserCircle className="profile-icon" />

          <div>
            <h4>
              {user
                ? `${user.first_name} ${user.last_name}`
                : "Guest"}
            </h4>

            <p>
              {user ? user.email : "Not logged in"}
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;