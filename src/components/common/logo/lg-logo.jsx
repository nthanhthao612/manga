import LGImageLogo from "./lg-image-logo";
import LGTextLogo from "./lg-text-logo";
import "../../../css/common/logo.css"

export default function LGLogo({ image, value }) {
  return (
    <div className="lg logo text-logo">
      <LGImageLogo image={image} />
      <LGTextLogo value={value} />
    </div>
  );
}
