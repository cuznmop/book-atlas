// 示例数据：明朝那些事儿（全七部）
window.SAMPLE_BOOKS = (window.SAMPLE_BOOKS || []).concat([
 {
  "id": "sample-mingchao",
  "meta": {
   "title": "明朝那些事儿（全七部）",
   "author": "当年明月",
   "publisher": "浙江人民出版社",
   "isbn": "978-7-213-04968-3",
   "edition": "全七部套装",
   "year": "2011",
   "totalPages": 2400,
   "currentPage": 1,
   "note": "七部合计页码，按洪武到崇祯的时间顺序线性排布"
  },
  "characters": [
   {
    "id": "ming-zhuyuanzhang",
    "primaryName": "朱元璋",
    "names": [
     { "text": "朱重八", "type": "小名", "note": "元末濠州钟离时的本名" },
     { "text": "洪武帝", "type": "尊称", "note": "年号洪武" },
     { "text": "太祖", "type": "尊称", "note": "庙号" }
    ],
    "gender": "男",
    "role": "明朝开国皇帝",
    "firstPage": 20,
    "appearances": [20, 60, 200, 260, 340, 415],
    "locations": [
     { "place": "皇觉寺", "city": "凤阳", "country": "中国", "fromPage": 20, "toPage": 60, "note": "家贫入寺为僧，后投红巾军" },
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 260, "toPage": 420, "note": "定都称帝，洪武之治" }
    ],
    "factions": [
     { "name": "红巾军", "group": "义军", "fromPage": 60, "toPage": 200, "note": "郭子兴部下，后自领一军" },
     { "name": "大明皇权", "group": "皇权", "fromPage": 300, "toPage": 430, "note": "开国称帝，废丞相、设锦衣卫" }
    ],
    "groups": ["开国", "皇帝"],
    "experiences": [
     { "title": "投红巾军、娶马氏", "fromPage": 45, "toPage": 70, "description": "元末大乱，投入郭子兴部红巾军，以胆识得重用，娶郭子兴养女马氏为妻，逐步自领一军。" },
     { "title": "鄱阳湖大战击败陈友谅", "fromPage": 230, "toPage": 250, "description": "与陈友谅决战鄱阳湖，以火攻破其巨舰连锁，陈友谅中箭死，长江中游尽入掌握。" },
     { "title": "定都应天、北伐灭元", "fromPage": 260, "toPage": 300, "description": "在应天府称帝，国号大明，命徐达、常遇春北伐，元顺帝北遁。" },
     { "title": "胡惟庸案与蓝玉案大清洗", "fromPage": 330, "toPage": 415, "description": "以谋反罪诛胡惟庸、废中书省，又兴蓝玉案，开国功臣几被清洗殆尽。" }
    ],
    "ending": "病逝于南京",
    "endingPage": 430,
    "note": "全书第一部主角，贯穿洪武一朝"
   },
   {
    "id": "ming-mahuanghou",
    "primaryName": "马皇后",
    "names": [
     { "text": "马秀英", "type": "本名", "note": "民间传说名" },
     { "text": "孝慈高皇后", "type": "尊称", "note": "谥号" },
     { "text": "大脚马皇后", "type": "称呼", "note": "民间俗称，因未缠足" }
    ],
    "gender": "女",
    "role": "明太祖皇后",
    "firstPage": 30,
    "appearances": [30, 90, 300, 450],
    "locations": [
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 60, "toPage": 450, "note": "居中宫，佐太祖理内政" }
    ],
    "factions": [
     { "name": "红巾军", "group": "义军", "fromPage": 30, "toPage": 60, "note": "郭子兴养女，嫁朱元璋" },
     { "name": "大明皇权", "group": "皇权", "fromPage": 300, "toPage": 450, "note": "皇后，屡谏太祖少杀戮" }
    ],
    "groups": ["开国", "后宫"],
    "experiences": [
     { "title": "嫁朱元璋、军中持家", "fromPage": 30, "toPage": 60, "description": "为郭子兴养女，嫁与朱元璋，军中缺粮时常怀饼以进，被传为患难夫妻。" },
     { "title": "立为皇后、屡谏宽刑", "fromPage": 300, "toPage": 430, "description": "洪武元年册为皇后，生活俭朴，多次劝阻太祖滥杀功臣与宫人。" },
     { "title": "临终拒医", "fromPage": 430, "toPage": 450, "description": "病重时不背服药，恐太医治不好而获罪，卒后太祖不再立后。" }
    ],
    "ending": "病逝于南京",
    "endingPage": 450,
    "note": "明初贤后，朱元璋唯一正妻"
   },
   {
    "id": "ming-liubowen",
    "primaryName": "刘伯温",
    "names": [
     { "text": "刘基", "type": "本名", "note": "字伯温，以字行" },
     { "text": "刘诚意", "type": "尊称", "note": "封诚意伯" },
     { "text": "文成公", "type": "尊称", "note": "谥文成" }
    ],
    "gender": "男",
    "role": "明朝开国谋臣",
    "firstPage": 80,
    "appearances": [80, 180, 260, 380],
    "locations": [
     { "place": "青田", "city": "处州", "country": "中国", "fromPage": 80, "toPage": 130, "note": "元末辞官归隐青田山中" },
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 200, "toPage": 380, "note": "入朱元璋幕府，参预机务" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 200, "toPage": 340, "note": "御史中丞兼太史令" },
     { "name": "文官集团", "group": "朝臣", "fromPage": 200, "toPage": 380, "note": "与淮西功臣集团对立" }
    ],
    "groups": ["开国", "谋臣"],
    "experiences": [
     { "title": "应召出山、陈时务十八策", "fromPage": 130, "toPage": 200, "description": "被朱元璋礼聘至应天，陈时务十八策，定先灭陈友谅、后取张士诚的次序。" },
     { "title": "定历法、议军卫法", "fromPage": 260, "toPage": 330, "description": "洪武初任御史中丞兼太史令，参与制定《大统历》、军卫法。" },
     { "title": "致仕归乡、忧愤而卒", "fromPage": 360, "toPage": 380, "description": "为胡惟庸所忌，致仕还青田，仍遭构陷夺禄，入京谢罪后病卒。" }
    ],
    "ending": "病逝于青田（一说为胡惟庸所害）",
    "endingPage": 380,
    "note": "民间与诸葛亮并称的谋臣形象"
   },
   {
    "id": "ming-lishanchang",
    "primaryName": "李善长",
    "names": [
     { "text": "李善长", "type": "本名", "note": "字百室" },
     { "text": "韩国公", "type": "尊称", "note": "洪武三年封韩国公" },
     { "text": "李丞相", "type": "称呼", "note": "明初左丞相" }
    ],
    "gender": "男",
    "role": "明朝开国左丞相",
    "firstPage": 90,
    "appearances": [90, 190, 280, 400],
    "locations": [
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 90, "toPage": 400, "note": "长期主持中书省政务" }
    ],
    "factions": [
     { "name": "开国功臣", "group": "勋贵", "fromPage": 90, "toPage": 400, "note": "淮西集团首领，位居开国六公之首" }
    ],
    "groups": ["开国", "丞相"],
    "experiences": [
     { "title": "掌后勤、定赋税", "fromPage": 90, "toPage": 200, "description": "朱元璋略地时留守后方，转调军饷、定盐法钱法，使军食不乏。" },
     { "title": "任左丞相、封韩国公", "fromPage": 260, "toPage": 300, "description": "洪武初任左丞相，主持定官制、修律令，洪武三年大封功臣，位列六公之首。" },
     { "title": "胡惟庸案牵连被诛", "fromPage": 380, "toPage": 400, "description": "其弟与胡惟庸联姻，洪武二十三年被指知逆不举，年七十余被赐死。" }
    ],
    "ending": "被赐死（胡惟庸案牵连）",
    "endingPage": 400,
    "note": "明初淮西功臣集团的核心"
   },
   {
    "id": "ming-changyuchun",
    "primaryName": "常遇春",
    "names": [
     { "text": "常遇春", "type": "本名", "note": "字伯仁" },
     { "text": "常十万", "type": "绰号", "note": "自言能将十万众横行天下" },
     { "text": "开平王", "type": "尊称", "note": "追封开平王" }
    ],
    "gender": "男",
    "role": "明朝开国猛将",
    "firstPage": 110,
    "appearances": [110, 240, 270],
    "locations": [
     { "place": "鄱阳湖", "city": "饶州", "country": "中国", "fromPage": 230, "toPage": 250, "note": "决战陈友谅，救太祖于危难" },
     { "place": "柳河川", "city": "宣府", "country": "中国", "fromPage": 270, "toPage": 276, "note": "北伐班师途中暴卒" }
    ],
    "factions": [
     { "name": "开国功臣", "group": "勋贵", "fromPage": 110, "toPage": 276, "note": "朱元璋帐下最勇之将" }
    ],
    "groups": ["开国", "名将"],
    "experiences": [
     { "title": "投朱元璋、采石矶先登", "fromPage": 110, "toPage": 140, "description": "元末从刘聚为盗，后投朱元璋，自请为前锋，采石矶飞舟先登，敌军披靡。" },
     { "title": "鄱阳湖救主、破陈友谅", "fromPage": 230, "toPage": 250, "description": "鄱阳湖之战中朱元璋座船搁浅，常遇春射伤敌将、以舟撞敌，救太祖脱险。" },
     { "title": "北伐凯旋途中暴卒", "fromPage": 260, "toPage": 276, "description": "与徐达同领北伐，克大都、下上都，洪武二年班师至柳河川暴病而卒，年四十。" }
    ],
    "ending": "暴卒于北伐班师途中（柳河川）",
    "endingPage": 276,
    "note": "以勇猛著称，自言能将十万众"
   },
   {
    "id": "ming-huweiyong",
    "primaryName": "胡惟庸",
    "names": [
     { "text": "胡惟庸", "type": "本名", "note": "元末明初定远人" },
     { "text": "胡丞相", "type": "称呼", "note": "明初最后一任中书左丞相" }
    ],
    "gender": "男",
    "role": "明朝最后一任中书左丞相",
    "firstPage": 120,
    "appearances": [120, 300, 350, 360],
    "locations": [
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 120, "toPage": 360, "note": "由知县累迁至丞相" }
    ],
    "factions": [
     { "name": "开国功臣", "group": "勋贵", "fromPage": 120, "toPage": 350, "note": "淮西集团，李善长荐之" },
     { "name": "文官集团", "group": "朝臣", "fromPage": 300, "toPage": 360, "note": "独相专权，终致废相" }
    ],
    "groups": ["开国", "丞相"],
    "experiences": [
     { "title": "李善长荐之、累迁左丞相", "fromPage": 120, "toPage": 300, "description": "由宁国知县累迁中书省参知政事，得李善长推荐，洪武十年进左丞相，专决省事。" },
     { "title": "专权擅政、结党营私", "fromPage": 300, "toPage": 350, "description": "生杀黜陟多不奏而行，占城贡使事隐而不报，与陆仲亨、费聚等结党。" },
     { "title": "以谋反罪被诛、丞相制废除", "fromPage": 350, "toPage": 360, "description": "洪武十三年以谋反罪被诛，株连三万余人；太祖遂废中书省与丞相。" }
    ],
    "ending": "以谋反罪被诛（胡惟庸案）",
    "endingPage": 360,
    "note": "中国历史上最后一任丞相"
   },
   {
    "id": "ming-lanyu",
    "primaryName": "蓝玉",
    "names": [
     { "text": "蓝玉", "type": "本名", "note": "常遇春妻弟" },
     { "text": "凉国公", "type": "尊称", "note": "洪武十二年封凉国公" },
     { "text": "蓝将军", "type": "称呼", "note": "捕鱼儿海大捷主帅" }
    ],
    "gender": "男",
    "role": "明朝开国后期名将",
    "firstPage": 140,
    "appearances": [140, 330, 405],
    "locations": [
     { "place": "捕鱼儿海", "city": "漠北", "country": "中国", "fromPage": 140, "toPage": 345, "note": "大破北元残部" },
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 345, "toPage": 405, "note": "功高被诛" }
    ],
    "factions": [
     { "name": "开国功臣", "group": "勋贵", "fromPage": 140, "toPage": 405, "note": "淮西勋贵第二代，骄纵不法" }
    ],
    "groups": ["开国", "名将"],
    "experiences": [
     { "title": "从征云南、屡立战功", "fromPage": 140, "toPage": 300, "description": "为常遇春妻弟，从傅友德征云南，又北征纳哈出，以勇略著称。" },
     { "title": "捕鱼儿海大捷", "fromPage": 330, "toPage": 345, "description": "率十五万军出大宁，掩袭捕鱼儿海，俘北元主次子、妃嫔、大臣三千余，北元汗统断绝。" },
     { "title": "骄纵被诛、蓝玉案起", "fromPage": 395, "toPage": 405, "description": "恃功骄横、私占民田、纵兵毁关，洪武二十六年以谋反罪被诛，株连一万五千人。" }
    ],
    "ending": "以谋反罪被诛（蓝玉案），剥皮实草",
    "endingPage": 405,
    "note": "明初最后一场大清洗的主角"
   },
   {
    "id": "ming-chenyouliang",
    "primaryName": "陈友谅",
    "names": [
     { "text": "陈友谅", "type": "本名", "note": "沔阳渔家子" },
     { "text": "陈汉帝", "type": "尊称", "note": "称帝建汉，年号大义" }
    ],
    "gender": "男",
    "role": "元末群雄 / 陈汉开国皇帝",
    "firstPage": 150,
    "appearances": [150, 210, 245],
    "locations": [
     { "place": "江州", "city": "九江", "country": "中国", "fromPage": 150, "toPage": 210, "note": "据长江中游，自称汉王" },
     { "place": "鄱阳湖", "city": "饶州", "country": "中国", "fromPage": 230, "toPage": 250, "note": "与朱元璋决战胜负" }
    ],
    "factions": [
     { "name": "红巾军", "group": "义军", "fromPage": 150, "toPage": 200, "note": "天完政权部将，后弑徐寿辉自立" },
     { "name": "陈汉政权", "group": "义军", "fromPage": 200, "toPage": 247, "note": "称帝于采石，国号汉" }
    ],
    "groups": ["群雄", "对手"],
    "experiences": [
     { "title": "弑徐寿辉、自立为帝", "fromPage": 150, "toPage": 205, "description": "本为天完政权倪文俊部将，先后杀倪文俊、徐寿辉，于采石称帝，国号汉。" },
     { "title": "据长江上游、与朱元璋争雄", "fromPage": 205, "toPage": 230, "description": "占有湖广、江西，水军冠绝一时，屡次东下与朱元璋争夺应天。" },
     { "title": "鄱阳湖败亡", "fromPage": 235, "toPage": 247, "description": "倾国六十万围洪都八十五日不下，决战鄱阳湖时战舰连锁被火攻所破，中流矢而死。" }
    ],
    "ending": "鄱阳湖大战中箭身亡",
    "endingPage": 247,
    "note": "朱元璋最强劲的对手"
   },
   {
    "id": "ming-zhangshicheng",
    "primaryName": "张士诚",
    "names": [
     { "text": "张士诚", "type": "本名", "note": "泰州白驹场盐贩" },
     { "text": "张九四", "type": "小名", "note": "排行第九，原名九四" },
     { "text": "诚王", "type": "尊称", "note": "称诚王，后称吴王" }
    ],
    "gender": "男",
    "role": "元末群雄 / 吴王",
    "firstPage": 160,
    "appearances": [160, 220, 280],
    "locations": [
     { "place": "平江", "city": "苏州", "country": "中国", "fromPage": 160, "toPage": 285, "note": "据平江十余年，富庶自守" }
    ],
    "factions": [
     { "name": "红巾军", "group": "义军", "fromPage": 160, "toPage": 200, "note": "泰州起兵，高邮建政权" },
     { "name": "东吴政权", "group": "义军", "fromPage": 200, "toPage": 285, "note": "据江南，称吴王" }
    ],
    "groups": ["群雄", "对手"],
    "experiences": [
     { "title": "泰州起兵、高邮称王", "fromPage": 160, "toPage": 200, "description": "与弟士德、士信聚盐丁起兵，攻克高邮，称诚王，国号大周，屡败元军。" },
     { "title": "据平江、保境安民", "fromPage": 200, "toPage": 275, "description": "迁都平江，据有江南富庶之地，轻徭薄赋、开垦屯田，然亦渐骄逸不理事。" },
     { "title": "平江城破被俘", "fromPage": 275, "toPage": 285, "description": "朱元璋遣徐达、常遇春围平江十月，城破被俘，押送应天，自缢而死。" }
    ],
    "ending": "平江城破被俘，自缢而死",
    "endingPage": 285,
    "note": "元末群雄中最富者，守成有余进取不足"
   },
   {
    "id": "ming-zhudi",
    "primaryName": "朱棣",
    "names": [
     { "text": "燕王", "type": "封号", "note": "洪武三年封燕王，镇北平" },
     { "text": "永乐帝", "type": "尊称", "note": "年号永乐" },
     { "text": "明成祖", "type": "尊称", "note": "庙号初为太宗，嘉靖时改称成祖" }
    ],
    "gender": "男",
    "role": "明朝第三任皇帝",
    "firstPage": 180,
    "appearances": [180, 310, 340, 400, 500, 600, 675],
    "locations": [
     { "place": "北平", "city": "北平", "country": "中国", "fromPage": 180, "toPage": 320, "note": "燕王藩邸，起兵靖难之基" },
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 340, "toPage": 590, "note": "夺位后即位，诛戮建文旧臣" },
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 590, "toPage": 680, "note": "迁都北京，五征漠北" },
     { "place": "榆木川", "city": "多伦", "country": "中国", "fromPage": 670, "toPage": 680, "note": "第五次北征班师途中病逝" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 180, "toPage": 680, "note": "由藩王入继大统，设内阁、置东厂" }
    ],
    "groups": ["皇帝", "靖难", "永乐"],
    "experiences": [
     { "title": "就藩北平、屡征漠北", "fromPage": 180, "toPage": 300, "description": "洪武十三年就藩北平，节制沿边军马，两次北征乃儿不花、兀良哈，威震朔漠。" },
     { "title": "靖难起兵、四年夺位", "fromPage": 305, "toPage": 340, "description": "以清君侧为名起兵，白沟河、东昌几度危殆，终直下南京，即位改元永乐。" },
     { "title": "诛十族、设内阁、迁都北京", "fromPage": 340, "toPage": 600, "description": "诛方孝孺十族、杀齐泰黄子澄，设内阁与东厂，永乐十九年正式迁都北京。" },
     { "title": "五征漠北、病逝榆木川", "fromPage": 600, "toPage": 680, "description": "亲率大军五次北征鞑靼瓦剌，永乐二十二年第五次北征班师途中卒于榆木川。" }
    ],
    "ending": "病逝于北征班师途中的榆木川",
    "endingPage": 680,
    "note": "由藩王夺位，开创永乐盛世"
   },
   {
    "id": "ming-xuda",
    "primaryName": "徐达",
    "names": [
     { "text": "徐达", "type": "本名", "note": "字天德" },
     { "text": "魏国公", "type": "尊称", "note": "洪武三年封魏国公" },
     { "text": "徐中山", "type": "尊称", "note": "追封中山王" }
    ],
    "gender": "男",
    "role": "明朝开国第一功臣",
    "firstPage": 340,
    "appearances": [340, 380, 420],
    "locations": [
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 340, "toPage": 420, "note": "开国后长期镇守北平，练军备边" }
    ],
    "factions": [
     { "name": "开国功臣", "group": "勋贵", "fromPage": 340, "toPage": 420, "note": "开国六公之一，明军统帅" }
    ],
    "groups": ["开国", "名将"],
    "experiences": [
     { "title": "从朱元璋起兵、屡为先锋", "fromPage": 340, "toPage": 360, "description": "自濠州从军，渡江取集庆，鄱阳湖战陈友谅，平张士诚，为诸将之首。" },
     { "title": "北伐灭元、克大都", "fromPage": 360, "toPage": 380, "description": "任征虏大将军，率二十五万军北伐，先取山东河南，再克大都，元顺帝北逃。" },
     { "title": "镇守北平、善终", "fromPage": 380, "toPage": 420, "description": "长期镇守北平练兵备边，洪武十八年病卒，太祖亲至其第，追封中山王。" }
    ],
    "ending": "病逝于南京（背疽），追封中山王",
    "endingPage": 420,
    "note": "明初唯一得善终的开国统帅"
   },
   {
    "id": "ming-zhuqizhen",
    "primaryName": "朱祁镇",
    "names": [
     { "text": "明英宗", "type": "尊称", "note": "庙号英宗" },
     { "text": "正统帝", "type": "尊称", "note": "年号正统" },
     { "text": "天顺帝", "type": "尊称", "note": "复辟后年号天顺" }
    ],
    "gender": "男",
    "role": "明朝第六、第八任皇帝",
    "firstPage": 460,
    "appearances": [460, 600, 700, 780, 800],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 460, "toPage": 600, "note": "九岁即位，王振专权" },
     { "place": "土木堡", "city": "怀来", "country": "中国", "fromPage": 600, "toPage": 615, "note": "二十万明军覆没，被瓦剌所俘" },
     { "place": "南宫", "city": "北京", "country": "中国", "fromPage": 700, "toPage": 750, "note": "归国后被景泰帝软禁七年" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 460, "toPage": 800, "note": "两度在位，前后共二十二年" }
    ],
    "groups": ["皇帝", "土木堡"],
    "experiences": [
     { "title": "幼年即位、王振专权", "fromPage": 460, "toPage": 600, "description": "宣德十年九岁即位，宦官王振掌司礼监，公卿皆拜其门，边衅渐起。" },
     { "title": "亲征瓦剌、土木堡被俘", "fromPage": 600, "toPage": 620, "description": "正统十四年听王振之言亲征，回师至土木堡被也先包围，全军覆没，帝被俘。" },
     { "title": "夺门之变复辟、冤杀于谦", "fromPage": 760, "toPage": 790, "description": "景泰八年石亨、徐有贞等拥其自南宫入宫复位，改元天顺，杀于谦、废景泰帝。" },
     { "title": "病逝、废殉葬", "fromPage": 790, "toPage": 800, "description": "天顺八年病逝，遗诏罢宫妃殉葬，为明代废止人殉之始。" }
    ],
    "ending": "病逝于北京（天顺八年），遗诏罢殉葬",
    "endingPage": 800,
    "note": "唯一被俘又复辟的明朝皇帝"
   },
   {
    "id": "ming-wangzhen",
    "primaryName": "王振",
    "names": [
     { "text": "王振", "type": "本名", "note": "蔚州人，自阉入宫" },
     { "text": "王先生", "type": "称呼", "note": "英宗自幼呼之为先生" },
     { "text": "司礼监太监", "type": "官职", "note": "掌司礼监，权倾一时" }
    ],
    "gender": "男",
    "role": "正统朝权宦 / 司礼监太监",
    "firstPage": 470,
    "appearances": [470, 550, 605, 618],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 470, "toPage": 615, "note": "掌司礼监，公卿争附" },
     { "place": "土木堡", "city": "怀来", "country": "中国", "fromPage": 610, "toPage": 618, "note": "死于乱军之中" }
    ],
    "factions": [
     { "name": "宦官", "group": "内廷", "fromPage": 470, "toPage": 618, "note": "明代第一位专权太监" }
    ],
    "groups": ["土木堡", "内廷"],
    "experiences": [
     { "title": "侍读东宫、掌司礼监", "fromPage": 470, "toPage": 540, "description": "本为教官，自阉入宫侍英宗于东宫，英宗即位后掌司礼监，口含天宪。" },
     { "title": "擅权乱政、构陷大臣", "fromPage": 540, "toPage": 600, "description": "以“擅权”罪名下刘球于狱杀之，公侯皆呼“翁父”，边防军饷多被侵没。" },
     { "title": "挟帝亲征、死于土木堡", "fromPage": 600, "toPage": 618, "description": "正统十四年挟英宗亲征瓦剌，屡改回师路线，兵败土木堡，被护卫将军樊忠锤杀。" }
    ],
    "ending": "死于土木堡乱军之中（被樊忠锤杀）",
    "endingPage": 618,
    "note": "明代宦官专权的开端"
   },
   {
    "id": "ming-zhenghe",
    "primaryName": "郑和",
    "names": [
     { "text": "马三宝", "type": "小名", "note": "本姓马，小字三宝，云南昆阳人" },
     { "text": "三宝太监", "type": "称呼", "note": "宫中通称" },
     { "text": "郑和", "type": "本名", "note": "靖难立功后赐姓郑" }
    ],
    "gender": "男",
    "role": "明代航海家 / 内官监太监",
    "firstPage": 480,
    "appearances": [480, 550, 700],
    "locations": [
     { "place": "太仓刘家港", "city": "苏州", "country": "中国", "fromPage": 480, "toPage": 550, "note": "七下西洋的启航地" },
     { "place": "古里", "city": "卡利卡特", "country": "中国", "fromPage": 550, "toPage": 700, "note": "西洋航线终点，卒于此" },
     { "place": "泉州", "city": "泉州", "country": "中国", "fromPage": 500, "toPage": 520, "note": "船队驻泊祈风之处" }
    ],
    "factions": [
     { "name": "宦官", "group": "内廷", "fromPage": 480, "toPage": 720, "note": "内官监太监，统领舟师" },
     { "name": "大明皇权", "group": "皇权", "fromPage": 480, "toPage": 720, "note": "奉成祖、宣宗之命出使西洋" }
    ],
    "groups": ["永乐", "内廷", "航海"],
    "experiences": [
     { "title": "靖难立功、赐姓郑", "fromPage": 480, "toPage": 490, "description": "本为燕王府内侍，靖难之役中于郑村坝立战功，成祖赐姓郑，擢内官监太监。" },
     { "title": "七下西洋", "fromPage": 490, "toPage": 700, "description": "永乐三年至宣德八年先后七次率舟师出使西洋，历三十余国，最远抵东非与红海。" },
     { "title": "卒于归途古里", "fromPage": 690, "toPage": 720, "description": "宣德七年第七次出海，宣德八年在古里病逝，船队由王景弘带回，下西洋就此终止。" }
    ],
    "ending": "第七次下西洋途中病逝于古里",
    "endingPage": 720,
    "note": "古代世界规模最大的远洋航行统帅"
   },
   {
    "id": "ming-yexian",
    "primaryName": "也先",
    "names": [
     { "text": "也先", "type": "本名", "note": "蒙古瓦剌部首领，脱欢之子" },
     { "text": "瓦剌太师", "type": "官职", "note": "自称太师淮王" }
    ],
    "gender": "男",
    "role": "瓦剌太师 / 土木堡之变发动者",
    "firstPage": 480,
    "appearances": [480, 605, 660, 700],
    "locations": [
     { "place": "漠北", "city": "和林", "country": "中国", "fromPage": 480, "toPage": 700, "note": "统一蒙古诸部" },
     { "place": "土木堡", "city": "怀来", "country": "中国", "fromPage": 605, "toPage": 625, "note": "围歼明军二十万，俘英宗" }
    ],
    "factions": [
     { "name": "瓦剌", "group": "外敌", "fromPage": 480, "toPage": 700, "note": "统一蒙古诸部，威逼明边" }
    ],
    "groups": ["外敌", "土木堡"],
    "experiences": [
     { "title": "统一蒙古诸部", "fromPage": 480, "toPage": 600, "description": "继承父脱欢之位，西征哈密、东服兀良哈，控制东西蒙古，以朝贡贸易之名索求无度。" },
     { "title": "土木堡之变、俘获英宗", "fromPage": 600, "toPage": 625, "description": "正统十四年分四路南下，于土木堡围歼明军主力，俘英宗，继而兵临北京城下。" },
     { "title": "北京受挫、内乱被杀", "fromPage": 625, "toPage": 700, "description": "京师城下为于谦所败，送还英宗后与明议和；景泰五年为部下阿剌知院所杀。" }
    ],
    "ending": "内乱中被部下所杀（景泰五年）",
    "endingPage": 700,
    "note": "土木堡之变的发动者"
   },
   {
    "id": "ming-fangxiaoru",
    "primaryName": "方孝孺",
    "names": [
     { "text": "方孝孺", "type": "本名", "note": "字希直，一字希古" },
     { "text": "正学先生", "type": "尊称", "note": "蜀献王赐名其读书处为正学" },
     { "text": "文学博士", "type": "官职", "note": "建文帝时任翰林侍讲、文学博士" }
    ],
    "gender": "男",
    "role": "建文朝文臣 / 宋濂弟子",
    "firstPage": 490,
    "appearances": [490, 500, 510],
    "locations": [
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 490, "toPage": 510, "note": "建文朝主修《太祖实录》" }
    ],
    "factions": [
     { "name": "文官集团", "group": "朝臣", "fromPage": 490, "toPage": 510, "note": "建文新政的核心文臣" }
    ],
    "groups": ["靖难", "文臣"],
    "experiences": [
     { "title": "蜀中讲学、召为侍讲", "fromPage": 490, "toPage": 495, "description": "宋濂门下第一，洪武中被召见而不即用，蜀献王聘为世子师，建文初召为翰林侍讲。" },
     { "title": "主持建文新政", "fromPage": 495, "toPage": 505, "description": "更定官制、省并州县、减轻赋役，为建文帝所倚重，诏檄多出其手。" },
     { "title": "拒草诏书、被诛十族", "fromPage": 505, "toPage": 510, "description": "朱棣入京命草即位诏，方孝孺投笔大骂“死即死耳，诏不可草”，被诛十族，死者八百七十余人。" }
    ],
    "ending": "被诛十族，磔于南京聚宝门外",
    "endingPage": 520,
    "note": "士人风骨的极致象征"
   },
   {
    "id": "ming-zhuyunwen",
    "primaryName": "朱允炆",
    "names": [
     { "text": "建文帝", "type": "尊称", "note": "年号建文" },
     { "text": "皇太孙", "type": "称呼", "note": "懿文太子朱标之子" }
    ],
    "gender": "男",
    "role": "明朝第二任皇帝",
    "firstPage": 510,
    "appearances": [510, 520, 540],
    "locations": [
     { "place": "应天府", "city": "南京", "country": "中国", "fromPage": 510, "toPage": 540, "note": "即位后削藩，终至城破" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 510, "toPage": 540, "note": "建文新政，倚重齐泰、黄子澄" }
    ],
    "groups": ["皇帝", "靖难"],
    "experiences": [
     { "title": "立为皇太孙、继位", "fromPage": 510, "toPage": 520, "description": "父朱标早逝，得太祖立为皇太孙，洪武三十一年即位，改元建文。" },
     { "title": "削藩激变、燕王起兵", "fromPage": 520, "toPage": 530, "description": "用齐泰、黄子澄议，先后废周、齐、湘、代、岷诸王，燕王朱棣遂以“清君侧”起兵。" },
     { "title": "南京城破、下落不明", "fromPage": 530, "toPage": 540, "description": "金川门李景隆开城迎降，宫中火起，建文帝不知所终，成为明史一大疑案。" }
    ],
    "ending": "南京城破后下落不明（宫中火起，一说出亡为僧）",
    "endingPage": 540,
    "note": "明史第一大疑案的主角"
   },
   {
    "id": "ming-zhuqiyu",
    "primaryName": "朱祁钰",
    "names": [
     { "text": "明代宗", "type": "尊称", "note": "庙号代宗" },
     { "text": "景泰帝", "type": "尊称", "note": "年号景泰" },
     { "text": "郕王", "type": "封号", "note": "英宗之弟，初封郕王" }
    ],
    "gender": "男",
    "role": "明朝第七任皇帝",
    "firstPage": 560,
    "appearances": [560, 700, 755],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 560, "toPage": 755, "note": "临危即位，主持北京保卫战" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 560, "toPage": 755, "note": "景泰一朝，任用于谦" }
    ],
    "groups": ["皇帝", "土木堡"],
    "experiences": [
     { "title": "临危即位、任用于谦", "fromPage": 560, "toPage": 640, "description": "英宗被俘后受命监国，旋即帝位，遥尊英宗为太上皇，擢于谦为兵部尚书主持战守。" },
     { "title": "北京保卫战获胜", "fromPage": 630, "toPage": 660, "description": "也先兵临城下，景泰帝亲登城督战，于谦背城列阵，九门连捷，瓦剌退兵。" },
     { "title": "易储与废、死后被削帝号", "fromPage": 660, "toPage": 770, "description": "废英宗之子朱见深太子位，立己子朱见济；英宗复辟后被废为郕王，未几病逝。" }
    ],
    "ending": "被废为郕王后病逝（一说被害）",
    "endingPage": 770,
    "note": "北京保卫战时期的皇帝"
   },
   {
    "id": "ming-shiheng",
    "primaryName": "石亨",
    "names": [
     { "text": "石亨", "type": "本名", "note": "渭南人，世袭武职" },
     { "text": "武清侯", "type": "尊称", "note": "北京保卫战后封武清侯" },
     { "text": "忠国公", "type": "尊称", "note": "夺门之变后封忠国公" }
    ],
    "gender": "男",
    "role": "夺门之变主谋 / 忠国公",
    "firstPage": 600,
    "appearances": [600, 650, 760, 785],
    "locations": [
     { "place": "大同", "city": "大同", "country": "中国", "fromPage": 600, "toPage": 620, "note": "阳和之战兵败下狱，京师危急时获释" },
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 620, "toPage": 785, "note": "掌京营，权倾朝野" }
    ],
    "factions": [
     { "name": "边军将领", "group": "武将", "fromPage": 600, "toPage": 785, "note": "北京保卫战功臣，后为权臣" }
    ],
    "groups": ["土木堡", "武将"],
    "experiences": [
     { "title": "阳和兵败下狱、起用掌京营", "fromPage": 600, "toPage": 620, "description": "正统十四年阳和之战全军覆没被下狱，北京危急时获释，协助于谦守城，掌五军大营。" },
     { "title": "北京保卫战立功、封侯", "fromPage": 620, "toPage": 680, "description": "率军于德胜门、西直门外力战瓦剌，以功封武清侯，然恃功骄纵。" },
     { "title": "夺门之变、陷害于谦", "fromPage": 760, "toPage": 785, "description": "景泰八年与徐有贞、曹吉祥拥英宗复辟，诬杀于谦，权倾一时，天顺四年以谋反罪下狱死。" }
    ],
    "ending": "以谋反罪下狱，死于狱中（天顺四年）",
    "endingPage": 785,
    "note": "夺门之变的首倡者"
   },
   {
    "id": "ming-yuqian",
    "primaryName": "于谦",
    "names": [
     { "text": "于少保", "type": "尊称", "note": "加少保衔，总督军务" },
     { "text": "兵部尚书", "type": "官职", "note": "景泰朝兵部尚书" },
     { "text": "节庵先生", "type": "尊称", "note": "号节庵，谥忠肃" }
    ],
    "gender": "男",
    "role": "兵部尚书 / 北京保卫战统帅",
    "firstPage": 620,
    "appearances": [620, 660, 700, 780, 790],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 620, "toPage": 790, "note": "主持九门防务，清白留世" },
     { "place": "杭州", "city": "杭州", "country": "中国", "fromPage": 620, "toPage": 640, "note": "籍贯钱塘，少年即以文天祥自励" }
    ],
    "factions": [
     { "name": "文官集团", "group": "朝臣", "fromPage": 620, "toPage": 790, "note": "景泰朝兵部尚书，磊落不附私党" }
    ],
    "groups": ["土木堡", "文臣", "名臣"],
    "experiences": [
     { "title": "力主固守、拥立景泰", "fromPage": 620, "toPage": 640, "description": "土木堡之变后京师震恐，力斥南迁之议，拥立郕王，调集各地勤王之师。" },
     { "title": "北京保卫战、九门退敌", "fromPage": 640, "toPage": 670, "description": "亲率二十二万军背城列阵于九门之外，闭门死战，屡破瓦剌，也先无功而退。" },
     { "title": "夺门之变后含冤被杀", "fromPage": 780, "toPage": 790, "description": "英宗复辟，石亨、徐有贞诬以“谋逆”，天顺元年正月被杀于崇文门外，抄家无余财。" }
    ],
    "ending": "被冤杀于北京崇文门外，成化年间平反",
    "endingPage": 790,
    "note": "“粉身碎骨浑不怕，要留清白在人间”"
   },
   {
    "id": "ming-lixian",
    "primaryName": "李贤",
    "names": [
     { "text": "李贤", "type": "本名", "note": "字原德，河南邓州人" },
     { "text": "李阁老", "type": "称呼", "note": "天顺、成化初内阁首辅" },
     { "text": "李文达", "type": "尊称", "note": "谥文达" }
    ],
    "gender": "男",
    "role": "天顺、成化初内阁首辅",
    "firstPage": 740,
    "appearances": [740, 840, 900, 960],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 740, "toPage": 965, "note": "入直文渊阁，历景泰、天顺、成化三朝" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 740, "toPage": 965, "note": "天顺朝入阁，宪宗初为首辅" }
    ],
    "groups": ["成化", "内阁"],
    "experiences": [
     { "title": "景泰朝入仕、天顺朝入阁", "fromPage": 740, "toPage": 840, "description": "宣德八年进士，历景泰朝兵部侍郎，天顺初入阁参机务，英宗晚年倚为肱骨。" },
     { "title": "主持为于谦平反", "fromPage": 840, "toPage": 900, "description": "宪宗初力主昭雪于谦冤狱，复其官职、赐祭葬，天下称快。" },
     { "title": "病卒于任", "fromPage": 900, "toPage": 965, "description": "成化二年病卒于官，赠太师，谥文达；所荐王翱、商辂等皆为名臣。" }
    ],
    "ending": "病卒于北京任上（成化二年）",
    "endingPage": 965,
    "note": "力主为于谦平反的首辅"
   },
   {
    "id": "ming-huaien",
    "primaryName": "怀恩",
    "names": [
     { "text": "怀恩", "type": "本名", "note": "原姓戴，山东高密人，幼年入宫" },
     { "text": "怀太监", "type": "称呼", "note": "司礼监掌印太监" },
     { "text": "司礼监掌印太监", "type": "官职", "note": "成化朝司礼监掌印太监" }
    ],
    "gender": "男",
    "role": "成化朝司礼监掌印太监",
    "firstPage": 790,
    "appearances": [790, 900, 1000],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 790, "toPage": 1010, "note": "掌司礼监，庇护孝宗幼年" }
    ],
    "factions": [
     { "name": "宦官", "group": "内廷", "fromPage": 790, "toPage": 1010, "note": "成化朝司礼监掌印太监，以正直称" }
    ],
    "groups": ["成化", "内廷"],
    "experiences": [
     { "title": "掌司礼监、持正不阿", "fromPage": 790, "toPage": 900, "description": "成化朝任司礼监掌印太监，与汪直、万贵妃抗衡，凡冤狱多所平反。" },
     { "title": "救护幼年朱祐樘", "fromPage": 950, "toPage": 1000, "description": "万贵妃屡欲加害皇太子，怀恩与商辂等力护，又密奏宪宗，终保全储位。" },
     { "title": "忤旨贬凤阳、孝宗召回", "fromPage": 1000, "toPage": 1010, "description": "因力谏罢黜妖僧继晓，触怒宪宗，被贬凤阳守陵；弘治初孝宗召还，旋卒。" }
    ],
    "ending": "忤旨贬凤阳守陵，后召回，旋卒",
    "endingPage": 1010,
    "note": "成化朝以正直著名的宦官"
   },
   {
    "id": "ming-wangshu",
    "primaryName": "王恕",
    "names": [
     { "text": "王恕", "type": "本名", "note": "字宗贯，号介庵，陕西三原人" },
     { "text": "王都御史", "type": "称呼", "note": "南京兵部尚书" },
     { "text": "王端毅", "type": "尊称", "note": "谥端毅" }
    ],
    "gender": "男",
    "role": "成化、弘治朝名臣 / 南京兵部尚书",
    "firstPage": 800,
    "appearances": [800, 900, 1000],
    "locations": [
     { "place": "南京", "city": "南京", "country": "中国", "fromPage": 800, "toPage": 1030, "note": "任南京兵部尚书、吏部尚书" }
    ],
    "factions": [
     { "name": "文官集团", "group": "朝臣", "fromPage": 800, "toPage": 1030, "note": "成化末弘治初直言敢谏之名臣" }
    ],
    "groups": ["弘治", "文臣"],
    "experiences": [
     { "title": "巡抚南方、屡平寇乱", "fromPage": 800, "toPage": 900, "description": "成化朝巡抚河南、云南，屡平寇乱，以刚直不阿著称。" },
     { "title": "任南京兵部尚书、直言敢谏", "fromPage": 900, "toPage": 1000, "description": "宪宗朝上疏言事无所避，与万贵妃、汪直相抗，时称“两京十二部，独有一王恕”。" },
     { "title": "弘治初为吏部尚书、致仕", "fromPage": 1000, "toPage": 1030, "description": "孝宗即位召为吏部尚书，铨选公允，弘治六年致仕，正德三年卒，年九十三。" }
    ],
    "ending": "致仕归乡，病卒于三原，年九十三",
    "endingPage": 1030,
    "note": "弘治初吏治澄清的关键人物"
   },
   {
    "id": "ming-zhujianshen",
    "primaryName": "朱见深",
    "names": [
     { "text": "明宪宗", "type": "尊称", "note": "庙号宪宗" },
     { "text": "成化帝", "type": "尊称", "note": "年号成化" }
    ],
    "gender": "男",
    "role": "明朝第九任皇帝",
    "firstPage": 810,
    "appearances": [810, 880, 960, 1050],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 810, "toPage": 1055, "note": "设西厂，宠万贵妃" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 810, "toPage": 1055, "note": "成化一朝二十三年" }
    ],
    "groups": ["皇帝", "成化"],
    "experiences": [
     { "title": "幼年坎坷、两度立废", "fromPage": 810, "toPage": 830, "description": "土木堡之变后父被俘，叔景泰帝废其太子位，童年孤苦，唯万氏相伴。" },
     { "title": "即位、平反于谦", "fromPage": 830, "toPage": 860, "description": "天顺八年即位，改元成化，为于谦平反昭雪，复其官职，天下称快。" },
     { "title": "设西厂、宠万贵妃", "fromPage": 900, "toPage": 1000, "description": "成化十三年设西厂以汪直领之，屡兴大狱；宠万贵妃，宫中生杀多出其手。" },
     { "title": "晚年好方术、病逝", "fromPage": 1000, "toPage": 1055, "description": "晚年崇信方士僧道，传奉官滥，成化二十三年万贵妃死后数月病逝。" }
    ],
    "ending": "病逝于北京（成化二十三年）",
    "endingPage": 1055,
    "note": "为于谦平反，亦开西厂之祸"
   },
   {
    "id": "ming-mawensheng",
    "primaryName": "马文升",
    "names": [
     { "text": "马文升", "type": "本名", "note": "字负图，号约斋，河南钧州人" },
     { "text": "马尚书", "type": "称呼", "note": "兵部、吏部尚书" },
     { "text": "马端肃", "type": "尊称", "note": "谥端肃" }
    ],
    "gender": "男",
    "role": "成化、弘治朝名臣 / 兵部尚书",
    "firstPage": 810,
    "appearances": [810, 920, 1040, 1100],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 810, "toPage": 1110, "note": "历任兵部、吏部尚书，练京营" }
    ],
    "factions": [
     { "name": "文官集团", "group": "朝臣", "fromPage": 810, "toPage": 1110, "note": "历成化、弘治、正德三朝，练京营、清屯田" }
    ],
    "groups": ["弘治", "文臣"],
    "experiences": [
     { "title": "巡抚辽东、整饬边务", "fromPage": 810, "toPage": 900, "description": "成化朝巡抚辽东，修城堡、练士卒，屡败女真诸部，边人称之。" },
     { "title": "任兵部尚书、练京营", "fromPage": 900, "toPage": 1040, "description": "弘治初为兵部尚书，裁汰冗兵、清核屯田，京营为之一振。" },
     { "title": "正德初致仕、卒于家", "fromPage": 1040, "toPage": 1110, "description": "正德初为吏部尚书，与刘健等力争诛刘瑾，事败致仕，正德五年卒，年八十五。" }
    ],
    "ending": "致仕归乡，病卒于家，年八十五",
    "endingPage": 1110,
    "note": "弘治朝兵政整饬的主持者"
   },
   {
    "id": "ming-wanguifei",
    "primaryName": "万贵妃",
    "names": [
     { "text": "万贞儿", "type": "本名", "note": "山东诸城人，四岁入宫" },
     { "text": "万皇贵妃", "type": "尊称", "note": "成化朝皇贵妃" },
     { "text": "万娘娘", "type": "称呼", "note": "宫中通称" }
    ],
    "gender": "女",
    "role": "明宪宗皇贵妃",
    "firstPage": 820,
    "appearances": [820, 900, 1000, 1045],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 820, "toPage": 1045, "note": "居昭德宫，六宫之事皆决于己" }
    ],
    "factions": [
     { "name": "后宫", "group": "内廷", "fromPage": 820, "toPage": 1045, "note": "成化朝实际掌后宫者" }
    ],
    "groups": ["成化", "后宫"],
    "experiences": [
     { "title": "侍宪宗于东宫", "fromPage": 820, "toPage": 840, "description": "本为孙太后宫女，长宪宗十七岁，侍其于东宫，废立之际不离左右，情分极深。" },
     { "title": "专宠后宫、干预诸事", "fromPage": 840, "toPage": 1000, "description": "宪宗即位后专宠，皇子皇女多遭其害，宫中孕妇不敢言，汪直亦依附之。" },
     { "title": "暴卒、宪宗旋崩", "fromPage": 1000, "toPage": 1045, "description": "成化二十三年正月暴卒，宪宗辍朝七日，未几亦崩。" }
    ],
    "ending": "暴卒于北京宫中（成化二十三年）",
    "endingPage": 1045,
    "note": "明代后宫干政的典型"
   },
   {
    "id": "ming-shanglu",
    "primaryName": "商辂",
    "names": [
     { "text": "商辂", "type": "本名", "note": "字弘载，号素庵，浙江淳安人" },
     { "text": "商阁老", "type": "称呼", "note": "成化朝内阁首辅" },
     { "text": "三元及第", "type": "称呼", "note": "乡试、会试、殿试皆第一" }
    ],
    "gender": "男",
    "role": "成化朝内阁首辅",
    "firstPage": 870,
    "appearances": [870, 950, 1000],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 870, "toPage": 1005, "note": "入直文渊阁，历英宗、宪宗两朝" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 870, "toPage": 1005, "note": "成化朝首辅，主持立朱祐樘为太子" }
    ],
    "groups": ["成化", "内阁"],
    "experiences": [
     { "title": "三元及第、入阁参机务", "fromPage": 870, "toPage": 900, "description": "宣德十年乡试第一，正统十年会试、殿试皆第一，为明代唯一“三元及第”者，后入阁。" },
     { "title": "力主立朱祐樘为太子", "fromPage": 950, "toPage": 990, "description": "宪宗宠万贵妃而久不立储，商辂率群臣屡请，终定朱祐樘为皇太子。" },
     { "title": "致仕归乡、卒于家", "fromPage": 990, "toPage": 1005, "description": "成化中为言官所攻，连疏致仕，弘治初卒，赠太傅，谥文毅。" }
    ],
    "ending": "致仕归乡，病卒于淳安",
    "endingPage": 1005,
    "note": "明代唯一乡试、会试、殿试皆第一的“三元”"
   },
   {
    "id": "ming-wangzhi",
    "primaryName": "汪直",
    "names": [
     { "text": "汪直", "type": "本名", "note": "广西大藤峡瑶人，幼年被俘入宫" },
     { "text": "西厂厂公", "type": "称呼", "note": "提督西厂" },
     { "text": "汪太监", "type": "称呼", "note": "成化朝权宦" }
    ],
    "gender": "男",
    "role": "西厂提督太监",
    "firstPage": 900,
    "appearances": [900, 960, 1030],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 900, "toPage": 1030, "note": "提督西厂，屡兴大狱" },
     { "place": "辽东", "city": "辽阳", "country": "中国", "fromPage": 960, "toPage": 990, "note": "监军辽东，激成边衅" }
    ],
    "factions": [
     { "name": "宦官", "group": "内廷", "fromPage": 900, "toPage": 1030, "note": "西厂提督，权倾中外" }
    ],
    "groups": ["成化", "内廷"],
    "experiences": [
     { "title": "领西厂、屡兴大狱", "fromPage": 900, "toPage": 960, "description": "成化十三年西厂设立，专以刺事为务，民间斗鸡骂狗皆可入罪，朝臣多被罗织。" },
     { "title": "监军辽东、激变边事", "fromPage": 960, "toPage": 1000, "description": "巡边辽东，擅杀边将、挑起与女真诸部冲突，谎报战功，中外侧目。" },
     { "title": "失宠贬南京、终死", "fromPage": 1000, "toPage": 1030, "description": "为东厂尚铭所劾，成化十七年调南京御马监，西厂罢；后降奉御，郁郁而卒。" }
    ],
    "ending": "失宠贬南京，郁郁而卒",
    "endingPage": 1030,
    "note": "西厂首任提督"
   },
   {
    "id": "ming-liujian",
    "primaryName": "刘健",
    "names": [
     { "text": "刘健", "type": "本名", "note": "字希贤，号晦庵，河南洛阳人" },
     { "text": "刘阁老", "type": "称呼", "note": "弘治朝内阁首辅" },
     { "text": "刘文靖", "type": "尊称", "note": "谥文靖" }
    ],
    "gender": "男",
    "role": "弘治朝内阁首辅",
    "firstPage": 950,
    "appearances": [950, 1060, 1150],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 950, "toPage": 1160, "note": "入直文渊阁，弘治朝为首辅" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 950, "toPage": 1160, "note": "弘治三君子之一，正德初力抗刘瑾" }
    ],
    "groups": ["弘治", "内阁"],
    "experiences": [
     { "title": "弘治朝入阁、为首辅", "fromPage": 950, "toPage": 1080, "description": "成化末入阁，弘治朝与李东阳、谢迁同心辅政，世称贤相。" },
     { "title": "辅佐弘治中兴", "fromPage": 1080, "toPage": 1120, "description": "正君德、抑侥幸、罢传奉，弘治一朝政治清明，刘健之力为多。" },
     { "title": "正德初力抗刘瑾、致仕", "fromPage": 1120, "toPage": 1160, "description": "武宗即位后刘瑾用事，刘健率九卿力争除之，事败连疏致仕，正德五年卒。" }
    ],
    "ending": "致仕归乡，病卒于洛阳",
    "endingPage": 1160,
    "note": "弘治三君子之首"
   },
   {
    "id": "ming-lidongyang",
    "primaryName": "李东阳",
    "names": [
     { "text": "李东阳", "type": "本名", "note": "字宾之，号西涯，湖南茶陵人" },
     { "text": "李阁老", "type": "称呼", "note": "弘治、正德朝内阁首辅" },
     { "text": "李文正", "type": "尊称", "note": "谥文正" }
    ],
    "gender": "男",
    "role": "弘治、正德朝内阁首辅",
    "firstPage": 960,
    "appearances": [960, 1100, 1180],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 960, "toPage": 1200, "note": "历三朝入阁，正德初为首辅" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 960, "toPage": 1200, "note": "弘治三君子之一，正德初周旋于刘瑾之间" }
    ],
    "groups": ["弘治", "正德", "内阁"],
    "experiences": [
     { "title": "入阁、与刘健谢迁同心", "fromPage": 960, "toPage": 1080, "description": "天顺八年进士，弘治八年入阁，与刘健、谢迁并称弘治三君子。" },
     { "title": "正德初与刘瑾周旋", "fromPage": 1120, "toPage": 1180, "description": "刘健、谢迁去位后独留内阁，曲意周旋以保全善类，为时论所讥。" },
     { "title": "致仕、卒于家", "fromPage": 1180, "toPage": 1215, "description": "正德七年致仕，正德十一年卒，赠太师，谥文正。" }
    ],
    "ending": "致仕归乡，病卒于家",
    "endingPage": 1215,
    "note": "茶陵诗派领袖，明代文学重臣"
   },
   {
    "id": "ming-zhuyoucheng",
    "primaryName": "朱祐樘",
    "names": [
     { "text": "明孝宗", "type": "尊称", "note": "庙号孝宗" },
     { "text": "弘治帝", "type": "尊称", "note": "年号弘治" }
    ],
    "gender": "男",
    "role": "明朝第十任皇帝",
    "firstPage": 1020,
    "appearances": [1020, 1080, 1120],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1020, "toPage": 1130, "note": "弘治中兴，勤政纳谏" },
     { "place": "安乐堂", "city": "北京", "country": "中国", "fromPage": 1020, "toPage": 1030, "note": "幼年被匿于西内安乐堂" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 1020, "toPage": 1130, "note": "弘治一朝，君臣相得" }
    ],
    "groups": ["皇帝", "弘治"],
    "experiences": [
     { "title": "幼年被匿、免于被害", "fromPage": 1020, "toPage": 1035, "description": "生母纪氏为宫中女史，恐遭万贵妃所害，被太监张敏等藏于安乐堂，六岁始见父皇。" },
     { "title": "即位、弘治中兴", "fromPage": 1060, "toPage": 1100, "description": "成化二十三年即位，斥逐方士、罢传奉官，任用刘健、李东阳、谢迁，朝政一新。" },
     { "title": "勤政早逝", "fromPage": 1100, "toPage": 1130, "description": "每日早朝、午朝不辍，弘治十八年病逝，年仅三十六，史称弘治中兴。" }
    ],
    "ending": "病逝于北京（弘治十八年），年三十六",
    "endingPage": 1130,
    "note": "明代唯一只娶一后的皇帝"
   },
   {
    "id": "ming-tangyin",
    "primaryName": "唐寅",
    "names": [
     { "text": "唐伯虎", "type": "称呼", "note": "字伯虎，民间通称" },
     { "text": "六如居士", "type": "尊称", "note": "晚年号六如居士" },
     { "text": "唐解元", "type": "尊称", "note": "弘治十一年应天府乡试第一" }
    ],
    "gender": "男",
    "role": "明代画家 / 吴中四才子",
    "firstPage": 1040,
    "appearances": [1040, 1090, 1130],
    "locations": [
     { "place": "桃花坞", "city": "苏州", "country": "中国", "fromPage": 1090, "toPage": 1140, "note": "筑桃花庵，卖画为生" },
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1060, "toPage": 1090, "note": "会试中因科场案被黜" }
    ],
    "factions": [
     { "name": "文官集团", "group": "朝臣", "fromPage": 1040, "toPage": 1070, "note": "举人出身，志在功名" }
    ],
    "groups": ["正德", "文人"],
    "experiences": [
     { "title": "乡试第一、会试蒙冤", "fromPage": 1040, "toPage": 1090, "description": "弘治十一年乡试第一，次年会试受徐经科场舞弊案牵连下狱，黜为吏，绝意仕进。" },
     { "title": "归吴卖画、纵情诗酒", "fromPage": 1090, "toPage": 1120, "description": "归苏州筑桃花庵，以卖画为生，与祝允明、文征明、徐祯卿并称吴中四才子。" },
     { "title": "应宁王聘、佯狂脱身", "fromPage": 1120, "toPage": 1140, "description": "正德中被宁王朱宸濠聘至南昌，察觉其有异志，佯狂裸奔得归，嘉靖二年病卒。" }
    ],
    "ending": "病逝于苏州桃花坞，年五十四",
    "endingPage": 1140,
    "note": "民间“唐伯虎点秋香”故事的原型"
   },
   {
    "id": "ming-zhuhouzhao",
    "primaryName": "朱厚照",
    "names": [
     { "text": "明武宗", "type": "尊称", "note": "庙号武宗" },
     { "text": "正德帝", "type": "尊称", "note": "年号正德" },
     { "text": "威武大将军朱寿", "type": "称呼", "note": "自封镇国公、威武大将军" }
    ],
    "gender": "男",
    "role": "明朝第十一任皇帝",
    "firstPage": 1060,
    "appearances": [1060, 1100, 1145, 1180],
    "locations": [
     { "place": "豹房", "city": "北京", "country": "中国", "fromPage": 1060, "toPage": 1180, "note": "久居豹房，不视朝" },
     { "place": "宣府", "city": "宣府", "country": "中国", "fromPage": 1100, "toPage": 1150, "note": "自称镇国公，巡幸塞上" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 1060, "toPage": 1180, "note": "正德一朝，宦官边将用事" }
    ],
    "groups": ["皇帝", "正德"],
    "experiences": [
     { "title": "即位、宠信八虎", "fromPage": 1060, "toPage": 1090, "description": "弘治十八年即位，年十五，宠刘瑾等宦官八人，居豹房为乐，章奏多不省。" },
     { "title": "自封大将军、应州御虏", "fromPage": 1100, "toPage": 1140, "description": "自封威武大将军朱寿，正德十二年应州之战亲督诸军击退蒙古小王子，自称大捷。" },
     { "title": "南巡落水、死于豹房", "fromPage": 1145, "toPage": 1180, "description": "正德十四年欲亲征宁王，途中游乐，十五年于清江浦落水染病，回京卒于豹房，年三十一。" }
    ],
    "ending": "南巡落水染病，病逝于豹房（正德十六年）",
    "endingPage": 1180,
    "note": "明代最荒嬉的皇帝之一"
   },
   {
    "id": "ming-liujin",
    "primaryName": "刘瑾",
    "names": [
     { "text": "刘瑾", "type": "本名", "note": "陕西兴平人，自阉入宫" },
     { "text": "立皇帝", "type": "称呼", "note": "时人称“一个坐皇帝，一个立皇帝”" },
     { "text": "司礼监掌印太监", "type": "官职", "note": "正德初掌司礼监，提督团营" }
    ],
    "gender": "男",
    "role": "正德初权宦 / 司礼监掌印太监",
    "firstPage": 1075,
    "appearances": [1075, 1130, 1170],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1075, "toPage": 1180, "note": "掌司礼监，设内行厂" }
    ],
    "factions": [
     { "name": "宦官", "group": "内廷", "fromPage": 1075, "toPage": 1180, "note": "正德初权倾中外，人称立皇帝" }
    ],
    "groups": ["正德", "内廷"],
    "experiences": [
     { "title": "侍武宗于东宫、掌司礼监", "fromPage": 1075, "toPage": 1100, "description": "本姓谈，自阉入宫，侍武宗于东宫；武宗即位后掌司礼监，与马永成等号“八虎”。" },
     { "title": "设内行厂、屡兴大狱", "fromPage": 1100, "toPage": 1150, "description": "立内行厂以刺事，枷死朝臣，索贿无度，公卿多被罗织，中外侧目。" },
     { "title": "以谋反罪被凌迟", "fromPage": 1150, "toPage": 1180, "description": "正德五年安化王叛乱檄文列其罪，太监张永告发，武宗亲抄其家，得金玉无数，遂磔于市。" }
    ],
    "ending": "以谋反罪被磔（凌迟）于市",
    "endingPage": 1180,
    "note": "正德朝“立皇帝”"
   },
   {
    "id": "ming-wangshouren",
    "primaryName": "王守仁",
    "names": [
     { "text": "王阳明", "type": "称呼", "note": "号阳明，世称阳明先生" },
     { "text": "阳明先生", "type": "尊称", "note": "心学集大成者" },
     { "text": "新建伯", "type": "尊称", "note": "以平宁王功封新建伯" }
    ],
    "gender": "男",
    "role": "明代思想家 / 军事家",
    "firstPage": 1080,
    "appearances": [1080, 1120, 1160, 1190],
    "locations": [
     { "place": "龙场驿", "city": "贵阳", "country": "中国", "fromPage": 1080, "toPage": 1110, "note": "贬为驿丞，龙场悟道" },
     { "place": "南昌", "city": "南昌", "country": "中国", "fromPage": 1150, "toPage": 1165, "note": "三十五天平定宁王之乱" },
     { "place": "南安", "city": "赣州", "country": "中国", "fromPage": 1190, "toPage": 1200, "note": "平思田之乱后病逝于归途" }
    ],
    "factions": [
     { "name": "文官集团", "group": "朝臣", "fromPage": 1080, "toPage": 1200, "note": "南京兵部尚书，以军功兼学者" }
    ],
    "groups": ["正德", "文臣", "学者"],
    "experiences": [
     { "title": "廷杖贬官、龙场悟道", "fromPage": 1080, "toPage": 1110, "description": "正德初上疏救戴铣，被廷杖四十、贬贵州龙场驿丞，于绝域中悟“心即理”，创阳明心学。" },
     { "title": "巡抚南赣、平盗定乱", "fromPage": 1110, "toPage": 1150, "description": "巡抚南赣汀漳，行十家牌法、练民兵，先后破谢志山、池仲容等，数年荡平数十年积寇。" },
     { "title": "三十五天平宁王之乱", "fromPage": 1150, "toPage": 1165, "description": "宁王朱宸濠举兵，王守仁仓促集兵，用围魏救赵之策直取南昌，于鄱阳湖擒宸濠，前后仅三十五日。" },
     { "title": "晚年出征、病逝归途", "fromPage": 1180, "toPage": 1200, "description": "嘉靖六年复起平思恩田州之乱，事毕请归，嘉靖七年病逝于江西南安舟中，遗言“此心光明，亦复何言”。" }
    ],
    "ending": "病逝于江西南安归途舟中",
    "endingPage": 1200,
    "note": "立德立功立言三不朽"
   },
   {
    "id": "ming-zhuhoucong",
    "primaryName": "朱厚熜",
    "names": [
     { "text": "明世宗", "type": "尊称", "note": "庙号世宗" },
     { "text": "嘉靖帝", "type": "尊称", "note": "年号嘉靖" },
     { "text": "兴献王世子", "type": "称呼", "note": "以外藩入继大统" }
    ],
    "gender": "男",
    "role": "明朝第十二任皇帝",
    "firstPage": 1210,
    "appearances": [1210, 1280, 1400, 1460],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1210, "toPage": 1465, "note": "大礼议、斋醮、二十余年不视朝" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 1210, "toPage": 1465, "note": "嘉靖一朝四十五年" }
    ],
    "groups": ["皇帝", "嘉靖"],
    "experiences": [
     { "title": "入继大统、大礼议之争", "fromPage": 1210, "toPage": 1260, "description": "正德无嗣，以兴献王世子入京即位，坚持追尊生父为帝，与杨廷和等文官集团激烈对抗，杖死十六人。" },
     { "title": "崇道斋醮、严嵩柄政", "fromPage": 1280, "toPage": 1420, "description": "中年后专意斋醮求长生，深居西苑二十余年不视朝，严嵩以善写青词入阁专权二十年。" },
     { "title": "庚戌之变、海瑞上疏", "fromPage": 1400, "toPage": 1450, "description": "嘉靖二十九年俺答兵临北京，史称庚戌之变；四十五年海瑞上《治安疏》直斥其非，帝怒而下之狱。" },
     { "title": "服丹而崩", "fromPage": 1450, "toPage": 1465, "description": "长期服食丹药，嘉靖四十五年十二月病逝于乾清宫，年六十。" }
    ],
    "ending": "服丹药后病逝于乾清宫（嘉靖四十五年）",
    "endingPage": 1465,
    "note": "明代在位时间第二长的皇帝"
   },
   {
    "id": "ming-xiayan",
    "primaryName": "夏言",
    "names": [
     { "text": "夏言", "type": "本名", "note": "字公谨，江西贵溪人" },
     { "text": "夏阁老", "type": "称呼", "note": "嘉靖朝内阁首辅" },
     { "text": "桂洲先生", "type": "尊称", "note": "号桂洲" }
    ],
    "gender": "男",
    "role": "嘉靖朝内阁首辅",
    "firstPage": 1230,
    "appearances": [1230, 1270, 1300],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1230, "toPage": 1305, "note": "四入内阁，两为首辅" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 1230, "toPage": 1305, "note": "主张收复河套，与严嵩对立" }
    ],
    "groups": ["嘉靖", "内阁"],
    "experiences": [
     { "title": "大礼议得幸、入阁为首辅", "fromPage": 1230, "toPage": 1265, "description": "大礼议中支持世宗，骤贵入阁，嘉靖十八年为首辅，革除弊政、裁抑宦官。" },
     { "title": "议复河套、触怒世宗", "fromPage": 1265, "toPage": 1300, "description": "支持总督曾铣议复河套，世宗中变，严嵩乘机攻其“强君胁众”，夏言被夺官下狱。" },
     { "title": "弃市于西市", "fromPage": 1300, "toPage": 1305, "description": "嘉靖二十七年被以“交结近侍”罪弃市，年六十七，曾铣同时被杀。" }
    ],
    "ending": "被严嵩构陷，弃市于西市",
    "endingPage": 1305,
    "note": "明代首位被处死的首辅"
   },
   {
    "id": "ming-yansong",
    "primaryName": "严嵩",
    "names": [
     { "text": "严嵩", "type": "本名", "note": "字惟中，江西分宜人" },
     { "text": "严阁老", "type": "称呼", "note": "嘉靖朝内阁首辅" },
     { "text": "严分宜", "type": "称呼", "note": "以籍贯称之" }
    ],
    "gender": "男",
    "role": "嘉靖朝内阁首辅 / 权臣",
    "firstPage": 1240,
    "appearances": [1240, 1320, 1420, 1440],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1240, "toPage": 1440, "note": "入直西苑，专擅国政二十年" },
     { "place": "分宜", "city": "袁州", "country": "中国", "fromPage": 1440, "toPage": 1450, "note": "罢黜后乞食故里" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 1240, "toPage": 1450, "note": "以青词得幸，与子严世蕃把持朝政" }
    ],
    "groups": ["嘉靖", "内阁", "权臣"],
    "experiences": [
     { "title": "以青词入阁、排挤夏言", "fromPage": 1240, "toPage": 1290, "description": "嘉靖二十一年入阁，善撰青词称帝意，勾结仇鸾诬陷首辅夏言，致其弃市，遂为首辅。" },
     { "title": "专擅国政二十年", "fromPage": 1290, "toPage": 1420, "description": "与子严世蕃卖官鬻爵，边饷军费多被侵没；杀杨继盛、沈炼等言官，中外侧目。" },
     { "title": "失宠罢黜、饿死故里", "fromPage": 1420, "toPage": 1450, "description": "徐阶引蓝道行以扶乩进言，严嵩渐失帝宠；嘉靖四十一年罢相，四十四年严世蕃被诛，严嵩乞食而死。" }
    ],
    "ending": "罢相后被抄家，饿死于故里",
    "endingPage": 1450,
    "note": "明代六大奸臣之一"
   },
   {
    "id": "ming-xujie",
    "primaryName": "徐阶",
    "names": [
     { "text": "徐阶", "type": "本名", "note": "字子升，松江华亭人" },
     { "text": "徐阁老", "type": "称呼", "note": "嘉靖末隆庆初内阁首辅" },
     { "text": "存斋先生", "type": "尊称", "note": "号存斋，谥文贞" }
    ],
    "gender": "男",
    "role": "嘉靖末内阁首辅",
    "firstPage": 1250,
    "appearances": [1250, 1350, 1430, 1470],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1250, "toPage": 1470, "note": "隐忍事严嵩，终取而代之" },
     { "place": "华亭", "city": "松江", "country": "中国", "fromPage": 1470, "toPage": 1490, "note": "致仕家居，为海瑞所逼退田" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 1250, "toPage": 1490, "note": "扳倒严嵩，引张居正入阁" }
    ],
    "groups": ["嘉靖", "内阁"],
    "experiences": [
     { "title": "隐忍事严嵩、结帝宠", "fromPage": 1250, "toPage": 1420, "description": "入阁后屈事严嵩十余年，密结道士蓝道行，借扶乩之言动摇世宗对严嵩的信任。" },
     { "title": "扳倒严嵩、任首辅", "fromPage": 1420, "toPage": 1450, "description": "嘉靖四十一年严嵩罢相，徐阶为首辅，尽反严嵩之政，为杨继盛等平反。" },
     { "title": "草遗诏、引张居正", "fromPage": 1450, "toPage": 1470, "description": "世宗崩后草拟遗诏，罢斋醮、释言官；隆庆中引门生张居正入阁，后为高拱所逼致仕。" },
     { "title": "晚年退田、病卒", "fromPage": 1470, "toPage": 1490, "description": "海瑞巡抚应天，逼其退出侵占民田，子弟多被治罪；万历十一年病卒，年八十一。" }
    ],
    "ending": "致仕家居，病卒于华亭，年八十一",
    "endingPage": 1490,
    "note": "以隐忍扳倒严嵩的政治高手"
   },
   {
    "id": "ming-qijiguang",
    "primaryName": "戚继光",
    "names": [
     { "text": "戚元敬", "type": "本名", "note": "字元敬，号南塘" },
     { "text": "戚家军统领", "type": "称呼", "note": "创鸳鸯阵，练戚家军" },
     { "text": "戚南塘", "type": "尊称", "note": "晚年号孟诸，谥武毅" }
    ],
    "gender": "男",
    "role": "明代抗倭名将 / 蓟州总兵",
    "firstPage": 1440,
    "appearances": [1440, 1500, 1580, 1650, 1680],
    "locations": [
     { "place": "台州", "city": "台州", "country": "中国", "fromPage": 1440, "toPage": 1520, "note": "台州九捷，荡平浙东倭患" },
     { "place": "兴化", "city": "兴化", "country": "中国", "fromPage": 1520, "toPage": 1560, "note": "援闽破倭，横屿之战" },
     { "place": "蓟州", "city": "蓟州", "country": "中国", "fromPage": 1580, "toPage": 1680, "note": "镇守蓟州十六年，修敌台练边军" }
    ],
    "factions": [
     { "name": "边军将领", "group": "武将", "fromPage": 1440, "toPage": 1690, "note": "由抗倭名将转镇蓟州" }
    ],
    "groups": ["嘉靖", "万历", "名将"],
    "experiences": [
     { "title": "练戚家军、创鸳鸯阵", "fromPage": 1440, "toPage": 1490, "description": "在义乌招募矿工农民成军，创鸳鸯阵与狼筅长牌配合，纪律严明，号称戚家军。" },
     { "title": "台州九捷、平定倭患", "fromPage": 1490, "toPage": 1540, "description": "嘉靖四十年台州九战九捷，斩倭数千；后援福建，破横屿、牛田、林墩，与俞大猷共平闽广倭患。" },
     { "title": "镇蓟州十六年、修边墙敌台", "fromPage": 1580, "toPage": 1680, "description": "隆庆初调镇蓟州，张居正倚为长城，修空心敌台一千二百座，练兵十万，蓟门晏然。" },
     { "title": "张居正死后被清算、卒于贫病", "fromPage": 1680, "toPage": 1700, "description": "万历十年张居正卒，戚继光被劾为党附，调广东，旋罢归登州，贫病而卒。" }
    ],
    "ending": "罢官归乡，贫病而卒于登州",
    "endingPage": 1700,
    "note": "明代最杰出的抗倭将领"
   },
   {
    "id": "ming-gaogong",
    "primaryName": "高拱",
    "names": [
     { "text": "高拱", "type": "本名", "note": "字肃卿，河南新郑人" },
     { "text": "高新郑", "type": "称呼", "note": "以籍贯称之" },
     { "text": "高阁老", "type": "称呼", "note": "隆庆朝内阁首辅" }
    ],
    "gender": "男",
    "role": "隆庆朝内阁首辅",
    "firstPage": 1520,
    "appearances": [1520, 1580, 1600],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1520, "toPage": 1605, "note": "隆庆朝首辅，长于军事边务" },
     { "place": "新郑", "city": "开封", "country": "中国", "fromPage": 1605, "toPage": 1640, "note": "被逐归乡，闭门著书" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 1520, "toPage": 1640, "note": "与张居正由友成敌" }
    ],
    "groups": ["隆庆", "内阁"],
    "experiences": [
     { "title": "入阁、与徐阶相争", "fromPage": 1520, "toPage": 1560, "description": "嘉靖末入阁，为徐阶所抑；隆庆初复起，以吏部尚书掌阁务，与徐阶互相攻讦。" },
     { "title": "任首辅、边务多有建树", "fromPage": 1560, "toPage": 1600, "description": "隆庆三年为首辅，举荐戚继光镇蓟州、潘季驯治河，促成俺答封贡，边境得安。" },
     { "title": "被冯保张居正逐归", "fromPage": 1600, "toPage": 1640, "description": "隆庆崩后，冯保与张居正合力指其“专权”，高拱被逐归乡，万历六年卒于家。" }
    ],
    "ending": "被逐归乡，病卒于新郑家中",
    "endingPage": 1640,
    "note": "有才干而刚愎，终为张居正所逐"
   },
   {
    "id": "ming-zhangjuzheng",
    "primaryName": "张居正",
    "names": [
     { "text": "张江陵", "type": "称呼", "note": "湖北江陵人，世称张江陵" },
     { "text": "首辅", "type": "官职", "note": "万历初内阁首辅，柄政十年" },
     { "text": "太岳先生", "type": "尊称", "note": "字叔大，号太岳" }
    ],
    "gender": "男",
    "role": "万历初内阁首辅 / 改革家",
    "firstPage": 1540,
    "appearances": [1540, 1580, 1620, 1700, 1730],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1540, "toPage": 1730, "note": "柄政十年，行一条鞭法" },
     { "place": "江陵", "city": "荆州", "country": "中国", "fromPage": 1730, "toPage": 1745, "note": "死后被清算，几至开棺戮尸" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 1540, "toPage": 1730, "note": "万历初首辅，权倾朝野" }
    ],
    "groups": ["万历", "内阁", "改革家"],
    "experiences": [
     { "title": "入阁、逐高拱为首辅", "fromPage": 1540, "toPage": 1600, "description": "徐阶门生，隆庆初入阁；隆庆六年与冯保合谋逐高拱，遂为首辅，万历帝年幼，政由己出。" },
     { "title": "推行考成法与一条鞭法", "fromPage": 1600, "toPage": 1680, "description": "立考成法核吏治，清丈天下田亩，行一条鞭法并赋役，太仓积粟可支十年，史称万历中兴。" },
     { "title": "夺情风波与专权", "fromPage": 1680, "toPage": 1710, "description": "父丧夺情不归，编修吴中行等上疏反对被杖；三子相继登第，门生故吏遍布朝列。" },
     { "title": "死后被清算", "fromPage": 1720, "toPage": 1745, "description": "万历十年病逝，赠上柱国；次年即被追劾，夺官抄家，长子自尽，家人饿死十余口。" }
    ],
    "ending": "病逝于北京，死后被抄家夺谥",
    "endingPage": 1730,
    "note": "明代最著名的改革首辅"
   },
   {
    "id": "ming-zhuyijun",
    "primaryName": "朱翊钧",
    "names": [
     { "text": "明神宗", "type": "尊称", "note": "庙号神宗" },
     { "text": "万历帝", "type": "尊称", "note": "年号万历" }
    ],
    "gender": "男",
    "role": "明朝第十三任皇帝",
    "firstPage": 1600,
    "appearances": [1600, 1650, 1750, 1850, 1900],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1600, "toPage": 1905, "note": "前十年赖张居正，后三十年怠政" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 1600, "toPage": 1905, "note": "万历一朝四十八年" }
    ],
    "groups": ["皇帝", "万历"],
    "experiences": [
     { "title": "幼年即位、张居正辅政", "fromPage": 1600, "toPage": 1680, "description": "隆庆六年十岁即位，张居正为首辅，行考成法一条鞭法，国库充盈，史称万历中兴。" },
     { "title": "亲政、援朝抗倭", "fromPage": 1700, "toPage": 1800, "description": "万历十年亲政，前朝尚勤；二十年宁夏之役、朝鲜之役、播州之役三大征皆胜，然国用大耗。" },
     { "title": "国本之争、怠政数十年", "fromPage": 1800, "toPage": 1880, "description": "欲立郑贵妃之子朱常洵，与群臣争国本十五年，遂深居不出，章奏留中，缺官不补。" },
     { "title": "萨尔浒大败、病逝", "fromPage": 1880, "toPage": 1905, "description": "万历四十七年萨尔浒之战明军四路丧师，辽东自此不可支；四十八年病逝，年五十八。" }
    ],
    "ending": "病逝于北京（万历四十八年）",
    "endingPage": 1905,
    "note": "明朝由盛转衰的关键皇帝"
   },
   {
    "id": "ming-shenshixing",
    "primaryName": "申时行",
    "names": [
     { "text": "申时行", "type": "本名", "note": "字汝默，长洲人" },
     { "text": "申阁老", "type": "称呼", "note": "万历朝内阁首辅" },
     { "text": "瑶泉先生", "type": "尊称", "note": "号瑶泉，谥文定" }
    ],
    "gender": "男",
    "role": "万历朝内阁首辅",
    "firstPage": 1640,
    "appearances": [1640, 1720, 1760],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1640, "toPage": 1760, "note": "张居正之后调和君臣" },
     { "place": "长洲", "city": "苏州", "country": "中国", "fromPage": 1760, "toPage": 1790, "note": "致仕归乡，优游林下" }
    ],
    "factions": [
     { "name": "内阁", "group": "朝臣", "fromPage": 1640, "toPage": 1790, "note": "主张宽大调和，被称为和事佬" }
    ],
    "groups": ["万历", "内阁"],
    "experiences": [
     { "title": "入阁、承张居正之后", "fromPage": 1640, "toPage": 1700, "description": "万历六年入阁，张居正卒后与张四维同秉政，一反严苛之政，务为宽大。" },
     { "title": "任首辅、争国本", "fromPage": 1700, "toPage": 1760, "description": "万历十一年为首辅，屡请早立太子，与神宗往复争持，国本之议久不能决。" },
     { "title": "被劾致仕、卒于家", "fromPage": 1760, "toPage": 1790, "description": "万历十九年为言官所攻，连疏求去，归长洲二十年，万历四十二年卒，年八十。" }
    ],
    "ending": "致仕归乡，病卒于长洲家中",
    "endingPage": 1790,
    "note": "典型的调和型首辅"
   },
   {
    "id": "ming-weizhongxian",
    "primaryName": "魏忠贤",
    "names": [
     { "text": "李进忠", "type": "本名", "note": "入宫时原名，后复姓魏赐名忠贤" },
     { "text": "九千岁", "type": "称呼", "note": "阉党献谀之称" },
     { "text": "厂公", "type": "称呼", "note": "提督东厂，人称厂公" }
    ],
    "gender": "男",
    "role": "天启朝司礼监秉笔太监 / 阉党首魁",
    "firstPage": 1860,
    "appearances": [1860, 1950, 2020, 2060],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1860, "toPage": 2060, "note": "掌东厂，生祠遍天下" },
     { "place": "阜城", "city": "阜城", "country": "中国", "fromPage": 2060, "toPage": 2065, "note": "被贬途中自缢于客店" }
    ],
    "factions": [
     { "name": "无赖", "group": "市井", "fromPage": 1860, "toPage": 1880, "note": "少时为赌徒无赖，自阉入宫" },
     { "name": "宦官", "group": "内廷", "fromPage": 1880, "toPage": 2030, "note": "司礼监秉笔太监兼提督东厂" },
     { "name": "阉党", "group": "内廷", "fromPage": 1950, "toPage": 2060, "note": "五虎五彪十狗遍列朝班" }
    ],
    "groups": ["天启", "内廷", "权宦"],
    "experiences": [
     { "title": "自阉入宫、结客氏", "fromPage": 1860, "toPage": 1900, "description": "本为市井无赖，赌博输尽后自阉入宫，与熹宗乳母客氏相结，渐掌司礼监。" },
     { "title": "提督东厂、兴东林党狱", "fromPage": 1950, "toPage": 2040, "description": "天启四年后大举排陷东林，杨涟、左光斗等六君子死于诏狱，毁天下书院，生祠遍天下。" },
     { "title": "崇祯即位、贬谪自缢", "fromPage": 2050, "toPage": 2065, "description": "天启七年熹宗崩，崇祯帝即位，十一月发配凤阳，途中闻逮治之命，自缢于阜城客店。" }
    ],
    "ending": "被贬往凤阳途中自缢于阜城",
    "endingPage": 2065,
    "note": "中国历史上最著名的权宦之一"
   },
   {
    "id": "ming-yanglian",
    "primaryName": "杨涟",
    "names": [
     { "text": "杨涟", "type": "本名", "note": "字文孺，号大洪，湖北应山人" },
     { "text": "东林六君子", "type": "称呼", "note": "东林党核心人物之一" },
     { "text": "杨都御史", "type": "官职", "note": "左副都御史" }
    ],
    "gender": "男",
    "role": "东林党人 / 左副都御史",
    "firstPage": 1870,
    "appearances": [1870, 1970, 2010],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1870, "toPage": 2010, "note": "居朝弹劾魏忠贤" },
     { "place": "诏狱", "city": "北京", "country": "中国", "fromPage": 2010, "toPage": 2015, "note": "受酷刑死于狱中" }
    ],
    "factions": [
     { "name": "东林党", "group": "朝臣", "fromPage": 1870, "toPage": 2015, "note": "东林六君子之首" }
    ],
    "groups": ["天启", "东林"],
    "experiences": [
     { "title": "移宫案出力、声名大起", "fromPage": 1870, "toPage": 1920, "description": "泰昌帝崩后力主李选侍移宫，拥立天启帝，以骨鲠闻名朝野。" },
     { "title": "上疏劾魏忠贤二十四大罪", "fromPage": 1980, "toPage": 2000, "description": "天启四年上疏列魏忠贤二十四大罪，字字诛心，天下传诵，由是与阉党势不两立。" },
     { "title": "下诏狱、受酷刑死", "fromPage": 2000, "toPage": 2015, "description": "天启五年被诬受贿下诏狱，受土囊压身、铁钉贯耳之刑而死，年五十四。" }
    ],
    "ending": "被杀于诏狱，受酷刑而死",
    "endingPage": 2015,
    "note": "东林党狱最著名的死难者"
   },
   {
    "id": "ming-xuxiake",
    "primaryName": "徐霞客",
    "names": [
     { "text": "徐弘祖", "type": "本名", "note": "名弘祖，字振之" },
     { "text": "霞客", "type": "称呼", "note": "号霞客，以号行" },
     { "text": "徐霞客", "type": "称呼", "note": "江阴人，明代最大旅行家" }
    ],
    "gender": "男",
    "role": "明代地理学家 / 旅行家",
    "firstPage": 1880,
    "appearances": [1880, 2100, 2250, 2330],
    "locations": [
     { "place": "江阴", "city": "常州", "country": "中国", "fromPage": 1880, "toPage": 2340, "note": "故居梧塍里，出游必归" },
     { "place": "桂林", "city": "桂林", "country": "中国", "fromPage": 2100, "toPage": 2180, "note": "详察喀斯特地貌" },
     { "place": "大理", "city": "大理", "country": "中国", "fromPage": 2250, "toPage": 2330, "note": "万里遐征，遍历西南" }
    ],
    "factions": [
     { "name": "文官集团", "group": "朝臣", "fromPage": 1880, "toPage": 1900, "note": "少有文名，不应科举" }
    ],
    "groups": ["万历", "崇祯", "学者"],
    "experiences": [
     { "title": "少年立志、弃举业远游", "fromPage": 1880, "toPage": 2050, "description": "江阴富家子弟，不慕科举，自二十余岁起游历名山，三十余年间足迹遍及十四省。" },
     { "title": "西南万里遐征", "fromPage": 2250, "toPage": 2330, "description": "崇祯九年起作最后一次远游，历浙江、江西、湖南、广西、贵州、云南，考察洞穴、江河源流。" },
     { "title": "病归江阴、卒于家", "fromPage": 2330, "toPage": 2340, "description": "崇祯十三年因病由丽江土司派人送回江阴，次年病卒；所留日记由后人辑为《徐霞客游记》。" }
    ],
    "ending": "远游染病归乡，病逝于江阴",
    "endingPage": 2340,
    "note": "《徐霞客游记》作者，中国古代最伟大的旅行家"
   },
   {
    "id": "ming-zuoguangdou",
    "primaryName": "左光斗",
    "names": [
     { "text": "左光斗", "type": "本名", "note": "字遗直，号浮丘，安徽桐城人" },
     { "text": "左佥都御史", "type": "官职", "note": "左佥都御史" },
     { "text": "东林六君子", "type": "称呼", "note": "东林党核心人物之一" }
    ],
    "gender": "男",
    "role": "东林党人 / 左佥都御史",
    "firstPage": 1890,
    "appearances": [1890, 1990, 2016],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 1890, "toPage": 2016, "note": "办屯田、抗阉党" },
     { "place": "诏狱", "city": "北京", "country": "中国", "fromPage": 2016, "toPage": 2020, "note": "与杨涟同日死于狱中" }
    ],
    "factions": [
     { "name": "东林党", "group": "朝臣", "fromPage": 1890, "toPage": 2020, "note": "东林六君子之一" }
    ],
    "groups": ["天启", "东林"],
    "experiences": [
     { "title": "移宫案与屯田水利", "fromPage": 1890, "toPage": 1940, "description": "与杨涟同主移宫之议，又上疏请兴畿辅水利、行屯田，为时所称。" },
     { "title": "劾魏忠贤、被下诏狱", "fromPage": 1980, "toPage": 2015, "description": "与杨涟同劾魏忠贤，又劾魏广微，天启五年被诬受贿二万两，下诏狱。" },
     { "title": "狱中勉史可法、同日死", "fromPage": 2015, "toPage": 2020, "description": "在狱中受炮烙之刑，仍勉门生史可法以国事为重，与杨涟同日死于狱中。" }
    ],
    "ending": "被杀于诏狱，与杨涟同日死",
    "endingPage": 2020,
    "note": "史可法的座师"
   },
   {
    "id": "ming-sunchengzong",
    "primaryName": "孙承宗",
    "names": [
     { "text": "孙承宗", "type": "本名", "note": "字稚绳，号恺阳，河北高阳人" },
     { "text": "孙阁老", "type": "称呼", "note": "天启帝师、东阁大学士" },
     { "text": "孙督师", "type": "称呼", "note": "督师辽东，修复关宁锦防线" }
    ],
    "gender": "男",
    "role": "明末督师 / 东阁大学士",
    "firstPage": 1900,
    "appearances": [1900, 2100, 2160, 2250],
    "locations": [
     { "place": "辽东", "city": "宁远", "country": "中国", "fromPage": 1900, "toPage": 2180, "note": "督师辽东，筑宁锦防线" },
     { "place": "高阳", "city": "保定", "country": "中国", "fromPage": 2250, "toPage": 2265, "note": "清兵破城，全家殉国" }
    ],
    "factions": [
     { "name": "文官集团", "group": "朝臣", "fromPage": 1900, "toPage": 2020, "note": "天启帝师，东林同情者" },
     { "name": "边军将领", "group": "武将", "fromPage": 2100, "toPage": 2265, "note": "督师辽东，构筑关宁锦防线" }
    ],
    "groups": ["天启", "崇祯", "督师"],
    "experiences": [
     { "title": "为天启帝师、入阁", "fromPage": 1900, "toPage": 2100, "description": "万历末进士，天启初为熹宗讲官，后以东阁大学士入阁，力主辽事不可弃。" },
     { "title": "督师辽东、筑宁锦防线", "fromPage": 2100, "toPage": 2180, "description": "自请督师山海关，修宁远、锦州、大凌河等城，练车营水师，拓地四百里。" },
     { "title": "柳河之败去职、再起", "fromPage": 2180, "toPage": 2240, "description": "因柳河之败及阉党排挤去职；崇祯二年清兵入塞，复起守通州，后因大凌河之败罢归。" },
     { "title": "高阳殉国", "fromPage": 2240, "toPage": 2265, "description": "崇祯十一年清军破高阳，孙承宗率家人守城，城破自缢，子孙十余口皆死。" }
    ],
    "ending": "高阳城破，自缢殉国",
    "endingPage": 2265,
    "note": "关宁锦防线的缔造者"
   },
   {
    "id": "ming-zhuyoujian",
    "primaryName": "朱由检",
    "names": [
     { "text": "崇祯帝", "type": "尊称", "note": "年号崇祯" },
     { "text": "明思宗", "type": "尊称", "note": "庙号思宗，后改毅宗" },
     { "text": "信王", "type": "封号", "note": "即位前封信王" }
    ],
    "gender": "男",
    "role": "明朝最后一任皇帝",
    "firstPage": 2050,
    "appearances": [2050, 2130, 2200, 2280, 2340],
    "locations": [
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 2050, "toPage": 2350, "note": "十七年勤政，终至煤山" },
     { "place": "煤山", "city": "北京", "country": "中国", "fromPage": 2340, "toPage": 2350, "note": "自缢于老槐树下" }
    ],
    "factions": [
     { "name": "大明皇权", "group": "皇权", "fromPage": 2050, "toPage": 2350, "note": "崇祯一朝十七年，内有流寇外有建虏" }
    ],
    "groups": ["皇帝", "崇祯"],
    "experiences": [
     { "title": "即位除魏忠贤", "fromPage": 2050, "toPage": 2080, "description": "天启七年即位，不动声色，两月间贬魏忠贤、罢阉党，定逆案，朝野称快。" },
     { "title": "勤政而多疑、十七年换五十相", "fromPage": 2080, "toPage": 2260, "description": "鸡鸣而起、夜分不寐，然刚愎多疑，诛督师、杀大臣，内阁更易如弈棋。" },
     { "title": "平台召对与杀袁崇焕", "fromPage": 2185, "toPage": 2232, "description": "崇祯元年平台召对袁崇焕许以五年复辽；己巳之变后下其狱，三年磔于西市。" },
     { "title": "煤山自缢、明亡", "fromPage": 2330, "toPage": 2350, "description": "崇祯十七年李自成破居庸关，帝登煤山自缢，遗书“任贼分裂朕尸，勿伤百姓一人”。" }
    ],
    "ending": "李自成入京，自缢于煤山",
    "endingPage": 2350,
    "note": "“君非亡国之君，皆亡国之臣”"
   },
   {
    "id": "ming-nuerhachi",
    "primaryName": "努尔哈赤",
    "names": [
     { "text": "努尔哈赤", "type": "本名", "note": "爱新觉罗氏，建州左卫首领" },
     { "text": "清太祖", "type": "尊称", "note": "清朝追尊太祖高皇帝" },
     { "text": "覆育列国英明汗", "type": "尊称", "note": "建立后金时的汗号" }
    ],
    "gender": "男",
    "role": "后金开国汗 / 清太祖",
    "firstPage": 2100,
    "appearances": [2100, 2180, 2230],
    "locations": [
     { "place": "赫图阿拉", "city": "兴京", "country": "中国", "fromPage": 2100, "toPage": 2200, "note": "建后金，以七大恨告天伐明" },
     { "place": "沈阳", "city": "沈阳", "country": "中国", "fromPage": 2200, "toPage": 2220, "note": "迁都沈阳，攻宁远受挫" },
     { "place": "叆鸡堡", "city": "沈阳", "country": "中国", "fromPage": 2225, "toPage": 2235, "note": "宁远兵败后病逝于叆鸡堡" }
    ],
    "factions": [
     { "name": "后金/清", "group": "外敌", "fromPage": 2100, "toPage": 2235, "note": "统一女真诸部，建立后金" }
    ],
    "groups": ["外敌", "后金"],
    "experiences": [
     { "title": "统一女真诸部、创八旗", "fromPage": 2100, "toPage": 2160, "description": "以十三副遗甲起兵，历三十余年统一建州、海西、东海女真，创八旗制度、满文。" },
     { "title": "萨尔浒大败明军", "fromPage": 2160, "toPage": 2200, "description": "万历四十六年以七大恨告天伐明，萨尔浒之战以“凭尔几路来，我只一路去”大破明军四路。" },
     { "title": "宁远受挫、病逝", "fromPage": 2200, "toPage": 2235, "description": "天启六年攻宁远，被袁崇焕红夷大炮所伤，退兵后郁郁，同年病逝于叆鸡堡。" }
    ],
    "ending": "攻宁远受炮伤，病逝于叆鸡堡",
    "endingPage": 2235,
    "note": "清朝奠基者"
   },
   {
    "id": "ming-yuanchonghuan",
    "primaryName": "袁崇焕",
    "names": [
     { "text": "袁督师", "type": "称呼", "note": "督师蓟辽兼登莱天津军务" },
     { "text": "袁元素", "type": "本名", "note": "字元素，号自如，广东东莞人" },
     { "text": "袁蛮子", "type": "绰号", "note": "同僚戏称，以其敢言" }
    ],
    "gender": "男",
    "role": "明末蓟辽督师",
    "firstPage": 2120,
    "appearances": [2120, 2160, 2190, 2220],
    "locations": [
     { "place": "宁远", "city": "宁远", "country": "中国", "fromPage": 2120, "toPage": 2190, "note": "宁远大捷、宁锦大捷" },
     { "place": "山海关", "city": "山海关", "country": "中国", "fromPage": 2190, "toPage": 2220, "note": "督师蓟辽，守关拒清" },
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 2220, "toPage": 2232, "note": "平台召对、下狱凌迟" }
    ],
    "factions": [
     { "name": "边军将领", "group": "武将", "fromPage": 2120, "toPage": 2232, "note": "蓟辽督师，主持辽东战守" }
    ],
    "groups": ["崇祯", "督师"],
    "experiences": [
     { "title": "单骑出关、筑宁远城", "fromPage": 2120, "toPage": 2150, "description": "自请守辽东，单骑出关察视，主张“以辽人守辽土”，筑宁远城为关外重镇。" },
     { "title": "宁远大捷、炮伤努尔哈赤", "fromPage": 2150, "toPage": 2180, "description": "天启六年努尔哈赤率军攻宁远，袁崇焕以红夷大炮守城，后金军受挫，努尔哈赤受伤退兵。" },
     { "title": "平台召对、五年复辽", "fromPage": 2185, "toPage": 2200, "description": "崇祯元年召对平台，自陈“五年复辽”，赐尚方剑，督师蓟辽。" },
     { "title": "己巳之变、被凌迟", "fromPage": 2200, "toPage": 2232, "description": "崇祯二年皇太极绕道入塞，袁崇焕入援京师，被诬通敌下狱，崇祯三年八月磔于西市。" }
    ],
    "ending": "被磔（凌迟）于北京西市",
    "endingPage": 2232,
    "note": "明末最大冤案之一"
   },
   {
    "id": "ming-hongchengchou",
    "primaryName": "洪承畴",
    "names": [
     { "text": "洪承畴", "type": "本名", "note": "字彦演，号亨九，福建南安人" },
     { "text": "洪亨九", "type": "称呼", "note": "以字行" },
     { "text": "武英殿大学士", "type": "官职", "note": "明末蓟辽总督，降清后为大学士" }
    ],
    "gender": "男",
    "role": "明末蓟辽总督 / 降清重臣",
    "firstPage": 2130,
    "appearances": [2130, 2200, 2260, 2340],
    "locations": [
     { "place": "辽东", "city": "锦州", "country": "中国", "fromPage": 2130, "toPage": 2260, "note": "松锦之战全军覆没被俘" },
     { "place": "盛京", "city": "沈阳", "country": "中国", "fromPage": 2260, "toPage": 2280, "note": "被俘后降清，编入汉军镶黄旗" },
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 2280, "toPage": 2400, "note": "清初经略南方，招抚江南" }
    ],
    "factions": [
     { "name": "边军将领", "group": "武将", "fromPage": 2130, "toPage": 2260, "note": "明蓟辽总督，主持松锦战事" },
     { "name": "后金/清", "group": "外敌", "fromPage": 2260, "toPage": 2400, "note": "降清后官至大学士，经略南方" }
    ],
    "groups": ["崇祯", "降清"],
    "experiences": [
     { "title": "剿寇有功、总督三边", "fromPage": 2130, "toPage": 2200, "description": "以进士出身督兵剿农民军，擒高迎祥、屡败李自成，为明末最能战之文臣。" },
     { "title": "总督蓟辽、松锦兵败被俘", "fromPage": 2200, "toPage": 2260, "description": "崇祯十二年总督蓟辽，率十三万援锦州，被皇太极围于松山，粮尽城破被俘。" },
     { "title": "降清、经略南方", "fromPage": 2260, "toPage": 2360, "description": "被俘后绝食数日，经皇太极亲往劝降而屈，入关后招抚江南、经略湖广云贵。" },
     { "title": "病卒于北京", "fromPage": 2360, "toPage": 2400, "description": "康熙四年病卒于北京，谥文襄；乾隆时被列入《贰臣传》甲编。" }
    ],
    "ending": "降清后官至大学士，病卒于北京",
    "endingPage": 2400,
    "note": "明清易代之际最具争议的降臣"
   },
   {
    "id": "ming-huangtaiji",
    "primaryName": "皇太极",
    "names": [
     { "text": "皇太极", "type": "本名", "note": "努尔哈赤第八子" },
     { "text": "清太宗", "type": "尊称", "note": "清朝追尊太宗文皇帝" },
     { "text": "天聪汗", "type": "尊称", "note": "继位后称天聪汗，后改元崇德" }
    ],
    "gender": "男",
    "role": "后金/清皇帝 / 清太宗",
    "firstPage": 2230,
    "appearances": [2230, 2260, 2300, 2350],
    "locations": [
     { "place": "盛京", "city": "沈阳", "country": "中国", "fromPage": 2230, "toPage": 2360, "note": "改国号大清，称帝于盛京" },
     { "place": "松山", "city": "锦州", "country": "中国", "fromPage": 2250, "toPage": 2270, "note": "松锦决战，俘洪承畴" }
    ],
    "factions": [
     { "name": "后金/清", "group": "外敌", "fromPage": 2230, "toPage": 2360, "note": "改国号大清，五入长城" }
    ],
    "groups": ["外敌", "后金"],
    "experiences": [
     { "title": "继汗位、改国号大清", "fromPage": 2230, "toPage": 2280, "description": "天启六年继汗位，设六部、内三院，收降汉官；天聪十年称帝，改国号大清、族名满洲。" },
     { "title": "松锦决战、俘洪承畴", "fromPage": 2280, "toPage": 2310, "description": "崇德五年围锦州，以围点打援破洪承畴十三万援军，松山城破，洪承畴被俘降清。" },
     { "title": "绕道入塞、猝死盛京", "fromPage": 2310, "toPage": 2360, "description": "多次绕道蒙古入长城，兵临北京；崇德八年猝死于盛京清宁宫，未及入关。" }
    ],
    "ending": "猝死于盛京清宁宫（崇德八年）",
    "endingPage": 2360,
    "note": "为清军入关奠定基业"
   },
   {
    "id": "ming-lizicheng",
    "primaryName": "李自成",
    "names": [
     { "text": "闯王", "type": "称呼", "note": "高迎祥死后继称闯王" },
     { "text": "李闯", "type": "称呼", "note": "官军与民间通称" },
     { "text": "李自成", "type": "本名", "note": "陕西米脂人，驿卒出身" }
    ],
    "gender": "男",
    "role": "明末农民军领袖 / 大顺皇帝",
    "firstPage": 2270,
    "appearances": [2270, 2300, 2330, 2355, 2380],
    "locations": [
     { "place": "西安", "city": "西安", "country": "中国", "fromPage": 2270, "toPage": 2345, "note": "建大顺政权，改元永昌" },
     { "place": "京师", "city": "北京", "country": "中国", "fromPage": 2345, "toPage": 2380, "note": "入北京，崇祯自缢" },
     { "place": "九宫山", "city": "通城", "country": "中国", "fromPage": 2380, "toPage": 2395, "note": "兵败后死于通城九宫山" }
    ],
    "factions": [
     { "name": "农民军", "group": "义军", "fromPage": 2270, "toPage": 2395, "note": "由闯将而至大顺皇帝" }
    ],
    "groups": ["崇祯", "义军"],
    "experiences": [
     { "title": "米脂起兵、为闯将", "fromPage": 2270, "toPage": 2300, "description": "本为银川驿卒，崇祯二年投王左挂部，后归高迎祥为闯将，荥阳大会后声望渐起。" },
     { "title": "继称闯王、均田免赋", "fromPage": 2300, "toPage": 2330, "description": "高迎祥死后继称闯王，转战川陕，提出“均田免赋”，民谣“迎闯王，不纳粮”传遍中原。" },
     { "title": "建大顺、入北京", "fromPage": 2330, "toPage": 2355, "description": "崇祯十七年正月于西安称帝，国号大顺；三月破居庸关、入北京，崇祯帝自缢煤山。" },
     { "title": "一片石兵败、身死九宫山", "fromPage": 2355, "toPage": 2395, "description": "招降吴三桂未成，一片石之战为清军与吴军所败，弃北京西走，永昌二年于通城九宫山被杀。" }
    ],
    "ending": "兵败西走，死于通城九宫山",
    "endingPage": 2395,
    "note": "推翻明朝的农民军领袖"
   },
   {
    "id": "ming-wusangui",
    "primaryName": "吴三桂",
    "names": [
     { "text": "平西王", "type": "封号", "note": "降清后封平西王，镇云南" },
     { "text": "三桂", "type": "称呼", "note": "字长伯，辽宁中后所人" },
     { "text": "吴总兵", "type": "官职", "note": "明末辽东总兵，守山海关" }
    ],
    "gender": "男",
    "role": "明末辽东总兵 / 平西王",
    "firstPage": 2290,
    "appearances": [2290, 2340, 2360, 2400],
    "locations": [
     { "place": "山海关", "city": "山海关", "country": "中国", "fromPage": 2290, "toPage": 2365, "note": "引清兵入关，驻守要冲" },
     { "place": "昆明", "city": "云南府", "country": "中国", "fromPage": 2365, "toPage": 2400, "note": "封平西王，镇守云贵" }
    ],
    "factions": [
     { "name": "边军将领", "group": "武将", "fromPage": 2290, "toPage": 2365, "note": "明辽东总兵，后降清" },
     { "name": "后金/清", "group": "外敌", "fromPage": 2365, "toPage": 2400, "note": "引清兵入关，封平西王" }
    ],
    "groups": ["崇祯", "武将", "降清"],
    "experiences": [
     { "title": "任辽东总兵、守宁远", "fromPage": 2290, "toPage": 2340, "description": "出身辽东将门，父吴襄为总兵，崇祯中任辽东总兵官，守宁远、山海关一线。" },
     { "title": "勤王不及、引清兵入关", "fromPage": 2340, "toPage": 2365, "description": "崇祯十七年奉命入卫京师，行至丰润闻北京已陷；闻家产被抄、陈圆圆被掠，遂开关降清。" },
     { "title": "追剿农民军、封平西王", "fromPage": 2365, "toPage": 2390, "description": "随清军入关，追击李自成于陕西、湖北，又入四川、云南，绞杀永历帝，封平西王。" },
     { "title": "三藩之乱称帝、病死", "fromPage": 2390, "toPage": 2400, "description": "康熙十二年因撤藩起兵反清，一度据有半壁；康熙十七年在衡州称帝，同年病死。" }
    ],
    "ending": "起兵反清后，病死于衡州（称帝未几）",
    "endingPage": 2400,
    "note": "“冲冠一怒为红颜”的主角"
   },
   {
    "id": "ming-zhengchenggong",
    "primaryName": "郑成功",
    "names": [
     { "text": "郑森", "type": "本名", "note": "郑芝龙长子，原名郑森" },
     { "text": "国姓爷", "type": "尊称", "note": "隆武帝赐姓朱，赐名成功" },
     { "text": "延平郡王", "type": "尊称", "note": "南明封延平王，后世称延平郡王" }
    ],
    "gender": "男",
    "role": "南明抗清名将 / 收复台湾",
    "firstPage": 2300,
    "appearances": [2300, 2350, 2380, 2400],
    "locations": [
     { "place": "泉州", "city": "泉州", "country": "中国", "fromPage": 2300, "toPage": 2340, "note": "父郑芝龙降清，成功独举义旗" },
     { "place": "金门", "city": "泉州", "country": "中国", "fromPage": 2340, "toPage": 2370, "note": "以金厦为基地抗清，北伐南京" },
     { "place": "台湾", "city": "台南", "country": "中国", "fromPage": 2370, "toPage": 2400, "note": "驱逐荷兰，收复台湾，卒于承天府" }
    ],
    "factions": [
     { "name": "南明", "group": "皇权", "fromPage": 2300, "toPage": 2400, "note": "奉南明正朔，坚持抗清" }
    ],
    "groups": ["崇祯", "南明", "抗清"],
    "experiences": [
     { "title": "受赐国姓、举义抗清", "fromPage": 2300, "toPage": 2350, "description": "隆武帝赐姓朱、改名成功；父郑芝龙降清，成功焚儒服起兵，以金门厦门为基地。" },
     { "title": "北伐南京、功败垂成", "fromPage": 2350, "toPage": 2380, "description": "永历十三年率水陆十余万北伐，围南京，因轻敌中缓兵之计大败，退守金厦。" },
     { "title": "收复台湾、病卒承天", "fromPage": 2380, "toPage": 2400, "description": "永历十五年率军渡海围热兰遮城，逐荷兰东印度公司，设承天府；永历十六年病卒，年三十九。" }
    ],
    "ending": "收复台湾后病逝于承天府",
    "endingPage": 2400,
    "note": "驱逐荷兰、收复台湾的民族英雄"
   }
  ],
  "relations": [
   {
    "id": "ming-r1",
    "from": "ming-zhuyuanzhang",
    "to": "ming-mahuanghou",
    "type": "夫妻 / 帝后",
    "category": "婚姻",
    "sincePage": 30,
    "untilPage": null,
    "directed": true,
    "note": "患难夫妻；马皇后崩后太祖不再立后，帝后名分延续至全书"
   },
   {
    "id": "ming-r2",
    "from": "ming-zhuyuanzhang",
    "to": "ming-zhudi",
    "type": "父子 / 君臣",
    "category": "亲属",
    "sincePage": 180,
    "untilPage": null,
    "directed": true,
    "note": "父子之亲不因太祖之崩而绝，朱棣终身为太祖之子"
   },
   {
    "id": "ming-r3",
    "from": "ming-mahuanghou",
    "to": "ming-zhudi",
    "type": "母子",
    "category": "亲属",
    "sincePage": 180,
    "untilPage": 450,
    "directed": true,
    "note": "母子；《明史》以为马皇后所出（另有碽妃之说）"
   },
   {
    "id": "ming-r4",
    "from": "ming-zhuyuanzhang",
    "to": "ming-liubowen",
    "type": "君臣 / 开国谋主",
    "category": "上下级",
    "sincePage": 80,
    "untilPage": 380,
    "directed": true,
    "note": "君臣自礼聘入幕始，至刘基病卒"
   },
   {
    "id": "ming-r5",
    "from": "ming-zhuyuanzhang",
    "to": "ming-lishanchang",
    "type": "君臣 / 开国左丞相",
    "category": "上下级",
    "sincePage": 90,
    "untilPage": 400,
    "directed": true,
    "note": "君臣自渡江前至洪武二十三年赐死，胡惟庸案牵连至于此"
   },
   {
    "id": "ming-r6",
    "from": "ming-zhuyuanzhang",
    "to": "ming-xuda",
    "type": "君臣 / 开国统帅",
    "category": "上下级",
    "sincePage": 340,
    "untilPage": 420,
    "directed": true,
    "note": "君臣终身不替，至洪武十八年徐达病卒"
   },
   {
    "id": "ming-r7",
    "from": "ming-zhuyuanzhang",
    "to": "ming-changyuchun",
    "type": "君臣 / 猛将世家",
    "category": "上下级",
    "sincePage": 110,
    "untilPage": 420,
    "directed": true,
    "note": "自采石矶先登至洪武二年暴卒；常氏为开平王世家，恩眷延及洪武末年"
   },
   {
    "id": "ming-r8",
    "from": "ming-zhuyuanzhang",
    "to": "ming-lanyu",
    "type": "君臣 / 功臣",
    "category": "上下级",
    "sincePage": 140,
    "untilPage": 405,
    "directed": true,
    "note": "自屡立战功至洪武二十六年蓝玉案发被诛，关系即断"
   },
   {
    "id": "ming-r9",
    "from": "ming-zhuyuanzhang",
    "to": "ming-huweiyong",
    "type": "君臣 / 丞相",
    "category": "上下级",
    "sincePage": 120,
    "untilPage": 360,
    "directed": true,
    "note": "自累迁左丞相至洪武十三年胡惟庸案发被诛，关系即断；此后废丞相"
   },
   {
    "id": "ming-r10",
    "from": "ming-zhuyuanzhang",
    "to": "ming-chenyouliang",
    "type": "宿敌 / 争天下",
    "category": "敌对",
    "sincePage": 150,
    "untilPage": 247,
    "directed": false,
    "note": "宿敌争天下，鄱阳湖决战陈友谅中箭死而终"
   },
   {
    "id": "ming-r11",
    "from": "ming-zhuyuanzhang",
    "to": "ming-zhangshicheng",
    "type": "宿敌 / 争江南",
    "category": "敌对",
    "sincePage": 160,
    "untilPage": 285,
    "directed": false,
    "note": "宿敌争江南，围平江十月、张士诚自缢而终"
   },
   {
    "id": "ming-r12",
    "from": "ming-changyuchun",
    "to": "ming-xuda",
    "type": "同袍 / 明军双璧",
    "category": "同盟",
    "sincePage": 110,
    "untilPage": 420,
    "directed": false,
    "note": "并肩渡江、平张士诚，至洪武十八年徐达病卒；常氏为开平王世家，徐达亦其军中旧交"
   },
   {
    "id": "ming-r13",
    "from": "ming-lanyu",
    "to": "ming-changyuchun",
    "type": "姻亲 / 军中同袍",
    "category": "亲属",
    "sincePage": 140,
    "untilPage": 276,
    "directed": false,
    "note": "蓝玉为常遇春妻弟，因常氏之亲而获重用，至常遇春暴卒"
   },
   {
    "id": "ming-r14",
    "from": "ming-lanyu",
    "to": "ming-xuda",
    "type": "同袍 / 明军宿将",
    "category": "同盟",
    "sincePage": 340,
    "untilPage": 405,
    "directed": false,
    "note": "同为开国宿将，洪武中并领北征军事，至徐达病卒"
   },
   {
    "id": "ming-r15",
    "from": "ming-chenyouliang",
    "to": "ming-zhangshicheng",
    "type": "同起义军 / 群雄并立",
    "category": "同盟",
    "sincePage": 160,
    "untilPage": 247,
    "directed": false,
    "note": "同属元末群雄，时而合纵时而相攻，至张士诚自缢"
   },
   {
    "id": "ming-r16",
    "from": "ming-lishanchang",
    "to": "ming-huweiyong",
    "type": "举荐 / 党附",
    "category": "同盟",
    "sincePage": 120,
    "untilPage": 360,
    "directed": true,
    "note": "李善长荐胡惟庸为相，后以胡案牵连赐死"
   },
   {
    "id": "ming-r17",
    "from": "ming-liubowen",
    "to": "ming-lishanchang",
    "type": "朝中政敌 / 浙东与淮西",
    "category": "敌对",
    "sincePage": 90,
    "untilPage": 380,
    "directed": false,
    "note": "浙东集团与淮西集团之争，贯穿明初，至刘基病卒"
   },
   {
    "id": "ming-r18",
    "from": "ming-huweiyong",
    "to": "ming-xuda",
    "type": "同朝 / 淮西勋贵",
    "category": "其他",
    "sincePage": 340,
    "untilPage": 360,
    "directed": false,
    "note": "同属淮西集团，胡惟庸案后徐达仍得保全，至徐达病卒"
   },
   {
    "id": "ming-r19",
    "from": "ming-zhudi",
    "to": "ming-zhuyunwen",
    "type": "叔侄 / 靖难之敌",
    "category": "敌对",
    "sincePage": 510,
    "untilPage": 540,
    "directed": false,
    "note": "叔侄之分自靖难起兵至建文出亡、宫中火起而终"
   },
   {
    "id": "ming-r20",
    "from": "ming-zhudi",
    "to": "ming-fangxiaoru",
    "type": "君臣 / 诛十族",
    "category": "敌对",
    "sincePage": 490,
    "untilPage": 520,
    "directed": true,
    "note": "君臣关系因拒草即位诏而断裂，方孝孺被诛十族"
   },
   {
    "id": "ming-r21",
    "from": "ming-zhudi",
    "to": "ming-zhenghe",
    "type": "主仆 / 下西洋",
    "category": "主仆",
    "sincePage": 480,
    "untilPage": 680,
    "directed": true,
    "note": "主仆自燕邸至成祖崩于榆木川；其后郑和仍奉仁宗、宣宗之命六下西洋"
   },
   {
    "id": "ming-r22",
    "from": "ming-zhudi",
    "to": "ming-shiheng",
    "type": "君臣 / 边将入卫",
    "category": "上下级",
    "sincePage": 600,
    "untilPage": 680,
    "directed": true,
    "note": "石亨以边将入卫京师，隶成祖北征军伍，至成祖崩"
   },
   {
    "id": "ming-r23",
    "from": "ming-zhudi",
    "to": "ming-zhuqizhen",
    "type": "祖孙 / 帝位传承",
    "category": "亲属",
    "sincePage": 460,
    "untilPage": null,
    "directed": true,
    "note": "成祖之孙英宗继统，祖孙之名为明代帝系所系"
   },
   {
    "id": "ming-r24",
    "from": "ming-zhuyunwen",
    "to": "ming-fangxiaoru",
    "type": "君臣 / 师傅",
    "category": "上下级",
    "sincePage": 510,
    "untilPage": 520,
    "directed": true,
    "note": "建文新政多倚方孝孺，至建文出亡、方孝孺殉节"
   },
   {
    "id": "ming-r25",
    "from": "ming-zhuyunwen",
    "to": "ming-zhenghe",
    "type": "旧主 / 建文旧臣",
    "category": "主仆",
    "sincePage": 510,
    "untilPage": 540,
    "directed": true,
    "note": "郑和历事建文、永乐两朝，至建文出亡而旧主关系终止"
   },
   {
    "id": "ming-r26",
    "from": "ming-fangxiaoru",
    "to": "ming-zhenghe",
    "type": "同朝 / 建文旧臣",
    "category": "其他",
    "sincePage": 490,
    "untilPage": 540,
    "directed": false,
    "note": "同为建文旧臣，一死节一受知于永乐，至建文出亡"
   },
   {
    "id": "ming-r27",
    "from": "ming-zhuqizhen",
    "to": "ming-wangzhen",
    "type": "君臣 / 宠信宦官",
    "category": "主仆",
    "sincePage": 470,
    "untilPage": 618,
    "directed": true,
    "note": "呼之为先生，至土木堡王振死于乱军"
   },
   {
    "id": "ming-r28",
    "from": "ming-zhuqizhen",
    "to": "ming-yuqian",
    "type": "君臣 / 北京保卫战与冤杀",
    "category": "上下级",
    "sincePage": 620,
    "untilPage": 790,
    "directed": true,
    "note": "君臣自京师保卫战至天顺元年于谦被冤杀，关系随其死终止"
   },
   {
    "id": "ming-r29",
    "from": "ming-zhuqizhen",
    "to": "ming-zhuqiyu",
    "type": "兄弟 / 帝位之争",
    "category": "亲属",
    "sincePage": 560,
    "untilPage": 770,
    "directed": false,
    "note": "兄被俘弟即位，兄复辟弟被废，至景泰帝病逝"
   },
   {
    "id": "ming-r30",
    "from": "ming-zhuqizhen",
    "to": "ming-yexian",
    "type": "俘囚 / 敌手",
    "category": "敌对",
    "sincePage": 480,
    "untilPage": 700,
    "directed": false,
    "note": "土木堡被俘之敌手，至也先内乱被杀"
   },
   {
    "id": "ming-r31",
    "from": "ming-zhuqizhen",
    "to": "ming-shiheng",
    "type": "君臣 / 夺门拥立",
    "category": "上下级",
    "sincePage": 600,
    "untilPage": 785,
    "directed": true,
    "note": "石亨拥英宗复辟，后以谋反被诛，至其死于狱中"
   },
   {
    "id": "ming-r32",
    "from": "ming-zhuqizhen",
    "to": "ming-zhujianshen",
    "type": "祖孙 / 帝位传承",
    "category": "亲属",
    "sincePage": 810,
    "untilPage": null,
    "directed": true,
    "note": "英宗复辟后立见深为太子，祖孙之名为明代帝系所系"
   },
   {
    "id": "ming-r33",
    "from": "ming-zhuqizhen",
    "to": "ming-lixian",
    "type": "君臣 / 天顺朝首辅",
    "category": "上下级",
    "sincePage": 740,
    "untilPage": 800,
    "directed": true,
    "note": "李贤历事英宗、宪宗两朝，天顺朝入阁为首辅，至英宗崩"
   },
   {
    "id": "ming-r34",
    "from": "ming-wangzhen",
    "to": "ming-yexian",
    "type": "敌对 / 土木堡",
    "category": "敌对",
    "sincePage": 480,
    "untilPage": 618,
    "directed": false,
    "note": "王振行军失当，二十万明军覆没于土木堡，王振死于乱军而止"
   },
   {
    "id": "ming-r35",
    "from": "ming-zhuqiyu",
    "to": "ming-yuqian",
    "type": "君臣 / 兵部尚书",
    "category": "上下级",
    "sincePage": 620,
    "untilPage": 770,
    "directed": true,
    "note": "景泰帝委于谦以战守全权，至景泰帝被废病逝"
   },
   {
    "id": "ming-r36",
    "from": "ming-zhuqiyu",
    "to": "ming-yexian",
    "type": "敌对 / 北京保卫战",
    "category": "敌对",
    "sincePage": 560,
    "untilPage": 700,
    "directed": false,
    "note": "景泰帝亲登城督战，九门退瓦剌，至也先内乱被杀"
   },
   {
    "id": "ming-r37",
    "from": "ming-zhuqiyu",
    "to": "ming-shiheng",
    "type": "君臣 / 京营统帅",
    "category": "上下级",
    "sincePage": 600,
    "untilPage": 770,
    "directed": true,
    "note": "景泰帝用石亨掌京营御瓦剌，至景泰帝被废"
   },
   {
    "id": "ming-r38",
    "from": "ming-yuqian",
    "to": "ming-yexian",
    "type": "战场对手 / 北京保卫战",
    "category": "敌对",
    "sincePage": 620,
    "untilPage": 700,
    "directed": false,
    "note": "九门列阵击退瓦剌，也先无功而还，至其内乱被杀"
   },
   {
    "id": "ming-r39",
    "from": "ming-yuqian",
    "to": "ming-shiheng",
    "type": "同僚转为政敌 / 陷害",
    "category": "敌对",
    "sincePage": 620,
    "untilPage": 785,
    "directed": true,
    "note": "同为保卫战功臣，后诬于谦谋逆，至于谦被冤杀"
   },
   {
    "id": "ming-r40",
    "from": "ming-shiheng",
    "to": "ming-yexian",
    "type": "敌对 / 北京保卫战",
    "category": "敌对",
    "sincePage": 600,
    "untilPage": 700,
    "directed": false,
    "note": "石亨于德胜门外力战瓦剌，至也先内乱被杀"
   },
   {
    "id": "ming-r41",
    "from": "ming-yuqian",
    "to": "ming-lixian",
    "type": "平反 / 身后昭雪",
    "category": "同盟",
    "sincePage": 740,
    "untilPage": null,
    "directed": false,
    "note": "李贤力主为于谦平反昭雪，复其官职，此一身后之名延续至全书"
   },
   {
    "id": "ming-r42",
    "from": "ming-zhujianshen",
    "to": "ming-wanguifei",
    "type": "帝妃 / 专宠",
    "category": "情感",
    "sincePage": 820,
    "untilPage": 1045,
    "directed": true,
    "note": "长帝十七岁而宠冠六宫，至万贵妃暴卒、帝亦旋崩"
   },
   {
    "id": "ming-r43",
    "from": "ming-zhujianshen",
    "to": "ming-wangzhi",
    "type": "君臣 / 宠信宦官",
    "category": "主仆",
    "sincePage": 900,
    "untilPage": 1030,
    "directed": true,
    "note": "设西厂以汪直领之，至汪直贬南京"
   },
   {
    "id": "ming-r44",
    "from": "ming-zhujianshen",
    "to": "ming-shanglu",
    "type": "君臣 / 内阁首辅",
    "category": "上下级",
    "sincePage": 870,
    "untilPage": 1005,
    "directed": true,
    "note": "宪宗任商辂为首辅，倚其定储立太子，至商辂致仕"
   },
   {
    "id": "ming-r45",
    "from": "ming-zhujianshen",
    "to": "ming-lixian",
    "type": "君臣 / 内阁首辅",
    "category": "上下级",
    "sincePage": 810,
    "untilPage": 965,
    "directed": true,
    "note": "宪宗初李贤为首辅，主持为于谦平反、罢传奉官，至其病卒"
   },
   {
    "id": "ming-r46",
    "from": "ming-zhujianshen",
    "to": "ming-huaien",
    "type": "主仆 / 司礼监掌印",
    "category": "主仆",
    "sincePage": 810,
    "untilPage": 1010,
    "directed": true,
    "note": "怀恩掌司礼监，为宪宗所倚，至其忤旨贬凤阳"
   },
   {
    "id": "ming-r47",
    "from": "ming-zhujianshen",
    "to": "ming-zhuyoucheng",
    "type": "父子 / 帝位传承",
    "category": "亲属",
    "sincePage": 1020,
    "untilPage": null,
    "directed": true,
    "note": "幼子被匿于安乐堂而得保全；父子之亲不因宪宗之崩而绝"
   },
   {
    "id": "ming-r48",
    "from": "ming-lixian",
    "to": "ming-shanglu",
    "type": "同朝阁臣 / 前后任",
    "category": "同盟",
    "sincePage": 870,
    "untilPage": 965,
    "directed": false,
    "note": "同入内阁，李贤为首辅时商辂亦在阁，至李贤病卒"
   },
   {
    "id": "ming-r49",
    "from": "ming-shanglu",
    "to": "ming-zhuyoucheng",
    "type": "拥立 / 册立太子",
    "category": "同盟",
    "sincePage": 870,
    "untilPage": 1005,
    "directed": true,
    "note": "商辂率群臣力争，终定朱祐樘为皇太子，至商辂致仕"
   },
   {
    "id": "ming-r50",
    "from": "ming-shanglu",
    "to": "ming-wanguifei",
    "type": "政敌 / 争国本",
    "category": "敌对",
    "sincePage": 870,
    "untilPage": 1005,
    "directed": false,
    "note": "万贵妃欲易储，商辂力争立朱祐樘，至商辂致仕"
   },
   {
    "id": "ming-r51",
    "from": "ming-shanglu",
    "to": "ming-wangzhi",
    "type": "政敌 / 内阁与西厂",
    "category": "敌对",
    "sincePage": 900,
    "untilPage": 1005,
    "directed": false,
    "note": "汪直领西厂屡兴大狱，商辂率阁臣力争罢西厂，至商辂致仕"
   },
   {
    "id": "ming-r52",
    "from": "ming-wanguifei",
    "to": "ming-zhuyoucheng",
    "type": "加害者 / 被害者",
    "category": "敌对",
    "sincePage": 1020,
    "untilPage": 1045,
    "directed": true,
    "note": "孝宗幼年几为万贵妃所害，至万贵妃暴卒"
   },
   {
    "id": "ming-r53",
    "from": "ming-wanguifei",
    "to": "ming-huaien",
    "type": "敌对 / 内廷相争",
    "category": "敌对",
    "sincePage": 820,
    "untilPage": 1010,
    "directed": false,
    "note": "万贵妃屡欲加害皇太子，怀恩力护，至万贵妃暴卒"
   },
   {
    "id": "ming-r54",
    "from": "ming-wangzhi",
    "to": "ming-wanguifei",
    "type": "依附 / 内廷同盟",
    "category": "同盟",
    "sincePage": 900,
    "untilPage": 1030,
    "directed": false,
    "note": "汪直依附万贵妃而得领西厂，至汪直贬南京"
   },
   {
    "id": "ming-r55",
    "from": "ming-wangzhi",
    "to": "ming-huaien",
    "type": "政敌 / 内廷之争",
    "category": "敌对",
    "sincePage": 900,
    "untilPage": 1010,
    "directed": false,
    "note": "汪直领西厂与怀恩相争，怀恩力请罢西厂，至汪直贬南京"
   },
   {
    "id": "ming-r56",
    "from": "ming-huaien",
    "to": "ming-shanglu",
    "type": "同朝 / 内阁与司礼监",
    "category": "同盟",
    "sincePage": 870,
    "untilPage": 1005,
    "directed": false,
    "note": "怀恩与商辂等共护储位、力争罢西厂，至商辂致仕"
   },
   {
    "id": "ming-r57",
    "from": "ming-zhuyoucheng",
    "to": "ming-tangyin",
    "type": "君臣 / 科场案",
    "category": "上下级",
    "sincePage": 1040,
    "untilPage": 1130,
    "directed": true,
    "note": "弘治十二年科场舞弊案，唐寅被黜，至孝宗病逝"
   },
   {
    "id": "ming-r58",
    "from": "ming-zhuyoucheng",
    "to": "ming-wangshouren",
    "type": "君臣 / 弘治朝进士",
    "category": "上下级",
    "sincePage": 1080,
    "untilPage": 1130,
    "directed": true,
    "note": "王守仁为弘治十二年进士，至孝宗病逝"
   },
   {
    "id": "ming-r59",
    "from": "ming-zhuyoucheng",
    "to": "ming-liujian",
    "type": "君臣 / 弘治朝首辅",
    "category": "上下级",
    "sincePage": 1020,
    "untilPage": 1130,
    "directed": true,
    "note": "刘健弘治朝为首辅，辅佐孝宗行新政，至孝宗病逝"
   },
   {
    "id": "ming-r60",
    "from": "ming-zhuyoucheng",
    "to": "ming-lidongyang",
    "type": "君臣 / 弘治朝阁臣",
    "category": "上下级",
    "sincePage": 1020,
    "untilPage": 1130,
    "directed": true,
    "note": "李东阳弘治朝入阁，与刘健、谢迁同心辅政，至孝宗病逝"
   },
   {
    "id": "ming-r61",
    "from": "ming-zhuhouzhao",
    "to": "ming-wangshouren",
    "type": "君臣 / 平定宁王之乱",
    "category": "上下级",
    "sincePage": 1080,
    "untilPage": 1180,
    "directed": true,
    "note": "王守仁三十五天平乱，正德帝仍南下亲征，至正德帝崩于豹房"
   },
   {
    "id": "ming-r62",
    "from": "ming-zhuhouzhao",
    "to": "ming-liujin",
    "type": "君臣 / 宠信宦官",
    "category": "主仆",
    "sincePage": 1075,
    "untilPage": 1180,
    "directed": true,
    "note": "武宗宠刘瑾，命掌司礼监、提督团营，至刘瑾被磔"
   },
   {
    "id": "ming-r63",
    "from": "ming-zhuhouzhao",
    "to": "ming-liujian",
    "type": "君臣 / 正德初首辅",
    "category": "上下级",
    "sincePage": 1060,
    "untilPage": 1160,
    "directed": true,
    "note": "刘健率九卿请诛刘瑾，事败致仕，至正德帝崩"
   },
   {
    "id": "ming-r64",
    "from": "ming-zhuhouzhao",
    "to": "ming-lidongyang",
    "type": "君臣 / 正德朝首辅",
    "category": "上下级",
    "sincePage": 1060,
    "untilPage": 1180,
    "directed": true,
    "note": "李东阳正德朝为首辅，周旋于刘瑾之间，至正德帝崩"
   },
   {
    "id": "ming-r65",
    "from": "ming-zhuhouzhao",
    "to": "ming-tangyin",
    "type": "同时代 / 宁王旧聘",
    "category": "其他",
    "sincePage": 1060,
    "untilPage": 1140,
    "directed": false,
    "note": "宁王朱宸濠聘唐寅于南昌，正德帝亲征宁王之乱，至正德帝崩"
   },
   {
    "id": "ming-r66",
    "from": "ming-liujin",
    "to": "ming-wangshouren",
    "type": "政敌 / 廷杖贬官",
    "category": "敌对",
    "sincePage": 1080,
    "untilPage": 1180,
    "directed": true,
    "note": "刘瑾擅权，王守仁上疏救戴铣被廷杖贬龙场，至刘瑾被磔"
   },
   {
    "id": "ming-r67",
    "from": "ming-liujin",
    "to": "ming-tangyin",
    "type": "同时代 / 正德初政",
    "category": "其他",
    "sincePage": 1075,
    "untilPage": 1140,
    "directed": false,
    "note": "刘瑾当国时唐寅已绝意仕进，此为同时代之记"
   },
   {
    "id": "ming-r68",
    "from": "ming-liujin",
    "to": "ming-liujian",
    "type": "政敌 / 正德初阁争",
    "category": "敌对",
    "sincePage": 1075,
    "untilPage": 1160,
    "directed": false,
    "note": "刘健率九卿请诛刘瑾未成而去位，至刘瑾被磔"
   },
   {
    "id": "ming-r69",
    "from": "ming-liujin",
    "to": "ming-lidongyang",
    "type": "同朝 / 周旋",
    "category": "其他",
    "sincePage": 1075,
    "untilPage": 1180,
    "directed": false,
    "note": "刘瑾用事，李东阳独留内阁与之周旋，至刘瑾被磔"
   },
   {
    "id": "ming-r70",
    "from": "ming-liujin",
    "to": "ming-zhuyoucheng",
    "type": "君臣 / 弘治旧侍",
    "category": "主仆",
    "sincePage": 1075,
    "untilPage": 1130,
    "directed": true,
    "note": "刘瑾于弘治朝侍武宗于东宫、领内官监，至孝宗崩"
   },
   {
    "id": "ming-r71",
    "from": "ming-liujian",
    "to": "ming-lidongyang",
    "type": "同僚 / 弘治三君子",
    "category": "同盟",
    "sincePage": 960,
    "untilPage": 1160,
    "directed": false,
    "note": "刘健、李东阳与谢迁同心辅政，并称弘治三君子，至刘健致仕"
   },
   {
    "id": "ming-r72",
    "from": "ming-zhujianshen",
    "to": "ming-liujian",
    "type": "君臣 / 弘治朝阁臣",
    "category": "上下级",
    "sincePage": 950,
    "untilPage": 1055,
    "directed": true,
    "note": "刘健成化末入阁，历宪宗、孝宗两朝，至宪宗崩"
   },
   {
    "id": "ming-r73",
    "from": "ming-zhujianshen",
    "to": "ming-lidongyang",
    "type": "君臣 / 弘治朝阁臣",
    "category": "上下级",
    "sincePage": 960,
    "untilPage": 1055,
    "directed": true,
    "note": "李东阳弘治八年入阁，历宪宗、孝宗、武宗三朝，至宪宗崩"
   },
   {
    "id": "ming-r74",
    "from": "ming-lixian",
    "to": "ming-liujian",
    "type": "同朝阁臣 / 前后任",
    "category": "同盟",
    "sincePage": 950,
    "untilPage": 965,
    "directed": false,
    "note": "李贤为首辅时刘健在翰林，其后入阁承其绪，至李贤病卒"
   },
   {
    "id": "ming-r75",
    "from": "ming-huaien",
    "to": "ming-liujian",
    "type": "同朝 / 内廷与内阁",
    "category": "同盟",
    "sincePage": 950,
    "untilPage": 1010,
    "directed": false,
    "note": "怀恩与刘健同护储位、力争罢西厂，至怀恩忤旨贬凤阳"
   },
   {
    "id": "ming-r76",
    "from": "ming-zhujianshen",
    "to": "ming-wangshu",
    "type": "君臣 / 直言敢谏",
    "category": "上下级",
    "sincePage": 810,
    "untilPage": 1030,
    "directed": true,
    "note": "王恕成化朝屡上疏言事，与万贵妃、汪直相抗，至宪宗崩"
   },
   {
    "id": "ming-r77",
    "from": "ming-zhujianshen",
    "to": "ming-mawensheng",
    "type": "君臣 / 边臣入朝",
    "category": "上下级",
    "sincePage": 810,
    "untilPage": 1055,
    "directed": true,
    "note": "马文升巡抚辽东、整饬边务，成化朝入为兵部，至宪宗崩"
   },
   {
    "id": "ming-r78",
    "from": "ming-wangshu",
    "to": "ming-huaien",
    "type": "同朝 / 正人相与",
    "category": "同盟",
    "sincePage": 800,
    "untilPage": 1010,
    "directed": false,
    "note": "王恕与怀恩同为成化朝正人，共持国是，至王恕致仕"
   },
   {
    "id": "ming-r79",
    "from": "ming-wangshu",
    "to": "ming-shanglu",
    "type": "同朝 / 阁部相得",
    "category": "同盟",
    "sincePage": 870,
    "untilPage": 1005,
    "directed": false,
    "note": "商辂在阁、王恕居部，同心持正，至商辂致仕"
   },
   {
    "id": "ming-r80",
    "from": "ming-mawensheng",
    "to": "ming-huaien",
    "type": "同朝 / 部院与内廷",
    "category": "同盟",
    "sincePage": 810,
    "untilPage": 1010,
    "directed": false,
    "note": "马文升掌兵部，与怀恩共护储位、力争罢西厂，至怀恩贬凤阳"
   },
   {
    "id": "ming-r81",
    "from": "ming-mawensheng",
    "to": "ming-zhuyoucheng",
    "type": "君臣 / 弘治朝兵部",
    "category": "上下级",
    "sincePage": 1020,
    "untilPage": 1110,
    "directed": true,
    "note": "马文升弘治朝为兵部尚书，佐孝宗整军，至孝宗病逝"
   },
   {
    "id": "ming-r82",
    "from": "ming-wangshu",
    "to": "ming-zhuyoucheng",
    "type": "君臣 / 弘治朝吏部",
    "category": "上下级",
    "sincePage": 1020,
    "untilPage": 1030,
    "directed": true,
    "note": "王恕弘治初为吏部尚书，铨选公允，至孝宗病逝"
   },
   {
    "id": "ming-r83",
    "from": "ming-mawensheng",
    "to": "ming-liujian",
    "type": "同朝 / 弘治三君子",
    "category": "同盟",
    "sincePage": 950,
    "untilPage": 1110,
    "directed": false,
    "note": "马文升与刘健等同辅弘治之政，至刘健致仕"
   },
   {
    "id": "ming-r84",
    "from": "ming-wangshouren",
    "to": "ming-lidongyang",
    "type": "同朝先后 / 正德朝政",
    "category": "其他",
    "sincePage": 1080,
    "untilPage": 1200,
    "directed": false,
    "note": "王守仁平宁王之乱时李东阳在阁为首辅，至李东阳致仕"
   },
   {
    "id": "ming-r85",
    "from": "ming-zhuhoucong",
    "to": "ming-xiayan",
    "type": "君臣 / 首辅",
    "category": "上下级",
    "sincePage": 1230,
    "untilPage": 1305,
    "directed": true,
    "note": "君臣自大礼议得幸至嘉靖二十七年夏言弃市，关系即断"
   },
   {
    "id": "ming-r86",
    "from": "ming-zhuhoucong",
    "to": "ming-yansong",
    "type": "君臣 / 宠任首辅",
    "category": "上下级",
    "sincePage": 1240,
    "untilPage": 1450,
    "directed": true,
    "note": "严嵩以青词得幸，专擅二十年，至其罢相"
   },
   {
    "id": "ming-r87",
    "from": "ming-zhuhoucong",
    "to": "ming-xujie",
    "type": "君臣 / 末任首辅",
    "category": "上下级",
    "sincePage": 1250,
    "untilPage": 1465,
    "directed": true,
    "note": "君臣至世宗崩；徐阶为末任首辅并草遗诏"
   },
   {
    "id": "ming-r88",
    "from": "ming-zhuhoucong",
    "to": "ming-qijiguang",
    "type": "君臣 / 边将",
    "category": "上下级",
    "sincePage": 1440,
    "untilPage": 1465,
    "directed": true,
    "note": "嘉靖朝戚继光备倭浙东，屡奏捷于朝，至世宗崩"
   },
   {
    "id": "ming-r89",
    "from": "ming-yansong",
    "to": "ming-xiayan",
    "type": "政敌 / 陷害",
    "category": "敌对",
    "sincePage": 1240,
    "untilPage": 1305,
    "directed": true,
    "note": "借复河套之议构陷夏言，至夏言弃市，关系即断"
   },
   {
    "id": "ming-r90",
    "from": "ming-yansong",
    "to": "ming-xujie",
    "type": "同朝阁臣 / 隐忍相事",
    "category": "上下级",
    "sincePage": 1250,
    "untilPage": 1450,
    "directed": true,
    "note": "徐阶入阁后屈事严嵩十余年，至严嵩罢相"
   },
   {
    "id": "ming-r91",
    "from": "ming-yansong",
    "to": "ming-qijiguang",
    "type": "上下级 / 东南军务",
    "category": "上下级",
    "sincePage": 1440,
    "untilPage": 1450,
    "directed": true,
    "note": "戚继光备倭浙东时严嵩当国，严嵩倒台后军务改归徐阶"
   },
   {
    "id": "ming-r92",
    "from": "ming-xujie",
    "to": "ming-xiayan",
    "type": "同朝阁臣 / 前后任",
    "category": "其他",
    "sincePage": 1250,
    "untilPage": 1305,
    "directed": false,
    "note": "同入内阁，夏言为首辅时徐阶为次，至夏言弃市"
   },
   {
    "id": "ming-r93",
    "from": "ming-xujie",
    "to": "ming-qijiguang",
    "type": "举荐 / 倚任",
    "category": "上下级",
    "sincePage": 1440,
    "untilPage": 1490,
    "directed": true,
    "note": "嘉靖末隆庆初戚继光屡得内阁支持，至徐阶致仕"
   },
   {
    "id": "ming-r94",
    "from": "ming-xujie",
    "to": "ming-zhangjuzheng",
    "type": "师生 / 政治传承",
    "category": "师友",
    "sincePage": 1250,
    "untilPage": 1490,
    "directed": true,
    "note": "徐阶为张居正座师，引其入阁，至徐阶病卒"
   },
   {
    "id": "ming-r95",
    "from": "ming-gaogong",
    "to": "ming-zhangjuzheng",
    "type": "政敌 / 首辅之争",
    "category": "敌对",
    "sincePage": 1540,
    "untilPage": 1640,
    "directed": false,
    "note": "由盟友成死敌，高拱终被逐归，至其病卒新郑"
   },
   {
    "id": "ming-r96",
    "from": "ming-gaogong",
    "to": "ming-qijiguang",
    "type": "举荐 / 倚任",
    "category": "上下级",
    "sincePage": 1520,
    "untilPage": 1640,
    "directed": true,
    "note": "高拱用戚继光镇蓟州，北边以安，至高拱被逐"
   },
   {
    "id": "ming-r97",
    "from": "ming-zhangjuzheng",
    "to": "ming-zhuyijun",
    "type": "师生 / 君臣",
    "category": "师友",
    "sincePage": 1600,
    "untilPage": 1730,
    "directed": true,
    "note": "万历帝师兼首辅，自隆庆六年至万历十年张居正病逝；身后清算为余波"
   },
   {
    "id": "ming-r98",
    "from": "ming-zhangjuzheng",
    "to": "ming-qijiguang",
    "type": "倚重 / 支持",
    "category": "同盟",
    "sincePage": 1540,
    "untilPage": null,
    "directed": false,
    "note": "张居正倚戚继光为蓟门长城；张氏身后清算而戚亦被排挤，蓟门之防遂弛"
   },
   {
    "id": "ming-r99",
    "from": "ming-zhangjuzheng",
    "to": "ming-shenshixing",
    "type": "阁臣同僚 / 前后任",
    "category": "上下级",
    "sincePage": 1640,
    "untilPage": 1730,
    "directed": true,
    "note": "申时行承张居正之后，至张居正病逝"
   },
   {
    "id": "ming-r100",
    "from": "ming-xujie",
    "to": "ming-zhuyijun",
    "type": "君臣 / 遗诏与新政",
    "category": "上下级",
    "sincePage": 1210,
    "untilPage": 1490,
    "directed": true,
    "note": "徐阶草世宗遗诏、隆庆初当国，其政绪延及万历初年"
   },
   {
    "id": "ming-r101",
    "from": "ming-zhuyijun",
    "to": "ming-shenshixing",
    "type": "君臣 / 首辅",
    "category": "上下级",
    "sincePage": 1640,
    "untilPage": 1790,
    "directed": true,
    "note": "君臣自万历十一年申时行入阁至其致仕归乡"
   },
   {
    "id": "ming-r102",
    "from": "ming-zhuyijun",
    "to": "ming-qijiguang",
    "type": "君臣 / 蓟门长城",
    "category": "上下级",
    "sincePage": 1540,
    "untilPage": 1700,
    "directed": true,
    "note": "万历帝用戚继光镇蓟州，至戚继光罢归病卒"
   },
   {
    "id": "ming-r103",
    "from": "ming-zhuyijun",
    "to": "ming-sunchengzong",
    "type": "君臣 / 帝师",
    "category": "上下级",
    "sincePage": 1900,
    "untilPage": 1905,
    "directed": true,
    "note": "孙承宗为万历末进士、天启帝师，至神宗崩"
   },
   {
    "id": "ming-r104",
    "from": "ming-shenshixing",
    "to": "ming-yuanchonghuan",
    "type": "同朝先后 / 辽事余绪",
    "category": "其他",
    "sincePage": 1640,
    "untilPage": 1790,
    "directed": false,
    "note": "申时行当国时袁崇焕尚未显，此为同朝先后之记，至申时行卒于长洲"
   },
   {
    "id": "ming-r105",
    "from": "ming-yuqian",
    "to": "ming-zhujianshen",
    "type": "身后平反 / 君臣",
    "category": "其他",
    "sincePage": 810,
    "untilPage": null,
    "directed": false,
    "note": "宪宗为于谦平反昭雪，复其官职；此一身后之名延续至全书"
   },
   {
    "id": "ming-r106",
    "from": "ming-yuqian",
    "to": "ming-wangshouren",
    "type": "表彰 / 身后平反",
    "category": "其他",
    "sincePage": 1080,
    "untilPage": null,
    "directed": false,
    "note": "王守仁巡抚江西时祭于谦祠、为之表忠；于谦冤狱至成化年间得雪"
   },
   {
    "id": "ming-r107",
    "from": "ming-xuxiake",
    "to": "ming-zhuyijun",
    "type": "同时代 / 万历远游",
    "category": "其他",
    "sincePage": 1880,
    "untilPage": 1905,
    "directed": false,
    "note": "徐霞客远游始于万历末年，所记多神宗朝地方情形，至神宗崩"
   },
   {
    "id": "ming-r108",
    "from": "ming-xuxiake",
    "to": "ming-sunchengzong",
    "type": "同时代士人 / 同乡之谊",
    "category": "其他",
    "sincePage": 1900,
    "untilPage": 2265,
    "directed": false,
    "note": "二人同为明末士人，皆以气节与实学名世，至徐霞客卒"
   },
   {
    "id": "ming-r109",
    "from": "ming-weizhongxian",
    "to": "ming-yanglian",
    "type": "政敌 / 东林党狱",
    "category": "敌对",
    "sincePage": 1870,
    "untilPage": 2015,
    "directed": true,
    "note": "自杨涟上疏劾二十四大罪至其死于诏狱；东林党狱为其中片段"
   },
   {
    "id": "ming-r110",
    "from": "ming-weizhongxian",
    "to": "ming-zuoguangdou",
    "type": "政敌 / 东林党狱",
    "category": "敌对",
    "sincePage": 1890,
    "untilPage": 2020,
    "directed": true,
    "note": "自左光斗同劾魏忠贤至其与杨涟同日死于诏狱"
   },
   {
    "id": "ming-r111",
    "from": "ming-weizhongxian",
    "to": "ming-sunchengzong",
    "type": "政敌 / 排挤去职",
    "category": "敌对",
    "sincePage": 1900,
    "untilPage": 2065,
    "directed": true,
    "note": "天启五年阉党大攻东林与边臣，孙承宗被迫去职归乡，至魏忠贤自缢"
   },
   {
    "id": "ming-r112",
    "from": "ming-weizhongxian",
    "to": "ming-yuanchonghuan",
    "type": "拉拢未成 / 排挤",
    "category": "其他",
    "sincePage": 1900,
    "untilPage": 2065,
    "directed": true,
    "note": "袁崇焕不肯依附阉党，宁锦大捷后反遭排挤去职，至魏忠贤自缢"
   },
   {
    "id": "ming-r113",
    "from": "ming-yanglian",
    "to": "ming-zuoguangdou",
    "type": "同党 / 东林六君子",
    "category": "同盟",
    "sincePage": 1890,
    "untilPage": 2015,
    "directed": false,
    "note": "同倡移宫、同劾魏忠贤，至杨涟死于诏狱"
   },
   {
    "id": "ming-r114",
    "from": "ming-yanglian",
    "to": "ming-sunchengzong",
    "type": "同僚 / 东林与帝师",
    "category": "同盟",
    "sincePage": 1900,
    "untilPage": 2015,
    "directed": false,
    "note": "孙承宗为天启帝师，与杨涟等同主正论，至杨涟死于诏狱"
   },
   {
    "id": "ming-r115",
    "from": "ming-zuoguangdou",
    "to": "ming-sunchengzong",
    "type": "同僚 / 东林与督师",
    "category": "同盟",
    "sincePage": 1900,
    "untilPage": 2020,
    "directed": false,
    "note": "左光斗死于诏狱后孙承宗为其中辩，至左光斗死"
   },
   {
    "id": "ming-r116",
    "from": "ming-sunchengzong",
    "to": "ming-yuanchonghuan",
    "type": "师生 / 上下级",
    "category": "师友",
    "sincePage": 2120,
    "untilPage": 2232,
    "directed": true,
    "note": "自袁崇焕单骑出关至孙承宗高阳殉国，共建关宁锦防线"
   },
   {
    "id": "ming-r117",
    "from": "ming-sunchengzong",
    "to": "ming-nuerhachi",
    "type": "敌对 / 关宁锦防线",
    "category": "敌对",
    "sincePage": 2100,
    "untilPage": 2235,
    "directed": false,
    "note": "孙承宗筑宁锦防线御后金，至努尔哈赤病逝"
   },
   {
    "id": "ming-r118",
    "from": "ming-sunchengzong",
    "to": "ming-huangtaiji",
    "type": "敌对 / 关宁锦防线",
    "category": "敌对",
    "sincePage": 2230,
    "untilPage": 2265,
    "directed": false,
    "note": "孙承宗主持关宁锦防线与后金相持，至其高阳殉国"
   },
   {
    "id": "ming-r119",
    "from": "ming-yuanchonghuan",
    "to": "ming-nuerhachi",
    "type": "敌对 / 宁远大捷",
    "category": "敌对",
    "sincePage": 2120,
    "untilPage": 2232,
    "directed": false,
    "note": "以红夷大炮守宁远，努尔哈赤受挫退兵后病逝"
   },
   {
    "id": "ming-r120",
    "from": "ming-yuanchonghuan",
    "to": "ming-huangtaiji",
    "type": "敌对 / 宁锦与己巳之变",
    "category": "敌对",
    "sincePage": 2230,
    "untilPage": 2232,
    "directed": false,
    "note": "宁锦大捷后皇太极绕道入塞，直至袁崇焕下狱被磔"
   },
   {
    "id": "ming-r121",
    "from": "ming-zhuyoujian",
    "to": "ming-yuanchonghuan",
    "type": "君臣 / 平台召对与凌迟",
    "category": "上下级",
    "sincePage": 2120,
    "untilPage": 2220,
    "directed": true,
    "note": "君臣自平台召对许五年复辽，至己巳之变下狱，关系即断（次年被凌迟）"
   },
   {
    "id": "ming-r122",
    "from": "ming-zhuyoujian",
    "to": "ming-weizhongxian",
    "type": "君臣 / 定逆案",
    "category": "敌对",
    "sincePage": 2050,
    "untilPage": 2065,
    "directed": true,
    "note": "自崇祯即位至魏忠贤贬谪自缢"
   },
   {
    "id": "ming-r123",
    "from": "ming-zhuyoujian",
    "to": "ming-sunchengzong",
    "type": "君臣 / 督师辽东",
    "category": "上下级",
    "sincePage": 2050,
    "untilPage": 2265,
    "directed": true,
    "note": "崇祯朝再起孙承宗督师，至其高阳殉国"
   },
   {
    "id": "ming-r124",
    "from": "ming-zhuyoujian",
    "to": "ming-nuerhachi",
    "type": "敌对 / 辽东",
    "category": "敌对",
    "sincePage": 2100,
    "untilPage": 2235,
    "directed": false,
    "note": "自萨尔浒至宁远，明与后金相攻，至努尔哈赤病逝"
   },
   {
    "id": "ming-r125",
    "from": "ming-zhuyoujian",
    "to": "ming-huangtaiji",
    "type": "敌对 / 明清之际",
    "category": "敌对",
    "sincePage": 2230,
    "untilPage": 2350,
    "directed": false,
    "note": "自皇太极绕道入塞至崇祯自缢"
   },
   {
    "id": "ming-r126",
    "from": "ming-zhuyoujian",
    "to": "ming-lizicheng",
    "type": "敌对 / 煤山自缢",
    "category": "敌对",
    "sincePage": 2270,
    "untilPage": 2350,
    "directed": false,
    "note": "自农民军入豫陕至崇祯煤山自缢"
   },
   {
    "id": "ming-r127",
    "from": "ming-zhuyoujian",
    "to": "ming-wusangui",
    "type": "君臣 / 勤王",
    "category": "上下级",
    "sincePage": 2290,
    "untilPage": 2350,
    "directed": true,
    "note": "自吴三桂任辽东总兵至崇祯自缢；勤王未及为其中片段"
   },
   {
    "id": "ming-r128",
    "from": "ming-zhuyoujian",
    "to": "ming-hongchengchou",
    "type": "君臣 / 督师辽东",
    "category": "上下级",
    "sincePage": 2130,
    "untilPage": 2350,
    "directed": true,
    "note": "自洪承畴督蓟辽至崇祯自缢（其间松山兵败被俘降清）"
   },
   {
    "id": "ming-r129",
    "from": "ming-hongchengchou",
    "to": "ming-huangtaiji",
    "type": "降清 / 招降",
    "category": "上下级",
    "sincePage": 2230,
    "untilPage": 2360,
    "directed": true,
    "note": "松山被俘，皇太极亲往劝降，遂屈节事清，至皇太极猝死"
   },
   {
    "id": "ming-r130",
    "from": "ming-hongchengchou",
    "to": "ming-lizicheng",
    "type": "敌对 / 剿寇",
    "category": "敌对",
    "sincePage": 2270,
    "untilPage": 2395,
    "directed": false,
    "note": "明末剿李自成最力者，降清后复追剿之，至李自成身死"
   },
   {
    "id": "ming-r131",
    "from": "ming-wusangui",
    "to": "ming-lizicheng",
    "type": "敌对 / 引清兵入关与招降",
    "category": "敌对",
    "sincePage": 2290,
    "untilPage": 2395,
    "directed": true,
    "note": "李自成招降吴三桂未成，一片石战败，至李自成身死九宫山"
   },
   {
    "id": "ming-r132",
    "from": "ming-wusangui",
    "to": "ming-nuerhachi",
    "type": "敌对 / 辽东战场",
    "category": "敌对",
    "sincePage": 2100,
    "untilPage": 2235,
    "directed": false,
    "note": "吴三桂父吴襄守辽东与后金对峙，至努尔哈赤病逝"
   },
   {
    "id": "ming-r133",
    "from": "ming-wusangui",
    "to": "ming-huangtaiji",
    "type": "敌对 / 明清之际",
    "category": "敌对",
    "sincePage": 2290,
    "untilPage": 2360,
    "directed": false,
    "note": "吴三桂守宁远、山海关与清对峙，至皇太极猝死盛京"
   },
   {
    "id": "ming-r134",
    "from": "ming-wusangui",
    "to": "ming-hongchengchou",
    "type": "同僚 / 降清",
    "category": "同盟",
    "sincePage": 2290,
    "untilPage": 2400,
    "directed": false,
    "note": "同为明将降清，共事清廷南征，至洪承畴病卒"
   },
   {
    "id": "ming-r135",
    "from": "ming-wusangui",
    "to": "ming-sunchengzong",
    "type": "上下级 / 辽东军门",
    "category": "上下级",
    "sincePage": 2050,
    "untilPage": 2265,
    "directed": true,
    "note": "吴三桂出身辽东将门，隶孙承宗、袁崇焕军门之下，至孙承宗殉国"
   },
   {
    "id": "ming-r136",
    "from": "ming-zhengchenggong",
    "to": "ming-hongchengchou",
    "type": "敌对 / 招抚与抗清",
    "category": "敌对",
    "sincePage": 2300,
    "untilPage": null,
    "directed": false,
    "note": "洪承畴经略南方招抚郑氏，郑成功拒降；明清对峙之势延续至全书"
   },
   {
    "id": "ming-r137",
    "from": "ming-zhengchenggong",
    "to": "ming-wusangui",
    "type": "敌对 / 明清易代",
    "category": "敌对",
    "sincePage": 2300,
    "untilPage": 2400,
    "directed": false,
    "note": "吴三桂降清，郑成功独举抗清之旗，至郑成功病逝"
   },
   {
    "id": "ming-r138",
    "from": "ming-nuerhachi",
    "to": "ming-huangtaiji",
    "type": "父子 / 汗位传承",
    "category": "亲属",
    "sincePage": 2230,
    "untilPage": null,
    "directed": true,
    "note": "第八子皇太极继汗位，改国号大清，父子传承不因太祖之殁而绝"
   },
   {
    "id": "ming-r139",
    "from": "ming-lanyu",
    "to": "ming-huweiyong",
    "type": "同朝 / 淮西勋贵",
    "category": "其他",
    "sincePage": 140,
    "untilPage": 360,
    "directed": false,
    "note": "蓝玉与胡惟庸同属淮西集团，洪武中并盛，至胡惟庸案发"
   },
   {
    "id": "ming-r140",
    "from": "ming-zhuyuanzhang",
    "to": "ming-shiheng",
    "type": "君臣 / 边将入卫",
    "category": "上下级",
    "sincePage": 180,
    "untilPage": 430,
    "directed": true,
    "note": "石亨以边将入卫京师，隶成祖北征军伍，至成祖崩"
   },
   {
    "id": "ming-r141",
    "from": "ming-zhudi",
    "to": "ming-zhuqiyu",
    "type": "祖孙 / 帝系",
    "category": "亲属",
    "sincePage": 560,
    "untilPage": null,
    "directed": true,
    "note": "成祖之孙景泰帝继统，同为宣宗之后"
   },
   {
    "id": "ming-r142",
    "from": "ming-zhenghe",
    "to": "ming-zhuqizhen",
    "type": "旧臣 / 宣德旧人",
    "category": "其他",
    "sincePage": 480,
    "untilPage": 720,
    "directed": false,
    "note": "郑和第七次下西洋归途病逝，英宗正统朝追念其功，至郑和卒"
   },
   {
    "id": "ming-r143",
    "from": "ming-zhuyijun",
    "to": "ming-lidongyang",
    "type": "君臣 / 阁臣",
    "category": "上下级",
    "sincePage": 1210,
    "untilPage": 1215,
    "directed": true,
    "note": "李东阳历三朝入阁，至万历初其政绪犹存"
   },
   {
    "id": "ming-r144",
    "from": "ming-yansong",
    "to": "ming-lidongyang",
    "type": "朝中先后 / 嘉靖初阁臣",
    "category": "其他",
    "sincePage": 1215,
    "untilPage": 1215,
    "directed": false,
    "note": "李东阳当国在前，严嵩入阁在后，至李东阳病卒"
   },
   {
    "id": "ming-r145",
    "from": "ming-mawensheng",
    "to": "ming-wangshu",
    "type": "同朝名臣 / 弘治新政",
    "category": "同盟",
    "sincePage": 810,
    "untilPage": 1030,
    "directed": false,
    "note": "马文升与王恕同为成化末弘治初名臣，同心持正，至王恕致仕"
   },
   {
    "id": "ming-r146",
    "from": "ming-mawensheng",
    "to": "ming-lixian",
    "type": "朝中先后 / 天顺朝旧臣",
    "category": "其他",
    "sincePage": 740,
    "untilPage": 965,
    "directed": false,
    "note": "马文升天顺朝已任御史，李贤为首辅时受其识拔，至李贤病卒"
   },
   {
    "id": "ming-r147",
    "from": "ming-weizhongxian",
    "to": "ming-hongchengchou",
    "type": "同朝先后 / 辽事",
    "category": "其他",
    "sincePage": 1860,
    "untilPage": 2065,
    "directed": false,
    "note": "洪承畴天启朝任官于辽事，魏忠贤当国时未附阉党，至魏忠贤自缢"
   }
  ]
 }
]);
