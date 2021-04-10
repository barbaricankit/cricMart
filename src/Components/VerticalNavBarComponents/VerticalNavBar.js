import { Categories } from "./CategoriesComponent";
import { Filtering } from "./Filtering";
import { Sorting } from "./Sorting";
export const VerticalNavBar = () => {
  return (
    <>
      <div className='fixed-vertical-bar'>
        <Categories />
        <Sorting />
        <Filtering />
      </div>
    </>
  );
};
