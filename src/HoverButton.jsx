import './HoverButton.css';

function HoverButton({ link, buttonText }) {
  return (
    <div>
      <a className="hover-button" href={link}>
        {buttonText}
      </a>
    </div>
  );
}

export default HoverButton;
