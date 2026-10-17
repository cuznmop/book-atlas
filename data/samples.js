// 示例数据：bookchar 书中人 · Book Atlas
// 页码已按全书页数铺开，可直接拖动时间轴查看分期演变。
// 用 concat 追加，保证与其它 data/book-*.js 的加载顺序无关。
window.SAMPLE_BOOKS = (window.SAMPLE_BOOKS || []).concat([
 {
  "id": "sample-hongloumeng",
  "meta": {
   "title": "红楼梦",
   "author": "曹雪芹",
   "publisher": "人民文学出版社",
   "isbn": "978-7-02-000220-7",
   "edition": "中国古典文学读本丛书",
   "year": "1996",
   "totalPages": 1606,
   "currentPage": 1,
   "note": "以庚辰本为底本，中国艺术研究院红楼梦研究所校注。"
  },
  "characters": [
   {
    "id": "hlm-baoyu",
    "primaryName": "贾宝玉",
    "names": [
     {
      "text": "宝玉",
      "type": "小名",
      "note": ""
     },
     {
      "text": "怡红公子",
      "type": "别号",
      "note": "大观园题咏时所用"
     },
     {
      "text": "绛洞花王",
      "type": "别号",
      "note": ""
     },
     {
      "text": "宝二爷",
      "type": "尊称",
      "note": "荣国府下人通称"
     }
    ],
    "gender": "男",
    "role": "荣国府二公子",
    "firstPage": 33,
    "appearances": [
     33,
     66,
     114,
     260,
     358,
     471,
     828,
     1006,
     1217,
     1493,
     1541,
     1590
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1525,
      "note": "自幼生长之地"
     },
     {
      "place": "大观园·怡红院",
      "city": "京城",
      "country": "中国",
      "fromPage": 358,
      "toPage": 1509,
      "note": "入园后居所"
     },
     {
      "place": "大荒山青埂峰",
      "city": "",
      "country": "中国",
      "fromPage": 1590,
      "toPage": null,
      "note": "顽石来处"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1557,
      "note": ""
     },
     {
      "name": "丫鬟仆役",
      "group": "其他",
      "fromPage": 358,
      "toPage": 1509,
      "note": "与房中丫鬟亲厚"
     }
    ],
    "groups": [
     "主角",
     "大观园诗社"
    ],
    "experiences": [
     {
      "title": "衔玉而生",
      "fromPage": 33,
      "toPage": 66,
      "description": "冷子兴演说荣国府时点出其含玉而诞的奇事。"
     },
     {
      "title": "初会林黛玉",
      "fromPage": 114,
      "toPage": 131,
      "description": "黛玉进府，二人初见即觉眼熟，宝玉因黛玉无玉而摔玉。"
     },
     {
      "title": "入园结社",
      "fromPage": 358,
      "toPage": 568,
      "description": "随诸姐妹迁入大观园，与黛玉、宝钗共结海棠诗社。"
     },
     {
      "title": "抄检大观园后出家",
      "fromPage": 1006,
      "toPage": 1590,
      "description": "抄检后晴雯被逐、园中离散，终在中举后随僧道而去。"
     }
    ],
    "ending": "中举后随一僧一道离家，出家为僧",
    "endingPage": 1590,
    "note": "全书核心人物，行为偏僻性乖张。"
   },
   {
    "id": "hlm-daiyu",
    "primaryName": "林黛玉",
    "names": [
     {
      "text": "黛玉",
      "type": "小名",
      "note": ""
     },
     {
      "text": "颦儿",
      "type": "别号",
      "note": "宝玉所取"
     },
     {
      "text": "潇湘妃子",
      "type": "别号",
      "note": "诗社雅号"
     },
     {
      "text": "林妹妹",
      "type": "尊称",
      "note": "贾府上下通称"
     }
    ],
    "gender": "女",
    "role": "姑苏林氏之女，贾母外孙女",
    "firstPage": 82,
    "appearances": [
     82,
     114,
     358,
     406,
     471,
     536,
     958,
     1201,
     1217,
     1574
    ],
    "locations": [
     {
      "place": "扬州",
      "city": "扬州",
      "country": "中国",
      "fromPage": 82,
      "toPage": 98,
      "note": "父任所，母丧于此"
     },
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 114,
      "toPage": 1574,
      "note": "寄居外祖母家"
     },
     {
      "place": "大观园·潇湘馆",
      "city": "京城",
      "country": "中国",
      "fromPage": 358,
      "toPage": 1574,
      "note": "入园居所"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 114,
      "toPage": 1574,
      "note": "以外孙女身份寄居"
     }
    ],
    "groups": [
     "主角",
     "大观园诗社"
    ],
    "experiences": [
     {
      "title": "丧母别父入京",
      "fromPage": 82,
      "toPage": 114,
      "description": "母亲贾敏病逝，父亲林如海托贾雨村送其入京依外祖母。"
     },
     {
      "title": "葬花吟",
      "fromPage": 406,
      "toPage": 423,
      "description": "因误会被拒于怡红院外，次日葬花并吟长诗自伤身世。"
     },
     {
      "title": "重建桃花社",
      "fromPage": 958,
      "toPage": 958,
      "description": "与众人重整诗社，作桃花行，才情冠绝园中。"
     },
     {
      "title": "焚稿断痴情",
      "fromPage": 1201,
      "toPage": 1217,
      "description": "宝玉娶宝钗之夜，黛玉焚烧诗稿，泪尽而逝。"
     }
    ],
    "ending": "宝玉成婚之夜焚稿断情，泪尽而逝",
    "endingPage": 1217,
    "note": "敏感多病，诗才第一。"
   },
   {
    "id": "hlm-baochai",
    "primaryName": "薛宝钗",
    "names": [
     {
      "text": "宝钗",
      "type": "小名",
      "note": ""
     },
     {
      "text": "蘅芜君",
      "type": "别号",
      "note": "诗社雅号"
     },
     {
      "text": "宝姐姐",
      "type": "尊称",
      "note": ""
     }
    ],
    "gender": "女",
    "role": "金陵薛家之女，宝玉之妻",
    "firstPage": 568,
    "appearances": [
     568,
     601,
     795,
     958,
     1201,
     1217,
     1493,
     1606
    ],
    "locations": [
     {
      "place": "大观园·蘅芜苑",
      "city": "京城",
      "country": "中国",
      "fromPage": 568,
      "toPage": 1509,
      "note": "入园居所"
     },
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 601,
      "toPage": 1606,
      "note": "随母兄寄居贾府"
     },
     {
      "place": "金陵",
      "city": "金陵",
      "country": "中国",
      "fromPage": 568,
      "toPage": 601,
      "note": "原籍"
     }
    ],
    "factions": [
     {
      "name": "薛家",
      "group": "家族",
      "fromPage": 568,
      "toPage": 1606,
      "note": "皇商之家"
     },
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 1201,
      "toPage": 1606,
      "note": "嫁入贾府为宝玉之妻"
     }
    ],
    "groups": [
     "主角",
     "大观园诗社"
    ],
    "experiences": [
     {
      "title": "入京待选",
      "fromPage": 568,
      "toPage": 601,
      "description": "随母薛姨妈、兄薛蟠入京，暂居贾府梨香院。"
     },
     {
      "title": "金兰契互剖金兰语",
      "fromPage": 649,
      "toPage": 649,
      "description": "与黛玉推心置腹，赠燕窝以调养其病。"
     },
     {
      "title": "金玉良缘成婚",
      "fromPage": 1201,
      "toPage": 1217,
      "description": "贾府以调包之计使其嫁与宝玉。"
     },
     {
      "title": "独守空闺",
      "fromPage": 1493,
      "toPage": 1606,
      "description": "宝玉出家后抚育遗腹之子，守节终身。"
     }
    ],
    "ending": "宝玉出家后独守空闺，抚孤守节",
    "endingPage": 1606,
    "note": "稳重周全，识大体。"
   },
   {
    "id": "hlm-xifeng",
    "primaryName": "王熙凤",
    "names": [
     {
      "text": "凤姐",
      "type": "俗称",
      "note": ""
     },
     {
      "text": "凤辣子",
      "type": "绰号",
      "note": "贾母戏称"
     },
     {
      "text": "琏二奶奶",
      "type": "尊称",
      "note": "府中下人通称"
     }
    ],
    "gender": "女",
    "role": "荣国府当家奶奶，贾琏之妻",
    "firstPage": 98,
    "appearances": [
     98,
     196,
     228,
     325,
     617,
     925,
     1249,
     1428
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 98,
      "toPage": 1428,
      "note": "总理家务"
     },
     {
      "place": "宁国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 196,
      "toPage": 228,
      "note": "协理秦可卿丧事"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 98,
      "toPage": 1428,
      "note": "嫁入贾府"
     },
     {
      "name": "王家",
      "group": "家族",
      "fromPage": 98,
      "toPage": 1428,
      "note": "娘家"
     }
    ],
    "groups": [
     "当家主事"
    ],
    "experiences": [
     {
      "title": "协理宁国府",
      "fromPage": 196,
      "toPage": 228,
      "description": "秦可卿丧事中总理内务，赏罚分明，威震两府。"
     },
     {
      "title": "弄权铁槛寺",
      "fromPage": 228,
      "toPage": 244,
      "description": "包揽词讼、坐享三千两，自此胆识愈壮。"
     },
     {
      "title": "大闹宁国府",
      "fromPage": 925,
      "toPage": 925,
      "description": "得知贾琏偷娶尤二姐，闯入宁国府撒泼哭骂，索要说法。"
     },
     {
      "title": "托孤与病亡",
      "fromPage": 1249,
      "toPage": 1428,
      "description": "抄家后惊惧成疾，临终将巧姐托付刘姥姥。"
     }
    ],
    "ending": "抄家后忧惧成疾，病死府中",
    "endingPage": 1428,
    "note": "机关算尽，反误性命。"
   },
   {
    "id": "hlm-jiamu",
    "primaryName": "贾母",
    "names": [
     {
      "text": "史太君",
      "type": "尊称",
      "note": ""
     },
     {
      "text": "老太太",
      "type": "俗称",
      "note": "府中通称"
     }
    ],
    "gender": "女",
    "role": "荣国府祖母，贾府最高长辈",
    "firstPage": 33,
    "appearances": [
     33,
     114,
     341,
     536,
     779,
     1039,
     1201,
     1363
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1363,
      "note": "晚年居所"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1363,
      "note": ""
     },
     {
      "name": "史家",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1363,
      "note": "出身金陵史家"
     }
    ],
    "groups": [
     "长辈"
    ],
    "experiences": [
     {
      "title": "接黛玉入府",
      "fromPage": 114,
      "toPage": 114,
      "description": "怜女早逝，接外孙女黛玉于膝下教养。"
     },
     {
      "title": "元宵开夜宴",
      "fromPage": 763,
      "toPage": 779,
      "description": "两府全盛之时，率众赏灯听戏，热闹非凡。"
     },
     {
      "title": "临终托付",
      "fromPage": 1363,
      "toPage": 1363,
      "description": "病重时散尽体己，嘱托宝玉与凤姐诸事。"
     }
    ],
    "ending": "抄家后惊忧成疾，寿终正寝",
    "endingPage": 1363,
    "note": "慈爱而有威，贾府兴衰的见证者。"
   },
   {
    "id": "hlm-jiazheng",
    "primaryName": "贾政",
    "names": [
     {
      "text": "存周",
      "type": "表字",
      "note": ""
     },
     {
      "text": "政老爷",
      "type": "尊称",
      "note": "府中通称"
     }
    ],
    "gender": "男",
    "role": "荣国府二老爷，工部员外郎",
    "firstPage": 33,
    "appearances": [
     33,
     260,
     487,
     958,
     1184,
     1298,
     1493
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1493,
      "note": ""
     },
     {
      "place": "外任学差",
      "city": "京城",
      "country": "中国",
      "fromPage": 520,
      "toPage": 958,
      "note": "奉旨外出视学"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1493,
      "note": "荣国府当家"
     }
    ],
    "groups": [
     "长辈",
     "仕宦"
    ],
    "experiences": [
     {
      "title": "大观园试才题对额",
      "fromPage": 260,
      "toPage": 260,
      "description": "携宝玉遍游新园，命其题匾联，心中暗喜而面上斥责。"
     },
     {
      "title": "笞挞宝玉",
      "fromPage": 487,
      "toPage": 487,
      "description": "因金钏之死与琪官事，怒打宝玉几至殒命。"
     },
     {
      "title": "痛失元春与家败",
      "fromPage": 1168,
      "toPage": 1314,
      "description": "元春薨逝、抄家获罪，外任归来唯见门庭冷落。"
     },
     {
      "title": "送宝玉赴考",
      "fromPage": 1476,
      "toPage": 1493,
      "description": "亲自送子入场，宝玉中举后却飘然离去。"
     }
    ],
    "ending": "家道中落后仍守祖业，老病而终",
    "endingPage": 1493,
    "note": "迂执方正，教子极严。"
   },
   {
    "id": "hlm-wangfuren",
    "primaryName": "王夫人",
    "names": [
     {
      "text": "太太",
      "type": "俗称",
      "note": "府中通称"
     },
     {
      "text": "王氏",
      "type": "本名",
      "note": "王家次女"
     }
    ],
    "gender": "女",
    "role": "荣国府二太太，宝玉之母",
    "firstPage": 33,
    "appearances": [
     33,
     471,
     487,
     1006,
     1055,
     1184,
     1476
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1476,
      "note": ""
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1476,
      "note": ""
     },
     {
      "name": "王家",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1476,
      "note": "娘家"
     }
    ],
    "groups": [
     "长辈"
    ],
    "experiences": [
     {
      "title": "金钏投井",
      "fromPage": 439,
      "toPage": 471,
      "description": "怒逐金钏，致其投井自尽，心中不安。"
     },
     {
      "title": "抄检大观园",
      "fromPage": 1006,
      "toPage": 1006,
      "description": "因绣春囊事发，命王熙凤等抄检各房，逐晴雯、芳官等人。"
     },
     {
      "title": "主持宝玉婚事",
      "fromPage": 1184,
      "toPage": 1201,
      "description": "与贾母、凤姐定下调包之计，促金玉良缘。"
     }
    ],
    "ending": "宝玉出家后仍居荣国府，老病而终",
    "endingPage": 1493,
    "note": "表面宽仁，实有手段。"
   },
   {
    "id": "hlm-tanchun",
    "primaryName": "贾探春",
    "names": [
     {
      "text": "探春",
      "type": "小名",
      "note": ""
     },
     {
      "text": "蕉下客",
      "type": "别号",
      "note": "诗社雅号"
     },
     {
      "text": "三姑娘",
      "type": "俗称",
      "note": ""
     }
    ],
    "gender": "女",
    "role": "荣国府三小姐，赵姨娘之女",
    "firstPage": 277,
    "appearances": [
     277,
     406,
     520,
     795,
     1006,
     1233,
     1266
    ],
    "locations": [
     {
      "place": "大观园·秋爽斋",
      "city": "京城",
      "country": "中国",
      "fromPage": 358,
      "toPage": 1266,
      "note": "入园居所"
     },
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1266,
      "note": ""
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1266,
      "note": ""
     }
    ],
    "groups": [
     "大观园诗社",
     "当家主事"
    ],
    "experiences": [
     {
      "title": "发起海棠诗社",
      "fromPage": 520,
      "toPage": 520,
      "description": "以花笺邀众姐妹结社作诗，自号蕉下客。"
     },
     {
      "title": "代凤姐理家",
      "fromPage": 795,
      "toPage": 812,
      "description": "与李纨、宝钗共理家务，革除积弊，兴利除宿弊。"
     },
     {
      "title": "抄检时抗言",
      "fromPage": 1006,
      "toPage": 1006,
      "description": "当众顶撞王善保家的，痛陈家族自败之兆。"
     },
     {
      "title": "远嫁",
      "fromPage": 1233,
      "toPage": 1266,
      "description": "奉旨远嫁海疆，与家人洒泪而别。"
     }
    ],
    "ending": "远嫁海疆，一去不归",
    "endingPage": 1266,
    "note": "精明志高，生于末世。"
   },
   {
    "id": "hlm-yingchun",
    "primaryName": "贾迎春",
    "names": [
     {
      "text": "迎春",
      "type": "小名",
      "note": ""
     },
     {
      "text": "菱洲",
      "type": "别号",
      "note": "诗社雅号"
     },
     {
      "text": "二姑娘",
      "type": "俗称",
      "note": ""
     }
    ],
    "gender": "女",
    "role": "荣国府二小姐，贾赦之女",
    "firstPage": 277,
    "appearances": [
     277,
     520,
     795,
     990,
     1087,
     1103,
     1347
    ],
    "locations": [
     {
      "place": "大观园·紫菱洲",
      "city": "京城",
      "country": "中国",
      "fromPage": 358,
      "toPage": 1103,
      "note": "入园居所"
     },
     {
      "place": "孙家",
      "city": "京城",
      "country": "中国",
      "fromPage": 1087,
      "toPage": 1347,
      "note": "出嫁后所居"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1347,
      "note": ""
     }
    ],
    "groups": [
     "大观园诗社"
    ],
    "experiences": [
     {
      "title": "入园结社",
      "fromPage": 358,
      "toPage": 520,
      "description": "随众姐妹入园，虽才情平平而性情温厚。"
     },
     {
      "title": "累金凤风波",
      "fromPage": 990,
      "toPage": 990,
      "description": "乳母偷当累金凤，迎春不闻不问，任人欺瞒。"
     },
     {
      "title": "误嫁中山狼",
      "fromPage": 1087,
      "toPage": 1103,
      "description": "贾赦作主嫁与孙绍祖，受尽凌虐。"
     }
    ],
    "ending": "被孙绍祖凌虐，婚后一年即亡",
    "endingPage": 1347,
    "note": "懦弱无能，金闺花柳质。"
   },
   {
    "id": "hlm-xichun",
    "primaryName": "贾惜春",
    "names": [
     {
      "text": "惜春",
      "type": "小名",
      "note": ""
     },
     {
      "text": "藕榭",
      "type": "别号",
      "note": "诗社雅号"
     },
     {
      "text": "四姑娘",
      "type": "俗称",
      "note": ""
     }
    ],
    "gender": "女",
    "role": "宁国府四小姐，贾珍之妹",
    "firstPage": 277,
    "appearances": [
     277,
     520,
     1006,
     1444,
     1460
    ],
    "locations": [
     {
      "place": "大观园·藕香榭",
      "city": "京城",
      "country": "中国",
      "fromPage": 358,
      "toPage": 1444,
      "note": "入园居所"
     },
     {
      "place": "栊翠庵",
      "city": "京城",
      "country": "中国",
      "fromPage": 1444,
      "toPage": 1460,
      "note": "出家后居所"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1460,
      "note": ""
     },
     {
      "name": "僧道",
      "group": "其他",
      "fromPage": 1444,
      "toPage": 1460,
      "note": "出家为尼"
     }
    ],
    "groups": [
     "大观园诗社"
    ],
    "experiences": [
     {
      "title": "奉命绘大观园图",
      "fromPage": 601,
      "toPage": 601,
      "description": "贾母命其画园中景致，遂有携画出入之烦。"
     },
     {
      "title": "抄检中逐入画",
      "fromPage": 1006,
      "toPage": 1006,
      "description": "因丫头入画私藏财物，决意撵出，心冷口冷。"
     },
     {
      "title": "出家为尼",
      "fromPage": 1444,
      "toPage": 1460,
      "description": "家败后看破红尘，剪发出家于栊翠庵。"
     }
    ],
    "ending": "看破红尘，出家为尼",
    "endingPage": 1460,
    "note": "孤介冷僻，独卧青灯古佛旁。"
   },
   {
    "id": "hlm-xiangyun",
    "primaryName": "史湘云",
    "names": [
     {
      "text": "湘云",
      "type": "小名",
      "note": ""
     },
     {
      "text": "枕霞旧友",
      "type": "别号",
      "note": "诗社雅号"
     },
     {
      "text": "云丫头",
      "type": "俗称",
      "note": "贾母昵称"
     }
    ],
    "gender": "女",
    "role": "保龄侯史家之女，贾母侄孙女",
    "firstPage": 309,
    "appearances": [
     309,
     455,
     536,
     714,
     860,
     958,
     1039,
     1330
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 309,
      "toPage": 1330,
      "note": "时常来住"
     },
     {
      "place": "大观园·蘅芜苑",
      "city": "京城",
      "country": "中国",
      "fromPage": 536,
      "toPage": 1039,
      "note": "暂住"
     },
     {
      "place": "史家",
      "city": "金陵",
      "country": "中国",
      "fromPage": 309,
      "toPage": 1330,
      "note": "本家，婶母约束甚严"
     }
    ],
    "factions": [
     {
      "name": "史家",
      "group": "家族",
      "fromPage": 309,
      "toPage": 1330,
      "note": ""
     },
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 309,
      "toPage": 1330,
      "note": "往来亲眷"
     }
    ],
    "groups": [
     "大观园诗社"
    ],
    "experiences": [
     {
      "title": "初入贾府",
      "fromPage": 309,
      "toPage": 309,
      "description": "大笑大说，爱说爱笑，与宝玉自幼相熟。"
     },
     {
      "title": "醉眠芍药裀",
      "fromPage": 860,
      "toPage": 860,
      "description": "宝玉生日宴上醉卧石凳，众人寻见传为趣谈。"
     },
     {
      "title": "中秋联句",
      "fromPage": 1039,
      "toPage": 1039,
      "description": "与黛玉于凹晶馆联句，叹寒塘渡鹤影。"
     },
     {
      "title": "议婚未果",
      "fromPage": 1330,
      "toPage": 1330,
      "description": "家败之后婚事蹉跎，后文未详。"
     }
    ],
    "ending": "结局不详，一说嫁与卫若兰后早寡",
    "endingPage": null,
    "note": "英豪阔大宽宏量。"
   },
   {
    "id": "hlm-miaoyu",
    "primaryName": "妙玉",
    "names": [
     {
      "text": "妙玉",
      "type": "法名",
      "note": ""
     },
     {
      "text": "槛外人",
      "type": "别号",
      "note": "与宝玉书信自称"
     }
    ],
    "gender": "女",
    "role": "栊翠庵带发修行的尼姑",
    "firstPage": 260,
    "appearances": [
     260,
     585,
     731,
     1039,
     1152,
     1395
    ],
    "locations": [
     {
      "place": "大观园·栊翠庵",
      "city": "京城",
      "country": "中国",
      "fromPage": 260,
      "toPage": 1395,
      "note": "入园修行"
     },
     {
      "place": "姑苏",
      "city": "苏州",
      "country": "中国",
      "fromPage": 260,
      "toPage": 260,
      "note": "原籍，读书于蟠香寺"
     }
    ],
    "factions": [
     {
      "name": "僧道",
      "group": "其他",
      "fromPage": 260,
      "toPage": 1395,
      "note": ""
     }
    ],
    "groups": [
     "出家人"
    ],
    "experiences": [
     {
      "title": "入园修行",
      "fromPage": 260,
      "toPage": 277,
      "description": "为备元春省亲，聘入大观园栊翠庵住持。"
     },
     {
      "title": "品茶栊翠庵",
      "fromPage": 585,
      "toPage": 585,
      "description": "以梅花雪水烹茶待客，讥黛玉为俗人。"
     },
     {
      "title": "走火入魔",
      "fromPage": 1152,
      "toPage": 1152,
      "description": "打坐时尘心忽动，神不守舍，自此多病。"
     },
     {
      "title": "遭劫被掳",
      "fromPage": 1395,
      "toPage": 1395,
      "description": "贼人夜入园中，妙玉被劫而去，不知所终。"
     }
    ],
    "ending": "遭贼人劫持，下落不明",
    "endingPage": 1395,
    "note": "气质美如兰，才华馥比仙。"
   },
   {
    "id": "hlm-xiren",
    "primaryName": "袭人",
    "names": [
     {
      "text": "袭人",
      "type": "本名",
      "note": "宝玉据旧诗所改"
     },
     {
      "text": "花珍珠",
      "type": "原名",
      "note": "贾母房中旧名"
     },
     {
      "text": "蕊珠",
      "type": "旧名",
      "note": ""
     }
    ],
    "gender": "女",
    "role": "宝玉房中首席大丫鬟",
    "firstPage": 33,
    "appearances": [
     33,
     82,
     293,
     504,
     1006,
     1055,
     1493
    ],
    "locations": [
     {
      "place": "荣国府·怡红院",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1493,
      "note": "侍奉宝玉"
     }
    ],
    "factions": [
     {
      "name": "丫鬟仆役",
      "group": "其他",
      "fromPage": 33,
      "toPage": 1493,
      "note": ""
     },
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1493,
      "note": "府中奴仆"
     }
    ],
    "groups": [
     "丫鬟"
    ],
    "experiences": [
     {
      "title": "贾母赐与宝玉",
      "fromPage": 33,
      "toPage": 82,
      "description": "本为贾母之婢，因心地纯良被派与宝玉。"
     },
     {
      "title": "贤袭人娇嗔箴宝玉",
      "fromPage": 293,
      "toPage": 325,
      "description": "以赎身之说要挟，劝宝玉读书走正路。"
     },
     {
      "title": "晴雯被逐后",
      "fromPage": 1055,
      "toPage": 1055,
      "description": "晴雯被逐，袭人独得王夫人信重，月钱升格。"
     },
     {
      "title": "嫁与蒋玉菡",
      "fromPage": 1493,
      "toPage": 1493,
      "description": "宝玉出家后由王夫人作主嫁与蒋玉菡。"
     }
    ],
    "ending": "宝玉出家后嫁与蒋玉菡",
    "endingPage": 1493,
    "note": "温柔和顺，似桂如兰。"
   },
   {
    "id": "hlm-qingwen",
    "primaryName": "晴雯",
    "names": [
     {
      "text": "晴雯",
      "type": "本名",
      "note": ""
     },
     {
      "text": "雯丫头",
      "type": "俗称",
      "note": ""
     }
    ],
    "gender": "女",
    "role": "宝玉房中丫鬟，针线第一",
    "firstPage": 66,
    "appearances": [
     66,
     114,
     455,
     747,
     1006,
     1055,
     1071
    ],
    "locations": [
     {
      "place": "荣国府·怡红院",
      "city": "京城",
      "country": "中国",
      "fromPage": 66,
      "toPage": 1055,
      "note": "侍奉宝玉"
     },
     {
      "place": "多浑虫家",
      "city": "京城",
      "country": "中国",
      "fromPage": 1055,
      "toPage": 1071,
      "note": "被逐后寄居表兄家"
     }
    ],
    "factions": [
     {
      "name": "丫鬟仆役",
      "group": "其他",
      "fromPage": 66,
      "toPage": 1071,
      "note": ""
     }
    ],
    "groups": [
     "丫鬟"
    ],
    "experiences": [
     {
      "title": "撕扇子作千金一笑",
      "fromPage": 455,
      "toPage": 455,
      "description": "因跌扇与宝玉口角，宝玉任其撕扇取乐。"
     },
     {
      "title": "病补雀金裘",
      "fromPage": 747,
      "toPage": 763,
      "description": "抱病连夜补好宝玉的雀金裘，力尽神危。"
     },
     {
      "title": "被逐含冤",
      "fromPage": 1006,
      "toPage": 1055,
      "description": "王善保家的进谗，王夫人命人架出园去。"
     },
     {
      "title": "夭亡",
      "fromPage": 1055,
      "toPage": 1071,
      "description": "病中与宝玉诀别，赠以指甲与贴身袄衣，含冤而逝。"
     }
    ],
    "ending": "被逐后含冤病亡，宝玉为作芙蓉女儿诔",
    "endingPage": 1071,
    "note": "心比天高，身为下贱。"
   },
   {
    "id": "hlm-pinger",
    "primaryName": "平儿",
    "names": [
     {
      "text": "平儿",
      "type": "本名",
      "note": ""
     },
     {
      "text": "平姑娘",
      "type": "尊称",
      "note": "府中通称"
     }
    ],
    "gender": "女",
    "role": "王熙凤的心腹通房丫鬟",
    "firstPage": 82,
    "appearances": [
     82,
     325,
     633,
     844,
     909,
     925,
     1476
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 82,
      "toPage": 1476,
      "note": "随王熙凤理事"
     }
    ],
    "factions": [
     {
      "name": "丫鬟仆役",
      "group": "其他",
      "fromPage": 82,
      "toPage": 1476,
      "note": ""
     },
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 82,
      "toPage": 1476,
      "note": ""
     }
    ],
    "groups": [
     "丫鬟"
    ],
    "experiences": [
     {
      "title": "判冤决狱",
      "fromPage": 844,
      "toPage": 844,
      "description": "行权处事，为柳五儿与茯苓霜一案持平了断。"
     },
     {
      "title": "掩瞒凤姐病",
      "fromPage": 795,
      "toPage": 795,
      "description": "凤姐小产，平儿代为周旋，不使外扬。"
     },
     {
      "title": "扶正",
      "fromPage": 1476,
      "toPage": 1476,
      "description": "凤姐死后，贾琏将其扶为正室。"
     }
    ],
    "ending": "王熙凤死后被贾琏扶为正室",
    "endingPage": 1476,
    "note": "行事周全，处心公道。"
   },
   {
    "id": "hlm-jialian",
    "primaryName": "贾琏",
    "names": [
     {
      "text": "琏二爷",
      "type": "尊称",
      "note": "府中通称"
     },
     {
      "text": "琏儿",
      "type": "小名",
      "note": "贾母等长辈称呼"
     }
    ],
    "gender": "男",
    "role": "荣国府长房次子，同知职衔",
    "firstPage": 98,
    "appearances": [
     98,
     244,
     325,
     893,
     909,
     941,
     1476
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 98,
      "toPage": 1476,
      "note": ""
     },
     {
      "place": "扬州",
      "city": "扬州",
      "country": "中国",
      "fromPage": 179,
      "toPage": 244,
      "note": "护送黛玉南下、料理林如海丧事"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 98,
      "toPage": 1476,
      "note": ""
     }
    ],
    "groups": [
     "当家主事"
    ],
    "experiences": [
     {
      "title": "送黛玉回南",
      "fromPage": 179,
      "toPage": 244,
      "description": "奉贾母之命送黛玉赴扬州探父，并料理其后事。"
     },
     {
      "title": "偷娶尤二姐",
      "fromPage": 893,
      "toPage": 909,
      "description": "瞒着凤姐在外置房娶尤二姐为二房。"
     },
     {
      "title": "尤二姐吞金",
      "fromPage": 941,
      "toPage": 941,
      "description": "凤姐百般折磨，尤二姐吞金自逝，贾琏悲痛无及。"
     },
     {
      "title": "扶平儿为正",
      "fromPage": 1476,
      "toPage": 1476,
      "description": "凤姐亡故后将其扶正，勉力支撑家门。"
     }
    ],
    "ending": "家败之后勉力持家，结局不详",
    "endingPage": null,
    "note": "纨绔习气，尚有良心。"
   },
   {
    "id": "hlm-jiazhen",
    "primaryName": "贾珍",
    "names": [
     {
      "text": "珍大爷",
      "type": "尊称",
      "note": "府中通称"
     }
    ],
    "gender": "男",
    "role": "宁国府族长，世袭三品威烈将军",
    "firstPage": 33,
    "appearances": [
     33,
     196,
     244,
     763,
     893,
     1022,
     1314
    ],
    "locations": [
     {
      "place": "宁国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1314,
      "note": ""
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1314,
      "note": "宁国府当家人"
     }
    ],
    "groups": [
     "当家主事"
    ],
    "experiences": [
     {
      "title": "大办秦可卿丧事",
      "fromPage": 196,
      "toPage": 228,
      "description": "为儿媳之死倾家治丧，排场逾制，震动京城。"
     },
     {
      "title": "宁国府除夕祭宗祠",
      "fromPage": 763,
      "toPage": 763,
      "description": "率合族子弟开宗祠行礼，一时礼仪之盛。"
     },
     {
      "title": "获罪革职抄没",
      "fromPage": 1314,
      "toPage": 1314,
      "description": "因交通外官、恃强凌弱被参，革去世职，家产抄没。"
     }
    ],
    "ending": "获罪革职抄家，发往海疆效力赎罪",
    "endingPage": 1314,
    "note": "一味高乐，不务正业。"
   },
   {
    "id": "hlm-jiarong",
    "primaryName": "贾蓉",
    "names": [
     {
      "text": "蓉哥儿",
      "type": "俗称",
      "note": ""
     },
     {
      "text": "蓉大爷",
      "type": "尊称",
      "note": "府中通称"
     }
    ],
    "gender": "男",
    "role": "宁国府长孙，监生",
    "firstPage": 98,
    "appearances": [
     98,
     196,
     244,
     876,
     893,
     1314
    ],
    "locations": [
     {
      "place": "宁国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 98,
      "toPage": 1314,
      "note": ""
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 98,
      "toPage": 1314,
      "note": ""
     }
    ],
    "groups": [
     "晚辈"
    ],
    "experiences": [
     {
      "title": "捐监生以荣丧仪",
      "fromPage": 196,
      "toPage": 196,
      "description": "为秦可卿丧仪风光，捐了五品龙禁尉的职衔。"
     },
     {
      "title": "助贾琏偷娶",
      "fromPage": 893,
      "toPage": 893,
      "description": "为贾琏张罗置办外宅，牵合尤二姐之事。"
     },
     {
      "title": "随父获罪",
      "fromPage": 1314,
      "toPage": 1314,
      "description": "宁国府抄没，与父一同被革职查办。"
     }
    ],
    "ending": "随父获罪革职，结局不详",
    "endingPage": 1314,
    "note": "轻浮油滑，随波逐流。"
   },
   {
    "id": "hlm-qinkeqing",
    "primaryName": "秦可卿",
    "names": [
     {
      "text": "可卿",
      "type": "小名",
      "note": ""
     },
     {
      "text": "兼美",
      "type": "别号",
      "note": "太虚幻境中名"
     },
     {
      "text": "蓉大奶奶",
      "type": "尊称",
      "note": "府中通称"
     }
    ],
    "gender": "女",
    "role": "宁国府贾蓉之妻",
    "firstPage": 66,
    "appearances": [
     66,
     98,
     147,
     163,
     196,
     212
    ],
    "locations": [
     {
      "place": "宁国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 66,
      "toPage": 212,
      "note": ""
     },
     {
      "place": "太虚幻境",
      "city": "",
      "country": "中国",
      "fromPage": 66,
      "toPage": 66,
      "note": "梦中示警之处"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 66,
      "toPage": 212,
      "note": "嫁入宁国府"
     }
    ],
    "groups": [
     "薄命司"
    ],
    "experiences": [
     {
      "title": "托梦凤姐",
      "fromPage": 196,
      "toPage": 196,
      "description": "临终托梦，嘱置办祭祀产业以备败落之患。"
     },
     {
      "title": "天香楼自缢",
      "fromPage": 196,
      "toPage": 212,
      "description": "因与贾珍之事败露，在天香楼自缢身亡。"
     },
     {
      "title": "丧仪逾制",
      "fromPage": 212,
      "toPage": 228,
      "description": "贾珍倾力治丧，棺木逾制，四王八公皆来路祭。"
     }
    ],
    "ending": "天香楼自缢身亡，丧仪极盛",
    "endingPage": 212,
    "note": "十二钗中最早薄命者。"
   },
   {
    "id": "hlm-yucun",
    "primaryName": "贾雨村",
    "names": [
     {
      "text": "贾化",
      "type": "本名",
      "note": ""
     },
     {
      "text": "时飞",
      "type": "表字",
      "note": ""
     },
     {
      "text": "雨村",
      "type": "别号",
      "note": "书中通称"
     }
    ],
    "gender": "男",
    "role": "由寒士而至金陵应天府尹",
    "firstPage": 1,
    "appearances": [
     1,
     17,
     33,
     50,
     698,
     1282,
     1493
    ],
    "locations": [
     {
      "place": "姑苏葫芦庙",
      "city": "苏州",
      "country": "中国",
      "fromPage": 1,
      "toPage": 17,
      "note": "落魄寄居"
     },
     {
      "place": "应天府",
      "city": "金陵",
      "country": "中国",
      "fromPage": 50,
      "toPage": 50,
      "note": "任知府断葫芦案"
     },
     {
      "place": "京城",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1493,
      "note": "为官起落"
     }
    ],
    "factions": [
     {
      "name": "外部",
      "group": "其他",
      "fromPage": 1,
      "toPage": 1493,
      "note": "由贾府援引而起"
     }
    ],
    "groups": [
     "仕宦",
     "线索人物"
    ],
    "experiences": [
     {
      "title": "甄士隐赠银赴考",
      "fromPage": 1,
      "toPage": 17,
      "description": "困居葫芦庙，得甄士隐资助入都应试，中式为官。"
     },
     {
      "title": "乱判葫芦案",
      "fromPage": 50,
      "toPage": 50,
      "description": "为迎合贾王薛三家，胡乱判断薛蟠打死冯渊之案。"
     },
     {
      "title": "因贪酷革职",
      "fromPage": 17,
      "toPage": 17,
      "description": "初任知府未满一年，因贪酷徇私被参革职。"
     }
    ],
    "ending": "后因婪索属员获罪，递籍为民",
    "endingPage": 1493,
    "note": "全书起结的关键线索人物。"
   },
   {
    "id": "hlm-shizhen",
    "primaryName": "甄士隐",
    "names": [
     {
      "text": "甄费",
      "type": "本名",
      "note": ""
     },
     {
      "text": "士隐",
      "type": "别号",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "姑苏乡宦，香菱之父",
    "firstPage": 1,
    "appearances": [
     1,
     17,
     1282,
     1493
    ],
    "locations": [
     {
      "place": "姑苏十里街",
      "city": "苏州",
      "country": "中国",
      "fromPage": 1,
      "toPage": 17,
      "note": "家宅与葫芦庙相邻"
     },
     {
      "place": "太虚幻境",
      "city": "",
      "country": "中国",
      "fromPage": 1493,
      "toPage": 1493,
      "note": "随跛道人而去"
     }
    ],
    "factions": [
     {
      "name": "外部",
      "group": "其他",
      "fromPage": 1,
      "toPage": 1493,
      "note": ""
     }
    ],
    "groups": [
     "线索人物"
    ],
    "experiences": [
     {
      "title": "资助贾雨村",
      "fromPage": 1,
      "toPage": 1,
      "description": "识雨村为非常之人，赠银五十两与冬衣助其赴考。"
     },
     {
      "title": "元宵失女",
      "fromPage": 1,
      "toPage": 1,
      "description": "元宵夜家奴霍启看灯失手，独女英莲被拐。"
     },
     {
      "title": "家遭火焚",
      "fromPage": 1,
      "toPage": 17,
      "description": "葫芦庙炸供起火，烧成瓦砾场，投奔岳丈又遭白眼。"
     },
     {
      "title": "随跛道人出家",
      "fromPage": 17,
      "toPage": 1493,
      "description": "解注好了歌后随跛足道人飘然而去。"
     }
    ],
    "ending": "悟道后随跛足道人出家而去",
    "endingPage": 17,
    "note": "真事隐去，全书楔子人物。"
   },
   {
    "id": "hlm-liulaolao",
    "primaryName": "刘姥姥",
    "names": [
     {
      "text": "刘姥姥",
      "type": "俗称",
      "note": "书中通称"
     },
     {
      "text": "母蝗虫",
      "type": "绰号",
      "note": "黛玉戏称"
     }
    ],
    "gender": "女",
    "role": "京郊农妇，王家远亲",
    "firstPage": 82,
    "appearances": [
     82,
     552,
     568,
     585,
     601,
     1411,
     1476
    ],
    "locations": [
     {
      "place": "京郊农村",
      "city": "京城",
      "country": "中国",
      "fromPage": 82,
      "toPage": 1476,
      "note": "家中度日"
     },
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 82,
      "toPage": 1476,
      "note": "三进荣国府"
     },
     {
      "place": "大观园",
      "city": "京城",
      "country": "中国",
      "fromPage": 552,
      "toPage": 601,
      "note": "随贾母游园"
     }
    ],
    "factions": [
     {
      "name": "外部",
      "group": "其他",
      "fromPage": 82,
      "toPage": 1476,
      "note": "与王家略有瓜葛的远亲"
     }
    ],
    "groups": [
     "外客"
    ],
    "experiences": [
     {
      "title": "一进荣国府",
      "fromPage": 82,
      "toPage": 82,
      "description": "因家计艰难，携外孙板儿上门告贷，得凤姐周济。"
     },
     {
      "title": "二进荣国府",
      "fromPage": 552,
      "toPage": 601,
      "description": "送瓜果菜蔬来谢，被贾母留住游园，笑料百出。"
     },
     {
      "title": "三进荣国府",
      "fromPage": 1411,
      "toPage": 1476,
      "description": "贾府败落之际再入府，救出被卖的巧姐。"
     }
    ],
    "ending": "贾府败落后救出巧姐，为其择配人家",
    "endingPage": 1476,
    "note": "大智若愚的乡下老妪，贾府兴衰的旁观者。"
   },
   {
    "id": "hlm-xuepan",
    "primaryName": "薛蟠",
    "names": [
     {
      "text": "薛文龙",
      "type": "表字",
      "note": ""
     },
     {
      "text": "呆霸王",
      "type": "绰号",
      "note": "书中通称"
     },
     {
      "text": "薛大傻子",
      "type": "绰号",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "皇商薛家长子，宝钗之兄",
    "firstPage": 50,
    "appearances": [
     50,
     390,
     423,
     504,
     682,
     1103,
     1136,
     1493
    ],
    "locations": [
     {
      "place": "金陵",
      "city": "金陵",
      "country": "中国",
      "fromPage": 50,
      "toPage": 50,
      "note": "纵奴行凶之地"
     },
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 568,
      "toPage": 1493,
      "note": "随母妹寄居"
     },
     {
      "place": "江南",
      "city": "苏州",
      "country": "中国",
      "fromPage": 682,
      "toPage": 698,
      "note": "外出贩货"
     }
    ],
    "factions": [
     {
      "name": "薛家",
      "group": "家族",
      "fromPage": 50,
      "toPage": 1493,
      "note": ""
     }
    ],
    "groups": [
     "纨绔"
    ],
    "experiences": [
     {
      "title": "纵奴打死冯渊",
      "fromPage": 50,
      "toPage": 50,
      "description": "为争买英莲纵容豪奴打死冯渊，恃势逍遥法外。"
     },
     {
      "title": "误娶夏金桂",
      "fromPage": 1087,
      "toPage": 1103,
      "description": "娶夏金桂为妻，家中自此鸡犬不宁，香菱备受折磨。"
     },
     {
      "title": "酒肆杀人入狱",
      "fromPage": 1136,
      "toPage": 1136,
      "description": "在南边酒肆与人争执，失手打死当槽，被拿入狱。"
     },
     {
      "title": "获赦出狱",
      "fromPage": 1493,
      "toPage": 1493,
      "description": "经家中多方打点，遇赦减等，得脱囹圄。"
     }
    ],
    "ending": "遇赦出狱，后仍袭祖业经商度日",
    "endingPage": 1493,
    "note": "性情奢侈，言语傲慢。"
   },
   {
    "id": "hlm-liwan",
    "primaryName": "李纨",
    "names": [
     {
      "text": "李纨",
      "type": "本名",
      "note": ""
     },
     {
      "text": "宫裁",
      "type": "表字",
      "note": ""
     },
     {
      "text": "稻香老农",
      "type": "别号",
      "note": "诗社雅号"
     }
    ],
    "gender": "女",
    "role": "荣国府长孙贾珠之妻，寡居",
    "firstPage": 33,
    "appearances": [
     33,
     520,
     649,
     795,
     958,
     1363,
     1476
    ],
    "locations": [
     {
      "place": "大观园·稻香村",
      "city": "京城",
      "country": "中国",
      "fromPage": 358,
      "toPage": 1363,
      "note": "入园居所"
     },
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1476,
      "note": ""
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1476,
      "note": ""
     }
    ],
    "groups": [
     "大观园诗社",
     "长辈"
    ],
    "experiences": [
     {
      "title": "青年守寡",
      "fromPage": 33,
      "toPage": 50,
      "description": "夫贾珠早逝，唯知侍亲养子，心如槁木死灰。"
     },
     {
      "title": "掌诗社社长",
      "fromPage": 520,
      "toPage": 520,
      "description": "被推为海棠诗社社长，评诗定次。"
     },
     {
      "title": "与探春理家",
      "fromPage": 795,
      "toPage": 812,
      "description": "协理家务，按例循规，与探春宝钗共除宿弊。"
     },
     {
      "title": "教子成名",
      "fromPage": 1476,
      "toPage": 1476,
      "description": "贾兰中举，母子苦尽甘来，然已心力交瘁。"
     }
    ],
    "ending": "贾兰中举后母以子贵，诰命加身而早衰",
    "endingPage": 1476,
    "note": "竹篱茅舍自甘心。"
   },
   {
    "id": "hlm-yuanchun",
    "primaryName": "贾元春",
    "names": [
     {
      "text": "元春",
      "type": "本名",
      "note": ""
     },
     {
      "text": "贤德妃",
      "type": "封号",
      "note": "入宫后加封"
     },
     {
      "text": "娘娘",
      "type": "尊称",
      "note": "府中通称"
     }
    ],
    "gender": "女",
    "role": "荣国府长女，凤藻宫尚书、贤德妃",
    "firstPage": 17,
    "appearances": [
     17,
     244,
     260,
     277,
     341,
     423,
     1168
    ],
    "locations": [
     {
      "place": "皇宫",
      "city": "京城",
      "country": "中国",
      "fromPage": 17,
      "toPage": 1168,
      "note": "入宫为妃"
     },
     {
      "place": "大观园",
      "city": "京城",
      "country": "中国",
      "fromPage": 277,
      "toPage": 277,
      "note": "元宵省亲"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 17,
      "toPage": 1168,
      "note": ""
     }
    ],
    "groups": [
     "长辈",
     "宫廷"
    ],
    "experiences": [
     {
      "title": "选入宫中",
      "fromPage": 17,
      "toPage": 17,
      "description": "自幼入宫为女史，后晋封贤德妃。"
     },
     {
      "title": "归省庆元宵",
      "fromPage": 277,
      "toPage": 277,
      "description": "奉旨省亲，与家人相见泣诉，叹当日送她到那不得见人的去处。"
     },
     {
      "title": "命题大观园",
      "fromPage": 277,
      "toPage": 277,
      "description": "命宝玉及众姐妹题咏园景，评定优劣。"
     },
     {
      "title": "薨逝宫中",
      "fromPage": 1168,
      "toPage": 1168,
      "description": "忽染疾不起，寿终内寝，贾府失去最大屏障。"
     }
    ],
    "ending": "病薨于宫中，贾府失去凭依",
    "endingPage": 1168,
    "note": "二十年来辨是非，榴花开处照宫闱。"
   },
   {
    "id": "hlm-xiangling",
    "primaryName": "香菱",
    "names": [
     {
      "text": "甄英莲",
      "type": "本名",
      "note": "甄士隐之女"
     },
     {
      "text": "秋菱",
      "type": "后改名",
      "note": "夏金桂所改"
     },
     {
      "text": "菱姑娘",
      "type": "俗称",
      "note": ""
     }
    ],
    "gender": "女",
    "role": "薛蟠之妾，原为甄家被拐之女",
    "firstPage": 1,
    "appearances": [
     1,
     50,
     98,
     698,
     860,
     1087,
     1103,
     1282
    ],
    "locations": [
     {
      "place": "姑苏",
      "city": "苏州",
      "country": "中国",
      "fromPage": 1,
      "toPage": 1,
      "note": "出生地"
     },
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 98,
      "toPage": 1282,
      "note": "随薛家寄居"
     },
     {
      "place": "大观园·蘅芜苑",
      "city": "京城",
      "country": "中国",
      "fromPage": 698,
      "toPage": 1087,
      "note": "随宝钗同住学诗"
     }
    ],
    "factions": [
     {
      "name": "薛家",
      "group": "家族",
      "fromPage": 50,
      "toPage": 1282,
      "note": "为薛蟠妾室"
     },
     {
      "name": "丫鬟仆役",
      "group": "其他",
      "fromPage": 50,
      "toPage": 1282,
      "note": ""
     }
    ],
    "groups": [
     "薄命司",
     "大观园诗社"
    ],
    "experiences": [
     {
      "title": "元宵被拐",
      "fromPage": 1,
      "toPage": 1,
      "description": "三岁上元宵观灯被拐子抱去，自此与父母离散。"
     },
     {
      "title": "苦志学诗",
      "fromPage": 698,
      "toPage": 714,
      "description": "入大观园拜黛玉为师，苦吟数月，梦中得句。"
     },
     {
      "title": "受夏金桂折磨",
      "fromPage": 1087,
      "toPage": 1103,
      "description": "金桂入门后百般作践，改其名为秋菱，香菱忧愤成疾。"
     },
     {
      "title": "扶正而亡",
      "fromPage": 1282,
      "toPage": 1282,
      "description": "金桂自毒身亡后，香菱被扶为正室，然难产而逝。"
     }
    ],
    "ending": "被扶为正室后难产而亡",
    "endingPage": 1282,
    "note": "有命无运，根并荷花一茎香。"
   },
   {
    "id": "hlm-zijuan",
    "primaryName": "紫鹃",
    "names": [
     {
      "text": "紫鹃",
      "type": "本名",
      "note": ""
     },
     {
      "text": "鹦哥",
      "type": "原名",
      "note": "贾母房中旧名"
     }
    ],
    "gender": "女",
    "role": "林黛玉的贴身丫鬟",
    "firstPage": 114,
    "appearances": [
     114,
     390,
     828,
     1120,
     1201,
     1217
    ],
    "locations": [
     {
      "place": "荣国府·潇湘馆",
      "city": "京城",
      "country": "中国",
      "fromPage": 114,
      "toPage": 1217,
      "note": "侍奉黛玉"
     }
    ],
    "factions": [
     {
      "name": "丫鬟仆役",
      "group": "其他",
      "fromPage": 114,
      "toPage": 1217,
      "note": ""
     }
    ],
    "groups": [
     "丫鬟"
    ],
    "experiences": [
     {
      "title": "贾母派与黛玉",
      "fromPage": 114,
      "toPage": 114,
      "description": "由贾母房中拨与黛玉使唤，自此形影不离。"
     },
     {
      "title": "慧紫鹃情辞试忙玉",
      "fromPage": 828,
      "toPage": 828,
      "description": "假说黛玉要回苏州，试探宝玉真心，致其急痛攻心。"
     },
     {
      "title": "苦劝黛玉早定终身",
      "fromPage": 1120,
      "toPage": 1120,
      "description": "劝黛玉趁贾母在时早作打算，黛玉无言以对。"
     },
     {
      "title": "随惜春出家",
      "fromPage": 1217,
      "toPage": 1460,
      "description": "黛玉亡后心灰，随惜春在栊翠庵修行。"
     }
    ],
    "ending": "黛玉亡故后随惜春出家修行",
    "endingPage": 1460,
    "note": "忠心耿耿，黛玉之知己。"
   },
   {
    "id": "hlm-yuanyang",
    "primaryName": "鸳鸯",
    "names": [
     {
      "text": "鸳鸯",
      "type": "本名",
      "note": ""
     },
     {
      "text": "金鸳鸯",
      "type": "俗称",
      "note": "姓金"
     }
    ],
    "gender": "女",
    "role": "贾母房中首席大丫鬟",
    "firstPage": 309,
    "appearances": [
     309,
     568,
     666,
     795,
     974,
     1379
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 309,
      "toPage": 1379,
      "note": "侍奉贾母"
     }
    ],
    "factions": [
     {
      "name": "丫鬟仆役",
      "group": "其他",
      "fromPage": 309,
      "toPage": 1379,
      "note": ""
     }
    ],
    "groups": [
     "丫鬟"
    ],
    "experiences": [
     {
      "title": "誓绝鸳鸯偶",
      "fromPage": 666,
      "toPage": 666,
      "description": "贾赦逼娶，当众剪发立誓，宁死不从。"
     },
     {
      "title": "掌贾母体己",
      "fromPage": 568,
      "toPage": 795,
      "description": "掌管贾母私房财物，府中上下无不敬重。"
     },
     {
      "title": "殉主自尽",
      "fromPage": 1379,
      "toPage": 1379,
      "description": "贾母去世后不愿受贾赦摆布，悬梁自尽以殉。"
     }
    ],
    "ending": "贾母去世后悬梁殉主",
    "endingPage": 1379,
    "note": "刚烈有骨气，丫鬟中第一等人物。"
   },
   {
    "id": "hlm-jiashe",
    "primaryName": "贾赦",
    "names": [
     {
      "text": "恩侯",
      "type": "表字",
      "note": ""
     },
     {
      "text": "大老爷",
      "type": "尊称",
      "note": "府中通称"
     }
    ],
    "gender": "男",
    "role": "荣国府长房老爷，世袭一等将军",
    "firstPage": 33,
    "appearances": [
     33,
     374,
     666,
     698,
     941,
     1022,
     1314
    ],
    "locations": [
     {
      "place": "荣国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 33,
      "toPage": 1314,
      "note": "别院居住"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 33,
      "toPage": 1314,
      "note": ""
     }
    ],
    "groups": [
     "长辈"
    ],
    "experiences": [
     {
      "title": "强索石呆子扇子",
      "fromPage": 698,
      "toPage": 698,
      "description": "为夺古扇勾结贾雨村，害得石呆子倾家败产。"
     },
     {
      "title": "欲娶鸳鸯为妾",
      "fromPage": 666,
      "toPage": 666,
      "description": "命邢夫人说合，遣鸳鸯拒绝，恼羞成怒。"
     },
     {
      "title": "嫁女迎春",
      "fromPage": 1087,
      "toPage": 1087,
      "description": "为抵孙家债务，将迎春许配孙绍祖，致其惨死。"
     },
     {
      "title": "获罪革职",
      "fromPage": 1314,
      "toPage": 1314,
      "description": "因交通外官、恃强凌弱被参，革去世职，发往台站效力。"
     }
    ],
    "ending": "革职抄家后发往台站效力，病死途中",
    "endingPage": 1314,
    "note": "好色贪财，不理家务。"
   },
   {
    "id": "hlm-jiajing",
    "primaryName": "贾敬",
    "names": [
     {
      "text": "贾敬",
      "type": "本名",
      "note": ""
     },
     {
      "text": "敬老爷",
      "type": "尊称",
      "note": "府中通称"
     }
    ],
    "gender": "男",
    "role": "宁国府上一代家主，乙卯科进士",
    "firstPage": 17,
    "appearances": [
     17,
     163,
     196,
     763,
     876,
     893
    ],
    "locations": [
     {
      "place": "都中城外玄真观",
      "city": "京城",
      "country": "中国",
      "fromPage": 17,
      "toPage": 876,
      "note": "烧丹炼汞，久居观中"
     },
     {
      "place": "宁国府",
      "city": "京城",
      "country": "中国",
      "fromPage": 17,
      "toPage": 17,
      "note": "本家"
     }
    ],
    "factions": [
     {
      "name": "贾府",
      "group": "家族",
      "fromPage": 17,
      "toPage": 876,
      "note": ""
     },
     {
      "name": "僧道",
      "group": "其他",
      "fromPage": 17,
      "toPage": 876,
      "note": "一心修道炼丹"
     }
    ],
    "groups": [
     "长辈"
    ],
    "experiences": [
     {
      "title": "弃家修道",
      "fromPage": 17,
      "toPage": 17,
      "description": "一味好道，把官爵让与儿子贾珍，只在都中城外和道士们胡羼。"
     },
     {
      "title": "吞丹砂而亡",
      "fromPage": 876,
      "toPage": 876,
      "description": "因守庚申服丹砂烧胀而死，宁国府大办丧事。"
     }
    ],
    "ending": "服丹砂中毒烧胀而亡",
    "endingPage": 876,
    "note": "虚有其表的进士，一味求仙问道。"
   }
  ],
  "relations": [
   {
    "id": "hlm-r1",
    "from": "hlm-baoyu",
    "to": "hlm-daiyu",
    "type": "表兄妹/知己",
    "category": "情感",
    "sincePage": 114,
    "untilPage": 1217,
    "directed": false,
    "note": "木石前盟，自幼同处一处"
   },
   {
    "id": "hlm-r2",
    "from": "hlm-baoyu",
    "to": "hlm-baochai",
    "type": "夫妻",
    "category": "婚姻",
    "sincePage": 1201,
    "untilPage": null,
    "directed": false,
    "note": "金玉良缘，成婚即分离"
   },
   {
    "id": "hlm-r3",
    "from": "hlm-jiazheng",
    "to": "hlm-baoyu",
    "type": "父子",
    "category": "亲属",
    "sincePage": 33,
    "untilPage": null,
    "directed": true,
    "note": "教子极严，曾笞挞几死"
   },
   {
    "id": "hlm-r4",
    "from": "hlm-wangfuren",
    "to": "hlm-baoyu",
    "type": "母子",
    "category": "亲属",
    "sincePage": 33,
    "untilPage": null,
    "directed": true,
    "note": "溺爱而严管"
   },
   {
    "id": "hlm-r5",
    "from": "hlm-jiamu",
    "to": "hlm-baoyu",
    "type": "祖孙",
    "category": "亲属",
    "sincePage": 33,
    "untilPage": 1363,
    "directed": true,
    "note": "视若掌上明珠"
   },
   {
    "id": "hlm-r6",
    "from": "hlm-jiamu",
    "to": "hlm-daiyu",
    "type": "外祖母与外孙女",
    "category": "亲属",
    "sincePage": 114,
    "untilPage": 1363,
    "directed": true,
    "note": "怜其失母，接来教养"
   },
   {
    "id": "hlm-r7",
    "from": "hlm-jialian",
    "to": "hlm-xifeng",
    "type": "夫妻",
    "category": "婚姻",
    "sincePage": 98,
    "untilPage": 1428,
    "directed": false,
    "note": "同床异梦，各怀私心"
   },
   {
    "id": "hlm-r8",
    "from": "hlm-xifeng",
    "to": "hlm-pinger",
    "type": "主仆/通房",
    "category": "主仆",
    "sincePage": 82,
    "untilPage": 1428,
    "directed": true,
    "note": "倚为心腹臂膀"
   },
   {
    "id": "hlm-r9",
    "from": "hlm-pinger",
    "to": "hlm-jialian",
    "type": "夫妻",
    "category": "婚姻",
    "sincePage": 1476,
    "untilPage": null,
    "directed": false,
    "note": "凤姐亡后被扶为正室"
   },
   {
    "id": "hlm-r10",
    "from": "hlm-xiren",
    "to": "hlm-baoyu",
    "type": "主仆",
    "category": "主仆",
    "sincePage": 33,
    "untilPage": 1493,
    "directed": true,
    "note": "贴身侍奉，规劝向学"
   },
   {
    "id": "hlm-r11",
    "from": "hlm-qingwen",
    "to": "hlm-baoyu",
    "type": "主仆",
    "category": "主仆",
    "sincePage": 66,
    "untilPage": 1071,
    "directed": true,
    "note": "情深而口角不断"
   },
   {
    "id": "hlm-r12",
    "from": "hlm-xiren",
    "to": "hlm-qingwen",
    "type": "同房丫鬟/暗中相争",
    "category": "其他",
    "sincePage": 66,
    "untilPage": 1071,
    "directed": false,
    "note": "同侍一主而性情相左"
   },
   {
    "id": "hlm-r13",
    "from": "hlm-zijuan",
    "to": "hlm-daiyu",
    "type": "主仆",
    "category": "主仆",
    "sincePage": 114,
    "untilPage": 1217,
    "directed": true,
    "note": "情同姐妹"
   },
   {
    "id": "hlm-r14",
    "from": "hlm-yuanyang",
    "to": "hlm-jiamu",
    "type": "主仆",
    "category": "主仆",
    "sincePage": 309,
    "untilPage": 1379,
    "directed": true,
    "note": "掌其私房，忠贞不二"
   },
   {
    "id": "hlm-r15",
    "from": "hlm-jiashe",
    "to": "hlm-yuanyang",
    "type": "逼婚",
    "category": "敌对",
    "sincePage": 666,
    "untilPage": 1379,
    "directed": true,
    "note": "欲纳为妾，遭其死拒"
   },
   {
    "id": "hlm-r16",
    "from": "hlm-jiashe",
    "to": "hlm-jialian",
    "type": "父子",
    "category": "亲属",
    "sincePage": 33,
    "untilPage": 1314,
    "directed": true,
    "note": "长房一脉"
   },
   {
    "id": "hlm-r17",
    "from": "hlm-jiashe",
    "to": "hlm-yingchun",
    "type": "父女",
    "category": "亲属",
    "sincePage": 33,
    "untilPage": 1347,
    "directed": true,
    "note": "为抵债将其嫁与孙绍祖"
   },
   {
    "id": "hlm-r18",
    "from": "hlm-jiazheng",
    "to": "hlm-yuanchun",
    "type": "父女",
    "category": "亲属",
    "sincePage": 17,
    "untilPage": 1168,
    "directed": true,
    "note": "长女入宫为妃"
   },
   {
    "id": "hlm-r19",
    "from": "hlm-yuanchun",
    "to": "hlm-baoyu",
    "type": "姐弟",
    "category": "亲属",
    "sincePage": 17,
    "untilPage": 1168,
    "directed": true,
    "note": "自幼教授宝玉读书识字"
   },
   {
    "id": "hlm-r20",
    "from": "hlm-jiazhen",
    "to": "hlm-jiajing",
    "type": "父子",
    "category": "亲属",
    "sincePage": 17,
    "untilPage": 876,
    "directed": true,
    "note": "贾敬弃家修道，爵位让与贾珍"
   },
   {
    "id": "hlm-r21",
    "from": "hlm-jiazhen",
    "to": "hlm-jiarong",
    "type": "父子",
    "category": "亲属",
    "sincePage": 98,
    "untilPage": 1314,
    "directed": true,
    "note": "宁国府一脉"
   },
   {
    "id": "hlm-r22",
    "from": "hlm-jiarong",
    "to": "hlm-qinkeqing",
    "type": "夫妻",
    "category": "婚姻",
    "sincePage": 66,
    "untilPage": 212,
    "directed": false,
    "note": "少年夫妻，妻早亡"
   },
   {
    "id": "hlm-r23",
    "from": "hlm-jiazhen",
    "to": "hlm-qinkeqing",
    "type": "翁媳私情",
    "category": "其他",
    "sincePage": 98,
    "untilPage": 212,
    "directed": true,
    "note": "天香楼事件的根由"
   },
   {
    "id": "hlm-r24",
    "from": "hlm-qinkeqing",
    "to": "hlm-xifeng",
    "type": "托梦嘱托",
    "category": "师友",
    "sincePage": 196,
    "untilPage": 196,
    "directed": true,
    "note": "嘱置祭祀产业以备败落"
   },
   {
    "id": "hlm-r25",
    "from": "hlm-xifeng",
    "to": "hlm-jiamu",
    "type": "祖孙媳",
    "category": "亲属",
    "sincePage": 98,
    "untilPage": 1363,
    "directed": true,
    "note": "曲意奉承，深得欢心"
   },
   {
    "id": "hlm-r26",
    "from": "hlm-wangfuren",
    "to": "hlm-xifeng",
    "type": "姑侄",
    "category": "亲属",
    "sincePage": 98,
    "untilPage": 1428,
    "directed": true,
    "note": "王夫人内侄女，同掌家务"
   },
   {
    "id": "hlm-r27",
    "from": "hlm-wangfuren",
    "to": "hlm-xuepan",
    "type": "姨甥",
    "category": "亲属",
    "sincePage": 568,
    "untilPage": 1493,
    "directed": true,
    "note": "薛姨妈之子"
   },
   {
    "id": "hlm-r28",
    "from": "hlm-baochai",
    "to": "hlm-xuepan",
    "type": "兄妹",
    "category": "亲属",
    "sincePage": 568,
    "untilPage": 1493,
    "directed": false,
    "note": "兄妹性情迥异"
   },
   {
    "id": "hlm-r29",
    "from": "hlm-baochai",
    "to": "hlm-daiyu",
    "type": "金兰契",
    "category": "师友",
    "sincePage": 601,
    "untilPage": 1217,
    "directed": false,
    "note": "由猜忌而推心置腹"
   },
   {
    "id": "hlm-r30",
    "from": "hlm-liwan",
    "to": "hlm-tanchun",
    "type": "姑嫂/同理事",
    "category": "亲属",
    "sincePage": 795,
    "untilPage": 812,
    "directed": false,
    "note": "共理家务，除宿弊"
   },
   {
    "id": "hlm-r31",
    "from": "hlm-tanchun",
    "to": "hlm-baoyu",
    "type": "兄妹",
    "category": "亲属",
    "sincePage": 33,
    "untilPage": 1266,
    "directed": false,
    "note": "同父异母"
   },
   {
    "id": "hlm-r32",
    "from": "hlm-tanchun",
    "to": "hlm-yingchun",
    "type": "姐妹",
    "category": "亲属",
    "sincePage": 277,
    "untilPage": 1266,
    "directed": false,
    "note": "同为贾府小姐"
   },
   {
    "id": "hlm-r33",
    "from": "hlm-xichun",
    "to": "hlm-jiazhen",
    "type": "兄妹",
    "category": "亲属",
    "sincePage": 33,
    "untilPage": 1314,
    "directed": false,
    "note": "惜春为贾珍之妹，养于荣府"
   },
   {
    "id": "hlm-r34",
    "from": "hlm-xiangyun",
    "to": "hlm-daiyu",
    "type": "诗友",
    "category": "师友",
    "sincePage": 309,
    "untilPage": 1039,
    "directed": false,
    "note": "凹晶馆联句，同病相怜"
   },
   {
    "id": "hlm-r35",
    "from": "hlm-xiangyun",
    "to": "hlm-baoyu",
    "type": "青梅竹马",
    "category": "情感",
    "sincePage": 309,
    "untilPage": 1039,
    "directed": false,
    "note": "自幼相熟，性情相投"
   },
   {
    "id": "hlm-r36",
    "from": "hlm-miaoyu",
    "to": "hlm-baoyu",
    "type": "知己/槛外槛内",
    "category": "情感",
    "sincePage": 585,
    "untilPage": 1395,
    "directed": false,
    "note": "以茶相待，暗生情愫"
   },
   {
    "id": "hlm-r37",
    "from": "hlm-miaoyu",
    "to": "hlm-xichun",
    "type": "同道",
    "category": "师友",
    "sincePage": 260,
    "untilPage": 1460,
    "directed": false,
    "note": "同为大观园出家人"
   },
   {
    "id": "hlm-r38",
    "from": "hlm-liulaolao",
    "to": "hlm-xifeng",
    "type": "告贷/受济",
    "category": "其他",
    "sincePage": 82,
    "untilPage": 1428,
    "directed": true,
    "note": "三进荣国府，受其周济"
   },
   {
    "id": "hlm-r39",
    "from": "hlm-liulaolao",
    "to": "hlm-jiamu",
    "type": "远亲陪客",
    "category": "其他",
    "sincePage": 552,
    "untilPage": 601,
    "directed": true,
    "note": "陪贾母游园解闷"
   },
   {
    "id": "hlm-r40",
    "from": "hlm-yucun",
    "to": "hlm-shizhen",
    "type": "受恩者与恩人",
    "category": "师友",
    "sincePage": 1,
    "untilPage": 17,
    "directed": true,
    "note": "得甄士隐赠银方得赴考"
   },
   {
    "id": "hlm-r41",
    "from": "hlm-yucun",
    "to": "hlm-daiyu",
    "type": "业师",
    "category": "师友",
    "sincePage": 17,
    "untilPage": 33,
    "directed": true,
    "note": "曾为黛玉西席"
   },
   {
    "id": "hlm-r42",
    "from": "hlm-yucun",
    "to": "hlm-xuepan",
    "type": "徇私开脱",
    "category": "敌对",
    "sincePage": 50,
    "untilPage": 50,
    "directed": true,
    "note": "乱判葫芦案，纵放凶手"
   },
   {
    "id": "hlm-r43",
    "from": "hlm-shizhen",
    "to": "hlm-xiangling",
    "type": "父女",
    "category": "亲属",
    "sincePage": 1,
    "untilPage": 1,
    "directed": true,
    "note": "元宵失散，终生未再相见"
   },
   {
    "id": "hlm-r44",
    "from": "hlm-xiangling",
    "to": "hlm-xuepan",
    "type": "妾与夫主",
    "category": "婚姻",
    "sincePage": 50,
    "untilPage": 1282,
    "directed": true,
    "note": "被买为妾，备受冷落"
   },
   {
    "id": "hlm-r45",
    "from": "hlm-xiangling",
    "to": "hlm-daiyu",
    "type": "师徒",
    "category": "师友",
    "sincePage": 698,
    "untilPage": 714,
    "directed": true,
    "note": "拜黛玉学诗，苦志成名"
   },
   {
    "id": "hlm-r46",
    "from": "hlm-liwan",
    "to": "hlm-baoyu",
    "type": "嫂叔",
    "category": "亲属",
    "sincePage": 33,
    "untilPage": 1476,
    "directed": true,
    "note": "长嫂如母，照拂有加"
   },
   {
    "id": "hlm-r47",
    "from": "hlm-jiajing",
    "to": "hlm-jiazhen",
    "type": "教子无方",
    "category": "亲属",
    "sincePage": 17,
    "untilPage": 876,
    "directed": true,
    "note": "弃家修道，纵子胡为"
   },
   {
    "id": "hlm-r48",
    "from": "hlm-jiazheng",
    "to": "hlm-tanchun",
    "type": "父女",
    "category": "亲属",
    "sincePage": 33,
    "untilPage": 1266,
    "directed": true,
    "note": "虽为庶出而颇得看重"
   }
  ]
 },
 {
  "id": "sample-sanguoyanyi",
  "meta": {
   "title": "三国演义",
   "author": "罗贯中",
   "publisher": "人民文学出版社",
   "isbn": "978-7-02-000872-8",
   "edition": "中国古典文学读本丛书",
   "year": "1998",
   "totalPages": 1200,
   "currentPage": 1,
   "note": "以毛宗岗评本为底本校订，共一百二十回。"
  },
  "characters": [
   {
    "id": "sgy-liubei",
    "primaryName": "刘备",
    "names": [
     {
      "text": "玄德",
      "type": "表字",
      "note": ""
     },
     {
      "text": "刘皇叔",
      "type": "尊称",
      "note": "献帝排辈所认"
     },
     {
      "text": "汉昭烈帝",
      "type": "谥号",
      "note": "称帝后"
     }
    ],
    "gender": "男",
    "role": "蜀汉昭烈帝，汉室宗亲",
    "firstPage": 1,
    "appearances": [
     1,
     47,
     218,
     389,
     458,
     675,
     857,
     903,
     1200
    ],
    "locations": [
     {
      "place": "涿郡",
      "city": "涿郡",
      "country": "中国",
      "fromPage": 1,
      "toPage": 35,
      "note": "起兵之地"
     },
     {
      "place": "徐州",
      "city": "徐州",
      "country": "中国",
      "fromPage": 149,
      "toPage": 241,
      "note": "曾领徐州牧"
     },
     {
      "place": "荆州",
      "city": "荆州",
      "country": "中国",
      "fromPage": 321,
      "toPage": 675,
      "note": "依刘表，三顾茅庐"
     },
     {
      "place": "成都",
      "city": "成都",
      "country": "中国",
      "fromPage": 698,
      "toPage": 1200,
      "note": "定益州，建国称帝"
     },
     {
      "place": "白帝城",
      "city": "白帝城",
      "country": "中国",
      "fromPage": 903,
      "toPage": 1200,
      "note": "托孤之所"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 1,
      "toPage": 1200,
      "note": "自领益州牧至称帝"
     },
     {
      "name": "汉室",
      "group": "政权",
      "fromPage": 1,
      "toPage": 743,
      "note": "以兴复汉室为号"
     },
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 1,
      "toPage": 640,
      "note": "早期辗转依附各方"
     }
    ],
    "groups": [
     "主角",
     "君主"
    ],
    "experiences": [
     {
      "title": "桃园结义",
      "fromPage": 1,
      "toPage": 1,
      "description": "与关羽、张飞于桃园祭告天地，结为异姓兄弟。"
     },
     {
      "title": "三顾茅庐",
      "fromPage": 389,
      "toPage": 401,
      "description": "三次亲往隆中，请诸葛亮出山，得隆中对策。"
     },
     {
      "title": "进位汉中王",
      "fromPage": 766,
      "toPage": 766,
      "description": "取汉中后群臣劝进，自立为汉中王。"
     },
     {
      "title": "伐吴兵败",
      "fromPage": 857,
      "toPage": 892,
      "description": "为关羽报仇兴兵伐吴，被陆逊火烧连营七百里。"
     },
     {
      "title": "白帝托孤",
      "fromPage": 903,
      "toPage": 903,
      "description": "病重召诸葛亮于白帝城，托付刘禅与兴复之事。"
     }
    ],
    "ending": "夷陵兵败后病逝于白帝城，年六十三",
    "endingPage": 903,
    "note": "弘毅宽厚，知人待士。"
   },
   {
    "id": "sgy-guanyu",
    "primaryName": "关羽",
    "names": [
     {
      "text": "云长",
      "type": "表字",
      "note": ""
     },
     {
      "text": "关公",
      "type": "尊称",
      "note": "后世通称"
     },
     {
      "text": "美髯公",
      "type": "绰号",
      "note": "献帝所叹"
     },
     {
      "text": "汉寿亭侯",
      "type": "封号",
      "note": "曹操表封"
     }
    ],
    "gender": "男",
    "role": "蜀汉前将军，五虎上将之首",
    "firstPage": 1,
    "appearances": [
     1,
     47,
     195,
     264,
     275,
     538,
     709,
     777,
     812
    ],
    "locations": [
     {
      "place": "涿郡",
      "city": "涿郡",
      "country": "中国",
      "fromPage": 1,
      "toPage": 35,
      "note": "与刘备张飞起兵"
     },
     {
      "place": "许昌",
      "city": "许昌",
      "country": "中国",
      "fromPage": 241,
      "toPage": 275,
      "note": "降汉不降曹，暂居曹营"
     },
     {
      "place": "荆州",
      "city": "荆州",
      "country": "中国",
      "fromPage": 538,
      "toPage": 800,
      "note": "镇守荆州"
     },
     {
      "place": "麦城",
      "city": "麦城",
      "country": "中国",
      "fromPage": 800,
      "toPage": 812,
      "note": "败走被擒"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 1,
      "toPage": 812,
      "note": ""
     }
    ],
    "groups": [
     "主角",
     "武将",
     "五虎上将"
    ],
    "experiences": [
     {
      "title": "温酒斩华雄",
      "fromPage": 47,
      "toPage": 47,
      "description": "在汜水关前请战，酒尚温时已斩华雄首级而归。"
     },
     {
      "title": "千里走单骑",
      "fromPage": 275,
      "toPage": 286,
      "description": "挂印封金，过五关斩六将，护送二嫂寻兄。"
     },
     {
      "title": "华容道释曹操",
      "fromPage": 538,
      "toPage": 538,
      "description": "念旧日之恩，于华容道义释曹操。"
     },
     {
      "title": "水淹七军",
      "fromPage": 777,
      "toPage": 777,
      "description": "借秋雨决水淹于禁七军，威震华夏。"
     },
     {
      "title": "败走麦城",
      "fromPage": 800,
      "toPage": 812,
      "description": "大意失荆州，退守麦城，突围被擒遇害。"
     }
    ],
    "ending": "失荆州后退守麦城，被孙权部将擒杀",
    "endingPage": 812,
    "note": "义薄云天，刚而自矜。"
   },
   {
    "id": "sgy-zhangfei",
    "primaryName": "张飞",
    "names": [
     {
      "text": "翼德",
      "type": "表字",
      "note": ""
     },
     {
      "text": "燕人张飞",
      "type": "俗称",
      "note": "长坂桥自报家门"
     }
    ],
    "gender": "男",
    "role": "蜀汉车骑将军，五虎上将",
    "firstPage": 1,
    "appearances": [
     1,
     47,
     446,
     675,
     698,
     743,
     857
    ],
    "locations": [
     {
      "place": "涿郡",
      "city": "涿郡",
      "country": "中国",
      "fromPage": 1,
      "toPage": 35,
      "note": "结义起兵"
     },
     {
      "place": "长坂桥",
      "city": "当阳",
      "country": "中国",
      "fromPage": 446,
      "toPage": 446,
      "note": "喝退曹军"
     },
     {
      "place": "阆中",
      "city": "阆中",
      "country": "中国",
      "fromPage": 698,
      "toPage": 857,
      "note": "镇守阆中"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 1,
      "toPage": 857,
      "note": ""
     }
    ],
    "groups": [
     "主角",
     "武将",
     "五虎上将"
    ],
    "experiences": [
     {
      "title": "怒鞭督邮",
      "fromPage": 12,
      "toPage": 12,
      "description": "因督邮索贿刁难刘备，将其绑于树上痛打。"
     },
     {
      "title": "大闹长坂桥",
      "fromPage": 446,
      "toPage": 446,
      "description": "立马桥头三声大喝，吓退曹军，喝断桥梁水倒流。"
     },
     {
      "title": "义释严颜",
      "fromPage": 675,
      "toPage": 675,
      "description": "入川途中生擒严颜，感其忠义而释之，得以顺利入蜀。"
     },
     {
      "title": "巴西破张郃",
      "fromPage": 743,
      "toPage": 743,
      "description": "智取瓦口隘，大破张郃。"
     },
     {
      "title": "遇刺身亡",
      "fromPage": 857,
      "toPage": 857,
      "description": "为报关羽之仇急于伐吴，鞭挞士卒，被范疆张达刺杀。"
     }
    ],
    "ending": "鞭挞部下过甚，被范疆、张达刺杀于阆中",
    "endingPage": 857,
    "note": "勇猛而暴，敬爱君子而不恤小人。"
   },
   {
    "id": "sgy-zhugeliang",
    "primaryName": "诸葛亮",
    "names": [
     {
      "text": "孔明",
      "type": "表字",
      "note": ""
     },
     {
      "text": "卧龙",
      "type": "别号",
      "note": "司马徽所许"
     },
     {
      "text": "武乡侯",
      "type": "封号",
      "note": "后主所封"
     },
     {
      "text": "忠武侯",
      "type": "谥号",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "蜀汉丞相，录尚书事",
    "firstPage": 378,
    "appearances": [
     378,
     389,
     401,
     458,
     526,
     538,
     926,
     949,
     1074
    ],
    "locations": [
     {
      "place": "隆中",
      "city": "襄阳",
      "country": "中国",
      "fromPage": 378,
      "toPage": 401,
      "note": "躬耕隐居，刘备三顾"
     },
     {
      "place": "成都",
      "city": "成都",
      "country": "中国",
      "fromPage": 698,
      "toPage": 1074,
      "note": "治蜀理政"
     },
     {
      "place": "五丈原",
      "city": "五丈原",
      "country": "中国",
      "fromPage": 1063,
      "toPage": 1074,
      "note": "北伐病殁"
     },
     {
      "place": "柴桑",
      "city": "柴桑",
      "country": "中国",
      "fromPage": 458,
      "toPage": 469,
      "note": "舌战群儒，促成联盟"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 401,
      "toPage": 1074,
      "note": ""
     }
    ],
    "groups": [
     "主角",
     "谋士",
     "丞相"
    ],
    "experiences": [
     {
      "title": "隆中对策",
      "fromPage": 401,
      "toPage": 401,
      "description": "为刘备剖析天下大势，定三分之策。"
     },
     {
      "title": "舌战群儒",
      "fromPage": 458,
      "toPage": 458,
      "description": "出使江东，力排众议，促成孙刘联盟。"
     },
     {
      "title": "草船借箭与借东风",
      "fromPage": 492,
      "toPage": 526,
      "description": "赤壁之战中借箭十万，又设坛借东风助周瑜火攻。"
     },
     {
      "title": "七擒孟获",
      "fromPage": 926,
      "toPage": 937,
      "description": "南征不毛，七纵七擒，南人归心。"
     },
     {
      "title": "六出祁山",
      "fromPage": 949,
      "toPage": 1074,
      "description": "屡次北伐，与司马懿相持，终病殁于五丈原。"
     }
    ],
    "ending": "最后一次北伐中病逝于五丈原军中",
    "endingPage": 1074,
    "note": "鞠躬尽瘁，死而后已。"
   },
   {
    "id": "sgy-caocao",
    "primaryName": "曹操",
    "names": [
     {
      "text": "孟德",
      "type": "表字",
      "note": ""
     },
     {
      "text": "阿瞒",
      "type": "小名",
      "note": ""
     },
     {
      "text": "魏武帝",
      "type": "谥号",
      "note": "追尊"
     },
     {
      "text": "曹丞相",
      "type": "尊称",
      "note": "挟天子时"
     }
    ],
    "gender": "男",
    "role": "魏王、汉丞相，曹魏奠基者",
    "firstPage": 1,
    "appearances": [
     1,
     35,
     47,
     218,
     309,
     515,
     538,
     595,
     823
    ],
    "locations": [
     {
      "place": "洛阳",
      "city": "洛阳",
      "country": "中国",
      "fromPage": 1,
      "toPage": 104,
      "note": "早年任洛阳北部尉"
     },
     {
      "place": "许昌",
      "city": "许昌",
      "country": "中国",
      "fromPage": 149,
      "toPage": 823,
      "note": "迎献帝都许，建立基业"
     },
     {
      "place": "邺城",
      "city": "邺城",
      "country": "中国",
      "fromPage": 332,
      "toPage": 823,
      "note": "封魏王后的都城"
     },
     {
      "place": "赤壁",
      "city": "赤壁",
      "country": "中国",
      "fromPage": 515,
      "toPage": 538,
      "note": "大军败于火攻"
     }
    ],
    "factions": [
     {
      "name": "曹魏",
      "group": "政权",
      "fromPage": 47,
      "toPage": 823,
      "note": ""
     },
     {
      "name": "汉室",
      "group": "政权",
      "fromPage": 149,
      "toPage": 823,
      "note": "挟天子以令诸侯"
     }
    ],
    "groups": [
     "主角",
     "君主",
     "谋略"
    ],
    "experiences": [
     {
      "title": "刺董卓献刀",
      "fromPage": 35,
      "toPage": 35,
      "description": "借王允七宝刀入相府行刺，事败假称献刀脱身。"
     },
     {
      "title": "迎驾都许",
      "fromPage": 149,
      "toPage": 149,
      "description": "迎汉献帝迁都许昌，自此挟天子以令诸侯。"
     },
     {
      "title": "官渡破袁绍",
      "fromPage": 309,
      "toPage": 309,
      "description": "以寡敌众，火烧乌巢粮草，大破袁绍十万之众。"
     },
     {
      "title": "赤壁大败",
      "fromPage": 515,
      "toPage": 538,
      "description": "南下荆州，兵败赤壁，退走华容道。"
     },
     {
      "title": "进位魏王",
      "fromPage": 709,
      "toPage": 823,
      "description": "受九锡、称魏王，用天子车服，后病殁洛阳。"
     }
    ],
    "ending": "头风病重，病逝于洛阳，年六十六",
    "endingPage": 823,
    "note": "治世之能臣，乱世之奸雄。"
   },
   {
    "id": "sgy-sunquan",
    "primaryName": "孙权",
    "names": [
     {
      "text": "仲谋",
      "type": "表字",
      "note": ""
     },
     {
      "text": "吴大帝",
      "type": "谥号",
      "note": "称帝后"
     },
     {
      "text": "碧眼儿",
      "type": "绰号",
      "note": "曹操所叹"
     }
    ],
    "gender": "男",
    "role": "东吴大帝，江东之主",
    "firstPage": 70,
    "appearances": [
     70,
     298,
     401,
     458,
     526,
     583,
     652,
     869,
     1120
    ],
    "locations": [
     {
      "place": "江东",
      "city": "吴郡",
      "country": "中国",
      "fromPage": 70,
      "toPage": 298,
      "note": "继承父兄基业"
     },
     {
      "place": "建业",
      "city": "建业",
      "country": "中国",
      "fromPage": 401,
      "toPage": 1120,
      "note": "定都建业"
     },
     {
      "place": "赤壁",
      "city": "赤壁",
      "country": "中国",
      "fromPage": 515,
      "toPage": 538,
      "note": "联刘抗曹"
     }
    ],
    "factions": [
     {
      "name": "东吴",
      "group": "政权",
      "fromPage": 70,
      "toPage": 1120,
      "note": ""
     }
    ],
    "groups": [
     "君主"
    ],
    "experiences": [
     {
      "title": "继领江东",
      "fromPage": 298,
      "toPage": 298,
      "description": "孙策遇刺后临终授印，十八岁继领江东。"
     },
     {
      "title": "决计抗曹",
      "fromPage": 458,
      "toPage": 469,
      "description": "拔剑砍案，决意联刘备共拒曹操。"
     },
     {
      "title": "赤壁鏖兵",
      "fromPage": 526,
      "toPage": 538,
      "description": "任周瑜为都督，大破曹军于赤壁。"
     },
     {
      "title": "称帝建吴",
      "fromPage": 1029,
      "toPage": 1029,
      "description": "于武昌即帝位，国号吴，后迁都建业。"
     },
     {
      "title": "晚年猜忌",
      "fromPage": 1120,
      "toPage": 1120,
      "description": "废太子、杀子，群臣离心，病重托孤。"
     }
    ],
    "ending": "晚年猜忌多疑，病逝于建业，年七十一",
    "endingPage": 1120,
    "note": "生子当如孙仲谋。"
   },
   {
    "id": "sgy-zhouyu",
    "primaryName": "周瑜",
    "names": [
     {
      "text": "公瑾",
      "type": "表字",
      "note": ""
     },
     {
      "text": "周郎",
      "type": "俗称",
      "note": "江东人通称"
     },
     {
      "text": "大都督",
      "type": "官称",
      "note": "吴军水陆都督"
     }
    ],
    "gender": "男",
    "role": "东吴前部大都督",
    "firstPage": 161,
    "appearances": [
     161,
     401,
     469,
     481,
     492,
     526,
     549,
     595,
     606
    ],
    "locations": [
     {
      "place": "江东",
      "city": "吴郡",
      "country": "中国",
      "fromPage": 161,
      "toPage": 298,
      "note": "与孙策结交"
     },
     {
      "place": "柴桑",
      "city": "柴桑",
      "country": "中国",
      "fromPage": 469,
      "toPage": 606,
      "note": "都督府所在"
     },
     {
      "place": "赤壁",
      "city": "赤壁",
      "country": "中国",
      "fromPage": 515,
      "toPage": 538,
      "note": "火攻破曹之地"
     },
     {
      "place": "巴丘",
      "city": "巴丘",
      "country": "中国",
      "fromPage": 606,
      "toPage": 606,
      "note": "病卒于此"
     }
    ],
    "factions": [
     {
      "name": "东吴",
      "group": "政权",
      "fromPage": 161,
      "toPage": 606,
      "note": ""
     }
    ],
    "groups": [
     "武将",
     "都督"
    ],
    "experiences": [
     {
      "title": "与孙策结交",
      "fromPage": 161,
      "toPage": 161,
      "description": "与孙策同年，结为昆仲，相助定江东。"
     },
     {
      "title": "蒋干中计",
      "fromPage": 481,
      "toPage": 481,
      "description": "利用蒋干盗书，使曹操误杀水军都督蔡瑁、张允。"
     },
     {
      "title": "赤壁火攻",
      "fromPage": 526,
      "toPage": 538,
      "description": "用黄盖诈降、火烧连环船，大破曹军八十万。"
     },
     {
      "title": "气量狭促",
      "fromPage": 549,
      "toPage": 595,
      "description": "屡与诸葛亮斗智，三气之下金疮迸裂。"
     },
     {
      "title": "病卒巴丘",
      "fromPage": 606,
      "toPage": 606,
      "description": "取西川之计不成，仰天长叹既生瑜何生亮而亡。"
     }
    ],
    "ending": "与诸葛亮相争失利，金疮迸裂病卒于巴丘",
    "endingPage": 606,
    "note": "雄姿英发，然心胸不广。"
   },
   {
    "id": "sgy-lvbu",
    "primaryName": "吕布",
    "names": [
     {
      "text": "奉先",
      "type": "表字",
      "note": ""
     },
     {
      "text": "飞将",
      "type": "别号",
      "note": "人称人中吕布"
     },
     {
      "text": "三姓家奴",
      "type": "绰号",
      "note": "张飞所骂"
     }
    ],
    "gender": "男",
    "role": "汉末名将，曾领徐州牧",
    "firstPage": 24,
    "appearances": [
     24,
     35,
     47,
     81,
     115,
     138,
     172,
     195
    ],
    "locations": [
     {
      "place": "洛阳",
      "city": "洛阳",
      "country": "中国",
      "fromPage": 24,
      "toPage": 92,
      "note": "先后事丁原、董卓"
     },
     {
      "place": "长安",
      "city": "长安",
      "country": "中国",
      "fromPage": 92,
      "toPage": 138,
      "note": "诛董卓后镇守"
     },
     {
      "place": "徐州",
      "city": "徐州",
      "country": "中国",
      "fromPage": 149,
      "toPage": 195,
      "note": "据徐州自守"
     },
     {
      "place": "下邳",
      "city": "下邳",
      "country": "中国",
      "fromPage": 195,
      "toPage": 195,
      "note": "白门楼被擒"
     }
    ],
    "factions": [
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 24,
      "toPage": 195,
      "note": "反复自立，终归覆灭"
     }
    ],
    "groups": [
     "武将",
     "群雄"
    ],
    "experiences": [
     {
      "title": "杀丁原投董卓",
      "fromPage": 24,
      "toPage": 24,
      "description": "受李肃金珠赤兔之诱，斩义父丁原首级献董卓。"
     },
     {
      "title": "虎牢关战三英",
      "fromPage": 47,
      "toPage": 47,
      "description": "在虎牢关前独战刘关张三人，全身而退。"
     },
     {
      "title": "诛杀董卓",
      "fromPage": 92,
      "toPage": 92,
      "description": "与王允合谋，于未央宫前刺杀义父董卓。"
     },
     {
      "title": "辕门射戟",
      "fromPage": 172,
      "toPage": 172,
      "description": "一箭射中辕门画戟小枝，为刘备解纪灵之围。"
     },
     {
      "title": "白门楼殒命",
      "fromPage": 195,
      "toPage": 195,
      "description": "下邳兵败被擒，求刘备说情不成，被曹操缢杀。"
     }
    ],
    "ending": "下邳城破被擒，于白门楼被曹操缢杀",
    "endingPage": 195,
    "note": "勇冠三军而反复无常。"
   },
   {
    "id": "sgy-dongzhuo",
    "primaryName": "董卓",
    "names": [
     {
      "text": "仲颖",
      "type": "表字",
      "note": ""
     },
     {
      "text": "董太师",
      "type": "尊称",
      "note": "自任太师"
     },
     {
      "text": "董相国",
      "type": "官称",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "东汉相国，西凉军阀",
    "firstPage": 12,
    "appearances": [
     12,
     24,
     35,
     47,
     58,
     81,
     92
    ],
    "locations": [
     {
      "place": "西凉",
      "city": "西凉",
      "country": "中国",
      "fromPage": 12,
      "toPage": 24,
      "note": "起兵之地"
     },
     {
      "place": "洛阳",
      "city": "洛阳",
      "country": "中国",
      "fromPage": 24,
      "toPage": 58,
      "note": "入京专政，焚城迁都"
     },
     {
      "place": "长安",
      "city": "长安",
      "country": "中国",
      "fromPage": 58,
      "toPage": 92,
      "note": "迁都后所居，筑郿坞"
     }
    ],
    "factions": [
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 12,
      "toPage": 92,
      "note": "祸乱朝纲，为天下所讨"
     },
     {
      "name": "汉室",
      "group": "政权",
      "fromPage": 12,
      "toPage": 92,
      "note": "以相国之名把持朝政"
     }
    ],
    "groups": [
     "君主",
     "群雄"
    ],
    "experiences": [
     {
      "title": "入京专权",
      "fromPage": 24,
      "toPage": 24,
      "description": "应何进之召率西凉兵入洛阳，遂废少帝立献帝。"
     },
     {
      "title": "焚烧洛阳迁都",
      "fromPage": 58,
      "toPage": 58,
      "description": "为避关东联军，焚洛阳宫室，驱民西迁长安。"
     },
     {
      "title": "筑郿坞",
      "fromPage": 81,
      "toPage": 81,
      "description": "于郿坞积粮储金，号万岁坞，自以为可守三十年。"
     },
     {
      "title": "死于吕布之手",
      "fromPage": 92,
      "toPage": 92,
      "description": "受王允连环计所惑，入朝时被吕布一戟刺死。"
     }
    ],
    "ending": "中王允连环计，被义子吕布刺杀于长安",
    "endingPage": 92,
    "note": "残暴不仁，终致身死族灭。"
   },
   {
    "id": "sgy-yuanshao",
    "primaryName": "袁绍",
    "names": [
     {
      "text": "本初",
      "type": "表字",
      "note": ""
     },
     {
      "text": "袁本初",
      "type": "俗称",
      "note": "四世三公之后"
     },
     {
      "text": "袁车骑",
      "type": "官称",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "汉末冀州牧，关东联军盟主",
    "firstPage": 12,
    "appearances": [
     12,
     24,
     47,
     58,
     229,
     241,
     309,
     332
    ],
    "locations": [
     {
      "place": "洛阳",
      "city": "洛阳",
      "country": "中国",
      "fromPage": 12,
      "toPage": 58,
      "note": "起兵讨董"
     },
     {
      "place": "冀州",
      "city": "冀州",
      "country": "中国",
      "fromPage": 70,
      "toPage": 332,
      "note": "据河北四州"
     },
     {
      "place": "官渡",
      "city": "官渡",
      "country": "中国",
      "fromPage": 309,
      "toPage": 309,
      "note": "大败于曹操"
     }
    ],
    "factions": [
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 12,
      "toPage": 332,
      "note": "雄踞河北，终为曹操所并"
     }
    ],
    "groups": [
     "君主",
     "群雄"
    ],
    "experiences": [
     {
      "title": "为关东联军盟主",
      "fromPage": 47,
      "toPage": 47,
      "description": "十八路诸侯讨董卓，被推为盟主，然号令不行。"
     },
     {
      "title": "夺冀州",
      "fromPage": 70,
      "toPage": 70,
      "description": "用逢纪之计，取韩馥冀州以为根基。"
     },
     {
      "title": "官渡之战",
      "fromPage": 309,
      "toPage": 309,
      "description": "不听沮授、田丰之谏，乌巢粮焚，七十万大军溃散。"
     },
     {
      "title": "仓亭再败",
      "fromPage": 321,
      "toPage": 321,
      "description": "收拾残部再战，又败于曹操，自此一蹶不振。"
     }
    ],
    "ending": "官渡兵败后呕血而死",
    "endingPage": 332,
    "note": "外宽内忌，好谋无决。"
   },
   {
    "id": "sgy-zhaoyun",
    "primaryName": "赵云",
    "names": [
     {
      "text": "子龙",
      "type": "表字",
      "note": ""
     },
     {
      "text": "虎威将军",
      "type": "封号",
      "note": ""
     },
     {
      "text": "常山赵子龙",
      "type": "俗称",
      "note": "自报家门"
     }
    ],
    "gender": "男",
    "role": "蜀汉镇军将军，五虎上将",
    "firstPage": 70,
    "appearances": [
     70,
     286,
     435,
     446,
     561,
     652,
     755,
     1017
    ],
    "locations": [
     {
      "place": "常山",
      "city": "常山",
      "country": "中国",
      "fromPage": 70,
      "toPage": 70,
      "note": "本籍"
     },
     {
      "place": "长坂坡",
      "city": "当阳",
      "country": "中国",
      "fromPage": 435,
      "toPage": 446,
      "note": "单骑救主"
     },
     {
      "place": "成都",
      "city": "成都",
      "country": "中国",
      "fromPage": 698,
      "toPage": 1017,
      "note": "随刘备入蜀"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 286,
      "toPage": 1017,
      "note": ""
     },
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 70,
      "toPage": 286,
      "note": "先事公孙瓒"
     }
    ],
    "groups": [
     "武将",
     "五虎上将"
    ],
    "experiences": [
     {
      "title": "长坂坡救阿斗",
      "fromPage": 435,
      "toPage": 446,
      "description": "单骑冲阵，怀抱幼主血战曹军，斩将五十余员。"
     },
     {
      "title": "截江夺阿斗",
      "fromPage": 652,
      "toPage": 652,
      "description": "孙夫人欲携阿斗归吴，赵云张飞截江夺回。"
     },
     {
      "title": "汉水破敌",
      "fromPage": 755,
      "toPage": 755,
      "description": "偃旗息鼓，以寡击众，大败曹军，被赞一身是胆。"
     },
     {
      "title": "力谏伐吴",
      "fromPage": 857,
      "toPage": 857,
      "description": "劝刘备先灭魏后伐吴，不被采纳。"
     }
    ],
    "ending": "随诸葛亮北伐，病卒于成都",
    "endingPage": 1017,
    "note": "一身是胆，常胜将军。"
   },
   {
    "id": "sgy-simayi",
    "primaryName": "司马懿",
    "names": [
     {
      "text": "仲达",
      "type": "表字",
      "note": ""
     },
     {
      "text": "冢虎",
      "type": "别号",
      "note": "时人语"
     },
     {
      "text": "晋宣帝",
      "type": "谥号",
      "note": "追尊"
     }
    ],
    "gender": "男",
    "role": "曹魏大将军、太尉，晋室奠基者",
    "firstPage": 412,
    "appearances": [
     412,
     720,
     755,
     949,
     994,
     1040,
     1063,
     1097,
     1120
    ],
    "locations": [
     {
      "place": "许昌",
      "city": "许昌",
      "country": "中国",
      "fromPage": 412,
      "toPage": 823,
      "note": "事曹操父子"
     },
     {
      "place": "洛阳",
      "city": "洛阳",
      "country": "中国",
      "fromPage": 949,
      "toPage": 1120,
      "note": "掌魏国兵权"
     },
     {
      "place": "五丈原",
      "city": "五丈原",
      "country": "中国",
      "fromPage": 1063,
      "toPage": 1074,
      "note": "与诸葛亮相持"
     },
     {
      "place": "祁山",
      "city": "祁山",
      "country": "中国",
      "fromPage": 994,
      "toPage": 1063,
      "note": "屡拒蜀军"
     }
    ],
    "factions": [
     {
      "name": "曹魏",
      "group": "政权",
      "fromPage": 412,
      "toPage": 1120,
      "note": ""
     }
    ],
    "groups": [
     "谋士",
     "统帅"
    ],
    "experiences": [
     {
      "title": "装病避召",
      "fromPage": 412,
      "toPage": 412,
      "description": "曹操征召时诈称风痹，后不得已出仕。"
     },
     {
      "title": "克日擒孟达",
      "fromPage": 983,
      "toPage": 983,
      "description": "八日行军千二百里，出其不意斩杀叛将孟达。"
     },
     {
      "title": "拒守不战",
      "fromPage": 1063,
      "toPage": 1074,
      "description": "与诸葛亮相持于五丈原，坚壁不出，终待其病殁。"
     },
     {
      "title": "高平陵之变",
      "fromPage": 1097,
      "toPage": 1109,
      "description": "趁曹爽出城祭陵，闭门夺权，诛曹爽三族，尽握魏政。"
     }
    ],
    "ending": "诛曹爽专魏政，病逝于洛阳",
    "endingPage": 1120,
    "note": "鹰视狼顾，隐忍善谋。"
   },
   {
    "id": "sgy-diaochan",
    "primaryName": "貂蝉",
    "names": [
     {
      "text": "貂蝉",
      "type": "本名",
      "note": ""
     },
     {
      "text": "闭月",
      "type": "别号",
      "note": "传说美貌之称"
     }
    ],
    "gender": "女",
    "role": "王允府中歌伎，连环计主角",
    "firstPage": 81,
    "appearances": [
     81,
     92,
     195
    ],
    "locations": [
     {
      "place": "长安",
      "city": "长安",
      "country": "中国",
      "fromPage": 81,
      "toPage": 92,
      "note": "王允府中"
     },
     {
      "place": "郿坞",
      "city": "长安",
      "country": "中国",
      "fromPage": 92,
      "toPage": 92,
      "note": "随董卓前往"
     }
    ],
    "factions": [
     {
      "name": "汉室",
      "group": "政权",
      "fromPage": 81,
      "toPage": 92,
      "note": "助王允除董卓"
     }
    ],
    "groups": [
     "女性",
     "义士"
    ],
    "experiences": [
     {
      "title": "受王允之托",
      "fromPage": 81,
      "toPage": 81,
      "description": "月下长叹为允所闻，遂许以身许国，行连环之计。"
     },
     {
      "title": "离间董吕",
      "fromPage": 81,
      "toPage": 92,
      "description": "先许吕布，后献董卓，于两人间播弄是非。"
     },
     {
      "title": "凤仪亭相会",
      "fromPage": 81,
      "toPage": 92,
      "description": "与吕布私会凤仪亭，激其杀心。"
     }
    ],
    "ending": "董卓死后归于吕布，吕布亡后下落不明",
    "endingPage": null,
    "note": "中国古代四大美女之一，义烈可嘉。"
   },
   {
    "id": "sgy-zhangliao",
    "primaryName": "张辽",
    "names": [
     {
      "text": "文远",
      "type": "表字",
      "note": ""
     },
     {
      "text": "张辽止啼",
      "type": "俗称",
      "note": "江东小儿闻之不敢啼"
     }
    ],
    "gender": "男",
    "role": "曹魏征东将军，五子良将",
    "firstPage": 115,
    "appearances": [
     115,
     195,
     207,
     252,
     572,
     720,
     743,
     915
    ],
    "locations": [
     {
      "place": "洛阳",
      "city": "洛阳",
      "country": "中国",
      "fromPage": 115,
      "toPage": 195,
      "note": "先后事丁原吕布"
     },
     {
      "place": "许昌",
      "city": "许昌",
      "country": "中国",
      "fromPage": 207,
      "toPage": 915,
      "note": "归曹操后"
     },
     {
      "place": "合肥",
      "city": "合肥",
      "country": "中国",
      "fromPage": 720,
      "toPage": 743,
      "note": "逍遥津大破吴军"
     }
    ],
    "factions": [
     {
      "name": "曹魏",
      "group": "政权",
      "fromPage": 207,
      "toPage": 915,
      "note": ""
     },
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 115,
      "toPage": 195,
      "note": "原为吕布部将"
     }
    ],
    "groups": [
     "武将",
     "五子良将"
    ],
    "experiences": [
     {
      "title": "归降曹操",
      "fromPage": 207,
      "toPage": 207,
      "description": "白门楼后吕布伏诛，张辽骂贼不屈，曹操释而用之。"
     },
     {
      "title": "说降关羽",
      "fromPage": 252,
      "toPage": 252,
      "description": "奉命登土山劝说关羽，约三事而降汉不降曹。"
     },
     {
      "title": "逍遥津大捷",
      "fromPage": 720,
      "toPage": 720,
      "description": "以八百人袭孙权十万大军，威震江东。"
     },
     {
      "title": "带病破吴",
      "fromPage": 915,
      "toPage": 915,
      "description": "抱病出征，大败吕范，病卒于军中。"
     }
    ],
    "ending": "抱病大破吴军，病卒于江都军中",
    "endingPage": 915,
    "note": "曹魏五子良将之首，威名远播。"
   },
   {
    "id": "sgy-huangzhong",
    "primaryName": "黄忠",
    "names": [
     {
      "text": "汉升",
      "type": "表字",
      "note": ""
     },
     {
      "text": "老将黄忠",
      "type": "俗称",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "蜀汉后将军，五虎上将",
    "firstPage": 572,
    "appearances": [
     572,
     663,
     743,
     755,
     766,
     857,
     880
    ],
    "locations": [
     {
      "place": "长沙",
      "city": "长沙",
      "country": "中国",
      "fromPage": 572,
      "toPage": 572,
      "note": "原为韩玄部下"
     },
     {
      "place": "葭萌关",
      "city": "葭萌关",
      "country": "中国",
      "fromPage": 663,
      "toPage": 663,
      "note": "入川作战"
     },
     {
      "place": "定军山",
      "city": "汉中",
      "country": "中国",
      "fromPage": 743,
      "toPage": 755,
      "note": "斩夏侯渊"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 572,
      "toPage": 880,
      "note": ""
     }
    ],
    "groups": [
     "武将",
     "五虎上将"
    ],
    "experiences": [
     {
      "title": "长沙归降",
      "fromPage": 572,
      "toPage": 572,
      "description": "关羽取长沙，魏延杀韩玄，黄忠归顺刘备。"
     },
     {
      "title": "定军山斩夏侯渊",
      "fromPage": 743,
      "toPage": 755,
      "description": "法正设计，黄忠居高临下鼓噪突袭，阵斩夏侯渊。"
     },
     {
      "title": "被封后将军",
      "fromPage": 766,
      "toPage": 766,
      "description": "刘备进位汉中王，封关张赵马黄为五虎大将。"
     },
     {
      "title": "伐吴中箭",
      "fromPage": 880,
      "toPage": 880,
      "description": "随刘备伐吴，中箭重伤，年七十五而亡。"
     }
    ],
    "ending": "随刘备伐吴时中箭，伤重而亡",
    "endingPage": 880,
    "note": "老当益壮，勇毅冠三军。"
   },
   {
    "id": "sgy-machao",
    "primaryName": "马超",
    "names": [
     {
      "text": "孟起",
      "type": "表字",
      "note": ""
     },
     {
      "text": "锦马超",
      "type": "绰号",
      "note": "因衣甲鲜明"
     },
     {
      "text": "神威天将军",
      "type": "封号",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "蜀汉骠骑将军，五虎上将",
    "firstPage": 104,
    "appearances": [
     104,
     606,
     618,
     629,
     686,
     698,
     823,
     949
    ],
    "locations": [
     {
      "place": "西凉",
      "city": "西凉",
      "country": "中国",
      "fromPage": 104,
      "toPage": 629,
      "note": "父马腾起兵之地"
     },
     {
      "place": "潼关",
      "city": "潼关",
      "country": "中国",
      "fromPage": 618,
      "toPage": 618,
      "note": "大战曹操"
     },
     {
      "place": "成都",
      "city": "成都",
      "country": "中国",
      "fromPage": 698,
      "toPage": 949,
      "note": "归刘备后"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 698,
      "toPage": 949,
      "note": ""
     },
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 104,
      "toPage": 686,
      "note": "西凉军阀"
     }
    ],
    "groups": [
     "武将",
     "五虎上将"
    ],
    "experiences": [
     {
      "title": "起兵报父仇",
      "fromPage": 606,
      "toPage": 618,
      "description": "父马腾被曹操所害，与韩遂合兵二十万攻长安。"
     },
     {
      "title": "潼关战曹操",
      "fromPage": 618,
      "toPage": 618,
      "description": "杀得曹操割须弃袍，渭水避箭。"
     },
     {
      "title": "中离间计",
      "fromPage": 629,
      "toPage": 629,
      "description": "曹操抹书间韩遂，马超与韩遂相攻而败。"
     },
     {
      "title": "归顺刘备",
      "fromPage": 686,
      "toPage": 698,
      "description": "兵败投张鲁，后经李恢劝说归降刘备，逼降成都。"
     }
    ],
    "ending": "归蜀后镇守西羌，病卒于成都",
    "endingPage": 949,
    "note": "信布之勇，兼资文武。"
   },
   {
    "id": "sgy-jiangwei",
    "primaryName": "姜维",
    "names": [
     {
      "text": "伯约",
      "type": "表字",
      "note": ""
     },
     {
      "text": "幼麟",
      "type": "别号",
      "note": "与卧龙凤雏并称"
     }
    ],
    "gender": "男",
    "role": "蜀汉大将军，诸葛亮传人",
    "firstPage": 960,
    "appearances": [
     960,
     972,
     1006,
     1040,
     1109,
     1131,
     1154,
     1166,
     1189
    ],
    "locations": [
     {
      "place": "天水",
      "city": "天水",
      "country": "中国",
      "fromPage": 960,
      "toPage": 972,
      "note": "原为魏将"
     },
     {
      "place": "成都",
      "city": "成都",
      "country": "中国",
      "fromPage": 972,
      "toPage": 1166,
      "note": "蜀汉中枢"
     },
     {
      "place": "剑阁",
      "city": "剑阁",
      "country": "中国",
      "fromPage": 1154,
      "toPage": 1166,
      "note": "拒钟会大军"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 972,
      "toPage": 1189,
      "note": ""
     },
     {
      "name": "曹魏",
      "group": "政权",
      "fromPage": 960,
      "toPage": 972,
      "note": "原为魏国中郎将"
     }
    ],
    "groups": [
     "武将",
     "谋士"
    ],
    "experiences": [
     {
      "title": "识破诈计归汉",
      "fromPage": 972,
      "toPage": 972,
      "description": "被诸葛亮设计招降，感其知遇而归蜀。"
     },
     {
      "title": "受遗命承其志",
      "fromPage": 1074,
      "toPage": 1086,
      "description": "诸葛亮临终授以兵法与连弩之法，继其北伐之志。"
     },
     {
      "title": "九伐中原",
      "fromPage": 1109,
      "toPage": 1143,
      "description": "屡次出兵祁山、洮西，与邓艾、郭淮相持。"
     },
     {
      "title": "诈降图复国",
      "fromPage": 1177,
      "toPage": 1189,
      "description": "蜀亡后诈降钟会，欲借其反魏复汉，事败自刎。"
     }
    ],
    "ending": "蜀亡后诈降钟会谋复国，事败自刎而死",
    "endingPage": 1189,
    "note": "志继丞相，胆略过人，惜天命不佑。"
   },
   {
    "id": "sgy-xunyu",
    "primaryName": "荀彧",
    "names": [
     {
      "text": "文若",
      "type": "表字",
      "note": ""
     },
     {
      "text": "荀令君",
      "type": "尊称",
      "note": "尚书令之职"
     }
    ],
    "gender": "男",
    "role": "曹操首席谋士，汉尚书令",
    "firstPage": 104,
    "appearances": [
     104,
     127,
     149,
     218,
     309,
     652,
     709
    ],
    "locations": [
     {
      "place": "许昌",
      "city": "许昌",
      "country": "中国",
      "fromPage": 149,
      "toPage": 709,
      "note": "为曹操掌机要"
     },
     {
      "place": "邺城",
      "city": "邺城",
      "country": "中国",
      "fromPage": 332,
      "toPage": 709,
      "note": "居中调度"
     }
    ],
    "factions": [
     {
      "name": "曹魏",
      "group": "政权",
      "fromPage": 104,
      "toPage": 709,
      "note": ""
     },
     {
      "name": "汉室",
      "group": "政权",
      "fromPage": 104,
      "toPage": 709,
      "note": "心存汉室，官居尚书令"
     }
    ],
    "groups": [
     "谋士"
    ],
    "experiences": [
     {
      "title": "劝迎天子",
      "fromPage": 149,
      "toPage": 149,
      "description": "力主奉迎献帝都许，为曹操立政治之本。"
     },
     {
      "title": "官渡定策",
      "fromPage": 309,
      "toPage": 309,
      "description": "写信坚定曹操坚守之志，成就官渡之胜。"
     },
     {
      "title": "谏阻称魏公",
      "fromPage": 652,
      "toPage": 652,
      "description": "反对曹操进爵魏公受九锡，自此失宠。"
     },
     {
      "title": "忧郁而卒",
      "fromPage": 709,
      "toPage": 709,
      "description": "曹操送空食盒，知其意，服毒而亡。"
     }
    ],
    "ending": "因谏阻曹操晋魏公失宠，忧郁成疾而卒",
    "endingPage": 709,
    "note": "王佐之才，心存汉室。"
   },
   {
    "id": "sgy-guojia",
    "primaryName": "郭嘉",
    "names": [
     {
      "text": "奉孝",
      "type": "表字",
      "note": ""
     },
     {
      "text": "鬼才",
      "type": "别号",
      "note": "时人语"
     }
    ],
    "gender": "男",
    "role": "曹操谋士，司空军祭酒",
    "firstPage": 104,
    "appearances": [
     104,
     184,
     241,
     309,
     332,
     344
    ],
    "locations": [
     {
      "place": "许昌",
      "city": "许昌",
      "country": "中国",
      "fromPage": 104,
      "toPage": 344,
      "note": "随曹操参谋"
     },
     {
      "place": "辽东",
      "city": "辽东",
      "country": "中国",
      "fromPage": 344,
      "toPage": 344,
      "note": "遗计定辽东"
     }
    ],
    "factions": [
     {
      "name": "曹魏",
      "group": "政权",
      "fromPage": 104,
      "toPage": 344,
      "note": ""
     }
    ],
    "groups": [
     "谋士"
    ],
    "experiences": [
     {
      "title": "十胜十败论",
      "fromPage": 184,
      "toPage": 184,
      "description": "为曹操剖析袁曹优劣，坚定其战袁绍之心。"
     },
     {
      "title": "预言孙策之死",
      "fromPage": 298,
      "toPage": 298,
      "description": "料孙策轻而无备，必死于匹夫之手，后果然。"
     },
     {
      "title": "遗计定辽东",
      "fromPage": 344,
      "toPage": 344,
      "description": "临终留书，劝曹操勿攻辽东，待二袁自相残杀。"
     }
    ],
    "ending": "北征乌桓途中病卒，年三十八",
    "endingPage": 344,
    "note": "算无遗策，惜天不假年。"
   },
   {
    "id": "sgy-lusu",
    "primaryName": "鲁肃",
    "names": [
     {
      "text": "子敬",
      "type": "表字",
      "note": ""
     },
     {
      "text": "鲁都督",
      "type": "官称",
      "note": "继周瑜掌兵"
     }
    ],
    "gender": "男",
    "role": "东吴横江将军、大都督",
    "firstPage": 298,
    "appearances": [
     298,
     458,
     469,
     561,
     583,
     595,
     606,
     709
    ],
    "locations": [
     {
      "place": "江东",
      "city": "吴郡",
      "country": "中国",
      "fromPage": 298,
      "toPage": 606,
      "note": "孙权谋臣"
     },
     {
      "place": "陆口",
      "city": "陆口",
      "country": "中国",
      "fromPage": 583,
      "toPage": 606,
      "note": "镇守荆州边界"
     }
    ],
    "factions": [
     {
      "name": "东吴",
      "group": "政权",
      "fromPage": 298,
      "toPage": 709,
      "note": ""
     }
    ],
    "groups": [
     "谋士",
     "都督"
    ],
    "experiences": [
     {
      "title": "榻上策",
      "fromPage": 298,
      "toPage": 298,
      "description": "为孙权谋划鼎足江东、进图天下之策。"
     },
     {
      "title": "力主孙刘联盟",
      "fromPage": 458,
      "toPage": 469,
      "description": "引诸葛亮过江，促成两家联合抗曹。"
     },
     {
      "title": "单刀赴会",
      "fromPage": 709,
      "toPage": 709,
      "description": "与关羽相会，索要荆州，虽被斥而从容不惊。"
     },
     {
      "title": "继任都督",
      "fromPage": 606,
      "toPage": 606,
      "description": "周瑜临终荐其自代，遂掌东吴兵权。"
     }
    ],
    "ending": "病卒于陆口任上，孙权亲临其丧",
    "endingPage": 709,
    "note": "思度弘远，周瑜之后第一人。"
   },
   {
    "id": "sgy-luxun",
    "primaryName": "陆逊",
    "names": [
     {
      "text": "伯言",
      "type": "表字",
      "note": ""
     },
     {
      "text": "陆大都督",
      "type": "官称",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "东吴丞相、上大将军",
    "firstPage": 401,
    "appearances": [
     401,
     789,
     857,
     869,
     880,
     892,
     1006,
     1120
    ],
    "locations": [
     {
      "place": "江东",
      "city": "吴郡",
      "country": "中国",
      "fromPage": 401,
      "toPage": 892,
      "note": "孙权谋臣"
     },
     {
      "place": "夷陵",
      "city": "夷陵",
      "country": "中国",
      "fromPage": 857,
      "toPage": 892,
      "note": "火烧连营"
     },
     {
      "place": "武昌",
      "city": "武昌",
      "country": "中国",
      "fromPage": 1006,
      "toPage": 1120,
      "note": "任丞相辅政"
     }
    ],
    "factions": [
     {
      "name": "东吴",
      "group": "政权",
      "fromPage": 401,
      "toPage": 1120,
      "note": ""
     }
    ],
    "groups": [
     "都督",
     "谋士"
    ],
    "experiences": [
     {
      "title": "袭取荆州",
      "fromPage": 789,
      "toPage": 789,
      "description": "与吕蒙定计，白衣渡江，袭取荆州，擒杀关羽。"
     },
     {
      "title": "火烧连营",
      "fromPage": 892,
      "toPage": 892,
      "description": "夷陵之战以火攻破刘备七百里连营，蜀军大溃。"
     },
     {
      "title": "石亭破曹休",
      "fromPage": 1006,
      "toPage": 1006,
      "description": "大败魏军曹休十万之众，斩获万余。"
     },
     {
      "title": "忧愤而卒",
      "fromPage": 1120,
      "toPage": 1120,
      "description": "因太子孙和、鲁王孙霸之争屡谏不被纳，愤恚致疾而亡。"
     }
    ],
    "ending": "因谏争立嗣之事触怒孙权，忧愤而卒",
    "endingPage": 1120,
    "note": "深谋远虑，出将入相。"
   },
   {
    "id": "sgy-caopi",
    "primaryName": "曹丕",
    "names": [
     {
      "text": "子桓",
      "type": "表字",
      "note": ""
     },
     {
      "text": "魏文帝",
      "type": "谥号",
      "note": "称帝后"
     }
    ],
    "gender": "男",
    "role": "魏文帝，曹魏开国君主",
    "firstPage": 332,
    "appearances": [
     332,
     344,
     652,
     732,
     823,
     835,
     846,
     949
    ],
    "locations": [
     {
      "place": "邺城",
      "city": "邺城",
      "country": "中国",
      "fromPage": 332,
      "toPage": 823,
      "note": "随父居魏王府"
     },
     {
      "place": "洛阳",
      "city": "洛阳",
      "country": "中国",
      "fromPage": 835,
      "toPage": 949,
      "note": "受禅称帝，定都洛阳"
     }
    ],
    "factions": [
     {
      "name": "曹魏",
      "group": "政权",
      "fromPage": 332,
      "toPage": 949,
      "note": ""
     },
     {
      "name": "汉室",
      "group": "政权",
      "fromPage": 652,
      "toPage": 846,
      "note": "先为魏王世子，后受禅代汉"
     }
    ],
    "groups": [
     "君主"
    ],
    "experiences": [
     {
      "title": "立为魏王世子",
      "fromPage": 732,
      "toPage": 732,
      "description": "以贾诩之助、矫情自饰，终得立为世子。"
     },
     {
      "title": "继位魏王",
      "fromPage": 823,
      "toPage": 823,
      "description": "曹操病亡后嗣位为魏王、丞相、冀州牧。"
     },
     {
      "title": "受禅称帝",
      "fromPage": 846,
      "toPage": 846,
      "description": "逼汉献帝禅位，即皇帝位于繁阳，国号魏。"
     },
     {
      "title": "伐吴无功",
      "fromPage": 915,
      "toPage": 915,
      "description": "三次兴兵伐吴，皆无功而返。"
     }
    ],
    "ending": "病逝于洛阳，年四十",
    "endingPage": 949,
    "note": "文采出众，然气量褊狭。"
   },
   {
    "id": "sgy-liubiao",
    "primaryName": "刘表",
    "names": [
     {
      "text": "景升",
      "type": "表字",
      "note": ""
     },
     {
      "text": "荆州牧",
      "type": "官称",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "汉荆州牧，成武侯",
    "firstPage": 24,
    "appearances": [
     24,
     58,
     70,
     321,
     355,
     412,
     424
    ],
    "locations": [
     {
      "place": "荆州",
      "city": "荆州",
      "country": "中国",
      "fromPage": 58,
      "toPage": 424,
      "note": "坐镇襄阳"
     },
     {
      "place": "襄阳",
      "city": "襄阳",
      "country": "中国",
      "fromPage": 355,
      "toPage": 424,
      "note": "晚年所居"
     }
    ],
    "factions": [
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 24,
      "toPage": 424,
      "note": "据荆州自守，不预中原之争"
     },
     {
      "name": "汉室",
      "group": "政权",
      "fromPage": 24,
      "toPage": 424,
      "note": "汉室宗亲，受封荆州牧"
     }
    ],
    "groups": [
     "君主",
     "群雄"
    ],
    "experiences": [
     {
      "title": "单骑入荆州",
      "fromPage": 58,
      "toPage": 58,
      "description": "受命为荆州刺史，单骑赴任，结蒯蔡以定荆州。"
     },
     {
      "title": "收留刘备",
      "fromPage": 321,
      "toPage": 321,
      "description": "刘备兵败来投，待以上宾之礼，使之屯新野。"
     },
     {
      "title": "废长立幼",
      "fromPage": 412,
      "toPage": 412,
      "description": "宠蔡夫人，废长子刘琦而立幼子刘琮。"
     }
    ],
    "ending": "病逝于襄阳，死后荆州降曹",
    "endingPage": 424,
    "note": "坐谈之客，守成有余。"
   },
   {
    "id": "sgy-sunjian",
    "primaryName": "孙坚",
    "names": [
     {
      "text": "文台",
      "type": "表字",
      "note": ""
     },
     {
      "text": "江东猛虎",
      "type": "绰号",
      "note": "时人语"
     }
    ],
    "gender": "男",
    "role": "汉长沙太守，江东孙氏基业开创者",
    "firstPage": 12,
    "appearances": [
     12,
     47,
     58,
     70
    ],
    "locations": [
     {
      "place": "长沙",
      "city": "长沙",
      "country": "中国",
      "fromPage": 12,
      "toPage": 47,
      "note": "任长沙太守"
     },
     {
      "place": "洛阳",
      "city": "洛阳",
      "country": "中国",
      "fromPage": 47,
      "toPage": 58,
      "note": "讨董卓，得传国玉玺"
     },
     {
      "place": "岘山",
      "city": "襄阳",
      "country": "中国",
      "fromPage": 70,
      "toPage": 70,
      "note": "中伏身亡"
     }
    ],
    "factions": [
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 12,
      "toPage": 70,
      "note": "关东联军之一路"
     },
     {
      "name": "东吴",
      "group": "政权",
      "fromPage": 12,
      "toPage": 70,
      "note": "孙氏基业开创者"
     }
    ],
    "groups": [
     "武将",
     "群雄"
    ],
    "experiences": [
     {
      "title": "讨伐董卓",
      "fromPage": 47,
      "toPage": 47,
      "description": "为关东联军先锋，于汜水关大破华雄。"
     },
     {
      "title": "得传国玉玺",
      "fromPage": 58,
      "toPage": 58,
      "description": "入洛阳废墟，于殿井中得传国玉玺，遂有自立之志。"
     },
     {
      "title": "跨江击刘表",
      "fromPage": 70,
      "toPage": 70,
      "description": "为报私仇攻刘表，中蒯越伏兵，死于岘山。"
     }
    ],
    "ending": "攻襄阳时中伏，被乱箭射死于岘山",
    "endingPage": 70,
    "note": "勇挚刚毅，江东基业之始。"
   },
   {
    "id": "sgy-sunce",
    "primaryName": "孙策",
    "names": [
     {
      "text": "伯符",
      "type": "表字",
      "note": ""
     },
     {
      "text": "小霸王",
      "type": "绰号",
      "note": "时人语"
     },
     {
      "text": "讨逆将军",
      "type": "封号",
      "note": "朝廷所封"
     }
    ],
    "gender": "男",
    "role": "汉讨逆将军，吴侯，江东平定者",
    "firstPage": 70,
    "appearances": [
     70,
     161,
     172,
     218,
     229,
     298
    ],
    "locations": [
     {
      "place": "江东",
      "city": "吴郡",
      "country": "中国",
      "fromPage": 161,
      "toPage": 298,
      "note": "借兵定江东"
     },
     {
      "place": "许昌",
      "city": "许昌",
      "country": "中国",
      "fromPage": 218,
      "toPage": 229,
      "note": "遣使贡献，受封吴侯"
     },
     {
      "place": "丹徒",
      "city": "丹徒",
      "country": "中国",
      "fromPage": 298,
      "toPage": 298,
      "note": "遇刺身亡"
     }
    ],
    "factions": [
     {
      "name": "东吴",
      "group": "政权",
      "fromPage": 70,
      "toPage": 298,
      "note": ""
     }
    ],
    "groups": [
     "君主",
     "武将"
    ],
    "experiences": [
     {
      "title": "借兵定江东",
      "fromPage": 161,
      "toPage": 161,
      "description": "以玉玺质于袁术借兵三千，渡江扫平江东诸郡。"
     },
     {
      "title": "神亭岭战太史慈",
      "fromPage": 161,
      "toPage": 161,
      "description": "与太史慈酣斗，惺惺相惜，后收为帐下大将。"
     },
     {
      "title": "平江东六郡",
      "fromPage": 161,
      "toPage": 172,
      "description": "数年间尽有江东六郡，士民归附。"
     },
     {
      "title": "遇刺托孤",
      "fromPage": 298,
      "toPage": 298,
      "description": "为许贡门客所伤，临终召张昭周瑜，托弟孙权。"
     }
    ],
    "ending": "为许贡门客刺杀，伤重而亡，年二十六",
    "endingPage": 298,
    "note": "转斗千里，尽有江东。"
   },
   {
    "id": "sgy-wangyun",
    "primaryName": "王允",
    "names": [
     {
      "text": "子师",
      "type": "表字",
      "note": ""
     },
     {
      "text": "王司徒",
      "type": "官称",
      "note": "时任司徒"
     }
    ],
    "gender": "男",
    "role": "东汉司徒，诛董卓的主谋",
    "firstPage": 24,
    "appearances": [
     24,
     35,
     81,
     92,
     104
    ],
    "locations": [
     {
      "place": "长安",
      "city": "长安",
      "country": "中国",
      "fromPage": 24,
      "toPage": 104,
      "note": "在朝为司徒"
     },
     {
      "place": "洛阳",
      "city": "洛阳",
      "country": "中国",
      "fromPage": 24,
      "toPage": 58,
      "note": "董卓入京时"
     }
    ],
    "factions": [
     {
      "name": "汉室",
      "group": "政权",
      "fromPage": 24,
      "toPage": 104,
      "note": "忠汉老臣"
     }
    ],
    "groups": [
     "朝臣",
     "谋士"
    ],
    "experiences": [
     {
      "title": "献刀之计",
      "fromPage": 35,
      "toPage": 35,
      "description": "借七宝刀与曹操，使刺董卓，事败而止。"
     },
     {
      "title": "定连环计",
      "fromPage": 81,
      "toPage": 81,
      "description": "以貂蝉先后许吕布、献董卓，离间二人。"
     },
     {
      "title": "诛杀董卓",
      "fromPage": 92,
      "toPage": 92,
      "description": "诱董卓入朝受禅，使吕布刺杀之，暴尸于市。"
     },
     {
      "title": "不肯赦凉州兵",
      "fromPage": 92,
      "toPage": 104,
      "description": "拒绝赦免李傕郭汜，致其反攻长安。"
     }
    ],
    "ending": "李傕郭汜攻破长安，王允跳城殉国",
    "endingPage": 104,
    "note": "忠直有余而权变不足。"
   },
   {
    "id": "sgy-pangtong",
    "primaryName": "庞统",
    "names": [
     {
      "text": "士元",
      "type": "表字",
      "note": ""
     },
     {
      "text": "凤雏",
      "type": "别号",
      "note": "与卧龙齐名"
     }
    ],
    "gender": "男",
    "role": "蜀汉军师中郎将，副军师",
    "firstPage": 366,
    "appearances": [
     366,
     503,
     606,
     640,
     663,
     675
    ],
    "locations": [
     {
      "place": "襄阳",
      "city": "襄阳",
      "country": "中国",
      "fromPage": 366,
      "toPage": 503,
      "note": "隐居于荆襄"
     },
     {
      "place": "耒阳",
      "city": "耒阳",
      "country": "中国",
      "fromPage": 606,
      "toPage": 606,
      "note": "任县令，半日断百案"
     },
     {
      "place": "落凤坡",
      "city": "雒城",
      "country": "中国",
      "fromPage": 675,
      "toPage": 675,
      "note": "中伏殒命"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 606,
      "toPage": 675,
      "note": ""
     },
     {
      "name": "东吴",
      "group": "政权",
      "fromPage": 503,
      "toPage": 606,
      "note": "曾为周瑜功曹"
     }
    ],
    "groups": [
     "谋士"
    ],
    "experiences": [
     {
      "title": "巧授连环计",
      "fromPage": 503,
      "toPage": 503,
      "description": "随蒋干入曹营，献连环船之计，为火攻铺路。"
     },
     {
      "title": "耒阳理事",
      "fromPage": 606,
      "toPage": 606,
      "description": "百日积案半日判毕，张飞叹服，荐于刘备。"
     },
     {
      "title": "献上中下三策",
      "fromPage": 663,
      "toPage": 663,
      "description": "为刘备谋划取成都之策，劝其取中策。"
     },
     {
      "title": "落凤坡中箭",
      "fromPage": 675,
      "toPage": 675,
      "description": "骑刘备白马先行，被张任伏兵误认为刘备，中箭而亡。"
     }
    ],
    "ending": "进攻雒城时于落凤坡中伏，中箭身亡",
    "endingPage": 675,
    "note": "非百里之才，惜早殒。"
   },
   {
    "id": "sgy-weiyan",
    "primaryName": "魏延",
    "names": [
     {
      "text": "文长",
      "type": "表字",
      "note": ""
     },
     {
      "text": "魏将军",
      "type": "官称",
      "note": ""
     }
    ],
    "gender": "男",
    "role": "蜀汉征西大将军，南郑侯",
    "firstPage": 435,
    "appearances": [
     435,
     572,
     663,
     743,
     994,
     1063,
     1074,
     1086
    ],
    "locations": [
     {
      "place": "长沙",
      "city": "长沙",
      "country": "中国",
      "fromPage": 435,
      "toPage": 572,
      "note": "原为刘表部将"
     },
     {
      "place": "汉中",
      "city": "汉中",
      "country": "中国",
      "fromPage": 766,
      "toPage": 1074,
      "note": "镇守汉中"
     },
     {
      "place": "南谷口",
      "city": "汉中",
      "country": "中国",
      "fromPage": 1086,
      "toPage": 1086,
      "note": "被马岱所斩"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 572,
      "toPage": 1086,
      "note": ""
     }
    ],
    "groups": [
     "武将"
    ],
    "experiences": [
     {
      "title": "献子午谷奇谋",
      "fromPage": 960,
      "toPage": 960,
      "description": "请兵万人出子午谷直取长安，诸葛亮以为危计不用。"
     },
     {
      "title": "镇守汉中",
      "fromPage": 766,
      "toPage": 766,
      "description": "刘备破格拔为汉中太守，镇守十年，魏人不敢犯。"
     },
     {
      "title": "阵前骂战",
      "fromPage": 1063,
      "toPage": 1063,
      "description": "与司马懿对峙，怒斥其不敢出战。"
     },
     {
      "title": "争权被杀",
      "fromPage": 1074,
      "toPage": 1086,
      "description": "诸葛亮死后与杨仪争权，烧绝栈道，被马岱追斩。"
     }
    ],
    "ending": "诸葛亮死后与杨仪争权，兵败被马岱斩杀",
    "endingPage": 1086,
    "note": "勇略过人，性矜高，终以反名被诛。"
   },
   {
    "id": "sgy-masu",
    "primaryName": "马谡",
    "names": [
     {
      "text": "幼常",
      "type": "表字",
      "note": ""
     },
     {
      "text": "马参军",
      "type": "官称",
      "note": "任参军"
     }
    ],
    "gender": "男",
    "role": "蜀汉参军，街亭守将",
    "firstPage": 926,
    "appearances": [
     926,
     949,
     994,
     1006
    ],
    "locations": [
     {
      "place": "成都",
      "city": "成都",
      "country": "中国",
      "fromPage": 926,
      "toPage": 994,
      "note": "为诸葛亮参军"
     },
     {
      "place": "街亭",
      "city": "街亭",
      "country": "中国",
      "fromPage": 994,
      "toPage": 1006,
      "note": "违令扎营山上，失守"
     }
    ],
    "factions": [
     {
      "name": "蜀汉",
      "group": "政权",
      "fromPage": 926,
      "toPage": 1006,
      "note": ""
     }
    ],
    "groups": [
     "武将",
     "谋士"
    ],
    "experiences": [
     {
      "title": "献攻心之策",
      "fromPage": 926,
      "toPage": 926,
      "description": "南征时建议攻心为上，助成七擒孟获。"
     },
     {
      "title": "献反间计",
      "fromPage": 949,
      "toPage": 949,
      "description": "散布流言使魏国罢司马懿兵权，一时得计。"
     },
     {
      "title": "违令失街亭",
      "fromPage": 994,
      "toPage": 1006,
      "description": "不听王平劝阻，舍要道而屯山上，被张郃断水大败。"
     },
     {
      "title": "挥泪被斩",
      "fromPage": 1006,
      "toPage": 1006,
      "description": "自缚请罪，诸葛亮挥泪斩之，以正军法。"
     }
    ],
    "ending": "失街亭后自缚请罪，被诸葛亮依军法处斩",
    "endingPage": 1006,
    "note": "言过其实，不可大用。"
   },
   {
    "id": "sgy-zhanghe",
    "primaryName": "张郃",
    "names": [
     {
      "text": "儁乂",
      "type": "表字",
      "note": ""
     },
     {
      "text": "张将军",
      "type": "官称",
      "note": "官至征西车骑将军"
     }
    ],
    "gender": "男",
    "role": "曹魏征西车骑将军，五子良将",
    "firstPage": 229,
    "appearances": [
     229,
     309,
     743,
     755,
     994,
     1006,
     1052
    ],
    "locations": [
     {
      "place": "冀州",
      "city": "冀州",
      "country": "中国",
      "fromPage": 229,
      "toPage": 309,
      "note": "原为袁绍部将"
     },
     {
      "place": "许昌",
      "city": "许昌",
      "country": "中国",
      "fromPage": 309,
      "toPage": 994,
      "note": "官渡后归曹操"
     },
     {
      "place": "街亭",
      "city": "街亭",
      "country": "中国",
      "fromPage": 994,
      "toPage": 1006,
      "note": "大破马谡"
     }
    ],
    "factions": [
     {
      "name": "曹魏",
      "group": "政权",
      "fromPage": 309,
      "toPage": 1052,
      "note": ""
     },
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 229,
      "toPage": 309,
      "note": "原属袁绍"
     }
    ],
    "groups": [
     "武将",
     "五子良将"
    ],
    "experiences": [
     {
      "title": "官渡降曹",
      "fromPage": 309,
      "toPage": 309,
      "description": "乌巢被袭时谏袁绍救粮不被听，反遭谗害，遂降曹操。"
     },
     {
      "title": "瓦口隘败绩",
      "fromPage": 743,
      "toPage": 743,
      "description": "被张飞智取瓦口隘，大败而回。"
     },
     {
      "title": "街亭大捷",
      "fromPage": 994,
      "toPage": 1006,
      "description": "断马谡汲水之道，大破蜀军，遂取街亭。"
     },
     {
      "title": "木门道中箭",
      "fromPage": 1052,
      "toPage": 1052,
      "description": "追击蜀军时于木门道中伏，被乱箭射中右膝而亡。"
     }
    ],
    "ending": "追击蜀军时于木门道中伏，中箭身亡",
    "endingPage": 1052,
    "note": "以巧变为称，魏之名将。"
   },
   {
    "id": "sgy-taishici",
    "primaryName": "太史慈",
    "names": [
     {
      "text": "子义",
      "type": "表字",
      "note": ""
     },
     {
      "text": "太史子义",
      "type": "俗称",
      "note": "东莱人"
     }
    ],
    "gender": "男",
    "role": "东吴折冲中郎将，建昌都尉",
    "firstPage": 115,
    "appearances": [
     115,
     161,
     401,
     572
    ],
    "locations": [
     {
      "place": "东莱",
      "city": "东莱",
      "country": "中国",
      "fromPage": 115,
      "toPage": 115,
      "note": "本籍"
     },
     {
      "place": "江东",
      "city": "吴郡",
      "country": "中国",
      "fromPage": 161,
      "toPage": 572,
      "note": "归孙策后"
     },
     {
      "place": "合肥",
      "city": "合肥",
      "country": "中国",
      "fromPage": 572,
      "toPage": 572,
      "note": "与张辽交战"
     }
    ],
    "factions": [
     {
      "name": "东吴",
      "group": "政权",
      "fromPage": 161,
      "toPage": 572,
      "note": ""
     },
     {
      "name": "群雄",
      "group": "政权",
      "fromPage": 115,
      "toPage": 161,
      "note": "曾事孔融、刘繇"
     }
    ],
    "groups": [
     "武将"
    ],
    "experiences": [
     {
      "title": "单骑突围求救",
      "fromPage": 115,
      "toPage": 115,
      "description": "为孔融突围至平原，向刘备求援以解北海之围。"
     },
     {
      "title": "神亭岭斗孙策",
      "fromPage": 161,
      "toPage": 161,
      "description": "与孙策酣战数百合，互夺兵器，不分胜负。"
     },
     {
      "title": "归附孙策",
      "fromPage": 161,
      "toPage": 161,
      "description": "感孙策之量，遂归顺，为江东名将。"
     },
     {
      "title": "病卒合肥前线",
      "fromPage": 572,
      "toPage": 572,
      "description": "随孙权攻合肥，中张辽之计，伤重而卒，年四十一。"
     }
    ],
    "ending": "随孙权攻合肥时中计受创，伤重而卒",
    "endingPage": 572,
    "note": "信义笃烈，古之遗风。"
   }
  ],
  "relations": [
   {
    "id": "sgy-r1",
    "from": "sgy-liubei",
    "to": "sgy-guanyu",
    "type": "结义兄弟",
    "category": "同盟",
    "sincePage": 1,
    "untilPage": 812,
    "directed": false,
    "note": "桃园结义，誓同生死"
   },
   {
    "id": "sgy-r2",
    "from": "sgy-liubei",
    "to": "sgy-zhangfei",
    "type": "结义兄弟",
    "category": "同盟",
    "sincePage": 1,
    "untilPage": 857,
    "directed": false,
    "note": "桃园结义，情同手足"
   },
   {
    "id": "sgy-r3",
    "from": "sgy-guanyu",
    "to": "sgy-zhangfei",
    "type": "结义兄弟",
    "category": "同盟",
    "sincePage": 1,
    "untilPage": 857,
    "directed": false,
    "note": "三兄弟中最幼者敬事二兄"
   },
   {
    "id": "sgy-r4",
    "from": "sgy-liubei",
    "to": "sgy-zhugeliang",
    "type": "君臣/知遇",
    "category": "上下级",
    "sincePage": 401,
    "untilPage": 903,
    "directed": true,
    "note": "三顾茅庐，如鱼得水"
   },
   {
    "id": "sgy-r5",
    "from": "sgy-liubei",
    "to": "sgy-zhaoyun",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 286,
    "untilPage": 903,
    "directed": true,
    "note": "信任有加，托以家小"
   },
   {
    "id": "sgy-r6",
    "from": "sgy-liubei",
    "to": "sgy-pangtong",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 606,
    "untilPage": 675,
    "directed": true,
    "note": "任为副军师，入蜀谋主"
   },
   {
    "id": "sgy-r7",
    "from": "sgy-liubei",
    "to": "sgy-huangzhong",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 572,
    "untilPage": 880,
    "directed": true,
    "note": "封为五虎上将之一"
   },
   {
    "id": "sgy-r8",
    "from": "sgy-liubei",
    "to": "sgy-machao",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 698,
    "untilPage": 903,
    "directed": true,
    "note": "归降后封为五虎上将"
   },
   {
    "id": "sgy-r9",
    "from": "sgy-zhugeliang",
    "to": "sgy-jiangwei",
    "type": "师徒",
    "category": "师友",
    "sincePage": 972,
    "untilPage": 1074,
    "directed": true,
    "note": "尽传平生所学"
   },
   {
    "id": "sgy-r10",
    "from": "sgy-zhugeliang",
    "to": "sgy-masu",
    "type": "上下级/重用失察",
    "category": "上下级",
    "sincePage": 926,
    "untilPage": 1006,
    "directed": true,
    "note": "违令失街亭，挥泪斩之"
   },
   {
    "id": "sgy-r11",
    "from": "sgy-caocao",
    "to": "sgy-guojia",
    "type": "君臣/倚重",
    "category": "上下级",
    "sincePage": 104,
    "untilPage": 344,
    "directed": true,
    "note": "言听计从，哭之恸"
   },
   {
    "id": "sgy-r12",
    "from": "sgy-caocao",
    "to": "sgy-xunyu",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 104,
    "untilPage": 709,
    "directed": true,
    "note": "称其为吾之子房，终致猜嫌"
   },
   {
    "id": "sgy-r13",
    "from": "sgy-caocao",
    "to": "sgy-caopi",
    "type": "父子",
    "category": "亲属",
    "sincePage": 332,
    "untilPage": 823,
    "directed": true,
    "note": "立为魏王世子"
   },
   {
    "id": "sgy-r14",
    "from": "sgy-caocao",
    "to": "sgy-zhangliao",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 207,
    "untilPage": 823,
    "directed": true,
    "note": "释而用之，倚为方面"
   },
   {
    "id": "sgy-r15",
    "from": "sgy-caocao",
    "to": "sgy-zhanghe",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 309,
    "untilPage": 823,
    "directed": true,
    "note": "官渡降将，后为名将"
   },
   {
    "id": "sgy-r16",
    "from": "sgy-caocao",
    "to": "sgy-simayi",
    "type": "君臣/猜防",
    "category": "上下级",
    "sincePage": 412,
    "untilPage": 823,
    "directed": true,
    "note": "察其有雄豪志，用之而防之"
   },
   {
    "id": "sgy-r17",
    "from": "sgy-caocao",
    "to": "sgy-guanyu",
    "type": "厚待与不受",
    "category": "其他",
    "sincePage": 252,
    "untilPage": 275,
    "directed": true,
    "note": "上马金下马银，终不能留"
   },
   {
    "id": "sgy-r18",
    "from": "sgy-caocao",
    "to": "sgy-lvbu",
    "type": "擒杀",
    "category": "敌对",
    "sincePage": 195,
    "untilPage": 195,
    "directed": true,
    "note": "白门楼缢杀吕布"
   },
   {
    "id": "sgy-r19",
    "from": "sgy-caocao",
    "to": "sgy-yuanshao",
    "type": "争雄/宿敌",
    "category": "敌对",
    "sincePage": 229,
    "untilPage": 332,
    "directed": false,
    "note": "官渡决战，袁绍败亡"
   },
   {
    "id": "sgy-r20",
    "from": "sgy-yuanshao",
    "to": "sgy-zhanghe",
    "type": "旧主与降将",
    "category": "上下级",
    "sincePage": 229,
    "untilPage": 309,
    "directed": true,
    "note": "听谗疑将，致其降曹"
   },
   {
    "id": "sgy-r21",
    "from": "sgy-dongzhuo",
    "to": "sgy-lvbu",
    "type": "义父子/反目",
    "category": "亲属",
    "sincePage": 24,
    "untilPage": 92,
    "directed": true,
    "note": "先结为父子，终被其刺杀"
   },
   {
    "id": "sgy-r22",
    "from": "sgy-wangyun",
    "to": "sgy-diaochan",
    "type": "主仆/义女",
    "category": "主仆",
    "sincePage": 81,
    "untilPage": 92,
    "directed": true,
    "note": "收为义女，托以连环计"
   },
   {
    "id": "sgy-r23",
    "from": "sgy-diaochan",
    "to": "sgy-lvbu",
    "type": "爱慕",
    "category": "情感",
    "sincePage": 81,
    "untilPage": 195,
    "directed": false,
    "note": "凤仪亭相会，激其杀董卓"
   },
   {
    "id": "sgy-r24",
    "from": "sgy-diaochan",
    "to": "sgy-dongzhuo",
    "type": "献纳/离间",
    "category": "情感",
    "sincePage": 81,
    "untilPage": 92,
    "directed": true,
    "note": "受王允之命入郿坞"
   },
   {
    "id": "sgy-r25",
    "from": "sgy-wangyun",
    "to": "sgy-dongzhuo",
    "type": "design/诛杀",
    "category": "敌对",
    "sincePage": 24,
    "untilPage": 92,
    "directed": true,
    "note": "设连环计除国贼"
   },
   {
    "id": "sgy-r26",
    "from": "sgy-sunquan",
    "to": "sgy-zhouyu",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 298,
    "untilPage": 606,
    "directed": true,
    "note": "外事不决问周瑜"
   },
   {
    "id": "sgy-r27",
    "from": "sgy-sunquan",
    "to": "sgy-lusu",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 298,
    "untilPage": 709,
    "directed": true,
    "note": "倚为股肱，亲临其丧"
   },
   {
    "id": "sgy-r28",
    "from": "sgy-sunquan",
    "to": "sgy-luxun",
    "type": "君臣/姻亲",
    "category": "上下级",
    "sincePage": 789,
    "untilPage": 1120,
    "directed": true,
    "note": "以侄女妻之，后因立嗣生隙"
   },
   {
    "id": "sgy-r29",
    "from": "sgy-sunquan",
    "to": "sgy-taishici",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 161,
    "untilPage": 572,
    "directed": true,
    "note": "委以南方之事"
   },
   {
    "id": "sgy-r30",
    "from": "sgy-sunjian",
    "to": "sgy-sunce",
    "type": "父子",
    "category": "亲属",
    "sincePage": 12,
    "untilPage": 70,
    "directed": true,
    "note": "孙坚死后孙策继其志"
   },
   {
    "id": "sgy-r31",
    "from": "sgy-sunce",
    "to": "sgy-sunquan",
    "type": "兄弟/托付",
    "category": "亲属",
    "sincePage": 70,
    "untilPage": 298,
    "directed": true,
    "note": "临终授印，举江东之众付弟"
   },
   {
    "id": "sgy-r32",
    "from": "sgy-sunce",
    "to": "sgy-zhouyu",
    "type": "结义/君臣",
    "category": "同盟",
    "sincePage": 161,
    "untilPage": 298,
    "directed": false,
    "note": "总角之好，骨肉之分"
   },
   {
    "id": "sgy-r33",
    "from": "sgy-sunce",
    "to": "sgy-taishici",
    "type": "酣战而相惜",
    "category": "敌对",
    "sincePage": 161,
    "untilPage": 161,
    "directed": false,
    "note": "神亭岭一战，义气相投"
   },
   {
    "id": "sgy-r34",
    "from": "sgy-zhouyu",
    "to": "sgy-zhugeliang",
    "type": "联手/相忌",
    "category": "同盟",
    "sincePage": 458,
    "untilPage": 606,
    "directed": false,
    "note": "共破曹操，然三气而亡"
   },
   {
    "id": "sgy-r35",
    "from": "sgy-zhouyu",
    "to": "sgy-luxun",
    "type": "荐举",
    "category": "师友",
    "sincePage": 401,
    "untilPage": 606,
    "directed": true,
    "note": "周瑜荐陆逊之才于孙权"
   },
   {
    "id": "sgy-r36",
    "from": "sgy-lusu",
    "to": "sgy-guanyu",
    "type": "索荆州/对峙",
    "category": "敌对",
    "sincePage": 709,
    "untilPage": 709,
    "directed": false,
    "note": "单刀赴会，各为其主"
   },
   {
    "id": "sgy-r37",
    "from": "sgy-guanyu",
    "to": "sgy-luxun",
    "type": "轻敌致败",
    "category": "敌对",
    "sincePage": 789,
    "untilPage": 812,
    "directed": false,
    "note": "陆逊卑辞骄之，遂失荆州"
   },
   {
    "id": "sgy-r38",
    "from": "sgy-zhangliao",
    "to": "sgy-guanyu",
    "type": "旧交/说降",
    "category": "师友",
    "sincePage": 252,
    "untilPage": 252,
    "directed": true,
    "note": "土山约三事，全其忠义"
   },
   {
    "id": "sgy-r39",
    "from": "sgy-zhangliao",
    "to": "sgy-sunquan",
    "type": "屡败之敌",
    "category": "敌对",
    "sincePage": 720,
    "untilPage": 915,
    "directed": true,
    "note": "逍遥津八百破十万"
   },
   {
    "id": "sgy-r40",
    "from": "sgy-zhanghe",
    "to": "sgy-masu",
    "type": "对阵/取胜",
    "category": "敌对",
    "sincePage": 994,
    "untilPage": 1006,
    "directed": true,
    "note": "断水破街亭"
   },
   {
    "id": "sgy-r41",
    "from": "sgy-zhanghe",
    "to": "sgy-zhangfei",
    "type": "宿敌",
    "category": "敌对",
    "sincePage": 743,
    "untilPage": 743,
    "directed": false,
    "note": "瓦口隘大败于张飞"
   },
   {
    "id": "sgy-r42",
    "from": "sgy-simayi",
    "to": "sgy-zhugeliang",
    "type": "宿敌",
    "category": "敌对",
    "sincePage": 994,
    "untilPage": 1074,
    "directed": false,
    "note": "五丈原相持，各显其能"
   },
   {
    "id": "sgy-r43",
    "from": "sgy-simayi",
    "to": "sgy-caopi",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 732,
    "untilPage": 949,
    "directed": true,
    "note": "为曹丕所倚重"
   },
   {
    "id": "sgy-r44",
    "from": "sgy-jiangwei",
    "to": "sgy-simayi",
    "type": "北伐对手",
    "category": "敌对",
    "sincePage": 1109,
    "untilPage": 1120,
    "directed": true,
    "note": "九伐中原，屡与魏军相持"
   },
   {
    "id": "sgy-r45",
    "from": "sgy-weiyan",
    "to": "sgy-zhugeliang",
    "type": "上下级/献策不用",
    "category": "上下级",
    "sincePage": 960,
    "untilPage": 1074,
    "directed": true,
    "note": "子午谷之谋不见纳"
   },
   {
    "id": "sgy-r46",
    "from": "sgy-jiangwei",
    "to": "sgy-weiyan",
    "type": "同僚",
    "category": "同盟",
    "sincePage": 994,
    "untilPage": 1086,
    "directed": false,
    "note": "同为蜀汉北伐将领"
   },
   {
    "id": "sgy-r47",
    "from": "sgy-liubiao",
    "to": "sgy-liubei",
    "type": "同宗/收留",
    "category": "其他",
    "sincePage": 321,
    "untilPage": 424,
    "directed": true,
    "note": "待以上宾，托以荆襄之望"
   },
   {
    "id": "sgy-r48",
    "from": "sgy-liubiao",
    "to": "sgy-caocao",
    "type": "降服",
    "category": "敌对",
    "sincePage": 412,
    "untilPage": 424,
    "directed": true,
    "note": "死后子刘琮举州降曹"
   },
   {
    "id": "sgy-r49",
    "from": "sgy-taishici",
    "to": "sgy-zhangliao",
    "type": "合肥对阵",
    "category": "敌对",
    "sincePage": 572,
    "untilPage": 572,
    "directed": false,
    "note": "太史慈随孙权攻合肥，为张辽所算"
   },
   {
    "id": "sgy-r50",
    "from": "sgy-guojia",
    "to": "sgy-xunyu",
    "type": "同僚谋士",
    "category": "师友",
    "sincePage": 104,
    "untilPage": 344,
    "directed": false,
    "note": "同为曹操谋主，相得甚欢"
   }
  ]
 },
 {
  "id": "sample-war-and-peace",
  "meta": {
   "title": "战争与和平",
   "author": "列夫·托尔斯泰",
   "publisher": "人民文学出版社",
   "isbn": "978-7-02-001722-5",
   "edition": "名著名译丛书",
   "year": "2003",
   "totalPages": 1400,
   "currentPage": 1,
   "note": "高植译，共四卷十五部，含尾声。"
  },
  "characters": [
   {
    "id": "wp-andrei",
    "primaryName": "安德烈·博尔孔斯基",
    "names": [
     {
      "text": "安德烈公爵",
      "type": "简称",
      "note": "俄文通称"
     },
     {
      "text": "安德烈",
      "type": "小名",
      "note": "家人与娜塔莎称呼"
     },
     {
      "text": "Болконский",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "俄军上校，博尔孔斯基公爵之子",
    "firstPage": 6,
    "appearances": [
     6,
     12,
     25,
     60,
     180,
     380,
     620,
     900,
     1140,
     1300
    ],
    "locations": [
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 6,
      "toPage": 60,
      "note": "出入宫廷与沙龙"
     },
     {
      "place": "童山",
      "city": "童山",
      "country": "俄罗斯",
      "fromPage": 60,
      "toPage": 340,
      "note": "父亲庄园，退隐之地"
     },
     {
      "place": "奥斯特利茨",
      "city": "奥斯特利茨",
      "country": "捷克",
      "fromPage": 180,
      "toPage": 200,
      "note": "重伤倒于战场"
     },
     {
      "place": "鲍罗季诺",
      "city": "鲍罗季诺",
      "country": "俄罗斯",
      "fromPage": 1140,
      "toPage": 1180,
      "note": "受致命伤"
     }
    ],
    "factions": [
     {
      "name": "俄军",
      "group": "军队",
      "fromPage": 12,
      "toPage": 1300,
      "note": "库图佐夫麾下"
     },
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 6,
      "toPage": 1300,
      "note": "博尔孔斯基家族"
     }
    ],
    "groups": [
     "主角",
     "贵族",
     "军官"
    ],
    "experiences": [
     {
      "title": "从军赴奥斯特利茨",
      "fromPage": 25,
      "toPage": 180,
      "description": "厌倦沙龙生活而投军，渴望荣誉与图隆之役式的功名。"
     },
     {
      "title": "仰望崇高天空",
      "fromPage": 190,
      "toPage": 200,
      "description": "奥斯特利茨负伤倒地，望见高远天空，顿觉功名渺小。"
     },
     {
      "title": "丧妻与退隐",
      "fromPage": 200,
      "toPage": 340,
      "description": "妻子丽莎难产而死，归隐童山，从事农事改革。"
     },
     {
      "title": "与娜塔莎相爱及决裂",
      "fromPage": 380,
      "toPage": 620,
      "description": "重燃生机与之订婚，因其与阿纳托利私奔未遂而断绝。"
     },
     {
      "title": "鲍罗季诺负伤",
      "fromPage": 1140,
      "toPage": 1300,
      "description": "在预备队中弹，伤重后与娜塔莎重逢，于宽恕中安然离世。"
     }
    ],
    "ending": "鲍罗季诺受致命伤，与娜塔莎重逢后安然离世",
    "endingPage": 1300,
    "note": "骄傲而真诚，一生求索荣誉与意义。"
   },
   {
    "id": "wp-pierre",
    "primaryName": "皮埃尔·别祖霍夫",
    "names": [
     {
      "text": "皮埃尔",
      "type": "小名",
      "note": ""
     },
     {
      "text": "彼得·基里洛维奇",
      "type": "本名",
      "note": "教名与父称"
     },
     {
      "text": "Безухов",
      "type": "原文",
      "note": "姓氏原文"
     },
     {
      "text": "别祖霍夫伯爵",
      "type": "尊称",
      "note": "继承遗产后"
     }
    ],
    "gender": "男",
    "role": "别祖霍夫伯爵，私生子承袭巨产",
    "firstPage": 4,
    "appearances": [
     4,
     18,
     60,
     200,
     480,
     700,
     950,
     1080,
     1250,
     1380
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 4,
      "toPage": 1380,
      "note": "主要活动地"
     },
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 18,
      "toPage": 200,
      "note": "求学与社交"
     },
     {
      "place": "巴黎",
      "city": "巴黎",
      "country": "法国",
      "fromPage": 620,
      "toPage": 700,
      "note": "游历与共济会"
     },
     {
      "place": "鲍罗季诺",
      "city": "鲍罗季诺",
      "country": "俄罗斯",
      "fromPage": 1080,
      "toPage": 1120,
      "note": "以平民身份旁观会战"
     },
     {
      "place": "奥廖尔",
      "city": "奥廖尔",
      "country": "俄罗斯",
      "fromPage": 1250,
      "toPage": 1300,
      "note": "被俘后获救"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 4,
      "toPage": 1380,
      "note": "俄国首富"
     },
     {
      "name": "共济会",
      "group": "其他",
      "fromPage": 480,
      "toPage": 700,
      "note": "曾入会寻求人生意义"
     }
    ],
    "groups": [
     "主角",
     "贵族",
     "求道者"
    ],
    "experiences": [
     {
      "title": "意外继承巨产",
      "fromPage": 60,
      "toPage": 70,
      "description": "老别祖霍夫临终认其为子，一夜之间成为俄国巨富。"
     },
     {
      "title": "与海伦不幸的婚姻",
      "fromPage": 200,
      "toPage": 480,
      "description": "被瓦西里公爵撮合娶海伦，因决斗而分居。"
     },
     {
      "title": "加入共济会",
      "fromPage": 480,
      "toPage": 500,
      "description": "在苦闷中入会，追求自我完善与善行。"
     },
     {
      "title": "萌生刺杀拿破仑之念",
      "fromPage": 1080,
      "toPage": 1200,
      "description": "留在莫斯科，欲行刺拿破仑，反被法军俘虏。"
     },
     {
      "title": "与娜塔莎重组家庭",
      "fromPage": 1340,
      "toPage": 1380,
      "description": "战后娶娜塔莎，育有四子，成为温和的家族之主。"
     }
    ],
    "ending": "战后与娜塔莎结婚，家庭美满，并参与秘密结社",
    "endingPage": 1380,
    "note": "笨拙而善良，托尔斯泰精神探索的化身。"
   },
   {
    "id": "wp-natasha",
    "primaryName": "娜塔莎·罗斯托娃",
    "names": [
     {
      "text": "娜塔莎",
      "type": "小名",
      "note": ""
     },
     {
      "text": "娜塔莉娅",
      "type": "本名",
      "note": "教名"
     },
     {
      "text": "罗斯托娃伯爵小姐",
      "type": "尊称",
      "note": "婚前通称"
     },
     {
      "text": "Ростова",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "女",
    "role": "罗斯托夫伯爵之女",
    "firstPage": 8,
    "appearances": [
     8,
     40,
     120,
     300,
     380,
     620,
     720,
     900,
     1280,
     1360
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 8,
      "toPage": 1360,
      "note": "罗斯托夫家宅"
     },
     {
      "place": "奥特拉德诺耶",
      "city": "奥特拉德诺耶",
      "country": "俄罗斯",
      "fromPage": 300,
      "toPage": 400,
      "note": "乡间庄园，狩猎与月夜"
     },
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 620,
      "toPage": 720,
      "note": "与阿纳托利相遇"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 8,
      "toPage": 1360,
      "note": "罗斯托夫家族"
     }
    ],
    "groups": [
     "主角",
     "贵族",
     "女性"
    ],
    "experiences": [
     {
      "title": "初次参加舞会",
      "fromPage": 120,
      "toPage": 130,
      "description": "在彼得堡舞会上无人邀请，由安德烈相邀而重获欢欣。"
     },
     {
      "title": "奥特拉德诺耶的月夜",
      "fromPage": 300,
      "toPage": 360,
      "description": "乡间狩猎、圣诞欢歌，与安德烈重逢并定情。"
     },
     {
      "title": "与阿纳托利私奔未遂",
      "fromPage": 620,
      "toPage": 700,
      "description": "被阿纳托利诱骗，计划私奔被阻止，婚事破裂。"
     },
     {
      "title": "莫斯科大火前救助伤员",
      "fromPage": 900,
      "toPage": 1000,
      "description": "说服父母让出车辆运送伤员，安德烈即在其中。"
     },
     {
      "title": "与皮埃尔成婚",
      "fromPage": 1340,
      "toPage": 1360,
      "description": "战后嫁给皮埃尔，全心投入家庭与儿女。"
     }
    ],
    "ending": "与皮埃尔结为夫妻，生育三女一子，归于家庭",
    "endingPage": 1360,
    "note": "生命力的化身，由少女成长为坚毅的母亲。"
   },
   {
    "id": "wp-maria",
    "primaryName": "玛丽亚·博尔孔斯卡娅",
    "names": [
     {
      "text": "玛丽亚公爵小姐",
      "type": "简称",
      "note": "俄文通称"
     },
     {
      "text": "玛丽",
      "type": "小名",
      "note": "家人称呼"
     },
     {
      "text": "Болконская",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "女",
    "role": "博尔孔斯基公爵之女，安德烈之妹",
    "firstPage": 60,
    "appearances": [
     60,
     130,
     300,
     700,
     900,
     1150,
     1250,
     1360
    ],
    "locations": [
     {
      "place": "童山",
      "city": "童山",
      "country": "俄罗斯",
      "fromPage": 60,
      "toPage": 1150,
      "note": "与父亲同住"
     },
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 900,
      "toPage": 1250,
      "note": "战乱中迁居"
     },
     {
      "place": "博尔孔斯科耶庄园",
      "city": "博尔孔斯科耶庄园",
      "country": "俄罗斯",
      "fromPage": 1150,
      "toPage": 1250,
      "note": "父亲亡后独居，接待伤员"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 60,
      "toPage": 1360,
      "note": "博尔孔斯基家族"
     }
    ],
    "groups": [
     "主角",
     "贵族",
     "女性"
    ],
    "experiences": [
     {
      "title": "在父亲严苛下度日",
      "fromPage": 60,
      "toPage": 300,
      "description": "忍受老公爵的刻薄与功课折磨，笃信宗教而自持。"
     },
     {
      "title": "庇护朝圣者与亲人",
      "fromPage": 130,
      "toPage": 300,
      "description": "暗中接济朝圣者，抚养侄儿尼古卢什卡。"
     },
     {
      "title": "与尼古拉相遇",
      "fromPage": 900,
      "toPage": 1000,
      "description": "在逃难途中与尼古拉·罗斯托夫相遇，暗生情愫。"
     },
     {
      "title": "与尼古拉成婚",
      "fromPage": 1340,
      "toPage": 1360,
      "description": "战后嫁与尼古拉，操持庄园，敬奉家庭。"
     }
    ],
    "ending": "与尼古拉·罗斯托夫结婚，婚后操持童山庄园",
    "endingPage": 1360,
    "note": "容貌不美而心灵光辉，托尔斯泰理想女性之一。"
   },
   {
    "id": "wp-nikolai",
    "primaryName": "尼古拉·罗斯托夫",
    "names": [
     {
      "text": "尼古拉",
      "type": "小名",
      "note": ""
     },
     {
      "text": "尼古卢什卡",
      "type": "昵称",
      "note": "母亲称呼"
     },
     {
      "text": "罗斯托夫伯爵",
      "type": "尊称",
      "note": "婚后承袭家产"
     },
     {
      "text": "Ростов",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "俄军骠骑兵军官，罗斯托夫伯爵长子",
    "firstPage": 8,
    "appearances": [
     8,
     40,
     120,
     300,
     700,
     900,
     1150,
     1360
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 8,
      "toPage": 900,
      "note": "罗斯托夫家宅"
     },
     {
      "place": "奥特拉德诺耶",
      "city": "奥特拉德诺耶",
      "country": "俄罗斯",
      "fromPage": 300,
      "toPage": 400,
      "note": "乡间庄园"
     },
     {
      "place": "奥斯特利茨",
      "city": "奥斯特利茨",
      "country": "捷克",
      "fromPage": 180,
      "toPage": 200,
      "note": "初次负伤"
     },
     {
      "place": "童山",
      "city": "童山",
      "country": "俄罗斯",
      "fromPage": 1150,
      "toPage": 1380,
      "note": "婚后定居"
     }
    ],
    "factions": [
     {
      "name": "俄军",
      "group": "军队",
      "fromPage": 40,
      "toPage": 1200,
      "note": "骠骑兵团"
     },
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 8,
      "toPage": 1380,
      "note": "罗斯托夫家族"
     }
    ],
    "groups": [
     "主角",
     "贵族",
     "军官"
    ],
    "experiences": [
     {
      "title": "初次上阵负伤",
      "fromPage": 180,
      "toPage": 200,
      "description": "在申格拉本负伤，面对法军与己方的追逐而心生困惑。"
     },
     {
      "title": "赌输四万三千卢布",
      "fromPage": 340,
      "toPage": 360,
      "description": "输给多洛霍夫巨款，令家道更加窘迫。"
     },
     {
      "title": "救出玛丽亚公爵小姐",
      "fromPage": 900,
      "toPage": 1000,
      "description": "在法军逼近时保护玛丽亚脱离险境。"
     },
     {
      "title": "退役还债理家",
      "fromPage": 1250,
      "toPage": 1380,
      "description": "战后退役，偿清债务，经营童山庄园有成。"
     }
    ],
    "ending": "战后退役还债，与玛丽亚结婚并经营庄园",
    "endingPage": 1380,
    "note": "诚实单纯的军人，忠于家庭与职责。"
   },
   {
    "id": "wp-helen",
    "primaryName": "海伦·库拉金娜",
    "names": [
     {
      "text": "海伦",
      "type": "小名",
      "note": ""
     },
     {
      "text": "叶莲娜",
      "type": "本名",
      "note": "教名"
     },
     {
      "text": "别祖霍娃伯爵夫人",
      "type": "尊称",
      "note": "婚后通称"
     },
     {
      "text": "Курагина",
      "type": "原文",
      "note": "娘家姓氏原文"
     }
    ],
    "gender": "女",
    "role": "彼得堡社交界美人，皮埃尔之妻",
    "firstPage": 18,
    "appearances": [
     18,
     60,
     200,
     300,
     480,
     700,
     900
    ],
    "locations": [
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 18,
      "toPage": 900,
      "note": "沙龙女主人"
     },
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 200,
      "toPage": 300,
      "note": "随夫居住"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 18,
      "toPage": 900,
      "note": "库拉金家族"
     }
    ],
    "groups": [
     "配角",
     "贵族",
     "女性"
    ],
    "experiences": [
     {
      "title": "被撮合嫁与皮埃尔",
      "fromPage": 200,
      "toPage": 220,
      "description": "瓦西里公爵为图其财产，安排女儿与皮埃尔成婚。"
     },
     {
      "title": "与多洛霍夫绯闻",
      "fromPage": 460,
      "toPage": 480,
      "description": "与多洛霍夫关系暧昧，致皮埃尔与之决斗。"
     },
     {
      "title": "周旋于两国外交圈",
      "fromPage": 700,
      "toPage": 720,
      "description": "改信天主教，试图离婚再嫁，周旋于权贵之间。"
     },
     {
      "title": "暴病而亡",
      "fromPage": 900,
      "toPage": 900,
      "description": "突然患病，服错药而死，死状可怖。"
     }
    ],
    "ending": "突患重病，服错药而猝死",
    "endingPage": 900,
    "note": "美貌而无心，社交界的成功者。"
   },
   {
    "id": "wp-anatole",
    "primaryName": "阿纳托利·库拉金",
    "names": [
     {
      "text": "阿纳托利",
      "type": "小名",
      "note": ""
     },
     {
      "text": "阿纳托尔",
      "type": "别名",
      "note": "法式称呼"
     },
     {
      "text": "库拉金公爵",
      "type": "简称",
      "note": "通称"
     },
     {
      "text": "Курагин",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "瓦西里公爵之子，近卫骑兵军官",
    "firstPage": 18,
    "appearances": [
     18,
     60,
     620,
     680,
     700,
     900
    ],
    "locations": [
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 18,
      "toPage": 700,
      "note": "浪荡社交"
     },
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 680,
      "toPage": 700,
      "note": "诱拐娜塔莎的据点"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 18,
      "toPage": 900,
      "note": "库拉金家族"
     }
    ],
    "groups": [
     "配角",
     "贵族",
     "军官"
    ],
    "experiences": [
     {
      "title": "荒唐的单身生活",
      "fromPage": 18,
      "toPage": 600,
      "description": "挥霍无度，与多洛霍夫结伴游荡，屡惹风波。"
     },
     {
      "title": "诱拐娜塔莎",
      "fromPage": 680,
      "toPage": 700,
      "description": "已有妻室而诓骗娜塔莎私奔，被玛丽亚·德米特里耶夫娜阻止。"
     },
     {
      "title": "被逐出莫斯科",
      "fromPage": 700,
      "toPage": 700,
      "description": "皮埃尔出面干预，迫其离开莫斯科。"
     },
     {
      "title": "战场断腿",
      "fromPage": 900,
      "toPage": 900,
      "description": "在战地医院被截去一腿，痛苦中死去。"
     }
    ],
    "ending": "在战地医院截肢后痛苦而死",
    "endingPage": 900,
    "note": "外表俊美而灵魂空虚。"
   },
   {
    "id": "wp-dolokhov",
    "primaryName": "多洛霍夫",
    "names": [
     {
      "text": "费佳",
      "type": "小名",
      "note": "同伴称呼"
     },
     {
      "text": "多洛霍夫",
      "type": "简称",
      "note": ""
     },
     {
      "text": "Долохов",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "俄军军官，以勇猛与狂放著称",
    "firstPage": 60,
    "appearances": [
     60,
     200,
     300,
     340,
     460,
     480,
     1080
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 60,
      "toPage": 480,
      "note": "纵酒赌斗"
     },
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 460,
      "toPage": 480,
      "note": "与海伦绯闻"
     },
     {
      "place": "鲍罗季诺",
      "city": "鲍罗季诺",
      "country": "俄罗斯",
      "fromPage": 1080,
      "toPage": 1120,
      "note": "率敢死队反击"
     }
    ],
    "factions": [
     {
      "name": "俄军",
      "group": "军队",
      "fromPage": 200,
      "toPage": 1120,
      "note": ""
     },
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 60,
      "toPage": 1120,
      "note": ""
     }
    ],
    "groups": [
     "配角",
     "军官"
    ],
    "experiences": [
     {
      "title": "赌局赢尼古拉巨款",
      "fromPage": 340,
      "toPage": 360,
      "description": "在牌桌上冷静地赢下罗斯托夫四万三千卢布。"
     },
     {
      "title": "决斗伤皮埃尔",
      "fromPage": 460,
      "toPage": 480,
      "description": "与皮埃尔决斗中弹受伤，仍不改狂傲。"
     },
     {
      "title": "携阿纳托利行诱拐之计",
      "fromPage": 680,
      "toPage": 700,
      "description": "为阿纳托利策划并护送诱拐娜塔莎。"
     },
     {
      "title": "鲍罗季诺立功",
      "fromPage": 1080,
      "toPage": 1120,
      "description": "率部反击法军，战功卓著，获将军嘉奖。"
     }
    ],
    "ending": "战后结局不详，一说升为将军后隐居",
    "endingPage": null,
    "note": "疯狂而坚毅，母与妹前的另一副面孔。"
   },
   {
    "id": "wp-boris",
    "primaryName": "鲍里斯·德鲁别茨科伊",
    "names": [
     {
      "text": "鲍里斯",
      "type": "小名",
      "note": ""
     },
     {
      "text": "鲍里亚",
      "type": "昵称",
      "note": "母亲称呼"
     },
     {
      "text": "德鲁别茨科伊公爵",
      "type": "简称",
      "note": "通称"
     },
     {
      "text": "Друбецкой",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "俄军军官，后为侍从武官",
    "firstPage": 8,
    "appearances": [
     8,
     60,
     120,
     200,
     480,
     700,
     900,
     1150
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 8,
      "toPage": 200,
      "note": "贫寒的公爵之家"
     },
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 200,
      "toPage": 900,
      "note": "凭钻营升迁"
     },
     {
      "place": "蒂尔西特",
      "city": "蒂尔西特",
      "country": "波兰",
      "fromPage": 480,
      "toPage": 500,
      "note": "见证两国皇帝会盟"
     }
    ],
    "factions": [
     {
      "name": "俄军",
      "group": "军队",
      "fromPage": 120,
      "toPage": 1150,
      "note": ""
     },
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 8,
      "toPage": 1150,
      "note": ""
     }
    ],
    "groups": [
     "配角",
     "军官",
     "仕途"
    ],
    "experiences": [
     {
      "title": "母亲为其谋职奔走",
      "fromPage": 8,
      "toPage": 60,
      "description": "安娜·米哈伊洛夫娜借旧情为其求得近卫军军职。"
     },
     {
      "title": "与娜塔莎青梅之谊",
      "fromPage": 60,
      "toPage": 120,
      "description": "少年时与娜塔莎亲近，后因门第之见冷淡。"
     },
     {
      "title": "攀附权贵而升迁",
      "fromPage": 480,
      "toPage": 700,
      "description": "娶朱丽·卡拉金娜以得财产，仕途顺遂。"
     },
     {
      "title": "战乱中保全自身",
      "fromPage": 900,
      "toPage": 1150,
      "description": "疏散时留守莫斯科，善于周旋自保。"
     }
    ],
    "ending": "战后仕途顺遂，跻身显贵之列",
    "endingPage": 1150,
    "note": "精明而务实，典型的仕途主义者。"
   },
   {
    "id": "wp-kutuzov",
    "primaryName": "库图佐夫",
    "names": [
     {
      "text": "米哈伊尔·伊拉里奥诺维奇",
      "type": "本名",
      "note": "教名与父称"
     },
     {
      "text": "库图佐夫元帅",
      "type": "尊称",
      "note": "俄军总司令"
     },
     {
      "text": "Кутузов",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "俄军总司令，元帅",
    "firstPage": 200,
    "appearances": [
     200,
     380,
     900,
     1000,
     1080,
     1120,
     1200,
     1280
    ],
    "locations": [
     {
      "place": "奥斯特利茨",
      "city": "奥斯特利茨",
      "country": "捷克",
      "fromPage": 180,
      "toPage": 200,
      "note": "会战失利"
     },
     {
      "place": "鲍罗季诺",
      "city": "鲍罗季诺",
      "country": "俄罗斯",
      "fromPage": 1080,
      "toPage": 1150,
      "note": "指挥会战"
     },
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 1000,
      "toPage": 1050,
      "note": "菲里军事会议决定弃城"
     },
     {
      "place": "本尼格森驻地",
      "city": "维尔纳",
      "country": "立陶宛",
      "fromPage": 1200,
      "toPage": 1280,
      "note": "追击法军至境外"
     }
    ],
    "factions": [
     {
      "name": "俄军",
      "group": "军队",
      "fromPage": 180,
      "toPage": 1280,
      "note": "最高统帅"
     },
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 180,
      "toPage": 1280,
      "note": ""
     }
    ],
    "groups": [
     "统帅",
     "历史人物"
    ],
    "experiences": [
     {
      "title": "奥斯特利茨的沉默",
      "fromPage": 180,
      "toPage": 200,
      "description": "明知会战不利而无力阻止，战后老泪纵横。"
     },
     {
      "title": "受命统军抗法",
      "fromPage": 900,
      "toPage": 950,
      "description": "在众望所归中就任总司令，安抚军心。"
     },
     {
      "title": "菲里会议决定弃莫斯科",
      "fromPage": 1030,
      "toPage": 1050,
      "description": "力排众议，决定不作城下之役，保存军队。"
     },
     {
      "title": "塔鲁季诺与追击",
      "fromPage": 1150,
      "toPage": 1280,
      "description": "以逸待劳，待法军溃退时徐徐追击，保存实力。"
     }
    ],
    "ending": "追击法军至境外后病逝于本斯劳",
    "endingPage": 1280,
    "note": "托尔斯泰笔下“朴素、善良与真实”的统帅典范。"
   },
   {
    "id": "wp-napoleon",
    "primaryName": "拿破仑",
    "names": [
     {
      "text": "波拿巴",
      "type": "姓氏",
      "note": "法军统帅通称"
     },
     {
      "text": "拿破仑一世",
      "type": "尊号",
      "note": "法国皇帝"
     },
     {
      "text": "Buonaparte",
      "type": "原文",
      "note": "意式拼写原文"
     }
    ],
    "gender": "男",
    "role": "法国皇帝，法军统帅",
    "firstPage": 200,
    "appearances": [
     200,
     380,
     480,
     900,
     1000,
     1080,
     1120,
     1250
    ],
    "locations": [
     {
      "place": "奥斯特利茨",
      "city": "奥斯特利茨",
      "country": "捷克",
      "fromPage": 180,
      "toPage": 200,
      "note": "大捷"
     },
     {
      "place": "蒂尔西特",
      "city": "蒂尔西特",
      "country": "波兰",
      "fromPage": 480,
      "toPage": 500,
      "note": "与亚历山大一世会盟"
     },
     {
      "place": "鲍罗季诺",
      "city": "鲍罗季诺",
      "country": "俄罗斯",
      "fromPage": 1080,
      "toPage": 1150,
      "note": "受伤病与寒冷困扰"
     },
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 1150,
      "toPage": 1200,
      "note": "入空城而等候求和"
     },
     {
      "place": "巴黎",
      "city": "巴黎",
      "country": "法国",
      "fromPage": 1250,
      "toPage": 1300,
      "note": "帝国崩溃"
     }
    ],
    "factions": [
     {
      "name": "法军",
      "group": "军队",
      "fromPage": 180,
      "toPage": 1300,
      "note": "最高统帅"
     },
     {
      "name": "法国",
      "group": "国家",
      "fromPage": 180,
      "toPage": 1300,
      "note": "皇帝"
     }
    ],
    "groups": [
     "统帅",
     "历史人物"
    ],
    "experiences": [
     {
      "title": "奥斯特利茨的胜利",
      "fromPage": 180,
      "toPage": 200,
      "description": "诱敌深入，一战而定欧洲格局。"
     },
     {
      "title": "蒂尔西特会盟",
      "fromPage": 480,
      "toPage": 500,
      "description": "与亚历山大一世平分欧洲势力，风光至极。"
     },
     {
      "title": "入侵俄国",
      "fromPage": 900,
      "toPage": 1080,
      "description": "率六十万大军渡涅曼河，直逼莫斯科。"
     },
     {
      "title": "莫斯科的等待与溃退",
      "fromPage": 1150,
      "toPage": 1250,
      "description": "入空城等待投降未果，严冬中大军溃散。"
     }
    ],
    "ending": "远征俄国失败，帝国崩溃，被流放圣赫勒拿岛",
    "endingPage": 1300,
    "note": "托尔斯泰视其为历史必然性的工具而非伟人。"
   },
   {
    "id": "wp-alexander",
    "primaryName": "亚历山大一世",
    "names": [
     {
      "text": "亚历山大",
      "type": "小名",
      "note": ""
     },
     {
      "text": "俄国皇帝",
      "type": "尊号",
      "note": ""
     },
     {
      "text": "Александр I",
      "type": "原文",
      "note": "原文写法"
     }
    ],
    "gender": "男",
    "role": "俄国皇帝",
    "firstPage": 40,
    "appearances": [
     40,
     200,
     480,
     900,
     1080,
     1200,
     1280
    ],
    "locations": [
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 40,
      "toPage": 900,
      "note": "冬宫理政"
     },
     {
      "place": "奥斯特利茨",
      "city": "奥斯特利茨",
      "country": "捷克",
      "fromPage": 180,
      "toPage": 200,
      "note": "亲临战场而败"
     },
     {
      "place": "蒂尔西特",
      "city": "蒂尔西特",
      "country": "波兰",
      "fromPage": 480,
      "toPage": 500,
      "note": "与拿破仑会盟"
     },
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 1200,
      "toPage": 1280,
      "note": "战后凯旋"
     }
    ],
    "factions": [
     {
      "name": "俄军",
      "group": "军队",
      "fromPage": 40,
      "toPage": 1280,
      "note": "最高统帅名义"
     },
     {
      "name": "俄国",
      "group": "国家",
      "fromPage": 40,
      "toPage": 1280,
      "note": "皇帝"
     }
    ],
    "groups": [
     "君主",
     "历史人物"
    ],
    "experiences": [
     {
      "title": "亲临奥斯特利茨",
      "fromPage": 180,
      "toPage": 200,
      "description": "不顾库图佐夫谏阻而战，败后痛哭。"
     },
     {
      "title": "蒂尔西特之盟",
      "fromPage": 480,
      "toPage": 500,
      "description": "与拿破仑结盟，被迫参加大陆封锁。"
     },
     {
      "title": "1812年誓师抗法",
      "fromPage": 900,
      "toPage": 950,
      "description": "在莫斯科贵族会上慷慨陈词，亲自号召抵抗。"
     },
     {
      "title": "战后进军巴黎",
      "fromPage": 1280,
      "toPage": 1380,
      "description": "率联军进入巴黎，成为欧洲的救主。"
     }
    ],
    "ending": "率联军进入巴黎，晚年转向神秘主义",
    "endingPage": 1280,
    "note": "仁厚而优柔，被托尔斯泰写得富有人情味。"
   },
   {
    "id": "wp-oldbolkonsky",
    "primaryName": "老博尔孔斯基公爵",
    "names": [
     {
      "text": "尼古拉·安德烈耶维奇",
      "type": "本名",
      "note": "教名与父称"
     },
     {
      "text": "老公爵",
      "type": "俗称",
      "note": "家人称呼"
     },
     {
      "text": "Болконский",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "退役陆军上将，童山庄园主人",
    "firstPage": 60,
    "appearances": [
     60,
     130,
     300,
     700,
     900,
     1000
    ],
    "locations": [
     {
      "place": "童山",
      "city": "童山",
      "country": "俄罗斯",
      "fromPage": 60,
      "toPage": 1000,
      "note": "闭门隐居，亲自课女"
     },
     {
      "place": "博尔孔斯科耶庄园",
      "city": "博尔孔斯科耶庄园",
      "country": "俄罗斯",
      "fromPage": 900,
      "toPage": 1000,
      "note": "晚年迁居"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 60,
      "toPage": 1000,
      "note": "叶卡捷琳娜时代老臣"
     }
    ],
    "groups": [
     "长辈",
     "贵族"
    ],
    "experiences": [
     {
      "title": "退隐与治家",
      "fromPage": 60,
      "toPage": 300,
      "description": "因失宠于保罗一世而隐居，以几何与德语课女。"
     },
     {
      "title": "反对儿子婚事",
      "fromPage": 380,
      "toPage": 400,
      "description": "要求安德烈延后一年再娶，促成后来的变局。"
     },
     {
      "title": "临终前的固执",
      "fromPage": 900,
      "toPage": 1000,
      "description": "战乱中不愿离庄，中风后仍强撑理政。"
     },
     {
      "title": "中风而亡",
      "fromPage": 1000,
      "toPage": 1000,
      "description": "与玛丽亚争吵后中风，临终请求女儿原谅。"
     }
    ],
    "ending": "中风后病逝于博尔孔斯科耶庄园",
    "endingPage": 1000,
    "note": "骄傲刻薄而内里慈爱，旧俄贵族的典型。"
   },
   {
    "id": "wp-sonya",
    "primaryName": "索尼娅",
    "names": [
     {
      "text": "索尼娅",
      "type": "小名",
      "note": ""
     },
     {
      "text": "索菲娅",
      "type": "本名",
      "note": "教名"
     },
     {
      "text": "Соня",
      "type": "原文",
      "note": "原文小名"
     }
    ],
    "gender": "女",
    "role": "罗斯托夫家的外甥女，寄养闺秀",
    "firstPage": 8,
    "appearances": [
     8,
     40,
     120,
     300,
     700,
     900,
     1340
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 8,
      "toPage": 900,
      "note": "寄居罗斯托夫家"
     },
     {
      "place": "奥特拉德诺耶",
      "city": "奥特拉德诺耶",
      "country": "俄罗斯",
      "fromPage": 300,
      "toPage": 400,
      "note": "乡间庄园"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 8,
      "toPage": 1340,
      "note": "依附罗斯托夫家"
     }
    ],
    "groups": [
     "配角",
     "女性"
    ],
    "experiences": [
     {
      "title": "与尼古拉相恋",
      "fromPage": 120,
      "toPage": 300,
      "description": "自幼与尼古拉相许，情深而不被家族认可。"
     },
     {
      "title": "代笔与周旋",
      "fromPage": 620,
      "toPage": 700,
      "description": "为娜塔莎与阿纳托利传信，事后深自悔恨。"
     },
     {
      "title": "成全尼古拉与玛丽亚",
      "fromPage": 1250,
      "toPage": 1340,
      "description": "自知无产无势，放手让尼古拉与玛丽亚结合。"
     }
    ],
    "ending": "终身未嫁，依附尼古拉一家生活",
    "endingPage": 1340,
    "note": "自我牺牲式的爱，如“不育之花”。"
   },
   {
    "id": "wp-oldbezukhov",
    "primaryName": "别祖霍夫伯爵",
    "names": [
     {
      "text": "基里尔·弗拉基米罗维奇",
      "type": "本名",
      "note": "教名与父称"
     },
     {
      "text": "老伯爵",
      "type": "俗称",
      "note": ""
     },
     {
      "text": "Безухов",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "叶卡捷琳娜时代显贵，巨富",
    "firstPage": 4,
    "appearances": [
     4,
     40,
     60
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 4,
      "toPage": 60,
      "note": "病榻与宅邸"
     },
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 4,
      "toPage": 4,
      "note": "早年显赫之地"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 4,
      "toPage": 60,
      "note": "俄国首富"
     }
    ],
    "groups": [
     "长辈",
     "贵族"
    ],
    "experiences": [
     {
      "title": "六次中风后病危",
      "fromPage": 40,
      "toPage": 60,
      "description": "病榻上仍被亲族围绕，众人窥伺其遗产。"
     },
     {
      "title": "认皮埃尔为子",
      "fromPage": 60,
      "toPage": 60,
      "description": "临终前上书皇帝，请求承认私生子皮埃尔为合法继承人。"
     },
     {
      "title": "遗产之争",
      "fromPage": 60,
      "toPage": 70,
      "description": "瓦西里公爵与安娜·米哈伊洛夫娜争夺遗嘱，终归皮埃尔。"
     }
    ],
    "ending": "病重逝世，遗产归皮埃尔继承",
    "endingPage": 60,
    "note": "一生显赫，临终一幕揭示贵族家庭的贪欲。"
   },
   {
    "id": "wp-vasili",
    "primaryName": "瓦西里·库拉金公爵",
    "names": [
     {
      "text": "瓦西里公爵",
      "type": "简称",
      "note": "通称"
     },
     {
      "text": "瓦夏",
      "type": "昵称",
      "note": "亲近者称呼"
     },
     {
      "text": "Курагин",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "彼得堡显贵，宫廷重臣",
    "firstPage": 18,
    "appearances": [
     18,
     60,
     200,
     480,
     700,
     900
    ],
    "locations": [
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 18,
      "toPage": 900,
      "note": "宫廷与沙龙"
     },
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 60,
      "toPage": 200,
      "note": "为遗产与婚事奔走"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 18,
      "toPage": 900,
      "note": "库拉金家族"
     }
    ],
    "groups": [
     "配角",
     "贵族",
     "仕途"
    ],
    "experiences": [
     {
      "title": "图谋别祖霍夫遗产",
      "fromPage": 40,
      "toPage": 70,
      "description": "试图销毁遗嘱，终未得逞。"
     },
     {
      "title": "撮合皮埃尔与海伦",
      "fromPage": 200,
      "toPage": 220,
      "description": "以社交手段促成婚事，婚后即置身事外。"
     },
     {
      "title": "为阿纳托利谋婚",
      "fromPage": 620,
      "toPage": 700,
      "description": "先图玛丽亚公爵小姐的财产，后又纵容儿子纠缠娜塔莎。"
     }
    ],
    "ending": "晚年中风失语，家道渐衰",
    "endingPage": 900,
    "note": "善于钻营的宫廷权贵。"
   },
   {
    "id": "wp-denisov",
    "primaryName": "杰尼索夫",
    "names": [
     {
      "text": "瓦西里·德米特里耶维奇",
      "type": "本名",
      "note": "教名与父称"
     },
     {
      "text": "瓦夏",
      "type": "小名",
      "note": "同伴昵称"
     },
     {
      "text": "Денисов",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "俄军骠骑兵中校，游击队长",
    "firstPage": 120,
    "appearances": [
     120,
     200,
     300,
     340,
     620,
     1080,
     1200
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 120,
      "toPage": 340,
      "note": "休假时住在罗斯托夫家"
     },
     {
      "place": "前线营地",
      "city": "斯摩棱斯克",
      "country": "俄罗斯",
      "fromPage": 200,
      "toPage": 620,
      "note": "随军转战"
     },
     {
      "place": "维亚济马",
      "city": "维亚济马",
      "country": "俄罗斯",
      "fromPage": 1150,
      "toPage": 1200,
      "note": "率游击队袭击法军"
     }
    ],
    "factions": [
     {
      "name": "俄军",
      "group": "军队",
      "fromPage": 120,
      "toPage": 1250,
      "note": "骠骑兵与游击队"
     }
    ],
    "groups": [
     "配角",
     "军官"
    ],
    "experiences": [
     {
      "title": "向娜塔莎求婚被拒",
      "fromPage": 300,
      "toPage": 320,
      "description": "倾心娜塔莎，因其年幼而被伯爵夫人婉拒。"
     },
     {
      "title": "与尼古拉结为挚友",
      "fromPage": 120,
      "toPage": 1200,
      "description": "军中同袍，情谊终生不渝。"
     },
     {
      "title": "游击战立功",
      "fromPage": 1150,
      "toPage": 1200,
      "description": "率游击队破袭法军辎重，解救俘虏。"
     }
    ],
    "ending": "战后仍留军中，结局不详",
    "endingPage": null,
    "note": "豪爽仗义，说话含混不清的骠骑兵。"
   },
   {
    "id": "wp-platon",
    "primaryName": "普拉东·卡拉塔耶夫",
    "names": [
     {
      "text": "普拉东",
      "type": "小名",
      "note": ""
     },
     {
      "text": "卡拉塔耶夫",
      "type": "简称",
      "note": "通称"
     },
     {
      "text": "Каратаев",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "男",
    "role": "被俘的俄军士兵，农民出身",
    "firstPage": 1080,
    "appearances": [
     1080,
     1120,
     1150,
     1200,
     1220
    ],
    "locations": [
     {
      "place": "鲍罗季诺",
      "city": "鲍罗季诺",
      "country": "俄罗斯",
      "fromPage": 1080,
      "toPage": 1120,
      "note": "会战中受伤被俘"
     },
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 1150,
      "toPage": 1200,
      "note": "与皮埃尔同囚"
     },
     {
      "place": "斯摩棱斯克大道",
      "city": "斯摩棱斯克",
      "country": "俄罗斯",
      "fromPage": 1200,
      "toPage": 1220,
      "note": "随俘虏队伍行军"
     }
    ],
    "factions": [
     {
      "name": "俄军",
      "group": "军队",
      "fromPage": 1080,
      "toPage": 1220,
      "note": "普通士兵"
     },
     {
      "name": "农民",
      "group": "阶层",
      "fromPage": 1080,
      "toPage": 1220,
      "note": ""
     }
    ],
    "groups": [
     "配角",
     "平民"
    ],
    "experiences": [
     {
      "title": "与皮埃尔同囚",
      "fromPage": 1150,
      "toPage": 1200,
      "description": "以温和与圆融的言语给皮埃尔以精神安慰。"
     },
     {
      "title": "讲述商人故事",
      "fromPage": 1200,
      "toPage": 1200,
      "description": "讲无罪商人蒙冤而安然受死的故事，喻示顺从天意。"
     },
     {
      "title": "被法军枪杀",
      "fromPage": 1220,
      "toPage": 1220,
      "description": "行军途中因病掉队，被法军就地枪决。"
     }
    ],
    "ending": "随俘虏队行军途中病倒，被法军枪杀",
    "endingPage": 1220,
    "note": "象征俄罗斯民众的圆融、善良与生命力。"
   },
   {
    "id": "wp-annapavlovna",
    "primaryName": "安娜·帕夫洛夫娜",
    "names": [
     {
      "text": "安娜·帕夫洛夫娜·舍列尔",
      "type": "本名",
      "note": "全名"
     },
     {
      "text": "舍列尔",
      "type": "简称",
      "note": "姓氏"
     },
     {
      "text": "Шерер",
      "type": "原文",
      "note": "姓氏原文"
     }
    ],
    "gender": "女",
    "role": "皇太后近侍，彼得堡沙龙女主人",
    "firstPage": 1,
    "appearances": [
     1,
     18,
     60,
     200,
     480,
     700
    ],
    "locations": [
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 1,
      "toPage": 700,
      "note": "举办沙龙"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 1,
      "toPage": 700,
      "note": "宫廷圈"
     }
    ],
    "groups": [
     "配角",
     "贵族",
     "社交"
    ],
    "experiences": [
     {
      "title": "1805年的沙龙",
      "fromPage": 1,
      "toPage": 18,
      "description": "全书开篇，以沙龙闲谈引出主要人物与时局。"
     },
     {
      "title": "传播战事与流言",
      "fromPage": 18,
      "toPage": 200,
      "description": "在沙龙中评论莫蒂埃之死、拿破仑与库图佐夫。"
     },
     {
      "title": "风向转变时的姿态",
      "fromPage": 480,
      "toPage": 700,
      "description": "随政局与社交风向变换言辞与立场。"
     }
    ],
    "ending": "结局不详，始终活跃于宫廷社交圈",
    "endingPage": null,
    "note": "以沙龙映射宫廷政治的晴雨表。"
   },
   {
    "id": "wp-liza",
    "primaryName": "丽莎·博尔孔斯卡娅",
    "names": [
     {
      "text": "丽莎",
      "type": "小名",
      "note": ""
     },
     {
      "text": "丽莎公爵夫人",
      "type": "简称",
      "note": "通称"
     },
     {
      "text": "小公爵夫人",
      "type": "俗称",
      "note": "童山家人称呼"
     }
    ],
    "gender": "女",
    "role": "安德烈之妻，库图佐夫之女远亲",
    "firstPage": 6,
    "appearances": [
     6,
     40,
     60,
     130,
     190
    ],
    "locations": [
     {
      "place": "彼得堡",
      "city": "彼得堡",
      "country": "俄罗斯",
      "fromPage": 6,
      "toPage": 40,
      "note": "婚前社交"
     },
     {
      "place": "童山",
      "city": "童山",
      "country": "俄罗斯",
      "fromPage": 60,
      "toPage": 190,
      "note": "待产"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 6,
      "toPage": 190,
      "note": ""
     }
    ],
    "groups": [
     "配角",
     "女性"
    ],
    "experiences": [
     {
      "title": "沙龙中的可爱形象",
      "fromPage": 6,
      "toPage": 18,
      "description": "在安娜·帕夫洛夫娜的晚会上以短唇与笑靥受人喜爱。"
     },
     {
      "title": "与安德烈的冷淡婚姻",
      "fromPage": 40,
      "toPage": 60,
      "description": "丈夫从军后独留庄园，与公公难以相处。"
     },
     {
      "title": "难产而死",
      "fromPage": 190,
      "toPage": 190,
      "description": "安德烈归来之际分娩，产下男婴后死去。"
     }
    ],
    "ending": "分娩时难产而死，留下幼子尼古卢什卡",
    "endingPage": 190,
    "note": "托尔斯泰笔下“小妇人”式的可爱与悲剧。"
   },
   {
    "id": "wp-mariadmitrievna",
    "primaryName": "玛丽亚·德米特里耶夫娜",
    "names": [
     {
      "text": "玛丽亚·德米特里耶夫娜·阿赫罗西莫娃",
      "type": "本名",
      "note": "全名"
     },
     {
      "text": "阿赫罗西莫娃",
      "type": "简称",
      "note": "姓氏"
     },
     {
      "text": "可怕的龙",
      "type": "绰号",
      "note": "社交界戏称"
     }
    ],
    "gender": "女",
    "role": "莫斯科老派贵族，罗斯托夫家至交",
    "firstPage": 300,
    "appearances": [
     300,
     340,
     620,
     680,
     700,
     900
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 300,
      "toPage": 900,
      "note": "家中接待宾客"
     },
     {
      "place": "奥特拉德诺耶",
      "city": "奥特拉德诺耶",
      "country": "俄罗斯",
      "fromPage": 340,
      "toPage": 400,
      "note": "往访罗斯托夫家"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 300,
      "toPage": 900,
      "note": "莫斯科老贵族圈"
     }
    ],
    "groups": [
     "配角",
     "长辈"
    ],
    "experiences": [
     {
      "title": "为尼古拉与索尼娅做主",
      "fromPage": 340,
      "toPage": 360,
      "description": "直言指责罗斯托夫家对索尼娅不公，令伯爵夫人落泪。"
     },
     {
      "title": "挫败诱拐娜塔莎的阴谋",
      "fromPage": 680,
      "toPage": 700,
      "description": "得知阿纳托利的计划后痛斥之，并逼其离开莫斯科。"
     },
     {
      "title": "战乱中的果决",
      "fromPage": 900,
      "toPage": 900,
      "description": "法军入城时从容不迫，仍以旧日威严处事。"
     }
    ],
    "ending": "结局不详，战后仍居莫斯科",
    "endingPage": null,
    "note": "心直口快、行事泼辣，代表旧莫斯科的厚道与威严。"
   },
   {
    "id": "wp-julie",
    "primaryName": "朱丽·卡拉金娜",
    "names": [
     {
      "text": "朱丽",
      "type": "小名",
      "note": ""
     },
     {
      "text": "卡拉金娜",
      "type": "简称",
      "note": "姓氏"
     },
     {
      "text": "朱丽·德鲁别茨卡娅",
      "type": "尊称",
      "note": "婚后从夫姓"
     }
    ],
    "gender": "女",
    "role": "莫斯科富家小姐，后为鲍里斯之妻",
    "firstPage": 120,
    "appearances": [
     120,
     300,
     480,
     620,
     700
    ],
    "locations": [
     {
      "place": "莫斯科",
      "city": "莫斯科",
      "country": "俄罗斯",
      "fromPage": 120,
      "toPage": 700,
      "note": "父母宅邸"
     }
    ],
    "factions": [
     {
      "name": "贵族",
      "group": "阶层",
      "fromPage": 120,
      "toPage": 700,
      "note": ""
     }
    ],
    "groups": [
     "配角",
     "女性"
    ],
    "experiences": [
     {
      "title": "忧郁的闺中生活",
      "fromPage": 120,
      "toPage": 300,
      "description": "为父母守丧而久困家中，以哀愁与诗书自遣。"
     },
     {
      "title": "与鲍里斯通信往来",
      "fromPage": 480,
      "toPage": 620,
      "description": "两人在战乱中以书信互诉，终成婚配。"
     },
     {
      "title": "以财产结姻",
      "fromPage": 620,
      "toPage": 700,
      "description": "婚后财产归鲍里斯，成为其仕途的资本。"
     }
    ],
    "ending": "与鲍里斯结婚，成为其仕途的经济基础",
    "endingPage": 700,
    "note": "平庸而多愁，贵族婚姻交易性的写照。"
   }
  ],
  "relations": [
   {
    "id": "wp-r1",
    "from": "wp-andrei",
    "to": "wp-natasha",
    "type": "订婚/生死相恋",
    "category": "情感",
    "sincePage": 380,
    "untilPage": 1300,
    "directed": false,
    "note": "订婚又决裂，终在临终前和解"
   },
   {
    "id": "wp-r2",
    "from": "wp-pierre",
    "to": "wp-natasha",
    "type": "夫妻",
    "category": "婚姻",
    "sincePage": 1340,
    "untilPage": null,
    "directed": false,
    "note": "战后的结合与家庭生活"
   },
   {
    "id": "wp-r3",
    "from": "wp-pierre",
    "to": "wp-helen",
    "type": "夫妻/反目",
    "category": "婚姻",
    "sincePage": 200,
    "untilPage": 900,
    "directed": false,
    "note": "被撮合的婚姻，终致决斗分居"
   },
   {
    "id": "wp-r4",
    "from": "wp-pierre",
    "to": "wp-andrei",
    "type": "挚友",
    "category": "师友",
    "sincePage": 6,
    "untilPage": 1300,
    "directed": false,
    "note": "一生最重要的友谊与思想交流"
   },
   {
    "id": "wp-r5",
    "from": "wp-andrei",
    "to": "wp-maria",
    "type": "兄妹",
    "category": "亲属",
    "sincePage": 60,
    "untilPage": 1300,
    "directed": false,
    "note": "相依为命，互托后事"
   },
   {
    "id": "wp-r6",
    "from": "wp-oldbolkonsky",
    "to": "wp-andrei",
    "type": "父子",
    "category": "亲属",
    "sincePage": 60,
    "untilPage": 1000,
    "directed": true,
    "note": "严苛而深藏亲情"
   },
   {
    "id": "wp-r7",
    "from": "wp-oldbolkonsky",
    "to": "wp-maria",
    "type": "父女",
    "category": "亲属",
    "sincePage": 60,
    "untilPage": 1000,
    "directed": true,
    "note": "亲自课女，苛待与怜爱并存"
   },
   {
    "id": "wp-r8",
    "from": "wp-andrei",
    "to": "wp-liza",
    "type": "夫妻",
    "category": "婚姻",
    "sincePage": 40,
    "untilPage": 190,
    "directed": false,
    "note": "冷淡的婚姻，妻子难产而亡"
   },
   {
    "id": "wp-r9",
    "from": "wp-natasha",
    "to": "wp-nikolai",
    "type": "兄妹",
    "category": "亲属",
    "sincePage": 8,
    "untilPage": 1360,
    "directed": false,
    "note": "罗斯托夫家兄妹情深"
   },
   {
    "id": "wp-r10",
    "from": "wp-natasha",
    "to": "wp-sonya",
    "type": "表姐妹/情敌",
    "category": "亲属",
    "sincePage": 8,
    "untilPage": 1360,
    "directed": false,
    "note": "同在罗斯托夫家长大"
   },
   {
    "id": "wp-r11",
    "from": "wp-sonya",
    "to": "wp-nikolai",
    "type": "恋人/未成眷属",
    "category": "情感",
    "sincePage": 120,
    "untilPage": 1340,
    "directed": false,
    "note": "痴心等待而终被放弃"
   },
   {
    "id": "wp-r12",
    "from": "wp-nikolai",
    "to": "wp-maria",
    "type": "夫妻",
    "category": "婚姻",
    "sincePage": 1340,
    "untilPage": null,
    "directed": false,
    "note": "由战乱中的相救到成婚"
   },
   {
    "id": "wp-r13",
    "from": "wp-nikolai",
    "to": "wp-dolokhov",
    "type": "赌债/嫌隙",
    "category": "敌对",
    "sincePage": 340,
    "untilPage": 480,
    "directed": false,
    "note": "输巨款并因其与索尼娅之事生怨"
   },
   {
    "id": "wp-r14",
    "from": "wp-dolokhov",
    "to": "wp-helen",
    "type": "绯闻",
    "category": "情感",
    "sincePage": 460,
    "untilPage": 480,
    "directed": false,
    "note": "引发皮埃尔决斗的直接原因"
   },
   {
    "id": "wp-r15",
    "from": "wp-dolokhov",
    "to": "wp-anatole",
    "type": "同伴/帮凶",
    "category": "同盟",
    "sincePage": 60,
    "untilPage": 700,
    "directed": true,
    "note": "共同谋划诱拐娜塔莎"
   },
   {
    "id": "wp-r16",
    "from": "wp-anatole",
    "to": "wp-natasha",
    "type": "诱骗私奔",
    "category": "情感",
    "sincePage": 620,
    "untilPage": 700,
    "directed": true,
    "note": "已婚而诓骗娜塔莎，几乎毁其名声"
   },
   {
    "id": "wp-r17",
    "from": "wp-pierre",
    "to": "wp-anatole",
    "type": "斥逐",
    "category": "敌对",
    "sincePage": 700,
    "untilPage": 700,
    "directed": true,
    "note": "命其离开莫斯科并代偿其债"
   },
   {
    "id": "wp-r18",
    "from": "wp-vasili",
    "to": "wp-helen",
    "type": "父女",
    "category": "亲属",
    "sincePage": 18,
    "untilPage": 900,
    "directed": true,
    "note": "以女儿婚事谋取财产与地位"
   },
   {
    "id": "wp-r19",
    "from": "wp-vasili",
    "to": "wp-anatole",
    "type": "父子",
    "category": "亲属",
    "sincePage": 18,
    "untilPage": 900,
    "directed": true,
    "note": "纵容其胡为并为其谋婚"
   },
   {
    "id": "wp-r20",
    "from": "wp-vasili",
    "to": "wp-pierre",
    "type": "撮合姻亲",
    "category": "其他",
    "sincePage": 200,
    "untilPage": 220,
    "directed": true,
    "note": "为图财产促成婚事"
   },
   {
    "id": "wp-r21",
    "from": "wp-vasili",
    "to": "wp-oldbezukhov",
    "type": "遗产之争",
    "category": "敌对",
    "sincePage": 40,
    "untilPage": 60,
    "directed": true,
    "note": "试图销毁遗嘱未果"
   },
   {
    "id": "wp-r22",
    "from": "wp-oldbezukhov",
    "to": "wp-pierre",
    "type": "父子",
    "category": "亲属",
    "sincePage": 4,
    "untilPage": 60,
    "directed": true,
    "note": "临终认子，遗赠全部家产"
   },
   {
    "id": "wp-r23",
    "from": "wp-kutuzov",
    "to": "wp-andrei",
    "type": "上下级/器重",
    "category": "上下级",
    "sincePage": 200,
    "untilPage": 1300,
    "directed": true,
    "note": "视其如子，委以重任"
   },
   {
    "id": "wp-r24",
    "from": "wp-kutuzov",
    "to": "wp-napoleon",
    "type": "交战双方统帅",
    "category": "敌对",
    "sincePage": 180,
    "untilPage": 1280,
    "directed": false,
    "note": "俄法战争的核心对手"
   },
   {
    "id": "wp-r25",
    "from": "wp-alexander",
    "to": "wp-kutuzov",
    "type": "君臣",
    "category": "上下级",
    "sincePage": 200,
    "untilPage": 1280,
    "directed": true,
    "note": "曾不喜其迟缓，终倚为国家柱石"
   },
   {
    "id": "wp-r26",
    "from": "wp-alexander",
    "to": "wp-napoleon",
    "type": "结盟又为敌",
    "category": "敌对",
    "sincePage": 480,
    "untilPage": 1280,
    "directed": false,
    "note": "蒂尔西特结盟后反目为战"
   },
   {
    "id": "wp-r27",
    "from": "wp-napoleon",
    "to": "wp-andrei",
    "type": "敌手/被仰望者",
    "category": "敌对",
    "sincePage": 180,
    "untilPage": 200,
    "directed": true,
    "note": "安德烈曾以其为理想，后觉其渺小"
   },
   {
    "id": "wp-r28",
    "from": "wp-napoleon",
    "to": "wp-pierre",
    "type": "刺杀对象",
    "category": "敌对",
    "sincePage": 1080,
    "untilPage": 1200,
    "directed": true,
    "note": "皮埃尔一度欲行刺未遂"
   },
   {
    "id": "wp-r29",
    "from": "wp-denisov",
    "to": "wp-nikolai",
    "type": "战友",
    "category": "师友",
    "sincePage": 120,
    "untilPage": 1200,
    "directed": false,
    "note": "骠骑兵同袍，终生之交"
   },
   {
    "id": "wp-r30",
    "from": "wp-denisov",
    "to": "wp-natasha",
    "type": "求婚被拒",
    "category": "情感",
    "sincePage": 300,
    "untilPage": 320,
    "directed": true,
    "note": "因娜塔莎年幼而被婉拒"
   },
   {
    "id": "wp-r31",
    "from": "wp-platon",
    "to": "wp-pierre",
    "type": "精神启迪",
    "category": "师友",
    "sincePage": 1150,
    "untilPage": 1220,
    "directed": true,
    "note": "以圆融与顺从给皮埃尔以启示"
   },
   {
    "id": "wp-r32",
    "from": "wp-boris",
    "to": "wp-natasha",
    "type": "少年情谊",
    "category": "情感",
    "sincePage": 60,
    "untilPage": 120,
    "directed": false,
    "note": "青梅之谊因门第而止"
   },
   {
    "id": "wp-r33",
    "from": "wp-boris",
    "to": "wp-julie",
    "type": "夫妻",
    "category": "婚姻",
    "sincePage": 620,
    "untilPage": null,
    "directed": false,
    "note": "以财产为基础的婚姻"
   },
   {
    "id": "wp-r34",
    "from": "wp-boris",
    "to": "wp-helen",
    "type": "社交周旋",
    "category": "其他",
    "sincePage": 200,
    "untilPage": 480,
    "directed": false,
    "note": "借与海伦的往来打开仕途"
   },
   {
    "id": "wp-r35",
    "from": "wp-mariadmitrievna",
    "to": "wp-natasha",
    "type": "教母般的长辈",
    "category": "其他",
    "sincePage": 300,
    "untilPage": 900,
    "directed": true,
    "note": "在其危难时出手相救"
   },
   {
    "id": "wp-r36",
    "from": "wp-mariadmitrievna",
    "to": "wp-anatole",
    "type": "斥逐",
    "category": "敌对",
    "sincePage": 680,
    "untilPage": 700,
    "directed": true,
    "note": "痛斥其无耻并逼其离城"
   },
   {
    "id": "wp-r37",
    "from": "wp-annapavlovna",
    "to": "wp-vasili",
    "type": "沙龙盟友",
    "category": "同盟",
    "sincePage": 1,
    "untilPage": 700,
    "directed": false,
    "note": "宫廷社交圈中的合作者"
   },
   {
    "id": "wp-r38",
    "from": "wp-annapavlovna",
    "to": "wp-andrei",
    "type": "沙龙宾主",
    "category": "其他",
    "sincePage": 6,
    "untilPage": 60,
    "directed": true,
    "note": "安德烈厌其虚伪"
   },
   {
    "id": "wp-r39",
    "from": "wp-maria",
    "to": "wp-nikolai",
    "type": "相救与相恋",
    "category": "情感",
    "sincePage": 900,
    "untilPage": 1340,
    "directed": false,
    "note": "战乱中相助，终成夫妻"
   },
   {
    "id": "wp-r40",
    "from": "wp-maria",
    "to": "wp-natasha",
    "type": "姑嫂/知交",
    "category": "亲属",
    "sincePage": 1300,
    "untilPage": null,
    "directed": false,
    "note": "在安德烈临终时相伴"
   },
   {
    "id": "wp-r41",
    "from": "wp-nikolai",
    "to": "wp-andrei",
    "type": "同袍敬意",
    "category": "师友",
    "sincePage": 200,
    "untilPage": 1150,
    "directed": false,
    "note": "敬其为真正的军官"
   },
   {
    "id": "wp-r42",
    "from": "wp-pierre",
    "to": "wp-platon",
    "type": "被俘同伴",
    "category": "师友",
    "sincePage": 1150,
    "untilPage": 1220,
    "directed": false,
    "note": "在俘虏营中相依为命"
   },
   {
    "id": "wp-r43",
    "from": "wp-sonya",
    "to": "wp-maria",
    "type": "让位",
    "category": "其他",
    "sincePage": 1250,
    "untilPage": 1340,
    "directed": true,
    "note": "自知无望而成全尼古拉与玛丽亚"
   },
   {
    "id": "wp-r44",
    "from": "wp-liza",
    "to": "wp-natasha",
    "type": "无直接关系",
    "category": "其他",
    "sincePage": 6,
    "untilPage": 190,
    "directed": false,
    "note": "两人未曾相见，仅为同一情感线索的两端"
   },
   {
    "id": "wp-r45",
    "from": "wp-helen",
    "to": "wp-natasha",
    "type": "社交算计",
    "category": "敌对",
    "sincePage": 620,
    "untilPage": 700,
    "directed": true,
    "note": "协助阿纳托利接近娜塔莎"
   },
   {
    "id": "wp-r46",
    "from": "wp-kutuzov",
    "to": "wp-alexander",
    "type": "受命于君",
    "category": "上下级",
    "sincePage": 200,
    "untilPage": 1280,
    "directed": true,
    "note": "以保存军队为念，不迎合皇帝速战之意"
   },
   {
    "id": "wp-r47",
    "from": "wp-andrei",
    "to": "wp-mariadmitrievna",
    "type": "世交",
    "category": "其他",
    "sincePage": 60,
    "untilPage": 380,
    "directed": false,
    "note": "婚事的见证者之一"
   },
   {
    "id": "wp-r48",
    "from": "wp-natasha",
    "to": "wp-maria",
    "type": "由误解到和解",
    "category": "情感",
    "sincePage": 380,
    "untilPage": 1300,
    "directed": false,
    "note": "初次相见不欢，后成知己姑嫂"
   }
  ]
 }
]);
