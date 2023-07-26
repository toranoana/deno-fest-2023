interface SpeakerItemProps {
  company?: string;
  name: string;
  nameEn: string;
  introduction?: string;
  introductionEn?: string;
  image: string;
}

const SpeakerItem: React.FC<SpeakerItemProps> = ({
  company = "", // デフォルト値を空の文字列に設定
  name,
  nameEn,
  introduction = "", // デフォルト値を空の文字列に設定
  introductionEn = "", // デフォルト値を空の文字列に設定
  image,
}) => {
  return (
    <div className="w-full sm:w-1/2 p-2 lg:p-3">
      <div className="p-3 rounded-lg h-full bg-white md:p-5">
        <div className="flex flex-wrap items-center gap-3">
          <img
            src={image}
            className="max-w-full rounded-lg"
            alt={name}
            width="90"
            height="90"
          />
          <div className="">
            {company && (
              <p className="text-xs font-bold">{company}</p>
            )}
            <h4 className="text-lg font-extrabold">
              {name}
              <span className="text-xs">氏</span>
            </h4>
            <p className="text-xs">{nameEn}</p>
          </div>
        </div>
        <div>
          {introduction && (
            <p className="text-sm mt-3">{introduction}</p>
          )}
          {introductionEn && (
            <p className="text-xs mt-2">{introductionEn}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerItem;
