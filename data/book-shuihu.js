// 示例数据：水浒传
window.SAMPLE_BOOKS = (window.SAMPLE_BOOKS || []).concat([
 {
  "id": "sample-shuihu",
  "meta": {
   "title": "水浒传（一百回本）",
   "author": "施耐庵、罗贯中",
   "publisher": "人民文学出版社",
   "isbn": "978-7-02-000874-2",
   "edition": "中国古典文学读本丛书",
   "year": "1997",
   "totalPages": 1300,
   "currentPage": 1,
   "note": "一百回本，页码为示例阅读版本页码"
  },
  "characters": [
   {
    "id": "sl-gaoqiu",
    "primaryName": "高俅",
    "names": [
     { "text": "高俅", "type": "本名", "note": "" },
     { "text": "高太尉", "type": "官职", "note": "殿帅府太尉" },
     { "text": "高殿帅", "type": "称呼", "note": "东京人称" }
    ],
    "gender": "男",
    "role": "殿帅府太尉 / 权奸",
    "firstPage": 22,
    "appearances": [22, 95, 700, 1060],
    "locations": [
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 22, "toPage": 1105, "note": "殿帅府太尉，把持朝政" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 22, "toPage": 1105, "note": "殿帅府太尉，权倾朝野" }
    ],
    "groups": ["朝廷权奸"],
    "experiences": [
     { "title": "发迹发贵、任殿帅府太尉", "fromPage": 22, "toPage": 40, "description": "本是东京破落户子弟，因踢得好脚气球得端王赏识，端王即位后官至殿帅府太尉。" },
     { "title": "陷害林冲、逼其刺配沧州", "fromPage": 92, "toPage": 140, "description": "为使其子高衙内得林娘子，设计诱林冲误入白虎堂，刺配沧州，又屡次买通公人加害。" },
     { "title": "三败梁山、被活捉上山", "fromPage": 700, "toPage": 760, "description": "举荐呼延灼征剿梁山，又亲自督战，连败三阵，被张顺活捉上山，宋江礼送下山。" },
     { "title": "阻挠招安、暗害宋江等", "fromPage": 1040, "toPage": 1100, "description": "招安后仍在朝中排挤梁山将领，与蔡京、童贯等结党，终致宋江、卢俊义被害。" }
    ],
    "ending": "在东京殿帅府病亡",
    "endingPage": 1105,
    "note": "全书最大反派之一，贯穿始终"
   },
   {
    "id": "sl-luzhishen",
    "primaryName": "鲁智深",
    "names": [
     { "text": "花和尚", "type": "绰号", "note": "因背上刺有花绣" },
     { "text": "鲁达", "type": "本名", "note": "渭州经略府提辖时的俗名" },
     { "text": "鲁提辖", "type": "身份", "note": "渭州经略相公帐下提辖" },
     { "text": "鲁智深", "type": "法名", "note": "五台山智真长老所取" }
    ],
    "gender": "男",
    "role": "步军头领 / 天孤星",
    "firstPage": 27,
    "appearances": [27, 60, 180, 1240],
    "locations": [
     { "place": "渭州", "city": "平凉", "country": "中国", "fromPage": 27, "toPage": 39, "note": "提辖任上，三拳打死镇关西" },
     { "place": "五台山", "city": "忻州", "country": "中国", "fromPage": 40, "toPage": 95, "note": "出家为僧，法名智深" },
     { "place": "东京大相国寺", "city": "开封", "country": "中国", "fromPage": 96, "toPage": 140, "note": "看管菜园，倒拔垂杨柳" },
     { "place": "二龙山", "city": "青州", "country": "中国", "fromPage": 150, "toPage": 300, "note": "与杨志、武松占山落草" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 300, "toPage": 1100, "note": "步军头领，坐第十三位" },
     { "place": "杭州六和寺", "city": "杭州", "country": "中国", "fromPage": 1200, "toPage": 1240, "note": "听潮而圆，坐化于此" }
    ],
    "factions": [
     { "name": "二龙山", "group": "山寨", "fromPage": 150, "toPage": 300, "note": "二龙山之主" },
     { "name": "梁山", "group": "山寨", "fromPage": 300, "toPage": 1070, "note": "步军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1240, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "步军十头领", "二龙山"],
    "experiences": [
     { "title": "拳打镇关西", "fromPage": 27, "toPage": 39, "description": "为金翠莲父女抱不平，三拳打死卖肉恶霸郑屠，弃官出走。" },
     { "title": "五台山出家、大相国寺倒拔垂杨柳", "fromPage": 40, "toPage": 140, "description": "智真长老剃度，因醉酒闹僧被打发至东京大相国寺，倒拔垂杨柳、结识林冲。" },
     { "title": "二龙山落草、三山聚义归梁山", "fromPage": 150, "toPage": 300, "description": "与杨志夺宝珠寺占二龙山，后与桃花山、白虎山一同并入梁山。" },
     { "title": "生擒方腊、六和寺坐化", "fromPage": 1170, "toPage": 1240, "description": "随军征方腊，于万松林中生擒方腊，后在杭州六和寺听潮信而坐化。" }
    ],
    "ending": "杭州六和寺听潮而坐，留颂坐化，得成正果",
    "endingPage": 1240,
    "note": ""
   },
   {
    "id": "sl-linchong",
    "primaryName": "林冲",
    "names": [
     { "text": "豹子头", "type": "绰号", "note": "生得豹头环眼" },
     { "text": "林冲", "type": "本名", "note": "" },
     { "text": "八十万禁军教头", "type": "身份", "note": "东京禁军枪棒教头" },
     { "text": "林教头", "type": "称呼", "note": "众人惯称" }
    ],
    "gender": "男",
    "role": "马军五虎将 / 天雄星",
    "firstPage": 79,
    "appearances": [79, 100, 145, 240, 1200],
    "locations": [
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 79, "toPage": 104, "note": "八十万禁军枪棒教头，误入白虎堂" },
     { "place": "沧州牢城", "city": "沧州", "country": "中国", "fromPage": 105, "toPage": 145, "note": "刺配沧州，风雪山神庙" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 145, "toPage": 1255, "note": "马军五虎将，火并王伦" },
     { "place": "杭州六和寺", "city": "杭州", "country": "中国", "fromPage": 1255, "toPage": 1262, "note": "征方腊后风瘫，寄居养病" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 79, "toPage": 104, "note": "禁军教头" },
     { "name": "梁山", "group": "山寨", "fromPage": 145, "toPage": 1070, "note": "马军五虎将" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1262, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "马军五虎将"],
    "experiences": [
     { "title": "误入白虎堂、刺配沧州", "fromPage": 92, "toPage": 104, "description": "被高俅设计诱入白虎堂，诬以行刺，刺配沧州道。" },
     { "title": "风雪山神庙、雪夜奔梁山", "fromPage": 118, "toPage": 160, "description": "草料场大火中杀死陆谦等三人，雪夜投奔梁山。" },
     { "title": "火并王伦、拥立晁盖", "fromPage": 240, "toPage": 247, "description": "王伦不容晁盖等入伙，林冲于聚义厅怒杀王伦，推晁盖为寨主。" },
     { "title": "随军征辽、征方腊，风瘫寄居六和寺", "fromPage": 1170, "toPage": 1262, "description": "南征途中染患风瘫，留在杭州六和寺，由武松看视，半载后病故。" }
    ],
    "ending": "征方腊后风瘫，留杭州六和寺养病，半载后病故",
    "endingPage": 1262,
    "note": ""
   },
   {
    "id": "sl-chaijin",
    "primaryName": "柴进",
    "names": [
     { "text": "小旋风", "type": "绰号", "note": "" },
     { "text": "柴进", "type": "本名", "note": "" },
     { "text": "柴大官人", "type": "称呼", "note": "沧州横海郡人称" },
     { "text": "后周世宗嫡派子孙", "type": "身份", "note": "持有丹书铁券" }
    ],
    "gender": "男",
    "role": "掌管钱粮头领 / 天贵星",
    "firstPage": 105,
    "appearances": [105, 130, 210, 660, 1285],
    "locations": [
     { "place": "沧州柴家庄", "city": "沧州", "country": "中国", "fromPage": 105, "toPage": 655, "note": "广交天下好汉，庇护林冲、武松" },
     { "place": "高唐州", "city": "高唐", "country": "中国", "fromPage": 656, "toPage": 700, "note": "被高廉陷害入狱" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 700, "toPage": 1270, "note": "掌管钱粮，排设筵宴" },
     { "place": "沧州", "city": "沧州", "country": "中国", "fromPage": 1270, "toPage": 1285, "note": "辞官归乡为民" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 105, "toPage": 655, "note": "沧州横海郡豪绅" },
     { "name": "梁山", "group": "山寨", "fromPage": 700, "toPage": 1070, "note": "掌管钱粮头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1270, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "掌管钱粮头领"],
    "experiences": [
     { "title": "收留林冲、资助梁山好汉", "fromPage": 105, "toPage": 130, "description": "柴家庄款待林冲，又修书荐其投梁山，后屡屡资助落难好汉。" },
     { "title": "陷高唐州、被梁山好汉救出", "fromPage": 656, "toPage": 700, "description": "因叔父柴皇城之事与高廉结怨，被陷死牢，宋江发兵破高唐州救出。" },
     { "title": "掌管梁山钱粮、排设筵宴", "fromPage": 700, "toPage": 1070, "description": "坐第十位，与李应共掌山寨钱粮金帛与筵宴。" },
     { "title": "征方腊后辞官归沧州为民", "fromPage": 1265, "toPage": 1285, "description": "见朝廷猜忌，纳还官诰，回沧州横海郡为民，无疾而终。" }
    ],
    "ending": "征方腊后辞官，回沧州为民，无疾而终",
    "endingPage": 1285,
    "note": ""
   },
   {
    "id": "sl-wanglun",
    "primaryName": "王伦",
    "names": [
     { "text": "白衣秀士", "type": "绰号", "note": "" },
     { "text": "王伦", "type": "本名", "note": "" }
    ],
    "gender": "男",
    "role": "梁山泊首任寨主",
    "firstPage": 140,
    "appearances": [140, 165, 245],
    "locations": [
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 140, "toPage": 247, "note": "首任寨主，占据梁山" }
    ],
    "factions": [
     { "name": "梁山", "group": "山寨", "fromPage": 140, "toPage": 247, "note": "第一任寨主" }
    ],
    "groups": ["梁山泊首任寨主"],
    "experiences": [
     { "title": "落草梁山、拒纳林冲入伙", "fromPage": 140, "toPage": 155, "description": "与杜迁、宋万占住梁山泊，先是不肯收留林冲，后勉强留作头领。" },
     { "title": "逼林冲下山纳投名状", "fromPage": 155, "toPage": 175, "description": "要林冲三日内下山杀一人为投名状，林冲因此与杨志相遇。" },
     { "title": "晁盖等上山，被林冲火并", "fromPage": 240, "toPage": 247, "description": "晁盖等七人投奔梁山，王伦又以粮少房稀相拒，被林冲当厅杀死。" }
    ],
    "ending": "晁盖等七人上山时，被林冲火并于聚义厅",
    "endingPage": 247,
    "note": "梁山基业的开创者，也是第一个被内部火并的寨主"
   },
   {
    "id": "sl-yangzhi",
    "primaryName": "杨志",
    "names": [
     { "text": "青面兽", "type": "绰号", "note": "面皮上有大块青记" },
     { "text": "杨志", "type": "本名", "note": "" },
     { "text": "杨制使", "type": "身份", "note": "殿司制使官出身" },
     { "text": "三代将门之后", "type": "身份", "note": "杨令公之孙" }
    ],
    "gender": "男",
    "role": "马军八骠骑 / 天暗星",
    "firstPage": 140,
    "appearances": [140, 155, 200, 250, 1131],
    "locations": [
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 140, "toPage": 155, "note": "卖祖传宝刀，杀牛二刺配大名府" },
     { "place": "大名府", "city": "大名", "country": "中国", "fromPage": 156, "toPage": 205, "note": "梁中书帐下提辖，押送生辰纲" },
     { "place": "二龙山", "city": "青州", "country": "中国", "fromPage": 210, "toPage": 300, "note": "与鲁智深占二龙山落草" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 300, "toPage": 1100, "note": "马军八骠骑兼先锋使" },
     { "place": "丹徒", "city": "镇江", "country": "中国", "fromPage": 1100, "toPage": 1131, "note": "征方腊途中染病，病逝于此" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 140, "toPage": 205, "note": "殿司制使、大名府提辖" },
     { "name": "二龙山", "group": "山寨", "fromPage": 210, "toPage": 300, "note": "二龙山二头领" },
     { "name": "梁山", "group": "山寨", "fromPage": 300, "toPage": 1070, "note": "马军八骠骑" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1131, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "马军八骠骑", "二龙山"],
    "experiences": [
     { "title": "失陷花石纲、东京卖刀杀牛二", "fromPage": 140, "toPage": 155, "description": "押运花石纲在黄河翻船失陷，回京求复职被高俅斥退，卖刀时杀死泼皮牛二。" },
     { "title": "押送生辰纲、黄泥冈被劫", "fromPage": 196, "toPage": 208, "description": "为梁中书押送十万贯生辰纲，在黄泥冈被晁盖、吴用等用蒙汗药智取。" },
     { "title": "二龙山落草、三山聚义归梁山", "fromPage": 210, "toPage": 300, "description": "与鲁智深夺取宝珠寺安身，后随三山人马同归梁山。" },
     { "title": "随军征方腊、病逝于丹徒", "fromPage": 1100, "toPage": 1131, "description": "南征途中患病，留在丹徒养病，不久病故。" }
    ],
    "ending": "征方腊途中病逝于丹徒",
    "endingPage": 1131,
    "note": ""
   },
   {
    "id": "sl-gongsunsheng",
    "primaryName": "公孙胜",
    "names": [
     { "text": "入云龙", "type": "绰号", "note": "" },
     { "text": "公孙胜", "type": "本名", "note": "" },
     { "text": "一清先生", "type": "道号", "note": "罗真人门下" },
     { "text": "罗真人弟子", "type": "身份", "note": "蓟州二仙山修道" }
    ],
    "gender": "男",
    "role": "掌管机密军师 / 天闲星",
    "firstPage": 165,
    "appearances": [165, 200, 660, 1100],
    "locations": [
     { "place": "蓟州二仙山", "city": "蓟州", "country": "中国", "fromPage": 165, "toPage": 200, "note": "从罗真人学道" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 240, "toPage": 1090, "note": "掌管法术，参赞军务" },
     { "place": "蓟州二仙山", "city": "蓟州", "country": "中国", "fromPage": 1100, "toPage": 1120, "note": "征辽后归隐修道" }
    ],
    "factions": [
     { "name": "方外", "group": "方外", "fromPage": 165, "toPage": 240, "note": "云游道人" },
     { "name": "梁山", "group": "山寨", "fromPage": 240, "toPage": 1070, "note": "掌管机密军师" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1090, "note": "随军征辽" }
    ],
    "groups": ["天罡三十六", "掌管机密军师"],
    "experiences": [
     { "title": "七星聚义、智取生辰纲", "fromPage": 190, "toPage": 208, "description": "先来东溪村报信，与晁盖、吴用等七人结义，共劫生辰纲。" },
     { "title": "高唐州斗法破高廉", "fromPage": 656, "toPage": 680, "description": "高廉以妖法困住梁山军，公孙胜请来罗真人符法，大破高廉。" },
     { "title": "芒砀山收樊瑞、征辽破混天象阵", "fromPage": 750, "toPage": 1090, "description": "收服樊瑞等，征辽时以五雷天心正法破兀颜光混天象阵。" },
     { "title": "征辽后辞归二仙山修道", "fromPage": 1090, "toPage": 1120, "description": "遵师命不赴方腊之役，辞别宋江回蓟州二仙山，从罗真人学道。" }
    ],
    "ending": "征辽后辞别众兄弟，回蓟州二仙山从师学道，归隐善终",
    "endingPage": 1120,
    "note": ""
   },
   {
    "id": "sl-liutang",
    "primaryName": "刘唐",
    "names": [
     { "text": "赤发鬼", "type": "绰号", "note": "鬓边有一搭朱砂记" },
     { "text": "刘唐", "type": "本名", "note": "" }
    ],
    "gender": "男",
    "role": "步军头领 / 天异星",
    "firstPage": 165,
    "appearances": [165, 200, 260, 1220],
    "locations": [
     { "place": "东潞州、郓城", "city": "郓城", "country": "中国", "fromPage": 165, "toPage": 235, "note": "报信七星聚义" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 235, "toPage": 1210, "note": "步军头领，屡为先锋" },
     { "place": "杭州候潮门", "city": "杭州", "country": "中国", "fromPage": 1210, "toPage": 1220, "note": "征方腊时攻打候潮门" }
    ],
    "factions": [
     { "name": "市井", "group": "江湖", "fromPage": 165, "toPage": 235, "note": "江湖漂泊的好汉" },
     { "name": "梁山", "group": "山寨", "fromPage": 235, "toPage": 1070, "note": "步军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1220, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "步军十头领"],
    "experiences": [
     { "title": "醉卧灵官殿、报信劫生辰纲", "fromPage": 165, "toPage": 196, "description": "探得生辰纲消息，连夜赶至东溪村报与晁盖，被雷横误捉又释。" },
     { "title": "梁山步军头领、屡为先锋", "fromPage": 235, "toPage": 1100, "description": "坐第二十一位，随军破祝家庄、曾头市，屡立战功。" },
     { "title": "征方腊攻打杭州候潮门战死", "fromPage": 1210, "toPage": 1220, "description": "随宋江攻杭州，争功抢入候潮门，被城上闸板压死。" }
    ],
    "ending": "征方腊时攻打杭州候潮门，被闸板压死",
    "endingPage": 1220,
    "note": ""
   },
   {
    "id": "sl-wuyong",
    "primaryName": "吴用",
    "names": [
     { "text": "智多星", "type": "绰号", "note": "" },
     { "text": "吴用", "type": "本名", "note": "" },
     { "text": "吴学究", "type": "称呼", "note": "乡塾先生出身" },
     { "text": "加亮先生", "type": "道号", "note": "自比诸葛亮" }
    ],
    "gender": "男",
    "role": "掌管机密军师 / 天机星",
    "firstPage": 170,
    "appearances": [170, 200, 245, 800, 1290],
    "locations": [
     { "place": "郓城县东溪村", "city": "郓城", "country": "中国", "fromPage": 170, "toPage": 235, "note": "乡塾教书，说动三阮" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 240, "toPage": 1290, "note": "军师，掌管机谋" },
     { "place": "蓼儿洼宋江墓前", "city": "楚州", "country": "中国", "fromPage": 1290, "toPage": 1292, "note": "与花荣同缢殉义" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 170, "toPage": 235, "note": "东溪村乡塾先生" },
     { "name": "梁山", "group": "山寨", "fromPage": 240, "toPage": 1070, "note": "掌管机密军师" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1290, "note": "随军参赞军务" }
    ],
    "groups": ["天罡三十六", "掌管机密军师"],
    "experiences": [
     { "title": "智取生辰纲、说三阮撞筹", "fromPage": 183, "toPage": 208, "description": "说动阮氏三雄入伙，定下黄泥冈蒙汗药之计，劫取生辰纲。" },
     { "title": "智赚卢俊义、智取大名府", "fromPage": 790, "toPage": 830, "description": "以反间计赚卢俊义上山，后里应外合攻破大名府。" },
     { "title": "梁山军师、排兵布阵", "fromPage": 240, "toPage": 1100, "description": "坐第三位，梁山历次征战皆由其运筹，招安后随军参赞。" },
     { "title": "宋江死后自缢于蓼儿洼", "fromPage": 1290, "toPage": 1292, "description": "闻宋江、李逵死讯，与花荣赶到蓼儿洼，双双自缢于宋江墓前。" }
    ],
    "ending": "宋江死后，与花荣同缢于蓼儿洼宋江墓前",
    "endingPage": 1292,
    "note": ""
   },
   {
    "id": "sl-chaogai",
    "primaryName": "晁盖",
    "names": [
     { "text": "托塔天王", "type": "绰号", "note": "曾夺西溪村青石宝塔" },
     { "text": "晁盖", "type": "本名", "note": "" },
     { "text": "晁保正", "type": "称呼", "note": "东溪村保正" }
    ],
    "gender": "男",
    "role": "梁山泊第二任寨主",
    "firstPage": 170,
    "appearances": [170, 200, 240, 770],
    "locations": [
     { "place": "郓城县东溪村", "city": "郓城", "country": "中国", "fromPage": 170, "toPage": 208, "note": "本村保正，七星聚义" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 235, "toPage": 780, "note": "第二任寨主" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 170, "toPage": 208, "note": "东溪村保正" },
     { "name": "梁山", "group": "山寨", "fromPage": 235, "toPage": 780, "note": "梁山泊寨主" }
    ],
    "groups": ["梁山泊寨主"],
    "experiences": [
     { "title": "智取生辰纲", "fromPage": 190, "toPage": 208, "description": "与吴用、公孙胜、刘唐、三阮等七星聚义，在黄泥冈劫取生辰纲。" },
     { "title": "火并王伦后坐第一把交椅", "fromPage": 240, "toPage": 250, "description": "林冲火并王伦，众人推晁盖为梁山泊主，梁山基业自此大盛。" },
     { "title": "江州劫法场、救宋江上山", "fromPage": 480, "toPage": 500, "description": "亲率梁山人马千里奔袭江州，法场救出宋江、戴宗。" },
     { "title": "攻打曾头市、中箭身亡", "fromPage": 768, "toPage": 780, "description": "因夺马之恨亲征曾头市，中史文恭毒箭，回山后不治。" }
    ],
    "ending": "攻打曾头市时中史文恭毒箭，回梁山后不治身亡",
    "endingPage": 780,
    "note": "临终遗言：捉得史文恭者便为梁山泊主"
   },
   {
    "id": "sl-ruanxiaoqi",
    "primaryName": "阮小七",
    "names": [
     { "text": "活阎罗", "type": "绰号", "note": "" },
     { "text": "阮小七", "type": "本名", "note": "" },
     { "text": "阮氏三雄之幼", "type": "身份", "note": "石碣村渔户" }
    ],
    "gender": "男",
    "role": "水军头领 / 天败星",
    "firstPage": 183,
    "appearances": [183, 200, 260, 1270],
    "locations": [
     { "place": "济州石碣村", "city": "济宁", "country": "中国", "fromPage": 183, "toPage": 235, "note": "打鱼为生，抗拒官府" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 235, "toPage": 1265, "note": "水军头领" },
     { "place": "济州石碣村", "city": "济宁", "country": "中国", "fromPage": 1265, "toPage": 1280, "note": "被夺官后回乡打鱼" }
    ],
    "factions": [
     { "name": "市井", "group": "渔户", "fromPage": 183, "toPage": 235, "note": "石碣村渔户" },
     { "name": "梁山", "group": "山寨", "fromPage": 235, "toPage": 1070, "note": "水军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1265, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "水军头领"],
    "experiences": [
     { "title": "石碣村拒捕、活捉何涛", "fromPage": 190, "toPage": 208, "description": "官兵围捕石碣村，阮氏兄弟水战取胜，割了何涛耳朵放他回去报信。" },
     { "title": "智取生辰纲、梁山泊水军头领", "fromPage": 196, "toPage": 1100, "description": "参与智取生辰纲，坐第三十一位，统领梁山水军。" },
     { "title": "征方腊后戏穿龙袍被夺官", "fromPage": 1260, "toPage": 1268, "description": "攻入帮源洞，搜出方腊龙衣戏穿，被朝廷追夺官诰。" },
     { "title": "回石碣村打鱼为生", "fromPage": 1268, "toPage": 1280, "description": "被夺官后仍回石碣村打鱼，奉养老母，寿至六十而终。" }
    ],
    "ending": "因戏穿方腊龙袍被夺官，回石碣村打鱼为生，善终",
    "endingPage": 1280,
    "note": ""
   },
   {
    "id": "sl-caijing",
    "primaryName": "蔡京",
    "names": [
     { "text": "蔡京", "type": "本名", "note": "" },
     { "text": "蔡太师", "type": "官职", "note": "当朝太师" },
     { "text": "当朝太师", "type": "身份", "note": "四贼之首" }
    ],
    "gender": "男",
    "role": "当朝太师 / 权奸",
    "firstPage": 196,
    "appearances": [196, 490, 1040, 1300],
    "locations": [
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 196, "toPage": 1300, "note": "太师府，把持朝政" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 196, "toPage": 1300, "note": "当朝太师" }
    ],
    "groups": ["朝廷权奸"],
    "experiences": [
     { "title": "生辰纲被劫、通缉晁盖等", "fromPage": 196, "toPage": 208, "description": "女婿梁中书所送十万贯生辰纲被劫，严令济州府缉捕晁盖等人。" },
     { "title": "识破戴宗伪造书信、陷宋江于江州", "fromPage": 490, "toPage": 505, "description": "吴用所拟蔡京回书被其识破，蔡九知府遂决意斩宋江、戴宗。" },
     { "title": "主张招安、暗害梁山将领", "fromPage": 1040, "toPage": 1100, "description": "朝中与高俅、童贯、杨戬结党，明予招安，暗设陷害之计。" },
     { "title": "被贬岭南、饿死途中", "fromPage": 1295, "toPage": 1300, "description": "徽宗禅位后失势，被贬岭南，途中饿死于潭州。" }
    ],
    "ending": "徽宗禅位后被贬岭南，途中饿死于潭州",
    "endingPage": 1300,
    "note": ""
   },
   {
    "id": "sl-songjiang",
    "primaryName": "宋江",
    "names": [
     { "text": "及时雨", "type": "绰号", "note": "周济人急难" },
     { "text": "呼保义", "type": "绰号", "note": "" },
     { "text": "孝义黑三郎", "type": "绰号", "note": "面黑身矮，事亲至孝" },
     { "text": "宋公明", "type": "表字", "note": "" },
     { "text": "宋押司", "type": "身份", "note": "郓城县衙押司" }
    ],
    "gender": "男",
    "role": "梁山泊寨主 / 天魁星",
    "firstPage": 220,
    "appearances": [220, 265, 300, 480, 920, 1290],
    "locations": [
     { "place": "郓城县", "city": "郓城", "country": "中国", "fromPage": 220, "toPage": 290, "note": "县衙押司，私放晁盖" },
     { "place": "青州清风寨", "city": "青州", "country": "中国", "fromPage": 300, "toPage": 430, "note": "避难清风山、清风寨" },
     { "place": "江州", "city": "九江", "country": "中国", "fromPage": 460, "toPage": 500, "note": "刺配江州，浔阳楼题反诗" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 500, "toPage": 1290, "note": "坐第一把交椅" },
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 720, "toPage": 1060, "note": "多次入京谋求招安" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 220, "toPage": 290, "note": "郓城县押司" },
     { "name": "梁山", "group": "山寨", "fromPage": 300, "toPage": 1070, "note": "天罡首领，梁山泊寨主" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1290, "note": "受招安征方腊，官授楚州安抚使" }
    ],
    "groups": ["天罡三十六", "梁山泊寨主"],
    "experiences": [
     { "title": "私放晁盖、怒杀阎婆惜", "fromPage": 222, "toPage": 285, "description": "得知官府要捉晁盖，飞马报信；后因招文袋之事怒杀外室阎婆惜，刺配江州。" },
     { "title": "浔阳楼题反诗、江州劫法场", "fromPage": 470, "toPage": 500, "description": "醉后题反诗被判斩，梁山好汉大闹江州法场，救其上山。" },
     { "title": "晁盖死后坐第一把交椅、主持招安", "fromPage": 780, "toPage": 1060, "description": "暂代寨主，后遵晁盖遗言活捉史文恭者为寨主，仍推宋江上位，两次招安终成。" },
     { "title": "征辽征方腊、被赐毒酒身亡", "fromPage": 1070, "toPage": 1291, "description": "受招安后征辽、征方腊，弟兄损折大半，终被高俅等以御酒下毒害死，死前毒死李逵。" }
    ],
    "ending": "征方腊后被授楚州安抚使，被高俅、蔡京等以毒酒害死",
    "endingPage": 1290,
    "note": ""
   },
   {
    "id": "sl-yanpoxi",
    "primaryName": "阎婆惜",
    "names": [
     { "text": "阎婆惜", "type": "本名", "note": "" },
     { "text": "宋江外室", "type": "身份", "note": "被宋江置为外宅" }
    ],
    "gender": "女",
    "role": "宋江外室",
    "firstPage": 260,
    "appearances": [260, 275, 285],
    "locations": [
     { "place": "郓城县", "city": "郓城", "country": "中国", "fromPage": 260, "toPage": 285, "note": "被宋江收为外室" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 260, "toPage": 285, "note": "郓城卖唱女子" }
    ],
    "groups": ["市井"],
    "experiences": [
     { "title": "随父母流落郓城卖唱", "fromPage": 260, "toPage": 268, "description": "父死无钱安葬，得宋江资助，其母遂将女儿典与宋江作外宅。" },
     { "title": "被宋江收为外室、与张文远私通", "fromPage": 268, "toPage": 280, "description": "得宋江供养却渐生嫌隙，与押司张文远勾搭成奸。" },
     { "title": "因招文袋要挟宋江，被杀死", "fromPage": 280, "toPage": 285, "description": "拾得晁盖书信与金子，以此要挟宋江，被宋江夺刀杀死。" }
    ],
    "ending": "藏匿晁盖书信并要挟宋江，被宋江怒杀",
    "endingPage": 285,
    "note": ""
   },
   {
    "id": "sl-wusong",
    "primaryName": "武松",
    "names": [
     { "text": "行者", "type": "绰号", "note": "血溅鸳鸯楼后扮作头陀" },
     { "text": "武二郎", "type": "称呼", "note": "武大郎之弟" },
     { "text": "武都头", "type": "身份", "note": "阳谷县步兵都头" },
     { "text": "打虎英雄", "type": "称号", "note": "景阳冈打虎闻名" }
    ],
    "gender": "男",
    "role": "步军头领 / 天伤星",
    "firstPage": 293,
    "appearances": [293, 320, 370, 420, 1230],
    "locations": [
     { "place": "阳谷县", "city": "聊城", "country": "中国", "fromPage": 293, "toPage": 330, "note": "景阳冈打虎，任阳谷县都头" },
     { "place": "孟州", "city": "孟州", "country": "中国", "fromPage": 350, "toPage": 420, "note": "十字坡、快活林、血溅鸳鸯楼" },
     { "place": "二龙山", "city": "青州", "country": "中国", "fromPage": 420, "toPage": 560, "note": "与鲁智深、杨志占山落草" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 560, "toPage": 1170, "note": "步军头领，坐第十四位" },
     { "place": "杭州六和寺", "city": "杭州", "country": "中国", "fromPage": 1230, "toPage": 1250, "note": "断臂后出家，八十而终" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 293, "toPage": 340, "note": "阳谷县步兵都头" },
     { "name": "二龙山", "group": "山寨", "fromPage": 420, "toPage": 560, "note": "二龙山头领" },
     { "name": "梁山", "group": "山寨", "fromPage": 560, "toPage": 1070, "note": "步军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1230, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "步军十头领", "二龙山"],
    "experiences": [
     { "title": "景阳冈打虎、任阳谷县都头", "fromPage": 293, "toPage": 325, "description": "过景阳冈醉打猛虎，为民除害，被知县参为步兵都头，与兄武大郎相认。" },
     { "title": "杀潘金莲、西门庆，刺配孟州血溅鸳鸯楼", "fromPage": 325, "toPage": 420, "description": "查明兄长被害真相，杀嫂祭兄、狮子楼斗杀西门庆；后遭张都监陷害，血溅鸳鸯楼。" },
     { "title": "二龙山落草、三山聚义归梁山", "fromPage": 420, "toPage": 560, "description": "在十字坡遇张青、孙二娘，扮作行者投二龙山，后随三山人马同归梁山。" },
     { "title": "随军征方腊、断臂后六和寺出家", "fromPage": 1170, "toPage": 1250, "description": "征方腊时被包道乙飞剑斩断左臂，后在杭州六和寺出家，寿至八十善终。" }
    ],
    "ending": "征方腊时被飞剑斩断左臂，后在杭州六和寺出家，八十而终",
    "endingPage": 1250,
    "note": ""
   },
   {
    "id": "sl-wangpo",
    "primaryName": "王婆",
    "names": [
     { "text": "王婆", "type": "本名", "note": "" },
     { "text": "茶坊主", "type": "身份", "note": "阳谷县开茶坊，兼做媒婆" }
    ],
    "gender": "女",
    "role": "阳谷县茶坊主 / 媒婆",
    "firstPage": 298,
    "appearances": [298, 320, 345],
    "locations": [
     { "place": "阳谷县", "city": "聊城", "country": "中国", "fromPage": 298, "toPage": 345, "note": "开茶坊，兼做媒婆" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 298, "toPage": 345, "note": "市井媒婆" }
    ],
    "groups": ["市井"],
    "experiences": [
     { "title": "为西门庆说风情、牵线潘金莲", "fromPage": 300, "toPage": 320, "description": "受西门庆之托，以做寿衣为由牵线，成就二人奸情。" },
     { "title": "设计毒杀武大郎、遮掩罪迹", "fromPage": 320, "toPage": 330, "description": "教唆潘金莲以砒霜毒杀武大，又教其火化灭迹。" },
     { "title": "案发后被东平府判凌迟处死", "fromPage": 338, "toPage": 345, "description": "武松查明真相告官，府尹将王婆判凌迟，押赴市曹处死。" }
    ],
    "ending": "教唆通奸、谋害武大，被东平府判凌迟处死",
    "endingPage": 345,
    "note": ""
   },
   {
    "id": "sl-panjinlian",
    "primaryName": "潘金莲",
    "names": [
     { "text": "潘金莲", "type": "本名", "note": "" },
     { "text": "武大郎之妻", "type": "身份", "note": "原为大户使女" }
    ],
    "gender": "女",
    "role": "武大郎之妻",
    "firstPage": 299,
    "appearances": [299, 315, 338],
    "locations": [
     { "place": "清河县", "city": "清河", "country": "中国", "fromPage": 299, "toPage": 305, "note": "大户人家使女" },
     { "place": "阳谷县", "city": "聊城", "country": "中国", "fromPage": 305, "toPage": 340, "note": "嫁与武大郎，与西门庆通奸" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 299, "toPage": 340, "note": "市井妇人" }
    ],
    "groups": ["市井"],
    "experiences": [
     { "title": "被大户嫁与武大郎", "fromPage": 295, "toPage": 305, "description": "因不肯依从大户，被大户赔钱嫁与身材短小的武大郎。" },
     { "title": "与西门庆通奸、药杀武大郎", "fromPage": 310, "toPage": 330, "description": "经王婆牵线与西门庆成奸，被武大撞破后以砒霜毒杀亲夫。" },
     { "title": "武松归来，被剖腹挖心祭兄", "fromPage": 330, "toPage": 338, "description": "武松查得实情，请邻舍作证，将潘金莲剖腹挖心，祭于武大灵前。" }
    ],
    "ending": "与西门庆通奸并毒杀亲夫，被武松剖腹挖心祭兄",
    "endingPage": 338,
    "note": ""
   },
   {
    "id": "sl-ximenqing",
    "primaryName": "西门庆",
    "names": [
     { "text": "西门庆", "type": "本名", "note": "" },
     { "text": "西门大官人", "type": "称呼", "note": "阳谷县豪绅" },
     { "text": "生药铺主", "type": "身份", "note": "开生药铺，结交官府" }
    ],
    "gender": "男",
    "role": "阳谷县生药铺主 / 恶霸",
    "firstPage": 300,
    "appearances": [300, 320, 341],
    "locations": [
     { "place": "阳谷县", "city": "聊城", "country": "中国", "fromPage": 300, "toPage": 341, "note": "生药铺主，结交官府" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 300, "toPage": 341, "note": "阳谷县豪绅恶霸" }
    ],
    "groups": ["市井", "豪绅"],
    "experiences": [
     { "title": "与潘金莲勾搭成奸", "fromPage": 305, "toPage": 320, "description": "路过武大家被帘叉打中，见潘金莲生得美貌，托王婆牵线成奸。" },
     { "title": "合谋药杀武大郎、买通官府", "fromPage": 320, "toPage": 330, "description": "与潘金莲、王婆合谋毒杀武大，又使钱不许仵作声张。" },
     { "title": "狮子楼被武松斗杀", "fromPage": 330, "toPage": 341, "description": "武松寻至狮子楼，将其摔下楼去，割头祭于武大灵前。" }
    ],
    "ending": "被武松在狮子楼斗杀，割头祭奠武大郎",
    "endingPage": 341,
    "note": ""
   },
   {
    "id": "sl-wangying",
    "primaryName": "王英",
    "names": [
     { "text": "矮脚虎", "type": "绰号", "note": "身材短小" },
     { "text": "王英", "type": "本名", "note": "" }
    ],
    "gender": "男",
    "role": "马军头领 / 地微星",
    "firstPage": 407,
    "appearances": [407, 490, 640, 1245],
    "locations": [
     { "place": "清风山", "city": "青州", "country": "中国", "fromPage": 407, "toPage": 490, "note": "清风山二头领" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 490, "toPage": 1240, "note": "专掌三军内探事马军头领" },
     { "place": "睦州", "city": "睦州", "country": "中国", "fromPage": 1240, "toPage": 1246, "note": "征方腊战死" }
    ],
    "factions": [
     { "name": "清风山", "group": "山寨", "fromPage": 407, "toPage": 490, "note": "清风山二头领" },
     { "name": "梁山", "group": "山寨", "fromPage": 490, "toPage": 1070, "note": "马军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1246, "note": "随军征辽、征方腊" }
    ],
    "groups": ["地煞七十二", "马军头领"],
    "experiences": [
     { "title": "清风山落草、强抢刘高之妻", "fromPage": 407, "toPage": 470, "description": "与燕顺、郑天寿占清风山，因好色抢了清风寨知寨刘高之妻，被宋江劝止。" },
     { "title": "被宋江收服、同上梁山", "fromPage": 470, "toPage": 495, "description": "大闹清风寨后随宋江、花荣等一同投奔梁山。" },
     { "title": "由宋江主婚、娶扈三娘", "fromPage": 625, "toPage": 645, "description": "宋江认扈三娘为义妹，主婚将其嫁与王英，夫妻同为马军头领。" },
     { "title": "随军征方腊、睦州战死", "fromPage": 1070, "toPage": 1246, "description": "征方腊攻睦州，被方腊部将郑彪一枪刺死，与妻扈三娘同时殉难。" }
    ],
    "ending": "征方腊时在睦州被郑彪一枪刺死，与妻扈三娘同时殉难",
    "endingPage": 1246,
    "note": ""
   },
   {
    "id": "sl-huorong",
    "primaryName": "花荣",
    "names": [
     { "text": "小李广", "type": "绰号", "note": "箭术可比李广" },
     { "text": "花荣", "type": "本名", "note": "" },
     { "text": "花知寨", "type": "身份", "note": "清风寨武知寨" }
    ],
    "gender": "男",
    "role": "马军八骠骑 / 天英星",
    "firstPage": 417,
    "appearances": [417, 445, 500, 1290],
    "locations": [
     { "place": "清风寨", "city": "青州", "country": "中国", "fromPage": 417, "toPage": 455, "note": "清风寨知寨，救宋江" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 455, "toPage": 1290, "note": "马军八骠骑，神箭手" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 417, "toPage": 455, "note": "清风寨武知寨" },
     { "name": "梁山", "group": "山寨", "fromPage": 455, "toPage": 1070, "note": "马军八骠骑" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1290, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "马军八骠骑"],
    "experiences": [
     { "title": "清风寨救宋江、大闹清风山", "fromPage": 417, "toPage": 455, "description": "为救宋江与刘高反目，箭射秦明盔缨，随众投奔梁山。" },
     { "title": "梁山射雁、显神箭之能", "fromPage": 470, "toPage": 490, "description": "在梁山泊射落空中雁行第三只，众头领皆服其神箭。" },
     { "title": "随军征辽、征方腊", "fromPage": 1070, "toPage": 1270, "description": "南征北战多立战功，官授应天府兵马都统制。" },
     { "title": "宋江死后自缢殉义", "fromPage": 1290, "toPage": 1292, "description": "闻宋江死讯，与吴用同赴蓼儿洼，自缢于宋江墓前。" }
    ],
    "ending": "宋江被毒死后，与吴用同缢于蓼儿洼宋江墓前",
    "endingPage": 1292,
    "note": ""
   },
   {
    "id": "sl-qinming",
    "primaryName": "秦明",
    "names": [
     { "text": "霹雳火", "type": "绰号", "note": "性子急躁如烈火" },
     { "text": "秦明", "type": "本名", "note": "" },
     { "text": "秦统制", "type": "身份", "note": "青州指挥司总管本州兵马" }
    ],
    "gender": "男",
    "role": "马军五虎将 / 天猛星",
    "firstPage": 430,
    "appearances": [430, 465, 700, 1245],
    "locations": [
     { "place": "青州", "city": "青州", "country": "中国", "fromPage": 430, "toPage": 465, "note": "青州指挥司总管本州兵马" },
     { "place": "清风山", "city": "青州", "country": "中国", "fromPage": 465, "toPage": 490, "note": "中计被擒，归顺梁山" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 490, "toPage": 1240, "note": "马军五虎将" },
     { "place": "清溪县", "city": "睦州", "country": "中国", "fromPage": 1240, "toPage": 1248, "note": "征方腊战死" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 430, "toPage": 465, "note": "青州兵马统制" },
     { "name": "梁山", "group": "山寨", "fromPage": 490, "toPage": 1070, "note": "马军五虎将" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1248, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "马军五虎将"],
    "experiences": [
     { "title": "领兵征剿清风山、被宋江设计归顺", "fromPage": 430, "toPage": 470, "description": "秦明奉命征剿清风山，中宋江、花荣之计，家小被害，走投无路遂降。" },
     { "title": "娶花荣之妹、梁山马军五虎将", "fromPage": 470, "toPage": 1100, "description": "宋江主婚将花荣之妹嫁与秦明，坐第七位，为马军五虎将第三。" },
     { "title": "随军征方腊、清溪县战死", "fromPage": 1170, "toPage": 1248, "description": "攻打清溪县时，与方腊之侄方杰交战，被方杰一戟刺死。" }
    ],
    "ending": "征方腊时在清溪县被方杰一戟刺死",
    "endingPage": 1248,
    "note": ""
   },
   {
    "id": "sl-daizong",
    "primaryName": "戴宗",
    "names": [
     { "text": "神行太保", "type": "绰号", "note": "腿绑甲马日行八百里" },
     { "text": "戴宗", "type": "本名", "note": "" },
     { "text": "戴院长", "type": "身份", "note": "江州两院押牢节级" }
    ],
    "gender": "男",
    "role": "总探声息头领 / 天速星",
    "firstPage": 469,
    "appearances": [469, 495, 520, 1290],
    "locations": [
     { "place": "江州", "city": "九江", "country": "中国", "fromPage": 469, "toPage": 500, "note": "两院押牢节级，与宋江相识" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 500, "toPage": 1280, "note": "总探声息头领" },
     { "place": "泰安州岳庙", "city": "泰安", "country": "中国", "fromPage": 1280, "toPage": 1288, "note": "辞官出家，大笑而终" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 469, "toPage": 496, "note": "江州押牢节级" },
     { "name": "梁山", "group": "山寨", "fromPage": 496, "toPage": 1070, "note": "总探声息头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1280, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "总探声息头领"],
    "experiences": [
     { "title": "江州结识宋江、传递书信", "fromPage": 469, "toPage": 490, "description": "在江州牢城结识宋江，为其上下打点，又往东京、梁山传递书信。" },
     { "title": "伪造蔡京书信被识破、梁山劫法场", "fromPage": 490, "toPage": 505, "description": "携吴用所拟假回书回江州，被蔡九知府识破，与宋江同赴法场，为梁山好汉所救。" },
     { "title": "总探声息、神行千里传军令", "fromPage": 505, "toPage": 1100, "description": "坐第二十位，专管探听军情、传递号令，招安后随军南北征战。" },
     { "title": "征方腊后辞官出家、大笑而终", "fromPage": 1280, "toPage": 1288, "description": "纳还官诰，往泰安州岳庙陪堂出家，一日大笑而终。" }
    ],
    "ending": "征方腊后辞官，往泰安州岳庙出家，大笑而终",
    "endingPage": 1288,
    "note": ""
   },
   {
    "id": "sl-zhangshun",
    "primaryName": "张顺",
    "names": [
     { "text": "浪里白条", "type": "绰号", "note": "水性极佳，一身雪练也似白肉" },
     { "text": "张顺", "type": "本名", "note": "" }
    ],
    "gender": "男",
    "role": "水军头领 / 天损星",
    "firstPage": 476,
    "appearances": [476, 505, 800, 1215],
    "locations": [
     { "place": "江州", "city": "九江", "country": "中国", "fromPage": 476, "toPage": 505, "note": "浔阳江渔牙主人" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 505, "toPage": 1210, "note": "水军头领" },
     { "place": "杭州涌金门", "city": "杭州", "country": "中国", "fromPage": 1210, "toPage": 1215, "note": "征方腊战死" }
    ],
    "factions": [
     { "name": "市井", "group": "渔户", "fromPage": 476, "toPage": 505, "note": "浔阳江渔牙主人" },
     { "name": "梁山", "group": "山寨", "fromPage": 505, "toPage": 1070, "note": "水军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1215, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "水军头领"],
    "experiences": [
     { "title": "浔阳江斗李逵、结识宋江", "fromPage": 476, "toPage": 500, "description": "因卖鱼与李逵厮打，水中浸得李逵无法还手，经宋江劝解结为兄弟。" },
     { "title": "梁山泊水军头领、活捉高俅", "fromPage": 505, "toPage": 1050, "description": "坐第三十位，统领水军，三败高俅时水中活捉高太尉上山。" },
     { "title": "征方腊攻杭州、涌金门中箭身亡", "fromPage": 1205, "toPage": 1215, "description": "欲从涌金门水门潜入杭州，被城上军士发觉，乱箭射死于水中。" }
    ],
    "ending": "征方腊时在杭州涌金门外被乱箭射死",
    "endingPage": 1215,
    "note": ""
   },
   {
    "id": "sl-likui",
    "primaryName": "李逵",
    "names": [
     { "text": "黑旋风", "type": "绰号", "note": "面黑力大，性如旋风" },
     { "text": "铁牛", "type": "小名", "note": "家中唤作铁牛" },
     { "text": "李逵", "type": "本名", "note": "" }
    ],
    "gender": "男",
    "role": "步军头领 / 天杀星",
    "firstPage": 482,
    "appearances": [482, 505, 545, 720, 1291],
    "locations": [
     { "place": "江州", "city": "九江", "country": "中国", "fromPage": 482, "toPage": 500, "note": "江州小牢子，随宋江" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 500, "toPage": 1270, "note": "步军头领，坐第二十二位" },
     { "place": "沂水县", "city": "沂州", "country": "中国", "fromPage": 540, "toPage": 560, "note": "回乡接母，沂岭杀四虎" },
     { "place": "润州", "city": "镇江", "country": "中国", "fromPage": 1270, "toPage": 1291, "note": "宋江赴楚州任，李逵随往润州" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 482, "toPage": 500, "note": "江州牢城小牢子" },
     { "name": "梁山", "group": "山寨", "fromPage": 500, "toPage": 1070, "note": "步军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1291, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "步军十头领"],
    "experiences": [
     { "title": "江州结识宋江、劫法场", "fromPage": 482, "toPage": 505, "description": "在江州遇宋江，得银相赠；宋江问斩时率先挥斧杀入法场。" },
     { "title": "沂岭杀四虎、接母上山", "fromPage": 540, "toPage": 560, "description": "回沂水县搬取老母，途中老母被虎所食，怒杀四虎。" },
     { "title": "砍倒杏黄旗、负荆请罪", "fromPage": 600, "toPage": 620, "description": "误信人言疑宋江强抢民女，砍倒杏黄旗，查明后负荆请罪。" },
     { "title": "随军征方腊、被宋江毒死", "fromPage": 1170, "toPage": 1291, "description": "征方腊后授镇江润州都统制，宋江恐其造反，以毒酒相赠，同死楚州。" }
    ],
    "ending": "宋江恐其造反，以毒酒相赠，同死于楚州",
    "endingPage": 1291,
    "note": ""
   },
   {
    "id": "sl-shixiu",
    "primaryName": "石秀",
    "names": [
     { "text": "拼命三郎", "type": "绰号", "note": "路见不平便舍命相帮" },
     { "text": "石秀", "type": "本名", "note": "" }
    ],
    "gender": "男",
    "role": "步军头领 / 天慧星",
    "firstPage": 560,
    "appearances": [560, 595, 810, 1245],
    "locations": [
     { "place": "蓟州", "city": "蓟州", "country": "中国", "fromPage": 560, "toPage": 590, "note": "卖柴为生，救杨雄" },
     { "place": "祝家庄", "city": "济宁", "country": "中国", "fromPage": 595, "toPage": 640, "note": "探庄立功" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 640, "toPage": 1240, "note": "步军头领，坐第三十三位" },
     { "place": "昱岭关", "city": "杭州", "country": "中国", "fromPage": 1240, "toPage": 1246, "note": "征方腊战死" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 560, "toPage": 595, "note": "蓟州卖柴汉子" },
     { "name": "梁山", "group": "山寨", "fromPage": 640, "toPage": 1070, "note": "步军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1246, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "步军十头领"],
    "experiences": [
     { "title": "智杀裴如海、大闹翠屏山", "fromPage": 570, "toPage": 595, "description": "识破杨雄之妻潘巧云与和尚裴如海奸情，杀裴如海，翠屏山对质后同投梁山。" },
     { "title": "探祝家庄、智取盘陀路", "fromPage": 595, "toPage": 645, "description": "先入祝家庄探明路径与机关，又故意被擒为内应，助梁山破庄。" },
     { "title": "大名府跳楼劫法场、救卢俊义", "fromPage": 800, "toPage": 830, "description": "卢俊义将斩，石秀独自跳楼劫法场，大呼梁山好汉全伙在此，虽被擒却救下卢俊义性命。" },
     { "title": "征方腊昱岭关中箭身亡", "fromPage": 1238, "toPage": 1246, "description": "随卢俊义攻昱岭关，中了庞万春埋伏，与史进等六人被乱箭射死。" }
    ],
    "ending": "征方腊时在昱岭关被乱箭射死",
    "endingPage": 1246,
    "note": ""
   },
   {
    "id": "sl-shiqian",
    "primaryName": "时迁",
    "names": [
     { "text": "鼓上蚤", "type": "绰号", "note": "轻功极佳，飞檐走壁" },
     { "text": "时迁", "type": "本名", "note": "" }
    ],
    "gender": "男",
    "role": "走报机密步军头领 / 地贼星",
    "firstPage": 586,
    "appearances": [586, 620, 830, 1262],
    "locations": [
     { "place": "高唐州", "city": "高唐", "country": "中国", "fromPage": 586, "toPage": 600, "note": "流落江湖，偷鸡摸狗" },
     { "place": "祝家庄", "city": "济宁", "country": "中国", "fromPage": 600, "toPage": 640, "note": "偷鸡惹祸，火烧祝家店" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 640, "toPage": 1255, "note": "走报机密步军头领" },
     { "place": "杭州", "city": "杭州", "country": "中国", "fromPage": 1255, "toPage": 1262, "note": "征方腊后病逝" }
    ],
    "factions": [
     { "name": "市井", "group": "盗贼", "fromPage": 586, "toPage": 640, "note": "江湖窃贼" },
     { "name": "梁山", "group": "山寨", "fromPage": 640, "toPage": 1070, "note": "走报机密步军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1262, "note": "随军征辽、征方腊" }
    ],
    "groups": ["地煞七十二", "走报机密步军头领"],
    "experiences": [
     { "title": "偷鸡惹祸、火烧祝家店", "fromPage": 600, "toPage": 640, "description": "投奔梁山途中偷吃店家报晓鸡，惹出祝家庄之战，又放火烧了祝家店。" },
     { "title": "盗雁翎圈金甲、赚徐宁上山", "fromPage": 690, "toPage": 710, "description": "潜入东京徐宁家中盗出祖传雁翎圈金甲，引徐宁上梁山教钩镰枪法。" },
     { "title": "大名府城中放火为号", "fromPage": 810, "toPage": 830, "description": "元宵夜潜入大名府翠云楼放火，为梁山军里应外合破城报信。" },
     { "title": "征方腊后患搅肠痧病逝", "fromPage": 1255, "toPage": 1262, "description": "南征归来染患搅肠痧，病逝于杭州，被追封义节郎。" }
    ],
    "ending": "征方腊后患搅肠痧，病逝于杭州",
    "endingPage": 1262,
    "note": ""
   },
   {
    "id": "sl-husanniang",
    "primaryName": "扈三娘",
    "names": [
     { "text": "一丈青", "type": "绰号", "note": "" },
     { "text": "扈三娘", "type": "本名", "note": "" },
     { "text": "扈家庄女将", "type": "身份", "note": "扈太公之女" }
    ],
    "gender": "女",
    "role": "马军头领 / 地慧星",
    "firstPage": 599,
    "appearances": [599, 625, 700, 1245],
    "locations": [
     { "place": "扈家庄", "city": "济宁", "country": "中国", "fromPage": 599, "toPage": 625, "note": "祝家庄盟军女将" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 625, "toPage": 1240, "note": "专掌三军内探事马军头领" },
     { "place": "睦州", "city": "睦州", "country": "中国", "fromPage": 1240, "toPage": 1246, "note": "征方腊战死" }
    ],
    "factions": [
     { "name": "市井", "group": "庄户", "fromPage": 599, "toPage": 625, "note": "扈家庄庄户" },
     { "name": "梁山", "group": "山寨", "fromPage": 625, "toPage": 1070, "note": "马军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1246, "note": "随军征辽、征方腊" }
    ],
    "groups": ["地煞七十二", "马军头领"],
    "experiences": [
     { "title": "迎战梁山、被林冲生擒", "fromPage": 599, "toPage": 625, "description": "祝家庄之战中连擒王英，后被林冲走马活捉，宋江收为义妹。" },
     { "title": "由宋江主婚、嫁与王英", "fromPage": 625, "toPage": 645, "description": "宋江主婚，将扈三娘嫁与王英，夫妻同为梁山马军头领。" },
     { "title": "随军征辽、征方腊", "fromPage": 1070, "toPage": 1240, "description": "南征北战屡立战功，与夫王英并肩作战。" },
     { "title": "睦州之战被郑彪所杀", "fromPage": 1240, "toPage": 1246, "description": "攻睦州时为救王英出战，被方腊部将郑彪用镀金铜砖打中面门而死。" }
    ],
    "ending": "征方腊时在睦州被方腊部将郑彪用铜砖打死",
    "endingPage": 1246,
    "note": ""
   },
   {
    "id": "sl-huyanzhuo",
    "primaryName": "呼延灼",
    "names": [
     { "text": "双鞭", "type": "绰号", "note": "使两条水磨钢鞭" },
     { "text": "呼延灼", "type": "本名", "note": "" },
     { "text": "呼延赞之后", "type": "身份", "note": "开国功臣呼延赞嫡派子孙" }
    ],
    "gender": "男",
    "role": "马军五虎将 / 天威星",
    "firstPage": 690,
    "appearances": [690, 725, 780, 1285],
    "locations": [
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 690, "toPage": 705, "note": "汝宁郡都统制，奉召入京" },
     { "place": "青州", "city": "青州", "country": "中国", "fromPage": 705, "toPage": 765, "note": "连环马征梁山，败走青州" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 765, "toPage": 1275, "note": "马军五虎将" },
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 1275, "toPage": 1285, "note": "授御营指挥使" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 690, "toPage": 765, "note": "汝宁郡都统制" },
     { "name": "梁山", "group": "山寨", "fromPage": 765, "toPage": 1070, "note": "马军五虎将" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1285, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "马军五虎将"],
    "experiences": [
     { "title": "连环马征梁山、被钩镰枪所破", "fromPage": 700, "toPage": 745, "description": "以三千连环马大败梁山军，后徐宁教钩镰枪法，连环马尽被破解。" },
     { "title": "青州被擒、归顺梁山", "fromPage": 745, "toPage": 770, "description": "兵败投青州，被宋江设计擒获，呼延灼感其义气遂降。" },
     { "title": "随军征辽、征方腊", "fromPage": 1070, "toPage": 1260, "description": "坐第八位，为马军五虎将第四，南征北战屡建大功。" },
     { "title": "授御营指挥使、后领兵抗金阵亡", "fromPage": 1275, "toPage": 1285, "description": "征方腊后授御营指挥使，后领大军破金，阵亡于淮西。" }
    ],
    "ending": "征方腊后授御营指挥使，后领兵抗金阵亡于淮西",
    "endingPage": 1285,
    "note": "阵亡一节据后世续书补叙"
   },
   {
    "id": "sl-lujunyi",
    "primaryName": "卢俊义",
    "names": [
     { "text": "玉麒麟", "type": "绰号", "note": "" },
     { "text": "卢俊义", "type": "本名", "note": "" },
     { "text": "卢员外", "type": "称呼", "note": "大名府富商" },
     { "text": "河北三绝", "type": "称号", "note": "棍棒、相扑、身家皆绝" }
    ],
    "gender": "男",
    "role": "梁山泊副寨主 / 天罡星",
    "firstPage": 781,
    "appearances": [781, 815, 900, 940, 1295],
    "locations": [
     { "place": "大名府", "city": "大名", "country": "中国", "fromPage": 781, "toPage": 840, "note": "北京大名府富商员外" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 840, "toPage": 1290, "note": "坐第二把交椅" },
     { "place": "庐州", "city": "合肥", "country": "中国", "fromPage": 1290, "toPage": 1295, "note": "任庐州安抚使" }
    ],
    "factions": [
     { "name": "市井", "group": "豪绅", "fromPage": 781, "toPage": 840, "note": "大名府员外" },
     { "name": "梁山", "group": "山寨", "fromPage": 840, "toPage": 1070, "note": "梁山泊副寨主" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1295, "note": "随军征辽、征方腊，官授庐州安抚使" }
    ],
    "groups": ["天罡三十六", "马军五虎将", "梁山泊副寨主"],
    "experiences": [
     { "title": "中吴用反间计、陷狱大名府", "fromPage": 790, "toPage": 835, "description": "吴用扮作算命先生题反诗，又纵李固告发，卢俊义被下死牢。" },
     { "title": "活捉史文恭、坐第二把交椅", "fromPage": 880, "toPage": 905, "description": "遵晁盖遗言，卢俊义活捉史文恭，众头领推其为梁山泊副寨主。" },
     { "title": "征辽征方腊、屡为先锋", "fromPage": 1070, "toPage": 1270, "description": "受招安后独当一面，破辽、平田虎王庆、征方腊，战功第一。" },
     { "title": "被水银毒害、落水身亡", "fromPage": 1290, "toPage": 1295, "description": "蔡京等忌其功，以水银暗置御膳，卢俊义乘船时坠入淮河溺死。" }
    ],
    "ending": "被蔡京等以水银毒害，乘船时落水身亡于淮河",
    "endingPage": 1295,
    "note": ""
   },
   {
    "id": "sl-yanqing",
    "primaryName": "燕青",
    "names": [
     { "text": "浪子", "type": "绰号", "note": "吹箫唱曲，相扑无对" },
     { "text": "燕青", "type": "本名", "note": "" },
     { "text": "燕小乙", "type": "称呼", "note": "卢俊义家仆" }
    ],
    "gender": "男",
    "role": "步军头领 / 天巧星",
    "firstPage": 794,
    "appearances": [794, 830, 960, 1275],
    "locations": [
     { "place": "大名府", "city": "大名", "country": "中国", "fromPage": 794, "toPage": 840, "note": "卢俊义家中心腹仆人" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 840, "toPage": 1265, "note": "步军头领，坐第三十六位" },
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 960, "toPage": 1000, "note": "私见李师师，促成招安" },
     { "place": "江湖", "city": "", "country": "中国", "fromPage": 1265, "toPage": 1275, "note": "功成身退，浪迹江湖" }
    ],
    "factions": [
     { "name": "市井", "group": "仆从", "fromPage": 794, "toPage": 840, "note": "卢府家仆" },
     { "name": "梁山", "group": "山寨", "fromPage": 840, "toPage": 1070, "note": "步军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1265, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "步军十头领"],
    "experiences": [
     { "title": "随卢俊义入狱、被救上梁山", "fromPage": 810, "toPage": 845, "description": "卢俊义陷狱，燕青乞食救主，射死董超、薛霸，背负主人上梁山。" },
     { "title": "东京见李师师、促成招安", "fromPage": 960, "toPage": 1000, "description": "随宋江入东京，凭吹箫唱曲得见李师师，代为陈情，打通招安门路。" },
     { "title": "秋林渡射雁、随军征方腊", "fromPage": 1070, "toPage": 1250, "description": "征方腊后于秋林渡箭射雁行，又劝卢俊义急流勇退。" },
     { "title": "功成身退、归隐江湖", "fromPage": 1265, "toPage": 1275, "description": "留书辞别宋江，收拾一担金银，独自浪迹天涯，不知所终。" }
    ],
    "ending": "征方腊后劝卢俊义急流勇退不成，独自归隐江湖，不知所终",
    "endingPage": 1275,
    "note": ""
   },
   {
    "id": "sl-guansheng",
    "primaryName": "关胜",
    "names": [
     { "text": "大刀", "type": "绰号", "note": "使青龙偃月刀" },
     { "text": "关胜", "type": "本名", "note": "" },
     { "text": "关公嫡派子孙", "type": "身份", "note": "汉末关羽之后" }
    ],
    "gender": "男",
    "role": "马军五虎将之首 / 天勇星",
    "firstPage": 807,
    "appearances": [807, 830, 900, 1280],
    "locations": [
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 807, "toPage": 825, "note": "蒲东巡检，被召入京" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 830, "toPage": 1275, "note": "马军五虎将之首" },
     { "place": "大名府", "city": "大名", "country": "中国", "fromPage": 1275, "toPage": 1285, "note": "任大名府兵马总管" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 807, "toPage": 830, "note": "蒲东巡检" },
     { "name": "梁山", "group": "山寨", "fromPage": 830, "toPage": 1070, "note": "马军五虎将之首" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1285, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "马军五虎将"],
    "experiences": [
     { "title": "领兵征剿梁山、中计被擒归顺", "fromPage": 810, "toPage": 835, "description": "宣赞举荐关胜领兵解大名府之围，中宋江、吴用之计被擒，感其义而归降。" },
     { "title": "梁山马军五虎将之首", "fromPage": 835, "toPage": 1100, "description": "坐第五位，居马军五虎将之首，与林冲、秦明等同掌马军。" },
     { "title": "随军征辽、征方腊、屡立战功", "fromPage": 1070, "toPage": 1260, "description": "破辽阵斩将，征方腊攻常州、睦州，战功卓著。" },
     { "title": "任大名府兵马总管、酒醉落马病卒", "fromPage": 1275, "toPage": 1285, "description": "班师后授大名府兵马总管，一日操练军马回来，因大醉落马得病身亡。" }
    ],
    "ending": "征方腊后任大名府兵马总管，一日操练军马回来，因酒醉落马病卒",
    "endingPage": 1285,
    "note": ""
   },
   {
    "id": "sl-tongguan",
    "primaryName": "童贯",
    "names": [
     { "text": "童贯", "type": "本名", "note": "" },
     { "text": "童枢密", "type": "官职", "note": "枢密使，掌天下兵权" }
    ],
    "gender": "男",
    "role": "枢密使 / 权奸",
    "firstPage": 900,
    "appearances": [900, 950, 1050, 1300],
    "locations": [
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 900, "toPage": 1300, "note": "枢密院，掌兵权" },
     { "place": "江南", "city": "杭州", "country": "中国", "fromPage": 1050, "toPage": 1105, "note": "挂帅征剿方腊" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 900, "toPage": 1300, "note": "枢密使" }
    ],
    "groups": ["朝廷权奸"],
    "experiences": [
     { "title": "挂帅征剿梁山、两败于梁山军", "fromPage": 900, "toPage": 985, "description": "两次统领大军征剿梁山，先后为梁山军所破，损兵折将。" },
     { "title": "招安后统兵征方腊、损兵折将", "fromPage": 1050, "toPage": 1105, "description": "督师南下征方腊，久战无功，反为所败。" },
     { "title": "因罪被贬、赐死流放途中", "fromPage": 1295, "toPage": 1300, "description": "钦宗即位后，童贯以罪被贬，随即被赐死于流放途中。" }
    ],
    "ending": "钦宗即位后被贬，随即被赐死于流放途中",
    "endingPage": 1300,
    "note": ""
   },
   {
    "id": "sl-suyuanjing",
    "primaryName": "宿元景",
    "names": [
     { "text": "宿元景", "type": "本名", "note": "" },
     { "text": "宿太尉", "type": "官职", "note": "殿前太尉" }
    ],
    "gender": "男",
    "role": "殿前太尉 / 招安使者",
    "firstPage": 1041,
    "appearances": [1041, 1070, 1150, 1300],
    "locations": [
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 1041, "toPage": 1300, "note": "殿前太尉，两次赍诏招安" }
    ],
    "factions": [
     { "name": "朝廷", "group": "官府", "fromPage": 1041, "toPage": 1300, "note": "殿前太尉" }
    ],
    "groups": ["朝廷忠臣"],
    "experiences": [
     { "title": "奉旨往梁山招安、宣读诏书", "fromPage": 1041, "toPage": 1065, "description": "受天子之命赍捧诏书赴梁山泊，宣读招安诏旨，梁山全伙受降。" },
     { "title": "保奏宋江等征辽、征方腊", "fromPage": 1065, "toPage": 1100, "description": "朝中力保宋江等忠义，奏请使其领兵征辽、征方腊以图功名。" },
     { "title": "宋江死后上奏鸣冤、请立庙塑像", "fromPage": 1290, "toPage": 1300, "description": "宋江等被害后，宿元景上奏天子陈其忠义，请为立庙塑像，以彰后世。" }
    ],
    "ending": "宋江死后上奏天子，为其立庙塑像，以全忠义，善终",
    "endingPage": 1300,
    "note": ""
   },
   {
    "id": "sl-fangla",
    "primaryName": "方腊",
    "names": [
     { "text": "方腊", "type": "本名", "note": "" },
     { "text": "圣公", "type": "称号", "note": "占据江南八州，自称圣公" },
     { "text": "摩尼教教主", "type": "身份", "note": "以明教聚众起事" }
    ],
    "gender": "男",
    "role": "江南起义军首领 / 圣公",
    "firstPage": 1150,
    "appearances": [1150, 1200, 1268, 1272],
    "locations": [
     { "place": "清溪县帮源洞", "city": "睦州", "country": "中国", "fromPage": 1150, "toPage": 1270, "note": "起义军大本营" },
     { "place": "杭州", "city": "杭州", "country": "中国", "fromPage": 1180, "toPage": 1215, "note": "占据杭州，称帝建元" },
     { "place": "东京", "city": "开封", "country": "中国", "fromPage": 1270, "toPage": 1272, "note": "被押解入京处斩" }
    ],
    "factions": [
     { "name": "方腊", "group": "起义军", "fromPage": 1150, "toPage": 1272, "note": "江南起义军，占据八州二十五县" }
    ],
    "groups": ["江南起义军"],
    "experiences": [
     { "title": "睦州起义、连下江南八州", "fromPage": 1150, "toPage": 1205, "description": "以摩尼教聚众起事，攻占睦州、杭州等八州二十五县，自称圣公。" },
     { "title": "与梁山军大战杭州、睦州", "fromPage": 1205, "toPage": 1260, "description": "梁山军南下征讨，双方在润州、杭州、睦州、乌龙岭反复血战。" },
     { "title": "兵败帮源洞、被鲁智深生擒", "fromPage": 1262, "toPage": 1268, "description": "退守清溪县帮源洞，被鲁智深于万松林中一禅杖打翻活捉。" },
     { "title": "押赴东京凌迟处死", "fromPage": 1268, "toPage": 1272, "description": "被押解至东京，献俘阙下，凌迟处死。" }
    ],
    "ending": "兵败帮源洞，被鲁智深生擒，押赴东京凌迟处死",
    "endingPage": 1272,
    "note": ""
   },
   {
    "id": "sl-sunerniang",
    "primaryName": "孙二娘",
    "names": [
     { "text": "母夜叉", "type": "绰号", "note": "十字坡卖人肉馒头的老板娘" },
     { "text": "孙二娘", "type": "本名", "note": "" },
     { "text": "十字坡酒店主", "type": "身份", "note": "与夫张青同开黑店" }
    ],
    "gender": "女",
    "role": "西山酒店头领 / 地壮星",
    "firstPage": 342,
    "appearances": [342, 410, 750, 1265],
    "locations": [
     { "place": "孟州道十字坡", "city": "孟州", "country": "中国", "fromPage": 342, "toPage": 408, "note": "与张青开酒店，以蒙汗药劫客" },
     { "place": "二龙山", "city": "青州", "country": "中国", "fromPage": 415, "toPage": 745, "note": "随张青投二龙山落草" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 745, "toPage": 1262, "note": "与张青掌西山酒店，打探军情" },
     { "place": "清溪县", "city": "睦州", "country": "中国", "fromPage": 1262, "toPage": 1265, "note": "征方腊战死" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 342, "toPage": 415, "note": "十字坡酒店主" },
     { "name": "二龙山", "group": "山寨", "fromPage": 415, "toPage": 745, "note": "二龙山头领" },
     { "name": "梁山", "group": "山寨", "fromPage": 745, "toPage": 1070, "note": "西山酒店头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1265, "note": "随军征辽、征方腊" }
    ],
    "groups": ["地煞七十二", "西山酒店头领"],
    "experiences": [
     { "title": "十字坡开店、结识武松", "fromPage": 342, "toPage": 408, "description": "与张青在孟州道十字坡开酒店，用药酒麻翻客商；武松刺配孟州路过，识破机关反制孙二娘，张青赶回相认，三人结为兄弟。" },
     { "title": "救武松改装行者、同投二龙山", "fromPage": 408, "toPage": 420, "description": "武松血溅鸳鸯楼后逃至十字坡，孙二娘取出头陀装束为其改装，荐往二龙山安身，后夫妇二人亦投二龙山。" },
     { "title": "三山聚义归梁山、掌西山酒店", "fromPage": 745, "toPage": 1070, "description": "随二龙山人马并入梁山，与张青同掌西山酒店，探听声息、接待往来好汉。" },
     { "title": "征方腊清溪县战死", "fromPage": 1170, "toPage": 1265, "description": "随军南征，攻清溪县时被方腊部将杜微飞刀打中面门，阵亡。" }
    ],
    "ending": "征方腊时在清溪县被方腊部将杜微飞刀打死",
    "endingPage": 1265,
    "note": ""
   },
   {
    "id": "sl-zhangqing",
    "primaryName": "张青",
    "names": [
     { "text": "菜园子", "type": "绰号", "note": "曾在光明寺种菜" },
     { "text": "张青", "type": "本名", "note": "" },
     { "text": "十字坡酒店主", "type": "身份", "note": "孙二娘之夫" }
    ],
    "gender": "男",
    "role": "西山酒店头领 / 地刑星",
    "firstPage": 343,
    "appearances": [343, 410, 750, 1205],
    "locations": [
     { "place": "孟州道十字坡", "city": "孟州", "country": "中国", "fromPage": 343, "toPage": 408, "note": "与孙二娘开酒店" },
     { "place": "二龙山", "city": "青州", "country": "中国", "fromPage": 415, "toPage": 745, "note": "与鲁智深、武松等同占二龙山" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 745, "toPage": 1190, "note": "与孙二娘掌西山酒店" },
     { "place": "歙州", "city": "歙县", "country": "中国", "fromPage": 1190, "toPage": 1205, "note": "征方腊战死" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 343, "toPage": 415, "note": "十字坡酒店主" },
     { "name": "二龙山", "group": "山寨", "fromPage": 415, "toPage": 745, "note": "二龙山头领" },
     { "name": "梁山", "group": "山寨", "fromPage": 745, "toPage": 1070, "note": "西山酒店头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1205, "note": "随军征辽、征方腊" }
    ],
    "groups": ["地煞七十二", "西山酒店头领"],
    "experiences": [
     { "title": "十字坡开店、与武松结义", "fromPage": 343, "toPage": 408, "description": "在十字坡开店以蒙汗药劫取客商财物，敬重江湖好汉；与武松一见如故，结为兄弟。" },
     { "title": "助武松改装行者、同投二龙山", "fromPage": 408, "toPage": 420, "description": "赠武松头陀装束与度牒，写书荐往二龙山，随后与孙二娘一同投奔。" },
     { "title": "三山聚义归梁山、掌西山酒店", "fromPage": 745, "toPage": 1070, "description": "二龙山与桃花山、白虎山同归梁山，与妻孙二娘专掌西山酒店，为山寨耳目。" },
     { "title": "征方腊歙州战死", "fromPage": 1170, "toPage": 1205, "description": "随军南征，攻歙州时死于乱军之中。" }
    ],
    "ending": "征方腊时在歙州战死",
    "endingPage": 1205,
    "note": ""
   },
   {
    "id": "sl-jiezhen",
    "primaryName": "解珍",
    "names": [
     { "text": "两头蛇", "type": "绰号", "note": "" },
     { "text": "解珍", "type": "本名", "note": "" },
     { "text": "登州猎户", "type": "身份", "note": "解宝之兄" }
    ],
    "gender": "男",
    "role": "步军头领 / 天暴星",
    "firstPage": 615,
    "appearances": [615, 645, 780, 1244],
    "locations": [
     { "place": "登州", "city": "蓬莱", "country": "中国", "fromPage": 615, "toPage": 640, "note": "登州猎户，被毛太公陷害下狱" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 640, "toPage": 1240, "note": "步军头领，坐第三十四位" },
     { "place": "乌龙岭", "city": "睦州", "country": "中国", "fromPage": 1240, "toPage": 1244, "note": "征方腊战死" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 615, "toPage": 640, "note": "登州猎户" },
     { "name": "梁山", "group": "山寨", "fromPage": 640, "toPage": 1070, "note": "步军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1244, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "步军十头领"],
    "experiences": [
     { "title": "登州猎虎、被毛太公陷害下狱", "fromPage": 615, "toPage": 635, "description": "与弟解宝射中猛虎，虎落毛太公庄后园，反被毛太公父子诬陷为贼，下在登州死囚牢。" },
     { "title": "顾大嫂劫牢相救、同上梁山", "fromPage": 635, "toPage": 645, "description": "表姐顾大嫂联合孙新、孙立、邹渊等劫牢，救出解氏兄弟，众人一同投奔梁山。" },
     { "title": "梁山步军头领、屡为先锋", "fromPage": 645, "toPage": 1100, "description": "坐第三十四位，与弟解宝同为步军头领，随军破祝家庄、曾头市等。" },
     { "title": "征方腊乌龙岭坠崖身亡", "fromPage": 1170, "toPage": 1244, "description": "攻乌龙岭时攀崖探路，被方腊军挠钩搭住，挣脱不得坠崖身亡。" }
    ],
    "ending": "征方腊时在乌龙岭坠崖身亡",
    "endingPage": 1244,
    "note": ""
   },
   {
    "id": "sl-jiebao",
    "primaryName": "解宝",
    "names": [
     { "text": "双尾蝎", "type": "绰号", "note": "" },
     { "text": "解宝", "type": "本名", "note": "" },
     { "text": "登州猎户", "type": "身份", "note": "解珍之弟" }
    ],
    "gender": "男",
    "role": "步军头领 / 天哭星",
    "firstPage": 616,
    "appearances": [616, 645, 780, 1244],
    "locations": [
     { "place": "登州", "city": "蓬莱", "country": "中国", "fromPage": 616, "toPage": 640, "note": "登州猎户，与兄同陷冤狱" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 640, "toPage": 1240, "note": "步军头领，坐第三十五位" },
     { "place": "乌龙岭", "city": "睦州", "country": "中国", "fromPage": 1240, "toPage": 1244, "note": "征方腊战死" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 616, "toPage": 640, "note": "登州猎户" },
     { "name": "梁山", "group": "山寨", "fromPage": 640, "toPage": 1070, "note": "步军头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1244, "note": "随军征辽、征方腊" }
    ],
    "groups": ["天罡三十六", "步军十头领"],
    "experiences": [
     { "title": "登州猎虎、与兄同陷冤狱", "fromPage": 616, "toPage": 635, "description": "与兄解珍射中猛虎，虎落毛太公后园，反遭毛太公陷害入狱，被毛太公买通节级加害。" },
     { "title": "顾大嫂劫牢相救、同上梁山", "fromPage": 635, "toPage": 645, "description": "顾大嫂率众劫牢，解宝与兄随众人杀出登州，同投梁山。" },
     { "title": "梁山步军头领、随军征战", "fromPage": 645, "toPage": 1100, "description": "坐第三十五位，与兄解珍同为步军头领，招安后随军征辽。" },
     { "title": "征方腊乌龙岭中箭身亡", "fromPage": 1170, "toPage": 1244, "description": "见兄坠崖，急往抢尸，被方腊军乱箭射死在乌龙岭下。" }
    ],
    "ending": "征方腊时在乌龙岭被乱箭射死",
    "endingPage": 1244,
    "note": ""
   },
   {
    "id": "sl-gusao",
    "primaryName": "顾大嫂",
    "names": [
     { "text": "母大虫", "type": "绰号", "note": "性情刚烈，武艺高强" },
     { "text": "顾大嫂", "type": "本名", "note": "" },
     { "text": "登州酒店主", "type": "身份", "note": "孙新之妻，解珍解宝的表姐" }
    ],
    "gender": "女",
    "role": "东山酒店头领 / 地阴星",
    "firstPage": 620,
    "appearances": [620, 645, 780, 1285],
    "locations": [
     { "place": "登州十里牌", "city": "蓬莱", "country": "中国", "fromPage": 620, "toPage": 640, "note": "与孙新开酒店，定计劫牢" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 640, "toPage": 1280, "note": "与孙新掌东山酒店" },
     { "place": "登州", "city": "蓬莱", "country": "中国", "fromPage": 1280, "toPage": 1285, "note": "征方腊后随夫回登州" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 620, "toPage": 640, "note": "登州十里牌酒店主" },
     { "name": "梁山", "group": "山寨", "fromPage": 640, "toPage": 1070, "note": "东山酒店头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1280, "note": "随军征辽、征方腊" }
    ],
    "groups": ["地煞七十二", "东山酒店头领"],
    "experiences": [
     { "title": "登州劫牢、救解珍解宝", "fromPage": 620, "toPage": 640, "description": "为救表弟解珍、解宝，逼丈夫孙新请来孙立、邹渊等，里应外合劫了登州大牢，杀了毛太公一门。" },
     { "title": "与孙新掌梁山东山酒店", "fromPage": 640, "toPage": 1070, "description": "上梁山后坐第一百零一位，与孙新同掌东山酒店，探听往来消息、接送上山好汉。" },
     { "title": "随军征辽、征方腊", "fromPage": 1070, "toPage": 1270, "description": "招安后随军北征辽国、南征方腊，屡从战阵，为幸存的女将之一。" },
     { "title": "受封东源县君、回登州善终", "fromPage": 1270, "toPage": 1285, "description": "征方腊后受封东源县君，随夫孙新回登州，仍以酒店为业，善终。" }
    ],
    "ending": "征方腊后幸存，受封东源县君，随夫孙新回登州，善终",
    "endingPage": 1285,
    "note": ""
   },
   {
    "id": "sl-sunxin",
    "primaryName": "孙新",
    "names": [
     { "text": "小尉迟", "type": "绰号", "note": "" },
     { "text": "孙新", "type": "本名", "note": "" },
     { "text": "登州酒店主", "type": "身份", "note": "军官孙立之弟，顾大嫂之夫" }
    ],
    "gender": "男",
    "role": "东山酒店头领 / 地数星",
    "firstPage": 621,
    "appearances": [621, 645, 780, 1285],
    "locations": [
     { "place": "登州十里牌", "city": "蓬莱", "country": "中国", "fromPage": 621, "toPage": 640, "note": "与妻顾大嫂开酒店" },
     { "place": "梁山泊", "city": "济宁", "country": "中国", "fromPage": 640, "toPage": 1280, "note": "与顾大嫂掌东山酒店" },
     { "place": "登州", "city": "蓬莱", "country": "中国", "fromPage": 1280, "toPage": 1285, "note": "征方腊后随妻回登州" }
    ],
    "factions": [
     { "name": "市井", "group": "市井", "fromPage": 621, "toPage": 640, "note": "登州十里牌酒店主" },
     { "name": "梁山", "group": "山寨", "fromPage": 640, "toPage": 1070, "note": "东山酒店头领" },
     { "name": "朝廷", "group": "招安后", "fromPage": 1070, "toPage": 1280, "note": "随军征辽、征方腊" }
    ],
    "groups": ["地煞七十二", "东山酒店头领"],
    "experiences": [
     { "title": "登州十里牌开店、定计劫牢", "fromPage": 621, "toPage": 635, "description": "与妻顾大嫂在登州十里牌开酒店，闻表弟解氏兄弟蒙冤，遂请兄长孙立相助，共定劫牢之计。" },
     { "title": "大闹登州、同上梁山", "fromPage": 635, "toPage": 645, "description": "劫牢救出解珍解宝，杀毛太公满门，随孙立等一同投奔梁山。" },
     { "title": "与顾大嫂掌东山酒店", "fromPage": 645, "toPage": 1070, "description": "坐第一百位，与妻同掌东山酒店，为山寨打探消息、接送好汉。" },
     { "title": "征方腊后受封武奕郎、回登州善终", "fromPage": 1270, "toPage": 1285, "description": "南征归来受封武奕郎，与顾大嫂回登州为民，善终于乡。" }
    ],
    "ending": "征方腊后幸存，受封武奕郎，随妻顾大嫂回登州，善终",
    "endingPage": 1285,
    "note": ""
   }
  ],
  "relations": [
   { "id": "sl-r1", "from": "sl-songjiang", "to": "sl-chaogai", "type": "结义兄弟 / 生死之交", "category": "同盟", "sincePage": 222, "untilPage": 780, "directed": true, "note": "宋江私放晁盖，后同上梁山；晁盖曾头市中箭身亡，交谊终止" },
   { "id": "sl-r2", "from": "sl-chaogai", "to": "sl-wuyong", "type": "七星聚义 / 寨主与军师", "category": "同盟", "sincePage": 190, "untilPage": 780, "directed": true, "note": "吴用辅佐晁盖劫生辰纲、坐梁山，晁盖死后止" },
   { "id": "sl-r3", "from": "sl-chaogai", "to": "sl-liutang", "type": "结义兄弟 / 七星聚义", "category": "同盟", "sincePage": 190, "untilPage": 780, "directed": true, "note": "" },
   { "id": "sl-r4", "from": "sl-chaogai", "to": "sl-ruanxiaoqi", "type": "七星聚义同伙", "category": "同盟", "sincePage": 190, "untilPage": 780, "directed": true, "note": "" },
   { "id": "sl-r5", "from": "sl-wuyong", "to": "sl-songjiang", "type": "军师与寨主 / 生死之交", "category": "同盟", "sincePage": 300, "untilPage": 1290, "directed": true, "note": "吴用辅佐宋江终身，宋江死后自缢殉义" },
   { "id": "sl-r6", "from": "sl-songjiang", "to": "sl-likui", "type": "主仆 / 死忠", "category": "主仆", "sincePage": 490, "untilPage": 1291, "directed": true, "note": "李逵一生只听宋江号令，终被宋江以毒酒同死" },
   { "id": "sl-r7", "from": "sl-songjiang", "to": "sl-huorong", "type": "知遇之交 / 生死兄弟", "category": "同盟", "sincePage": 430, "untilPage": 1290, "directed": true, "note": "清风寨相救结义，花荣终以身殉" },
   { "id": "sl-r8", "from": "sl-songjiang", "to": "sl-daizong", "type": "生死之交 / 江州相识", "category": "同盟", "sincePage": 480, "untilPage": 1288, "directed": true, "note": "" },
   { "id": "sl-r9", "from": "sl-songjiang", "to": "sl-zhangshun", "type": "寨主与水军头领", "category": "上下级", "sincePage": 500, "untilPage": 1215, "directed": true, "note": "张顺征方腊战死，关系终止" },
   { "id": "sl-r10", "from": "sl-songjiang", "to": "sl-yanpoxi", "type": "外室 / 情仇", "category": "情感", "sincePage": 265, "untilPage": 285, "directed": true, "note": "阎婆惜以招文袋要挟，被宋江杀死" },
   { "id": "sl-r11", "from": "sl-songjiang", "to": "sl-husanniang", "type": "义兄妹 / 主婚之人", "category": "亲属", "sincePage": 620, "untilPage": 1246, "directed": true, "note": "宋江认扈三娘为义妹，并主婚将其嫁与王英" },
   { "id": "sl-r12", "from": "sl-husanniang", "to": "sl-wangying", "type": "夫妻（宋江主婚）", "category": "婚姻", "sincePage": 625, "untilPage": 1246, "directed": false, "note": "二人同于睦州之战殉难" },
   { "id": "sl-r13", "from": "sl-wangying", "to": "sl-songjiang", "type": "部将 / 感恩", "category": "上下级", "sincePage": 490, "untilPage": 1246, "directed": true, "note": "" },
   { "id": "sl-r14", "from": "sl-linchong", "to": "sl-gaoqiu", "type": "仇敌 / 陷害", "category": "敌对", "sincePage": 92, "untilPage": 1105, "directed": true, "note": "高俅设计使林冲误入白虎堂、刺配沧州，逼其家破人亡" },
   { "id": "sl-r15", "from": "sl-gaoqiu", "to": "sl-songjiang", "type": "敌对 / 招安与陷害", "category": "敌对", "sincePage": 700, "untilPage": 1105, "directed": true, "note": "高俅三征梁山被擒，招安后仍以毒酒害宋江" },
   { "id": "sl-r16", "from": "sl-caijing", "to": "sl-songjiang", "type": "敌对 / 陷害", "category": "敌对", "sincePage": 490, "untilPage": 1290, "directed": true, "note": "蔡京识破假书陷宋江于江州，终与其党羽害死宋江" },
   { "id": "sl-r17", "from": "sl-tongguan", "to": "sl-songjiang", "type": "敌对 / 征剿与招安", "category": "敌对", "sincePage": 900, "untilPage": 1290, "directed": true, "note": "童贯两次征剿梁山，招安后又与蔡京等共谋陷害" },
   { "id": "sl-r18", "from": "sl-songjiang", "to": "sl-suyuanjing", "type": "受招安者与招安使者", "category": "上下级", "sincePage": 1041, "untilPage": 1300, "directed": true, "note": "宿元景赍诏招安，宋江死后又为其鸣冤立庙" },
   { "id": "sl-r19", "from": "sl-songjiang", "to": "sl-fangla", "type": "敌对 / 征讨", "category": "敌对", "sincePage": 1150, "untilPage": 1272, "directed": true, "note": "宋江受招安后统兵征方腊，方腊兵败被擒" },
   { "id": "sl-r20", "from": "sl-wusong", "to": "sl-panjinlian", "type": "仇杀 / 叔嫂", "category": "敌对", "sincePage": 325, "untilPage": 338, "directed": true, "note": "潘金莲毒杀武大郎，武松剖腹挖心祭兄" },
   { "id": "sl-r21", "from": "sl-wusong", "to": "sl-ximenqing", "type": "仇杀", "category": "敌对", "sincePage": 325, "untilPage": 341, "directed": true, "note": "西门庆与潘金莲通奸害死武大，武松狮子楼斗杀之" },
   { "id": "sl-r22", "from": "sl-panjinlian", "to": "sl-ximenqing", "type": "通奸 / 情人", "category": "情感", "sincePage": 305, "untilPage": 341, "directed": false, "note": "经王婆牵线成奸，同谋毒杀武大" },
   { "id": "sl-r23", "from": "sl-wangpo", "to": "sl-panjinlian", "type": "教唆通奸 / 邻里", "category": "其他", "sincePage": 300, "untilPage": 345, "directed": true, "note": "王婆牵线并教唆毒杀武大，终被判凌迟" },
   { "id": "sl-r24", "from": "sl-wangpo", "to": "sl-ximenqing", "type": "牵线说合", "category": "其他", "sincePage": 300, "untilPage": 341, "directed": true, "note": "" },
   { "id": "sl-r25", "from": "sl-songjiang", "to": "sl-wusong", "type": "结义兄弟", "category": "同盟", "sincePage": 300, "untilPage": 1250, "directed": true, "note": "柴进庄中相识结义，武松六和寺出家人世，交谊止于其善终" },
   { "id": "sl-r26", "from": "sl-wusong", "to": "sl-luzhishen", "type": "结义兄弟（二龙山）", "category": "同盟", "sincePage": 420, "untilPage": 1240, "directed": true, "note": "同在二龙山落草，后又同归梁山步军" },
   { "id": "sl-r27", "from": "sl-luzhishen", "to": "sl-linchong", "type": "结义兄弟 / 野猪林相救", "category": "同盟", "sincePage": 100, "untilPage": 1240, "directed": true, "note": "鲁智深大闹野猪林救林冲性命，二人结为兄弟" },
   { "id": "sl-r28", "from": "sl-luzhishen", "to": "sl-yangzhi", "type": "结义兄弟 / 二龙山之主", "category": "同盟", "sincePage": 210, "untilPage": 1131, "directed": true, "note": "同夺宝珠寺占二龙山，杨志病逝丹徒后终止" },
   { "id": "sl-r29", "from": "sl-yangzhi", "to": "sl-wuyong", "type": "押送生辰纲被智取", "category": "敌对", "sincePage": 196, "untilPage": 208, "directed": true, "note": "黄泥冈生辰纲被吴用等智取，杨志因此落草，二人后同归梁山" },
   { "id": "sl-r30", "from": "sl-wuyong", "to": "sl-lujunyi", "type": "军师设计赚卢俊义上山 / 副寨主", "category": "同盟", "sincePage": 790, "untilPage": 1290, "directed": true, "note": "吴用以反间计赚卢俊义上山，后同朝为官，卢俊义被害止" },
   { "id": "sl-r31", "from": "sl-lujunyi", "to": "sl-yanqing", "type": "主仆 / 情同父子", "category": "主仆", "sincePage": 794, "untilPage": 1295, "directed": true, "note": "燕青自幼为卢俊义养大，乞食救主，卢俊义死后止" },
   { "id": "sl-r32", "from": "sl-yanqing", "to": "sl-likui", "type": "结义兄弟 / 生死之交", "category": "同盟", "sincePage": 840, "untilPage": 1275, "directed": true, "note": "二人常相随伴，燕青归隐江湖后终止" },
   { "id": "sl-r33", "from": "sl-linchong", "to": "sl-wanglun", "type": "部属与寨主 / 火并", "category": "敌对", "sincePage": 145, "untilPage": 247, "directed": true, "note": "王伦屡次相拒，林冲于聚义厅将其火并" },
   { "id": "sl-r34", "from": "sl-linchong", "to": "sl-chaijin", "type": "恩人 / 知遇之恩", "category": "师友", "sincePage": 105, "untilPage": 1285, "directed": true, "note": "柴进厚待林冲并修书荐其投梁山，情谊终老" },
   { "id": "sl-r35", "from": "sl-chaijin", "to": "sl-songjiang", "type": "患难之交 / 生死兄弟", "category": "同盟", "sincePage": 300, "untilPage": 1290, "directed": true, "note": "宋江杀惜后投柴进庄避难，二人交厚终身" },
   { "id": "sl-r36", "from": "sl-daizong", "to": "sl-likui", "type": "上下级 / 兄长与随从", "category": "主仆", "sincePage": 490, "untilPage": 1288, "directed": true, "note": "江州时戴宗约束李逵，后同归梁山，戴宗先卒" },
   { "id": "sl-r37", "from": "sl-huorong", "to": "sl-qinming", "type": "妹夫与大舅 / 同僚", "category": "亲属", "sincePage": 465, "untilPage": 1248, "directed": true, "note": "花荣将妹妹嫁与秦明，二人结为姻亲" },
   { "id": "sl-r38", "from": "sl-qinming", "to": "sl-songjiang", "type": "部将 / 感恩", "category": "上下级", "sincePage": 465, "untilPage": 1248, "directed": true, "note": "秦明感宋江主婚之义，终身相随，清溪县战死" },
   { "id": "sl-r39", "from": "sl-guansheng", "to": "sl-songjiang", "type": "降将与寨主", "category": "上下级", "sincePage": 830, "untilPage": 1290, "directed": true, "note": "关胜被擒归降，为马军五虎将之首" },
   { "id": "sl-r40", "from": "sl-huyanzhuo", "to": "sl-songjiang", "type": "降将与寨主", "category": "上下级", "sincePage": 765, "untilPage": 1290, "directed": true, "note": "" },
   { "id": "sl-r41", "from": "sl-gongsunsheng", "to": "sl-chaogai", "type": "七星聚义", "category": "同盟", "sincePage": 190, "untilPage": 780, "directed": true, "note": "" },
   { "id": "sl-r42", "from": "sl-gongsunsheng", "to": "sl-songjiang", "type": "法师与寨主", "category": "同盟", "sincePage": 300, "untilPage": 1120, "directed": true, "note": "公孙胜征辽后遵师命归隐，交谊止于二仙山" },
   { "id": "sl-r43", "from": "sl-shixiu", "to": "sl-shiqian", "type": "结义兄弟 / 祝家庄同伙", "category": "同盟", "sincePage": 600, "untilPage": 1246, "directed": true, "note": "同因祝家庄之事上梁山，石秀先亡" },
   { "id": "sl-r44", "from": "sl-shixiu", "to": "sl-lujunyi", "type": "大名府劫法场相救", "category": "同盟", "sincePage": 810, "untilPage": 1246, "directed": true, "note": "石秀独跳酒楼劫法场，救下卢俊义性命" },
   { "id": "sl-r45", "from": "sl-shiqian", "to": "sl-songjiang", "type": "部将 / 盗甲立功", "category": "上下级", "sincePage": 690, "untilPage": 1262, "directed": true, "note": "" },
   { "id": "sl-r46", "from": "sl-liutang", "to": "sl-songjiang", "type": "报信结义", "category": "同盟", "sincePage": 222, "untilPage": 1220, "directed": true, "note": "刘唐奉命送金谢宋江，书信成为阎婆惜案的祸根" },
   { "id": "sl-r47", "from": "sl-ruanxiaoqi", "to": "sl-songjiang", "type": "水军头领与寨主", "category": "上下级", "sincePage": 250, "untilPage": 1280, "directed": true, "note": "" },
   { "id": "sl-r48", "from": "sl-caijing", "to": "sl-lujunyi", "type": "陷害 / 水银毒酒", "category": "敌对", "sincePage": 1290, "untilPage": 1295, "directed": true, "note": "蔡京等以水银暗害卢俊义，致其落水而亡" },
   { "id": "sl-r49", "from": "sl-gaoqiu", "to": "sl-lujunyi", "type": "陷害 / 毒害忠良", "category": "敌对", "sincePage": 1290, "untilPage": 1295, "directed": true, "note": "与蔡京等共谋，先害卢俊义、后害宋江" },
   { "id": "sl-r50", "from": "sl-luzhishen", "to": "sl-fangla", "type": "生擒方腊", "category": "敌对", "sincePage": 1262, "untilPage": 1272, "directed": true, "note": "鲁智深于万松林中一禅杖打翻方腊，押赴东京" },
   { "id": "sl-r51", "from": "sl-yanqing", "to": "sl-songjiang", "type": "促成招安 / 部将", "category": "上下级", "sincePage": 960, "untilPage": 1275, "directed": true, "note": "燕青私见李师师为招安打通门路，后归隐止" },
   { "id": "sl-r52", "from": "sl-liutang", "to": "sl-wuyong", "type": "七星聚义同伙", "category": "同盟", "sincePage": 190, "untilPage": 1220, "directed": true, "note": "" },
   { "id": "sl-r53", "from": "sl-tongguan", "to": "sl-fangla", "type": "朝廷征剿方腊", "category": "敌对", "sincePage": 1050, "untilPage": 1105, "directed": true, "note": "童贯挂帅南征方腊，久战无功，后由梁山军代其建功" },
   { "id": "sl-r54", "from": "sl-caijing", "to": "sl-tongguan", "type": "同朝权奸 / 狼狈为奸", "category": "同盟", "sincePage": 900, "untilPage": 1300, "directed": true, "note": "蔡京、童贯、高俅、杨戬结党，共乱朝纲" },
   { "id": "sl-r55", "from": "sl-suyuanjing", "to": "sl-caijing", "type": "忠奸对立", "category": "敌对", "sincePage": 1041, "untilPage": 1300, "directed": true, "note": "宿元景力主招安忠义，与蔡京等权奸势不两立" },
   { "id": "sl-r56", "from": "sl-zhangshun", "to": "sl-likui", "type": "不打不相识 / 结义兄弟", "category": "同盟", "sincePage": 476, "untilPage": 1215, "directed": true, "note": "浔阳江中一场厮打，经宋江劝解结为兄弟；张顺先亡于涌金门" },
   { "id": "sl-r57", "from": "sl-sunerniang", "to": "sl-zhangqing", "type": "夫妻 / 同开十字坡酒店", "category": "婚姻", "sincePage": 342, "untilPage": 1205, "directed": false, "note": "夫妇同开黑店、同投二龙山、同掌西山酒店；张青征方腊战死歙州，夫妻缘尽" },
   { "id": "sl-r58", "from": "sl-sunerniang", "to": "sl-wusong", "type": "十字坡相识 / 结义兄弟", "category": "同盟", "sincePage": 344, "untilPage": 1265, "directed": true, "note": "武松刺配孟州路过十字坡，识破蒙汗药反制孙二娘，张青赶回相认结义；后孙二娘以头陀装束助武松逃亡" },
   { "id": "sl-r59", "from": "sl-zhangqing", "to": "sl-wusong", "type": "结义兄弟 / 十字坡相识", "category": "同盟", "sincePage": 344, "untilPage": 1205, "directed": true, "note": "张青敬武松为真好汉，赠装束、写荐书送其投二龙山；二人后同在二龙山、梁山" },
   { "id": "sl-r60", "from": "sl-gusao", "to": "sl-sunxin", "type": "夫妻 / 同掌东山酒店", "category": "婚姻", "sincePage": 621, "untilPage": 1285, "directed": false, "note": "夫妇同开登州十里牌酒店，共谋劫牢，后同掌梁山东山酒店，南征归来同回登州" },
   { "id": "sl-r61", "from": "sl-gusao", "to": "sl-jiezhen", "type": "表姐弟 / 劫牢相救", "category": "亲属", "sincePage": 620, "untilPage": 1244, "directed": true, "note": "解珍被毛太公陷害下狱，表姐顾大嫂定计劫登州大牢救人，解珍后殁于乌龙岭" },
   { "id": "sl-r62", "from": "sl-gusao", "to": "sl-jiebao", "type": "表姐弟 / 劫牢相救", "category": "亲属", "sincePage": 620, "untilPage": 1244, "directed": true, "note": "同上，顾大嫂劫牢救出解宝，兄弟二人随其同投梁山" },
   { "id": "sl-r63", "from": "sl-jiezhen", "to": "sl-jiebao", "type": "亲兄弟 / 同落草同殉难", "category": "亲属", "sincePage": 615, "untilPage": 1244, "directed": false, "note": "兄弟同猎虎、同陷冤狱、同上梁山，最终同死于乌龙岭" },
   { "id": "sl-r64", "from": "sl-gusao", "to": "sl-shiqian", "type": "梁山同伙 / 酒店打探与走报机密", "category": "同盟", "sincePage": 645, "untilPage": 1262, "directed": true, "note": "顾大嫂掌东山酒店探听消息，时迁专司走报机密，同为山寨耳目" },
   { "id": "sl-r65", "from": "sl-gusao", "to": "sl-shixiu", "type": "梁山同伙 / 酒店打探与步军", "category": "同盟", "sincePage": 645, "untilPage": 1246, "directed": true, "note": "同为梁山步军一系，石秀等往来酒店多由顾大嫂接应；石秀先殁于昱岭关" },
   { "id": "sl-r66", "from": "sl-sunerniang", "to": "sl-songjiang", "type": "部将 / 西山酒店头领", "category": "上下级", "sincePage": 745, "untilPage": 1265, "directed": true, "note": "归梁山后受宋江调遣掌西山酒店，南征时阵亡清溪县" },
   { "id": "sl-r67", "from": "sl-sunxin", "to": "sl-songjiang", "type": "部将 / 东山酒店头领", "category": "上下级", "sincePage": 640, "untilPage": 1290, "directed": true, "note": "登州劫牢后同上梁山，与妻掌东山酒店，宋江死后仍受封武奕郎" },
   { "id": "sl-r68", "from": "sl-zhangqing", "to": "sl-luzhishen", "type": "二龙山同伙", "category": "同盟", "sincePage": 415, "untilPage": 1205, "directed": true, "note": "张青夫妇投二龙山，与鲁智深、杨志、武松同寨；后随三山聚义同归梁山" },
   { "id": "sl-r69", "from": "sl-sunxin", "to": "sl-jiezhen", "type": "表姐夫与小舅 / 同赴梁山", "category": "亲属", "sincePage": 640, "untilPage": 1244, "directed": true, "note": "孙新之妻顾大嫂为解珍表姐，故孙新与解珍为姻亲；二人同劫牢、同上梁山" },
   { "id": "sl-r70", "from": "sl-gusao", "to": "sl-husanniang", "type": "梁山女将同袍", "category": "同盟", "sincePage": 700, "untilPage": 1246, "directed": true, "note": "梁山三位女将中的两位，同掌酒店、同为马步军头领，扈三娘殁于睦州" }
  ]
 }
]);
