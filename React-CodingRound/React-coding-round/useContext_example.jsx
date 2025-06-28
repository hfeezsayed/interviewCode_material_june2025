//1. create context
const GlobalLanguageContext = React.createContext(null);

const App = () => {
  const contextValue = { language: "EN" };

  return (
    //2. connect with all the child components under Provider
    //One time Config - Here in Provider's value prop you can pass
    //the value of your context global variable
    <GlobalLanguageContext.Provider value={contextValue}>
      <Child />
    </GlobalLanguageContext.Provider>
  );
};

const Child = () => {
  //3. use variable
  const { language } = React.useContext(GlobalLanguageContext);
  return <div>Application Language: {language}</div>;
};
