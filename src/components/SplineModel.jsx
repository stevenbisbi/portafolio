import { useEffect } from "react";

export default function SplineModel() {
  useEffect(() => {
    import("@splinetool/viewer");
  }, []);

  return (
    <div className="spline-wrapper">
      <spline-viewer url="https://prod.spline.design/cnnm3Te47BO33Y2q/scene.splinecode"></spline-viewer>
    </div>
  );
}
