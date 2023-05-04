import React, { useEffect, useState } from "react";
import "./style.scss";

interface Props {
  min: number;
  max: number;
  title: string;
}

const InputRange = ({ min, max, title }: Props) => {
  const [length, setLength] = useState<number>(Math.round((max + min) / 2));
  const [progress, setProgress] = useState((length / max) * 100)

  useEffect(() => {
    setProgress((length / max) * 100)
  }, [length, max])

  return (
    <div className="inputRange">
      <div className="inputRange__header">
        <p className="inputRange__title">{title}</p>
        <span className="inputRange__length" id="span-length">
          {String(length)}
        </span>
      </div>
      <div className="inputRange__input">
        <input
          type="range"
          id="length"
          name="length"
          min={min}
          max={max}
          value={Number(length)}
          onChange={(e) => setLength(Number(e.target.value))}
          style ={{background:`linear-gradient(to right, #A4FFAF ${progress}%, #18171F ${progress}%)`}}
        />
      </div>
    </div>
  );
};

export default InputRange;
