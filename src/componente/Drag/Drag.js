import React, { useContext, useRef } from 'react';
import './Drag.css'; // Import CSS for styling
import { UserContext } from '../../App';
import { handleLogout } from '../Login/loginManager';

const Drag = () => {
  const myDivRef = useRef(null);
  const [loginInfo, setLoginInfo, users, setUsers, userKey, setUserKey] = useContext(UserContext);

  const logOut = () => {
   
    handleLogout().then(res => {
      setUsers(res);
      setLoginInfo(res);
    });
  };

  const dragElement = elmnt => {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + 'header')) {
      document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
      document.getElementById(elmnt.id + 'header').ontouchstart = dragMouseDown; // for touch devices
    } else {
      elmnt.onmousedown = dragMouseDown;
      elmnt.ontouchstart = dragMouseDown; // for touch devices
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      pos4 = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
      document.onmouseup = closeDragElement;
      document.ontouchend = closeDragElement; // for touch devices
      document.onmousemove = elementDrag;
      document.ontouchmove = elementDrag; // for touch devices
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - (e.type === 'touchmove' ? e.touches[0].clientX : e.clientX);
      pos2 = pos4 - (e.type === 'touchmove' ? e.touches[0].clientY : e.clientY);
      pos3 = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      pos4 = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
      elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.ontouchend = null; // for touch devices
      document.onmousemove = null;
      document.ontouchmove = null; // for touch devices
    }
  };

  React.useEffect(() => {
    dragElement(myDivRef.current);
  }, []); // Run only once on component mount

  return (
    <div id="mydiv" className="draggable-div card user-cards drag-height-width" ref={myDivRef}>
      <div id="mydivheader" className="draggable-div-header">
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">{loginInfo.name}</h5>
            <p className="card-text">{loginInfo.email}</p>
            <button className="btn btn-danger logOut-btn" onTouchStart={() => logOut()} onClick={() => logOut()}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drag;
