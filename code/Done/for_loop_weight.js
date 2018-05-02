// Suppose you got the Helicobacter pylori infection one year before 
// and had a chronic diarrhea. So you lost your weight slowly. 
// Although you made colonoscopy in the hospital, the doctor told you that you 
// were okay, but you also could not stop your chronic diarrhea 
// and lost your weight slowly.

var weight = 63.5;  // Input your weight (kg) before your chronic diarrhea (one year before).  

for ( var monthBeforeHP=0; monthBeforeHP<6; monthBeforeHP++){
   weight = weight - 1;
   console.log("我这个月的体重降了1公斤，现在是"+weight+"公斤。");
}

// Six months later, I went to the same hospital for gastroscopy 
// and found I have severe HP infection. 
// Then after 4 sterilization in two weeks and drinking homemade yogurt, 
// my chronic diarrhea stopped and my weight gains slowly.

for ( var month = 1; month < 7; month = month + 1){
   weight = weight + 0.25;
   console.log("我这个月的体重升了0.2公斤，现在是"+weight+"公斤。");
}

// pythontutor's permanent link:
// http://pythontutor.com/live.html#code=//%20Suppose%20you%20got%20the%20Helicobacter%20pylori%20infection%20one%20year%20before%20%0A//%20and%20had%20a%20chronic%20diarrhea.%20So%20you%20lost%20your%20weight%20slowly.%20%0A//%20Although%20you%20made%20colonoscopy%20in%20the%20hospital,%20the%20doctor%20told%20you%20that%20you%20%0A//%20were%20okay,%20but%20you%20also%20could%20not%20stop%20your%20chronic%20diarrhea%20%0A//%20and%20lost%20your%20weight%20slowly.%0A%0Avar%20weight%20%3D%2063.5%3B%20%20//%20Input%20your%20weight%20%28kg%29%20before%20your%20chronic%20diarrhea%20%28one%20year%20before%29.%20%20%0A%0Afor%20%28%20var%20monthBeforeHP%3D0%3B%20monthBeforeHP%3C6%3B%20monthBeforeHP%2B%2B%29%7B%0A%20%20%20weight%20%3D%20weight%20-%201%3B%0A%20%20%20console.log%28%22%E6%88%91%E8%BF%99%E4%B8%AA%E6%9C%88%E7%9A%84%E4%BD%93%E9%87%8D%E9%99%8D%E4%BA%861%E5%85%AC%E6%96%A4%EF%BC%8C%E7%8E%B0%E5%9C%A8%E6%98%AF%22%2Bweight%2B%22%E5%85%AC%E6%96%A4%E3%80%82%22%29%3B%0A%7D%0A%0A//%20Six%20months%20later,%20I%20went%20to%20the%20same%20hospital%20for%20gastroscopy%20%0A//%20and%20found%20I%20have%20severe%20HP%20infection.%20%0A//%20Then%20after%204%20sterilization%20in%20two%20weeks%20and%20drinking%20homemade%20yogurt,%20%0A//%20my%20chronic%20diarrhea%20stopped%20and%20my%20weight%20gains%20slowly.%0A%0Afor%20%28%20var%20month%20%3D%201%3B%20month%20%3C%207%3B%20month%20%3D%20month%20%2B%201%29%7B%0A%20%20%20weight%20%3D%20weight%20%2B%200.25%3B%0A%20%20%20console.log%28%22%E6%88%91%E8%BF%99%E4%B8%AA%E6%9C%88%E7%9A%84%E4%BD%93%E9%87%8D%E5%8D%87%E4%BA%860.2%E5%85%AC%E6%96%A4%EF%BC%8C%E7%8E%B0%E5%9C%A8%E6%98%AF%22%2Bweight%2B%22%E5%85%AC%E6%96%A4%E3%80%82%22%29%3B%0A%7D&cumulative=false&curInstr=53&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

// pythontutor's permanent link without annotations:
// http://pythontutor.com/live.html#code=var%20weight%20%3D%2063.5%3B%20%0A%0Afor%20%28%20var%20monthBeforeHP%3D0%3B%20monthBeforeHP%3C6%3B%20monthBeforeHP%2B%2B%29%7B%0A%20%20%20weight%20%3D%20weight%20-%201%3B%0A%20%20%20console.log%28%22%E6%88%91%E8%BF%99%E4%B8%AA%E6%9C%88%E7%9A%84%E4%BD%93%E9%87%8D%E9%99%8D%E4%BA%861%E5%85%AC%E6%96%A4%EF%BC%8C%E7%8E%B0%E5%9C%A8%E6%98%AF%22%2Bweight%2B%22%E5%85%AC%E6%96%A4%E3%80%82%22%29%3B%0A%7D%0A%0Afor%20%28%20var%20month%20%3D%201%3B%20month%20%3C%207%3B%20month%20%3D%20month%20%2B%201%29%7B%0A%20%20%20weight%20%3D%20weight%20%2B%200.25%3B%0A%20%20%20console.log%28%22%E6%88%91%E8%BF%99%E4%B8%AA%E6%9C%88%E7%9A%84%E4%BD%93%E9%87%8D%E5%8D%87%E4%BA%860.2%E5%85%AC%E6%96%A4%EF%BC%8C%E7%8E%B0%E5%9C%A8%E6%98%AF%22%2Bweight%2B%22%E5%85%AC%E6%96%A4%E3%80%82%22%29%3B%0A%7D&cumulative=false&curInstr=53&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false