interface SpeakerItemProps {
  company?: string;
  name: string;
  nameEn: string;
  introduction?: string;
  introductionEn?: string;
  image: string;
  github?: string;
  twitter?: string;
  website?: string;
}

export function SpeakerItem({
  company = "", // デフォルト値を空の文字列に設定
  name,
  nameEn,
  introduction = "", // デフォルト値を空の文字列に設定
  introductionEn = "", // デフォルト値を空の文字列に設定
  image,
  github = "", // デフォルト値を空の文字列に設定
  twitter = "", // デフォルト値を空の文字列に設定
  website = "", // デフォルト値を空の文字列に設定
}: SpeakerItemProps) {
  return (
    <div className="w-full sm:w-1/2 p-2 lg:p-3">
      <div className="p-3 rounded-lg h-full bg-white md:p-5">
        <div className="flex items-center gap-3">
          <img
            src={image}
            className="max-w-full rounded-lg"
            alt={name}
            width="90"
            height="90"
          />
          <div className="">
            {company && <p className="text-xs font-bold mb-1">{company}</p>}
            <h4 className="text-lg font-extrabold">
              {name}
              <span className="text-xs">氏</span>
            </h4>
            <p className="text-xs">{nameEn}</p>
            <ul className="flex flex-wrap gap-2">
              {github && <li class="mt-2"><a target="_blank" href={github}><i class="fab fa-github"></i></a></li>}
              {twitter && <li class="mt-2"><a target="_blank" href={twitter}><i class="fab fa-twitter"></i></a></li>}
              {website && <li class="mt-2"><a target="_blank" href={website}><i class="fas fa-globe"></i></a></li>}
            </ul>
          </div>
        </div>
        <div>
          {introduction && <p className="text-sm mt-3 break-words whitespace-pre-wrap">{introduction}</p>}
          {introductionEn && <p className="text-xs mt-2 break-words whitespace-pre-wrap">{introductionEn}</p>}
        </div>
      </div>
    </div>
  );
}
