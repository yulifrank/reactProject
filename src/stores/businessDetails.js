import { observable, makeObservable, action, computed } from 'mobx';
import logo from "../assets/images/logo.png";
import withSuppliesImage from "../assets/images/with-supplies.jpg";
import Image1 from "../assets/images/1.jpg";
import Image3 from "../assets/images/10.jpg";
import Image8 from "../assets/images/8.jpg";
import Image7 from "../assets/images/7.jpg";
import Image11 from "../assets/images/11.jpg";
import Image27 from "../assets/images/27.jpg";
import Image26 from "../assets/images/26.jpg";
import Image25 from "../assets/images/25.jpg";
import Image23 from "../assets/images/23.jpg";
import Image24 from "../assets/images/24.jpg";
import Image14 from "../assets/images/14.jpg";
import Image17 from "../assets/images/17.jpg";
import Image15 from "../assets/images/15.jpg";
import Image36 from "../assets/images/36.jpg";
import Image32 from "../assets/images/32.jpg";
import Image30 from "../assets/images/30.jpg";
import Image29 from "../assets/images/29.jpg";
import Image18 from "../assets/images/18.jpg";
import Image19 from "../assets/images/19.jpg";
import Swal from 'sweetalert2'
import { accordionActionsClasses } from '@mui/material';
import { json } from 'react-router-dom';




class BusinessStore {

  businessServices
    = [
      {

        id: '0',
        price: "200",
        name: "ניהול פרויקטים",
        describtion: " בניית פרוגרמה ראשונית, הבנת צרכי ורצונות הלקוח בניית אומדן תקציבי ולוחות זמנים לפי אבני דרך לכל תהליך הפרויקט. ליווי להוצאת היתר הבניה ובהמשך הכנת כתבי כמויות, בחירת מפרטים טכנים בהתאם לתכנון ולתקציב ויציאה למכרז קבלנים. השוואת הצעות המחיר ובניית חוזה מאובטח מול הקבלן.",
        image: Image36,
        image2: Image15,
        image3: Image14
      },

      {
        id: '1',
        price: "200",
        name: ' תכנון קונסטרוקציה',
        describtion: 'תכנון שלד המבנה ומתן שרותי יעוץ הנדסי הכוללים: הצהרות מתכנן, חישובים סטטים לצורך ההיתר, תוכניות קונסטרוקציה לביצוע , תכנון אלמנטי הבטון ותכנון אלמנטי פלדה . ליווי בדיקות מעבדה במידה ונדרשות. חתימה על אישור יציבות המבנה וכמובן פיקוחים עליונים על רכיבי הקונסטרוקציה.'
        , image: Image1,
        image2: Image32,
        image3: Image17

      },
      {
        id: '2',
        price: "500",
        name: 'תכנון חשמל ואינסטלציה',
        describtion: 'תכנון מלא של מערכות החשמל במבנה לרבות ארונות ראשיים ומשניים חלוקה למעגלים והכנת מפרט טכני לסוגי הכבלים והאביזרים. תכנון מערכת האינסטלציה הפנימית של המבנה לרבות מערכות מים חמים וקרים, מערכות ניקוז, ביוב ועוד. תכנון מערכת הביוב הפנים מגרשית.',
        image: Image23,
        image2: Image25,
        image3: Image8

      },
      {
        id: '3',
        price: "400",
        name: ' אדריכלות נוף',
        describtion: 'עיצוב ותכנון שטחי החוץ והגינה, ליווי בבחירת הצמחיה המתאימה ומיקומה בשטח, תכנון ערכות השקיה ותאורת חוץ.',
        image: Image30,
        image2: Image29,
        image3: Image32
      },
      {
        id: '4',
        price: "200",
        name: 'יעוץ קרקע וביסוס',
        describtion: ' בדיקת המגרש ע"י ביצוע חפירות / קידוחי ניסיון, איסוף הממצאים ושליחה למעבדה מורשת, ניתוח הממצאים והגשת דו"ח ביסוס לפי תקן.',
        image: Image26,
        image2: Image27,
        image3: Image11
      }, {
        id: '5',
        name: 'הכונת בניה',
        describtion: ' בדיקת המגרש ע"י ביצוע חפירות / קידוחי ניסיון, איסוף הממצאים ושליחה למעבדה מורשת, ניתוח הממצאים והגשת דו"ח ביסוס לפי תקן.',
        image: Image17,
        image2: Image18,
        image3: Image19
      }
    ]
  businessDetails =
    {
    }
    
  isLogin = false;

  constructor() {
    makeObservable(this,
      {
        businessDetails: observable,
        businessServices: observable,
        isLogin: observable,
        setIsLogin: action,
        addService: action,
        initialbusinessServices: action,
        setBusinessDetails: action,
        initBusinessDetails: action,
        initialBusinessDetails: action


      }

    )
    if (this.businessServices.length === 6)
      this.businessServices.map(s => this.addService(s))
    console.log("the new length is: ", this.businessServices.length)

  }
  setIsLogin = (val) => {
    this.isLogin = val;
  }
  setService = (businessDetails) => {

  }
  addService = async (newServiceDetails) => {
    try {
      if (this.businessServices.length > 6) {
        newServiceDetails.id = String(this.businessServices.length);
        newServiceDetails.image = Image11;
        newServiceDetails.image2 = Image19;
        newServiceDetails.image3 = Image18;
      }
  
      const response = await fetch("http://localhost:8787/service", {
        method: "POST",
        body: JSON.stringify(newServiceDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        this.businessServices = [...this.businessServices, newServiceDetails];
        console.log("true");
        console.log(this.businessServices.length);
  
        if (this.businessServices.length > 6) {
          Swal.fire({
            title: "A new service has been added",
            text: "Your details have been successfully received",
            icon: "success",
          });
        }
  
        return;
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Unable to schedule the meeting",
        icon: "error",
      });
    }
  };
  
  initialbusinessServices = async () => {

    const response = await fetch("http://localhost:8787/services");
    const data = await response.json();
    console.log(data);
    this.businessServices = ([...data]);
    console.log("businessServices", this.businessServices)
  }
  setBusinessDetails = async (details) => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.statusText);

    if (response.status === 200) {
      this.businessDetails = details;
      console.log("true");
      console.log("true", details.name);

      Swal.fire({
        title: "The details have been saved",
        text: "Your details have been successfully entered",
        icon: "success",
      });
    }
  };

  initBusinessDetails = async (details) => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.statusText);

    if (response.status === 200) {
      this.businessDetails = details;
      console.log("true");
      console.log("true", details.name);
    }
  };
  initialBusinessDetails = async () => {
    const response = await fetch("http://localhost:8787/businessData");
    const data = await response.json();
    console.log(data);
    this.businessDetails = data;
    console.log("businessDetails", this.businessDetails);
  };
  

}
export default new BusinessStore();




