import { ReactNode } from "react";

import Layout from "./layout";
import { ArtGallery } from "@/components/ArtGallery/ArtGallery";

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Hey Mike, is it Friday yet?</h1>
      <ArtGallery />
    </>
  );
}

Page.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
