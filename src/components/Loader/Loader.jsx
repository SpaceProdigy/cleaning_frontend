import { Bars } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";
import PropTypes from "prop-types";

export const Loader = ({ height, width, color, visible }) => {
  return (
    <Wrapper>
      <Bars
        height={height}
        width={width}
        color={color ?? "#4fa94d"}
        ariaLabel="bars-loading"
        visible={visible ?? true}
      />
    </Wrapper>
  );
};

Loader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  visible: PropTypes.bool,
};
