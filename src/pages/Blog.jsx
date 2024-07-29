import { PostContent } from "../components/PostContent";

const image1 =
  "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGaAS6boAe1jt7IE16J3AhBdS4oh-R64BcF71O~vpOVG45MXQ7Mz7kbSES0YcMtROk1bQJg5lD7Pey3sJaXn5N0QP0fleDa~h1h-~K0XVSFWWPSjIBV6GKQSbgDnVSDkPYjP3Gr4aInjtgZDc2KCGSP2L2kBUlsGQC9pz1eGLEsP821zltTv3G2QLm-qzI6oY7Uq8qKIoCDXS7UJnDSqSXSNEH2ssjK0TKRWbHpUkzG5fHO8-EUqCqIPZkyRpsDVVKkCLUWMk8rwjpCpqsqity7ufQz2SmZUDB-69xb44sZWpSjPIySFeYq8VZPpMlUj6tLEvHw7PEsv71o5OCRp6Q__";

const mockData = [
  {
    image: image1,
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: image1,
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2023",
  },
  {
    image: image1,
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2024",
  },
  {
    image: image1,
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: image1,
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2023",
  },
  {
    image: image1,
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2024",
  },
  {
    image: image1,
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: image1,
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2023",
  },
  {
    image: image1,
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2024",
  },
];

const styles = {
    cardStyle: "rounded-xl border-[1px] border-[#E8E8EA] max-w-[392px] p-[16px] flex flex-col justify-center align-center gap-4",
    imageStyle: "max-w-[360px] h-[240px]rounded-md",
    titleStyle: "text-[24px] font-semibold leading-[28px]",
    dateStyle: "text-[16px] font-normal leading-[24px] text-[#97989F]"
}



export const Post1 = () => {
    return (
        <div>
            <div className="flex flex-col items-start gap-[32px] self-stretch">
                <h1 className="text-[24px] font-bold leading-[28px]">All Blog Post</h1>
                <div className="flex w-full justify-between text-[#495057] text-12px font-bold leading-[25px]">
                    <div className="flex align-center gap-[30px] ">
                        <button>All</button>
                        <button>Design</button>
                        <button>Travel</button>
                        <button>Fashion</button>
                        <button>Technology</button>
                        <button>Branding</button>
                    </div>
                    <div>
                        <button>View All</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap min-w-[1300px] gap-[24px]">
                {mockData.map((data, index) => {
                return <PostContent key={index} {...data} />;
            
        })}
        </div>
        </div>
    )
}
  