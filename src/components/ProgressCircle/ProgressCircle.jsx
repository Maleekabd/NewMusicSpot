import "./ProgressCircle.css";

const Circle = ({ color, persentage, size, strokeWidth }) => {
  const radius = size / 2 - 10;
  const circl = 2 * Math.PI * radius - 20;
  const StrokePic = ((100 - Math.round(persentage)) * circl) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={StrokePic !== circl ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circl}
      strokeDashoffset={persentage ? StrokePic : 0}
      strokeLinecap="round"
    />
  );
};

const ProgressCircle = ({ percentage, isPlaying, size, images, color }) => {
  return (
    <div className="progress-circle flex">
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color={"#3b4f73"} size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            color={color}
            persentage={percentage}
            size={size}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx={"50%"} cy={"50%"} r={size / 2 - 30} fill="#fff" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx={"50%"} cy={"50%"} r={size / 2 - 100} fill="#fff" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? "active" : ""}
          x={30}
          y={30}
          width={2 * (size / 2 - 30)}
          height={2 * (size / 2 - 30)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={isPlaying ? "active" : ""}
          x={100}
          y={100}
          width={2 * (size / 2 - 100)}
          height={2 * (size / 2 - 100)}
          href={images}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
