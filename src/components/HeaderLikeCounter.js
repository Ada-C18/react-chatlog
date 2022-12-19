import './HeaderLikeCounter.css';

const HeaderLikeCounter = (props) => {
  return (
    <section className="like-count-container">
      <h2>{`${props.likeCount} ❤️s`}</h2>
    </section>
  );
};

export default HeaderLikeCounter;
