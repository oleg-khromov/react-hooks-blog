const Main = ({ children, ...rest }) => {
  return (
    <main>
      <div className="container" props={rest}>{children}</div>
    </main>
  );
};

export default Main;
