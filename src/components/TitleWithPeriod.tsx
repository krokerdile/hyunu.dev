function TitleWithPeriod({
  title,
  period,
  titleSize = 'text-lg',
}: {
  title: string;
  titleSize?: string;
  period: string;
}) {
  return (
    <div className="flex align-middle mt-2">
      <div className="flex flex-row justify-between w-full">
        <h3 className={`${titleSize} font-bold pt-0`}>{title}</h3>
        <p className="period">{period}</p>
      </div>
      <span className="grow" />
    </div>
  );
}

export default TitleWithPeriod;
