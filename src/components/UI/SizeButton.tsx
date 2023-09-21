interface SizeButtonProps {
  size: string;
  onClickSize: (size: string) => void;
  chosedSize: string;
}

const SizeButton = ({ size, onClickSize, chosedSize }: SizeButtonProps) => {
  return (
    <div
      onClick={() => onClickSize(size)}
      className={`sizeBlock ${size === chosedSize ? "sizeBlock__active" : ""}`}
    >
      {size}
    </div>
  )
}

export default SizeButton
