import star from "../../assets/star.svg";

const Review = ({ ratting }) => {
  const stars = Array(ratting).fill(star);
  console.log(stars);
  return (
    <>
      <div className="flex items-center space-x-1 mb-5">
        {stars.map((imgSrc, index) => (
          <img key={index} src={star} width="14" height="14" alt="star" />
        ))}
      </div>
    </>
  );
};

export default Review;
