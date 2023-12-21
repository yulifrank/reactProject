import { observable, makeObservable, action, computed } from 'mobx';

const meeting={
 
    serviceName: '',
    serviceDescription: '',
    servicePrice: '',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    dateTime: '',
}
 class MeetingStore
  {

    meettingList = observable([
    
    ]);    
     constructor() 
     {


//    this.meettingList.push({serviceName:"ggggg",serviceDescription:"hghhhh",dateTime:"14/23"})

         makeObservable(this,
             {
                meettingList :observable,
                addMeeting:action,
                currentList:computed
             }
         )
     }
     get currentList()
     {
        return this.meettingList;
     }
    
    addMeeting = (meeting) => {

        this.meettingList = [...this.meettingList, 
            {   serviceName:meeting.serviceName,
                serviceDescribtion:meeting.serviceDescribtion,
                servicePrice:meeting.servicePrice,
                dateTime:meeting.dateTime,
                clientName:meeting.clientName,
                clientPhone:meeting.clientPhone,
                clientEmail:meeting.clientEmail
            
            }];
    }
 }
 export default new MeetingStore();


// class TaskStore {
//     taskList = [];
//     onlyNotDone = false;

//     constructor() {
//         makeObservable(this, {//פונקציה שנקראת רק ביצירה ומגדירה את היחסים בין חלקי הקלאס
//             taskList: observable,//מקבלים עדכונים בכל הילדים הילדים שמשתמשים
//             onlyNotDone: observable,
//             addTask: action,//פעולה שתשפיע על הobservable
//             markTaskDone: action,
//             taskNotDone: computed,//פונקציה שתחושב מחדש על כל שינוי במידע שמשתמשים בתוכה
//             currentTaskList: computed,
//             setOnlyNotDone: action,
//         })
//     }

//     addTask = (task) => {
//         this.taskList = [...this.taskList, { id: this.taskList.length, title: task, done: false }];
//     }

//     markTaskDone = (id) => {
//         this.currentTaskList = this.currentTaskList.map(task => {//קבלת המערך החדש מהmap
//             if (task.id === id) {
//                 task.done = !task.done
//             }

//             return task;
//         })
//     }

//     get taskNotDone() {//פונקצית get שמקבלת מידע להצגה
//         return this.taskList.filter(task => !task.done);
//     }

//     get currentTaskList() {
//         return this.onlyNotDone ? this.taskNotDone : this.taskList;
//     }

//     setOnlyNotDone = () => {
//         this.onlyNotDone = !this.onlyNotDone;
//     }
// }

// export default new TaskStore();//יצירת מופע יחיד שאליו תמיד נפנה





















// const response = await fetch("http://localhost:8787/login", {// כתיבה עם fetch
    //   method: "POST",
    //   body: JSON.stringify({
    //     username, password
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",//כותרת שתשלח כחלק מהרקווסט ותגדיר שהמשתנים נשלחים וחוזרים במבנה של json
    //   },
    // });
    // console.log(response.statusText)
    // console.log("oooooooooooooooooooo")
    // if (response.status === 200) {
    //   Swal.fire({
    //     title: "You are identified as an administrator",
    //     html: "Go to the site in <b></b> seconds.",
    //     timer: 2000,
    //     timerProgressBar: true,
    //     didOpen: () => {
    //       Swal.showLoading();
    //       const timer = Swal.getPopup().querySelector("b");
    //       timerInterval = setInterval(() => {
    //         timer.textContent = `${Swal.getTimerLeft()}`;
    //       }, 100);
    //     },
    //     willClose: () => {
    //       clearInterval(timerInterval);
    //     }
    //   }).then((result) => {
    //     if (result.dismiss === Swal.DismissReason.timer) {
    //       console.log("I was closed by the timer");
    //       window.location.href = "/admin";
    //     }
    //   });
    // }
    // else {
    //   Swal.fire({
    //     title: "Wrong password/name",
    //     text: "No access to normal user",
    //     icon: "error"
    //   });

    // };






//     MeetingStore.addMeeting(formData);
// localStorage.setItem('meetings', JSON.stringify(MeetingStore.currentList));


// constructor() {
//     const storedMeetings = localStorage.getItem('meetings');
//     if (storedMeetings) {
//       this.meettingList = observable(JSON.parse(storedMeetings));
//     } else {
//       this.meettingList.push({serviceName:"ggggg",serviceDescription:"hghhhh",dateTime:"14/23"});
//     }
  
//     makeObservable(this, {
//       meettingList: observable,
//       addMeeting: action,
//       currentList: computed
//     });
//   }
  