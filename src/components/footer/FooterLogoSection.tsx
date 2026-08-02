import { CONTACT_INFO } from "./data"

const FooterLogoSection = () => {
    return (
        <div className="col-span-2">
            <div className="flex flex-col gap-5">
                <h1 className="text-white text-7xl font-PFR text-center xl:text-start">MODEVA</h1>
                <div className="flex justify-between gap-3">
                    <div className="flex flex-col">
                        {CONTACT_INFO.map(info => <h3 key={info.label} className="text-md lg:text-lg">{info.label}</h3>)}
                    </div>
                    <div className="flex flex-col">
                        {CONTACT_INFO.map(info => <h3 key={info.label} className="text-md lg:text-lg">: {info.value}</h3>)}
                    </div>
                </div>
            </div>
        </div>)
}

export default FooterLogoSection
