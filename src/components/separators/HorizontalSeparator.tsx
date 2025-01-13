interface Props {
  color?: string;
  opacity?: boolean;
}

export const HorizontalSeparator = ({ color = "ks-dark", opacity = true }: Props) => {
  return (
    <div className={`w-full h-[1px] bg-${color} ${ opacity ? "opacity-10" : "" } rounded`}></div>
  )
}
