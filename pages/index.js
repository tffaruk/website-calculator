import ProductReducer from "@hooks/useReducer";
import Base from "@layouts/Baseof";
import PageCount from "@layouts/components/PageCount";
import TemplateCount from "@layouts/components/TemplateCount";

const Home = () => {
  const { state, dispatch } = ProductReducer();

  return (
    <Base>
      <div className="section">
        <div className="container">
          <h1>Website Calculator</h1>
          <h2 className="h4 my-4 text-primary">
            Total:{state.template.amount + state.page.amount}
          </h2>
          <TemplateCount dispatch={dispatch} />
          <PageCount dispatch={dispatch} />
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
