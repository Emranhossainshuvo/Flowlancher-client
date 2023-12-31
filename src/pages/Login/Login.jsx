import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { ImGithub } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Helmet } from "react-helmet";

const Login = () => {

  const { logIn, googleLogin, githubLogin, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loginUserWithGoogle = () => {
    googleLogin()
      .then(res => {
        const user = res.user;
        // console.log(user)
        navigate(location?.state ? location?.state : '/')
        // console.log(res)
      })
      .catch(error => {
        // console.log(error)
      })
  }

  const createUserWithGithub = () => {
    githubLogin()
      .then(res => {
        const user = res.user;
        // console.log(user)
        navigate(location?.state ? location?.state : '/')
      })
      .catch(err => {
        // console.log(err)
      })
  }

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(res => {
        const user = res.user;
        // console.log(user)
        Swal.fire({
          icon: 'success',
          text: 'Successfully logged in!',
        });
        navigate(location?.state ? location?.state : '/')
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <Helmet><title>FlowLancher | Login</title></Helmet>
      <div className="pb-20 text-white" style={{backgroundImage: 'url(https://i.ibb.co/xMtsGzH/31999405-2208-w018-n002-1174b-p15-1174.jpg)'}}>
        <Navbar></Navbar>
        <section className=" md:m-5 min-h-screen flex box-border justify-center items-center">
          <div className="bg-[#6d6f6e] rounded-2xl flex max-w-5xl p-5 items-center">
            <div className="md:w-1/2 px-8">
              <h2 className="font-bold text-3xl text-white">Login</h2>
              <p className=" mt-4 text-lg font-semibold text-white">
                If you already a member, easily log in now.
              </p>

              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                  className="p-2 text-black mt-8 rounded-xl border"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <div className="relative">
                  <input
                    className="p-2 text-black rounded-xl border w-full"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    id="togglePassword"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                    id="mama"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                  </svg>
                </div>
                <button
                  className="bg-[#363062] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#435585] font-medium"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <div className="mt-10 grid  items-center text-gray-500 or-grid">
                <hr className="border-[#363062]" />
                <p className="text-center text-lg font-semibold text-white">OR</p>
                <hr className="border-[#363062]" />
              </div>
              <button onClick={loginUserWithGoogle} className="bg-white text-black text-lg font-semibold border py-2 w-full rounded-xl mt-5 flex justify-center items-center  hover:scale-105 duration-300 hover:bg-[#60a8bc4f] ">
                <svg
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="25px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Continue with Google
              </button>

              <button onClick={createUserWithGithub} className="bg-white border py-2 w-full text-lg rounded-xl mt-2 gap-3 flex justify-center items-center font-semibold hover:scale-105 duration-300 hover:bg-[#60a8bc4f] text-black">
                <ImGithub />
                Continue with Github
              </button>

              <div className="mt-4 text-sm flex justify-between items-center container-mr">
                <p className="mr-3 text-md font-semibold md:mr-0 ">If you do not have an account..</p>
                <Link to='/register'>
                  <button className="hover:border register text-white bg-[#363062] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#435585] font-semibold duration-300">
                    Register
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:block hidden w-1/2">
              <img
                className="rounded-2xl bg-[#dfa674] max-h-[1300px]"
                src="https://i.ibb.co/x5b0Khx/businesspeople-standing-city-street-shaking-hands.jpg"
              />
            </div>
          </div>
        </section>
      </div>
        <Footer></Footer>
    </>
  );
};

export default Login;
