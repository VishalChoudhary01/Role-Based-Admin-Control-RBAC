import PropTypes from 'prop-types'; 
const Button = ({
    ButtonStyle,
    ButtonContent,
    RenderLeft,
    RenderRight,
    ButtonClick,
    ButtonErrorText,
    ButtonErrorStyle,
    ButtonDisable,
    RenderRightStyle,
    RenderLeftStyle,
  }) => {
    return (
      <div>
        <button
          className={ButtonStyle}
          onClick={ButtonClick}
          disabled={ButtonDisable}
        >
          {RenderLeft && <span className={RenderLeftStyle}>{RenderLeft}</span>}
          <span>{ButtonContent}</span>
          {RenderRight && <span className={RenderRightStyle}>{RenderRight}</span>}
        </button>
  
        {ButtonErrorText && <span className={ButtonErrorStyle}>{ButtonErrorText}</span>}
      </div>
    );
  };

Button.propTypes = {
    ButtonStyle: PropTypes.string.isRequired, 
    ButtonContent: PropTypes.node.isRequired, 
    RenderLeft: PropTypes.node, 
    RenderRight: PropTypes.node, 
    ButtonClick: PropTypes.func.isRequired, 
    ButtonErrorText: PropTypes.string, 
    ButtonErrorStyle: PropTypes.string, 
    ButtonDisable: PropTypes.bool, 
    RenderRightStyle: PropTypes.string,
    RenderLeftStyle:PropTypes.string, 
  };

export default Button;
