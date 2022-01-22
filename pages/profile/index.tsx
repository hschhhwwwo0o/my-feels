import type { NextPage, GetServerSideProps } from "next";

const Profile: NextPage<IProfilePageProps> = props => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {},
  };
};

export default Profile;
