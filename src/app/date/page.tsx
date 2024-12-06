import { ReactNode } from "react";
import Layout from "@/app/layout";
import { LocaleDate } from "@/components/LocaleDate/LocaleDate";

export default function Page() {
  return <LocaleDate />;
}

Page.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
