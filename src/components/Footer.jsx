export const Footer = () => {
    return (
    <div className="flex">
        <div className="flex flex-col  w-[289px] items-start gap-[24px]">
            <div className="flex flex-col items-start gap-[12px]">
                <h1 className="text-[18px] font-semibold leading-[28px]">About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <p>Email : info@jstemplate.net <br />Phone : 880 123 456 789</p>
        </div>
        <div className="flex flex-col justify-center gap-2 shrink-0 items-start w-[521px] text-[16px] font-normal leading-[24px]">
            <button>Home</button>
            <button>Blog</button>
            <button>Contact</button>

        </div>
        <div>
            
        </div>
    </div>
    )}