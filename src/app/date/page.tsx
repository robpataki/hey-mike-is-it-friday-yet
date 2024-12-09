import { ReactNode } from "react";
// Importing dynamic will force Next to render this page on each request (SSR)
export const dynamic = "force-dynamic";

import Layout from "@/app/layout";
import { LocaleDate } from "@/components/LocaleDate/LocaleDate";

export default function Page() {
  return <LocaleDate />;
}

Page.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
