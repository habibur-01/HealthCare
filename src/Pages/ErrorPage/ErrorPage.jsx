import errorPic from "../../assets/error.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-100vh w-full">
      <div>
        <img src={errorPic} alt="" />
      </div>
      <div>
        <h1 className="text-5xl">404</h1>
        <p className="text-xl">Oops! The page you$#39 re looking for can$#39 t be found.</p>
        <p className="my-5">
          <a href="/">Go back to the homepage</a>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage; 
