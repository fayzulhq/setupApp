import Link from "next/link";
import dynamic from "next/dynamic";

const style = 'text-sm flex w-full justify-center py-3 backdrop-blur-2xl lg:static lg:w-auto rounded-lg px-6 hover:bg-gray-800 font-mono font-bold underline underline-offset-[15px] hover:no-underline duration-300'

const Header = ({tag,link,className}) => {
  
  return (
    <div className={`m-4 ${className} overflow-x-hidden`}>
      <div className="flex justify-between p-3 md:p-5 max-w-4xl mx-auto items-center">
        <Link href={link} className={`${style} hidden md:flex`}>
          {tag}
        </Link>
        <div className="flex justify-center mx-auto md:mx-0 ">
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

// export default Header;

export default dynamic (()=> Promise.resolve(Header),{ssr:false})