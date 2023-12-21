import { observable, makeObservable, action, computed } from 'mobx';
import logo from "../assets/images/logo.png";
import withSuppliesImage from "../assets/images/with-supplies.jpg";
import Image1 from "../assets/images/1.jpg";
import Image2 from "../assets/images/2.jpg";
import Image3 from "../assets/images/3.jpg";
import Image8 from "../assets/images/8.jpg";
// import Image4 from "../assets/images/5.jpg";
import Image7 from "../assets/images/7.jpg";


class BusinessStore {
    businessServices = [
        {
            id:'0',
            name: "ניהול פרויקטים"
            , describtion: " בניית פרוגרמה ראשונית, הבנת צרכי ורצונות הלקוח בניית אומדן תקציבי ולוחות זמנים לפי אבני דרך לכל תהליך הפרויקט. ליווי להוצאת היתר הבניה ובהמשך הכנת כתבי כמויות, בחירת מפרטים טכנים בהתאם לתכנון ולתקציב ויציאה למכרז קבלנים. השוואת הצעות המחיר ובניית חוזה מאובטח מול הקבלן."
       ,image:withSuppliesImage
        },
      
        {
            id:'1',

            name: ' תכנון קונסטרוקציה',
            describtion: 'תכנון שלד המבנה ומתן שרותי יעוץ הנדסי הכוללים: הצהרות מתכנן, חישובים סטטים לצורך ההיתר, תוכניות קונסטרוקציה לביצוע , תכנון אלמנטי הבטון ותכנון אלמנטי פלדה . ליווי בדיקות מעבדה במידה ונדרשות. חתימה על אישור יציבות המבנה וכמובן פיקוחים עליונים על רכיבי הקונסטרוקציה.'
            ,image:Image1

        },
        {
            id:'2',

            name: 'תכנון חשמל ואינסטלציה',
            describtion: 'תכנון מלא של מערכות החשמל במבנה לרבות ארונות ראשיים ומשניים חלוקה למעגלים והכנת מפרט טכני לסוגי הכבלים והאביזרים. תכנון מערכת האינסטלציה הפנימית של המבנה לרבות מערכות מים חמים וקרים, מערכות ניקוז, ביוב ועוד. תכנון מערכת הביוב הפנים מגרשית וכמו כן גם התחברות למערכת הציבורית בהתאם לתקנים ומתן כל האישורים וההצהרות הנדרשות לרשויות.'
       
            ,image:Image8
        },
        {
            id:'3',

            name: ' אדריכלות נוף'
            ,
            describtion: 'עיצוב ותכנון שטחי החוץ והגינה, ליווי בבחירת הצמחיה המתאימה ומיקומה בשטח, תכנון ערכות השקיה ותאורת חוץ.'
            ,image:Image7
        },
        {
            id:'4',

            name: 'יעוץ קרקע וביסוס'

            ,
            describtion:' בדיקת המגרש ע"י ביצוע חפירות / קידוחי ניסיון, איסוף הממצאים ושליחה למעבדה מורשת, ניתוח הממצאים והגשת דו"ח ביסוס לפי תקן.'
            ,image:withSuppliesImage
        }
    ]
    businessDetails =
        {
            name: "Design Works Construction",
            address: "רחוב הירקון 20 רמת גן",
            phone: "073-375-3175",
            owner: "4532452",
            logo: { logo },
            description: "אנחנו צוות הבנייה, קבוצת אנשי מקצוע מתחום הבניה , התכנון וההנדסה האזרחית בעלי ניסיון רב שנים של עשייה ופעילות בתחומים שונים"

        }

    constructor() {
        makeObservable(this,
            {
                businessDetails: observable,
                businessServices: observable,

            }
        )
    }








}
export default new BusinessStore();