export {}
// import React, { Fragment, useState } from "react";
// import { Box, Button } from "@material-ui/core";
// import { Treatment } from "../Treatment/Treatment";
// import { useFetchData } from "../../hooks/useFetchData/useFetchData";

// export const Treatments = (): JSX.Element => {
//   const [showDental, setShowDental] = useState<boolean>(true);
//   const [showEyeCare, setShowEyeCare] = useState<boolean>(true);
//   const { dentistData, eyeCareData } = useFetchData();

//   const toggleDental = (): void => {
//     if (showDental) {
//       setShowDental(showDental);
//       setShowEyeCare(!showEyeCare);
//     }
//   };

//   const toggleEyeCare = (): void => {
//     if (!showEyeCare) {
//       setShowEyeCare(showEyeCare);
//       setShowDental(!showDental);
//     }
//     //this needs to be improved
//   };

//   return (
//     <Fragment>
//       <Button onClick={toggleDental}>Dentist</Button>
//       <Button onClick={toggleEyeCare}>Eye Care</Button>
//       <Box display="flex" flexWrap="wrap" justifyContent="space-around" m={2}>
//         {showDental &&
//           dentistData?.map(
//             ({ name, price, location, category, id, treatment_id }) => {
//               return (
//                 <Treatment
//                   key={id}
//                   name={name}
//                   price={price}
//                   location={location}
//                   category={category}
//                   treatment_id={treatment_id}
//                 />
//               );
//             }
//           )}
//         {showEyeCare &&
//           eyeCareData?.map(
//             ({ name, price, location, category, treatment_id, id }) => {
//               return (
//                 <Treatment
//                   key={id}
//                   name={name}
//                   price={price}
//                   location={location}
//                   category={category}
//                   treatment_id={treatment_id}
//                 />
//               );
//             }
//           )}
//       </Box>
//     </Fragment>
//   );
// };
