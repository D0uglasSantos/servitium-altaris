import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
}
const Button = ({ href, text }: ButtonProps) => {
  return (
    <div className="">
      <Link href={`${href}`}>
        <button className="bg-bege hover:bg-gold-400 text-white font-bold py-3 px-6 rounded-lg mb-12 shadow-md hover:bg-bege/40 transition-all">
          {text}
        </button>
      </Link>
    </div>
  );
};
export default Button;
