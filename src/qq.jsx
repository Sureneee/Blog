import { useRef } from "react";

export const Demo = () => {

  const value = useRef({});

  const handleOnchange = (event, key) => {
    const text = event.target.value;
    value.current[key] = text;
  };

  const handleClick = () => {
    console.log(value.current);
  }

  console.log('working...');

  return (
    <div className="flex flex-col gap-4">
      <p>Name</p>
      <input onChange={(event) => handleOnchange(event, 'name')} className="border-black border-[1px] border-solid"  />
      <p>Email</p>
      <input onChange={(event) => handleOnchange(event, 'email')}  className="border-black border-[1px] border-solid"  />

    <button onClick={handleClick}>submit</button>
    </div>
  );
};