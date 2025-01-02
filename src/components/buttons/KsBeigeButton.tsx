"use client"

interface Props {
  text: string;
  onClick?: React.EventHandler<any>
}

export const KsBeigeButton = ({text, onClick = () => {}}: Props) => {
  return (
    <button onClick={onClick} className="p-3 bg-ks-beige text-ks-dark font-semibold rounded lg:w-[120px]">
      {text}
    </button>
  );
};
