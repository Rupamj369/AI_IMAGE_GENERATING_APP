import mongoose from "mongoose";
const connetDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};
export default connetDB;
