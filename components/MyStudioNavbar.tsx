import Link from "next/link"
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

function MyStudioNavbar(props:any) {
  return <div>
    <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-yellow-600 flex items-center">
            <ArrowUturnLeftIcon className="h-6 w-6 mr-2 " /> Go to website
        </Link>
    </div>
    {props.renderDefault(props)}
  </div>;
}

export default MyStudioNavbar;
