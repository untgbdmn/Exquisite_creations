import { useTranslation } from "react-i18next"

export default function AboutPage() {
    const { t } = useTranslation();
    return (
        <div className="py-20 relative">
            <div className="bloob_1 left-10"></div>
            <div className="grid grid-cols-2 grid-rows-2 py-10 gap-5">
                <div className="row-span-2 z-10 p- glass__effect p-5 border dark:border-white/10 rounded-full">
                    {t('tentangsaya')}
                    <p className="">
                        Saya adalah lulusan SMK dengan jurusan Teknik Komputer dan Jaringan, di mana saya berhasil menyelesaikan studi saya dengan predikat yang baik. Selama masa pendidikan, saya mendapatkan kesempatan berharga untuk menjalani program Praktek Kerja Lapangan (PKL) di bidang networking fiber optik, yang tidak hanya memperdalam pengetahuan saya tentang infrastruktur jaringan, tetapi juga memberikan pengalaman langsung dalam menerapkan teori yang telah saya pelajari di kelas.
                    </p>
                </div>
                <div className="border z-10">
                    {t('riwayatpendidikan')}
                </div>
                <div className="border z-10">
                    {t('pengalamankerja')}
                </div>
            </div>
        </div>
    )
}
