// 示例数据：百年孤独
// 页码为示例阅读版本页码（全书 360 页），按叙事顺序线性铺开，不按回目编号。
// 七代人的大致区间：第一代 1-120、第二代 20-180、第三代 90-220、第四代 150-280、第五代 220-330、第六代 280-355、第七代 350-360。
// 重名处理：本书七代大量重名，id 一律带世代后缀（bn-jose-arcadio-1 / bn-jose-arcadio-2 / bn-jose-arcadio-2nd / bn-aureliano-2）；
//   primaryName 优先用书里本来就有的区分（奥雷里亚诺·布恩迪亚上校、奥雷里亚诺第二、何塞·阿尔卡蒂奥第二、奥雷里亚诺·巴比伦尼亚），
//   书里没有区分的用「名字＋世代括注」（阿玛兰妲（第二代）、美人儿蕾梅黛丝、何塞·阿尔卡蒂奥（第五代）等），绝不把两代同名的人合并成一个人。
// 关系时间窗：sincePage 取两端点 firstPage 中较晚者（夫妻、父子等史实上更早结识者除外）；
//   untilPage 取两端点中较早退场者的 endingPage，关系若在叙事中真的提前断裂（自杀、早逝、被枪杀、被送走）才取更早的断裂页；
//   血缘关系（亲属）与梅尔基亚德斯的关系标为 null：前者表示家族血脉与家族记忆一直延续到全书末代（末页飓风抹去马孔多），
//   后者按「早已死于新加坡沙滩、死后仍以羊皮卷与预言影响家族」处理，故其 sincePage 记在译读者登场之时。
window.SAMPLE_BOOKS = (window.SAMPLE_BOOKS || []).concat([
 {
  "id": "sample-solitude",
  "meta": {
   "title": "百年孤独",
   "author": "加西亚·马尔克斯",
   "publisher": "南海出版公司",
   "isbn": "978-7-5442-5399-4",
   "edition": "范晔 译",
   "year": "2011",
   "totalPages": 360,
   "currentPage": 1,
   "note": "页码为示例阅读版本页码"
  },
  "characters": [
   {
    "id": "bn-jose-arcadio-1",
    "primaryName": "何塞·阿尔卡蒂奥·布恩迪亚",
    "names": [
     { "text": "何塞·阿尔卡蒂奥", "type": "本名", "note": "" },
     { "text": "老布恩迪亚", "type": "俗称", "note": "村里人对第一代家长的称呼" },
     { "text": "族长", "type": "尊称", "note": "马孔多的开创者与主事人" }
    ],
    "gender": "男",
    "role": "第一代家长 / 马孔多的开创者",
    "firstPage": 1,
    "appearances": [1, 20, 44, 76, 98, 118],
    "locations": [
     { "place": "里奥阿查", "city": "里奥阿查", "country": "哥伦比亚", "fromPage": 1, "toPage": 12, "note": "原籍，因斗鸡争执杀死普鲁登西奥·阿吉拉尔后携妻出走" },
     { "place": "马孔多（河边营地）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 12, "toPage": 70, "note": "带领二十余户人家在河边扎营建村，亲自规划街道与房屋" },
     { "place": "栗树下", "city": "马孔多", "country": "哥伦比亚", "fromPage": 70, "toPage": 118, "note": "发疯后被家人绑在院中的栗树下，直到老死" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 1, "toPage": 118, "note": "第一代家长" },
     { "name": "马孔多的开创者", "group": "村社", "fromPage": 12, "toPage": 118, "note": "分配土地、制定村规，是马孔多最早的实际领袖" }
    ],
    "groups": ["第一代"],
    "experiences": [
     { "title": "与表妹乌尔苏拉结婚并离家出走", "fromPage": 1, "toPage": 12, "description": "因近亲通婚的恐惧与斗鸡场上的杀戮，带着二十余户人家翻山越岭寻找出海口。" },
     { "title": "建立马孔多", "fromPage": 12, "toPage": 30, "description": "在梦中见到一座镜子之城，遂在河边扎营，把村子命名为马孔多。" },
     { "title": "迷上炼金术、磁铁与冰块", "fromPage": 30, "toPage": 70, "description": "被梅尔基亚德斯带来的磁铁、放大镜与炼金术吸引，沉迷于把金子做成小金鱼，又为冰块惊叹。" },
     { "title": "发疯后被绑在栗树下", "fromPage": 70, "toPage": 118, "description": "因亡灵的纠缠与对时间的迷失而发疯，被家人绑在院中的栗树下，用拉丁语自言自语多年后老死。" }
    ],
    "ending": "发疯后被绑在院中的栗树下，在幻觉与自言自语中老死",
    "endingPage": 118,
    "note": "全书第一代家长，马孔多的创村者。"
   },
   {
    "id": "bn-ursula",
    "primaryName": "乌尔苏拉·伊瓜兰",
    "names": [
     { "text": "乌尔苏拉", "type": "小名", "note": "" },
     { "text": "老祖母", "type": "尊称", "note": "全家及马孔多人对她的称呼" },
     { "text": "伊瓜兰", "type": "别名", "note": "娘家姓氏" }
    ],
    "gender": "女",
    "role": "第一代家长 / 布恩迪亚家族之母",
    "firstPage": 2,
    "appearances": [2, 30, 60, 96, 150, 210, 268, 300, 330],
    "locations": [
     { "place": "里奥阿查", "city": "里奥阿查", "country": "哥伦比亚", "fromPage": 2, "toPage": 12, "note": "娘家，与何塞·阿尔卡蒂奥·布恩迪亚是表兄妹" },
     { "place": "马孔多", "city": "马孔多", "country": "哥伦比亚", "fromPage": 12, "toPage": 300, "note": "与丈夫一同开辟的村落，靠做糖果小动物生意养活全家" },
     { "place": "马孔多（老宅）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 300, "toPage": 330, "note": "失明后仍凭记忆与气味在家中摸索操持" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 2, "toPage": 330, "note": "第一代家长，家族真正的支柱" },
     { "name": "糖果小动物生意", "group": "生计", "fromPage": 40, "toPage": 200, "note": "靠做糖果小动物积累家业，两次重建被毁的房屋" },
     { "name": "马孔多村民", "group": "村社", "fromPage": 12, "toPage": 330, "note": "参与村中一切公共事务，收留过吉普赛人与逃亡者" }
    ],
    "groups": ["第一代"],
    "experiences": [
     { "title": "近亲通婚的恐惧", "fromPage": 2, "toPage": 30, "description": "担心像上一代近亲结婚的人那样生出长猪尾巴的孩子，一度用贞操带拒绝丈夫。" },
     { "title": "追随出走的长子", "fromPage": 40, "toPage": 60, "description": "长子随吉普赛人出走后独自追出去，没追上，回来发现家里多了个叫丽贝卡的养女。" },
     { "title": "失明后仍操持家务", "fromPage": 268, "toPage": 300, "description": "眼睛瞎了以后靠记忆与气味辨认家中一切，仍在暗中安排儿孙的生活。" },
     { "title": "在漫长的雨季中老死", "fromPage": 300, "toPage": 330, "description": "被儿孙当作玩具般摆弄，最后缩成一个小小的老太婆，在一场大雨里死去。" }
    ],
    "ending": "失明后仍在家里摸索着操持一切，在一场漫长的雨季中老死",
    "endingPage": 330,
    "note": "活了百余岁，亲眼见证家族六代的兴衰。"
   },
   {
    "id": "bn-melquiades",
    "primaryName": "梅尔基亚德斯",
    "names": [
     { "text": "梅尔基亚德斯", "type": "本名", "note": "" },
     { "text": "吉普赛人", "type": "俗称", "note": "随吉普赛商队往返马孔多的老人" },
     { "text": "羊皮卷作者", "type": "别名", "note": "留下用梵文写成的羊皮卷，预言了布恩迪亚家族百年的命运" }
    ],
    "gender": "男",
    "role": "吉普赛人 / 炼金术士 / 羊皮卷作者",
    "firstPage": 5,
    "appearances": [5, 22, 48, 66, 75],
    "locations": [
     { "place": "吉普赛营地", "city": "马孔多", "country": "哥伦比亚", "fromPage": 5, "toPage": 48, "note": "随吉普赛商队来到马孔多，在帐篷里展出磁铁、放大镜与假牙" },
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 48, "toPage": 75, "note": "与何塞·阿尔卡蒂奥·布恩迪亚结为挚友，被乌尔苏拉收留，留下自己的房间" },
     { "place": "新加坡沙滩", "city": "新加坡", "country": "新加坡", "fromPage": 75, "toPage": 75, "note": "据他自己说，他病死在新加坡的沙滩上" }
    ],
    "factions": [
     { "name": "吉普赛人", "group": "外来者", "fromPage": 5, "toPage": 75, "note": "随商队往返于马孔多与外面的世界" },
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 48, "toPage": 75, "note": "被乌尔苏拉收留，成为第一代家长一生的挚友与预言者" }
    ],
    "groups": ["外来者", "吉普赛人"],
    "experiences": [
     { "title": "带来磁铁与放大镜", "fromPage": 5, "toPage": 22, "description": "用磁铁换走何塞·阿尔卡蒂奥·布恩迪亚的骡子与山羊，又留下放大镜与炼金术的书。" },
     { "title": "带来炼金术与炼金实验室", "fromPage": 22, "toPage": 48, "description": "教会第一代家长炼金术，把乌尔苏拉的金币变成一团油渣，也留下自己的房间与羊皮卷。" },
     { "title": "留下羊皮卷并死去", "fromPage": 48, "toPage": 75, "description": "把写满梵文的羊皮卷留在房间里，声称自己病死在新加坡的沙滩上，尸体却始终停在自己的房间。" },
     { "title": "以幽灵之姿回到老宅", "fromPage": 66, "toPage": 75, "description": "死后仍出现在布恩迪亚家的走廊与书房里，与第一代家长谈论时间与死亡的秘密。" }
    ],
    "ending": "自称病死在新加坡的沙滩上，尸体却始终停在自己的房间里；此后仍以幽灵之姿出现在老宅，直到羊皮卷被译出",
    "endingPage": 75,
    "note": "羊皮卷预言了布恩迪亚家族百年的命运，直到全书最后才被奥雷里亚诺·巴比伦尼亚译出。"
   },
   {
    "id": "bn-prudencia",
    "primaryName": "普鲁登西奥·阿吉拉尔",
    "names": [
     { "text": "普鲁登西奥", "type": "小名", "note": "" },
     { "text": "阿吉拉尔", "type": "别名", "note": "姓氏" }
    ],
    "gender": "男",
    "role": "马孔多村民 / 斗鸡场上的对手",
    "firstPage": 12,
    "appearances": [12, 16, 20, 25],
    "locations": [
     { "place": "里奥阿查", "city": "里奥阿查", "country": "哥伦比亚", "fromPage": 12, "toPage": 16, "note": "与何塞·阿尔卡蒂奥·布恩迪亚在斗鸡场上争执" },
     { "place": "马孔多（村外）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 16, "toPage": 25, "note": "被刺死后草草葬在村外，此后以幽灵的模样出现在凶手家中" }
    ],
    "factions": [
     { "name": "马孔多村民", "group": "村社", "fromPage": 12, "toPage": 25, "note": "第一代村民之一" }
    ],
    "groups": ["马孔多村民"],
    "experiences": [
     { "title": "斗鸡场上的争执", "fromPage": 12, "toPage": 16, "description": "因斗鸡的输赢与何塞·阿尔卡蒂奥·布恩迪亚发生口角，当众讥讽他的家族。" },
     { "title": "被一矛刺死", "fromPage": 16, "toPage": 20, "description": "在争执中被何塞·阿尔卡蒂奥·布恩迪亚用长矛刺穿喉咙，尸体被草草埋葬。" },
     { "title": "以幽灵之姿反复出现", "fromPage": 20, "toPage": 25, "description": "死后用芦苇堵住喉咙上的伤口，一次次出现在凶手家中，逼得布恩迪亚一家搬离里奥阿查。" }
    ],
    "ending": "在斗鸡争执中被何塞·阿尔卡蒂奥·布恩迪亚一矛刺死，此后以幽灵的模样反复出现在凶手家中",
    "endingPage": 25,
    "note": "他的幽灵是布恩迪亚家离开里奥阿查、开辟马孔多的直接原因。"
   },
   {
    "id": "bn-jose-arcadio-2",
    "primaryName": "何塞·阿尔卡蒂奥（第二代）",
    "names": [
     { "text": "何塞·阿尔卡蒂奥", "type": "本名", "note": "" },
     { "text": "长子", "type": "俗称", "note": "布恩迪亚家第二代的长子" },
     { "text": "何塞·阿尔卡蒂奥（第二代）", "type": "世代括注", "note": "与第一代、第五代同名，此处按世代标注" }
    ],
    "gender": "男",
    "role": "布恩迪亚家长子 / 随吉普赛人出走的水手",
    "firstPage": 20,
    "appearances": [20, 38, 52, 70, 88, 96, 105],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 20, "toPage": 38, "note": "在老宅出生、长大，与父亲格格不入" },
     { "place": "环球航行", "city": "里奥阿查", "country": "哥伦比亚", "fromPage": 38, "toPage": 70, "note": "随吉普赛人出走，在海上漂泊多年，据说绕了世界六十五圈" },
     { "place": "马孔多（自己的房子）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 96, "toPage": 105, "note": "与丽贝卡结婚后另立门户，直到被枪杀在自己的房间里" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 20, "toPage": 105, "note": "第二代长子" },
     { "name": "吉普赛人", "group": "外来者", "fromPage": 38, "toPage": 52, "note": "随吉普赛商队离开马孔多，多年后以水手模样归来" }
    ],
    "groups": ["第二代"],
    "experiences": [
     { "title": "出生在出走途中", "fromPage": 20, "toPage": 20, "description": "在父母翻山越岭寻找出海口的路上出生，是家族在马孔多之外留下的第一个孩子。" },
     { "title": "随吉普赛人出走", "fromPage": 38, "toPage": 52, "description": "跟着吉普赛商队离开马孔多，多年没有音信，乌尔苏拉追出去也没能把他找回来。" },
     { "title": "像野牛一样归来", "fromPage": 70, "toPage": 88, "description": "以巨人的体魄与满身刺青回到家中，靠与人比力气和吃饭赚钱，被乌尔苏拉称作野牛。" },
     { "title": "与丽贝卡结婚并被枪杀", "fromPage": 96, "toPage": 105, "description": "不顾养兄妹的名分与丽贝卡结合，被赶出家门后另立门户，最后在自己的房间里被枪杀。" }
    ],
    "ending": "与养妹丽贝卡结婚后被赶出家门，多年后在自己的房子里被枪杀，尸体散发着火药味",
    "endingPage": 105,
    "note": "与父亲同名，故加世代括注；他的血一直流到乌尔苏拉面前，成为家中最早的一桩血案。"
   },
   {
    "id": "bn-aureliano-colonel",
    "primaryName": "奥雷里亚诺·布恩迪亚上校",
    "names": [
     { "text": "奥雷里亚诺", "type": "小名", "note": "" },
     { "text": "上校", "type": "尊称", "note": "自由党军队给他的军衔，全马孔多都这么叫他" },
     { "text": "战争英雄", "type": "尊称", "note": "发动三十二场战争、一生拒绝投降的传奇人物" }
    ],
    "gender": "男",
    "role": "布恩迪亚家次子 / 自由党军队上校",
    "firstPage": 24,
    "appearances": [24, 40, 60, 82, 100, 136, 172, 200, 232],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 24, "toPage": 60, "note": "在父亲的炼金实验室里长大，最早学会做小金鱼" },
     { "place": "内陆各城镇", "city": "马瑙雷", "country": "哥伦比亚", "fromPage": 60, "toPage": 180, "note": "在内战中转战大泽区、马瑙雷与沿海各城镇，先后发动三十二场战争" },
     { "place": "马孔多（小金鱼作坊）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 180, "toPage": 232, "note": "战争结束后回到马孔多，在小金鱼作坊里反复打制又熔化小金鱼" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 24, "toPage": 232, "note": "第二代次子，家族中最出名的人" },
     { "name": "自由党", "group": "党派", "fromPage": 56, "toPage": 232, "note": "从马孔多的投票舞弊案起投身自由党，成为军队最高统帅" },
     { "name": "政府军", "group": "军政", "fromPage": 100, "toPage": 180, "note": "内战中与之反复交战又反复停战的对手" }
    ],
    "groups": ["第二代"],
    "experiences": [
     { "title": "在炼金实验室里做小金鱼", "fromPage": 24, "toPage": 40, "description": "跟着父亲和梅尔基亚德斯学炼金术，把金子打成小金鱼，再熔掉重打。" },
     { "title": "娶蕾梅黛丝", "fromPage": 82, "toPage": 96, "description": "娶了里正阿波利纳尔·莫斯科特的小女儿蕾梅黛丝，她却在怀孕时误饮毒药而死。" },
     { "title": "发动三十二场战争", "fromPage": 96, "toPage": 180, "description": "从马孔多出发，一路打到沿海，全部失败，三十二场起义无一成功，十七个儿子先后被猎杀。" },
     { "title": "在小金鱼作坊里死去", "fromPage": 200, "toPage": 232, "description": "停战回到家中，把自己关在小金鱼作坊里，最后在作坊里的一棵树下小便时死去。" }
    ],
    "ending": "战争结束后回到马孔多，在小金鱼作坊里反复打制又熔化小金鱼，最终在作坊里死去",
    "endingPage": 232,
    "note": "布恩迪亚家第二代，自由党传奇上校；他的十七个私生子额上都有洗不掉的灰烬十字。"
   },
   {
    "id": "bn-amaranta",
    "primaryName": "阿玛兰妲（第二代）",
    "names": [
     { "text": "阿玛兰妲", "type": "本名", "note": "" },
     { "text": "阿玛兰妲（第二代）", "type": "世代括注", "note": "与第五代阿玛兰妲·乌尔苏拉同名，此处按世代标注" },
     { "text": "老姑娘", "type": "俗称", "note": "村里人私下这样叫她" }
    ],
    "gender": "女",
    "role": "布恩迪亚家小女儿 / 终身未嫁的守家人",
    "firstPage": 30,
    "appearances": [30, 52, 88, 100, 150, 210, 268, 285],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 30, "toPage": 285, "note": "一生几乎不曾离开老宅，把厨房、走廊与自己的卧室当成整个世界" },
     { "place": "马孔多（院子里）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 100, "toPage": 268, "note": "晚年常在院子里为自己缝制寿衣，一针一线缝了又拆、拆了又缝" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 30, "toPage": 285, "note": "第二代的小女儿，家族的守家人" },
     { "name": "教会", "group": "宗教", "fromPage": 136, "toPage": 210, "note": "始终拒绝神父的忏悔与临终圣事，宁死也不肯让步" }
    ],
    "groups": ["第二代"],
    "experiences": [
     { "title": "与丽贝卡争夺皮埃特罗·克雷斯皮", "fromPage": 88, "toPage": 96, "description": "为了阻止丽贝卡与意大利琴师的婚事，甚至下毒误害了蕾梅黛丝，姐妹从此反目。" },
     { "title": "拒绝赫里内勒多·马尔克斯的求婚", "fromPage": 104, "toPage": 140, "description": "上校的挚友苦等多年求婚，她始终冷淡拒绝，说自己是「没有心肝的女人」。" },
     { "title": "抚养奥雷里亚诺·何塞与侄孙辈", "fromPage": 100, "toPage": 268, "description": "把上校的私生子与后来的几代孩子带大，用最固执的方式守着这个家。" },
     { "title": "为自己缝制寿衣，孤独而死", "fromPage": 268, "toPage": 285, "description": "知道死期将至，日夜为自己缝制寿衣，缝完最后一针后躺到床上，在孤独中死去。" }
    ],
    "ending": "终身未嫁，晚年为自己缝制寿衣，缝完最后一针后躺在床上孤独死去",
    "endingPage": 285,
    "note": "与第五代阿玛兰妲·乌尔苏拉同名，故加世代括注。"
   },
   {
    "id": "bn-rebeca",
    "primaryName": "丽贝卡",
    "names": [
     { "text": "丽贝卡", "type": "本名", "note": "" },
     { "text": "养女", "type": "俗称", "note": "被布恩迪亚家收养的远亲孤女" },
     { "text": "吃土的女孩", "type": "绰号", "note": "幼年有吃土与吮手指的怪癖，只有母亲的骨灰能让她安静" }
    ],
    "gender": "女",
    "role": "布恩迪亚家养女 / 何塞·阿尔卡蒂奥（第二代）之妻",
    "firstPage": 34,
    "appearances": [34, 52, 88, 96, 140, 200],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 34, "toPage": 96, "note": "带着父母的骨灰坛来到马孔多，被乌尔苏拉当作女儿养大" },
     { "place": "马孔多（自己的房子）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 96, "toPage": 200, "note": "与何塞·阿尔卡蒂奥（第二代）定居于此，丈夫死后闭门不出" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 34, "toPage": 200, "note": "以养女身份进入布恩迪亚家" },
     { "name": "外来者", "group": "外来者", "fromPage": 34, "toPage": 52, "note": "自称是乌尔苏拉远亲的孤女，来历始终说不清" }
    ],
    "groups": ["第二代", "外来者"],
    "experiences": [
     { "title": "带着父母的骨灰来到马孔多", "fromPage": 34, "toPage": 52, "description": "由人送到布恩迪亚家门口，只带着一封信、一袋父母遗骨和吮手指的习惯。" },
     { "title": "与皮埃特罗·克雷斯皮的婚事被破坏", "fromPage": 88, "toPage": 96, "description": "与意大利琴师相恋订婚，婚事却被阿玛兰妲反复阻挠，最终心灰意冷。" },
     { "title": "与何塞·阿尔卡蒂奥（第二代）结婚", "fromPage": 96, "toPage": 96, "description": "被归来的巨人所吸引，不顾养兄妹名分与他结合，从此被排斥在家族之外。" },
     { "title": "丈夫死后闭门不出", "fromPage": 105, "toPage": 200, "description": "丈夫被枪杀后把自己关进屋子，靠回忆与女仆的照料活着，孤独地老死在家中。" }
    ],
    "ending": "丈夫被枪杀后把自己关在屋子里，与世隔绝地活到老年，最后孤独死去",
    "endingPage": 200,
    "note": "家族的第一位养女，她与何塞·阿尔卡蒂奥（第二代）的婚姻是家族史上第一桩乱伦。"
   },
   {
    "id": "bn-apolinar-moscote",
    "primaryName": "阿波利纳尔·莫斯科特",
    "names": [
     { "text": "阿波利纳尔", "type": "小名", "note": "" },
     { "text": "莫斯科特", "type": "别名", "note": "姓氏" },
     { "text": "里正", "type": "尊称", "note": "政府派驻马孔多的里正" }
    ],
    "gender": "男",
    "role": "马孔多首任里正 / 保守党人",
    "firstPage": 81,
    "appearances": [81, 82, 90, 98],
    "locations": [
     { "place": "马孔多", "city": "马孔多", "country": "哥伦比亚", "fromPage": 81, "toPage": 98, "note": "受政府之命来到马孔多设立里正公所，把村子划入选区" }
    ],
    "factions": [
     { "name": "保守党", "group": "党派", "fromPage": 81, "toPage": 98, "note": "政府派驻马孔多的里正，代表保守党行使权力" },
     { "name": "马孔多村民", "group": "村社", "fromPage": 81, "toPage": 98, "note": "马孔多第一位外来行政长官" }
    ],
    "groups": ["马孔多村民", "外来者"],
    "experiences": [
     { "title": "把马孔多划入选区并出任里正", "fromPage": 81, "toPage": 81, "description": "带着政府委任状来到马孔多，命令把房屋刷成蓝色，遭到布恩迪亚家抵制。" },
     { "title": "把女儿蕾梅黛丝嫁给奥雷里亚诺", "fromPage": 82, "toPage": 82, "description": "借女儿与布恩迪亚家的婚事缓和与村里的关系，从此与上校成为姻亲。" },
     { "title": "在内战中请求政府军保护", "fromPage": 88, "toPage": 98, "description": "自由党起事后向政府求援，权威一落千丈，在惊惧与失势中病故。" }
    ],
    "ending": "在自由党与保守党的拉锯中失去权势，惊惧成疾病故",
    "endingPage": 98,
    "note": "蕾梅黛丝之父，马孔多最早的保守党官员。"
   },
   {
    "id": "bn-remedios-moscote",
    "primaryName": "蕾梅黛丝（上校之妻，第二代）",
    "names": [
     { "text": "蕾梅黛丝", "type": "小名", "note": "" },
     { "text": "蕾梅黛丝·莫斯科特", "type": "本名", "note": "" },
     { "text": "上校之妻", "type": "俗称", "note": "奥雷里亚诺·布恩迪亚上校唯一的妻子" }
    ],
    "gender": "女",
    "role": "里正之女 / 奥雷里亚诺·布恩迪亚上校之妻",
    "firstPage": 82,
    "appearances": [82, 88, 92, 96],
    "locations": [
     { "place": "马孔多", "city": "马孔多", "country": "哥伦比亚", "fromPage": 82, "toPage": 96, "note": "从里正公所嫁入布恩迪亚家，把老宅打理得井井有条" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 82, "toPage": 96, "note": "嫁入布恩迪亚家，被乌尔苏拉当作女儿疼爱" },
     { "name": "马孔多村民", "group": "村社", "fromPage": 82, "toPage": 96, "note": "里正的小女儿，村里人都喜欢她" }
    ],
    "groups": ["第二代", "马孔多村民"],
    "experiences": [
     { "title": "与奥雷里亚诺成婚", "fromPage": 82, "toPage": 88, "description": "十四岁时与奥雷里亚诺举行婚礼，成为布恩迪亚家最受疼爱的一员。" },
     { "title": "照料乌尔苏拉与全家", "fromPage": 88, "toPage": 96, "description": "把老宅的家务接过来，教会奥雷里亚诺·何塞读书，让上校第一次尝到安稳的日子。" },
     { "title": "误饮毒药而死", "fromPage": 96, "toPage": 96, "description": "喝下阿玛兰妲为丽贝卡准备的咖啡，连同腹中的双胞胎一同死去。" }
    ],
    "ending": "怀有身孕时误饮了阿玛兰妲下在咖啡里的毒药，连同腹中双胞胎一同死去",
    "endingPage": 96,
    "note": "上校一生唯一的妻子；与第四代美人儿蕾梅黛丝同名，故加括注区分。"
   },
   {
    "id": "bn-pilar-ternera",
    "primaryName": "庇拉尔·特尔内拉",
    "names": [
     { "text": "庇拉尔", "type": "小名", "note": "" },
     { "text": "特尔内拉", "type": "别名", "note": "姓氏" },
     { "text": "纸牌女人", "type": "绰号", "note": "用纸牌为人算命，也替布恩迪亚家占卜命运" }
    ],
    "gender": "女",
    "role": "纸牌算命的女人 / 布恩迪亚家两代人的情人",
    "firstPage": 84,
    "appearances": [84, 100, 130, 150, 190],
    "locations": [
     { "place": "马孔多（自己的院子）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 84, "toPage": 150, "note": "在院子里替人算命，也在这里生下阿尔卡蒂奥（第三代）" },
     { "place": "马孔多（热闹的院子）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 150, "toPage": 190, "note": "晚年经营一处人来人往的院子，靠纸牌与回忆度日" }
    ],
    "factions": [
     { "name": "马孔多村民", "group": "村社", "fromPage": 84, "toPage": 190, "note": "马孔多最早的一批居民之一" }
    ],
    "groups": ["马孔多村民"],
    "experiences": [
     { "title": "与何塞·阿尔卡蒂奥（第二代）相好", "fromPage": 84, "toPage": 96, "description": "在黑暗里与他相会，怀上阿尔卡蒂奥（第三代），此后独自把孩子养大。" },
     { "title": "与奥雷里亚诺相好并生下奥雷里亚诺·何塞", "fromPage": 84, "toPage": 100, "description": "被乌尔苏拉花钱请去为上校「治病」，生下奥雷里亚诺·何塞。" },
     { "title": "用纸牌算出阿尔卡蒂奥（第三代）的命运", "fromPage": 92, "toPage": 130, "description": "一次次翻开纸牌，算出这个儿子会死在枪口下，却始终没有把话说破。" },
     { "title": "晚年经营院子，活到百岁", "fromPage": 150, "toPage": 190, "description": "院子成了马孔多最热闹的地方，她在这里听完了一代又一代人的命运，最后在梦中死去。" }
    ],
    "ending": "活到一百四十余岁，在自家院子里死去，临终前仍用纸牌为人算命",
    "endingPage": 190,
    "note": "第三代两位布恩迪亚（阿尔卡蒂奥与奥雷里亚诺·何塞）共同的母亲。"
   },
   {
    "id": "bn-visitacion",
    "primaryName": "比西塔西翁",
    "names": [
     { "text": "比西塔西翁", "type": "本名", "note": "" },
     { "text": "瓜希拉女仆", "type": "俗称", "note": "从大泽区带来的印第安女仆" }
    ],
    "gender": "女",
    "role": "布恩迪亚家的女仆 / 瓜希拉印第安人",
    "firstPage": 86,
    "appearances": [86, 92, 110, 130, 150],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 86, "toPage": 140, "note": "在老宅操持家务、照看孩子，是家中最沉默的一个人" },
     { "place": "大泽区", "city": "马瑙雷", "country": "哥伦比亚", "fromPage": 140, "toPage": 150, "note": "与弟弟卡塔乌雷一同返回故乡，从此不知所终" }
    ],
    "factions": [
     { "name": "布恩迪亚家的仆人", "group": "主仆", "fromPage": 86, "toPage": 150, "note": "在老宅操持家务、抚养孩子" }
    ],
    "groups": ["马孔多村民", "外来者"],
    "experiences": [
     { "title": "从大泽区来到马孔多", "fromPage": 86, "toPage": 86, "description": "与弟弟卡塔乌雷一起被带到布恩迪亚家，成了宅子里最老的仆人。" },
     { "title": "照料布恩迪亚家的孩子", "fromPage": 92, "toPage": 130, "description": "把阿尔卡蒂奥（第三代）与后来的孩子带大，用草药与咒语替他们治病。" },
     { "title": "失眠症流行时守着老宅", "fromPage": 110, "toPage": 130, "description": "在失眠症与遗忘症蔓延的日子里守在宅子里，替全家记住东西的名字。" },
     { "title": "返回大泽区", "fromPage": 140, "toPage": 150, "description": "与弟弟一同离开马孔多，回到大泽区的故乡，此后音信全无。" }
    ],
    "ending": "与弟弟一同离开马孔多，回到大泽区的故乡，此后不知所终",
    "endingPage": 150,
    "note": "家族中最早的仆人，也是主仆关系的代表人物。"
   },
   {
    "id": "bn-pietro-crespi",
    "primaryName": "皮埃特罗·克雷斯皮",
    "names": [
     { "text": "皮埃特罗·克雷斯皮", "type": "本名", "note": "" },
     { "text": "克雷斯皮", "type": "别名", "note": "姓氏" },
     { "text": "意大利琴师", "type": "俗称", "note": "会弹琴、会跳舞、会写诗的意大利人" }
    ],
    "gender": "男",
    "role": "意大利琴师 / 舞曲教师 / 文具与乐器店经营者",
    "firstPage": 88,
    "appearances": [88, 92, 96, 100],
    "locations": [
     { "place": "马孔多", "city": "马孔多", "country": "哥伦比亚", "fromPage": 88, "toPage": 100, "note": "在镇上开店，教布恩迪亚家的姑娘跳舞，替她们安装自动钢琴" }
    ],
    "factions": [
     { "name": "马孔多的意大利移民", "group": "外来者", "fromPage": 88, "toPage": 100, "note": "从意大利来到马孔多的琴师与小商人" }
    ],
    "groups": ["外来者"],
    "experiences": [
     { "title": "为布恩迪亚家安装自动钢琴", "fromPage": 88, "toPage": 92, "description": "带着自动钢琴来到马孔多，教丽贝卡与阿玛兰妲跳舞，卷入了姐妹之间的争斗。" },
     { "title": "与丽贝卡订婚又失去她", "fromPage": 92, "toPage": 96, "description": "与丽贝卡订婚，婚事被阿玛兰妲反复阻挠，最终丽贝卡嫁给了何塞·阿尔卡蒂奥（第二代）。" },
     { "title": "向阿玛兰妲求婚被拒后自杀", "fromPage": 96, "toPage": 100, "description": "转而追求阿玛兰妲，被拒绝后割腕自杀，死在布恩迪亚家的走廊上。" }
    ],
    "ending": "被阿玛兰妲拒绝后割腕自杀，死在布恩迪亚家的走廊上",
    "endingPage": 100,
    "note": "他的死是阿玛兰妲终身不嫁、以寿衣缝制等待死亡的开端。"
   },
   {
    "id": "bn-arcadio-3",
    "primaryName": "阿尔卡蒂奥（第三代）",
    "names": [
     { "text": "阿尔卡蒂奥", "type": "本名", "note": "" },
     { "text": "阿尔卡蒂奥（第三代）", "type": "世代括注", "note": "与后来的何塞·阿尔卡蒂奥第二、第五代同名，此处按世代标注" },
     { "text": "马孔多的小暴君", "type": "绰号", "note": "上校出征后由他接管马孔多，颁布严苛法令" }
    ],
    "gender": "男",
    "role": "布恩迪亚家第三代 / 上校出征时的马孔多军政首领",
    "firstPage": 92,
    "appearances": [92, 110, 130, 150, 158],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 92, "toPage": 110, "note": "由乌尔苏拉与上校抚养长大，从未被父亲承认" },
     { "place": "马孔多（镇公所）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 110, "toPage": 150, "note": "上校出征后接管马孔多，把学校改成兵营，推行严苛法令" },
     { "place": "马孔多（墓地围墙下）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 150, "toPage": 158, "note": "保守党重占马孔多后被枪决的地方" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 92, "toPage": 158, "note": "第三代，被当作家族继承人来养" },
     { "name": "自由党", "group": "党派", "fromPage": 110, "toPage": 158, "note": "以上校的名义接管马孔多，站在自由党一边" }
    ],
    "groups": ["第三代"],
    "experiences": [
     { "title": "由乌尔苏拉与上校抚养长大", "fromPage": 92, "toPage": 110, "description": "母亲庇拉尔·特尔内拉把他交给布恩迪亚家，从此在祖父母身边长大，从不知道自己的身世。" },
     { "title": "上校出征后接管马孔多", "fromPage": 110, "toPage": 140, "description": "以上校的名义颁布法令、征用财产，把马孔多变成自己的小小领地，最后连乌尔苏拉也管不住他。" },
     { "title": "保守党重占马孔多后被枪决", "fromPage": 150, "toPage": 158, "description": "城破被俘，被押到墓地围墙下枪决，临死前仍以布恩迪亚家的当家人自居。" }
    ],
    "ending": "保守党重新占领马孔多后被枪决，临死前仍以布恩迪亚家的当家人自居",
    "endingPage": 158,
    "note": "按原著，他是何塞·阿尔卡蒂奥（第二代）与庇拉尔·特尔内拉之子，即上校的侄子，由上校与乌尔苏拉抚养。"
   },
   {
    "id": "bn-aureliano-jose",
    "primaryName": "奥雷里亚诺·何塞",
    "names": [
     { "text": "奥雷里亚诺·何塞", "type": "本名", "note": "" },
     { "text": "奥雷里亚诺（第三代）", "type": "世代括注", "note": "与家族中多位奥雷里亚诺同名，此处按世代标注" },
     { "text": "上校的儿子", "type": "俗称", "note": "上校与庇拉尔·特尔内拉之子" }
    ],
    "gender": "男",
    "role": "上校与庇拉尔·特尔内拉之子 / 自由党军人",
    "firstPage": 100,
    "appearances": [100, 115, 130, 145],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 100, "toPage": 120, "note": "由乌尔苏拉与阿玛兰妲抚养，把阿玛兰妲当作母亲又当作情人" },
     { "place": "内陆各城镇", "city": "马瑙雷", "country": "哥伦比亚", "fromPage": 120, "toPage": 145, "note": "跟随父亲的部队在内战中转战，官至上校副官" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 100, "toPage": 145, "note": "上校的长子" },
     { "name": "自由党", "group": "党派", "fromPage": 120, "toPage": 145, "note": "追随父亲从军，替上校处理军务" }
    ],
    "groups": ["第三代"],
    "experiences": [
     { "title": "与姑母阿玛兰妲之间暧昧的情感", "fromPage": 115, "toPage": 130, "description": "从小与阿玛兰妲同床长大，成年后对她产生混杂着母子与情人的依恋，被她坚决拒绝。" },
     { "title": "追随父亲的部队作战", "fromPage": 120, "toPage": 145, "description": "跟着上校转战各地，替父亲送信、招募人马，也开始思念马孔多。" },
     { "title": "在街上被保守党士兵枪杀", "fromPage": 145, "toPage": 145, "description": "回到马孔多不久，在街上被保守党士兵开枪打死，血一直流到老宅门口。" }
    ],
    "ending": "在内地追随父亲的部队作战，回到马孔多后被保守党士兵在街上枪杀",
    "endingPage": 145,
    "note": "上校的私生子之一，与第四代、第六代的奥雷里亚诺同名，故加世代括注。"
   },
   {
    "id": "bn-gerineldo",
    "primaryName": "赫里内勒多·马尔克斯上校",
    "names": [
     { "text": "赫里内勒多·马尔克斯", "type": "本名", "note": "" },
     { "text": "马尔克斯上校", "type": "尊称", "note": "自由党军队中的军衔" },
     { "text": "上校的挚友", "type": "俗称", "note": "与奥雷里亚诺·布恩迪亚上校一同起兵的老战友" }
    ],
    "gender": "男",
    "role": "自由党上校 / 奥雷里亚诺·布恩迪亚上校最亲密的朋友与战友",
    "firstPage": 104,
    "appearances": [104, 130, 160, 185, 190],
    "locations": [
     { "place": "马孔多", "city": "马孔多", "country": "哥伦比亚", "fromPage": 104, "toPage": 130, "note": "在马孔多招募人马，是布恩迪亚家的常客" },
     { "place": "内陆各城镇", "city": "里奥阿查", "country": "哥伦比亚", "fromPage": 130, "toPage": 170, "note": "随上校转战各地，负责电报与军务" },
     { "place": "马孔多（老宅）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 170, "toPage": 190, "note": "战后独自在马孔多衰老，常到布恩迪亚家下棋" }
    ],
    "factions": [
     { "name": "自由党", "group": "党派", "fromPage": 104, "toPage": 190, "note": "与上校一同起兵，是最忠诚的战友" },
     { "name": "自由党军队", "group": "军政", "fromPage": 130, "toPage": 190, "note": "负责电报与军务的上校" }
    ],
    "groups": ["外来者"],
    "experiences": [
     { "title": "与上校并肩作战", "fromPage": 104, "toPage": 170, "description": "从上校起兵的第一天起跟随他，内外战事都由他经手，被称为上校唯一的朋友。" },
     { "title": "向上校发报劝他投降", "fromPage": 170, "toPage": 185, "description": "战争末期发电报劝上校接受投降，被上校骂作叛徒，两人此后仍有书信往来。" },
     { "title": "向阿玛兰妲求婚被拒", "fromPage": 130, "toPage": 190, "description": "每个傍晚到布恩迪亚家下棋，一次次向阿玛兰妲求婚，被拒绝了一辈子。" }
    ],
    "ending": "一生等待阿玛兰妲，战后独自在马孔多衰老，在孤独中死去",
    "endingPage": 190,
    "note": "上校最忠诚的战友，也是阿玛兰妲一生唯一的另一位追求者。"
   },
   {
    "id": "bn-santa-sofia",
    "primaryName": "桑塔索菲亚·德·拉·彼达",
    "names": [
     { "text": "桑塔索菲亚", "type": "小名", "note": "" },
     { "text": "桑塔索菲亚·德·拉·彼达", "type": "本名", "note": "" },
     { "text": "家中的老仆", "type": "俗称", "note": "在布恩迪亚家操劳一生，谁也不知道她是什么时候来的" }
    ],
    "gender": "女",
    "role": "阿尔卡蒂奥（第三代）的伴侣 / 布恩迪亚家操劳一生的主妇",
    "firstPage": 130,
    "appearances": [130, 160, 200, 260, 290, 300],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 130, "toPage": 300, "note": "一辈子在老宅劳作，把双胞胎与美人儿蕾梅黛丝带大" },
     { "place": "马孔多（街上）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 300, "toPage": 300, "note": "提着一个小箱子独自离开老宅，从此再没有消息" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 130, "toPage": 300, "note": "虽未正式婚配，却是第四代与第五代孩子的母亲与祖母" }
    ],
    "groups": ["第三代"],
    "experiences": [
     { "title": "独自把双胞胎和美人儿蕾梅黛丝抚养长大", "fromPage": 130, "toPage": 160, "description": "阿尔卡蒂奥被枪决后，她一个人撑起老宅，把三个孩子拉扯成人。" },
     { "title": "在家中操劳，伺候乌尔苏拉与费尔南达", "fromPage": 160, "toPage": 290, "description": "从早到晚在厨房与院子里忙，谁都不记得她的名字，只知道饭总是她做的。" },
     { "title": "悄然离开马孔多", "fromPage": 290, "toPage": 300, "description": "在家族彻底衰败时收拾好行李，说「我走了」，从此谁也没有再见过她。" }
    ],
    "ending": "在家族衰败时收拾好行李，独自离开马孔多，从此再没有消息",
    "endingPage": 300,
    "note": "从未正式举行婚礼，却是布恩迪亚家第四代与第五代真正的母亲。"
   },
   {
    "id": "bn-nicanor",
    "primaryName": "尼卡诺尔·雷伊纳神父",
    "names": [
     { "text": "尼卡诺尔·雷伊纳", "type": "本名", "note": "" },
     { "text": "雷伊纳神父", "type": "尊称", "note": "教区神父" },
     { "text": "神父", "type": "俗称", "note": "马孔多人对他的通称" }
    ],
    "gender": "男",
    "role": "马孔多教区神父 / 教会代表",
    "firstPage": 136,
    "appearances": [136, 160, 200, 260, 296],
    "locations": [
     { "place": "马孔多（教堂）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 136, "toPage": 296, "note": "从一间没有墙的教堂开始，募款修了几十年也没修完" },
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 136, "toPage": 200, "note": "常来布恩迪亚家募捐、下棋，也替阿玛兰妲做临终劝解" }
    ],
    "factions": [
     { "name": "教会", "group": "宗教", "fromPage": 136, "toPage": 296, "note": "马孔多教区神父，代表教会势力" },
     { "name": "保守党", "group": "党派", "fromPage": 136, "toPage": 296, "note": "教会站在保守党与政府一边，为内战中的政府军祈祷" }
    ],
    "groups": ["外来者", "马孔多村民"],
    "experiences": [
     { "title": "主持纪念弥撒与失眠症的见证", "fromPage": 136, "toPage": 160, "description": "靠一杯可可升空来证明上帝的存在，用募捐的铜板搭起马孔多的第一座教堂。" },
     { "title": "为阿玛兰妲做临终劝解", "fromPage": 210, "toPage": 285, "description": "劝阿玛兰妲向上帝忏悔，被她固执地拒绝，只好在下棋时陪她度过最后的日子。" },
     { "title": "为费尔南达一家主持宗教事务", "fromPage": 262, "toPage": 296, "description": "费尔南达把家中一切事务都交给他裁决，他也借着这份虔诚维持着教堂最后的体面。" }
    ],
    "ending": "教堂始终没有修完，他在老病中死去，教会也随之被遗忘",
    "endingPage": 296,
    "note": "教会一方的代表人物，见证家族中期的宗教生活。"
   },
   {
    "id": "bn-aureliano-2",
    "primaryName": "奥雷里亚诺第二",
    "names": [
     { "text": "奥雷里亚诺第二", "type": "本名", "note": "" },
     { "text": "双胞胎中的弟弟", "type": "俗称", "note": "与何塞·阿尔卡蒂奥第二是孪生兄弟，幼时两人常互换身份" },
     { "text": "牲畜生意的主人", "type": "俗称", "note": "靠牲畜疯狂繁殖暴富的享乐者" }
    ],
    "gender": "男",
    "role": "阿尔卡蒂奥（第三代）之子 / 靠牲畜繁殖暴富的享乐者",
    "firstPage": 150,
    "appearances": [150, 190, 240, 262, 280, 296],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 150, "toPage": 262, "note": "在祖宅出生、长大，与孪生兄弟互换身份捉弄全家" },
     { "place": "马孔多（佩特拉·科特斯的院子）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 190, "toPage": 296, "note": "大半时间住在情妇的院子里，那里的牲畜疯狂繁殖" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 150, "toPage": 296, "note": "第四代，家族后期名义上的当家人" },
     { "name": "香蕉公司", "group": "外来资本", "fromPage": 240, "toPage": 296, "note": "香蕉热潮中靠牲畜生意暴富，与公司往来密切" }
    ],
    "groups": ["第四代"],
    "experiences": [
     { "title": "与孪生兄弟互换身份的少年时代", "fromPage": 150, "toPage": 190, "description": "和何塞·阿尔卡蒂奥第二长得一模一样，连乌尔苏拉都分不清，直到两人在饭桌上互换碗碟。" },
     { "title": "与佩特拉·科特斯的牲畜生意", "fromPage": 190, "toPage": 240, "description": "情妇的院子成了繁殖场，兔子与牛马成倍增长，他靠这笔财富成为马孔多最阔气的人。" },
     { "title": "娶费尔南达·德尔·卡皮奥", "fromPage": 262, "toPage": 262, "description": "被家里人推着去内地娶回被当作女王养大的费尔南达，从此家里立起了森严的规矩。" },
     { "title": "家道中落后病死", "fromPage": 280, "toPage": 296, "description": "大雨过后牲畜死绝，生意垮掉，他把剩下的时间用来给孩子们讲自己年轻时的排场，最后病死在家中。" }
    ],
    "ending": "香蕉热潮退去后家道败落，在病中把自己关在房间里，最终病死",
    "endingPage": 296,
    "note": "靠牲畜繁殖暴富的第四代，家族最后一位风光的人物。"
   },
   {
    "id": "bn-jose-arcadio-2nd",
    "primaryName": "何塞·阿尔卡蒂奥第二",
    "names": [
     { "text": "何塞·阿尔卡蒂奥第二", "type": "本名", "note": "" },
     { "text": "双胞胎中的哥哥", "type": "俗称", "note": "与奥雷里亚诺第二是孪生兄弟" },
     { "text": "何塞·阿尔卡蒂奥（第四代）", "type": "世代括注", "note": "与第二代、第五代同名，此处按世代标注" }
    ],
    "gender": "男",
    "role": "阿尔卡蒂奥（第三代）之子 / 香蕉公司工人与大罢工的见证者",
    "firstPage": 152,
    "appearances": [152, 190, 240, 264, 280, 290],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 152, "toPage": 240, "note": "在祖宅长大，做过斗鸡生意，也当过船上的工头" },
     { "place": "香蕉种植园", "city": "马孔多", "country": "哥伦比亚", "fromPage": 240, "toPage": 264, "note": "在香蕉公司的种植园做工，后来成为大罢工的带头人" },
     { "place": "马孔多（梅尔基亚德斯的书房）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 264, "toPage": 290, "note": "大屠杀后躲进书房，几十年不出门，研读羊皮卷" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 152, "toPage": 290, "note": "第四代，孪生兄弟中的哥哥" },
     { "name": "香蕉公司", "group": "外来资本", "fromPage": 240, "toPage": 264, "note": "受雇于公司的种植园工人，后来组织并领导大罢工" }
    ],
    "groups": ["第四代"],
    "experiences": [
     { "title": "在香蕉种植园做工", "fromPage": 240, "toPage": 260, "description": "离开斗鸡场到公司做工，第一次见识了火车、铁丝网与装腔作势的美国老板。" },
     { "title": "组织香蕉工人大罢工", "fromPage": 260, "toPage": 264, "description": "被推举为罢工的带头人，在广场上对着军队与公司代表要求改善待遇。" },
     { "title": "在火车站目睹三千人被枪杀", "fromPage": 264, "toPage": 266, "description": "三千多名工人与家属在火车站被军队包围射杀，他被压在尸体堆里，爬出来时天正下着大雨。" },
     { "title": "躲在书房里研读羊皮卷，猝死在书房", "fromPage": 266, "toPage": 290, "description": "大屠杀后没有人相信他，他躲进梅尔基亚德斯的书房，最后与兄弟同时死去，被活埋进对方的坟里。" }
    ],
    "ending": "大屠杀后躲进梅尔基亚德斯的书房，几十年不出门，最后在书房里猝死",
    "endingPage": 290,
    "note": "香蕉公司大罢工的见证者，向奥雷里亚诺·巴比伦尼亚讲述过火车站的三千具尸体。"
   },
   {
    "id": "bn-remedios-la-bella",
    "primaryName": "美人儿蕾梅黛丝",
    "names": [
     { "text": "美人儿蕾梅黛丝", "type": "本名", "note": "" },
     { "text": "蕾梅黛丝", "type": "小名", "note": "" },
     { "text": "升天少女", "type": "俗称", "note": "抓着床单升天的少女" }
    ],
    "gender": "女",
    "role": "阿尔卡蒂奥（第三代）之女 / 不染尘俗的美人",
    "firstPage": 154,
    "appearances": [154, 190, 220, 240],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 154, "toPage": 240, "note": "在家中长大，对世俗的规矩与情欲毫无知觉" },
     { "place": "马孔多（花园与浴室）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 190, "toPage": 240, "note": "赤身在园中行走、在浴室里待上几个小时，是家中最自在的人" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 154, "toPage": 240, "note": "第四代，家族的「美人儿」" }
    ],
    "groups": ["第四代"],
    "experiences": [
     { "title": "因美貌引起一连串死亡", "fromPage": 190, "toPage": 220, "description": "追求她的人接连死去——有人从屋顶摔下，有人在铁轨上被轧死，她把这一切都当作别人的事。" },
     { "title": "对追求者毫无知觉", "fromPage": 220, "toPage": 240, "description": "她赤着身子在园中行走，把军人的献殷勤当作笑话，最后只剩下一个人在她窗前站了整夜。" },
     { "title": "抓着床单升天", "fromPage": 240, "toPage": 240, "description": "一个下午她在园中晾床单，被一阵风连人带床单卷上天空，从此在马孔多消失。" }
    ],
    "ending": "在一个下午抓着花园里晾晒的床单，随着一阵风升上天空，从此消失",
    "endingPage": 240,
    "note": "与上校之妻蕾梅黛丝同名，故用「美人儿」区分，是家族中唯一不染尘俗的人。"
   },
   {
    "id": "bn-aureliano-triste",
    "primaryName": "奥雷里亚诺·特里斯特",
    "names": [
     { "text": "奥雷里亚诺·特里斯特", "type": "本名", "note": "" },
     { "text": "特里斯特", "type": "别名", "note": "上校十七个私生子中的一个" },
     { "text": "上校的儿子", "type": "俗称", "note": "额上带着洗不掉的灰烬十字" }
    ],
    "gender": "男",
    "role": "上校的私生子之一 / 把铁路带进马孔多的工程师",
    "firstPage": 172,
    "appearances": [172, 180, 195, 205],
    "locations": [
     { "place": "内陆各城镇", "city": "马瑙雷", "country": "哥伦比亚", "fromPage": 172, "toPage": 180, "note": "随母亲在内地长大，循着父亲的名号来到马孔多" },
     { "place": "马孔多（铁路工地）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 180, "toPage": 205, "note": "带着工人与枕木修通了马孔多通往海边的铁路" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 172, "toPage": 205, "note": "上校的十七个私生子之一" },
     { "name": "自由党", "group": "党派", "fromPage": 172, "toPage": 205, "note": "父亲留下的名号让他在内地一路畅通" },
     { "name": "香蕉公司", "group": "外来资本", "fromPage": 180, "toPage": 205, "note": "为香蕉公司修筑铁路，把公司引进马孔多" }
    ],
    "groups": ["第三代", "外来者"],
    "experiences": [
     { "title": "循着父亲的名号来到马孔多", "fromPage": 172, "toPage": 180, "description": "上校的十七个私生子在同一个星期陆续来到马孔多，额上的灰烬十字是唯一的凭证。" },
     { "title": "主持修筑通往海边的铁路", "fromPage": 180, "toPage": 200, "description": "带着工人与枕木穿过大泽区，让火车第一次开进马孔多，也带来了香蕉公司。" },
     { "title": "在政府军的追杀中死去", "fromPage": 200, "toPage": 205, "description": "上校的十七个儿子被政府军逐一猎杀，特里斯特也在其中，死时额上的十字仍洗不掉。" }
    ],
    "ending": "为香蕉公司修通铁路后，在上校的十七个儿子被逐一猎杀的清洗中死去",
    "endingPage": 205,
    "note": "铁路与香蕉公司进入马孔多的直接推动者。"
   },
   {
    "id": "bn-herbert",
    "primaryName": "赫伯特先生",
    "names": [
     { "text": "赫伯特", "type": "本名", "note": "" },
     { "text": "赫伯特先生", "type": "尊称", "note": "" },
     { "text": "香蕉公司的考察员", "type": "俗称", "note": "最先发现这片土地适合种香蕉的美国人" }
    ],
    "gender": "男",
    "role": "美国香蕉公司的考察员 / 外来资本的先声",
    "firstPage": 180,
    "appearances": [180, 190, 205, 215],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 180, "toPage": 190, "note": "在奥雷里亚诺第二家吃饭，第一次吃到本地产的香蕉" },
     { "place": "香蕉种植园", "city": "马孔多", "country": "哥伦比亚", "fromPage": 190, "toPage": 215, "note": "带着测量队勘测土地与水源，为种植园选址" }
    ],
    "factions": [
     { "name": "香蕉公司", "group": "外来资本", "fromPage": 180, "toPage": 215, "note": "公司派出的第一批考察人员" }
    ],
    "groups": ["外来者", "香蕉公司"],
    "experiences": [
     { "title": "在奥雷里亚诺第二家吃到香蕉", "fromPage": 180, "toPage": 180, "description": "在饭桌上吃完一串香蕉，掏出小锤子量了自己的腰围，从此这片土地被写进了公司的账本。" },
     { "title": "带人勘测土地与水源", "fromPage": 180, "toPage": 200, "description": "带着工程师与气压计在河边勘测，认定这里能种出全世界最好的香蕉。" },
     { "title": "随公司撤离马孔多", "fromPage": 200, "toPage": 215, "description": "把种植园与后来的布朗先生留在这片土地上，自己回到了北方。" }
    ],
    "ending": "带着测量队离开马孔多，把香蕉种植园和后来的布朗先生留在这片土地上",
    "endingPage": 215,
    "note": "香蕉公司进入马孔多的第一块敲门砖。"
   },
   {
    "id": "bn-petra-cotes",
    "primaryName": "佩特拉·科特斯",
    "names": [
     { "text": "佩特拉·科特斯", "type": "本名", "note": "" },
     { "text": "佩特拉", "type": "小名", "note": "" },
     { "text": "让牲畜疯狂繁殖的女人", "type": "俗称", "note": "她的爱情似乎能让院子里的牲畜成倍增长" }
    ],
    "gender": "女",
    "role": "奥雷里亚诺第二的情人 / 牲畜生意的合伙人",
    "firstPage": 190,
    "appearances": [190, 240, 262, 290, 320, 340],
    "locations": [
     { "place": "马孔多（自己的院子）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 190, "toPage": 296, "note": "与奥雷里亚诺第二同居的院子，也是牲畜繁殖场" },
     { "place": "马孔多（衰败的院子）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 296, "toPage": 340, "note": "家族败落后仍靠卖彩票与养牲畜，把食物送到布恩迪亚家" }
    ],
    "factions": [
     { "name": "马孔多村民", "group": "村社", "fromPage": 190, "toPage": 340, "note": "马孔多最后还留在这里的人之一" }
    ],
    "groups": ["外来者", "马孔多村民"],
    "experiences": [
     { "title": "与奥雷里亚诺第二同居", "fromPage": 190, "toPage": 296, "description": "先与何塞·阿尔卡蒂奥第二在一起，后来成了奥雷里亚诺第二的女人，一生没有名分。" },
     { "title": "牲畜疯狂繁殖带来的财富", "fromPage": 190, "toPage": 262, "description": "院子里的兔子、牛马成倍增长，两人靠这笔财富在马孔多过上最阔气的日子。" },
     { "title": "在家族败落后仍送食物接济", "fromPage": 296, "toPage": 340, "description": "大雨过后什么都垮了，她仍旧每天把食物送到布恩迪亚家门口，直到自己也被遗忘。" }
    ],
    "ending": "奥雷里亚诺第二死后依然独自操持院子，靠卖彩票和牲畜接济衰败的布恩迪亚家，直到马孔多被遗忘",
    "endingPage": 340,
    "note": "一生没有名分，却是布恩迪亚家衰败后唯一还在送食物的人。"
   },
   {
    "id": "bn-fernanda",
    "primaryName": "费尔南达·德尔·卡皮奥",
    "names": [
     { "text": "费尔南达·德尔·卡皮奥", "type": "本名", "note": "" },
     { "text": "费尔南达", "type": "小名", "note": "" },
     { "text": "女王", "type": "俗称", "note": "从小被当作女王培养，家里挂着二十八把便壶的规矩" }
    ],
    "gender": "女",
    "role": "内地贵族之女 / 奥雷里亚诺第二之妻 / 布恩迪亚家最后的女主人",
    "firstPage": 262,
    "appearances": [262, 268, 280, 300, 320],
    "locations": [
     { "place": "内地山城", "city": "里奥阿查", "country": "哥伦比亚", "fromPage": 262, "toPage": 262, "note": "在一座衰败的贵族宅子里被当作女王养大" },
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 262, "toPage": 320, "note": "婚后掌管家务，立下森严的家规，把家变成一座修道院" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 262, "toPage": 320, "note": "嫁入布恩迪亚家，成为后期的女主人" },
     { "name": "教会", "group": "宗教", "fromPage": 262, "toPage": 320, "note": "虔诚的天主教徒，家中一切事务都请教神父" }
    ],
    "groups": ["第四代", "外来者"],
    "experiences": [
     { "title": "被当作女王养大的少女时代", "fromPage": 262, "toPage": 262, "description": "在挂着先人画像的旧宅里长大，学会用金餐具吃饭，也学会了把一切欲望藏起来。" },
     { "title": "与奥雷里亚诺第二成婚并掌管家务", "fromPage": 262, "toPage": 280, "description": "婚后立下吃饭的钟点与祈祷的规矩，把丈夫赶到情妇的院子里去。" },
     { "title": "把女儿梅梅送进修道院", "fromPage": 280, "toPage": 300, "description": "发现女儿与香蕉公司工人相爱后，把梅梅送进修道院，也把外孙藏进作坊里。" },
     { "title": "在家中孤独地老死", "fromPage": 300, "toPage": 320, "description": "家族散尽后仍穿着女王的旧衣在空屋里走动，最后在孤独与病痛中死去。" }
    ],
    "ending": "在家族彻底衰败后仍守着旧规矩，穿着女王般的旧衣在家中老死",
    "endingPage": 320,
    "note": "把森严的家规带进布恩迪亚家，也隔断了家族与马孔多最后的联系。"
   },
   {
    "id": "bn-brown",
    "primaryName": "布朗先生",
    "names": [
     { "text": "布朗先生", "type": "尊称", "note": "" },
     { "text": "香蕉公司老板", "type": "俗称", "note": "种植园与铁路的实际主人" },
     { "text": "美国佬", "type": "俗称", "note": "马孔多人对香蕉公司美国人的通称" }
    ],
    "gender": "男",
    "role": "香蕉公司总经理 / 外来资本的化身",
    "firstPage": 264,
    "appearances": [264, 275, 290, 305],
    "locations": [
     { "place": "香蕉种植园", "city": "马孔多", "country": "哥伦比亚", "fromPage": 264, "toPage": 290, "note": "带着铁丝网、武装警卫与冷气房的种植园，马孔多人不得随意进出" },
     { "place": "马孔多（公司驻地）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 280, "toPage": 305, "note": "公司驻地连同整个种植园在雨季中被水淹没，最后一起撤离" }
    ],
    "factions": [
     { "name": "香蕉公司", "group": "外来资本", "fromPage": 264, "toPage": 305, "note": "公司的总经理，掌握整个种植园" },
     { "name": "政府军", "group": "军政", "fromPage": 264, "toPage": 305, "note": "公司召来军队镇压罢工，军人守在车站与种植园门口" }
    ],
    "groups": ["外来者", "香蕉公司"],
    "experiences": [
     { "title": "下令用铁丝网围起种植园", "fromPage": 264, "toPage": 275, "description": "把工人关在铁丝网里做工，用冷气房与驳船运走香蕉，把马孔多变成公司的地盘。" },
     { "title": "镇压香蕉工人大罢工", "fromPage": 275, "toPage": 280, "description": "召来军队，在火车站枪杀三千多名工人与家属，尸体被装上两百节车厢的火车运往海边。" },
     { "title": "在雨中与公司一起撤离", "fromPage": 290, "toPage": 305, "description": "大雨下了四年十一个月零两天之后，公司连同种植园一起撤走，只留下废墟与被遗忘的名字。" }
    ],
    "ending": "大雨下了四年十一个月零两天之后，带着公司撤出马孔多，把废墟留在这里",
    "endingPage": 305,
    "note": "香蕉公司时期的敌对一方，与何塞·阿尔卡蒂奥第二的大罢工直接冲突。"
   },
   {
    "id": "bn-meme",
    "primaryName": "雷纳塔·蕾梅黛丝（梅梅）",
    "names": [
     { "text": "雷纳塔·蕾梅黛丝", "type": "本名", "note": "" },
     { "text": "梅梅", "type": "小名", "note": "全家人对她的称呼" },
     { "text": "梅梅（第五代）", "type": "世代括注", "note": "与上校之妻、美人儿蕾梅黛丝同名，故按世代与俗称区分" }
    ],
    "gender": "女",
    "role": "奥雷里亚诺第二与费尔南达的长女 / 被送进修道院的母亲",
    "firstPage": 266,
    "appearances": [266, 274, 280, 300, 330],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 266, "toPage": 280, "note": "在母亲森严的家规下长大，学会弹古钢琴，也学会偷偷出去跳舞" },
     { "place": "修道院", "city": "里奥阿查", "country": "哥伦比亚", "fromPage": 280, "toPage": 330, "note": "被母亲送进修道院，此后终生沉默，再没有说过一句话" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 266, "toPage": 330, "note": "第五代长女" }
    ],
    "groups": ["第五代"],
    "experiences": [
     { "title": "在严苛的家规下长大", "fromPage": 266, "toPage": 274, "description": "被母亲按女王的规矩管教，只有在香蕉公司的工人舞会上才第一次感到快乐。" },
     { "title": "与马乌里肖·巴比伦尼亚相爱", "fromPage": 274, "toPage": 285, "description": "两人在浴室与院子里秘密相会，黄蝴蝶跟着他飞进家门，最终被母亲发现。" },
     { "title": "被母亲送进修道院", "fromPage": 280, "toPage": 285, "description": "母亲把她送到内地的修道院，她在那里生下奥雷里亚诺·巴比伦尼亚，此后终生沉默。" },
     { "title": "在修道院里沉默终生", "fromPage": 285, "toPage": 330, "description": "她一生再没有说过一句话，最后在异乡的修道院里老死，只留下一封没有寄出的信。" }
    ],
    "ending": "被母亲送进修道院后一生再没有说过一句话，在异乡的修道院里老死",
    "endingPage": 330,
    "note": "奥雷里亚诺·巴比伦尼亚的母亲；与上校之妻蕾梅黛丝同名，故用俗称「梅梅」区分。"
   },
   {
    "id": "bn-amaranta-ursula",
    "primaryName": "阿玛兰妲·乌尔苏拉",
    "names": [
     { "text": "阿玛兰妲·乌尔苏拉", "type": "本名", "note": "" },
     { "text": "阿玛兰妲·乌尔苏拉（第五代）", "type": "世代括注", "note": "与第二代阿玛兰妲同名，故加世代括注" },
     { "text": "小阿玛兰妲", "type": "小名", "note": "家里人对她的称呼" }
    ],
    "gender": "女",
    "role": "奥雷里亚诺第二与费尔南达的次女 / 从布鲁塞尔归来的家族最后主妇",
    "firstPage": 268,
    "appearances": [268, 290, 320, 340, 352],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 268, "toPage": 280, "note": "在母亲与阿玛兰妲（第二代）身边长大" },
     { "place": "布鲁塞尔", "city": "布鲁塞尔", "country": "比利时", "fromPage": 280, "toPage": 320, "note": "被送去欧洲读书，在那里与加斯通结婚" },
     { "place": "马孔多（老宅）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 320, "toPage": 352, "note": "回到荒废的老宅，重新收拾家园，也在这里与侄子相爱" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 268, "toPage": 352, "note": "第五代次女，家族最后一位主妇" }
    ],
    "groups": ["第五代"],
    "experiences": [
     { "title": "在欧洲读书并与加斯通结婚", "fromPage": 280, "toPage": 320, "description": "在布鲁塞尔读书、结婚，过着时髦的生活，却始终惦记着马孔多的老宅。" },
     { "title": "回到马孔多重整老宅", "fromPage": 320, "toPage": 340, "description": "带着丈夫回到被荒废的老宅，刷墙、修门、种花，让布恩迪亚家最后一次亮起灯。" },
     { "title": "与侄子奥雷里亚诺·巴比伦尼亚相爱", "fromPage": 340, "toPage": 352, "description": "在丈夫离开后与侄子相爱，明知会生出长猪尾巴的孩子仍不肯放手。" },
     { "title": "产后大出血而死", "fromPage": 352, "toPage": 352, "description": "生下一个长着猪尾巴的男孩后大出血死去，孩子随即被蚂蚁拖走。" }
    ],
    "ending": "与侄子奥雷里亚诺·巴比伦尼亚生下长猪尾巴的孩子，产后大出血而死",
    "endingPage": 352,
    "note": "与第二代阿玛兰妲同名，故加世代括注；她与侄子的结合是家族最后一场乱伦。"
   },
   {
    "id": "bn-gaston",
    "primaryName": "加斯通",
    "names": [
     { "text": "加斯通", "type": "本名", "note": "" },
     { "text": "加斯通先生", "type": "尊称", "note": "" },
     { "text": "阿玛兰妲·乌尔苏拉的丈夫", "type": "俗称", "note": "在布鲁塞尔与她结婚的飞行员" }
    ],
    "gender": "男",
    "role": "阿玛兰妲·乌尔苏拉的丈夫 / 飞行员与商人",
    "firstPage": 270,
    "appearances": [270, 290, 300, 340],
    "locations": [
     { "place": "布鲁塞尔", "city": "布鲁塞尔", "country": "比利时", "fromPage": 270, "toPage": 290, "note": "与阿玛兰妲·乌尔苏拉在欧洲成婚，做航空生意" },
     { "place": "马孔多", "city": "马孔多", "country": "哥伦比亚", "fromPage": 290, "toPage": 300, "note": "随妻子回到马孔多，始终无法适应这里的生活" },
     { "place": "布鲁塞尔", "city": "布鲁塞尔", "country": "比利时", "fromPage": 300, "toPage": 345, "note": "独自返回欧洲经营航空邮政，最后收到妻子的坦白信" }
    ],
    "factions": [
     { "name": "外来者", "group": "外来者", "fromPage": 270, "toPage": 345, "note": "从欧洲来到马孔多的外乡人" }
    ],
    "groups": ["外来者"],
    "experiences": [
     { "title": "与阿玛兰妲·乌尔苏拉在布鲁塞尔结婚", "fromPage": 270, "toPage": 290, "description": "在欧洲与她成婚，两人过着富足而时髦的生活，妻子却总说要回马孔多。" },
     { "title": "随妻子回到马孔多", "fromPage": 290, "toPage": 300, "description": "陪她回到荒废的老宅，试图在这里做航空生意，却连邮件都寄不出去。" },
     { "title": "独自返回布鲁塞尔", "fromPage": 300, "toPage": 345, "description": "留下妻子独自返回欧洲，最后收到她承认与侄子相爱的信，从此断了往来。" }
    ],
    "ending": "独自回到布鲁塞尔经营航空邮政，最后收到阿玛兰妲·乌尔苏拉承认与侄子相爱的信，从此断了往来",
    "endingPage": 345,
    "note": "家族第五代婚姻中的外来者，他的离开让老宅重新回到孤独之中。"
   },
   {
    "id": "bn-jose-arcadio-5",
    "primaryName": "何塞·阿尔卡蒂奥（第五代）",
    "names": [
     { "text": "何塞·阿尔卡蒂奥", "type": "本名", "note": "" },
     { "text": "何塞·阿尔卡蒂奥（第五代）", "type": "世代括注", "note": "与第一代、第二代同名，此处按世代标注" },
     { "text": "未来的教皇", "type": "俗称", "note": "被母亲送去罗马读神学，家里一直这样称呼他" }
    ],
    "gender": "男",
    "role": "奥雷里亚诺第二与费尔南达之子 / 曾在罗马读神学的浪荡子",
    "firstPage": 272,
    "appearances": [272, 290, 300],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 272, "toPage": 280, "note": "被母亲当作未来的教皇来培养" },
     { "place": "罗马", "city": "罗马", "country": "意大利", "fromPage": 280, "toPage": 295, "note": "被送去读神学，却在那里过着放荡的生活，靠家里寄钱度日" },
     { "place": "马孔多（老宅）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 295, "toPage": 300, "note": "回到荒废的老宅，与奥雷里亚诺·巴比伦尼亚一起找金币" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 272, "toPage": 300, "note": "第五代，家族名义上的男继承人" }
    ],
    "groups": ["第五代"],
    "experiences": [
     { "title": "被母亲送去罗马读神学", "fromPage": 280, "toPage": 290, "description": "母亲一心想让他当上教皇，他却在罗马的公寓里养着朋友，把学费花在玩乐上。" },
     { "title": "在罗马虚度岁月，最终回到马孔多", "fromPage": 290, "toPage": 295, "description": "母亲死后才回到马孔多，发现家里只剩下一个研读羊皮卷的私生子外甥。" },
     { "title": "在家中浴缸里被孩子们按入水中溺死", "fromPage": 295, "toPage": 300, "description": "他把金币藏在房间里，被几个孩子发现后按进浴缸的水里溺死，金币也被抢走。" }
    ],
    "ending": "从罗马回来后整日闲荡，最后被几个孩子按在浴缸的水里溺死，金币被抢走",
    "endingPage": 300,
    "note": "与第一代、第二代同名，故加世代括注。"
   },
   {
    "id": "bn-mauricio-babilonia",
    "primaryName": "马乌里肖·巴比伦尼亚",
    "names": [
     { "text": "马乌里肖·巴比伦尼亚", "type": "本名", "note": "" },
     { "text": "马乌里肖", "type": "小名", "note": "" },
     { "text": "黄蝴蝶的男人", "type": "俗称", "note": "走到哪里都有黄蝴蝶跟随，因此暴露了行踪" }
    ],
    "gender": "男",
    "role": "香蕉公司机修工 / 梅梅的恋人",
    "firstPage": 274,
    "appearances": [274, 280, 288, 295],
    "locations": [
     { "place": "香蕉种植园", "city": "马孔多", "country": "哥伦比亚", "fromPage": 274, "toPage": 285, "note": "在公司的机修车间做工，身上有机油与香蕉的味道" },
     { "place": "马孔多（自己的小屋）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 285, "toPage": 295, "note": "被枪伤后瘫痪，独自躺在一间小屋里，直到死去" }
    ],
    "factions": [
     { "name": "香蕉公司", "group": "外来资本", "fromPage": 274, "toPage": 285, "note": "香蕉公司的机修工" }
    ],
    "groups": ["外来者", "马孔多村民"],
    "experiences": [
     { "title": "每夜从浴室进入布恩迪亚家与梅梅相会", "fromPage": 274, "toPage": 280, "description": "从屋顶爬进浴室与梅梅相会，黄蝴蝶跟着他飞进老宅，也把这段恋情暴露给费尔南达。" },
     { "title": "被守夜的警卫开枪打中脊椎", "fromPage": 280, "toPage": 285, "description": "被当作偷鸡贼的警卫开枪打中脊椎，从此瘫痪在床，再也站不起来。" },
     { "title": "瘫痪在床，独自死去", "fromPage": 285, "toPage": 295, "description": "在无人照料的小屋里躺了多年，至死不知道梅梅怀了他的孩子。" }
    ],
    "ending": "被当作偷鸡贼的警卫开枪打中脊椎，此后瘫痪在床，在无人照料中死去，至死不知道梅梅怀了他的孩子",
    "endingPage": 295,
    "note": "奥雷里亚诺·巴比伦尼亚的父亲，他的黄蝴蝶是家族后期最著名的意象。"
   },
   {
    "id": "bn-aureliano-babilonia",
    "primaryName": "奥雷里亚诺·巴比伦尼亚",
    "names": [
     { "text": "奥雷里亚诺·巴比伦尼亚", "type": "本名", "note": "" },
     { "text": "奥雷里亚诺", "type": "小名", "note": "家里人这样叫他" },
     { "text": "最后一代译者", "type": "俗称", "note": "在飓风中读完全部羊皮卷的人" }
    ],
    "gender": "男",
    "role": "梅梅与马乌里肖之子 / 羊皮卷的最后译者",
    "firstPage": 288,
    "appearances": [288, 300, 320, 340, 355, 360],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 288, "toPage": 320, "note": "被外祖母费尔南达藏在作坊里养大，几乎不被允许出门" },
     { "place": "马孔多（梅尔基亚德斯的书房）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 320, "toPage": 355, "note": "在书房里研读羊皮卷，靠卖旧书与斗鸡为生" },
     { "place": "马孔多（飓风中）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 355, "toPage": 360, "note": "在飓风掀掉屋顶时读完了羊皮卷的全部译文" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 288, "toPage": 360, "note": "第六代，家族最后一人" },
     { "name": "加泰罗尼亚书商的小圈子", "group": "外来者", "fromPage": 295, "toPage": 330, "note": "与阿基莱斯·里卡多等加泰罗尼亚书商往来，靠卖旧书与斗鸡为生" }
    ],
    "groups": ["第六代"],
    "experiences": [
     { "title": "被祖母藏在作坊里养大", "fromPage": 288, "toPage": 300, "description": "出生后被外祖母藏在梅尔基亚德斯的作坊里，不许出门，只知道自己叫奥雷里亚诺。" },
     { "title": "与阿基莱斯·里卡多的书店往来", "fromPage": 295, "toPage": 330, "description": "在加泰罗尼亚人的书店里读到想读的一切，也第一次听说马孔多之外的世界。" },
     { "title": "与阿玛兰妲·乌尔苏拉相爱", "fromPage": 340, "toPage": 352, "description": "与从欧洲归来的姑母相爱，两人明知道血缘太近，仍然生下了家族最后的孩子。" },
     { "title": "在飓风中读完整卷羊皮卷", "fromPage": 355, "toPage": 360, "description": "飓风掀掉屋顶时，他终于译出羊皮卷上的全部文字，明白了家族的命运早已写定，随即与马孔多一同被抹去。" }
    ],
    "ending": "在飓风掀掉屋顶的瞬间读完了羊皮卷的全部译文，明白了自己与马孔多的命运，随即被飓风抹去",
    "endingPage": 360,
    "note": "家族第六代，全书最后一人；羊皮卷上的预言由他译出，也由他见证兑现。"
   },
   {
    "id": "bn-aquiles",
    "primaryName": "阿基莱斯·里卡多",
    "names": [
     { "text": "阿基莱斯·里卡多", "type": "本名", "note": "" },
     { "text": "加泰罗尼亚智者", "type": "俗称", "note": "开旧书店的加泰罗尼亚老人" },
     { "text": "书店老板", "type": "俗称", "note": "马孔多最后一家旧书店的主人" }
    ],
    "gender": "男",
    "role": "旧书店老板 / 加泰罗尼亚智者",
    "firstPage": 295,
    "appearances": [295, 310, 325, 330],
    "locations": [
     { "place": "马孔多（加泰罗尼亚人的书店）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 295, "toPage": 325, "note": "书店里堆满旧书与报纸，奥雷里亚诺·巴比伦尼亚常来这里消磨时间" },
     { "place": "巴塞罗那", "city": "巴塞罗那", "country": "西班牙", "fromPage": 325, "toPage": 330, "note": "卖掉书店返回故乡，却始终怀念马孔多" }
    ],
    "factions": [
     { "name": "外来者", "group": "外来者", "fromPage": 295, "toPage": 330, "note": "在马孔多开旧书店的加泰罗尼亚人" }
    ],
    "groups": ["外来者"],
    "experiences": [
     { "title": "在马孔多开旧书店", "fromPage": 295, "toPage": 320, "description": "把一箱箱旧书从海边运进马孔多，和奥雷里亚诺·巴比伦尼亚谈论世界与马孔多的野蛮。" },
     { "title": "卖掉书店返回巴塞罗那", "fromPage": 320, "toPage": 325, "description": "认定马孔多没有未来，卖掉书店与旧书，独自回到故乡。" },
     { "title": "在故乡怀念马孔多，病死", "fromPage": 325, "toPage": 330, "description": "在巴塞罗那给奥雷里亚诺写信，说这里也没有他想要的东西，最后在怀念中病死。" }
    ],
    "ending": "卖掉书店回到巴塞罗那，此后一直怀念马孔多，在信中写下对故乡的失望，最后病死在那里",
    "endingPage": 330,
    "note": "奥雷里亚诺·巴比伦尼亚晚年的师友，也是马孔多衰亡的旁观者。"
   },
   {
    "id": "bn-rodrigo",
    "primaryName": "长猪尾巴的婴儿（罗德里戈）",
    "names": [
     { "text": "罗德里戈", "type": "本名", "note": "奥雷里亚诺·巴比伦尼亚从羊皮卷中读出的名字" },
     { "text": "长猪尾巴的婴儿", "type": "俗称", "note": "布恩迪亚家族百年预言中最后的孩子" }
    ],
    "gender": "男",
    "role": "阿玛兰妲·乌尔苏拉与奥雷里亚诺·巴比伦尼亚之子 / 家族第七代",
    "firstPage": 352,
    "appearances": [352, 355],
    "locations": [
     { "place": "马孔多（布恩迪亚家）", "city": "马孔多", "country": "哥伦比亚", "fromPage": 352, "toPage": 355, "note": "出生在荒废的老宅里，是布恩迪亚家族最后一个人" }
    ],
    "factions": [
     { "name": "布恩迪亚家族", "group": "家族", "fromPage": 352, "toPage": 355, "note": "第七代，家族血脉的终点" }
    ],
    "groups": ["第七代"],
    "experiences": [
     { "title": "出生", "fromPage": 352, "toPage": 352, "description": "一出生就长着一条猪尾巴，母亲因此大出血而死，家里只剩一个男人看着这个孩子。" },
     { "title": "被蚂蚁拖向蚁巢", "fromPage": 355, "toPage": 355, "description": "一群蚂蚁沿着花园把他拖向蚁巢，奥雷里亚诺·巴比伦尼亚抱起他时，他已经只剩一张皮。" }
    ],
    "ending": "出生时就长着一条猪尾巴，被蚂蚁沿着花园拖向蚁巢吃掉，布恩迪亚家族的血脉就此断绝",
    "endingPage": 355,
    "note": "家族第七代，百年预言中注定长猪尾巴的孩子，随马孔多一同被飓风抹去。"
   }
  ],
  "relations": [
   { "id": "bn-r1", "from": "bn-jose-arcadio-1", "to": "bn-ursula", "type": "夫妻 / 表兄妹", "category": "婚姻", "sincePage": 1, "untilPage": 118, "directed": false, "note": "既是夫妻又是表兄妹，一同离开里奥阿查开辟马孔多；止于何塞·阿尔卡蒂奥·布恩迪亚被绑在栗树下老死。" },
   { "id": "bn-r2", "from": "bn-jose-arcadio-1", "to": "bn-jose-arcadio-2", "type": "父子", "category": "亲属", "sincePage": 20, "untilPage": null, "directed": true, "note": "长子出生在出走途中；血缘关系按家族血脉处理，延续到全书末代。" },
   { "id": "bn-r3", "from": "bn-jose-arcadio-1", "to": "bn-aureliano-colonel", "type": "父子", "category": "亲属", "sincePage": 24, "untilPage": null, "directed": true, "note": "次子奥雷里亚诺在父亲的炼金实验室里长大；血缘关系延续到全书末代。" },
   { "id": "bn-r4", "from": "bn-jose-arcadio-1", "to": "bn-amaranta", "type": "父女", "category": "亲属", "sincePage": 30, "untilPage": null, "directed": true, "note": "小女儿阿玛兰妲在他发疯后由乌尔苏拉带大；血缘关系延续到全书末代。" },
   { "id": "bn-r5", "from": "bn-jose-arcadio-1", "to": "bn-rebeca", "type": "养父女", "category": "亲属", "sincePage": 34, "untilPage": 118, "directed": true, "note": "丽贝卡以远亲孤女的身份被收养为女儿；止于他被绑在栗树下老死。" },
   { "id": "bn-r6", "from": "bn-ursula", "to": "bn-jose-arcadio-2", "type": "母子", "category": "亲属", "sincePage": 20, "untilPage": 105, "directed": true, "note": "乌尔苏拉一生为这个长子操心；止于何塞·阿尔卡蒂奥（第二代）被枪杀。" },
   { "id": "bn-r7", "from": "bn-ursula", "to": "bn-aureliano-colonel", "type": "母子", "category": "亲属", "sincePage": 24, "untilPage": 232, "directed": true, "note": "上校是她最挂念的儿子；止于上校在小金鱼作坊里死去。" },
   { "id": "bn-r8", "from": "bn-ursula", "to": "bn-amaranta", "type": "母女", "category": "亲属", "sincePage": 30, "untilPage": 285, "directed": true, "note": "母女相依又彼此折磨；止于阿玛兰妲缝完寿衣后孤独而死。" },
   { "id": "bn-r9", "from": "bn-ursula", "to": "bn-rebeca", "type": "养母女", "category": "亲属", "sincePage": 34, "untilPage": 200, "directed": true, "note": "收养丽贝卡并为她的婚事操心；止于丽贝卡闭门独居而死。" },
   { "id": "bn-r10", "from": "bn-aureliano-colonel", "to": "bn-amaranta", "type": "兄妹", "category": "亲属", "sincePage": 30, "untilPage": 232, "directed": false, "note": "阿玛兰妲对上校既依恋又固执；止于上校在小金鱼作坊里死去。" },
   { "id": "bn-r11", "from": "bn-jose-arcadio-2", "to": "bn-rebeca", "type": "夫妻 / 养兄妹", "category": "婚姻", "sincePage": 96, "untilPage": 105, "directed": false, "note": "两人不顾养兄妹的名分结合并另立门户（sincePage 记在两人结合之时）；止于他在自己的房间里被枪杀。" },
   { "id": "bn-r12", "from": "bn-aureliano-colonel", "to": "bn-remedios-moscote", "type": "夫妻", "category": "婚姻", "sincePage": 82, "untilPage": 96, "directed": false, "note": "上校娶里正的小女儿蕾梅黛丝；她误饮毒药早逝，关系终止。" },
   { "id": "bn-r13", "from": "bn-aureliano-colonel", "to": "bn-aureliano-jose", "type": "父子", "category": "亲属", "sincePage": 100, "untilPage": 145, "directed": true, "note": "奥雷里亚诺·何塞是上校与庇拉尔·特尔内拉之子；止于他被保守党士兵枪杀。" },
   { "id": "bn-r14", "from": "bn-aureliano-colonel", "to": "bn-arcadio-3", "type": "叔侄 / 抚养", "category": "亲属", "sincePage": 92, "untilPage": 158, "directed": true, "note": "按原著，阿尔卡蒂奥（第三代）是何塞·阿尔卡蒂奥（第二代）之子、上校的侄子，由上校与乌尔苏拉抚养；止于他被枪决。" },
   { "id": "bn-r15", "from": "bn-jose-arcadio-2", "to": "bn-arcadio-3", "type": "父子", "category": "亲属", "sincePage": 92, "untilPage": 105, "directed": true, "note": "他与庇拉尔·特尔内拉之子，从未被父亲承认；止于父亲被枪杀。" },
   { "id": "bn-r16", "from": "bn-pilar-ternera", "to": "bn-arcadio-3", "type": "母子", "category": "亲属", "sincePage": 92, "untilPage": 158, "directed": true, "note": "她把孩子交给布恩迪亚家抚养，并用纸牌算出他死在枪口下；止于他被枪决。" },
   { "id": "bn-r17", "from": "bn-pilar-ternera", "to": "bn-aureliano-jose", "type": "母子", "category": "亲属", "sincePage": 100, "untilPage": 145, "directed": true, "note": "上校与她的儿子，由阿玛兰妲带大；止于他被保守党士兵枪杀。" },
   { "id": "bn-r18", "from": "bn-arcadio-3", "to": "bn-santa-sofia", "type": "夫妻 / 事实伴侣", "category": "婚姻", "sincePage": 130, "untilPage": 158, "directed": false, "note": "桑塔索菲亚·德·拉·彼达来到家中便再未离开，从未正式举行婚礼；止于阿尔卡蒂奥被枪决。" },
   { "id": "bn-r19", "from": "bn-arcadio-3", "to": "bn-aureliano-2", "type": "父子", "category": "亲属", "sincePage": 150, "untilPage": 158, "directed": true, "note": "奥雷里亚诺第二是孪生兄弟之一，父亲被枪决时他尚在襁褓。" },
   { "id": "bn-r20", "from": "bn-arcadio-3", "to": "bn-remedios-la-bella", "type": "父女", "category": "亲属", "sincePage": 154, "untilPage": 158, "directed": true, "note": "美人儿蕾梅黛丝是阿尔卡蒂奥（第三代）的小女儿；止于父亲被枪决。" },
   { "id": "bn-r21", "from": "bn-santa-sofia", "to": "bn-aureliano-2", "type": "母子", "category": "亲属", "sincePage": 150, "untilPage": 296, "directed": true, "note": "她一手把双胞胎带大；止于奥雷里亚诺第二病死。" },
   { "id": "bn-r22", "from": "bn-santa-sofia", "to": "bn-jose-arcadio-2nd", "type": "母子", "category": "亲属", "sincePage": 152, "untilPage": 290, "directed": true, "note": "她始终替这个躲在书房里的儿子送饭；止于何塞·阿尔卡蒂奥第二猝死。" },
   { "id": "bn-r23", "from": "bn-santa-sofia", "to": "bn-remedios-la-bella", "type": "母女", "category": "亲属", "sincePage": 154, "untilPage": 240, "directed": true, "note": "母亲一生替这个不谙世事的女儿操心；止于美人儿蕾梅黛丝抓着床单飞升。" },
   { "id": "bn-r24", "from": "bn-ursula", "to": "bn-aureliano-2", "type": "祖孙", "category": "亲属", "sincePage": 150, "untilPage": 296, "directed": true, "note": "乌尔苏拉把这个重孙当作家族的希望；止于奥雷里亚诺第二病死。" },
   { "id": "bn-r25", "from": "bn-ursula", "to": "bn-meme", "type": "曾祖孙", "category": "亲属", "sincePage": 266, "untilPage": 330, "directed": true, "note": "她曾把这个重孙女抱在怀里；止于梅梅在修道院里老死。" },
   { "id": "bn-r26", "from": "bn-ursula", "to": "bn-amaranta-ursula", "type": "曾祖孙", "category": "亲属", "sincePage": 268, "untilPage": 330, "directed": true, "note": "阿玛兰妲·乌尔苏拉出生时乌尔苏拉仍在世；止于乌尔苏拉老死。" },
   { "id": "bn-r27", "from": "bn-ursula", "to": "bn-aureliano-babilonia", "type": "直系血脉 / 家族记忆", "category": "亲属", "sincePage": 288, "untilPage": null, "directed": true, "note": "家族的血脉与记忆一直延续到这最后一代；此关系随全书末页的飓风一同被抹去。" },
   { "id": "bn-r28", "from": "bn-aureliano-2", "to": "bn-fernanda", "type": "夫妻", "category": "婚姻", "sincePage": 262, "untilPage": 296, "directed": false, "note": "被家里人推着去内地娶回费尔南达；止于奥雷里亚诺第二病死。" },
   { "id": "bn-r29", "from": "bn-aureliano-2", "to": "bn-meme", "type": "父女", "category": "亲属", "sincePage": 266, "untilPage": 296, "directed": true, "note": "他最喜欢这个女儿，却挡不住妻子把她送走；止于他病死。" },
   { "id": "bn-r30", "from": "bn-aureliano-2", "to": "bn-jose-arcadio-5", "type": "父子", "category": "亲属", "sincePage": 272, "untilPage": 296, "directed": true, "note": "他把儿子送去罗马当教皇；止于他自己病死。" },
   { "id": "bn-r31", "from": "bn-aureliano-2", "to": "bn-amaranta-ursula", "type": "父女", "category": "亲属", "sincePage": 268, "untilPage": 296, "directed": true, "note": "小女儿出生时家道已败；止于他病死。" },
   { "id": "bn-r32", "from": "bn-fernanda", "to": "bn-meme", "type": "母女", "category": "亲属", "sincePage": 266, "untilPage": 320, "directed": true, "note": "母女终生对抗，母亲把女儿送进修道院；止于费尔南达老死。" },
   { "id": "bn-r33", "from": "bn-fernanda", "to": "bn-amaranta-ursula", "type": "母女", "category": "亲属", "sincePage": 268, "untilPage": 320, "directed": true, "note": "她把这个女儿送去欧洲读书；止于她自己老死。" },
   { "id": "bn-r34", "from": "bn-fernanda", "to": "bn-aureliano-babilonia", "type": "祖母与孙 / 抚养", "category": "亲属", "sincePage": 288, "untilPage": null, "directed": true, "note": "她把这个私生外孙藏在作坊里养大；家族血脉延续到末代，关系随之延续到全书末页。" },
   { "id": "bn-r35", "from": "bn-meme", "to": "bn-aureliano-babilonia", "type": "母子", "category": "亲属", "sincePage": 288, "untilPage": null, "directed": true, "note": "她在修道院里生下他，此后再未相见；血脉延续到末代，关系随之延续到全书末页。" },
   { "id": "bn-r36", "from": "bn-mauricio-babilonia", "to": "bn-aureliano-babilonia", "type": "父子", "category": "亲属", "sincePage": 288, "untilPage": null, "directed": true, "note": "他至死不知道有这个孩子；血脉延续到末代，关系随之延续到全书末页。" },
   { "id": "bn-r37", "from": "bn-amaranta-ursula", "to": "bn-aureliano-babilonia", "type": "姨侄 / 情人 / 夫妻", "category": "情感", "sincePage": 288, "untilPage": 352, "directed": false, "note": "她把他当孩子带大，后来成为他的情人；家族最后一场乱伦，止于她产后大出血而死。" },
   { "id": "bn-r38", "from": "bn-amaranta-ursula", "to": "bn-gaston", "type": "夫妻", "category": "婚姻", "sincePage": 270, "untilPage": 340, "directed": false, "note": "两人在布鲁塞尔成婚，他独自返回欧洲；止于她在信中承认与侄子相爱，婚姻名存实亡后断绝。" },
   { "id": "bn-r39", "from": "bn-amaranta-ursula", "to": "bn-rodrigo", "type": "母子", "category": "亲属", "sincePage": 352, "untilPage": null, "directed": true, "note": "她生下这个长猪尾巴的孩子后大出血而死；血脉到第七代断绝，关系随飓风一同被抹去。" },
   { "id": "bn-r40", "from": "bn-aureliano-babilonia", "to": "bn-rodrigo", "type": "父子", "category": "亲属", "sincePage": 352, "untilPage": null, "directed": true, "note": "他抱着孩子读完羊皮卷；家族血脉到此断绝，关系随飓风一同被抹去。" },
   { "id": "bn-r41", "from": "bn-meme", "to": "bn-mauricio-babilonia", "type": "恋人", "category": "情感", "sincePage": 274, "untilPage": 295, "directed": false, "note": "他每夜从浴室进来与她相会，黄蝴蝶暴露了行踪；他被枪伤后瘫痪，关系终止。" },
   { "id": "bn-r42", "from": "bn-meme", "to": "bn-amaranta-ursula", "type": "姐妹", "category": "亲属", "sincePage": 268, "untilPage": 330, "directed": false, "note": "梅梅被送走时妹妹还小；止于梅梅在修道院里老死。" },
   { "id": "bn-r43", "from": "bn-amaranta", "to": "bn-amaranta-ursula", "type": "姑祖母 / 抚养", "category": "亲属", "sincePage": 268, "untilPage": 285, "directed": true, "note": "阿玛兰妲（第二代）把这个与她同名的孩子带在身边；止于她孤独而死。" },
   { "id": "bn-r44", "from": "bn-aureliano-triste", "to": "bn-aureliano-colonel", "type": "父子", "category": "亲属", "sincePage": 172, "untilPage": 205, "directed": true, "note": "上校十七个私生子之一，额上带着灰烬十字；止于他在政府军的清洗中死去。" },
   { "id": "bn-r45", "from": "bn-apolinar-moscote", "to": "bn-remedios-moscote", "type": "父女", "category": "亲属", "sincePage": 82, "untilPage": 96, "directed": true, "note": "他把女儿嫁给上校，借此缓和与村里的关系；止于蕾梅黛丝误饮毒药早逝。" },
   { "id": "bn-r46", "from": "bn-amaranta", "to": "bn-rebeca", "type": "姐妹 / 情敌", "category": "情感", "sincePage": 88, "untilPage": 200, "directed": false, "note": "两人为皮埃特罗·克雷斯皮反目，一生互不原谅（sincePage 记在克雷斯皮登场、姐妹反目之时）；止于丽贝卡孤独死去。" },
   { "id": "bn-r47", "from": "bn-rebeca", "to": "bn-pietro-crespi", "type": "未婚夫妻", "category": "情感", "sincePage": 88, "untilPage": 96, "directed": false, "note": "与意大利琴师相恋订婚，婚事被阿玛兰妲反复阻挠；她改嫁何塞·阿尔卡蒂奥（第二代）后关系终止。" },
   { "id": "bn-r48", "from": "bn-amaranta", "to": "bn-pietro-crespi", "type": "恋人（被拒）", "category": "情感", "sincePage": 92, "untilPage": 100, "directed": false, "note": "她先阻挠丽贝卡的婚事，又转而接受克雷斯皮的追求（sincePage 记在她转向追求者之时）；他自杀后关系终止。" },
   { "id": "bn-r49", "from": "bn-pilar-ternera", "to": "bn-jose-arcadio-2", "type": "情人", "category": "情感", "sincePage": 84, "untilPage": 96, "directed": false, "note": "她先与何塞·阿尔卡蒂奥（第二代）相好并生下阿尔卡蒂奥（第三代）；他娶丽贝卡后关系结束。" },
   { "id": "bn-r50", "from": "bn-aureliano-2", "to": "bn-petra-cotes", "type": "情人", "category": "情感", "sincePage": 190, "untilPage": 296, "directed": false, "note": "两人同居数十年，靠牲畜繁殖发财；止于他病死。" },
   { "id": "bn-r51", "from": "bn-jose-arcadio-2nd", "to": "bn-petra-cotes", "type": "情人", "category": "情感", "sincePage": 190, "untilPage": 290, "directed": false, "note": "佩特拉原是何塞·阿尔卡蒂奥第二的女人，后与他的孪生兄弟同居；止于他在书房里猝死。" },
   { "id": "bn-r52", "from": "bn-visitacion", "to": "bn-ursula", "type": "主仆", "category": "主仆", "sincePage": 86, "untilPage": 150, "directed": true, "note": "瓜希拉女仆在布恩迪亚家操持家务、照看孩子；止于她返回大泽区。" },
   { "id": "bn-r53", "from": "bn-gerineldo", "to": "bn-aureliano-colonel", "type": "战友 / 挚友", "category": "同盟", "sincePage": 104, "untilPage": 190, "directed": false, "note": "从上校起兵的第一天起跟随他，被称作上校唯一的朋友；止于他在孤独中老死。" },
   { "id": "bn-r54", "from": "bn-gerineldo", "to": "bn-amaranta", "type": "求婚者 / 被拒", "category": "情感", "sincePage": 104, "untilPage": 190, "directed": true, "note": "他每个傍晚到布恩迪亚家下棋求婚，被拒绝了一辈子；止于他孤独老死。" },
   { "id": "bn-r55", "from": "bn-nicanor", "to": "bn-ursula", "type": "教会与家族", "category": "同盟", "sincePage": 136, "untilPage": 296, "directed": false, "note": "神父靠布恩迪亚家与村民的捐款修建教堂；止于他老病而死。" },
   { "id": "bn-r56", "from": "bn-brown", "to": "bn-jose-arcadio-2nd", "type": "镇压罢工 / 敌对", "category": "敌对", "sincePage": 264, "untilPage": 290, "directed": true, "note": "公司召来军队在火车站枪杀三千名罢工工人，他是带头人；止于他在书房里猝死。" },
   { "id": "bn-r57", "from": "bn-melquiades", "to": "bn-jose-arcadio-1", "type": "师友 / 预言者", "category": "师友", "sincePage": 5, "untilPage": null, "directed": false, "note": "吉普赛人带来磁铁、放大镜与炼金术，是他一生的挚友；死后仍以羊皮卷与预言影响布恩迪亚家，故关系延续到全书末页。" },
   { "id": "bn-r58", "from": "bn-melquiades", "to": "bn-ursula", "type": "师友 / 羊皮卷保管", "category": "师友", "sincePage": 5, "untilPage": null, "directed": false, "note": "乌尔苏拉一生保存梅尔基亚德斯的房间与羊皮卷；死者对家族的影响延续到全书末页。" },
   { "id": "bn-r59", "from": "bn-melquiades", "to": "bn-aureliano-babilonia", "type": "师友 / 羊皮卷传承", "category": "师友", "sincePage": 288, "untilPage": null, "directed": true, "note": "梅尔基亚德斯早已死去，这里按「死后仍以羊皮卷与预言影响家族」处理：他留下的预言最终由奥雷里亚诺·巴比伦尼亚译出。" },
   { "id": "bn-r60", "from": "bn-prudencia", "to": "bn-jose-arcadio-1", "type": "仇杀 / 幽灵纠缠", "category": "敌对", "sincePage": 12, "untilPage": null, "directed": true, "note": "他在斗鸡争执中被何塞·阿尔卡蒂奥·布恩迪亚刺死，此后以幽灵之姿反复出现，纠缠到对方被绑在栗树下。" },
   { "id": "bn-r61", "from": "bn-herbert", "to": "bn-aureliano-2", "type": "外来资本与本地人", "category": "其他", "sincePage": 180, "untilPage": 215, "directed": true, "note": "他在奥雷里亚诺第二家吃到香蕉，从此香蕉公司进入马孔多；止于他随公司撤离。" },
   { "id": "bn-r62", "from": "bn-aquiles", "to": "bn-aureliano-babilonia", "type": "师友 / 旧书店", "category": "师友", "sincePage": 295, "untilPage": 330, "directed": false, "note": "加泰罗尼亚智者的书店是奥雷里亚诺·巴比伦尼亚认识世界的窗口；止于老人在巴塞罗那病死。" }
  ]
 }
]);
