export interface TextAnimatedProps {
    text: string;
}

const TextAnimated:React.FC<TextAnimatedProps> = ({text}) => {
  return (
    <span
      className="font-thin inline-flex text-3xl animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)]
       bg-[length:250%_100%] bg-clip-text text-transparent"
    >
      {text}
    </span>
  );
};
export default TextAnimated;
