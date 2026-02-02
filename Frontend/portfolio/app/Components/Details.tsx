import { CodeXml,Lightbulb,MapPinHouse ,Phone , Clock , Mail  , Mars} from 'lucide-react';
import Link from "next/link"

export function Details(){

    const clockTime = new Date().toLocaleString()

    const myRealTime = clockTime.split(",")[1]


    return(
        <>
        <div className="mt-3 w-full h-auto flex justify-around p-1">

            {/* First Box */}

            <div className="flex flex-col space-y-5">

                <div className='flex space-x-3'>
                    <ul className='text-white'><CodeXml></CodeXml></ul>
                    <h1 className='text-white'>Unemployed/Looking for jobs</h1>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><Lightbulb></Lightbulb></ul>
                    <Link className='hover:underline text-white' href={"https://we-agency.vercel.app/"}>Founder @We-agency</Link>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><MapPinHouse></MapPinHouse></ul>
                    <h1 className='text-white'>Nagla,Pantnagar(Uttarakhand,India)</h1>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><Phone></Phone></ul>
                    <Link className='hover:underline text-white' href={"tel:+91 7417835639"}>+91 7417835639</Link>
                </div>
                

            </div>


             {/* Second Box */}

            <div className="flex flex-col space-y-5 mt-[20px]">


                 <div className='flex space-x-3'>
                    <ul className='text-white'><Clock></Clock></ul>
                    <h1 className='text-white'>{myRealTime}</h1>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><Mail></Mail></ul>
                    <Link className='hover:underline text-white' href={"mailto:mohitsati.eth@gmail.com"}>mohitsati.eth@gmail.com</Link>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><Mars></Mars></ul>
                    <h1 className='text-white'>He/Him</h1>
                </div>
                

            </div>

        </div>
        </>
    )
}