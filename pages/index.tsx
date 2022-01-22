import type { NextPage, GetServerSideProps } from "next";

const Home: NextPage<IHomePageProps> = props => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {},
  };
};

export default Home;
