import CodeButton from "./code";
import Link from "next/link";


const style = 'text-sm flex w-full justify-centera-2 lg:py-3 backdrop-blur-2xl lg:static lg:w-auto rounded-lg lg:px-6 hover:bg-gray-900 font-mono font-bold underline underline-offset-[15px] hover:no-underline duration-300'

const Header = (props) => {
  return (
    <div>
      <div className="flex justify-between p-3 md:p-5 max-w-4xl mx-auto items-center">
        <Link href={props.link} className={style}>
          {props.tag}
        </Link>
        <div className="flex gap-x-7">
          <Link href="/documentations" className={style}>
            Documentations
          </Link>
          <Link href="/others" className={style}>
            Others
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
