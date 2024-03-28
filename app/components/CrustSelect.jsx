const CrustSelect = ({ crust, setCrust }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">Crust</h2>
      <div className="flex gap-x-8 font-medium">
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
            type="radio"
            name="crust"
            value="thin"
            checked={crust === "thin"}
            onChange={(e) => setCrust(e.target.value)}
            className="appearance-none w-3 h-3 border border-gray-300 rounded-full cursor cursor checked:bg-secondary"
          />
          <span className="font-semibold text-base">Thin Crust</span>
        </label>
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
            type="radio"
            name="crust"
            value="handtossed"
            checked={crust === "handtossed"}
            onChange={(e) => setCrust(e.target.value)}
            className="appearance-none w-3 h-3 border border-gray-300 rounded-full cursor cursor checked:bg-secondary"
          />
          <span className="font-semibold text-base">Handtossed</span>
        </label>
      </div>
    </div>
  );
};

export default CrustSelect;
