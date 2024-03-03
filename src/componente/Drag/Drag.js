import React, { useContext, useRef } from 'react';
import './Drag.css'; // Import CSS for styling
import { UserContext } from '../../App';
import { handleLogout } from '../Login/loginManager';

const Drag = () => {
  const myDivRef = useRef(null);
  
  const [   loginInfo,setLoginInfo,users,setUsers,userKey,setUserKey]= useContext(UserContext);



  const logOut = () => {
    handleLogout()
    .then( res => {
      setUsers(res)
      setLoginInfo(res)
    } )
  }

  const dragElement = (elmnt) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  React.useEffect(() => {
    dragElement(myDivRef.current);
  }, []); // Run only once on component mount

  return (
    <div id="mydiv" className="draggable-div card user-cards" ref={myDivRef}>
      <div id="mydivheader" className="draggable-div-header">
      <div className='card' style={{width:" 18rem"}}>   
    <div className="card-body">
    <h5 className="card-title">{loginInfo.name}</h5>
    <p className="card-text">{loginInfo.email}</p>
    <button className="btn btn-danger" onClick={() => logOut()}>Logout</button>
  </div>


      </div>
      
    </div>
    </div>
  );
}

export default Drag;
