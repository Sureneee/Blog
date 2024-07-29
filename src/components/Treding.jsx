import {Card} from "./Card";

const cardImage1 = "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K24Nzd5zJ1XEOcGTJPxkBNveQUmndhW2SktSLjMo1rPdg-y6sSyfDMRGkalCHYmwdMT3C5~hoo2ioFKLAFXd-bB1v4dX0PwPh89I0r-7xQk1GAI9lDBSY7VcLgv3iZOVLZW7YI9Dua0XMuqUW47gVpcMeJjvpE7sg3doPNrg44W1R3dYjBkeZlJEsNMN7Q23yAngjRM5DAxP8tzVL-m77WMg3uvi9kmMTdUw2WFBbr1UjC5zWKXHEBYBe9oa-NU1QMwvTR94X1L5nztOmunq1zU~1fm18W-XfaHPUbJzP8j~VaHlpZomJ0NYzrFizwh9ByK8Fal~uduwxFQrizyz-Q__";

const cardData = [
  {
    image: cardImage1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    label: "Technology",
  },
  {
    image: cardImage1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    label: "Technology 3 ",
  },
  {
    image: cardImage1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    label: "Technology 2",
  },
  {
    image: cardImage1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    label: "Technology 1",
  },
];

export const Trending = () => {
  return (
    <div>
      <h1 className="text-[24px] font-bold leading-[28px]"> Trending </h1>
      <div className="flex gap-[20px] mt-[30px]">
        {cardData.map((card) => {
          return <Card {...card} />;
        })}
      </div>
    </div>
  );
};
