import PropTypes from "prop-types";
function CustomButton({ imageLink, classInfo, content, handleAction }) {
  return (
    <>
      <button
        className={`w-full p-4 max-w-[382px] min-h-[59px] text-sm rounded-lg ${classInfo}`}
        onClick={handleAction}
      >
        <div className="flex items-center justify-center">
          <div className=" w-[25px] flex h-full justify-center items-center">
            <img src={imageLink} alt="" />
          </div>
          <p className="w-full pe-[25px] font-medium">{content}</p>
        </div>
      </button>
    </>
  );
}

CustomButton.propTypes = {
  imageLink: PropTypes.string,
  classInfo: PropTypes.string,
  content: PropTypes.string,
  handleAction: PropTypes.func,
};

export default CustomButton;
