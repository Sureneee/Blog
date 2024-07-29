import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile =
  "https://s3-alpha-sig.figma.com/img/0b91/04ea/6891be7496ccabdc2fd0b1a1d8a535d7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qKVporcnOmJOSJLFKV5PTU81RaDXaYfD9hI29WO-6WKdIHtW9~KjUemI1z2I26m29N43eMUle1qyKt2wnYw3Cupvm0EdQHifBX161uTPn3z9quwOv311Y3vZMdwFQLG5PopQNOK8uznHCONe4X3JvOXXTe0PpZnOyV1c663WsiU4WVoop10BIwB6IgvfyNDzedNBsCYd4S6pmANWdaObVl5vd3og0EpRYe3gOa0Ilrd7IwgjhRjA9mLpmHNW~XGlRAtQeMd-IELRhtHKc9tuQ4b1AJ1f0ZwPdSPQNUJl38R~4AqFNoz71DQ~u78pqBqH0xcVn0Q3p0DtTJ0ZDk9eFg__";
const PostImage =
  "https://s3-alpha-sig.figma.com/img/eb1f/38cd/a6a8e0df2280c787cafc780464b002fe?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ql8Xit3eajIljJZlW2rIp1sDUbpnBnYLOW1znIH8GbFKabHZ9IlVOSxuPhttewXH86BEFtadoO~jxSamYEJXDjyyWnprbkOpQ7c3clrEx~BvjVPr-lbLC5RgpOWBKFpUaj~xwN005aFNkVs8MbcLYRr2KJn7qCAXwt8TJhzEEyErWcQhVZys7rNdfQCbTSa5CwjvTTA~w-r7hXL8B4yqPAhHuXoM7FbPg2aJ27wZIZ6Qah3Gg~9i9adBJE8zKMRbDxIGiQZXI1cm14ItIHgOQGZMVPziQLzJKqvBBoW2rqla5V4OW5nIWMD-y1uRJMZ5gfQ1Q-UjFmg9B74hUG7~-w__";


export const SinglePost = () => {
  const { id } = useParams();
  let [articles, setArticles] = useState([]);

  useEffect (() => {
    axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`).then((response) => {
      setArticles (response.data);
    });
  }, [id])
  
  return (
    <>
      <div className="flex flex-col w-[800px] items-start gap-[32px] mt-[100px] mb-[80px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[36px] font-semibold leading-[40px]">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="flex gap-[24px] items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-[28px] text-[14px] font-medium"
                src={Profile}
              ></img>
              <p>Tracey Wilson</p>
            </div>
            <p>August 20, 2022</p>
          </div>
        </div>
        <img
          className="h-[462px] rounded-xl self-stretch"
          src={PostImage}
        ></img>
        {/* <p className="text-[20px] font-normal leading-[32px]">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. <br />
          <br /> One of the most rewarding aspects of traveling is immersing
          yourself in the local culture and customs. This includes trying local
          cuisine, attending cultural events and festivals, and interacting with
          locals. Learning a few phrases in the local language can also go a
          long way in making connections and showing respect.
        </p>
        <h1 className="font-semibold text-[24px] leading-[28px]">Research Your Destination</h1>
        <p className="text-[20px] font-normal leading-[32px]">
        Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
        </p>
        <h1 className="font-semibold text-[24px] leading-[28px]">Plan Your Itinerary</h1>
        <p className="text-[20px] font-normal leading-[32px]">
        While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.<br/> <br />Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p> */}
      </div>
    </>
  );
};
