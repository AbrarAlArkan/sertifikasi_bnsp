function Button(props) {
  const { title, onClick, className, style, ariaLabel } = props;

  return (
    <button 
      onClick={onClick} 
      className={className} 
      style={style} 
      aria-label={ariaLabel || title}
    >
      {title}
    </button>
  );
}

export default Button;
