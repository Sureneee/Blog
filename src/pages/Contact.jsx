import { Tag } from "../components/Tag"


export const Contact = () => {
    return (
        <div className="flex flex-col items-center max-w-[895px]">
            <div className="flex flex-col px-[10px] items-start gap-[20px] shrink-0 ">
                <h1 className="text-[36px] font-semibold leading-[40px]">Contact Us</h1>
                <p className="text-[16px] font-normal leading-[24px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="flex py-[10px] items-center gap-[50px]">
                    <div className="p-[16px] flex flex-col items-start gap-[10px] w-[294px] border-solid border-[1px] rounded-xl border-[#E8E8EA]">
                        <h2 className="text-[24px] font-semibold leading-[40px]">Address</h2>
                        <p className="text-[#696A75] font-normal leading-[26px]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                    <div className="p-[16px] flex flex-col items-start gap-[10px] w-[294px] border-solid border-[1px] rounded-xl border-[#E8E8EA]">
                        <h2 className="text-[24px] font-semibold leading-[40px]">Contact</h2>
                        <p className="text-[#696A75] font-normal leading-[26px]">313-332-8662
                        info@email.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-[478px]items-center pt-[29px] pb-[26px] pr-[130px]  pl-[35px] border-xl bg-[#F6F6F7]">
                <div className="flex flex-col items-start gap-[24px]  w-full">
                    <h1 className="text-[18px] font-semibold leading-[26px]">Leave a Message</h1>
                    <div className="flex gap-[12px]">
                        <input className="rounded-md border-solid border-[1px]" placeholder="Your Name"></input>
                        <input className="rounded-md border-solid border-[1px]" placeholder="Your Email"></input>
                    </div>
                    <input className="min-w-[478px]" placeholder="Subject"></input>
                    <input className="flex h-[134px] p-[14px] items-startmin-w-[478px]" placeholder="Write a message"></input>
                    <button className="px-[10px] py-1 rounded-md  w-fit  text-[12px] bg-[#4B6BFB] text-white">Send Message</button>

                </div>
                
            </div>
        </div>
    )
}