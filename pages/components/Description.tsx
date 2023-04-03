type Props = {};

const Description = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-5xl font-bold capitalize">Name</h1>
      <h2 className="text-2xl capitalize">Title</h2>
      <h3 className="text-lg font-bold">Description</h3>
    </div>
  );
};

export default Description;
