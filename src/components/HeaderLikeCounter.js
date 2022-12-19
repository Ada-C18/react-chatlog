import './HeaderLikeCounter.css';
import PropTypes from 'prop-types';

const HeaderLikeCounter = (props) => {
  return (
    <section className="like-count-container">
      <h2>{`${props.likeCount} ❤️s`}</h2>
    </section>
  );
};

HeaderLikeCounter.propTypes = {
  likeCount: PropTypes.number,
};

export default HeaderLikeCounter;
