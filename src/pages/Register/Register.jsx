import { useContext } from "react";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Helmet } from "react-helmet";

const Register = () => {

  const { createUser, googleLogin, githubLogin } = useContext(AuthContext);


  const createUserWithGithub = () => {
    githubLogin()
      .then(res => {
        const user = res.user;
        // console.log(user)
      })
      .catch(err => {
        // console.log(err)
      })
  }

  const createUserWithGoogle = () => {
    googleLogin()
      .then(res => {
        const user = res.user;
        // console.log(user)
      })
      .catch(err => {
        // console.log(err)
      })
  }

  const handleCreateUser = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;

    // condition for checking password and confirm password are the same

    // if(password.length < 6){
    //   return Swal.fire({
    //     icon: 'error',
    //     title: '',
    //     text: 'Password must contain at least 6 characters!',
    //   });
    // }

    // if (!password.includes(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
    //   return alert('hiiiiiiiiii')
    // }

    // if (password.search(/[a-z]/) < 0) {
    //     return Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Password must contain one smaller letter!',
    //     });
    // }
    // if (password.search(/[A-Z]/) < 0) {
    //     return Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Password must contain one capital letter!',
    //     });
    // }
    // if (password.search(/[1-9]/) < 0) {
    //     return Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Password must contain one digit!',
    //     });
    // }

    if (password !== confirm) {
      return Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Password did not match!',
      });
    }

    createUser(email, password)
      .then(res => {
        // const user = res.user;
        // console.log(user)
        Swal.fire({
          icon: 'success',
          text: 'Successfully registered!',
        });
      })
      .catch(error => {
        console.error(error)
      })
  }


  return (
    <>
      <div style={{backgroundImage: 'url(https://i.ibb.co/xMtsGzH/31999405-2208-w018-n002-1174b-p15-1174.jpg)'}}>
        <Navbar></Navbar>
        <section className=" pb-16 min-h-screen flex box-border justify-center items-center">
          <div className="bg-[#6d6f6e] rounded-2xl flex max-w-5xl p-5 items-center">
            <div className="md:w-1/2 px-8">
              <h2 className="font-bold text-3xl text-white">Register</h2>
              <p className="text-sm mt-4 text-white">
                Haven't register yet, register now!!
              </p>
              <Helmet><title>FlowLancher | Register</title></Helmet>
              <form onSubmit={handleCreateUser} action="" className="flex flex-col gap-4">
                <div className="flex gap-6">
                  <input
                    className="p-2 mt-8 rounded-xl border w-full"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    className="p-2 mt-8 rounded-xl border"
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="flex gap-6">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    required
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    name="confirm"
                    required
                    id="confirm"
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="relative">
                  <input
                    className="ps-2 py-2  rounded-xl border w-full"
                    type="text"
                    name="photo"
                    id="photo"
                    required
                    placeholder="Photo URL"
                  />



                </div>
                <button
                  className="bg-[#363062] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#002c7424] font-medium"
                  type="submit"
                >
                  Register
                </button>
              </form>
              <div className="mt-10 grid  items-center text-gray-500 or-grid">
                <hr className="border-[#363062]" />
                <p className="text-center text-lg font-semibold text-white">OR</p>
                <hr className="border-[#363062]" />
              </div>
              <button onClick={createUserWithGoogle} className="bg-white  border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-lg hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-semibold">
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
              <button onClick={createUserWithGithub} className="bg-white border py-2 w-full rounded-xl mt-2 gap-3 flex justify-center items-center  hover:scale-105 font-semibold text-lg duration-300 hover:bg-[#60a8bc4f] ">
                <ImGithub />
                Continue with Github
              </button>

              <div className="mt-4 text-sm flex justify-between items-center container-mr">
                <p className="mr-3 text-white text-lg font-semibold md:mr-0 ">If you alredy have an account..</p>
                <Link to='/login'>
                  <button className="hover:border register text-white bg-[#363062] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">
                    Login
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:block hidden w-1/2">
              <img
                className="rounded-2xl bg-[#dfa674] max-h-[1600px]"
                src="https://i.ibb.co/gDYs4SX/4301462-18316.jpg"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
