// import React from "react";
// import { useState, useEffect } from "react";
// import { fetch_getUsersNames } from "../../fetchRequests.js";
// import {
//   Accordion,
//   Button,
//   Card,
//   OverlayTrigger,
//   Tooltip,
// } from "react-bootstrap";

// import { DashCircle } from "react-bootstrap-icons";

// function Friends(props) {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch_getUsersNames().then((data) => {
//       setUsers(data.users);
//     });
//   }, []);

//   return (
//     <Accordion>
//       <Card>
//         <Card.Header>
//           <Accordion.Toggle as={Button} variant="link" eventKey="0">
//             Friends
//           </Accordion.Toggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="0">
//           <Card.Body>
//             {users.map((user) => {
//               return (
//                 <>
//                   <p className="AllUserNames_FlexBox">
//                     {user.username}
//                     <OverlayTrigger
//                       key={"left"}
//                       placement={"left"}
//                       overlay={
//                         <Tooltip id={`tooltip-left`}>
//                           <strong>Remove Friend</strong>
//                         </Tooltip>
//                       }
//                     >
//                       <DashCircle />
//                     </OverlayTrigger>{" "}
//                   </p>
//                 </>
//               );
//             })}
//           </Card.Body>
//         </Accordion.Collapse>
//       </Card>
//     </Accordion>
//   );
// }

// export default Friends;
