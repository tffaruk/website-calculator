import ProductReducer from "@hooks/useReducer";
import Base from "@layouts/Baseof";
import PageCount from "@layouts/components/PageCount";
import ProjectCategory from "@layouts/components/ProjectCategory";

const Home = () => {
  const { state, dispatch } = ProductReducer();

  return (
    <Base>
      <div className="section">
        <div className="container">
          <h1 className="mb-4 ">Website Calculator</h1>
          {state.isCustomization ? (
            <h2 className="h4 my-4 text-primary">
              Total:{state.customization.prize}
            </h2>
          ) : state.isDevelopment ? (
            <h2 className="h4 my-4 text-primary">
              Total:{state.development.prize}
            </h2>
          ) : null}
          {state.isCustomization ? (
            <h2>page:{state.customization.page.prize}</h2>
          ) : state.isDevelopment ? (
            <h2>page:{state.development.page.prize}</h2>
          ) : null}
          <ProjectCategory dispatch={dispatch} state={state
          
          } />
          {/* <TemplateCount dispatch={dispatch} /> */}
          <PageCount dispatch={dispatch} state={state} />
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
