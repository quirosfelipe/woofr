export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://woofrapp.herokuapp.com/api";
