const ErrorMessages = ({ errors }) => {
  const messages = Object.keys(errors).map((name) => {
    const message = errors[name].join(" ");
    return `${name} ${message}`;
  });

  return (
    <ul className="error">
      {messages.map((message) => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  );
};

export default ErrorMessages;
