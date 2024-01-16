
// import jwt from "jsonwebtoken";

// const tokenPresent = localStorage.getItem("token");

// const isTokenExpired = (token) => {
//   try {
//     const decodedToken = jwt.decode(token);
//     if (!decodedToken || !decodedToken.exp) {
//       return true; 
//     }
//     return Date.now() >= decodedToken.exp * 1000;

//   } catch (error) {
//     console.error("Error decoding token:", error);
//     return true; 
//   }
// };

// const isAuthenticated = tokenPresent && !isTokenExpired(tokenPresent);

// export default isAuthenticated;

const IsAuthenticated = localStorage.getItem('token') 

console.log(IsAuthenticated)

  

export default IsAuthenticated;

