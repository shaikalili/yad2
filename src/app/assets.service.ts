import { ElementRef, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Asset } from "src/asset.model";
import { Property } from "./property.model";

@Injectable({ providedIn: 'root' })
export class AssetsService {
    selectedAsset: Asset;
    advancedSearch = new Subject<boolean>();
    photoIndex: number;
    eventDate=new Subject<Date>();
    search=new Subject<Asset[]>();
    likedAssets:Asset[]=[];
    likedCount=new Subject<number>();
    assets: Asset[] = [
        new Asset('אלי כהן 16', 'דירות', 'דירה', 6, '2,499,000', new Property(true, true, true, true, true, false, false, false,
            true, false, true), 4, 100, '', 'דירה צפון מזרחית. משופצץ מן היסוד ומעוצבת. חדר השירותים הראשי עבר שיפוץ מלא לפני כ5 חודשים. סוויטת הורים עם שירותים ומקלחון גדול. מרפסת עם נקודת מים וגז. נקודות מולטימדיה ורשת אינטרנט בכל חדר. חשמל תלת פאזי עם המון שקעים פזורים ברחבי הדירה. מטבח גדול ורחב מרגבה. מזגן מרכזי בשטח הסלון והמטבח + מזגנים עיליים בכל חדר - כולם ניתנים גם מהטלפון. חניה גדול, מחסן בקומת הקרקע הקרוב לחניה. הכי שווה באלי כהן',
            'https://img.yad2.co.il/Pic/202104/07/2_1/o/y2_1_09365_20210407110417.jpeg?l=7&c=6&w=1024&h=768', 'חיפה', 'אבא-אבן', ['https://img.yad2.co.il/Pic/202102/09/2_1/o/y2_1_04477_20210209130242.jpeg?l=7&c=6&w=1024&h=768',
            'https://img.yad2.co.il/Pic/202102/09/2_1/o/y2_7_03470_20210209130259.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202102/09/2_1/o/y2_5_07329_20210209130244.jpeg?l=7&c=6&w=1024&h=768',
            'https://img.yad2.co.il/Pic/202102/09/2_1/o/y2_4_06391_20210209130257.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202102/09/2_1/o/y2_3_08524_20210209130250.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202102/09/2_1/o/y2_2_06273_20210209130237.jpeg?l=7&c=6&w=1024&h=768'], 'רועי', '052-2225687'),
        new Asset('אבנר חי שאקי 1', 'דירות', 'דירה', 3, '1,756,000', new Property(
            true, true, true, false, false,
            false, false, false, true, true, false)
            , 4, 135, 'מיידי', 'דירה מהממת במורדות גילה. חדשה מקבלן! פינתית, מרווחת, מושקעת ומשודרגת עד הפרט האחרון. כיוונים מצויינים- דרום מערב, מרפסת גדולה, היקפית ובחלקה מקורה. חימום תת ריצפתי, 2 חניות נפרדות, רשתות בכל הדירה, מחסן. מטבח היי גלוס יוקרתי. נוף עוצר נשימה! לא למתווכים!', "https://img.yad2.co.il/Pic/202104/08/2_1/o/y2_1_02717_20210408180455.jpeg?l=7&c=6&w=1024&h=768", "ירושלים", "בית וגן", ['https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_7_01203_20210410190406.jpeg?l=7&c=6&w=1024&h=768',
            'https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_5_03112_20210410190403.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_4_09268_20210410190401.jpeg?l=7&c=6&w=1024&h=768',
            'https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_3_01050_20210410190400.jpeg?l=7&c=6&w=1024&h=768'], 'אלעד', '053-5681234'),
        new Asset('הפורצים 24', 'דירות', 'דירה', 3, '2,500,000', new Property(
            false, true,
            true, true, false, false, false, true, true, true, true), 4,
            112, 'מיידי', 'נכס מושקע מאוד למהירי החלטה בלבד 1,250,00 במקום 1,320,000 רווח בטוח של 70 אלף לחוץ לכסף פינויי מידי מחיר מתחת לשוק עד 15.5 בלבד!! פרטים בנייד מחיר כולל 5 מזגנים+ מ.חשמל נוספים.', "https://img.yad2.co.il/Pic/202104/01/2_1/o/y2_1_06891_20210401090433.jpeg?l=7&c=6&w=1024&h=768", 'חולון', 'תל גיבורים', ['https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_1_01001_20210410190456.jpeg?l=7&c=6&w=1024&h=768',
            'https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_10_05273_20210410190444.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_9_01522_20210410190409.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_8_05798_20210410190407.jpeg?l=7&c=6&w=1024&h=768'], 'מתן', '054-1112244'),
        new Asset('גאולים 48', 'דירות', 'דירת-גן', 5, '3,250,000', new Property(true, true, false, false, false
            , false, false, true, true, true, true), 'קומת קרקע', 180,
            'כניסה מיידית',
            'ב c Jerusalem דירה ענקית יפיפיה148מטר מרווחת חמישה חדרים פלוס משרד!!!!,מוכנה לכניסה מיידית אחרי צבע כמו חדשה!!יחידת הורים, ויחידת מתבגר! נוף פנורמי מהמם!!יונקרס, אפשרי להפוך ל4/5 חדרים או לחלק את הדירה,חדר כושר בבניין,הסרטון לנוף צולם מהדירה!! 2 חניות ומחסן!לא לתיווך', 'https://img.yad2.co.il/Pic/202104/07/2_1/o/y2_5_09524_20210407110422.jpeg?l=7&c=6&w=1024&h=768', 'באר-שבע', 'רמות', [
            'https://img.yad2.co.il/Pic/202104/02/2_1/o/y2_4_09363_20210402170419.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202104/02/2_1/o/y2_3_02506_20210402170449.jpeg?l=7&c=6&w=1024&h=768',
            'https://img.yad2.co.il/Pic/202104/02/2_1/o/y2_2_05379_20210402170443.jpeg?l=7&c=6&w=1024&h=768'
        ], 'אביבה', '055-8889966'),
        new Asset('ההסתדרות 5', 'דירות', 'דירה', 2, '1,000,000', new Property(true, true, true, true, true,
            true, true, true, true, true, true), 3, 51, 'מיידי', 'משופץ לגמרי מושלם ריהוט מלאמרחק הליכה רבע שעה מהיםצמוד לסטאר סנטר',
            'https://img.yad2.co.il/Pic/202003/01/2_1/o/y2_1_05824_20200301210317.jpeg?l=7&c=3&w=195&h=117', 'אשדוד', 'רובע א', ['https://img.yad2.co.il/Pic/202101/18/2_1/o/o2_1_1_07129_20210118230146.jpg?l=7&c=6&w=1024&h=768',
            'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_10_07701_20210307100339.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_9_02373_20210307100320.jpeg?l=7&c=6&w=1024&h=768',
            'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_8_07050_20210307100303.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_7_06638_20210307100335.jpeg?l=7&c=6&w=1024&h=768',
            'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_6_07096_20210307100320.jpeg?l=7&c=6&w=1024&h=768'], 'שלום', '052-1215544'),
        new Asset('שלמה המלך 33', 'דירות', 'דירה', 4.5, '750,000', new Property(
            false, false, true, true, false, true, false, false, false, false, true), 2, 130, 'מיידי', 'קומה 2 (מתוך 3). יחידת הורים עם מקלחת ושירותים. 2 חדרי ילדים. סלון מטבח פינת אוכל. 2 מקלחות. 3 שירותים. 3 כיווני אוויר. מחסן וחניה. מיזוג. קרוב לבתי ספר, גני ילדים ולקופ"ח',
            'https://img.yad2.co.il/Pic/202104/06/2_1/o/y2_1_01614_20210406130425.jpeg?l=7&c=3&w=195&h=117', 'טבריה',
            'רמת כינרת'
            , ['https://img.yad2.co.il/Pic/202104/25/2_1/o/y2_1_03105_20210425020411.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202104/21/2_1/o/y2_10_06474_20210421120457.jpeg?l=7&c=6&w=1024&h=768',
                'https://img.yad2.co.il/Pic/202104/21/2_1/o/y2_9_07735_20210421120434.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202104/21/2_1/o/y2_8_08931_20210421120425.jpeg?l=7&c=6&w=1024&h=768'], 'רז', '054-1234221'),
        new Asset('מדרגות זרובבל 6', 'דירות', 'דו-משפחתי', 4.5, '1,880,000', new Property(
            true, true, false, true, false, false, true, true, false, false, true), 'קומת קרקע', 120
            , 'מיידי', 'בבית דו-משפחתי - דירה יחידה על הקומה , מרווחת מאוד, כניסה נפרדת. הבית מוקף בטבע, שקט מאוד, פרטי ומבודד. חצר וחורשה מסביב. שכונה מבוקשת. סלון ענק עם נוף מדהים, 3 חדרי שינה, מטבח גדול, 2 מרפסות, 2 שירותים. מחסן ומקלט. 120 מ"ר. הדירה שופצה לאחרונה. מרוהטת ומאובזרת במלואה',
            'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_1_02692_20210307230309.jpeg?l=7&c=3&w=195&h=117', 'עכו', 'שמבור',
            ['https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_10_02852_20210307230347.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_9_04496_20210307230320.jpeg?l=7&c=6&w=1024&h=768',
                'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_8_07246_20210307230309.jpeg?l=7&c=6&w=1024&h=768', 'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_7_08360_20210307230303.jpeg?l=7&c=6&w=1024&h=768',
                'https://img.yad2.co.il/Pic/202103/07/2_1/o/y2_6_08163_20210307230354.jpeg?l=7&c=6&w=1024&h=768'], 'נתנאל', '0505644978'),
        new Asset('יחזקאל דנין 8', 'דירות', 'דירה', 4, '1,690,000', new Property(
            false, false, false, false, false, false, false, true, true, true, true), 4, 100, 'כניסה מיידית', 'ללא תיווך.הזדמנות בשכונה ורחוב מבוקש יחזקיאל דנין.רחוב מבודד ושקט בכל שעות היום.דק הליכה מבתי ספר,גני ילדים, גינות ציבוריות,מרכזי קניות, כופות חולים.7דק הליכה מהים.תחבורה ציבורית נגישה(הרכבת הכלה בתעליך).בנין שעבר שיפוץ כללי וחיזוק מבנה.2 דירות בקומה ושכנים כמו פעם. הדירה 4 חדרים.עברה שיפוץ כללי.מיזוג.חנייה משותפת לכל דיירי הבנין.מחסן גדול לדיירי הבנין בקומת קרקע. חזית 3.להיכנס ולגור מחיר מבוקש',
            'https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_1_02857_20210410180411.jpeg?l=7&c=3&w=195&h=117', 'בת-ים', 'לב העיר', [
            'https://img.yad2.co.il/Pic/202104/10/2_1/o/y2_6_06882_20210410180436.jpeg?l=7&c=6&w=1024&h=768'
        ], 'אור', '0508566454'),
        new Asset('לילינבלום 11','צמודי קרקע','פרטי/קוטג',5,'2,190,000',new Property(
            true,true,false,true,true,true,true,true,true,false,true
        ),2,165,'מיידי','למכירה קוטג, 6 חדרים, בשכונת האוצר המבוקשת , 165 מ"ר בנוי, שטח מגרש 250 מ"ר',
        'https://img.yad2.co.il/Pic/202103/02/2_5/o/o2_5_1_02742_20210302110330.jpg?l=7&c=3&w=195&h=117','תל אביב',
        'שכונת האוצר',['https://img.yad2.co.il/Pic/202101/06/2_5/o/o2_5_3_07296_20210106090114.jpg?l=7&c=6&w=1024&h=768',
    'https://img.yad2.co.il/Pic/202103/02/2_5/o/o2_5_2_02701_20210302110330.jpg?l=7&c=6&w=1024&h=768'],'איוב שובייב','052664848'),
    new Asset ('שמעון בן צבי 7','דירות','גג/פנטהאוז',4,'4,600,000',new Property(true,true,true,false,false,false,
        false,false,false,true,false),2,147,'מיידי','למכירה בשמעון בן צבי הדירה הכי נדירה ב"שטח 9", מיני פנטהאוז במתחם איכותי. 4 חדרים גדולה בנויה נהדר ,חדרי שינה מרווחים וכולל 2.5 חדרי רחצה. שימו לב לדירה מרפסת שמש בגודל 31 מטר ! פתוחה ללא גג ! מיקום הדירה מהטובים שיש בעיר , צמוד לפארק , נגיעה מהקאנטרי וקניון גבעתיים.',
        'https://img.yad2.co.il/Pic/202103/18/2_5/o/y2_8_wrBECYdZPo_20210318.jpg?l=7&c=3&w=195&h=117','גבעתיים','שטח 9',
        ['https://img.yad2.co.il/Pic/202103/18/2_5/o/y2_2_PgNtnKEh51_20210318.jpg?l=7&c=6&w=1024&h=768','https://img.yad2.co.il/Pic/202103/18/2_5/o/y2_3_kfo6DsqTmI_20210318.jpg?l=7&c=6&w=1024&h=768',
        'https://img.yad2.co.il/Pic/202103/18/2_5/o/y2_6_50uzJbYAkS_20210318.jpg?l=7&c=6&w=1024&h=768','https://img.yad2.co.il/Pic/202103/18/2_5/o/y2_7_DabpxgXVxd_20210318.jpg?l=7&c=6&w=1024&h=768'
    ,'https://img.yad2.co.il/Pic/202103/18/2_5/o/y2_5_IRJbtdM4H5_20210318.jpg?l=7&c=6&w=1024&h=768'],'עופר מזרחי','0536668748'),
    new Asset('המלך דוד 4','דירות','סטודיו/לופט',1.5,'450,000',new Property(false,false,false,false,false,
        false,false,false,false,true,true),3,35,'מיידי','דירה משופצת מהיסוד כולל כל המערכות חשמל ומים חדשים, מרוהטת קומפלט עם כל הציוד והאבזור ברמה גבוהה',
        'https://img.yad2.co.il/Pic/202009/25/2_1/o/o2_1_1_08979_20200925160937.jpg?l=7&c=3&w=195&h=117','קרית ים',
        'קרית ים ג',['https://img.yad2.co.il/Pic/202009/25/2_1/o/o2_1_5_06228_20200925160953.jpg?l=7&c=6&w=1024&h=768','https://img.yad2.co.il/Pic/202009/25/2_1/o/o2_1_4_06757_20200925160949.jpg?l=7&c=6&w=1024&h=768',
    'https://img.yad2.co.il/Pic/202009/25/2_1/o/o2_1_3_07640_20200925160938.jpg?l=7&c=6&w=1024&h=768','https://img.yad2.co.il/Pic/202009/25/2_1/o/o2_1_2_08991_20200925160944.jpg?l=7&c=6&w=1024&h=768'],
    'מאור','0505888997'),
    new Asset('ויטל 17','דירות','סטודיו/לופט',1.5,'1,750,000',new Property(true,false,true,true,false,false,
        false,false,true,true,true),3,35,'מיידי','בבנין ייחודי שהוסב ממלאכה למגורים. סטודיו מצוין. גלריית שינה, תקרות גבוהות. מעלית בבנין. מיקום סופר מבוקש בשכונה. מעולה להשקעה !',
        'https://img.yad2.co.il/Pic/202012/23/2_5/o/o2_5_1_03508_20201223151227.jpg?l=7&c=3&w=195&h=117','תל אביב','פלורנטין',
        ['https://img.yad2.co.il/Pic/202012/23/2_5/o/o2_5_5_02689_20201223151220.jpg?l=7&c=6&w=1024&h=768','https://img.yad2.co.il/Pic/202012/23/2_5/o/o2_5_4_09015_20201223151210.jpg?l=7&c=6&w=1024&h=768'],
        'מתן','0548484555'),
        new Asset('עליית הנוער 50','דירות','דירה',4,'2,750,000',new Property(true,true,true,true,true,true,true
            ,true,true,true,true),4,85,'מיידי','נכס מספר: 5833, באזור פסטורלי ושקט ברחוב עליית הנוער, שכונת רמות. דירת 4 חדרים, 85 מ"ר. משופצת, 3 חדרי שרותים, מרפסת, מזגן, ממ"ד',
            'https://img.yad2.co.il/Pic/202103/22/2_5/o/soft_2_5_1_08373_20210322140350.jpg?l=7&c=3&w=195&h=117','ירושלים',
            'רמות',['https://img.yad2.co.il/Pic/202103/22/2_5/o/y2_9_CnuczKxDmO_20210322.jpg?l=7&c=6&w=1024&h=768',
        'https://img.yad2.co.il/Pic/202103/22/2_5/o/y2_8_Mjm9PSetBN_20210322.jpg?l=7&c=6&w=1024&h=768',
    'https://img.yad2.co.il/Pic/202103/22/2_5/o/y2_7_eQwt6uWBon_20210322.jpg?l=7&c=6&w=1024&h=768',
'https://img.yad2.co.il/Pic/202103/22/2_5/o/y2_6_jpi6JNVzCb_20210322.jpg?l=7&c=6&w=1024&h=768','https://img.yad2.co.il/Pic/202103/22/2_5/o/soft_2_5_5_08373_20210322140353.jpg?l=7&c=6&w=1024&h=768'],
'אלון','0545655878'),
new Asset('יוחנן הסנדלר 9','דירות','דופלקס',7,'2,350,000',new Property(
    true,true,true,true,false,false,false,false,true,true,true),3,190,'מיידי','מפרטי ללא תווך. דירת פנטהאוז דופלקס משופצת ומרהיבה שתי מפלסים 7 חדרים 4 חדרי רחצה ושרותים שתי מטבחים המשתרעים על פני כ-190 מטר מעלית, מרפסת גדולה לנוף פתוח, חנייה גדולה מאוד ואפשרות למחסן גדול',
    'https://img.yad2.co.il/Pic/202104/19/2_1/o/y2_1_01243_20210419220410.jpeg?l=7&c=3&w=195&h=117','נתניה','נאות הרצל',
    ['https://img.yad2.co.il/Pic/202104/07/2_1/o/y2_10_08016_20210407130427.jpeg?l=7&c=6&w=1024&h=768','https://img.yad2.co.il/Pic/202104/19/2_1/o/y2_7_09376_20210419220422.jpeg?l=7&c=6&w=1024&h=768',
'https://img.yad2.co.il/Pic/202104/19/2_1/o/y2_5_05803_20210419220453.jpeg?l=7&c=6&w=1024&h=768'],'נדב כהן','0544488212'
),
    ]
   
    getSelctedAsset(asset: Asset) {
        this.selectedAsset = asset;
    }
    onAdressSearch(searchInput: string) {
        let adresses: string[] = [];
        this.assets.forEach(el => {
            if (el.adress.includes(searchInput)) {
                adresses.push(el.adress.slice(0, el.adress.length - 2));
            }
        });
        return adresses;
    }
    onCitySearch(searchInput: string) {
        let city: string[] = [];
        this.assets.forEach(el => {
            if (el.city.includes(searchInput)) {
                city.push(el.city);
            }
        });
        return city;
    }
    onNieghbehoodSearch(searchInput: string) {
        let neighberhood: string[] = [];
        this.assets.forEach(el => {
            if (el.neighberhood.includes(searchInput)) {
                neighberhood.push(el.neighberhood);
            }
        });
        return neighberhood;
    }

    transformToHebrew(Words:string[]){
        let hebrewWords=[];
    Words.forEach(word=>{
       switch(word){
           case'apartment': hebrewWords.push('דירה'); 
           break;
           case 'garden-apartment':hebrewWords.push('דירת-גן'); 
           break;
           case'penthouse': hebrewWords.push('גג/פנטהאוז'); 
           break;
           case 'two-floor':hebrewWords.push('דופלקס'); 
           break;
           case 'studio':hebrewWords.push('סטודיו/לופט'); 
           break;
           case 'vila':hebrewWords.push('פרטי/קוטג'); 
           break;
           case 'two-familys':hebrewWords.push('דו-משפחתי'); 
           break;
       }
    });
    return hebrewWords;
    }
    trasformToNumber(price:string){
        let pricing='';
        for(let i=0;i<price.length;i++){
            if(price[i]!==','){
                pricing+=price[i]
            }
        }
        return pricing;
    }
    onSearch(input:ElementRef,assetTypes:string[],roomsFrom,roomsTo,min:ElementRef,max:ElementRef){
        let assetsToSearch:Asset[]=[];
        assetsToSearch=this.assets.filter
        (asset=>asset.adress.slice(0,asset.adress.length-2)===input.nativeElement.value);
        if(assetsToSearch.length<1){
        assetsToSearch=this.assets.filter
        (asset=>asset.city===input.nativeElement.value);
        }
        if(assetsToSearch.length<1){
        assetsToSearch=this.assets.filter
        (asset=>asset.neighberhood===input.nativeElement.value);
        }
        if(assetsToSearch.length<1){
          assetsToSearch=this.assets;
        }
         
        if(assetTypes.length<1||assetTypes.length>19){
          assetsToSearch=assetsToSearch;
        }
        else{
          let arrayOfTypes=[];
         assetTypes.forEach(type=>{
            assetsToSearch.forEach(asset=>{
              if(asset.subType===type){
                 arrayOfTypes.push(asset);
              }
            });
          });
          assetsToSearch=arrayOfTypes;
        }
        assetsToSearch=this.searchRooms(assetsToSearch,roomsFrom,roomsTo);
        assetsToSearch=this.searchPrice(assetsToSearch,min,max);
        return assetsToSearch;
      } 
       searchRooms(roomsArray:Asset[],roomsFrom,roomsTo){
        let numto:number;
        let numfrom:number;
        let Rooms=[];
        if(roomsFrom==='הכל') numfrom=0;
        else numfrom=+roomsFrom;
        if(roomsTo==='הכל') numto=20;
        else numto=+roomsTo;
      Rooms = roomsArray.filter(asset=>(asset.rooms>=numfrom&&asset.rooms<=numto));
       return Rooms;
      }
      searchPrice(priceArray:Asset[],minimum:ElementRef,maximum:ElementRef){
        let price=[];
        let min:number=parseInt(minimum.nativeElement.value);
        let max:number=parseInt(maximum.nativeElement.value);
        let middle:number;
        if(isNaN(min)||minimum.nativeElement.value===''){
         min=0;
        }
        if(isNaN(max)||maximum.nativeElement.value===''){
         max=1000000000;
        }
        if(min>=max){
         middle=min;
         min=max;
         max=middle;
        }
       /* if(max{
          middle=max;
          max=min;
          min=middle;
        }*/
        console.log(min);
        console.log(max);
        //console.log(priceArray);
        price=priceArray.filter(asset=>parseInt(this.trasformToNumber(asset.price))
         >=min&&parseInt(this.trasformToNumber(asset.price))<=max);
        return price;
     }


}