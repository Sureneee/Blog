
import { Tag } from "./Tag";



const styles = {
    cardStyle: "rounded-xl border-[1px] border-[#E8E8EA] w-[392px] p-[16px] flex flex-col justify-center align-center gap-4",
    imageStyle: "max-w-[360px] h-[240px]rounded-md",
    titleStyle: "text-[24px] font-semibold leading-[28px] mt-4 mb-[20px]",
    dateStyle: "text-[16px] font-normal leading-[24px] text-[#97989F]",
    profileStyle: "w-[36px] h-[36px] rounded-[50px] "
}

const Image = ({ src, alt }) => (
    <img src={src} alt={alt} className={styles.imageStyle} />
  );

export const Blog1 = () => {
    return (
        <div>
            <div className="flex flex-col items-start gap-[32px] self-stretch">
                <h1 className="text-[24px] font-bold leading-[28px]">All Blog Post</h1>
                <div className="flex w-full justify-between text-[#495057] text-12px font-bold leading-[25px]">
                </div>
            </div>
        </div>
    )
}
  
export const BlogContent = ({
    image, label, title, profileImage, author, date

}) => {
    return (
        <div className="flex flex-col mt-[32px]">  
            <div className={styles.cardStyle}>
                <Image src = {image}/>
                <div className="p-2">
                    <Tag tag = {label} isPrimary = {false} ></Tag>
                    <h1 className = {styles.titleStyle}>{title}</h1>
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center gap-3">
                            <img className={styles.profileStyle} src={profileImage}/>
                            <p className="font-medium text-[#97989F] text-[16px]">{author}</p>
                        </div>
                        <p className = {styles.dateStyle}>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}