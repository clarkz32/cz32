const teams = {
  MEX:["墨西哥",83],RSA:["南非",70],KOR:["韩国",78],CZE:["捷克",76],CAN:["加拿大",75],BIH:["波黑",74],QAT:["卡塔尔",68],SUI:["瑞士",82],
  BRA:["巴西",91],MAR:["摩洛哥",84],HAI:["海地",61],SCO:["苏格兰",76],USA:["美国",80],PAR:["巴拉圭",77],AUS:["澳大利亚",75],TUR:["土耳其",80],
  GER:["德国",88],CUW:["库拉索",62],CIV:["科特迪瓦",78],ECU:["厄瓜多尔",80],NED:["荷兰",89],JPN:["日本",82],SWE:["瑞典",81],TUN:["突尼斯",75],
  BEL:["比利时",86],EGY:["埃及",79],IRN:["伊朗",78],NZL:["新西兰",65],ESP:["西班牙",91],CPV:["佛得角",69],KSA:["沙特阿拉伯",72],URU:["乌拉圭",86],
  FRA:["法国",92],SEN:["塞内加尔",81],IRQ:["伊拉克",70],NOR:["挪威",84],ARG:["阿根廷",91],ALG:["阿尔及利亚",78],AUT:["奥地利",81],JOR:["约旦",67],
  POR:["葡萄牙",90],COD:["刚果民主共和国",73],UZB:["乌兹别克斯坦",72],COL:["哥伦比亚",84],ENG:["英格兰",90],CRO:["克罗地亚",84],GHA:["加纳",76],PAN:["巴拿马",70]
};

const rawMatches = [
[1,"小组赛","A","2026-06-11","13:00","-06:00","MEX","RSA","墨西哥城","阿兹特克体育场","2-0"],[2,"小组赛","A","2026-06-11","20:00","-06:00","KOR","CZE","瓜达拉哈拉","阿克伦体育场","2-1"],
[3,"小组赛","B","2026-06-12","15:00","-04:00","CAN","BIH","多伦多","BMO球场"],[4,"小组赛","D","2026-06-12","18:00","-07:00","USA","PAR","洛杉矶","SoFi体育场"],
[5,"小组赛","C","2026-06-13","21:00","-04:00","HAI","SCO","波士顿","吉列体育场"],[6,"小组赛","D","2026-06-13","21:00","-07:00","AUS","TUR","温哥华","BC Place"],
[7,"小组赛","C","2026-06-13","18:00","-04:00","BRA","MAR","纽约/新泽西","大都会人寿体育场"],[8,"小组赛","B","2026-06-13","12:00","-07:00","QAT","SUI","旧金山湾区","李维斯体育场"],
[9,"小组赛","E","2026-06-14","19:00","-04:00","CIV","ECU","费城","林肯金融球场"],[10,"小组赛","E","2026-06-14","12:00","-05:00","GER","CUW","休斯敦","NRG体育场"],
[11,"小组赛","F","2026-06-14","15:00","-05:00","NED","JPN","达拉斯","AT&T体育场"],[12,"小组赛","F","2026-06-14","20:00","-06:00","SWE","TUN","蒙特雷","BBVA体育场"],
[13,"小组赛","H","2026-06-15","18:00","-04:00","KSA","URU","迈阿密","硬石体育场"],[14,"小组赛","H","2026-06-15","12:00","-04:00","ESP","CPV","亚特兰大","梅赛德斯-奔驰体育场"],
[15,"小组赛","G","2026-06-15","18:00","-07:00","IRN","NZL","洛杉矶","SoFi体育场"],[16,"小组赛","G","2026-06-15","12:00","-07:00","BEL","EGY","西雅图","流明球场"],
[17,"小组赛","I","2026-06-16","15:00","-04:00","FRA","SEN","纽约/新泽西","大都会人寿体育场"],[18,"小组赛","I","2026-06-16","18:00","-04:00","IRQ","NOR","波士顿","吉列体育场"],
[19,"小组赛","J","2026-06-16","20:00","-05:00","ARG","ALG","堪萨斯城","箭头体育场"],[20,"小组赛","J","2026-06-16","21:00","-07:00","AUT","JOR","旧金山湾区","李维斯体育场"],
[21,"小组赛","L","2026-06-17","19:00","-04:00","GHA","PAN","多伦多","BMO球场"],[22,"小组赛","L","2026-06-17","15:00","-05:00","ENG","CRO","达拉斯","AT&T体育场"],
[23,"小组赛","K","2026-06-17","12:00","-05:00","POR","COD","休斯敦","NRG体育场"],[24,"小组赛","K","2026-06-17","20:00","-06:00","UZB","COL","墨西哥城","阿兹特克体育场"],
[25,"小组赛","A","2026-06-18","12:00","-04:00","CZE","RSA","亚特兰大","梅赛德斯-奔驰体育场"],[26,"小组赛","B","2026-06-18","12:00","-07:00","SUI","BIH","洛杉矶","SoFi体育场"],
[27,"小组赛","B","2026-06-18","15:00","-07:00","CAN","QAT","温哥华","BC Place"],[28,"小组赛","A","2026-06-18","19:00","-06:00","MEX","KOR","瓜达拉哈拉","阿克伦体育场"],
[29,"小组赛","C","2026-06-19","20:30","-04:00","BRA","HAI","费城","林肯金融球场"],[30,"小组赛","C","2026-06-19","18:00","-04:00","SCO","MAR","波士顿","吉列体育场"],
[31,"小组赛","D","2026-06-19","20:00","-07:00","TUR","PAR","旧金山湾区","李维斯体育场"],[32,"小组赛","D","2026-06-19","12:00","-07:00","USA","AUS","西雅图","流明球场"],
[33,"小组赛","E","2026-06-20","16:00","-04:00","GER","CIV","多伦多","BMO球场"],[34,"小组赛","E","2026-06-20","19:00","-05:00","ECU","CUW","堪萨斯城","箭头体育场"],
[35,"小组赛","F","2026-06-20","12:00","-05:00","NED","SWE","休斯敦","NRG体育场"],[36,"小组赛","F","2026-06-20","22:00","-06:00","TUN","JPN","蒙特雷","BBVA体育场"],
[37,"小组赛","H","2026-06-21","18:00","-04:00","URU","CPV","迈阿密","硬石体育场"],[38,"小组赛","H","2026-06-21","12:00","-04:00","ESP","KSA","亚特兰大","梅赛德斯-奔驰体育场"],
[39,"小组赛","G","2026-06-21","12:00","-07:00","BEL","IRN","洛杉矶","SoFi体育场"],[40,"小组赛","G","2026-06-21","18:00","-07:00","NZL","EGY","温哥华","BC Place"],
[41,"小组赛","I","2026-06-22","20:00","-04:00","NOR","SEN","纽约/新泽西","大都会人寿体育场"],[42,"小组赛","I","2026-06-22","17:00","-04:00","FRA","IRQ","费城","林肯金融球场"],
[43,"小组赛","J","2026-06-22","12:00","-05:00","ARG","AUT","达拉斯","AT&T体育场"],[44,"小组赛","J","2026-06-22","20:00","-07:00","JOR","ALG","旧金山湾区","李维斯体育场"],
[45,"小组赛","L","2026-06-23","16:00","-04:00","ENG","GHA","波士顿","吉列体育场"],[46,"小组赛","L","2026-06-23","19:00","-04:00","PAN","CRO","多伦多","BMO球场"],
[47,"小组赛","K","2026-06-23","12:00","-05:00","POR","UZB","休斯敦","NRG体育场"],[48,"小组赛","K","2026-06-23","20:00","-06:00","COL","COD","瓜达拉哈拉","阿克伦体育场"],
[49,"小组赛","C","2026-06-24","18:00","-04:00","SCO","BRA","迈阿密","硬石体育场"],[50,"小组赛","C","2026-06-24","18:00","-04:00","MAR","HAI","亚特兰大","梅赛德斯-奔驰体育场"],
[51,"小组赛","B","2026-06-24","12:00","-07:00","SUI","CAN","温哥华","BC Place"],[52,"小组赛","B","2026-06-24","12:00","-07:00","BIH","QAT","西雅图","流明球场"],
[53,"小组赛","A","2026-06-24","19:00","-06:00","CZE","MEX","墨西哥城","阿兹特克体育场"],[54,"小组赛","A","2026-06-24","19:00","-06:00","RSA","KOR","蒙特雷","BBVA体育场"],
[55,"小组赛","E","2026-06-25","16:00","-04:00","CUW","CIV","费城","林肯金融球场"],[56,"小组赛","E","2026-06-25","16:00","-04:00","ECU","GER","纽约/新泽西","大都会人寿体育场"],
[57,"小组赛","F","2026-06-25","18:00","-05:00","JPN","SWE","达拉斯","AT&T体育场"],[58,"小组赛","F","2026-06-25","18:00","-05:00","TUN","NED","堪萨斯城","箭头体育场"],
[59,"小组赛","D","2026-06-25","19:00","-07:00","TUR","USA","洛杉矶","SoFi体育场"],[60,"小组赛","D","2026-06-25","19:00","-07:00","PAR","AUS","旧金山湾区","李维斯体育场"],
[61,"小组赛","I","2026-06-26","15:00","-04:00","NOR","FRA","波士顿","吉列体育场"],[62,"小组赛","I","2026-06-26","15:00","-04:00","SEN","IRQ","多伦多","BMO球场"],
[63,"小组赛","G","2026-06-26","20:00","-07:00","EGY","IRN","西雅图","流明球场"],[64,"小组赛","G","2026-06-26","20:00","-07:00","NZL","BEL","温哥华","BC Place"],
[65,"小组赛","H","2026-06-26","19:00","-05:00","CPV","KSA","休斯敦","NRG体育场"],[66,"小组赛","H","2026-06-26","18:00","-06:00","URU","ESP","瓜达拉哈拉","阿克伦体育场"],
[67,"小组赛","L","2026-06-27","17:00","-04:00","PAN","ENG","纽约/新泽西","大都会人寿体育场"],[68,"小组赛","L","2026-06-27","17:00","-04:00","CRO","GHA","费城","林肯金融球场"],
[69,"小组赛","J","2026-06-27","21:00","-05:00","ALG","AUT","堪萨斯城","箭头体育场"],[70,"小组赛","J","2026-06-27","21:00","-05:00","JOR","ARG","达拉斯","AT&T体育场"],
[71,"小组赛","K","2026-06-27","19:30","-04:00","COL","POR","迈阿密","硬石体育场"],[72,"小组赛","K","2026-06-27","19:30","-04:00","COD","UZB","亚特兰大","梅赛德斯-奔驰体育场"]
];

const knockout = [
[73,"32强","2026-06-28","12:00","-07:00","A组第二","B组第二","洛杉矶","SoFi体育场"],[74,"32强","2026-06-29","16:30","-04:00","E组第一","A/B/C/D/F组第三","波士顿","吉列体育场"],
[75,"32强","2026-06-29","19:00","-06:00","F组第一","C组第二","蒙特雷","BBVA体育场"],[76,"32强","2026-06-29","12:00","-05:00","C组第一","F组第二","休斯敦","NRG体育场"],
[77,"32强","2026-06-30","17:00","-04:00","I组第一","C/D/F/G/H组第三","纽约/新泽西","大都会人寿体育场"],[78,"32强","2026-06-30","12:00","-05:00","E组第二","I组第二","达拉斯","AT&T体育场"],
[79,"32强","2026-06-30","19:00","-06:00","A组第一","C/E/F/H/I组第三","墨西哥城","阿兹特克体育场"],[80,"32强","2026-07-01","12:00","-04:00","L组第一","E/H/I/J/K组第三","亚特兰大","梅赛德斯-奔驰体育场"],
[81,"32强","2026-07-01","17:00","-07:00","D组第一","B/E/F/I/J组第三","旧金山湾区","李维斯体育场"],[82,"32强","2026-07-01","13:00","-07:00","G组第一","A/E/H/I/J组第三","西雅图","流明球场"],
[83,"32强","2026-07-02","19:00","-04:00","K组第二","L组第二","多伦多","BMO球场"],[84,"32强","2026-07-02","12:00","-07:00","H组第一","J组第二","洛杉矶","SoFi体育场"],
[85,"32强","2026-07-02","20:00","-07:00","B组第一","E/F/G/I/J组第三","温哥华","BC Place"],[86,"32强","2026-07-03","18:00","-04:00","J组第一","H组第二","迈阿密","硬石体育场"],
[87,"32强","2026-07-03","20:30","-05:00","K组第一","D/E/I/J/L组第三","堪萨斯城","箭头体育场"],[88,"32强","2026-07-03","13:00","-05:00","D组第二","G组第二","达拉斯","AT&T体育场"],
[89,"16强","2026-07-04","17:00","-04:00","74胜者","77胜者","费城","林肯金融球场"],[90,"16强","2026-07-04","12:00","-05:00","73胜者","75胜者","休斯敦","NRG体育场"],
[91,"16强","2026-07-05","16:00","-04:00","76胜者","78胜者","纽约/新泽西","大都会人寿体育场"],[92,"16强","2026-07-05","18:00","-06:00","79胜者","80胜者","墨西哥城","阿兹特克体育场"],
[93,"16强","2026-07-06","14:00","-05:00","83胜者","84胜者","达拉斯","AT&T体育场"],[94,"16强","2026-07-06","17:00","-07:00","81胜者","82胜者","西雅图","流明球场"],
[95,"16强","2026-07-07","12:00","-04:00","86胜者","88胜者","亚特兰大","梅赛德斯-奔驰体育场"],[96,"16强","2026-07-07","13:00","-07:00","85胜者","87胜者","温哥华","BC Place"],
[97,"四分之一决赛","2026-07-09","16:00","-04:00","89胜者","90胜者","波士顿","吉列体育场"],[98,"四分之一决赛","2026-07-10","12:00","-07:00","93胜者","94胜者","洛杉矶","SoFi体育场"],
[99,"四分之一决赛","2026-07-11","17:00","-04:00","91胜者","92胜者","迈阿密","硬石体育场"],[100,"四分之一决赛","2026-07-11","20:00","-05:00","95胜者","96胜者","堪萨斯城","箭头体育场"],
[101,"半决赛","2026-07-14","14:00","-05:00","97胜者","98胜者","达拉斯","AT&T体育场"],[102,"半决赛","2026-07-15","15:00","-04:00","99胜者","100胜者","亚特兰大","梅赛德斯-奔驰体育场"],
[103,"三四名决赛","2026-07-18","17:00","-04:00","101负者","102负者","迈阿密","硬石体育场"],[104,"决赛","2026-07-19","15:00","-04:00","101胜者","102胜者","纽约/新泽西","大都会人寿体育场"]
];

const state = { query:"", stage:"全部", day:"全部", stake:20, slip:[] };
const markets = [["home","胜"],["draw","平"],["away","负"]];
const scoreMarkets = ["1-0","2-0","2-1","3-1","0-0","1-1","2-2","0-1","0-2","1-2","胜其他","平其他","负其他"];
const week = ["周日","周一","周二","周三","周四","周五","周六"];
const DATA_FEED_URL = "./data/live-data.json";
const REFRESH_SECONDS = 30;
let liveMeta = { sourceName:"本地演示模型", updatedAt:null, status:"正在连接统一数据源", error:"" };

function dateOf(date,time,offset){ return new Date(`${date}T${time}:00${offset}`); }
function oddsFor(home,away,id){
  const hr = teams[home]?.[1] ?? 78, ar = teams[away]?.[1] ?? 78, diff = hr - ar, wiggle = Math.sin(id * 1.37) * .018;
  let h = Math.max(.12, Math.min(.72, .36 + diff * .011 + wiggle));
  let a = Math.max(.12, Math.min(.72, .34 - diff * .011 - wiggle));
  let d = Math.max(.18, Math.min(.34, .30 - Math.min(Math.abs(diff) * .0025, .08)));
  const sum = h + d + a, margin = 1.08;
  return { home:+(sum/h/margin).toFixed(2), draw:+(sum/d/margin).toFixed(2), away:+(sum/a/margin).toFixed(2) };
}
function scoreOddsFor(home,away,id){
  const hr = teams[home]?.[1] ?? 78, ar = teams[away]?.[1] ?? 78, diff = hr - ar;
  const favoriteBoost = Math.max(-1.6, Math.min(1.6, diff / 10));
  const base = {
    "1-0": 6.2 - favoriteBoost * .55,
    "2-0": 7.9 - favoriteBoost * .75,
    "2-1": 7.4 - favoriteBoost * .45,
    "3-1": 12.5 - favoriteBoost * .9,
    "0-0": 9.5 + Math.abs(favoriteBoost) * .9,
    "1-1": 6.1 + Math.abs(favoriteBoost) * .45,
    "2-2": 13.5 + Math.abs(favoriteBoost) * .8,
    "0-1": 6.5 + favoriteBoost * .55,
    "0-2": 8.4 + favoriteBoost * .8,
    "1-2": 7.8 + favoriteBoost * .48,
    "胜其他": 18.5 - favoriteBoost * 1.5,
    "平其他": 28.0 + Math.abs(favoriteBoost) * 1.2,
    "负其他": 19.0 + favoriteBoost * 1.5
  };
  return Object.fromEntries(scoreMarkets.map((score, index) => {
    const wave = Math.sin((id + index) * 1.91) * .26;
    return [score, +Math.max(4.2, base[score] + wave).toFixed(2)];
  }));
}
function cnTime(d){
  const parts = new Intl.DateTimeFormat("zh-CN",{timeZone:"Asia/Shanghai",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:false}).formatToParts(d).reduce((a,p)=>(a[p.type]=p.value,a),{});
  const bj = new Date(d.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}));
  return `${parts.month}月${parts.day}日 ${week[bj.getDay()]} ${parts.hour}:${parts.minute}`;
}
function escapeHtml(value){ return String(value).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }

const matches = [
  ...rawMatches.map(([id,stage,group,date,time,offset,home,away,city,venue,score]) => ({ id,stage,group,home:teams[home][0],away:teams[away][0],homeKey:home,awayKey:away,city,venue,score,startsAt:dateOf(date,time,offset),odds:oddsFor(home,away,id),scoreOdds:scoreOddsFor(home,away,id) })),
  ...knockout.map(([id,stage,date,time,offset,home,away,city,venue]) => ({ id,stage,group:"淘汰赛",home,away,city,venue,startsAt:dateOf(date,time,offset),odds:{home:2.35,draw:3.05,away:+(2.72 + (id % 5) * .08).toFixed(2)},scoreOdds:Object.fromEntries(scoreMarkets.map((score,index)=>[score, +(6.5 + index * 1.85 + (id % 4) * .18).toFixed(2)])) }))
].sort((a,b)=>a.startsAt-b.startsAt);

function isLocked(m){
  return Boolean(m.score) || ["完场","已结束","取消","延期","腰斩"].includes(m.status);
}

function freshnessText(updatedAt){
  if (!updatedAt) return "等待首次同步";
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(updatedAt).getTime()) / 1000));
  if (seconds < 60) return `${seconds} 秒前同步`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} 分钟前同步`;
  return `${Math.floor(minutes / 60)} 小时前同步`;
}

function normalizeOdds(value){
  return Object.fromEntries(Object.entries(value || {}).map(([key, odd]) => [key, Number(odd)]).filter(([, odd]) => Number.isFinite(odd)));
}

function applyLiveData(payload){
  const updates = Array.isArray(payload?.matches) ? payload.matches : [];
  updates.forEach(update => {
    const m = matches.find(match => match.id === Number(update.id));
    if (!m) return;
    if (update.home) m.home = update.home;
    if (update.away) m.away = update.away;
    if (update.status) m.status = update.status;
    if ("score" in update) m.score = update.score || "";
    if (update.resultText) m.resultText = update.resultText;
    const odds = normalizeOdds(update.odds);
    const scoreOdds = normalizeOdds(update.scoreOdds);
    if (["home","draw","away"].every(key => Number.isFinite(odds[key]))) m.odds = { home:odds.home, draw:odds.draw, away:odds.away };
    if (scoreMarkets.every(score => Number.isFinite(scoreOdds[score]))) m.scoreOdds = scoreOdds;
    m.oddsUpdatedAt = update.oddsUpdatedAt || payload.updatedAt || new Date().toISOString();
    m.resultUpdatedAt = update.resultUpdatedAt || payload.updatedAt || "";
  });
  state.slip = state.slip.filter(item => {
    const m = matches.find(match => match.id === item.matchId);
    if (!m || isLocked(m)) return false;
    item.odds = item.market === "比分" ? m.scoreOdds[item.pick] : m.odds[item.pick];
    return Number.isFinite(item.odds);
  });
  liveMeta = {
    sourceName: payload?.sourceName || "统一数据源",
    sourceUrl: payload?.sourceUrl || DATA_FEED_URL,
    updatedAt: payload?.updatedAt || new Date().toISOString(),
    status: "已同步",
    error: ""
  };
}

async function loadLiveData(){
  try {
    const response = await fetch(`${DATA_FEED_URL}?t=${Date.now()}`, { cache:"no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    applyLiveData(await response.json());
  } catch (error) {
    liveMeta = { ...liveMeta, status:"同步失败，正在使用上次数据", error:String(error.message || error) };
  }
  render();
}

function render(){
  const app = document.querySelector("#app");
  const days = ["全部", ...new Set(matches.map(m => cnTime(m.startsAt).slice(0,6)))];
  const filtered = matches.filter(m => {
    const hay = `${m.home}${m.away}${m.city}${m.venue}${m.stage}${m.group}`;
    return (!state.query || hay.includes(state.query.trim())) && (state.stage==="全部" || m.stage===state.stage || m.group===state.stage) && (state.day==="全部" || cnTime(m.startsAt).startsWith(state.day));
  });
  const totalOdds = state.slip.reduce((a,i)=>a*i.odds,1);
  const estimate = state.slip.length ? totalOdds * Number(state.stake || 0) : 0;
  const hot = matches.filter(m=>!isLocked(m)).sort((a,b)=>Math.min(a.odds.home,a.odds.away)-Math.min(b.odds.home,b.odds.away)).slice(0,5);

  app.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">🏆 2026 世界杯 · 北京时间</p>
        <h1>绿茵狂想串联单</h1>
        <p class="lead">104 场比赛、胜平负赔率、比分赔率、快速筛选、单关与串关模拟。赔率与赛果统一从同一个数据源同步，页面会自动刷新。</p>
        <div class="live-strip">
          <span>${escapeHtml(liveMeta.status)}</span>
          <strong>${escapeHtml(liveMeta.sourceName)}</strong>
          <em>${freshnessText(liveMeta.updatedAt)}</em>
          ${liveMeta.error ? `<small>${escapeHtml(liveMeta.error)}</small>` : ""}
        </div>
      </div>
      <div class="scoreboard">
        <div><span>比赛</span><strong>104</strong></div><div><span>已结束</span><strong>${matches.filter(isLocked).length}</strong></div><div><span>预计返还</span><strong>¥${estimate.toFixed(2)}</strong></div>
      </div>
    </section>
    <section class="shell">
      <aside class="side">
        <div class="panel">
          <div class="panel-title">智能筛选</div>
          <label class="search"><span>🔎</span><input id="query" value="${escapeHtml(state.query)}" placeholder="搜球队、城市、阶段"></label>
          <div class="select-wrap"><span>⚙</span><select id="stage">${["全部","小组赛","32强","16强","四分之一决赛","半决赛","三四名决赛","决赛","A","B","C","D","E","F","G","H","I","J","K","L"].map(x=>`<option ${state.stage===x?"selected":""}>${x}</option>`).join("")}</select><span>⌄</span></div>
          <div class="select-wrap"><span>📅</span><select id="day">${days.map(x=>`<option ${state.day===x?"selected":""}>${x}</option>`).join("")}</select><span>⌄</span></div>
        </div>
        <div class="panel slip">
          <div class="panel-title">我的注单</div>
          <div class="stake-row"><span>投注金额</span><input id="stake" type="number" min="1" value="${state.stake}"></div>
          ${state.slip.length ? `<div class="slip-list">${state.slip.map(item=>`<div class="slip-item"><button data-remove="${item.matchId}" aria-label="删除选择">×</button><strong>${escapeHtml(item.match)}</strong><span>${item.market} · ${item.label} · ${item.odds.toFixed(2)}</span></div>`).join("")}</div>` : `<p class="empty">点选任意比赛的胜平负或比分赔率，注单会在这里汇总。</p>`}
          <div class="summary"><span>串关赔率</span><strong>${state.slip.length ? totalOdds.toFixed(2) : "--"}</strong><span>理论返还</span><strong>¥${estimate.toFixed(2)}</strong></div>
          <button class="submit">生成模拟方案</button>
          ${state.slip.length ? `<button class="clear" id="clear">清空注单</button>` : ""}
        </div>
        <div class="panel">
          <div class="panel-title">热门方向</div>
          ${hot.map(m=>`<button class="hot" data-pick="${m.id}:${m.odds.home < m.odds.away ? "home" : "away"}"><span>${m.home} vs ${m.away}</span><strong>${Math.min(m.odds.home,m.odds.away).toFixed(2)}</strong></button>`).join("")}
        </div>
      </aside>
      <section class="content">
        <div class="toolbar"><div><strong>${filtered.length}</strong> 场比赛</div><p>按开赛时间排序，全部时间已换算为北京时间；每 ${REFRESH_SECONDS} 秒自动同步赔率与赛果</p></div>
        <div class="match-list">${filtered.map(cardHtml).join("")}</div>
      </section>
    </section>`;

  bindEvents();
}

function cardHtml(m){
  const active = key => state.slip.some(i=>i.matchId===m.id && i.pick===key && i.market === "胜平负");
  const scoreActive = score => state.slip.some(i=>i.matchId===m.id && i.pick===score && i.market === "比分");
  const locked = isLocked(m);
  const status = locked ? (m.status || "完场") : (m.status || "未开赛");
  return `<article class="match ${locked ? "finished" : ""}">
    <div class="match-top"><span class="tag">第${m.id}场 · ${m.stage}${m.stage==="小组赛" ? ` · ${m.group}组` : ""}</span><span class="time">⏱ ${cnTime(m.startsAt)}</span></div>
    <div class="teams"><strong>${escapeHtml(m.home)}</strong><span>${m.score || "VS"}</span><strong>${escapeHtml(m.away)}</strong></div>
    <div class="meta">${escapeHtml(m.city)} · ${escapeHtml(m.venue)}</div>
    <div class="status-row"><span>${escapeHtml(status)}</span><em>${m.resultUpdatedAt ? `赛果 ${freshnessText(m.resultUpdatedAt)}` : `赔率 ${freshnessText(m.oddsUpdatedAt || liveMeta.updatedAt)}`}</em></div>
    <div class="market-title"><span>胜平负</span><em>90分钟赛果</em></div>
    <div class="odds">${markets.map(([key,label])=>`<button ${locked ? "disabled" : ""} class="${active(key) ? "active" : ""}" data-pick="${m.id}:${key}"><span>${label}</span><strong>${m.odds[key].toFixed(2)}</strong></button>`).join("")}</div>
    <div class="market-title score-title"><span>比分赔率</span><em>点选精准比分</em></div>
    <div class="score-odds">${scoreMarkets.map(score=>`<button ${locked ? "disabled" : ""} class="${scoreActive(score) ? "active" : ""}" data-score-pick="${m.id}:${score}"><span>${score}</span><strong>${m.scoreOdds[score].toFixed(2)}</strong></button>`).join("")}</div>
  </article>`;
}

function bindEvents(){
  document.querySelector("#query")?.addEventListener("input", e => { state.query = e.target.value; render(); });
  document.querySelector("#stage")?.addEventListener("change", e => { state.stage = e.target.value; render(); });
  document.querySelector("#day")?.addEventListener("change", e => { state.day = e.target.value; render(); });
  document.querySelector("#stake")?.addEventListener("input", e => { state.stake = e.target.value; render(); });
  document.querySelector("#clear")?.addEventListener("click", () => { state.slip = []; render(); });
  document.querySelectorAll("[data-remove]").forEach(btn => btn.addEventListener("click", () => { state.slip = state.slip.filter(i => i.matchId !== Number(btn.dataset.remove)); render(); }));
  document.querySelectorAll("[data-pick]").forEach(btn => btn.addEventListener("click", () => {
    const [id, pick] = btn.dataset.pick.split(":");
    const m = matches.find(x => x.id === Number(id));
    if (!m || isLocked(m)) return;
    const label = markets.find(x => x[0] === pick)[1];
    state.slip = state.slip.filter(i => i.matchId !== m.id);
    state.slip.push({ matchId:m.id, match:`${m.home} vs ${m.away}`, market:"胜平负", pick, label, odds:m.odds[pick] });
    render();
  }));
  document.querySelectorAll("[data-score-pick]").forEach(btn => btn.addEventListener("click", () => {
    const [id, score] = btn.dataset.scorePick.split(":");
    const m = matches.find(x => x.id === Number(id));
    if (!m || isLocked(m)) return;
    state.slip = state.slip.filter(i => i.matchId !== m.id);
    state.slip.push({ matchId:m.id, match:`${m.home} vs ${m.away}`, market:"比分", pick:score, label:score, odds:m.scoreOdds[score] });
    render();
  }));
}

render();
loadLiveData();
setInterval(loadLiveData, REFRESH_SECONDS * 1000);
