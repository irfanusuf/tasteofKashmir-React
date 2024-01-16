import { useNavigate } from "react-router-dom";

const IsAuthenticated = async() => {
    const navigate = useNavigate();
  
    const token = await localStorage.getItem("token");
  
    if (!token) {
      navigate("/login");
    }
  };
  
  export default IsAuthenticated;

  






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

