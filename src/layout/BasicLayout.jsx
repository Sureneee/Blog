import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";


export const BasicLayout = ({children}) => {

    return (
        <div className="flex flex-col min-h-screen ">
            <div className="flex flex-col m-auto max-w-[1231px] gap-[100px] flex-grow">
                <Nav></Nav>
                {children}
                
            
            </div>
           <div className="flex h-[495px] shrink-0 px-[352px] pt-[64px] flex-col items-center gap-[25px] border-t-[1px] border-solid bg-[#F6F6F7]">
                <Footer />
           </div>
        </div>
    )
}