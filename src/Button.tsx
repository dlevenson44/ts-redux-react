import './App.css';

interface ButtonProps {
	text: string;
	onClick: () => void;
}

function Button(props: ButtonProps) {
	const { text, onClick } = props;
	return (
		<button onClick={onClick} className="button">
			{text}
		</button>
	);
}

export default Button;
