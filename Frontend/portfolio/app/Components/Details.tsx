import { CodeXml,Lightbulb,MapPinHouse ,Phone , Clock , Mail  , Mars} from 'lucide-react';
import Link from "next/link"

export function Details(){

    const clockTime = new Date().toLocaleString()

    const myRealTime = clockTime.split(",")[1]


    return(
        <>
        <div className="mt-3 w-full bg-green-700 h-auto flex justify-around p-1">

            {/* First Box */}

            <div className="flex flex-col space-y-5">

                <div className='flex space-x-3'>
                    <ul><CodeXml></CodeXml></ul>
                    <h1>Unemployed/Looking for jobs</h1>
                </div>

                 <div className='flex space-x-3'>
                    <ul><Lightbulb></Lightbulb></ul>
                    <Link className='hover:underline' href={"https://we-agency.vercel.app/"}>Founder @We-agency</Link>
                </div>

                 <div className='flex space-x-3'>
                    <ul><MapPinHouse></MapPinHouse></ul>
                    <h1>Nagla,Pantnagar(Uttarakhand,India)</h1>
                </div>

                 <div className='flex space-x-3'>
                    <ul><Phone></Phone></ul>
                    <Link className='hover:underline' href={"tel:+91 7417835639"}>+91 7417835639</Link>
                </div>
                

            </div>


             {/* Second Box */}

            <div className="flex flex-col space-y-5 mt-[20px]">


                 <div className='flex space-x-3'>
                    <ul><Clock></Clock></ul>
                    <h1>{myRealTime}</h1>
                </div>

                 <div className='flex space-x-3'>
                    <ul><Mail></Mail></ul>
                    <Link className='hover:underline' href={"mailto:mohitsati.eth@gmail.com"}>mohitsati.eth@gmail.com</Link>
                </div>

                 <div className='flex space-x-3'>
                    <ul><Mars></Mars></ul>
                    <h1>He/Him</h1>
                </div>
                

            </div>

        </div>
        </>
    )
}