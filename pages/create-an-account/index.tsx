import type { NextPage } from "next";
import SecondaryButton from "../../components/UI/SecondaryButton";
import TheLayout from "../../layouts";

const CreateAnAccount: NextPage = props => {
  return (
    <TheLayout>
      <div>
        <SecondaryButton>Hello</SecondaryButton>
      </div>
    </TheLayout>
  );
};

export default CreateAnAccount;
