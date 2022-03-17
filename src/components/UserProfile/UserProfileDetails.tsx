import React from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

// class ProfilePage extends React.Component {
//   state = {
//     profiledata: null,
//   }

//   componentDidMount() {
//     const db = getFirestore()
//     const userRef = collection(db, 'users')

//     getDocs(userRef).then((snapshot) => {
//       const profiledata = []
//       snapshot.forEach(function (doc) {
//         const data = doc.data()
//         profiledata.push(data)
//       })
//       this.setState({ profiledata: profiledata })
//     })
//   }

//   render() {
//     return (
//       <div className="profile">
//         <h1>User</h1>
//         {this.state.profiledata &&
//           this.state.profiledata.map((profiledata) => {
//             return (
//               <div key={profiledata.uid}>
//                 <p>First Name : {String(profiledata.displayName)}</p>
//               </div>
//             )
//           })}
//       </div>
//     )
//   }
// }

// export default ProfilePage
