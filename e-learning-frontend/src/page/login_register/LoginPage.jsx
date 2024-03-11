import logo from "../../assets/img/logo.svg";
import appleLogo from "../../assets/img/apple.svg";
import googleLogo from "../../assets/img/google.svg";
import emailLogo from "../../assets/img/email.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "../../components/common/CustomButton";
import { auth, provider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleShowOption = () => {
    setShow((prev) => !prev);
  };
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const handleTest = () => {
    console.log("kaka");
  };
  // const handleLogin = () => {
  //   window.location.href = "http://localhost:3000/api/v1/auth/google";
  // };

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("result:", result);
      const authGoogle = {
        user_id: result.user.uid,
        username: result.user.displayName,
        email: result.user.email,
        avatar_user: result.user.photoURL,
      };

      await axios
        .post("http://localhost:3000/api/v1/auth/signIn", authGoogle)
        .then((res) => {
          console.log(res.data.signinResult.user);
          localStorage.setItem(
            "currentUser",
            JSON.stringify(res.data.signinResult.user)
          );
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Lỗi khi đăng nhập bằng Google:", error);
    }
  };
  return (
    <>
      <div className="container mx-auto relative ">
        <div className="h-screen w-full flex justify-center items-center pb-40">
          <img src={logo} alt="Logo" />
        </div>
        <div className=" absolute bottom-0 left-0 w-full">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="flex gap-5 flex-col items-center px-6"
          >
            <CustomButton
              imageLink={appleLogo}
              classInfo={"bg-customOrange text-white border-0"}
              content={"Tiếp tục với Apple"}
              handleAction={handleTest}
            />
            {show && (
              <>
                <motion.div
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8 }}
                  className="w-full"
                >
                  <CustomButton
                    imageLink={googleLogo}
                    classInfo={"bg-white border-2 block mx-auto"}
                    content={"  Tiếp tục với Google"}
                    handleAction={handleClick}
                  />
                </motion.div>
                <motion.div
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8 }}
                  className="w-full"
                >
                  {" "}
                  <CustomButton
                    imageLink={emailLogo}
                    classInfo={"bg-white border-2 block mx-auto"}
                    content={"  Tiếp tục với Email"}
                  />
                </motion.div>
              </>
            )}
          </motion.div>

          {!show ? (
            <div className=" mt-4 mb-16">
              <button
                onClick={handleShowOption}
                className="underline text-xs font-light block mx-auto"
              >
                Khác
              </button>
            </div>
          ) : (
            <motion.p
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="text-center text-xs mb-8 mt-28 font-medium "
            >
              Bằng việc tiếp tục, đồng nghĩa <br /> bạn đã đồng ý các{" "}
              <a href="#" className=" underline">
                điều khoản
              </a>{" "}
              và{" "}
              <a href="#" className=" underline">
                chính sách
              </a>
            </motion.p>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;

// import axios from "axios";
// import { auth, provider } from "../../firebase/firebase";
// import { signInWithPopup } from "firebase/auth";

// const LoginPage = () => {
//   const handleClick = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);

//       console.log("result:", result);
//       const authGoogle = {
//         user_id: result.user.uid,
//         username: result.user.displayName,
//         email: result.user.email,
//         avatar_user: result.user.photoURL,
//       };

//       await axios
//         .post("http://localhost:3000/api/v1/auth/signIn", authGoogle)
//         .then((res) => {
//           console.log(res.data.signinResult.user);
//           // navigate("/");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (error) {
//       console.error("Lỗi khi đăng nhập bằng Google:", error);
//     }
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Đăng nhập bằng Google</button>
//     </div>
//   );
// };

// export default LoginPage;
