import ProductReducer from "@hooks/useReducer";
import Base from "@layouts/Baseof";
import PageCount from "@layouts/components/PageCount";
import ProjectCategory from "@layouts/components/ProjectCategory";

const Home = () => {
  const { state, dispatch } = ProductReducer();
  console.log(state);
  return (
    <Base>
      <div className="section">
        <div className="container">
          <h1 className="mb-4 ">Website Calculator</h1>
          {/* <h2 className="h4 my-4 text-primary">
            Total:{state.template.amount + state.page.amount}
          </h2> */}
          <ProjectCategory dispatch={dispatch} />
          {/* <TemplateCount dispatch={dispatch} /> */}
          <PageCount dispatch={dispatch} state={state} />
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
