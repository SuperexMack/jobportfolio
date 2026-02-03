import { CodeXml,Lightbulb,MapPinHouse ,Phone , Clock , Mail  , Mars} from 'lucide-react';
import Link from "next/link"

export function Details(){

    const clockTime = new Date().toLocaleString()

    const myRealTime = clockTime.split(",")[1]


    return(
        <>
        <div className="mt-3 w-full h-auto flex-col md:flex-row md:flex justify-around p-1">

            {/* First Box */}

            <div className="flex flex-col space-y-5">

                <div className='flex space-x-3'>
                    <ul className='text-white'><CodeXml className='bg-slate-800 p-1 rounded-lg w-[30px] h-auto'></CodeXml></ul>
                    <h1 className='text-white'>Unemployed/Looking for jobs</h1>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><Lightbulb className='bg-slate-800 p-1 rounded-lg w-[30px] h-auto'></Lightbulb></ul>
                    <Link className='hover:underline text-white' href={"https://we-agency.vercel.app/"}>Founder @We-agency</Link>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><MapPinHouse className='bg-slate-800 p-1 rounded-lg w-[30px] h-auto'></MapPinHouse></ul>
                    <h1 className='text-white'>Nagla,Pantnagar(Uttarakhand,India)</h1>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><Phone className='bg-slate-800 p-1 rounded-lg w-[30px] h-auto'></Phone></ul>
                    <Link className='hover:underline text-white' href={"tel:+91 7417835639"}>+91 7417835639</Link>
                </div>
                

            </div>


             {/* Second Box */}

            <div className="flex flex-col space-y-5 mt-[20px]">

               

                 <div className='flex space-x-3'>
                    <ul className='text-white'><Clock className='bg-slate-800 p-1 rounded-lg w-[30px] h-auto'></Clock></ul>
                    <h1 className='text-white'>{myRealTime}</h1>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><Mail className='bg-slate-800 p-1 rounded-lg w-[30px] h-auto'></Mail></ul>
                    <Link className='hover:underline text-white' href={"mailto:mohitsati.eth@gmail.com"}>mohitsati.eth@gmail.com</Link>
                </div>

                 <div className='flex space-x-3'>
                    <ul className='text-white'><Mars className='bg-slate-800 p-1 rounded-lg w-[30px] h-auto'></Mars></ul>
                    <h1 className='text-white'>He/Him</h1>
                </div>
                

            </div>

        </div>
        </>
    )
}