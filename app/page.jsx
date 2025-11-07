import { Suspense } from "react";
import BgImage from "./BgImage/BgImage";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BgImage />
    </Suspense>
  );
}
