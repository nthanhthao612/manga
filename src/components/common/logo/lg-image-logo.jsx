import "../../../css/common/logo.css"

export default function LGImageLogo({ image }) {
  return (
    <div className="lg logo image-logo">
      <img src={image} alt={""} />
    </div>
  );
}
