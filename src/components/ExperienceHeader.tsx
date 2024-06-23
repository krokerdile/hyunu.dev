function ExperienceHeader({
  title,
  period,
  description,
  titleSize = 'text-lg',
}: {
  title: string;
  titleSize?: string;
  period: string;
  description?: string;
}) {
  return (
    <div className="flex align-middle mt-2">
      <div className="flex flex-row justify-between w-full">
        <h3 className={`${titleSize} font-bold pt-0`}>{title}</h3>
        <p className="period">{period}</p>
        <p className="period">{description}</p>
      </div>
      <span className="grow" />
    </div>
  );
}

export default ExperienceHeader;
