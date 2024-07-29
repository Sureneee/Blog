import { Tag } from "./Tag";

const styles = {
    cardStyle: "rounded-xl border-[1px] border-[#E8E8EA] max-w-[392px] p-[16px] flex flex-col justify-center align-center gap-4",
    imageStyle: "max-w-[360px] h-[240px]rounded-md",
    titleStyle: "text-[24px] font-semibold leading-[28px]",
    dateStyle: "text-[16px] font-normal leading-[24px] text-[#97989F]"
}

export const PostContent = ({image, label, title, date }) => {
    return (
        <a href="Blog/SinglePost" target="blank">
            <div className="flex flex-col mt-[32px]">  
                <div className={styles.cardStyle}>
                    <img src = {image}/>
                    <div>
                        <Tag tag = {label} isPrimary = {false} ></Tag>
                        <h1 className = {styles.titleStyle}>{title}</h1>
                        <p className = {styles.dataStyle}>{date}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}