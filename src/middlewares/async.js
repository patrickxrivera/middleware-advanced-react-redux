const Async = ({ dispatch }) => {
  return (next) => (action) => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload.then((resp) => {
      const newAction = { ...action, payload: resp };
      dispatch(newAction);
    });
  };
};

export default Async;
