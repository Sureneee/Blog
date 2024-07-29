import { Tag } from "./Tag";

const cardImage1 = "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K24Nzd5zJ1XEOcGTJPxkBNveQUmndhW2SktSLjMo1rPdg-y6sSyfDMRGkalCHYmwdMT3C5~hoo2ioFKLAFXd-bB1v4dX0PwPh89I0r-7xQk1GAI9lDBSY7VcLgv3iZOVLZW7YI9Dua0XMuqUW47gVpcMeJjvpE7sg3doPNrg44W1R3dYjBkeZlJEsNMN7Q23yAngjRM5DAxP8tzVL-m77WMg3uvi9kmMTdUw2WFBbr1UjC5zWKXHEBYBe9oa-NU1QMwvTR94X1L5nztOmunq1zU~1fm18W-XfaHPUbJzP8j~VaHlpZomJ0NYzrFizwh9ByK8Fal~uduwxFQrizyz-Q__";


const styles = {
    cardStyle: "min-w-[289px] max-w-[289px] min-h-[320px] flex flex-shrink-0 flex-col justify-end rounded-xl px-[29.5px] pb-7 relative bg-[#141624] bg-opacity-40",
    imageStyle: "absolute -z-10 min-w-[289px] max-w-[289px] min-h-[320px] rounded-xl left-0 top-0 object-cover",
    titleStyle: "text-lg font-semibold leading-7 text-white font-work-sans",

}

const Image = ({ src, alt }) => (
    <img src={src} alt={alt} className={styles.imageStyle} />
  );


export const Card = ({
    image = cardImage1,
    title = "The Impact of Technology on the Workplace: How Technology is Changing",
    label = "Technology"
})=> {
    return (
        <div className="flex flex-col items-start gap-[30px]">
            
            <div className={styles.cardStyle}>
                <Image src={image}></Image>
                <div className="flex flex-col gap-4">
                    <Tag tag = {label}/>
                    <h1 className={styles.titleStyle}>{title}</h1>

                </div>
            </div>

        </div>
    )
}