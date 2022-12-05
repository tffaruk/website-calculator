import Base from "@layouts/Baseof";
import Default from "@layouts/Default";
import { getListPage } from "@lib/contentParser";

// for all regular pages
const TestPage = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      <Default data={data} />
    </Base>
  );
};
export default TestPage;

// for regular page data
export const getStaticProps = async () => {
  const testPage = await getListPage("content/test/_index.md");

  return {
    props: {
      data: testPage,
    },
  };
};
