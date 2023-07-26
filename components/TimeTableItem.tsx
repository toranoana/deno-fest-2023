interface TimeTableItemProps {
  time: string;
  title: string;
  description?: string;
  speakerName?: string;
  speakerImage?: string;
}

const TimeTableItem: React.FC<TimeTableItemProps> = ({
  time,
  title,
  description = "", // デフォルト値を空の文字列に設定
  speakerName = "", // デフォルト値を空の文字列に設定
  speakerImage = "", // デフォルト値を空の文字列に設定
}) => {
  return (
    <div className="flex flex-col gap-1 flex-1 md:flex-row md:items-center">
      <span className="w-28 font-bold">{time}</span>
      <div className="p-4 rounded-lg bg-white shadow flex-1">
        <h4 className="font-bold">{title}</h4>
        {description && (
          <p className="text-sm mt-2">{description}</p>
        )}
        <div className="flex justify-end items-center">
          {speakerName && (
            <span className="text-xs font-bold">{speakerName}</span>
          )}
          {speakerImage && (
            <img
              src={speakerImage}
              className="max-w-full rounded-lg ml-3"
              alt={speakerName}
              width="40"
              height="40"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeTableItem;
