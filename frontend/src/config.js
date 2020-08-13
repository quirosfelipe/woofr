export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://woofr-app.herokuapp.com";
