const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""} px-4 md:px-0 space-y-4`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className=" text-2xl font-bold !leading-tight text-black dark:text-white md:text-xl lg:text-4xl">
          {title}
        </h2>
       {paragraph && <p className="text-base !leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
          {paragraph}
        </p>}
      </div>
    </>
  );
};

export default SectionTitle;
