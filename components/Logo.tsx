import Image from "next/image"

function Logo(props:any){
    const {renderDefault, title} = props

    return (
        <div className="flex items-center space-x-2">
            <Image width={50} height={50} alt="logo" src="https://links.papareact.com/1m8" className="rounded-full object-contain" />
            {renderDefault(props)}
        </div>
    )
}

export default Logo