import CodeButton from "./code";
import Link from "next/link";

const Header = (props) => {
  return (
    <div>
      <div className="flex justify-between mt-10 max-w-4xl mx-auto">
        <Link href={props.link}>
          <CodeButton text={props.tag} />
        </Link>
        <div className="flex gap-x-7">
          <Link href="/documentations">
            <CodeButton text="Documentations" />
          </Link>
          <Link href="/others">
            <CodeButton text="Others" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
