// 示例数据：三体（三部曲）
window.SAMPLE_BOOKS = (window.SAMPLE_BOOKS || []).concat([
 {
  "id": "sample-santi",
  "meta": {
   "title": "三体（三部曲）",
   "author": "刘慈欣",
   "publisher": "重庆出版社",
   "isbn": "978-7-229-03006-6",
   "edition": "三体 + 三体Ⅱ·黑暗森林 + 三体Ⅲ·死神永生 套装",
   "year": "2012",
   "totalPages": 1300,
   "currentPage": 1,
   "note": "三册合计页码，按剧情顺序线性排布"
  },
  "characters": [
   {
    "id": "st-yewenjie",
    "primaryName": "叶文洁",
    "names": [
     { "text": "叶教授", "type": "尊称", "note": "" },
     { "text": "统帅", "type": "代号", "note": "地球三体组织内部称呼" },
     { "text": "红岸基地技术员", "type": "别名", "note": "" }
    ],
    "gender": "女",
    "role": "天体物理学家 / 地球三体组织精神领袖",
    "firstPage": 12,
    "appearances": [12, 90, 210, 320, 880],
    "locations": [
     { "place": "红岸基地", "city": "大兴安岭", "country": "中国", "fromPage": 12, "toPage": 250, "note": "向宇宙发出第一条地球文明信息" },
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 250, "toPage": 430, "note": "组建地球三体组织" },
     { "place": "雷达峰", "city": "大兴安岭", "country": "中国", "fromPage": 430, "toPage": 880, "note": "晚年重回红岸，在女儿墓前把宇宙社会学公理交给罗辑" }
    ],
    "factions": [
     { "name": "地球三体组织", "group": "ETO", "fromPage": 250, "toPage": 880, "note": "统帅，组织的精神核心" },
     { "name": "拯救派", "group": "ETO派系", "fromPage": 260, "toPage": 500, "note": "主张请三体文明改造人类" }
    ],
    "groups": ["第一册主线", "红岸往事"],
    "experiences": [
     { "title": "在红岸基地收到三体世界回信", "fromPage": 110, "toPage": 130, "description": "收到监听员1379号“不要回答”的警告后仍然回复，请求三体世界介入人类文明。" },
     { "title": "在雷达峰亲手结束杨卫宁与雷志成的生命", "fromPage": 300, "toPage": 320, "description": "为保住红岸的秘密锯断缆绳，让丈夫与政委随缆车一同坠下。" },
     { "title": "组建地球三体组织并交出统帅之位", "fromPage": 320, "toPage": 430, "description": "在伊文斯的资金支持下把 ETO 发展为横跨全球的秘密组织。" },
     { "title": "在杨冬墓前向罗辑讲述宇宙社会学", "fromPage": 860, "toPage": 884, "description": "把两条公理与猜疑链、技术爆炸交给罗辑，随后在雷达峰坠崖身亡。" }
    ],
    "ending": "在雷达峰坠崖身亡，把宇宙社会学的种子留给罗辑",
    "endingPage": 886,
    "note": ""
   },
   {
    "id": "st-wangmiao",
    "primaryName": "汪淼",
    "names": [
     { "text": "汪教授", "type": "尊称", "note": "" },
     { "text": "纳米材料专家", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "纳米材料学家 / 古筝行动飞刃设计者",
    "firstPage": 260,
    "appearances": [260, 300, 400, 460, 500],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 260, "toPage": 400, "note": "调查科学家自杀之谜，看到宇宙闪烁" },
     { "place": "三体游戏", "city": "虚拟空间", "country": "国际", "fromPage": 260, "toPage": 300, "note": "以游戏为入口理解三体世界" },
     { "place": "巴拿马运河", "city": "巴拿马", "country": "巴拿马", "fromPage": 440, "toPage": 470, "note": "古筝行动现场，飞刃切开审判日号" }
    ],
    "factions": [
     { "name": "科学边界", "group": "学术组织", "fromPage": 240, "toPage": 300, "note": "被邀请加入的学者" },
     { "name": "作战中心", "group": "军方", "fromPage": 300, "toPage": 470, "note": "配合常伟思调查 ETO" }
    ],
    "groups": ["第一册主线"],
    "experiences": [
     { "title": "被卷入科学家连环自杀事件", "fromPage": 24, "toPage": 60, "description": "在史强与常伟思的推动下调查杨冬之死，倒计时出现在他的视野里。" },
     { "title": "进入三体游戏并破解文明真相", "fromPage": 96, "toPage": 240, "description": "在《三体》游戏中逐渐拼出三体世界的运行规律与三体舰队的远征。" },
     { "title": "设计古筝行动", "fromPage": 400, "toPage": 450, "description": "用纳米飞刃在巴拿马运河架起“古筝”，切碎审判日号并夺取三体资料。" }
    ],
    "ending": "在第一册结尾淡出主线，作为纳米材料权威被后世继续引用",
    "endingPage": 920,
    "note": ""
   },
   {
    "id": "st-yangdong",
    "primaryName": "杨冬",
    "names": [
     { "text": "杨教授", "type": "尊称", "note": "" },
     { "text": "叶文洁之女", "type": "别名", "note": "" }
    ],
    "gender": "女",
    "role": "理论物理学家 / 首个自杀的科学家",
    "firstPage": 38,
    "appearances": [38, 66, 150],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 38, "toPage": 150, "note": "家中留下遗书后自杀" }
    ],
    "factions": [
     { "name": "科学边界", "group": "学术组织", "fromPage": 38, "toPage": 150, "note": "核心成员" }
    ],
    "groups": ["第一册主线"],
    "experiences": [
     { "title": "发现粒子对撞结果被人为扰动", "fromPage": 40, "toPage": 66, "description": "实验结果彻底失序，物理学在她眼中不再存在。" },
     { "title": "留下遗书自杀", "fromPage": 66, "toPage": 70, "description": "遗书中写下“物理学不存在了”，成为汪淼调查的起点。" }
    ],
    "ending": "留下遗书后自杀身亡",
    "endingPage": 70,
    "note": ""
   },
   {
    "id": "st-yangweining",
    "primaryName": "杨卫宁",
    "names": [
     { "text": "杨总工", "type": "尊称", "note": "" },
     { "text": "红岸基地总工程师", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "红岸基地总工程师 / 叶文洁的丈夫",
    "firstPage": 120,
    "appearances": [120, 200, 300],
    "locations": [
     { "place": "红岸基地", "city": "大兴安岭", "country": "中国", "fromPage": 120, "toPage": 300, "note": "把叶文洁调入红岸并成为她的丈夫" }
    ],
    "factions": [
     { "name": "红岸工程", "group": "军方", "fromPage": 120, "toPage": 300, "note": "基地技术负责人" }
    ],
    "groups": ["红岸往事"],
    "experiences": [
     { "title": "把叶文洁调入红岸基地", "fromPage": 120, "toPage": 150, "description": "在叶文洁最绝望时给了她一处栖身之所，后来与她结为夫妻。" },
     { "title": "发现叶文洁私发信息后赶往雷达峰", "fromPage": 296, "toPage": 300, "description": "与雷志成同乘缆车上山，被叶文洁锯断的缆绳抛下悬崖。" }
    ],
    "ending": "在雷达峰缆车坠落事故中身亡",
    "endingPage": 302,
    "note": ""
   },
   {
    "id": "st-leizhicheng",
    "primaryName": "雷志成",
    "names": [
     { "text": "雷政委", "type": "尊称", "note": "" },
     { "text": "红岸基地政委", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "红岸基地政委",
    "firstPage": 180,
    "appearances": [180, 280, 296],
    "locations": [
     { "place": "红岸基地", "city": "大兴安岭", "country": "中国", "fromPage": 180, "toPage": 300, "note": "基地政治负责人" }
    ],
    "factions": [
     { "name": "红岸工程", "group": "军方", "fromPage": 180, "toPage": 300, "note": "政委" }
    ],
    "groups": ["红岸往事"],
    "experiences": [
     { "title": "独占红岸与三体世界的通讯成果", "fromPage": 180, "toPage": 290, "description": "发现叶文洁与宇宙的联系后试图把功劳与秘密都收归自己。" },
     { "title": "在雷达峰缆车事故中坠崖", "fromPage": 296, "toPage": 302, "description": "与杨卫宁一同被叶文洁锯断的缆绳送下悬崖。" }
    ],
    "ending": "在雷达峰缆车坠落事故中身亡",
    "endingPage": 302,
    "note": ""
   },
   {
    "id": "st-dingyi",
    "primaryName": "丁仪",
    "names": [
     { "text": "丁老", "type": "尊称", "note": "后世物理学界对他的敬称" },
     { "text": "丁仪博士", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "理论物理学家 / 从第一册活到末日之战的元老",
    "firstPage": 340,
    "appearances": [340, 400, 620, 740, 780],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 340, "toPage": 420, "note": "调查智子干扰对撞实验的机制" },
     { "place": "太空", "city": "木星轨道", "country": "太阳系", "fromPage": 620, "toPage": 790, "note": "登上水滴探测器进行接触考察" }
    ],
    "factions": [
     { "name": "科学边界", "group": "学术组织", "fromPage": 340, "toPage": 420, "note": "最早看穿智子封锁的学者" },
     { "name": "太阳系舰队", "group": "舰队国际", "fromPage": 620, "toPage": 790, "note": "随舰队考察水滴" }
    ],
    "groups": ["第一册主线", "末日之战"],
    "experiences": [
     { "title": "揭穿智子对高能物理的封锁", "fromPage": 70, "toPage": 200, "description": "指出人类的基础物理已被锁死，对撞机再也不会给出真相。" },
     { "title": "登上水滴并第一个察觉危险", "fromPage": 660, "toPage": 780, "description": "在末日之战前发出警告，但舰队国际没有听从。" }
    ],
    "ending": "在末日之战中被水滴汽化阵亡",
    "endingPage": 790,
    "note": ""
   },
   {
    "id": "st-changweisi",
    "primaryName": "常伟思",
    "names": [
     { "text": "常将军", "type": "尊称", "note": "" },
     { "text": "常司令", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "中国军方将领 / 太空军首任司令",
    "firstPage": 360,
    "appearances": [360, 430, 520, 640],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 360, "toPage": 460, "note": "主持作战中心调查 ETO" },
     { "place": "太空军总部", "city": "北京", "country": "中国", "fromPage": 500, "toPage": 660, "note": "组建太空军并挑选首批军官" }
    ],
    "factions": [
     { "name": "中国军方", "group": "军方", "fromPage": 360, "toPage": 500, "note": "作战中心负责人" },
     { "name": "太阳系舰队", "group": "舰队国际", "fromPage": 500, "toPage": 660, "note": "太空军首任司令" }
    ],
    "groups": ["第一册主线", "危机纪元"],
    "experiences": [
     { "title": "主持对 ETO 的联合调查", "fromPage": 84, "toPage": 260, "description": "把汪淼、史强拉入作战中心，一步步逼近科学边界与三体组织。" },
     { "title": "组建太空军并选中章北海", "fromPage": 490, "toPage": 520, "description": "在太空军成立之初把章北海调入高层，交给他未来的方向。" }
    ],
    "ending": "在危机纪元自然去世，未能看到黑暗战役",
    "endingPage": 700,
    "note": ""
   },
   {
    "id": "st-weicheng",
    "primaryName": "魏成",
    "names": [
     { "text": "魏博士", "type": "尊称", "note": "" },
     { "text": "三体游戏玩家", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "数学家 / 申玉菲的丈夫",
    "firstPage": 100,
    "appearances": [100, 220, 420],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 100, "toPage": 430, "note": "沉迷三体游戏的数学家" }
    ],
    "factions": [
     { "name": "科学边界", "group": "学术组织", "fromPage": 100, "toPage": 300, "note": "外围成员" },
     { "name": "地球三体组织", "group": "ETO", "fromPage": 300, "toPage": 430, "note": "被裹挟的家属" }
    ],
    "groups": ["第一册主线"],
    "experiences": [
     { "title": "以三体游戏为数学实验场", "fromPage": 100, "toPage": 240, "description": "试图用数学解释三体世界的乱纪元与恒纪元。" },
     { "title": "在古筝行动后被军方带走询问", "fromPage": 430, "toPage": 460, "description": "作为申玉菲的丈夫与 ETO 外围人员接受调查后淡出。" }
    ],
    "ending": "在古筝行动后被调查，此后下落不明",
    "endingPage": 470,
    "note": ""
   },
   {
    "id": "st-panhan",
    "primaryName": "潘寒",
    "names": [
     { "text": "潘寒", "type": "本名", "note": "" },
     { "text": "生物学家", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "生物学家 / ETO 降临派骨干",
    "firstPage": 250,
    "appearances": [250, 320, 500, 520],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 220, "toPage": 460, "note": "组织科学边界与 ETO 聚会" },
     { "place": "巴拿马运河", "city": "巴拿马", "country": "巴拿马", "fromPage": 470, "toPage": 520, "note": "随审判日号行动" }
    ],
    "factions": [
     { "name": "地球三体组织", "group": "ETO", "fromPage": 220, "toPage": 520, "note": "降临派骨干" },
     { "name": "降临派", "group": "ETO派系", "fromPage": 220, "toPage": 520, "note": "主张迎接三体文明接管地球" }
    ],
    "groups": ["第一册主线"],
    "experiences": [
     { "title": "处决申玉菲", "fromPage": 500, "toPage": 512, "description": "代表降临派清除拯救派的申玉菲，暴露 ETO 内部的派系厮杀。" },
     { "title": "在 ETO 内斗中被清除", "fromPage": 512, "toPage": 520, "description": "被伊文斯一方视为越权，旋即身死。" }
    ],
    "ending": "在 ETO 内斗中被处决",
    "endingPage": 520,
    "note": ""
   },
   {
    "id": "st-shenyufei",
    "primaryName": "申玉菲",
    "names": [
     { "text": "申博士", "type": "尊称", "note": "" },
     { "text": "拯救派圣女", "type": "别名", "note": "" }
    ],
    "gender": "女",
    "role": "物理学家 / ETO 拯救派核心",
    "firstPage": 260,
    "appearances": [260, 320, 480, 500],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 260, "toPage": 500, "note": "以科学边界活动为掩护发展拯救派" }
    ],
    "factions": [
     { "name": "地球三体组织", "group": "ETO", "fromPage": 260, "toPage": 500, "note": "拯救派核心" },
     { "name": "拯救派", "group": "ETO派系", "fromPage": 260, "toPage": 500, "note": "希望三体文明拯救人类" }
    ],
    "groups": ["第一册主线"],
    "experiences": [
     { "title": "把汪淼引入三体游戏", "fromPage": 260, "toPage": 300, "description": "以科学边界为入口向汪淼展示三体世界的真相。" },
     { "title": "被降临派处决", "fromPage": 496, "toPage": 510, "description": "在派系冲突中被潘寒处决，成为 ETO 分裂的牺牲品。" }
    ],
    "ending": "被降临派处决身亡",
    "endingPage": 510,
    "note": ""
   },
   {
    "id": "st-linyun",
    "primaryName": "林云",
    "names": [
     { "text": "林云", "type": "本名", "note": "" },
     { "text": "林上尉", "type": "尊称", "note": "" }
    ],
    "gender": "女",
    "role": "军方新概念武器研究者 / 宏原子核聚变的推动者",
    "firstPage": 138,
    "appearances": [138, 200, 290, 400],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 138, "toPage": 260, "note": "在作战中心推动球状闪电武器研究" },
     { "place": "核试验基地", "city": "戈壁", "country": "中国", "fromPage": 260, "toPage": 420, "note": "用宏原子核聚变进行终极试验" }
    ],
    "factions": [
     { "name": "作战中心", "group": "军方", "fromPage": 138, "toPage": 420, "note": "新概念武器项目负责人" }
    ],
    "groups": ["第一册支线"],
    "experiences": [
     { "title": "主持球状闪电与宏原子武器研究", "fromPage": 138, "toPage": 260, "description": "把量子物理的异常转化为可用的武器，成为军方最锋利的刀。" },
     { "title": "在宏聚变试验中随基地一同消失", "fromPage": 380, "toPage": 420, "description": "试验成功后她与整个基地化为量子态，成为第一册最沉重的伏笔。" }
    ],
    "ending": "在宏原子核聚变试验中与基地一同消失，化为量子态",
    "endingPage": 420,
    "note": ""
   },
   {
    "id": "st-qinshihuang",
    "primaryName": "秦始皇",
    "names": [
     { "text": "秦始皇", "type": "代号", "note": "三体游戏中的 ID" },
     { "text": "游戏中的始皇帝", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "三体游戏中的秦始皇 / 三体世界的虚拟化身",
    "firstPage": 270,
    "appearances": [270, 300, 320],
    "locations": [
     { "place": "三体游戏", "city": "虚拟空间", "country": "国际", "fromPage": 270, "toPage": 340, "note": "组织三千万人的计算机阵列推演恒纪元" }
    ],
    "factions": [
     { "name": "三体游戏", "group": "虚拟世界", "fromPage": 270, "toPage": 340, "note": "游戏内的统治者" }
    ],
    "groups": ["第一册主线"],
    "experiences": [
     { "title": "以三千万人组成人列计算机", "fromPage": 270, "toPage": 310, "description": "用人力阵列计算三体世界的运行规律，成为游戏中最震撼的一幕。" },
     { "title": "在恒纪元到来之际被脱水者抛弃", "fromPage": 310, "toPage": 340, "description": "游戏揭示了三体文明反复毁灭与重生的宿命。" }
    ],
    "ending": "作为游戏角色随服务器关闭而消失",
    "endingPage": 340,
    "note": ""
   },
   {
    "id": "st-yiwensi",
    "primaryName": "伊文斯",
    "names": [
     { "text": "麦克·伊文斯", "type": "别名", "note": "" },
     { "text": "降临派领袖", "type": "代号", "note": "" },
     { "text": "审判日号主人", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "亿万富翁 / ETO 降临派领袖",
    "firstPage": 320,
    "appearances": [320, 420, 470, 600],
    "locations": [
     { "place": "审判日号", "city": "海上", "country": "国际", "fromPage": 320, "toPage": 470, "note": "把三体资料与第二红岸基地搬上巨轮" },
     { "place": "巴拿马运河", "city": "巴拿马", "country": "巴拿马", "fromPage": 460, "toPage": 475, "note": "古筝行动中将审判日号切碎" }
    ],
    "factions": [
     { "name": "地球三体组织", "group": "ETO", "fromPage": 320, "toPage": 475, "note": "实际掌权者与出资人" },
     { "name": "降临派", "group": "ETO派系", "fromPage": 320, "toPage": 475, "note": "领袖，主张彻底倒向三体世界" }
    ],
    "groups": ["第一册主线", "古筝行动"],
    "experiences": [
     { "title": "以审判日号重建第二红岸基地", "fromPage": 320, "toPage": 460, "description": "把 ETO 的通讯与资料中心搬上巨轮，让组织无法被一网打尽。" },
     { "title": "在古筝行动中被飞刃杀死", "fromPage": 460, "toPage": 478, "description": "船体被纳米丝切碎，他与三体世界的通讯记录随之落入人类手中。" }
    ],
    "ending": "在古筝行动中被纳米飞刃杀死",
    "endingPage": 478,
    "note": ""
   },
   {
    "id": "st-luoji",
    "primaryName": "罗辑",
    "names": [
     { "text": "罗教授", "type": "尊称", "note": "" },
     { "text": "面壁者", "type": "代号", "note": "面壁计划第四位面壁者" },
     { "text": "执剑人", "type": "代号", "note": "黑暗森林威慑的执掌者" }
    ],
    "gender": "男",
    "role": "宇宙社会学创立者 / 面壁者 / 首任执剑人",
    "firstPage": 500,
    "appearances": [500, 700, 760, 900, 1040, 1200],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 500, "toPage": 900, "note": "从大学教授到面壁者" },
     { "place": "联合国总部", "city": "纽约", "country": "美国", "fromPage": 560, "toPage": 700, "note": "在面壁计划听证会上反复周旋" },
     { "place": "冥王星", "city": "冥王星", "country": "太阳系", "fromPage": 1180, "toPage": 1250, "note": "为地球文明建造墓碑" }
    ],
    "factions": [
     { "name": "面壁计划", "group": "PDC", "fromPage": 520, "toPage": 900, "note": "第四位面壁者" },
     { "name": "执剑人", "group": "威慑体系", "fromPage": 900, "toPage": 1040, "note": "独自掌握引力波广播开关" },
     { "name": "冥王星地球文明博物馆", "group": "人类文明", "fromPage": 1180, "toPage": 1250, "note": "最后的守墓人" }
    ],
    "groups": ["第二册主线", "黑暗森林威慑"],
    "experiences": [
     { "title": "在冰湖上悟出黑暗森林法则", "fromPage": 740, "toPage": 762, "description": "以宇宙社会学的两条公理推出黑暗森林状态，并向宇宙广播恒星坐标验证猜想。" },
     { "title": "成为首任执剑人", "fromPage": 890, "toPage": 905, "description": "以同归于尽的威慑握住两个文明的命运，换来半个世纪的和平。" },
     { "title": "卸任后被人类抛弃", "fromPage": 1030, "toPage": 1045, "description": "威慑失败后被审判与唾弃，随后转向为文明留下墓碑。" }
    ],
    "ending": "在冥王星守护地球文明博物馆，最终进入小宇宙",
    "endingPage": 1270,
    "note": ""
   },
   {
    "id": "st-zhangbeihai",
    "primaryName": "章北海",
    "names": [
     { "text": "政委", "type": "代号", "note": "太空军政治委员" },
     { "text": "星舰地球之父", "type": "代号", "note": "" }
    ],
    "gender": "男",
    "role": "太空军政委 / 星舰地球的缔造者",
    "firstPage": 520,
    "appearances": [520, 660, 700, 770, 830],
    "locations": [
     { "place": "太空军总部", "city": "北京", "country": "中国", "fromPage": 520, "toPage": 660, "note": "以必胜信念推动无工质飞船" },
     { "place": "木星", "city": "木星轨道", "country": "太阳系", "fromPage": 760, "toPage": 840, "note": "劫持自然选择号逃离太阳系" }
    ],
    "factions": [
     { "name": "太阳系舰队", "group": "舰队国际", "fromPage": 520, "toPage": 840, "note": "自然选择号执行舰长" },
     { "name": "星舰地球", "group": "逃亡舰队", "fromPage": 840, "toPage": 900, "note": "创立者与精神领袖" }
    ],
    "groups": ["第二册主线", "黑暗战役"],
    "experiences": [
     { "title": "以陨石子弹暗杀保守派元老", "fromPage": 640, "toPage": 670, "description": "为让无工质飞船获得支持，清除阻碍舰队发展的旧派人物。" },
     { "title": "劫持自然选择号逃离太阳系", "fromPage": 760, "toPage": 800, "description": "在水滴攻击前带领五艘战舰转向深空，为人类保住火种。" },
     { "title": "在黑暗战役中让出生命", "fromPage": 830, "toPage": 860, "description": "面对次声波氢弹的攻击选择不还手，把星舰地球交给褚岩等人。" }
    ],
    "ending": "在黑暗战役中被次声波氢弹杀死，成为星舰地球的精神父亲",
    "endingPage": 860,
    "note": ""
   },
   {
    "id": "st-hejinsheng",
    "primaryName": "希恩斯",
    "names": [
     { "text": "希恩斯", "type": "本名", "note": "" },
     { "text": "面壁者", "type": "代号", "note": "面壁计划第三位面壁者" }
    ],
    "gender": "男",
    "role": "脑科学家 / 面壁者 / 思想钢印发明者",
    "firstPage": 540,
    "appearances": [540, 680, 720, 880],
    "locations": [
     { "place": "联合国总部", "city": "纽约", "country": "美国", "fromPage": 540, "toPage": 600, "note": "接受面壁者身份" },
     { "place": "欧洲", "city": "日内瓦", "country": "国际", "fromPage": 600, "toPage": 880, "note": "建立脑科学实验室推广思想钢印" }
    ],
    "factions": [
     { "name": "面壁计划", "group": "PDC", "fromPage": 540, "toPage": 880, "note": "第三位面壁者" },
     { "name": "思想钢印", "group": "面壁计划产物", "fromPage": 680, "toPage": 900, "note": "以信念强迫症塑造人类信心" }
    ],
    "groups": ["第二册主线", "面壁计划"],
    "experiences": [
     { "title": "提出并推广思想钢印", "fromPage": 680, "toPage": 720, "description": "用技术手段直接给人类打上必胜的信念，彻底改变舰队国际的士气。" },
     { "title": "被妻子山杉惠子破壁", "fromPage": 860, "toPage": 884, "description": "破壁人正是他的妻子，思想钢印的真实目的随之暴露。" }
    ],
    "ending": "被破壁后身败名裂，在后世评价中成为争议人物",
    "endingPage": 884,
    "note": ""
   },
   {
    "id": "st-taile",
    "primaryName": "泰勒",
    "names": [
     { "text": "泰勒", "type": "本名", "note": "" },
     { "text": "面壁者", "type": "代号", "note": "面壁计划第一位面壁者" }
    ],
    "gender": "男",
    "role": "美国前国防部长 / 第一位面壁者",
    "firstPage": 560,
    "appearances": [560, 620, 640, 660],
    "locations": [
     { "place": "联合国总部", "city": "纽约", "country": "美国", "fromPage": 560, "toPage": 660, "note": "宣布面壁计划与量子舰队构想" }
    ],
    "factions": [
     { "name": "面壁计划", "group": "PDC", "fromPage": 560, "toPage": 660, "note": "第一位面壁者" }
    ],
    "groups": ["第二册主线", "面壁计划"],
    "experiences": [
     { "title": "构想量子幽灵舰队", "fromPage": 600, "toPage": 640, "description": "计划让被智子监视的人类以“已死之身”作战，方案残忍而注定失败。" },
     { "title": "被破壁后崩溃自尽", "fromPage": 640, "toPage": 665, "description": "面对破壁人的揭穿，在无法承受中结束生命。" }
    ],
    "ending": "被破壁后自杀",
    "endingPage": 665,
    "note": ""
   },
   {
    "id": "st-leidiyazi",
    "primaryName": "雷迪亚兹",
    "names": [
     { "text": "雷迪亚兹", "type": "本名", "note": "" },
     { "text": "面壁者", "type": "代号", "note": "面壁计划第二位面壁者" }
    ],
    "gender": "男",
    "role": "委内瑞拉总统 / 第二位面壁者",
    "firstPage": 580,
    "appearances": [580, 700, 730, 750],
    "locations": [
     { "place": "联合国总部", "city": "纽约", "country": "美国", "fromPage": 580, "toPage": 640, "note": "提出水星坠落计划" },
     { "place": "南美", "city": "加拉加斯", "country": "委内瑞拉", "fromPage": 700, "toPage": 760, "note": "回国后被本国人民处死" }
    ],
    "factions": [
     { "name": "面壁计划", "group": "PDC", "fromPage": 580, "toPage": 760, "note": "第二位面壁者" }
    ],
    "groups": ["第二册主线", "面壁计划"],
    "experiences": [
     { "title": "提出用恒星型氢弹引爆水星", "fromPage": 700, "toPage": 730, "description": "以毁灭太阳系为筹码的威慑构想，比黑暗森林更早也更疯狂。" },
     { "title": "被破壁后遭人民处死", "fromPage": 740, "toPage": 760, "description": "回到国内即被愤怒的人群用石块砸死。" }
    ],
    "ending": "被破壁后遭本国人民处死",
    "endingPage": 762,
    "note": ""
   },
   {
    "id": "st-yamazaki",
    "primaryName": "山杉惠子",
    "names": [
     { "text": "山杉惠子", "type": "本名", "note": "" },
     { "text": "破壁人", "type": "代号", "note": "希恩斯的破壁人" }
    ],
    "gender": "女",
    "role": "脑科学家 / 希恩斯的妻子兼破壁人",
    "firstPage": 620,
    "appearances": [620, 700, 760, 880],
    "locations": [
     { "place": "欧洲", "city": "日内瓦", "country": "国际", "fromPage": 620, "toPage": 880, "note": "在丈夫身边工作并等待破壁时机" }
    ],
    "factions": [
     { "name": "面壁计划", "group": "PDC", "fromPage": 620, "toPage": 880, "note": "希恩斯的技术助手与妻子" },
     { "name": "破壁人", "group": "三体世界代理人", "fromPage": 760, "toPage": 884, "note": "受三体世界指令揭穿面壁者" }
    ],
    "groups": ["第二册主线", "面壁计划"],
    "experiences": [
     { "title": "以妻子身份潜伏在希恩斯身边", "fromPage": 620, "toPage": 760, "description": "参与思想钢印的研发，同时记录丈夫的真实意图。" },
     { "title": "公开破壁希恩斯", "fromPage": 860, "toPage": 884, "description": "以破壁人身份揭穿思想钢印的真相，随后自尽。" }
    ],
    "ending": "完成破壁后自杀",
    "endingPage": 886,
    "note": ""
   },
   {
    "id": "st-sayi",
    "primaryName": "萨伊",
    "names": [
     { "text": "萨伊", "type": "本名", "note": "" },
     { "text": "秘书长", "type": "尊称", "note": "联合国与 PDC 的掌门人" }
    ],
    "gender": "女",
    "role": "联合国秘书长 / 面壁计划的推动者",
    "firstPage": 640,
    "appearances": [640, 700, 900, 1000],
    "locations": [
     { "place": "联合国总部", "city": "纽约", "country": "美国", "fromPage": 640, "toPage": 1040, "note": "主持面壁计划与威慑体系的交接" }
    ],
    "factions": [
     { "name": "联合国·PDC", "group": "行星防御理事会", "fromPage": 640, "toPage": 1040, "note": "秘书长" }
    ],
    "groups": ["第二册主线", "危机纪元"],
    "experiences": [
     { "title": "推动面壁计划", "fromPage": 640, "toPage": 700, "description": "在智子无法窥探人类思想的夹缝中给出面壁计划这一制度设计。" },
     { "title": "把星环公司托付给程心", "fromPage": 990, "toPage": 1010, "description": "在掩体纪元前夕选定程心接管星环公司，为后来的光速飞船埋下伏笔。" }
    ],
    "ending": "在广播纪元卸任后去世",
    "endingPage": 1060,
    "note": ""
   },
   {
    "id": "st-zhizi",
    "primaryName": "智子",
    "names": [
     { "text": "质子", "type": "别名", "note": "被二维展开改造的微观粒子" },
     { "text": "智子机器人", "type": "别名", "note": "三体世界在太阳系的拟人化化身" },
     { "text": "智子", "type": "本名", "note": "" }
    ],
    "gender": "女",
    "role": "三体世界制造的超级智能粒子 / 拟人化监视者",
    "firstPage": 700,
    "appearances": [700, 800, 950, 1100, 1180],
    "locations": [
     { "place": "智子", "city": "环绕地球", "country": "太阳系", "fromPage": 700, "toPage": 1300, "note": "同时监视全人类并实施技术封锁" },
     { "place": "澳大利亚", "city": "澳大利亚", "country": "澳大利亚", "fromPage": 1100, "toPage": 1160, "note": "以拟人形态执行人类迁徙令" }
    ],
    "factions": [
     { "name": "三体世界", "group": "三体文明", "fromPage": 700, "toPage": 1300, "note": "三体世界在地球的唯一代理" }
    ],
    "groups": ["第三册主线", "威慑纪元"],
    "experiences": [
     { "title": "封锁人类基础物理", "fromPage": 700, "toPage": 820, "description": "干扰高能加速器，让人类的物理学永远停在原地。" },
     { "title": "在威慑纪元以拟人形态出现在人类社会中", "fromPage": 900, "toPage": 1000, "description": "以武士刀与和服的女性形象示人，成为两个文明之间最怪异的纽带。" },
     { "title": "在广播纪元强制人类迁往澳大利亚", "fromPage": 1080, "toPage": 1160, "description": "执行三体舰队的迁徙令，让数十亿人自相残杀。" }
    ],
    "ending": "在三体世界被毁灭后失去主控，随智子工程残骸一同消失在宇宙中",
    "endingPage": 1280,
    "note": ""
   },
   {
    "id": "st-tianming",
    "primaryName": "云天明",
    "names": [
     { "text": "送星星的人", "type": "别名", "note": "送给程心一颗恒星" },
     { "text": "三体世界大脑", "type": "别名", "note": "大脑被送入三体舰队" },
     { "text": "童话讲述者", "type": "代号", "note": "以童话向人类传递情报" }
    ],
    "gender": "男",
    "role": "绝症病人 / 阶梯计划送入三体世界的人类大脑",
    "firstPage": 740,
    "appearances": [740, 820, 1080, 1130, 1200],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 740, "toPage": 820, "note": "绝症确诊后买下恒星 DX3906 送给程心" },
     { "place": "三体世界", "city": "半人马座", "country": "三体世界", "fromPage": 820, "toPage": 1200, "note": "大脑被三体舰队截获并克隆复活" },
     { "place": "647号宇宙", "city": "小宇宙", "country": "国际", "fromPage": 1240, "toPage": 1300, "note": "在童话尽头与程心重逢又永别" }
    ],
    "factions": [
     { "name": "阶梯计划", "group": "PDC", "fromPage": 740, "toPage": 830, "note": "被选中的大脑样本" },
     { "name": "三体世界", "group": "三体文明", "fromPage": 840, "toPage": 1200, "note": "成为三体世界的社会学者与讲述者" }
    ],
    "groups": ["第三册主线", "阶梯计划"],
    "experiences": [
     { "title": "买下 DX3906 送给程心", "fromPage": 780, "toPage": 820, "description": "以匿名的方式送给程心一颗恒星，成为她一生最重的礼物。" },
     { "title": "以童话传递三个关键情报", "fromPage": 1100, "toPage": 1160, "description": "在智子监视下用童话把光速飞船、黑域与二向箔的秘密交回人类。" }
    ],
    "ending": "在 647 号小宇宙中与程心擦肩而过，最终未能重逢",
    "endingPage": 1300,
    "note": ""
   },
   {
    "id": "st-chengxin",
    "primaryName": "程心",
    "names": [
     { "text": "执剑人", "type": "代号", "note": "黑暗森林威慑第二任执掌者" },
     { "text": "圣母", "type": "别名", "note": "后世对她的褒贬不一的称呼" },
     { "text": "程总", "type": "尊称", "note": "星环公司总裁" }
    ],
    "gender": "女",
    "role": "航天工程师 / 第二任执剑人与星环公司总裁",
    "firstPage": 900,
    "appearances": [900, 1000, 1040, 1160, 1240, 1300],
    "locations": [
     { "place": "联合国总部", "city": "纽约", "country": "美国", "fromPage": 900, "toPage": 950, "note": "从冬眠中苏醒并接过执剑人身份" },
     { "place": "星环城", "city": "木星轨道", "country": "太阳系", "fromPage": 1000, "toPage": 1180, "note": "主持光速飞船与曲率驱动研究" },
     { "place": "647号宇宙", "city": "小宇宙", "country": "国际", "fromPage": 1240, "toPage": 1300, "note": "在小宇宙中等待宇宙的重生" }
    ],
    "factions": [
     { "name": "执剑人", "group": "威慑体系", "fromPage": 900, "toPage": 990, "note": "第二任执剑人，威慑失败" },
     { "name": "星环城", "group": "光速飞船派", "fromPage": 1000, "toPage": 1200, "note": "总裁，推动曲率驱动飞船" },
     { "name": "小宇宙", "group": "647号宇宙", "fromPage": 1240, "toPage": 1300, "note": "幸存的最后人类之一" }
    ],
    "groups": ["第三册主线", "威慑纪元"],
    "experiences": [
     { "title": "接过执剑人的引力波开关", "fromPage": 900, "toPage": 940, "description": "在罗辑卸任的瞬间成为执剑人，却因不忍同归于尽而在十分钟内失去威慑。" },
     { "title": "主持光速飞船与掩体计划", "fromPage": 1000, "toPage": 1160, "description": "在星环城与维德理念冲突，错失曲率驱动飞船的关键窗口。" },
     { "title": "在冥王星之后进入 647 号小宇宙", "fromPage": 1200, "toPage": 1300, "description": "与关一帆一同在小宇宙中见证宇宙的重启。" }
    ],
    "ending": "进入 647 号小宇宙，成为宇宙重生前的最后人类之一",
    "endingPage": 1300,
    "note": ""
   },
   {
    "id": "st-weide",
    "primaryName": "维德",
    "names": [
     { "text": "托马斯·维德", "type": "别名", "note": "" },
     { "text": "局长", "type": "尊称", "note": "情报局局长" }
    ],
    "gender": "男",
    "role": "情报局局长 / 星环城与光速飞船的推动者",
    "firstPage": 920,
    "appearances": [920, 1000, 1120, 1160, 1180],
    "locations": [
     { "place": "联合国总部", "city": "纽约", "country": "美国", "fromPage": 920, "toPage": 1000, "note": "作为情报局长主导对三体的情报战" },
     { "place": "星环城", "city": "木星轨道", "country": "太阳系", "fromPage": 1000, "toPage": 1180, "note": "以极端手段推进光速飞船" }
    ],
    "factions": [
     { "name": "情报局", "group": "PDC", "fromPage": 920, "toPage": 1000, "note": "局长" },
     { "name": "星环城", "group": "光速飞船派", "fromPage": 1000, "toPage": 1180, "note": "武力夺权后被判死刑" }
    ],
    "groups": ["第三册主线", "掩体纪元"],
    "experiences": [
     { "title": "提出并坚持光速飞船路线", "fromPage": 1000, "toPage": 1120, "description": "认定只有曲率驱动飞船才能让人类逃离太阳系，不惜与全世界为敌。" },
     { "title": "被程心以人性之名击败", "fromPage": 1120, "toPage": 1180, "description": "在星环城交出武器后被判处死刑，临刑前留下“失去人性，失去很多；失去兽性，失去一切”。" }
    ],
    "ending": "被处决，光速飞船路线也随之被放弃",
    "endingPage": 1185,
    "note": ""
   },
   {
    "id": "st-aiaa",
    "primaryName": "艾AA",
    "names": [
     { "text": "艾AA", "type": "本名", "note": "" },
     { "text": "星环公司助理", "type": "别名", "note": "" }
    ],
    "gender": "女",
    "role": "程心的助理与同伴 / 星环公司执行者",
    "firstPage": 980,
    "appearances": [980, 1060, 1160, 1240],
    "locations": [
     { "place": "星环城", "city": "木星轨道", "country": "太阳系", "fromPage": 950, "toPage": 1200, "note": "替程心处理公司与飞船事务" },
     { "place": "冥王星", "city": "冥王星", "country": "太阳系", "fromPage": 1200, "toPage": 1250, "note": "随程心为文明留下墓碑" }
    ],
    "factions": [
     { "name": "星环城", "group": "光速飞船派", "fromPage": 950, "toPage": 1200, "note": "程心的执行者" },
     { "name": "小宇宙", "group": "647号宇宙", "fromPage": 1240, "toPage": 1300, "note": "最后人类之一" }
    ],
    "groups": ["第三册主线", "掩体纪元"],
    "experiences": [
     { "title": "协助程心管理星环公司", "fromPage": 950, "toPage": 1120, "description": "在光速飞船与掩体计划的博弈中替程心承担现实的重量。" },
     { "title": "随程心进入小宇宙", "fromPage": 1200, "toPage": 1300, "description": "在宇宙的尽头成为少数被记住的人类之一。" }
    ],
    "ending": "随程心进入 647 号小宇宙，成为最后人类之一",
    "endingPage": 1300,
    "note": ""
   },
   {
    "id": "st-guanyifan",
    "primaryName": "关一帆",
    "names": [
     { "text": "关博士", "type": "尊称", "note": "" },
     { "text": "星舰地球学者", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "星舰地球学者 / 四维空间探索者",
    "firstPage": 1000,
    "appearances": [1000, 1080, 1200, 1240],
    "locations": [
     { "place": "蓝星", "city": "蓝星", "country": "太阳系", "fromPage": 1000, "toPage": 1100, "note": "在四维空间碎片中与程心相遇" },
     { "place": "647号宇宙", "city": "小宇宙", "country": "国际", "fromPage": 1240, "toPage": 1300, "note": "与程心在小宇宙中等待宇宙重生" }
    ],
    "factions": [
     { "name": "星舰地球", "group": "逃亡舰队", "fromPage": 990, "toPage": 1200, "note": "学者与探索者" }
    ],
    "groups": ["第三册主线", "星舰地球"],
    "experiences": [
     { "title": "在四维空间碎片中与程心相遇", "fromPage": 1040, "toPage": 1100, "description": "在蓝星附近的四维泡里看到宇宙的另一重面貌，并救下程心。" },
     { "title": "与程心一同进入小宇宙", "fromPage": 1200, "toPage": 1300, "description": "成为程心漫长余生中最后的同伴。" }
    ],
    "ending": "与程心一同留在 647 号小宇宙，走向宇宙的重生",
    "endingPage": 1300,
    "note": ""
   },
   {
    "id": "st-dongfangyanxu",
    "primaryName": "东方延绪",
    "names": [
     { "text": "东方舰长", "type": "尊称", "note": "" },
     { "text": "旗舰舰长", "type": "别名", "note": "" }
    ],
    "gender": "女",
    "role": "太阳系舰队旗舰舰长 / 章北海的继任者",
    "firstPage": 660,
    "appearances": [660, 700, 780, 840],
    "locations": [
     { "place": "太空", "city": "木星轨道", "country": "太阳系", "fromPage": 660, "toPage": 860, "note": "指挥旗舰参与末日之战与黑暗战役" }
    ],
    "factions": [
     { "name": "太阳系舰队", "group": "舰队国际", "fromPage": 660, "toPage": 860, "note": "旗舰舰长" },
     { "name": "星舰地球", "group": "逃亡舰队", "fromPage": 840, "toPage": 880, "note": "黑暗战役中的一方" }
    ],
    "groups": ["第二册主线", "黑暗战役"],
    "experiences": [
     { "title": "在末日之战中目睹舰队全军覆没", "fromPage": 700, "toPage": 800, "description": "两千艘战舰被一枚水滴摧毁，她带着旗舰幸存并随章北海转向深空。" },
     { "title": "在黑暗战役中被清除", "fromPage": 840, "toPage": 880, "description": "作为星舰地球的一支力量，最终倒在人类自己的猜疑链下。" }
    ],
    "ending": "在黑暗战役中随旗舰被摧毁身亡",
    "endingPage": 880,
    "note": ""
   },
   {
    "id": "st-chuyan",
    "primaryName": "褚岩",
    "names": [
     { "text": "褚岩", "type": "本名", "note": "" },
     { "text": "星舰地球领袖", "type": "代号", "note": "" }
    ],
    "gender": "男",
    "role": "星舰地球的领袖 / 蓝色空间号政治委员",
    "firstPage": 720,
    "appearances": [720, 780, 840, 900, 1000],
    "locations": [
     { "place": "太空", "city": "木星轨道", "country": "太阳系", "fromPage": 720, "toPage": 860, "note": "参与末日之战与黑暗战役" },
     { "place": "蓝星", "city": "蓝星", "country": "太阳系", "fromPage": 860, "toPage": 1100, "note": "带领星舰地球在深空中生存" }
    ],
    "factions": [
     { "name": "太阳系舰队", "group": "舰队国际", "fromPage": 720, "toPage": 840, "note": "蓝色空间号政委" },
     { "name": "星舰地球", "group": "逃亡舰队", "fromPage": 840, "toPage": 1200, "note": "黑暗战役的胜者与领袖" }
    ],
    "groups": ["第二册主线", "星舰地球"],
    "experiences": [
     { "title": "在末日之战中随章北海逃离太阳系", "fromPage": 780, "toPage": 840, "description": "成为少数逃出太阳系的人类之一。" },
     { "title": "在黑暗战役中击败其他战舰", "fromPage": 840, "toPage": 900, "description": "以次声波氢弹清除对手，为星舰地球赢得燃料与物资。" }
    ],
    "ending": "率星舰地球在深空中延续人类文明",
    "endingPage": 1200,
    "note": ""
   },
   {
    "id": "st-zhuangyan",
    "primaryName": "庄颜",
    "names": [
     { "text": "庄颜", "type": "本名", "note": "" },
     { "text": "罗辑的妻子", "type": "别名", "note": "" }
    ],
    "gender": "女",
    "role": "罗辑的妻子 / 面壁者岁月中的家庭",
    "firstPage": 1110,
    "appearances": [1110, 1130, 1160],
    "locations": [
     { "place": "欧洲", "city": "日内瓦", "country": "国际", "fromPage": 1110, "toPage": 1140, "note": "与罗辑在湖边度过短暂的平静岁月" },
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 1140, "toPage": 1160, "note": "在冬眠前与罗辑和孩子分离" }
    ],
    "factions": [
     { "name": "面壁计划", "group": "PDC", "fromPage": 1100, "toPage": 1160, "note": "面壁者家属" }
    ],
    "groups": ["第二册主线", "面壁计划"],
    "experiences": [
     { "title": "成为罗辑的家人", "fromPage": 1100, "toPage": 1130, "description": "她与女儿是罗辑作为面壁者唯一被允许拥有的私人生活。" },
     { "title": "在威慑建立前后被迫与罗辑分离", "fromPage": 1130, "toPage": 1160, "description": "随冬眠计划转移，成为罗辑此后漫长岁月里的牵挂。" }
    ],
    "ending": "在冬眠中与罗辑永久分离，此后未再出场",
    "endingPage": 1160,
    "note": ""
   },
   {
    "id": "st-feiziluo",
    "primaryName": "斐兹罗",
    "names": [
     { "text": "斐兹罗", "type": "本名", "note": "" },
     { "text": "观测员", "type": "代号", "note": "舰队国际观测部负责人" }
    ],
    "gender": "男",
    "role": "舰队国际观测部负责人 / 三体舰队的观测者",
    "firstPage": 940,
    "appearances": [940, 970, 1000, 1010],
    "locations": [
     { "place": "太空观测站", "city": "木星轨道", "country": "太阳系", "fromPage": 930, "toPage": 1060, "note": "持续观测三体舰队的航向与减速情况" }
    ],
    "factions": [
     { "name": "太阳系舰队", "group": "舰队国际", "fromPage": 930, "toPage": 1060, "note": "观测部负责人" }
    ],
    "groups": ["第二册主线", "危机纪元"],
    "experiences": [
     { "title": "发现三体舰队派出探测器", "fromPage": 640, "toPage": 700, "description": "水滴的出现让人类误以为那是和平的礼物。" },
     { "title": "在末日之战中发出最后的观测报告", "fromPage": 740, "toPage": 790, "description": "他亲眼看着两千艘战舰被一枚水滴摧毁。" }
    ],
    "ending": "在末日之战后随舰队国际一同崩溃",
    "endingPage": 800,
    "note": ""
   },
   {
    "id": "st-kante",
    "primaryName": "坎特",
    "names": [
     { "text": "坎特", "type": "本名", "note": "" },
     { "text": "面壁计划联络官", "type": "别名", "note": "" }
    ],
    "gender": "男",
    "role": "PDC 派往罗辑身边的面壁计划联络官",
    "firstPage": 600,
    "appearances": [600, 700, 900, 1000],
    "locations": [
     { "place": "联合国总部", "city": "纽约", "country": "美国", "fromPage": 600, "toPage": 700, "note": "向罗辑下达面壁者指令" },
     { "place": "欧洲", "city": "日内瓦", "country": "国际", "fromPage": 700, "toPage": 1040, "note": "在面壁计划瓦解后转入 PDC 常规事务" }
    ],
    "factions": [
     { "name": "联合国·PDC", "group": "行星防御理事会", "fromPage": 600, "toPage": 1040, "note": "面壁计划联络官" }
    ],
    "groups": ["第二册主线", "面壁计划"],
    "experiences": [
     { "title": "把面壁者身份强加给罗辑", "fromPage": 600, "toPage": 660, "description": "以制度之名让一个普通人承受整个文明的重量。" },
     { "title": "在威慑纪元处理执剑人交接事务", "fromPage": 900, "toPage": 1040, "description": "见证了罗辑的卸任与程心的接任。" }
    ],
    "ending": "在广播纪元的混乱中卸任，退出历史舞台",
    "endingPage": 1060,
    "note": ""
   },
   {
    "id": "st-linge",
    "primaryName": "艾伯特·林格",
    "names": [
     { "text": "林格", "type": "尊称", "note": "" },
     { "text": "艾伯特·林格", "type": "本名", "note": "" }
    ],
    "gender": "男",
    "role": "环日加速器总设计师 / 掩体计划的技术骨干",
    "firstPage": 1010,
    "appearances": [1010, 1080, 1140],
    "locations": [
     { "place": "星环城", "city": "木星轨道", "country": "太阳系", "fromPage": 1010, "toPage": 1150, "note": "主持环日加速器与光速飞船工程论证" }
    ],
    "factions": [
     { "name": "星环城", "group": "光速飞船派", "fromPage": 1010, "toPage": 1150, "note": "总设计师" }
    ],
    "groups": ["第三册主线", "掩体纪元"],
    "experiences": [
     { "title": "设计环日加速器", "fromPage": 990, "toPage": 1080, "description": "把加速器围绕太阳建造，试图绕过智子封锁获取高能物理数据。" },
     { "title": "在光速飞船与掩体计划之间摇摆", "fromPage": 1080, "toPage": 1140, "description": "技术上的最优解最终败给了政治上的妥协。" }
    ],
    "ending": "在掩体纪元的工程妥协中耗尽一生，随太阳系一同被二维化",
    "endingPage": 1160,
    "note": ""
   },
   {
    "id": "st-santiyuanshou",
    "primaryName": "三体世界元首",
    "names": [
     { "text": "元首", "type": "尊称", "note": "" }
    ],
    "gender": "未知",
    "role": "三体世界的最高统治者",
    "firstPage": 960,
    "appearances": [960, 1000, 1100, 1210],
    "locations": [
     { "place": "三体世界", "city": "半人马座", "country": "三体世界", "fromPage": 960, "toPage": 1200, "note": "在三体世界的乱纪元中执掌文明航向" }
    ],
    "factions": [
     { "name": "三体世界", "group": "三体文明", "fromPage": 960, "toPage": 1200, "note": "元首" }
    ],
    "groups": ["第二册主线", "三体世界"],
    "experiences": [
     { "title": "在威慑纪元与人类周旋", "fromPage": 960, "toPage": 1000, "description": "在黑暗森林威慑下让三体世界学会了欺骗，也学会了与人类共存。" },
     { "title": "母星被光粒摧毁", "fromPage": 1180, "toPage": 1210, "description": "三体世界被黑暗森林打击毁灭，文明的种子随舰队与云天明散入宇宙。" }
    ],
    "ending": "母星被光粒摧毁，随三体文明残部消失在宇宙中",
    "endingPage": 1210,
    "note": ""
   },
   {
    "id": "st-1379",
    "primaryName": "监听员1379号",
    "names": [
     { "text": "1379号", "type": "代号", "note": "" },
     { "text": "不要回答的发出者", "type": "别名", "note": "" }
    ],
    "gender": "未知",
    "role": "三体世界监听站的监听员",
    "firstPage": 960,
    "appearances": [960, 1000],
    "locations": [
     { "place": "三体世界", "city": "半人马座", "country": "三体世界", "fromPage": 960, "toPage": 1000, "note": "在监听站收到来自地球的第一条信息" }
    ],
    "factions": [
     { "name": "三体世界", "group": "三体文明", "fromPage": 960, "toPage": 1000, "note": "监听员" }
    ],
    "groups": ["三体世界"],
    "experiences": [
     { "title": "发出“不要回答”的警告", "fromPage": 960, "toPage": 970, "description": "出于对另一个文明的善意警告地球不要暴露坐标，却被叶文洁的回答推翻。" },
     { "title": "因失职被三体世界处理", "fromPage": 980, "toPage": 1000, "description": "在元首的审判中结束了自己的存在，他的警告成为人类命运的起点。" }
    ],
    "ending": "因私发警告被三体世界处决",
    "endingPage": 1000,
    "note": ""
   },
   {
    "id": "st-shuiqiang",
    "primaryName": "史强",
    "names": [
     { "text": "大史", "type": "别名", "note": "" },
     { "text": "史队", "type": "尊称", "note": "" },
     { "text": "史强", "type": "本名", "note": "" }
    ],
    "gender": "男",
    "role": "警官 / 汪淼与罗辑的搭档与守护者",
    "firstPage": 30,
    "appearances": [30, 100, 250, 420, 500, 620, 900],
    "locations": [
     { "place": "北京", "city": "北京", "country": "中国", "fromPage": 30, "toPage": 500, "note": "协助军方调查科学家自杀与 ETO" },
     { "place": "巴拿马运河", "city": "巴拿马", "country": "巴拿马", "fromPage": 440, "toPage": 470, "note": "古筝行动的现场指挥" },
     { "place": "联合国总部", "city": "纽约", "country": "美国", "fromPage": 500, "toPage": 900, "note": "在面壁计划期间保护罗辑" }
    ],
    "factions": [
     { "name": "作战中心", "group": "军方", "fromPage": 30, "toPage": 470, "note": "借调警官" },
     { "name": "面壁计划", "group": "PDC", "fromPage": 500, "toPage": 900, "note": "罗辑的护卫负责人" }
    ],
    "groups": ["第一册主线", "第二册主线"],
    "experiences": [
     { "title": "成为汪淼的搭档", "fromPage": 30, "toPage": 250, "description": "用街头智慧与不信邪的直觉带着汪淼穿过科学边界与三体游戏的迷雾。" },
     { "title": "在古筝行动中指挥现场", "fromPage": 440, "toPage": 470, "description": "让飞刃在运河两岸之间张开，完成对审判日号的一击。" },
     { "title": "守护罗辑度过面壁者岁月", "fromPage": 500, "toPage": 900, "description": "在罗辑最孤立无援时始终站在他身边，直到自己衰老患病。" }
    ],
    "ending": "在威慑纪元因衰老与病痛去世，被罗辑长久怀念",
    "endingPage": 905,
    "note": ""
   },
   {
    "id": "st-jianchuan",
    "primaryName": "三体舰队指挥官",
    "names": [
     { "text": "舰队指挥官", "type": "尊称", "note": "" },
     { "text": "第一舰队司令", "type": "别名", "note": "" }
    ],
    "gender": "未知",
    "role": "三体第一舰队指挥官",
    "firstPage": 1260,
    "appearances": [1260, 1290],
    "locations": [
     { "place": "三体舰队", "city": "深空", "country": "三体世界", "fromPage": 1260, "toPage": 1300, "note": "在母星毁灭后带领舰队寻找新家园" }
    ],
    "factions": [
     { "name": "三体舰队", "group": "三体文明", "fromPage": 1260, "toPage": 1300, "note": "指挥官" }
    ],
    "groups": ["三体世界"],
    "experiences": [
     { "title": "指挥舰队穿越黑暗森林", "fromPage": 1260, "toPage": 1290, "description": "在母星被摧毁后带领残余舰队继续远征，成为三体文明最后的火种。" },
     { "title": "向地球方向保持静默", "fromPage": 1290, "toPage": 1300, "description": "在黑暗森林的法则下隐藏航迹，等待新的家园。" }
    ],
    "ending": "率三体舰队残部消失在宇宙深处",
    "endingPage": 1300,
    "note": ""
   }
  ],
  "relations": [
   { "id": "st-r1", "from": "st-yewenjie", "to": "st-yangweining", "type": "夫妻", "category": "婚姻", "sincePage": 120, "untilPage": 302, "directed": false, "note": "在红岸基地结为夫妻，止于杨卫宁在雷达峰坠崖身亡" },
   { "id": "st-r2", "from": "st-yewenjie", "to": "st-yangdong", "type": "母女", "category": "亲属", "sincePage": 38, "untilPage": null, "directed": false, "note": "杨冬是叶文洁之女，她的死是叶文洁余生无法摆脱的创伤" },
   { "id": "st-r3", "from": "st-yewenjie", "to": "st-yiwensi", "type": "同盟 / 精神传承", "category": "同盟", "sincePage": 320, "untilPage": 478, "directed": false, "note": "伊文斯出资把 ETO 发展为全球组织，止于古筝行动" },
   { "id": "st-r4", "from": "st-yewenjie", "to": "st-wangmiao", "type": "引导者 / 被选中者", "category": "师友", "sincePage": 260, "untilPage": null, "directed": true, "note": "以科学边界与三体游戏间接引导汪淼理解真相，延续到叶文洁退场" },
   { "id": "st-r5", "from": "st-yewenjie", "to": "st-luoji", "type": "师承 / 受托", "category": "师友", "sincePage": 500, "untilPage": null, "directed": true, "note": "宇宙社会学两条公理的受托关系，罗辑此后一生都在实践它" },
   { "id": "st-r6", "from": "st-yewenjie", "to": "st-shenyufei", "type": "同一组织", "category": "同盟", "sincePage": 320, "untilPage": 520, "directed": false, "note": "ETO 统帅与拯救派核心，止于拯救派被清除" },
   { "id": "st-r7", "from": "st-yewenjie", "to": "st-panhan", "type": "上下级", "category": "上下级", "sincePage": 320, "untilPage": null, "directed": true, "note": "ETO 统帅与降临派骨干的统属关系，无明确终止" },
   { "id": "st-r8", "from": "st-wangmiao", "to": "st-shuiqiang", "type": "搭档 / 同盟", "category": "同盟", "sincePage": 260, "untilPage": null, "directed": false, "note": "从科学家自杀案到古筝行动的搭档，此后仍是朋友" },
   { "id": "st-r9", "from": "st-wangmiao", "to": "st-dingyi", "type": "同行 / 师友", "category": "师友", "sincePage": 340, "untilPage": null, "directed": false, "note": "同为物理学家，长期共同面对智子封锁" },
   { "id": "st-r10", "from": "st-dingyi", "to": "st-yangdong", "type": "恋人", "category": "情感", "sincePage": 340, "untilPage": null, "directed": false, "note": "丁仪与杨冬的恋人关系，因杨冬自杀而成为他此后一生的创伤" },
   { "id": "st-r11", "from": "st-changweisi", "to": "st-zhangbeihai", "type": "上下级", "category": "上下级", "sincePage": 520, "untilPage": null, "directed": true, "note": "太空军司令与政治委员，无明确终止" },
   { "id": "st-r12", "from": "st-shenyufei", "to": "st-weicheng", "type": "夫妻", "category": "婚姻", "sincePage": 260, "untilPage": null, "directed": false, "note": "魏成的数学才能被卷入 ETO 事务，关系本身无明确终止" },
   { "id": "st-r13", "from": "st-panhan", "to": "st-shenyufei", "type": "敌对 / 处决", "category": "敌对", "sincePage": 480, "untilPage": 510, "directed": true, "note": "降临派处决拯救派核心，一次性事件" },
   { "id": "st-r14", "from": "st-wangmiao", "to": "st-changweisi", "type": "配合 / 上下级", "category": "上下级", "sincePage": 360, "untilPage": null, "directed": true, "note": "汪淼受常伟思之邀加入作战中心，长期合作关系" },
   { "id": "st-r15", "from": "st-panhan", "to": "st-yiwensi", "type": "上下级", "category": "上下级", "sincePage": 320, "untilPage": 520, "directed": true, "note": "降临派领袖与骨干，止于 ETO 内斗清算" },
   { "id": "st-r16", "from": "st-weicheng", "to": "st-yiwensi", "type": "被裹挟者 / 组织", "category": "其他", "sincePage": 320, "untilPage": 478, "directed": true, "note": "魏成因妻子申玉菲被卷入 ETO 的资料与通讯事务" },
   { "id": "st-r17", "from": "st-santiyuanshou", "to": "st-1379", "type": "上下级 / 审判", "category": "上下级", "sincePage": 960, "untilPage": 1000, "directed": true, "note": "1379 号因私发“不要回答”被元首下令处理" },
   { "id": "st-r18", "from": "st-luoji", "to": "st-chuyan", "type": "跨纪元影响 / 托付", "category": "其他", "sincePage": 1000, "untilPage": null, "directed": true, "note": "罗辑为星舰地球留下宇宙社会学的最后结论，思想长期延续" },
   { "id": "st-r19", "from": "st-luoji", "to": "st-zhuangyan", "type": "夫妻", "category": "情感", "sincePage": 1110, "untilPage": 1160, "directed": false, "note": "庄颜冬眠后与罗辑永久分离" },
   { "id": "st-r20", "from": "st-luoji", "to": "st-shuiqiang", "type": "同盟 / 守护", "category": "同盟", "sincePage": 500, "untilPage": null, "directed": false, "note": "史强保护罗辑走过最危险的岁月，守护贯穿罗辑一生" },
   { "id": "st-r21", "from": "st-luoji", "to": "st-santiyuanshou", "type": "威慑 / 敌对", "category": "敌对", "sincePage": 960, "untilPage": null, "directed": true, "note": "以引力波广播开关与三体世界对峙，长期威慑关系" },
   { "id": "st-r22", "from": "st-wangmiao", "to": "st-shenyufei", "type": "引路 / 试探", "category": "其他", "sincePage": 260, "untilPage": null, "directed": true, "note": "申玉菲把汪淼引入三体游戏，其后长期保持联系" },
   { "id": "st-r23", "from": "st-luoji", "to": "st-zhizi", "type": "监视 / 敌对", "category": "敌对", "sincePage": 700, "untilPage": null, "directed": true, "note": "罗辑的每一个计划都在智子注视之下，敌对贯穿始终" },
   { "id": "st-r24", "from": "st-luoji", "to": "st-hejinsheng", "type": "同为面壁者 / 同僚", "category": "其他", "sincePage": 920, "untilPage": null, "directed": false, "note": "四人同处面壁计划之下，彼此孤立又互相牵制；希恩斯的历史长期影响后世" },
   { "id": "st-r25", "from": "st-luoji", "to": "st-chengxin", "type": "执剑人交接", "category": "上下级", "sincePage": 900, "untilPage": 940, "directed": true, "note": "把威慑开关交给程心，一次性交接事件" },
   { "id": "st-r26", "from": "st-zhangbeihai", "to": "st-dongfangyanxu", "type": "上下级 / 传承", "category": "上下级", "sincePage": 660, "untilPage": null, "directed": true, "note": "执行舰长与舰队旗舰舰长，传承在章北海死后由东方延绪延续" },
   { "id": "st-r27", "from": "st-zhangbeihai", "to": "st-chuyan", "type": "同盟 / 星舰地球", "category": "同盟", "sincePage": 840, "untilPage": null, "directed": false, "note": "章北海把星舰地球的路线交给褚岩，长期延续" },
   { "id": "st-r28", "from": "st-changweisi", "to": "st-dingyi", "type": "征召 / 合作", "category": "上下级", "sincePage": 650, "untilPage": null, "directed": true, "note": "常伟思请丁仪参与舰队考察，合作延续" },
   { "id": "st-r29", "from": "st-dongfangyanxu", "to": "st-chuyan", "type": "同僚 / 敌对", "category": "敌对", "sincePage": 840, "untilPage": 880, "directed": false, "note": "黑暗战役中分属不同战舰，互相开火" },
   { "id": "st-r30", "from": "st-hejinsheng", "to": "st-yamazaki", "type": "夫妻 / 破壁", "category": "婚姻", "sincePage": 620, "untilPage": null, "directed": false, "note": "妻子正是被指派来揭穿他的破壁人，关系本身无明确终止" },
   { "id": "st-r31", "from": "st-yamazaki", "to": "st-santiyuanshou", "type": "代理人 / 主使", "category": "其他", "sincePage": 960, "untilPage": 1000, "directed": true, "note": "破壁人受三体世界指令行动，止于元首的清算" },
   { "id": "st-r32", "from": "st-taile", "to": "st-leidiyazi", "type": "同为面壁者 / 竞争", "category": "其他", "sincePage": 580, "untilPage": null, "directed": false, "note": "四位面壁者各自为战，彼此提防，竞争贯穿面壁计划" },
   { "id": "st-r33", "from": "st-taile", "to": "st-santiyuanshou", "type": "敌对", "category": "敌对", "sincePage": 960, "untilPage": null, "directed": true, "note": "面壁计划的矛头直指三体世界，长期敌对" },
   { "id": "st-r34", "from": "st-leidiyazi", "to": "st-chengxin", "type": "威慑理念传承", "category": "其他", "sincePage": 900, "untilPage": null, "directed": true, "note": "以毁灭相要挟的威慑逻辑被后世反复重演，长期影响" },
   { "id": "st-r35", "from": "st-sayi", "to": "st-chengxin", "type": "任命 / 托付", "category": "上下级", "sincePage": 990, "untilPage": null, "directed": true, "note": "萨伊把星环公司交给程心，托付延续到程心退场" },
   { "id": "st-r36", "from": "st-santiyuanshou", "to": "st-zhizi", "type": "主使 / 造物", "category": "上下级", "sincePage": 960, "untilPage": null, "directed": true, "note": "三体世界派出智子封锁人类，长期执行" },
   { "id": "st-r37", "from": "st-zhizi", "to": "st-yangdong", "type": "导致死亡", "category": "敌对", "sincePage": 960, "untilPage": 1000, "directed": true, "note": "智子扰乱实验，使杨冬的世界崩塌" },
   { "id": "st-r38", "from": "st-zhizi", "to": "st-wangmiao", "type": "施加倒计时", "category": "敌对", "sincePage": 960, "untilPage": 1000, "directed": true, "note": "在汪淼视野中植入倒计时作为威慑" },
   { "id": "st-r39", "from": "st-zhizi", "to": "st-chengxin", "type": "监视 / 敌对", "category": "敌对", "sincePage": 900, "untilPage": null, "directed": true, "note": "智子始终在程心身边注视，长期敌对" },
   { "id": "st-r40", "from": "st-tianming", "to": "st-chengxin", "type": "恋人 / 赠星", "category": "情感", "sincePage": 900, "untilPage": null, "directed": true, "note": "云天明送给程心一颗恒星，情感延续到小宇宙" },
   { "id": "st-r41", "from": "st-tianming", "to": "st-santiyuanshou", "type": "被俘 / 转化", "category": "其他", "sincePage": 960, "untilPage": null, "directed": false, "note": "大脑被截获并复活，成为三体世界长期的讲述者" },
   { "id": "st-r42", "from": "st-tianming", "to": "st-zhizi", "type": "敌对 / 同行", "category": "敌对", "sincePage": 1080, "untilPage": null, "directed": false, "note": "云天明在智子监视下用童话传递情报，敌对长期存在" },
   { "id": "st-r43", "from": "st-chengxin", "to": "st-aiaa", "type": "同伴", "category": "同盟", "sincePage": 980, "untilPage": null, "directed": false, "note": "艾AA始终是程心最可靠的执行者与朋友，延续到全书结束" },
   { "id": "st-r44", "from": "st-chengxin", "to": "st-guanyifan", "type": "情感 / 结局", "category": "情感", "sincePage": 1040, "untilPage": null, "directed": false, "note": "在小宇宙中相伴等待宇宙重生" },
   { "id": "st-r45", "from": "st-chengxin", "to": "st-weide", "type": "敌对 / 理念冲突", "category": "敌对", "sincePage": 1120, "untilPage": 1185, "directed": false, "note": "星环城与光速飞船路线之争，止于维德被处决" },
   { "id": "st-r46", "from": "st-weide", "to": "st-luoji", "type": "同为执剑路线 / 上下级", "category": "上下级", "sincePage": 920, "untilPage": 1185, "directed": true, "note": "维德奉罗辑为威慑与进取的标杆，止于维德被处决" },
   { "id": "st-r47", "from": "st-aiaa", "to": "st-shuiqiang", "type": "跨纪元 / 其他", "category": "其他", "sincePage": 980, "untilPage": null, "directed": false, "note": "两个纪元中守护程心的同类人，长期关联" },
   { "id": "st-r48", "from": "st-guanyifan", "to": "st-chuyan", "type": "同一阵营", "category": "同盟", "sincePage": 1020, "untilPage": null, "directed": false, "note": "星舰地球的学者与领袖，长期同阵营" },
   { "id": "st-r49", "from": "st-guanyifan", "to": "st-yangdong", "type": "同行 / 敬仰", "category": "师友", "sincePage": 1000, "untilPage": null, "directed": true, "note": "后世的物理学者对第一代殉道者的长期敬仰" },
   { "id": "st-r50", "from": "st-dingyi", "to": "st-luoji", "type": "同行 / 师友", "category": "师友", "sincePage": 660, "untilPage": null, "directed": false, "note": "丁仪在末日之战前的警告成为罗辑推演的依据，影响长期" },
   { "id": "st-r51", "from": "st-shenyufei", "to": "st-yiwensi", "type": "同一组织 / 派系对立", "category": "敌对", "sincePage": 320, "untilPage": 478, "directed": false, "note": "拯救派核心与降临派领袖，止于伊文斯被杀" },
   { "id": "st-r52", "from": "st-linyun", "to": "st-wangmiao", "type": "同行 / 军方合作", "category": "同盟", "sincePage": 260, "untilPage": 420, "directed": false, "note": "两人在作战中心的新概念武器项目中合作，止于宏聚变试验" },
   { "id": "st-r53", "from": "st-feiziluo", "to": "st-dingyi", "type": "观测 / 通报", "category": "上下级", "sincePage": 940, "untilPage": null, "directed": true, "note": "斐兹罗把水滴的观测数据通报给登舰考察的丁仪，长期观测合作" },
   { "id": "st-r54", "from": "st-kante", "to": "st-sayi", "type": "上下级", "category": "上下级", "sincePage": 640, "untilPage": null, "directed": true, "note": "坎特作为 PDC 联络官直接向秘书长负责，无明确终止" },
   { "id": "st-r55", "from": "st-linge", "to": "st-weide", "type": "技术路线之争", "category": "敌对", "sincePage": 1020, "untilPage": 1185, "directed": false, "note": "林格主张稳妥的掩体方案，与维德的飞船路线针锋相对，止于维德被处决" },
   { "id": "st-r56", "from": "st-qinshihuang", "to": "st-wangmiao", "type": "游戏中的引导", "category": "其他", "sincePage": 270, "untilPage": 340, "directed": true, "note": "游戏中的秦始皇向汪淼展示三体文明的历史，止于游戏关闭" },
   { "id": "st-r57", "from": "st-yewenjie", "to": "st-leizhicheng", "type": "上下级", "category": "上下级", "sincePage": 180, "untilPage": 302, "directed": true, "note": "红岸基地政委，最终被她锯断缆绳送下悬崖" },
   { "id": "st-r58", "from": "st-jianchuan", "to": "st-santiyuanshou", "type": "上下级", "category": "上下级", "sincePage": 1260, "untilPage": null, "directed": true, "note": "舰队指挥官直接受元首与三体世界指挥，长期" },
   { "id": "st-r59", "from": "st-jianchuan", "to": "st-zhizi", "type": "协同作战", "category": "同盟", "sincePage": 1260, "untilPage": null, "directed": false, "note": "舰队与智子在地球方向上的长期协同" },
   { "id": "st-r60", "from": "st-wangmiao", "to": "st-shuiqiang", "type": "警民 / 长期搭档", "category": "同盟", "sincePage": 260, "untilPage": null, "directed": false, "note": "史强以警官身份长期协助汪淼的工作" },
   { "id": "st-r61", "from": "st-yewenjie", "to": "st-weicheng", "type": "组织与外围 / 上下级", "category": "上下级", "sincePage": 320, "untilPage": null, "directed": true, "note": "叶文洁通过申玉菲长期掌握魏成的数学推演" },
   { "id": "st-r62", "from": "st-yewenjie", "to": "st-shuiqiang", "type": "被调查者 / 调查者", "category": "其他", "sincePage": 260, "untilPage": null, "directed": false, "note": "史强追查叶文洁与 ETO 的线索，长期对手关系" },
   { "id": "st-r63", "from": "st-yangdong", "to": "st-shenyufei", "type": "同门 / 同行", "category": "师友", "sincePage": 260, "untilPage": null, "directed": false, "note": "科学边界中的同门学者，杨冬死后由申玉菲延续这条线索" },
   { "id": "st-r64", "from": "st-dingyi", "to": "st-shenyufei", "type": "同行", "category": "师友", "sincePage": 350, "untilPage": null, "directed": false, "note": "同处科学边界学术圈，长期同行" },
   { "id": "st-r65", "from": "st-yewenjie", "to": "st-yangdong", "type": "家族与学界 / 亲属", "category": "亲属", "sincePage": 120, "untilPage": null, "directed": false, "note": "母女之外，叶文洁的学术身份也长期笼罩着杨冬" },
   { "id": "st-r66", "from": "st-linyun", "to": "st-yewenjie", "type": "军方与红岸 / 上下级", "category": "上下级", "sincePage": 200, "untilPage": null, "directed": true, "note": "林云代表军方长期对接红岸基地的技术遗留问题" },
   { "id": "st-r67", "from": "st-linyun", "to": "st-yangdong", "type": "同行", "category": "师友", "sincePage": 220, "untilPage": null, "directed": false, "note": "同处理论物理与军方项目的交汇处，长期同行" },
   { "id": "st-r68", "from": "st-qinshihuang", "to": "st-shenyufei", "type": "组织与外围 / 其他", "category": "其他", "sincePage": 270, "untilPage": null, "directed": false, "note": "申玉菲通过三体游戏的外围账号长期观察与引导玩家群体" },
   { "id": "st-r69", "from": "st-linyun", "to": "st-weicheng", "type": "军方与学者 / 合作", "category": "同盟", "sincePage": 260, "untilPage": null, "directed": false, "note": "林云为军方项目向魏成征询数学与模型上的意见，长期保持合作" },
   { "id": "st-r70", "from": "st-yewenjie", "to": "st-linyun", "type": "红岸与军方 / 上下级", "category": "上下级", "sincePage": 138, "untilPage": null, "directed": true, "note": "红岸基地长期接受军方的项目指导，林云是叶文洁在军方的对接人之一" },
   { "id": "st-r71", "from": "st-yangdong", "to": "st-leizhicheng", "type": "军方项目与学界 / 其他", "category": "其他", "sincePage": 300, "untilPage": null, "directed": false, "note": "红岸工程的军方背景长期笼罩着杨冬这一代物理学者的研究环境" }
  ]
 }
]);
