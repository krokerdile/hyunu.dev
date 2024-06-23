const iconMap: { [key in 'github' | 'tistory' | 'linkedin']: string } = {
  github: './assets/github.png',
  tistory: './assets/tistory.png',
  linkedin: './assets/linkedIn.png',
};

const getLinkType = (url: string) => {
  if (url.includes('github.com')) return 'github';
  if (url.includes('tistory.com')) return 'tistory';
  if (url.includes('linkedin.com')) return 'linkedin';
  return 'default';
};

interface LinkItemProps {
  url: string;
  label: string;
}

const LinkItem = ({ url, label }: LinkItemProps) => {
  const linkType = getLinkType(url);
  const iconSrc = iconMap[linkType];

  return (
    <a
      href={url}
      className="flex items-center space-x-1 mb-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={iconSrc} alt={linkType} className="w-4 h-4 rounded-md" />
      <span className="hover:underline text-black">{label}</span>
    </a>
  );
};

export default LinkItem;
