import Page from "../Page";
import { getRandomAPI } from "../publicApis";

export default Page;

export const getServerSideProps = async () => {
  const props = await getRandomAPI();
  return { props };
};
