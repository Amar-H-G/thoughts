import Card from "./card";

const Thoughts = ({ data }) => {
  return <>
    <div className={`row row-cols-1  row-cols-lg-3 row-cols-md-2 mx-1 my-1 g-2 `}>
      <Card initialData={data} />
    </div>
  </>
}

export default Thoughts;