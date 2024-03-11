function HeaderPage() {
  return (
    <div>
      <div className="flex justify-between mx-3 py-2 px-3  h-[50px] text-center">
        <p className="font-bold">9:14</p>
        <div className="flex gap-1 font-bold">
          <p>
            <i className="fa-solid fa-signal"></i>
          </p>
          <p>
            <i className="fa-solid fa-wifi"></i>
          </p>
          <p>
            <i className="fa-solid fa-battery-three-quarters"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
