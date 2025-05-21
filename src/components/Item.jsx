export const Item = ({ title, description, isChecked }) => {
  const textStyle = isChecked ? "line-through text-white" : "text-lightgray";

  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className={textStyle}>{description}</p>
    </div>
  );
};