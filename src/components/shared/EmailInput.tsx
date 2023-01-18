const EmailInput = () => {
  return (
    <div className="col-span-12 flex flex-col">
      <label className="">Email</label>
      <input
        className="mt-2 p-2 border rounded bg-transparent border-violet-400"
        type="email"
      />
    </div>
  );
};

export default EmailInput;
