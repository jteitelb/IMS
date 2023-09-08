import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="dashboard">
        <div className="w-full h-64 bg-slate-900 flex justify-center items-center text-slate-300 text-xl">
          <div>Dashboard</div>
        </div>
      </Link>
      <div className="flex items-center justify-center w-screen h-screen">
        Home
      </div>
    </div>
  );
};

export default Home;
