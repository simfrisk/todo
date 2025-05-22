export const Item = ({ title, description, isChecked }) => {
  const textStyle = isChecked ? "line-through text-darkgray" : "";

  return (
    <div className="flex flex-col justify-center">
      <h3 className={`${textStyle} text-lg font-semibold`}>{title}</h3>
      <p className={textStyle}>{description}</p>
    </div>
  );
};