import ProductReducer from "@hooks/useReducer";
import Base from "@layouts/Baseof";
import Adon from "@layouts/components/AdOn";
import Content from "@layouts/components/Content";
import PageCount from "@layouts/components/PageCount";
import ProjectCategory from "@layouts/components/ProjectCategory";

const Home = () => {
  const { state, dispatch } = ProductReducer();

  return (
    <Base>
      <div className="section">
        <div className="container">
          <div className="shadow-[0px 0px 19px 0px #0000001a] mb-16 rounded bg-[#ffffff0f] p-20 text-center">
            <h1 className="mb-8  ">
              Website cost <span className="text-primary">calculator</span>
            </h1>
            <p>
              The website cost calculator app helps you estimate the different
              costs associated with a website, including: website design,
              website content, and website functionality. ‍‍‍
            </p>
          </div>

          {/* {state.isCustomization ? (
            <h2>page:{state.customization.page.prize}</h2>
          ) : state.isDevelopment ? (
            <h2>page:{state.development.page.prize}</h2>
          ) : null} */}

          <ProjectCategory dispatch={dispatch} state={state} />

          {/* <TemplateCount dispatch={dispatch} /> */}

          <PageCount dispatch={dispatch} state={state} />

          {state.isDevelopment && state.development.development ? (
            <Content dispatch={dispatch} state={state} />
          ) : state.isCustomization ? (
            <Content dispatch={dispatch} state={state} />
          ) : state.development.design &&
            !state.development.development ? null : (
            <Content dispatch={dispatch} state={state} />
          )}

          {state.isDevelopment && state.development.development ? (
            <Adon dispatch={dispatch} state={state} />
          ) : state.isCustomization ? (
            <Adon dispatch={dispatch} state={state} />
          ) : state.development.design &&
            !state.development.development ? null : (
            <Adon dispatch={dispatch} state={state} />
          )}

          <h2 className="h4 my-4 text-primary">
            Total: $
            {state.isDevelopment
              ? state.development.prize
              : state.isCustomization
              ? state.customization.prize
              : 0}
          </h2>
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
