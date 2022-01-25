import type { NextPage } from "next";
import TheLayout from "../../layouts";
import Logo from "../../components/UI/Logo";

const CreateAnAccount: NextPage = props => {
  return (
    <>
      <TheLayout>
        <div>
          <Logo />
        </div>
      </TheLayout>
    </>
  );
};

export default CreateAnAccount;
