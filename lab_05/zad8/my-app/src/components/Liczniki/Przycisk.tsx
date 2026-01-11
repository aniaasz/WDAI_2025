const Przycisk = (props: {onClick: () => void; text: string}) => (
    <button onClick={props.onClick}>{props.text}</button>
);

export default Przycisk;