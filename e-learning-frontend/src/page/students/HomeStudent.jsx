import { useState } from "react";
import "./HomeStudent.css";
import Slider from "react-slick";
import HeaderPage from "../../components/header/HeaderPage";
import NavbarPage from "../../components/navbar/NavbarPage";
import { useAllCourses, useAllCoursesByUserId } from "../../hooks/useCourse";
import { useSelector } from "react-redux";
function HomeStudent() {
  const [selectedTab, setSelectedTab] = useState("lesson"); // Default selected tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const searchInfo = useSelector((state) => state.searchInfo);
  console.log(searchInfo);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    // autoplay: true, // Bật chế độ tự động chuyển slide
    // autoplaySpeed: 3000, // Thiết lập thời gian chờ giữa các slide (đơn vị là milliseconds)
    arrows: false, // Tắt nút next và previous
  };

  // const currentUser = {
  //   id: 4,
  //   name: "Long Nguyễn",
  //   email: "longnguyenmanh20052000@gmail.com",
  //   avatar:
  //     "https://lh3.googleusercontent.com/a/ACg8ocKg0xTuzWgtk-iEBftkXb5BaXhdK3AMJmSvLVg_UsBE=s96-c",
  // };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const coursesByUser = useAllCoursesByUserId(currentUser.user_id).courses;
  const coursesByUserLoading = useAllCoursesByUserId(
    currentUser.user_id
  ).isLoading;

  const filterCourses = useAllCourses(
    searchInfo.categoryId,
    searchInfo.search
  ).courses;
  console.log(filterCourses);

  return (
    <div className="w-[428px] h-[1290px]  mx-auto drop-shadow-xl border border-gray-300 rounded-md my-2 flex flex-col justify-between">
      <div>
        <HeaderPage />
        <NavbarPage />
        <div className="mx-3 flex justify-between mt-3">
          <p className="font-semibold">Course</p>
          {filterCourses.length === 0 ? (
            <></>
          ) : (
            <p className="text-sm">
              more <i className="fa-solid fa-arrow-right"></i>
            </p>
          )}
        </div>
        <div className="ml-3 mt-6">
          <Slider {...settings}>
            {filterCourses.length === 0 && (
              <p className="text-center">There are no courses</p>
            )}
            {filterCourses.map((e, i) => (
              <div key={i}>
                <div className="w-[247px] h-[200px] rounded-md relative course-image">
                  <div className="absolute top-4 left-4">
                    <div
                      className="h-[60px] w-[60px] rounded-[50%] border-2
                    border-orange-400 bg-white"
                    ></div>
                  </div>
                  <div className="absolute bottom-6 left-4">
                    <p className="font-semibold text-white">{e.title}</p>
                    <p className="text-xs text-white">
                      {e.session_count} Units
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* <div>
              <div className="w-[247px] h-[200px] rounded-md relative course-image">
                <div className="absolute top-4 left-4">
                  <img
                    className="h-[60px] w-[60px] rounded-[50%] border-2 border-orange-400 "
                    src="https://img.lovepik.com/png/20230930/british-flag-pictures-flags-flag-pictures_40293_wh860.png"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-6 left-4">
                  <p className="font-semibold text-white">A1, A2 Basic user</p>
                  <p className="text-xs text-white">15 Units</p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[247px] h-[200px] rounded-md relative course-image">
                <div className="absolute top-4 left-4">
                  <img
                    className="h-[60px] w-[60px] rounded-[50%] border-2 border-orange-400 "
                    src="https://img.lovepik.com/png/20230930/british-flag-pictures-flags-flag-pictures_40293_wh860.png"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-6 left-4">
                  <p className="font-semibold text-white">A1, A2 Basic user</p>
                  <p className="text-xs text-white">15 Units</p>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
        <div className="mx-3 flex justify-between mt-3">
          <p className="font-semibold">Participating</p>
          {/* {!coursesByUserLoading && !coursesByUser.length === 0 && (
            <p className="text-sm">
              more <i className="fa-solid fa-arrow-right"></i>
            </p>
          )} */}
          {coursesByUser.length === 0 ? (
            <></>
          ) : (
            <p className="text-sm">
              more <i className="fa-solid fa-arrow-right"></i>
            </p>
          )}
        </div>
        <div className="mx-3 mt-6">
          {/*  */}
          {coursesByUserLoading && <p className="text-center">Loading...</p>}
          {!coursesByUserLoading && coursesByUser.length === 0 && (
            <p className="text-center">
              You have not participated in any courses yet
            </p>
          )}

          {coursesByUser.map((course, i) => (
            <div
              key={i}
              className=" h-[100px] rounded-md border border-gray-300 flex items-center gap-3 relative mb-3"
            >
              <div className="relative w-[120px] h-[80px] ml-2 rounded-lg participating-image">
                <p className="text-xs text-white font-medium absolute top-7 left-2 ">
                  {course.courses_name}
                </p>
              </div>
              <div>
                <p className="font-semibold"> {course.courses_name}</p>
                <p className="w-[220px] text-sm">
                  {course.courses_description}
                </p>
              </div>
              <p className="bg-orange-400 p-1 rounded-md text-sm text-center text-white w-[40px] absolute top-3 right-1">
                {course.percent}%
              </p>
            </div>
          ))}
          {/*  */}
          {/* <div className=" h-[100px] rounded-md border border-gray-300 flex items-center gap-2 relative mb-3">
            <div className="relative w-[120px] h-[80px] ml-2 rounded-lg participating-image">
              <p className="text-xs text-white font-medium absolute top-7 left-2 ">
                A1, A2 | Basic Usser
              </p>
            </div>
            <div>
              <p className="font-semibold">A1, A2 Basic user</p>
              <p className="w-[220px] text-sm">
                Lorem ipsum dolor sit amet consectetur, adiping elit.
              </p>
            </div>
            <p className="bg-orange-400 p-1 rounded-md text-sm text-center text-white w-[40px] absolute top-3 right-1">
              60%
            </p>
          </div> */}
          {/*  */}
          {/* <div className=" h-[100px] rounded-md border border-gray-300 flex items-center gap-2 relative mb-3">
            <div className="relative w-[120px] h-[80px] ml-2 rounded-lg participating-image">
              <p className="text-xs text-white font-medium absolute top-7 left-2 ">
                A1, A2 | Basic Usser
              </p>
            </div>
            <div>
              <p className="font-semibold">A1, A2 Basic user</p>
              <p className="w-[220px] text-sm">
                Lorem ipsum dolor sit amet consectetur, adiping elit.
              </p>
            </div>
            <p className="bg-orange-400 p-1 rounded-md text-sm text-center text-white w-[40px] absolute top-3 right-1">
              60%
            </p>
          </div> */}
        </div>
      </div>

      <div className="w-full h-[112px] flex justify-around items-center cursor-pointer">
        <div className="text-center" onClick={() => handleTabClick("lesson")}>
          <p className="">
            <i
              className={`fa-solid fa-book text-3xl ${
                selectedTab === "lesson" ? "text-orange-400" : " text-gray-500"
              }`}
            ></i>
          </p>
          <p
            className={`${
              selectedTab === "lesson" ? "text-orange-400" : " text-gray-500"
            }`}
          >
            Lesson
          </p>
        </div>
        <div
          className="text-center relative"
          onClick={() => handleTabClick("notification")}
        >
          <p className="">
            <i
              className={`fa-regular fa-bell text-3xl ${
                selectedTab === "notification"
                  ? "text-orange-400"
                  : "text-gray-500"
              } `}
            ></i>
          </p>
          <p className="w-[17px] h-[17px] rounded-[50%] bg-red-600 text-xs text-center text-white absolute top-[3px] right-5">
            6
          </p>
          <p
            className={`${
              selectedTab === "notification"
                ? "text-orange-400"
                : " text-gray-500"
            }`}
          >
            Notification
          </p>
        </div>
        {/* text-center relative */}
        <div
          className="text-center relative"
          onClick={() => handleTabClick("diary")}
        >
          <p className="">
            <i
              className={`fa-regular fa-clock text-3xl ${
                selectedTab === "diary" ? "text-orange-400" : "text-gray-500"
              } `}
            ></i>
          </p>
          <p className="w-[17px] h-[17px] rounded-[50%] bg-red-600 text-xs text-center text-white absolute top-[3px] right-[-5px]">
            N
          </p>
          <p
            className={`${
              selectedTab === "diary" ? "text-orange-400" : " text-gray-500"
            }`}
          >
            Diary
          </p>
        </div>
        <div className="text-center" onClick={() => handleTabClick("profile")}>
          <p className="">
            <i
              className={`fa-regular fa-user text-3xl ${
                selectedTab === "profile" ? "text-orange-400" : "text-gray-500"
              } `}
            ></i>
          </p>
          <p
            className={`${
              selectedTab === "profile" ? "text-orange-400" : " text-gray-500"
            }`}
          >
            Profile
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeStudent;
