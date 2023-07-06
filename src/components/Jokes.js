import { useState } from "react";

const Jokes = () => {
  const [text, setText] = useState();
  //
  const months = [
    "Janu吉野櫻跟八重櫻差在哪，插在土裡",
    "水的媽媽是誰【水母】",
    "你知道什麼是最舒服的椅子嗎？【enjoy】",
    "哪一個按摩椅品牌最脆弱？【tokuyo】因為偷～～哭～～～唷",
    "十二生肖哪隻動物不會感冒雞】因為雞掃化痰",
    "什麼題目最時尚【非選題】（fashion）題",
    "為什麼泰國人都喜歡喝健康的沙瓦？因為他們喜歡：沙瓦低卡～",
    "葡萄點名，葡萄柚",
    "有天小明去看電影，進場時被工作人員攔了下來，工作人員：不好意思，因為已經開演十五分鐘了，請您入場時小聲一點小明：大家這麼快就睡著了喔",
    "皮卡丘被揍之後會變成什麼？【卡丘】因為他就不敢再皮了",
    "羊看到什麼東西會暴怒？揚聲器",
    "姊姊要生了！這樣我能獲得什麼？成舅感",
    "幾點不能講笑話【一點】，一點都不好笑",
    "手機的媽媽是誰？手機螢幕】",
    "請問一顆星星有多重？【八克】因為星巴克！",
    "警衛在笑什麼?警衛在校門口！",
    "哪一個字需要寫很久？【朋】因為一寫就要寫兩個月",
  ];

  const random = Math.floor(Math.random() * months.length);
  console.log(random, months[random]);
  //
  function handleClick() {
    setText(months[random]);
  }
  //
  return (
    <div className="jokes">
      <button onClick={handleClick}>產生隨機笑話</button>
      <br />
      <br />
      <br />
      {text}
    </div>
  );
};
export default Jokes;
