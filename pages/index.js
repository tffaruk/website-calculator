import ProductReducer from "@hooks/useReducer";
import Base from "@layouts/Baseof";
import Adon from "@layouts/components/AdOn";
import Content from "@layouts/components/Content";
import PageCount from "@layouts/components/PageCount";
import ProjectCategory from "@layouts/components/ProjectCategory";
import SectaionLayout from "@layouts/components/SectaionLayout";

const Home = () => {
  const { state, dispatch } = ProductReducer();

  return (
    <Base>
      <div className="section">
        <div className="container relative">
          <SectaionLayout style="px-16 py-12">
            <h1 className="mb-8  ">
              Website cost <span className="text-primary">calculator</span>
            </h1>
            <p>
              The website cost calculator app helps you estimate the different
              costs associated with a website, including: website design,
              website content, and website functionality. ‍‍‍
            </p>
          </SectaionLayout>

          <ProjectCategory dispatch={dispatch} state={state} />

          {/* page section */}

          <PageCount dispatch={dispatch} state={state} />
          {/* content section */}
          {state.isDevelopment && state.development.development ? (
            <Content dispatch={dispatch} state={state} />
          ) : state.isCustomization ? (
            <Content dispatch={dispatch} state={state} />
          ) : state.development.design &&
            !state.development.development ? null : (
            <Content dispatch={dispatch} state={state} />
          )}
          {/* adon section */}
          {state.isDevelopment && state.development.development ? (
            <Adon dispatch={dispatch} state={state} />
          ) : state.isCustomization ? (
            <Adon dispatch={dispatch} state={state} />
          ) : state.development.design &&
            !state.development.development ? null : (
            <Adon dispatch={dispatch} state={state} />
          )}
          <section className={` fixed bottom-0 left-0  z-30  w-full `}>
            <div className="container">
              <div className="shadow-[0px 0px 19px 0px #0000001a] rounded-md bg-[#2f3133] px-2 py-4">
                <h2 className="h5 mr-2 text-right font-normal">
                  Your total cost:{" "}
                  <span className="h4 my-4 rounded-sm bg-secondary px-12 py-2 text-right font-[300] text-primary ">
                    $
                    {state.isDevelopment
                      ? state.development.prize
                      : state.isCustomization
                      ? state.customization.prize
                      : 0}
                  </span>
                </h2>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
