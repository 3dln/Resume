import { ReactNode } from "react";
import Head from "next/head";
import { IUserMain } from "../interfaces/resume";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
  userData: IUserMain;
}

const Layout = ({ children, userData }: IProps) => {
  return (
    <div>
      <Head>
        <title>{userData.name}</title>
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Header data={userData} />
        <div>{children}</div>
        <Footer data={userData} />
      </main>
    </div>
  );
};

export default Layout;
