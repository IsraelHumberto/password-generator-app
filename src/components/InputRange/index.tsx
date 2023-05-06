import React, { useEffect, useState, useContext } from "react";
import { PasswordContext } from "context/passwordContext";
import "./style.scss";

interface Props {
  min: number;
  max: number;
  title: string;
}

const InputRange = ({ min, max, title }: Props) => {
  const {charLength, setCharLength} = useContext(PasswordContext)
  
  const [progress, setProgress] = useState((charLength / max) * 100)

  useEffect(() => {
    setProgress((charLength / max) * 100)
  }, [charLength, max])

  useEffect(() => {
    setCharLength(Math.round((max + min) / 2))
  }, [])

  return (
    <div className="inputRange">
      <div className="inputRange__header">
        <p className="inputRange__title">{title}</p>
        <span className="inputRange__length" id="span-length">
          {String(charLength)}
        </span>
      </div>
      <div className="inputRange__input">
        <input
          type="range"
          id="length"
          name="length"
          min={min}
          max={max}
          value={Number(charLength)}
          onChange={(e) => setCharLength(Number(e.target.value))}
          style ={{background:`linear-gradient(to right, #A4FFAF ${progress}%, #18171F ${progress}%)`}}
        />
      </div>
    </div>
  );
};

export default InputRange;
