export interface FiltersProps {
  minPrice: number;
  handleChangeMinPrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeShape: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeGenre: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filters: React.FC<FiltersProps> = ({
  handleChangeMinPrice,
  minPrice,
  handleChangeShape,
  handleChangeGenre,
}) => {
  return (
    <>
      <div className="mt-32 text-white w-[70%] m-auto flex flex-col md:flex-row gap-4 justify-start md:justify-between items-start">
        <div className="flex flex-row justify-start items-center gap-x-4 text-black dark:text-white text-xs md:text-base">
          <label htmlFor="price">Precio a partir de:</label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max="500"
            step="10"
            onChange={handleChangeMinPrice}
          />
          <span>${minPrice}</span>
        </div>
        <div className="flex flex-row gap-x-2 justify-center items-center text-black dark:text-white">
          <label htmlFor="genre" className="text-sm md:text-xl w-[50px] md:w-auto">
            Género
          </label>
          <select
            id="genre"
            onChange={handleChangeGenre}
            className="text-xs md:text-base px-4 py-2 w-[100px] text-black dark:text-white bg-white dark:bg-black border-[0.5text-xs md:text-base border-[0.5px] rounded-sm dark:border-white border-black"
          >
            <option value="all" className="">
              Todos
            </option>
            <option value="man" className="">
              Hombre
            </option>
            <option value="woman">Mujer</option>
          </select>
        </div>
        <div className="flex flex-row gap-x-2 justify-center items-center text-black dark:text-white">
          <label htmlFor="shape" className="text-sm md:text-xl w-[50px] md:w-auto">
            Forma
          </label>
          <select
            id="shape"
            onChange={handleChangeShape}
            className="text-xs md:text-base px-4 py-2 w-[100px] text-black dark:text-white bg-white dark:bg-black border-[0.5text-xs md:text-base border-[0.5px] rounded-sm dark:border-white border-black"
          >
            <option value="all" className="">
              Todos
            </option>
            <option value="squared" className="">
              Cuadrados
            </option>
            <option value="circle">Circulares</option>
            <option value="aviator">Aviador</option>
            <option value="cat-eye">Cat-Eye</option>
            <option value="heart">Corazón</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default Filters;
