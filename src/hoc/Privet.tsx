const Private = (WrappedComponent: any, permissions?:string[]) => {
  const FuncComponent = ({ children, ...props }: any) => {

    return (
      <WrappedComponent {...props}>{children}</WrappedComponent>
    )
  };

  return FuncComponent;
};

export default Private;