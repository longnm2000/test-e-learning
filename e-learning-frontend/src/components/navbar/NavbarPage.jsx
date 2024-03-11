import { useState } from "react";
import { useGetAllCategories } from "../../hooks/useCategory";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { act_setSearchInfo } from "../../redux/action";
import { useSelector } from "react-redux";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
function NavbarPage() {
  const { categories } = useGetAllCategories();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [search, setSearch] = useState("");

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTabClick = (tab) => {
    const categoryId = tab;
    console.log(categoryId);
    setSelectedCourse(tab);
    dispatch(act_setSearchInfo({ categoryId }));

    console.log(store);
  };
  const handleChangeInfo = (e) => {
    setSearch(e);
  };
  console.log(search);

  const handleClickSearchButton = () => {
    dispatch(act_setSearchInfo({ search }));
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    arrows: false,
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    // messageApi.open({
    //   type: "success",
    //   content: "Log out successfully",
    // });
    navigate("/login");
  };

  // const currentUser = {
  //   user_id: 4,
  //   name: "Long Nguyễn",
  //   email: "longnguyenmanh20052000@gmail.com",
  //   avatar:
  //     "https://lh3.googleusercontent.com/a/ACg8ocKg0xTuzWgtk-iEBftkXb5BaXhdK3AMJmSvLVg_UsBE=s96-c",
  // };
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const items = [
    {
      key: "1",
      label: <a>Log out</a>,
      onClick: () => {
        console.log("ok");
        handleLogout();
      },
    },
  ];
  return (
    <div className="px-3">
      {/* avatar */}
      <div className="  h-[60px] flex justify-between">
        <div>
          <p className="font-semibold text-2xl">Welcome Back!!</p>
          <p className="truncate">{currentUser.username}</p>
        </div>
        <div>
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
            className="cursor-pointer"
          >
            <img
              className="h-[60px] w-[60px] rounded-[50%]"
              src={currentUser.avatar}
              alt={currentUser.username}
            />
          </Dropdown>
        </div>
      </div>
      {/* search */}
      <div className="mt-8">
        <div className=" rounded-md relative">
          <input
            className="w-full h-[35px] py-1 pl-2 border-2 border-orange-400 outline-orange-400 rounded-md z-10"
            type="text"
            placeholder="Search for Course"
            onChange={(e) => handleChangeInfo(e.target.value)}
          />
          <button
            onClick={handleClickSearchButton}
            className="w-[43px] h-[43px] rounded-[50%] border-2 border-orange-400 bg-white absolute top-[-4px] right-3 z-20"
          >
            <i className="fa-solid fa-magnifying-glass text-orange-400"></i>
          </button>
        </div>
      </div>
      {/* list course */}
      <Slider {...settings} className="mt-8">
        {categories.map((category, i) => (
          <div
            onClick={() => handleTabClick(category.category_id)}
            key={i}
            className="flex items-center"
          >
            <img
              className={`h-[60px] w-[60px] rounded-[50%] border-2 ${
                selectedCourse === category.category_id
                  ? "border-orange-400"
                  : ""
              } block mx-auto`}
              src={category.image}
              alt=""
            />
            <p className="text-xs text-center">{category.category_name}</p>
          </div>
        ))}
      </Slider>
      {/* <div className="flex h-[84px] mt-8 gap-5 justify-center">
        <div onClick={() => handleTabClick("German")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] border-2 ${
              selectedCourse === "German" ? "border-orange-400" : ""
            } `}
            src="https://cdn.pixabay.com/photo/2016/07/11/17/29/outline-1510150_1280.png"
            alt=""
          />
          <p className="text-xs">Tiếng Đức</p>
        </div>
        <div onClick={() => handleTabClick("French")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] border-2 ${
              selectedCourse === "French" ? "border-orange-400" : ""
            } `}
            src="https://img.lovepik.com/element/45008/6779.png_860.png"
            alt=""
          />
          <p className="text-xs">Tiếng Pháp</p>
        </div>
        <div onClick={() => handleTabClick("CNTT")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] object-cover border-2 ${
              selectedCourse === "CNTT" ? "border-orange-400" : ""
            } `}
            src="https://tino.org/wp-content/uploads/2021/08/word-image-294.jpeg"
            alt=""
          />
          <p className="text-xs text-center">CNTT</p>
        </div>{" "}
        <div onClick={() => handleTabClick("English")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] object-cover border-2 ${
              selectedCourse === "English" ? "border-orange-400" : ""
            } `}
            src="https://img.lovepik.com/png/20230930/british-flag-pictures-flags-flag-pictures_40293_wh860.png"
            alt=""
          />
          <p className="text-xs">Tiếng Anh</p>
        </div>{" "}
        <div onClick={() => handleTabClick("China")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] object-cover border-2 ${
              selectedCourse === "China" ? "border-orange-400" : ""
            } `}
            src="https://e7.pngegg.com/pngimages/416/925/png-clipart-flag-of-china-map-chinese-flag-leaf-heart-thumbnail.png"
            alt=""
          />
          <p className="text-xs">Tiếng Trung</p>
        </div>
      </div> */}
    </div>
  );
}

export default NavbarPage;
