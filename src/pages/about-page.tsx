import { useTranslation } from "react-i18next"

export default function AboutPage() {
    const { t } = useTranslation();
    return (
        <div className="py-20 relative">
            <div className="bloob_1 left-72"></div>
            <div className="p-3 w-fit pr-20 pl-5 rounded glass__effect z-10 relative">
                <h1 className="text-2xl font-bold text__gradient z-10">{t('kenalsayalebihdekat')}</h1>
                <p className="text-sm font-normal z-10">{t('mengenallebih')}</p>
            </div>
            <div className="mt-5 grid grid-cols-2 grid-rows-2 gap-5 relative">
                <div className="border-r row-span-2 rounded p-4">
                    <h2 className="text-xl dark:text-purple-400 text-blue-400 font-bold">{t('tentangsaya')}</h2>
                    <p className="text-sm font-normal">{t('subtitletentangsaya')}</p>
                    <div className="mt-3 text-sm flex flex-col gap-2">
                    <span className="">{t('texttentangsaya')}</span>
                    <span className="">{t('texttentangsaya2')}</span>
                    </div>
                </div>
                <div className="border">
                    <h2 className="text-xl font-bold">{t('tentangsaya')}</h2>
                    <p className="text-sm font-normal">{t('deskripsimengenai')}</p>
                </div>
                <div className="border">
                    <h2 className="text-xl font-bold">{t('tentangsaya')}</h2>
                    <p className="text-sm font-normal">{t('deskripsimengenai')}</p>
                </div>
            </div>
        </div>
    )
}
