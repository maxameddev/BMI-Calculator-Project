import { BMI_CATEGORIES } from '../utils/bmi';

export const HEALTH_ADVICE = {
  underweight: {
    title: 'Talooyin Miisaan Yar',
    tips: [
      'Cunto nafaqo leh cunto maalin kasta',
      'Borotiin badan — hilib, ukun, digir, iyo kalluun',
      'Jimicsi murqaha dhisa si aad u kordhiso miisaanka si caafimaad leh',
      'La tasho dhakhtar haddii miisaankaagu uu sii yaraanayo',
    ],
    risks: [
      'Difaac jirka oo daciif ah — jirku si fudud ayuu u qabtaa cudurrada',
      'Nafaqo darro — jirku ma helo waxyaabaha uu u baahan yahay',
      'Daal joogto ah iyo tamar la\'aan',
      'Murqo lumis iyo lafaha oo daciif noqda',
    ],
    explanation:
      'Miisaankaagu wuu ka hooseeyaa heerka caafimaadka leh. Tani waxay muujin kartaa in jirkaagu u baahan yahay nafaqo badan. Waa muhiim inaad cunto dheellitiran cunto oo aad la tashato dhakhtar haddii arrintu sii socoto.',
    statusMessage: 'Miisaankaagu wuu ka hooseeyaa heerka caafimaadka leh.',
  },
  normal: {
    title: 'Hambalyo! Miisaankaagu waa Caadi',
    tips: [
      'Hambalyo — miisaankaagu waa heerka caafimaadka leh!',
      'Ilaali miisaankaaga adigoo cunto caafimaad leh cunaynaya',
      'Jimicsi joogto ah samee ugu yaraan 30 daqiiqo maalintii',
      'Cunto dheellitiran cunto — khudaar, miro, borotiin, iyo hadhuudh',
      'Cab biyo badan — ugu yaraan 8 koob maalintii',
    ],
    risks: [],
    explanation:
      'Miisaankaagu wuxuu ku jiraa qaybta caafimaadka leh. Sii wad caadooyinka caafimaadka leh si aad u ilaaliso heerkan.',
    statusMessage: 'Miisaankaagu waa heerka caafimaadka leh. Sii wad hab nololeedkaaga caafimaadka leh!',
  },
  overweight: {
    title: 'Talooyin Miisaan Badan',
    tips: [
      'Yaree sonkorta iyo cuntooyinka warshadeysan',
      'Socod maalinle ah samee — ugu yaraan 30 daqiiqo',
      'Jimicsi joogto ah ku dar noloshaada',
      'Cunto caafimaad leh dooro — khudaar iyo borotiin badan',
      'Hurdo fiican seexo — 7-8 saacadood habeenkii',
    ],
    risks: [
      'Sonkorow nooca 2aad — khatarta ayaa kordheysa',
      'Dhiig kar sare (hypertension)',
      'Wadne xanuun iyo dhibaatooyin wadnaha',
      'Dhibaatooyin isku-darka ah oo caafimaad la xiriira',
    ],
    explanation:
      'Miisaankaagu wuu ka sarreeyaa heerka caafimaadka leh. Tani waxay kordhin kartaa khatarta cudurrada qaarkood, laakiin isbeddelo yaryar ayaa saameyn weyn yeelan kara.',
    statusMessage: 'Miisaankaagu wuu ka sarreeyaa heerka caafimaadka leh.',
  },
  obese: {
    title: 'Talooyin Buurnaan',
    tips: [
      'Bilaaw qorshe miisaan dhimis oo macquul ah',
      'La tasho dhakhtar ama khabiir nafaqo si aad u hesho qorshe sax ah',
      'Jimicsi tartiib ah bilaaw — socod, dabaasha, ama yoga',
      'Cunto xaddidan oo nafaqo leh cunto — ka fogow cuntooyinka sonkorta badan',
    ],
    risks: [
      'Wadne xanuun — khatarta ayaa aad u sarreysa',
      'Stroke — xinjirowga wadnaha ama maskaxda',
      'Sonkorow nooca 2aad',
      'Dhiig kar sare iyo dhibaatooyin neef-mareenka',
    ],
    explanation:
      'Miisaankaagu wuxuu muujinayaa heer buurnaan. Tani waa arrin caafimaad oo halis ah oo u baahan in si dhab ah loo qaato. La tasho dhakhtar si aad u hesho qorshe caafimaad oo ku habboon.',
    statusMessage: 'Miisaankaagu wuxuu muujinayaa heer buurnaan. Fadlan la tasho dhakhtar.',
  },
};

export const EDUCATION_CONTENT = {
  whatIsBmi: {
    title: 'Waa maxay BMI?',
    sections: [
      {
        heading: 'Qeexitaan',
        content:
          'BMI (Body Mass Index) waa tiro lagu cabbiro miisaanka jirka marka la eego dhererka. Waxaa lagu xisaabiyaa iyadoo miisaanka (kg) loo qaybiyo dhererka laba jibaaran (m²).',
      },
      {
        heading: 'Muhiimadda BMI',
        content:
          'BMI wuxuu ka caawiyaa in la ogaado haddii miisaankaagu uu ku habboon yahay dhererkaaga. Waa qalab fudud oo loo isticmaalo in lagu qiimeeyo khatarta cudurrada la xiriira miisaanka.',
      },
      {
        heading: 'Sidee u shaqeeyaa?',
        content:
          'Markaad geliso dhererkaaga iyo miisaankaaga, xisaabiyuhu wuxuu xisaabiyaa BMI-gaaga wuxuuna kuu sheegaa qaybta aad ku jirto — miisaan yar, caadi, miisaan badan, ama buurnaan.',
      },
      {
        heading: 'Xusuusin Muhiim ah',
        content:
          'BMI waa qiyaas guud oo keliya. Ma tixgelinayo murqaha, da\'da, jinsiga, ama qaabka jirka. Ma beddelayo baaritaanka dhakhtarka ama talada caafimaad ee khabiirka.',
      },
    ],
  },
  categories: {
    title: 'Qaybaha BMI',
    items: Object.values(BMI_CATEGORIES).map((cat) => ({
      id: cat.id,
      label: cat.labelSomali,
      labelEn: cat.label,
      range: cat.max === 50 ? `${cat.min}+` : `${cat.min} - ${cat.max}`,
      description: getCategoryDescription(cat.id),
    })),
  },
  healthyWeight: {
    title: 'Miisaanka Caafimaadka Leh',
    content:
      'Miisaanka caafimaadka leh wuxuu ku xiran yahay dhererkaaga. Guud ahaan, qof dhererkiisu yahay 170 cm wuxuu u baahan yahay miisaan u dhexeeya 53.5 kg ilaa 72 kg si uu u helo BMI caadi ah (18.5 - 24.9).',
    note: 'Isticmaal xisaabiyaha sare si aad u hesho miisaanka caafimaadka leh ee adiga ku habboon.',
  },
  risks: {
    title: 'Dhibaatooyinka Miisaanka',
    sections: [
      {
        heading: 'Miisaan Yar (Underweight)',
        items: [
          'Nafaqo darro iyo difaac jirka oo daciif ah',
          'Lafaha oo daciif noqda (osteoporosis)',
          'Dhibaatooyin taranka iyo caadooyinka caadada',
          'Daal joogto ah iyo tamar la\'aan',
        ],
      },
      {
        heading: 'Miisaan Badan (Overweight)',
        items: [
          'Sonkorow nooca 2aad',
          'Dhiig kar sare',
          'Dhibaatooyin wadnaha',
          'Dhibaatooyin isku-darka ah',
        ],
      },
      {
        heading: 'Buurnaan (Obese)',
        items: [
          'Wadne xanuun — khatarta waa 2-3 jeer ka badan',
          'Stroke iyo cudurrada maskaxda',
          'Sonkorow nooca 2aad',
          'Kansarka qaarkood',
          'Dhibaatooyin neef-mareenka iyo hurdada (sleep apnea)',
          'Dhibaatooyin lafaha iyo suuxdinta',
        ],
      },
    ],
  },
  generalTips: {
    title: 'Talooyin Caafimaad Guud',
    items: [
      'Cunto dheellitiran cunto — khudaar, miro, borotiin, iyo hadhuudh buuxa',
      'Cab biyo badan — ugu yaraan 8 koob maalintii',
      'Jimicsi joogto ah samee — ugu yaraan 150 daqiiqo toddobaadkii',
      'Hurdo ku filan seexo — 7-9 saacadood habeenkii',
      'Ka fogow sigaar cabista iyo cabitaannada khamriga ah',
      'Baaritaan caafimaad joogto ah samee',
      'Maaree walbahaarka adigoo jimicsi ama feker samaynaya',
      'Cuntooyinka warshadeysan iyo sonkorta badan yaree',
    ],
  },
  disclaimer: {
    title: 'Digniin',
    content:
      'BMI waa qiyaas guud oo keliya. Ma beddelayo talada dhakhtarka. Haddii aad qabto walwal caafimaad, fadlan la tasho khabiir caafimaad oo aqoon leh.',
  },
};

function getCategoryDescription(id) {
  const descriptions = {
    underweight:
      'BMI ka hooseeya 18.5. Waxay muujin kartaa nafaqo darro ama dhibaato caafimaad. La tasho dhakhtar.',
    normal:
      'BMI u dhexeeya 18.5 iyo 24.9. Waa heerka caafimaadka leh. Sii wad caadooyinka caafimaadka leh.',
    overweight:
      'BMI u dhexeeya 25 iyo 29.9. Waxay kordhin kartaa khatarta cudurrada. Isbeddelo yaryar ayaa caawin kara.',
    obese:
      'BMI 30 ama ka sarreeya. Waa arrin caafimaad oo halis ah. La tasho dhakhtar si aad u hesho qorshe sax ah.',
  };
  return descriptions[id] || '';
}

export function getAdviceForCategory(categoryId) {
  return HEALTH_ADVICE[categoryId] || HEALTH_ADVICE.normal;
}
