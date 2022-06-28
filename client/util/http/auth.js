import Axios from "axios";

export function login({ loginData }) {
  Axios.post("http://localhost:3000/auth/login", {
    email: loginData.email,
    password: loginData.password,
  })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

// export function signUpAsSeller({ userData }) {
//   Axios.put("http://localhost:3000/auth/signup", {
//     email: userData.email,
//     userName: userData.userName,
//     fName: userData.fName,
//     lName: userData.lName,
//     password: userData.password,
//     phoneNumber: userData.phoneNumber,
//     role: "s",
//     location: "test",
//     address: "test"
//   })
//     .then((response) => {
//       const data = response.data;
//       dispatch(isAuthActions.setAuth({ data: data }));
//       navigation.navigate("StoreCreateScreen");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// export function signUpAsCustomer({ userData }) {
//   Axios.put("http://localhost:3000/auth/signup", {
//     email: userData.email,
//     userName: userData.userName,
//     fName: userData.fName,
//     lName: userData.lName,
//     password: userData.password,
//     phoneNumber: userData.phoneNumber,
//     role: "c",
//     location: "test",
//     address: "test"
//   })
//     .then((response) => {
//       const data = response.data;
//       dispatch(isAuthActions.setAuth({ data: data }));
//       navigation.navigate("HomeScrenn");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
