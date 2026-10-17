// 示例数据：大师与玛格丽特
// 三条线索交织：A 莫斯科线（1930 年代）／B 耶路撒冷线（本丢·彼拉多的故事）／C 连接者（大师的小说、伊万的见证、沃兰德的裁决）
// 页码按原著阅读顺序铺设，两条时空线交错出现；每条关系满足 sincePage >= max(两端 firstPage)。
window.SAMPLE_BOOKS = (window.SAMPLE_BOOKS || []).concat([
{
  "id": "sample-master",
  "meta": {
    "title": "大师与玛格丽特",
    "author": "米哈伊尔·布尔加科夫",
    "publisher": "浙江文艺出版社",
    "isbn": "978-7-5339-3557-1",
    "edition": "曹国维 译",
    "year": "2010",
    "totalPages": 480,
    "currentPage": 1,
    "note": "页码为示例阅读版本页码"
  },
  "characters": [
    {
      "id": "ds-woland",
      "primaryName": "沃兰德",
      "names": [
        {"text":"撒旦","type":"别名","note":"另一世界的黑暗之王"},
        {"text":"外国教授","type":"别名","note":"初见柏辽兹时的身份"},
        {"text":"魔法教授","type":"别名","note":""},
        {"text":"黑暗之王","type":"称号","note":"撒旦舞会的主人"},
        {"text":"沃兰德先生","type":"称谓","note":""}
      ],
      "gender": "男",
      "role": "魔王 / 巡回剧院的魔术师",
      "firstPage": 8,
      "appearances": [8, 85, 162, 239, 316, 393, 470],
      "locations": [
        {"place":"牧首塘","city":"莫斯科","country":"苏联","fromPage":8,"toPage":40,"note":"与柏辽兹、伊万相遇，预言柏辽兹之死"},
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":150,"toPage":210,"note":"黑魔法表演，揭穿莫斯科人的贪欲"},
        {"place":"魔鬼的舞会大厅","city":"永恒之地","country":"永恒之地","fromPage":300,"toPage":340,"note":"撒旦的舞会，玛格丽特为女王"},
        {"place":"麻雀山","city":"莫斯科","country":"苏联","fromPage":400,"toPage":450,"note":"告别莫斯科，携大师与玛格丽特离去"}
      ],
      "factions": [
        {"name":"魔王一行","group":"超自然","fromPage":8,"toPage":470,"note":"随从：卡罗维耶夫、别格莫特、阿扎泽洛、赫勒"}
      ],
      "groups": ["莫斯科线", "连接者"],
      "experiences": [
        {"title":"在牧首塘预言柏辽兹之死","fromPage":8,"toPage":40,"description":"以外国教授身份与柏辽兹、伊万争论耶稣是否存在，并预言柏辽兹将被电车轧断头颅。"},
        {"title":"黑魔法表演","fromPage":150,"toPage":210,"description":"在瓦列特剧院撒下卢布与巴黎时装，让贪心者付出代价，顺带揭穿剧院与作协的丑态。"},
        {"title":"主持撒旦的舞会","fromPage":300,"toPage":340,"description":"以玛格丽特为女王，接待各方亡灵客人，并在舞会后满足她的愿望。"},
        {"title":"裁决与告别","fromPage":400,"toPage":470,"description":"应利未·马太之请让大师获得安宁，在麻雀山与莫斯科告别，返回永恒之地。"}
      ],
      "ending": "携大师与玛格丽特离开莫斯科，归于永恒安宁",
      "endingPage": 470,
      "note": ""
    },
    {
      "id": "ds-berlioz",
      "primaryName": "柏辽兹",
      "names": [
        {"text":"米哈伊尔·亚历山德罗维奇","type":"本名","note":"本名与父称"},
        {"text":"作协主席","type":"职务","note":"莫斯科文学界的主事者"},
        {"text":"柏辽兹","type":"姓氏","note":"旧译本亦作「柏辽兹」"}
      ],
      "gender": "男",
      "role": "作协主席 / 文学界官僚",
      "firstPage": 16,
      "appearances": [16, 38, 61, 83, 105, 128, 150],
      "locations": [
        {"place":"牧首塘","city":"莫斯科","country":"苏联","fromPage":18,"toPage":56,"note":"与沃兰德争论耶稣是否存在"},
        {"place":"格里鲍耶陀夫之家","city":"莫斯科","country":"苏联","fromPage":56,"toPage":60,"note":"最后一晚在作协餐厅"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":60,"toPage":62,"note":"死在电车下"}
      ],
      "factions": [
        {"name":"作协","group":"苏联机构","fromPage":18,"toPage":62,"note":"主席"},
        {"name":"莫斯科文学界","group":"苏联机构","fromPage":18,"toPage":62,"note":"文学界的代表人物"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"牧首塘的争论","fromPage":18,"toPage":48,"description":"向伊万解释反宗教宣传，与沃兰德争论耶稣是否真的存在。"},
        {"title":"预言与死亡","fromPage":48,"toPage":62,"description":"沃兰德预言他将被电车轧断头颅，当晚即应验，头颅被人偷走。"},
        {"title":"死后","fromPage":70,"toPage":70,"description":"在舞会上作为亡灵客人出现，最终归于虚无。"}
      ],
      "ending": "被电车轧断头颅而死，头颅在舞会上被用作酒杯",
      "endingPage": 150,
      "note": ""
    },
    {
      "id": "ds-ivan",
      "primaryName": "伊万·无家汉",
      "names": [
        {"text":"伊万努什卡","type":"昵称","note":"旁人这样称呼他"},
        {"text":"诗人无家汉","type":"笔名","note":"别号「无家汉」"},
        {"text":"编号 118 号病人","type":"编号","note":"精神病院住院号"},
        {"text":"伊万·尼古拉耶维奇·波内列夫","type":"误认","note":"被错认时的名字"}
      ],
      "gender": "男",
      "role": "诗人 / 后来的历史学教授",
      "firstPage": 24,
      "appearances": [24, 100, 175, 251, 327, 402, 478],
      "locations": [
        {"place":"牧首塘","city":"莫斯科","country":"苏联","fromPage":27,"toPage":62,"note":"目击柏辽兹之死"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":62,"toPage":128,"note":"追捕沃兰德一行，最后落水"},
        {"place":"精神病院","city":"莫斯科","country":"苏联","fromPage":128,"toPage":398,"note":"河边的那座精神病院"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":420,"toPage":478,"note":"成为教授，每年月圆之夜做梦"}
      ],
      "factions": [
        {"name":"莫斯科文学界","group":"苏联机构","fromPage":27,"toPage":128,"note":"作协旗下的年轻诗人"}
      ],
      "groups": ["莫斯科线", "连接者"],
      "experiences": [
        {"title":"目击柏辽兹之死","fromPage":27,"toPage":62,"description":"在牧首塘听沃兰德预言，随后亲眼看见柏辽兹死于电车之下。"},
        {"title":"追捕与入院","fromPage":62,"toPage":128,"description":"追捕沃兰德一行，在莫斯科河落水，被送进精神病院。"},
        {"title":"与大师相识","fromPage":150,"toPage":398,"description":"在病院里与大师相遇，读到彼拉多的小说，从此改变一生。"},
        {"title":"成为教授","fromPage":420,"toPage":478,"description":"每年月圆之夜梦见彼拉多与耶舒阿，把这段故事讲给后人。"}
      ],
      "ending": "成为历史学教授，每年月圆之夜梦见彼拉多与各各他",
      "endingPage": 478,
      "note": ""
    },
    {
      "id": "ds-pilate",
      "primaryName": "本丢·彼拉多",
      "names": [
        {"text":"总督","type":"职务","note":"罗马帝国犹太行省总督"},
        {"text":"第五任犹太总督","type":"职务","note":"全称"},
        {"text":"骑士","type":"称号","note":"月光之路上被这样称呼"},
        {"text":"彼拉多","type":"姓氏","note":""}
      ],
      "gender": "男",
      "role": "罗马帝国犹太行省总督",
      "firstPage": 64,
      "appearances": [64, 133, 201, 270, 339, 407, 476],
      "locations": [
        {"place":"希律大王宫","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":68,"toPage":70,"note":"审判耶舒阿的凉台"},
        {"place":"耶路撒冷城墙","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":70,"toPage":126,"note":"宣布判决与放走巴拉巴"},
        {"place":"秃山","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":269,"toPage":309,"note":"秘密处死犹大"},
        {"place":"月光之路","city":"永恒之地","country":"永恒之地","fromPage":440,"toPage":476,"note":"被宽恕后走上月光之路"}
      ],
      "factions": [
        {"name":"罗马驻军","group":"罗马政权","fromPage":68,"toPage":349,"note":"犹太行省总督"}
      ],
      "groups": ["耶路撒冷线", "连接者"],
      "experiences": [
        {"title":"审判耶舒阿","fromPage":68,"toPage":70,"description":"在希律大王宫的凉台上审问哈-诺兹里，明知他无罪却屈从于大祭司的压力。"},
        {"title":"批准处决与悔恨","fromPage":70,"toPage":126,"description":"下令将耶舒阿钉上十字架，随后终生为此痛苦，渴望与死者对话。"},
        {"title":"密令暗杀犹大","fromPage":269,"toPage":309,"description":"命阿弗拉尼除掉出卖耶舒阿的犹大，作为迟到的赎罪。"},
        {"title":"两千年后的宽恕","fromPage":440,"toPage":476,"description":"由大师在沃兰德面前说出「自由了」，得以走上月光之路。"}
      ],
      "ending": "被宽恕，与耶舒阿在月光之路上同行",
      "endingPage": 476,
      "note": "两千年来在石座上等待宽恕"
    },
    {
      "id": "ds-yeshua",
      "primaryName": "耶舒阿",
      "names": [
        {"text":"哈-诺兹里","type":"别名","note":"拿撒勒人"},
        {"text":"游方哲人","type":"身份","note":"四处游历的哲人"},
        {"text":"约书亚","type":"别名","note":"旧译名"}
      ],
      "gender": "男",
      "role": "游方哲人 / 被捕的拿撒勒人",
      "firstPage": 72,
      "appearances": [72, 140, 208, 276, 344, 412, 480],
      "locations": [
        {"place":"希律大王宫","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":76,"toPage":76,"note":"在凉台上受审"},
        {"place":"耶路撒冷城墙","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":76,"toPage":130,"note":"被押解示众"},
        {"place":"各各他","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":263,"toPage":300,"note":"被钉上十字架"},
        {"place":"月光之路","city":"永恒之地","country":"永恒之地","fromPage":440,"toPage":480,"note":"归于光明，与彼拉多同行"}
      ],
      "factions": [
        {"name":"耶舒阿门徒","group":"耶路撒冷","fromPage":76,"toPage":300,"note":"门徒的导师"}
      ],
      "groups": ["耶路撒冷线"],
      "experiences": [
        {"title":"宣讲善与真理","fromPage":76,"toPage":76,"description":"对被判死刑的犹大说「不要怕」，向彼拉多宣告一切人都善良。"},
        {"title":"受审与判决","fromPage":76,"toPage":140,"description":"承认自己说过的话，被该亚法一党要求处死。"},
        {"title":"各各他受难","fromPage":263,"toPage":300,"description":"被钉上十字架，利未·马太在暗处目睹全程。"},
        {"title":"归于光明","fromPage":440,"toPage":480,"description":"在永恒中与彼拉多重逢，走上月光之路，归于光明。"}
      ],
      "ending": "归于光明，与彼拉多同在月光之路上",
      "endingPage": 480,
      "note": ""
    },
    {
      "id": "ds-caiaphas",
      "primaryName": "该亚法",
      "names": [
        {"text":"大祭司","type":"职务","note":"犹太教大祭司"},
        {"text":"该亚法","type":"名字","note":""},
        {"text":"祭司长","type":"职务","note":"旧译"}
      ],
      "gender": "男",
      "role": "犹太教大祭司",
      "firstPage": 84,
      "appearances": [84, 148, 213, 277, 341, 406, 470],
      "locations": [
        {"place":"希律大王宫","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":100,"toPage":120,"note":"要求彼拉多处死耶舒阿"},
        {"place":"下城","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":120,"toPage":269,"note":"在祭司中主事"},
        {"place":"耶路撒冷城墙","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":309,"toPage":470,"note":"继续担任大祭司"}
      ],
      "factions": [
        {"name":"犹太教祭司","group":"耶路撒冷","fromPage":100,"toPage":470,"note":"大祭司，祭司集团之首"}
      ],
      "groups": ["耶路撒冷线"],
      "experiences": [
        {"title":"逼迫彼拉多","fromPage":100,"toPage":120,"description":"强硬要求处死耶舒阿，用逾越节赦免的名额换取巴拉巴。"},
        {"title":"主持祭司会议","fromPage":120,"toPage":269,"description":"在祭司集团中主事，把耶舒阿定为渎神者。"},
        {"title":"继续任大祭司","fromPage":309,"toPage":470,"description":"事件之后仍旧稳坐大祭司之位，罗马人并没有动他。"}
      ],
      "ending": "继续担任大祭司，未受追究",
      "endingPage": 470,
      "note": ""
    },
    {
      "id": "ds-afranius",
      "primaryName": "阿弗拉尼",
      "names": [
        {"text":"密探","type":"身份","note":"彼拉多的秘密差役"},
        {"text":"阿弗拉尼","type":"名字","note":""},
        {"text":"第一剑士","type":"绰号","note":"旧译本译法"}
      ],
      "gender": "男",
      "role": "彼拉多的密探 / 秘密差役",
      "firstPage": 96,
      "appearances": [96, 130, 164, 198, 232, 266, 300],
      "locations": [
        {"place":"希律大王宫","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":112,"toPage":126,"note":"听彼拉多密令"},
        {"place":"下城","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":126,"toPage":269,"note":"在下城布设眼线"},
        {"place":"秃山","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":269,"toPage":300,"note":"执行暗杀犹大的任务"}
      ],
      "factions": [
        {"name":"罗马驻军","group":"罗马政权","fromPage":112,"toPage":300,"note":"彼拉多的秘密差役"}
      ],
      "groups": ["耶路撒冷线"],
      "experiences": [
        {"title":"受命行事","fromPage":112,"toPage":126,"description":"受彼拉多密令，处理不能公开的勾当。"},
        {"title":"暗杀犹大","fromPage":269,"toPage":300,"description":"以见该亚法为名把犹大诱出，在秃山附近将其刺死。"},
        {"title":"复命","fromPage":300,"toPage":300,"description":"回禀彼拉多：事已办妥，钱袋也已归还大祭司。"}
      ],
      "ending": "完成暗杀犹大的差事后回禀彼拉多",
      "endingPage": 300,
      "note": ""
    },
    {
      "id": "ds-behemot",
      "primaryName": "别格莫特",
      "names": [
        {"text":"黑猫","type":"别名","note":"巨大的黑色公猫"},
        {"text":"恶魔随从","type":"身份","note":"沃兰德最招摇的随从"},
        {"text":"别格莫特","type":"别名","note":"旧译本亦作「河马」"}
      ],
      "gender": "男",
      "role": "沃兰德的随从 / 巨大的黑猫",
      "firstPage": 40,
      "appearances": [40, 112, 183, 255, 327, 398, 470],
      "locations": [
        {"place":"牧首塘","city":"莫斯科","country":"苏联","fromPage":60,"toPage":90,"note":"追随沃兰德现身莫斯科"},
        {"place":"斯摩棱斯克市场","city":"莫斯科","country":"苏联","fromPage":90,"toPage":120,"note":"在市场与公寓一带制造混乱"},
        {"place":"格里鲍耶陀夫之家","city":"莫斯科","country":"苏联","fromPage":90,"toPage":140,"note":"大闹作协餐厅"},
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":150,"toPage":232,"note":"魔术表演与混乱的制造者"},
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":345,"toPage":360,"note":"与卡罗维耶夫一起「收尾」"},
        {"place":"魔鬼的舞会大厅","city":"永恒之地","country":"永恒之地","fromPage":300,"toPage":340,"note":"舞会上的侍从"}
      ],
      "factions": [
        {"name":"魔王一行","group":"超自然","fromPage":60,"toPage":470,"note":"以黑猫形象示人，实则恶魔"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"进入莫斯科","fromPage":60,"toPage":90,"description":"在牧首塘之后现身，以巨猫形象追随沃兰德行走莫斯科。"},
        {"title":"大闹格里鲍耶陀夫之家","fromPage":90,"toPage":140,"description":"在作协餐厅纵火闹事，把文学界的体面撕得粉碎。"},
        {"title":"剧院魔术与恶作剧","fromPage":150,"toPage":300,"description":"在瓦列特剧院参与黑魔法表演，又去骚扰斯乔帕与瓦列努哈。"},
        {"title":"随沃兰德离去","fromPage":400,"toPage":470,"description":"在麻雀山现出恶魔本相，随沃兰德一行离开莫斯科。"}
      ],
      "ending": "现出恶魔本相，随沃兰德离开莫斯科返回永恒之地",
      "endingPage": 470,
      "note": ""
    },
    {
      "id": "ds-koroviev",
      "primaryName": "卡罗维耶夫",
      "names": [
        {"text":"法戈特","type":"别名","note":"自称合唱指挥"},
        {"text":"科罗维约夫","type":"别名","note":"旧译本译名"},
        {"text":"格子西装","type":"绰号","note":"穿格子西装的随从"},
        {"text":"戴单片眼镜者","type":"绰号","note":"衣冠楚楚的随从"}
      ],
      "gender": "男",
      "role": "沃兰德的随从 / 合唱指挥法戈特",
      "firstPage": 32,
      "appearances": [32, 105, 178, 251, 324, 397, 470],
      "locations": [
        {"place":"格里鲍耶陀夫之家","city":"莫斯科","country":"苏联","fromPage":80,"toPage":140,"note":"随沃兰德出现在作协门口"},
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":150,"toPage":232,"note":"主持黑魔法表演"},
        {"place":"斯乔帕的公寓","city":"莫斯科","country":"苏联","fromPage":130,"toPage":200,"note":"把斯乔帕扔到雅尔塔"},
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":345,"toPage":360,"note":"与别格莫特火烧剧院收尾"},
        {"place":"麻雀山","city":"莫斯科","country":"苏联","fromPage":400,"toPage":440,"note":"告别莫斯科"}
      ],
      "factions": [
        {"name":"魔王一行","group":"超自然","fromPage":80,"toPage":470,"note":"身穿格子西装的恶魔随从"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"诱骗斯乔帕·利霍杰耶夫","fromPage":130,"toPage":200,"description":"谎称有签约事宜，把剧院院长斯乔帕送到雅尔塔，再与别格莫特占据其公寓。"},
        {"title":"主持黑魔法表演","fromPage":150,"toPage":232,"description":"在瓦列特剧院撒钞票、开时装店，让莫斯科观众自取其辱。"},
        {"title":"戏弄里姆斯基与瓦列努哈","fromPage":232,"toPage":300,"description":"以幻象与恐吓追击剧院经理与总务，逼得里姆斯基连夜逃往列宁格勒。"},
        {"title":"火烧剧院与告别","fromPage":345,"toPage":470,"description":"与别格莫特一起纵火，随后在麻雀山归于随从本相，随沃兰德离去。"}
      ],
      "ending": "随沃兰德离开莫斯科，回归永恒之地",
      "endingPage": 470,
      "note": ""
    },
    {
      "id": "ds-judas",
      "primaryName": "犹大",
      "names": [
        {"text":"出卖者","type":"身份","note":"出卖耶舒阿的人"},
        {"text":"犹大·伊斯卡里奥特","type":"别名","note":"旧译名"},
        {"text":"犹大","type":"名字","note":""}
      ],
      "gender": "男",
      "role": "出卖耶舒阿的人",
      "firstPage": 136,
      "appearances": [136, 154, 171, 189, 207, 224, 242],
      "locations": [
        {"place":"下城","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":140,"toPage":140,"note":"在下城与耶舒阿交往"},
        {"place":"客西马尼","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":140,"toPage":242,"note":"领人前来抓捕耶舒阿"},
        {"place":"秃山","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":242,"toPage":242,"note":"被阿弗拉尼诱出并暗杀"}
      ],
      "factions": [
        {"name":"犹太教祭司","group":"耶路撒冷","fromPage":140,"toPage":242,"note":"为该亚法一党所用"}
      ],
      "groups": ["耶路撒冷线"],
      "experiences": [
        {"title":"贪财出卖","fromPage":140,"toPage":140,"description":"为了三十枚银币向祭司长告发耶舒阿的行踪。"},
        {"title":"引领抓捕","fromPage":140,"toPage":242,"description":"在客西马尼领人来抓捕，把导师交到审判者手中。"},
        {"title":"被暗杀","fromPage":242,"toPage":242,"description":"在秃山附近被阿弗拉尼以见该亚法为名诱出，当场被匕首刺死。"}
      ],
      "ending": "被阿弗拉尼奉彼拉多之命暗杀于秃山",
      "endingPage": 242,
      "note": ""
    },
    {
      "id": "ds-levi",
      "primaryName": "利未·马太",
      "names": [
        {"text":"税吏","type":"旧职","note":"原是征税的人"},
        {"text":"门徒","type":"身份","note":"耶舒阿唯一的门徒"},
        {"text":"利未·马太","type":"本名","note":""}
      ],
      "gender": "男",
      "role": "税吏 / 耶舒阿的门徒",
      "firstPage": 128,
      "appearances": [128, 187, 245, 304, 363, 421, 480],
      "locations": [
        {"place":"下城","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":128,"toPage":176,"note":"在耶路撒冷下城跟随耶舒阿"},
        {"place":"各各他","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":263,"toPage":300,"note":"目睹受难"},
        {"place":"秃山","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":349,"toPage":402,"note":"在山间传递消息"},
        {"place":"月光之路","city":"永恒之地","country":"永恒之地","fromPage":440,"toPage":480,"note":"与彼拉多同行"}
      ],
      "factions": [
        {"name":"耶舒阿门徒","group":"耶路撒冷","fromPage":128,"toPage":480,"note":"耶舒阿唯一的门徒"}
      ],
      "groups": ["耶路撒冷线", "连接者"],
      "experiences": [
        {"title":"弃税从师","fromPage":128,"toPage":176,"description":"扔掉钱袋跟随耶舒阿，把他的话记在羊皮纸上。"},
        {"title":"各各他的目睹者","fromPage":263,"toPage":300,"description":"在暗处看着导师死去，想把彼拉多也一并咒杀。"},
        {"title":"向沃兰德请求","fromPage":402,"toPage":440,"description":"为彼拉多求情，请求让那苦守两千年的人得到宽恕。"},
        {"title":"月光之路","fromPage":440,"toPage":480,"description":"随彼拉多走上月光之路，与耶舒阿同行。"}
      ],
      "ending": "走上月光之路，与彼拉多、耶舒阿同行",
      "endingPage": 480,
      "note": ""
    },
    {
      "id": "ds-azazelo",
      "primaryName": "阿扎泽洛",
      "names": [
        {"text":"独眼的","type":"绰号","note":"左眼失明"},
        {"text":"带刀的","type":"绰号","note":"腰间插着手枪与刀"},
        {"text":"阿扎泽洛","type":"别名","note":"沙漠恶魔"}
      ],
      "gender": "男",
      "role": "沃兰德的随从 / 执行死亡的恶魔",
      "firstPage": 120,
      "appearances": [120, 178, 237, 295, 353, 412, 470],
      "locations": [
        {"place":"莫斯科河","city":"莫斯科","country":"苏联","fromPage":132,"toPage":160,"note":"在莫斯科街头执行沃兰德的差事"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":232,"toPage":300,"note":"为玛格丽特送去魔法油膏"},
        {"place":"魔鬼的舞会大厅","city":"永恒之地","country":"永恒之地","fromPage":300,"toPage":340,"note":"舞会上接待亡灵来宾"},
        {"place":"麻雀山","city":"莫斯科","country":"苏联","fromPage":400,"toPage":445,"note":"随沃兰德告别莫斯科"}
      ],
      "factions": [
        {"name":"魔王一行","group":"超自然","fromPage":132,"toPage":470,"note":"负责暴力与死亡事务"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"为玛格丽特送去油膏","fromPage":232,"toPage":300,"description":"奉沃兰德之命把魔法油膏交给玛格丽特，使她得以飞天。"},
        {"title":"在舞会上接待来宾","fromPage":300,"toPage":340,"description":"在撒旦的舞会大厅里向玛格丽特引见一个个亡灵客人。"},
        {"title":"枪杀男爵迈格尔","fromPage":345,"toPage":364,"description":"在舞会之后按裁决处死告密者男爵迈格尔。"},
        {"title":"随沃兰德离去","fromPage":400,"toPage":470,"description":"在麻雀山与沃兰德一行会合，离开莫斯科。"}
      ],
      "ending": "随沃兰德一行离开莫斯科，返回永恒之地",
      "endingPage": 470,
      "note": ""
    },
    {
      "id": "ds-sokov",
      "primaryName": "索科夫",
      "names": [
        {"text":"餐厅领班","type":"职务","note":"格里鲍耶陀夫之家餐厅领班"},
        {"text":"索科夫","type":"姓氏","note":""}
      ],
      "gender": "男",
      "role": "作协餐厅领班",
      "firstPage": 56,
      "appearances": [56, 117, 177, 238, 299, 359, 420],
      "locations": [
        {"place":"格里鲍耶陀夫之家","city":"莫斯科","country":"苏联","fromPage":136,"toPage":300,"note":"在作协餐厅当领班"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":300,"toPage":349,"note":"火灾后失业"}
      ],
      "factions": [
        {"name":"作协","group":"苏联机构","fromPage":136,"toPage":300,"note":"餐厅领班"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"招待作家","fromPage":136,"toPage":300,"description":"在餐厅里迎来送往，看惯作家们的排场与虚荣。"},
        {"title":"火灾与失业","fromPage":300,"toPage":349,"description":"别格莫特纵火后作协餐厅关闭，他失去工作。"}
      ],
      "ending": "作协餐厅关闭后失业",
      "endingPage": 420,
      "note": ""
    },
    {
      "id": "ds-varenukha",
      "primaryName": "瓦列努哈",
      "names": [
        {"text":"剧院总务","type":"职务","note":"瓦列特剧院总务"},
        {"text":"安德烈·福卡之误认","type":"误认","note":"被误认成安德烈·福卡"},
        {"text":"吸血鬼","type":"身份","note":"一度被变成吸血鬼"},
        {"text":"瓦列努哈","type":"姓氏","note":""}
      ],
      "gender": "男",
      "role": "瓦列特剧院总务",
      "firstPage": 104,
      "appearances": [104, 162, 219, 277, 335, 392, 450],
      "locations": [
        {"place":"格里鲍耶陀夫之家","city":"莫斯科","country":"苏联","fromPage":116,"toPage":140,"note":"把柏辽兹的消息带到作协"},
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":153,"toPage":269,"note":"处理演出事务，随后被卷入怪事"},
        {"place":"精神病院","city":"莫斯科","country":"苏联","fromPage":349,"toPage":420,"note":"被送进精神病院"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":420,"toPage":450,"note":"出院后仍在莫斯科"}
      ],
      "factions": [
        {"name":"瓦列特剧院","group":"苏联机构","fromPage":116,"toPage":269,"note":"总务"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"传递柏辽兹的死讯","fromPage":116,"toPage":140,"description":"在作协与剧院之间奔走，为柏辽兹之死与伊万的发狂作证。"},
        {"title":"被变成吸血鬼","fromPage":232,"toPage":269,"description":"被赫勒与卡罗维耶夫戏弄，一度变成吸血鬼为他们引路。"},
        {"title":"入院与出院","fromPage":349,"toPage":450,"description":"被送进精神病院，出院后成了旁人口中的笑谈。"}
      ],
      "ending": "被送进精神病院，出院后留在莫斯科",
      "endingPage": 450,
      "note": ""
    },
    {
      "id": "ds-stravinsky",
      "primaryName": "斯特拉文斯基",
      "names": [
        {"text":"精神病院医生","type":"职务","note":"河边精神病院的主治医生"},
        {"text":"教授","type":"头衔","note":"病院里的教授"},
        {"text":"斯特拉文斯基","type":"姓氏","note":""}
      ],
      "gender": "男",
      "role": "精神病院医生",
      "firstPage": 168,
      "appearances": [168, 210, 252, 294, 336, 378, 420],
      "locations": [
        {"place":"精神病院","city":"莫斯科","country":"苏联","fromPage":171,"toPage":420,"note":"河边的那座精神病院"}
      ],
      "factions": [
        {"name":"精神病院","group":"苏联机构","fromPage":171,"toPage":420,"note":"主治医生"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"接诊伊万·无家汉","fromPage":171,"toPage":232,"description":"倾听伊万关于沃兰德与彼拉多的叙述，冷静地判断为精神失常。"},
        {"title":"治疗大师","fromPage":269,"toPage":398,"description":"收治大师，试图用安静与药物让他恢复。"},
        {"title":"放走病人","fromPage":420,"toPage":420,"description":"在沃兰德一行的干预下，大师与伊万相继离开病院。"}
      ],
      "ending": "继续在精神病院行医，病人却莫名少了两个",
      "endingPage": 420,
      "note": ""
    },
    {
      "id": "ds-bunyrev",
      "primaryName": "波内列夫",
      "names": [
        {"text":"作协餐厅管理员","type":"职务","note":"格里鲍耶陀夫之家餐厅管理员"},
        {"text":"波内列夫","type":"姓氏","note":""}
      ],
      "gender": "男",
      "role": "作协餐厅管理员",
      "firstPage": 48,
      "appearances": [48, 110, 172, 234, 296, 358, 420],
      "locations": [
        {"place":"格里鲍耶陀夫之家","city":"莫斯科","country":"苏联","fromPage":186,"toPage":300,"note":"管理作协餐厅"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":300,"toPage":420,"note":"作协没落后另谋生路"}
      ],
      "factions": [
        {"name":"作协","group":"苏联机构","fromPage":186,"toPage":300,"note":"餐厅管理员"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"餐厅管事","fromPage":186,"toPage":300,"description":"在格里鲍耶陀夫之家掌管餐厅，见证作家们的吃喝与争吵。"},
        {"title":"火灾之后","fromPage":300,"toPage":349,"description":"作协建筑被烧，他为账目与救济四处奔走。"},
        {"title":"另谋生路","fromPage":349,"toPage":420,"description":"作协衰落，他调去别处继续做餐厅生意。"}
      ],
      "ending": "离开作协餐厅，另谋生路",
      "endingPage": 420,
      "note": ""
    },
    {
      "id": "ds-rimsky",
      "primaryName": "里姆斯基",
      "names": [
        {"text":"剧院经理","type":"职务","note":"瓦列特剧院的经理"},
        {"text":"里姆斯基","type":"姓氏","note":""}
      ],
      "gender": "男",
      "role": "瓦列特剧院经理",
      "firstPage": 112,
      "appearances": [112, 163, 215, 266, 317, 369, 420],
      "locations": [
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":198,"toPage":232,"note":"安排黑魔法表演"},
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":232,"toPage":269,"note":"深夜遭遇幻象与吸血鬼"},
        {"place":"列宁格勒","city":"列宁格勒","country":"苏联","fromPage":269,"toPage":402,"note":"逃往列宁格勒"}
      ],
      "factions": [
        {"name":"瓦列特剧院","group":"苏联机构","fromPage":198,"toPage":269,"note":"经理"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"安排黑魔法表演","fromPage":198,"toPage":232,"description":"与斯乔帕一起请来沃兰德一行演出，事后追查包厢里的怪事。"},
        {"title":"夜遇幻象","fromPage":232,"toPage":269,"description":"在空荡的剧院里遭遇赫勒与卡罗维耶夫的恐吓，白发骤生。"},
        {"title":"逃往列宁格勒","fromPage":269,"toPage":402,"description":"连夜乘火车逃离莫斯科，到列宁格勒避难。"}
      ],
      "ending": "逃往列宁格勒，从此不再回莫斯科",
      "endingPage": 420,
      "note": ""
    },
    {
      "id": "ds-likhodeyev",
      "primaryName": "斯乔帕·利霍杰耶夫",
      "names": [
        {"text":"斯乔帕","type":"昵称","note":""},
        {"text":"利霍杰耶夫","type":"姓氏","note":""},
        {"text":"剧院院长","type":"职务","note":"瓦列特剧院院长"}
      ],
      "gender": "男",
      "role": "瓦列特剧院院长",
      "firstPage": 132,
      "appearances": [132, 180, 228, 276, 324, 372, 420],
      "locations": [
        {"place":"斯乔帕的公寓","city":"莫斯科","country":"苏联","fromPage":134,"toPage":200,"note":"被沃兰德一行赶出家门"},
        {"place":"雅尔塔","city":"雅尔塔","country":"苏联","fromPage":200,"toPage":255,"note":"莫名其妙被扔到雅尔塔"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":349,"toPage":420,"note":"回到莫斯科后仍惊魂未定"}
      ],
      "factions": [
        {"name":"瓦列特剧院","group":"苏联机构","fromPage":134,"toPage":255,"note":"院长"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"被赶出自家公寓","fromPage":134,"toPage":200,"description":"卡罗维耶夫与别格莫特占据他的公寓，把他扔到千里之外的雅尔塔。"},
        {"title":"雅尔塔惊魂","fromPage":200,"toPage":255,"description":"在雅尔塔发电报回莫斯科，没人相信他真的在那里。"},
        {"title":"返回莫斯科","fromPage":349,"toPage":420,"description":"回到莫斯科，发现自己的职位与公寓都已不属于自己。"}
      ],
      "ending": "回到莫斯科，失去院长职位，成了旁人谈资",
      "endingPage": 420,
      "note": ""
    },
    {
      "id": "ds-poplavsky",
      "primaryName": "谢苗·谢苗诺维奇",
      "names": [
        {"text":"柏辽兹的姑父","type":"亲属","note":"从基辅赶来"},
        {"text":"谢苗·谢苗诺维奇","type":"本名","note":""},
        {"text":"房子追逐者","type":"身份","note":"为继承房子而来"}
      ],
      "gender": "男",
      "role": "柏辽兹的姑父 / 为房子而来",
      "firstPage": 144,
      "appearances": [144, 192, 239, 287, 335, 382, 430],
      "locations": [
        {"place":"格里鲍耶陀夫之家","city":"莫斯科","country":"苏联","fromPage":162,"toPage":200,"note":"为柏辽兹的房子而来"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":200,"toPage":232,"note":"在莫斯科四处奔走要房子"},
        {"place":"雅尔塔","city":"雅尔塔","country":"苏联","fromPage":232,"toPage":430,"note":"被送到雅尔塔"}
      ],
      "factions": [
        {"name":"莫斯科文学界","group":"苏联机构","fromPage":162,"toPage":200,"note":"以柏辽兹亲属身份出入作协"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"为房子而来","fromPage":162,"toPage":200,"description":"柏辽兹一死便从基辅赶来，惦记着死者的住房。"},
        {"title":"被打发走","fromPage":200,"toPage":232,"description":"被沃兰德一行戏弄，行李里莫名多出一只猫。"},
        {"title":"前往雅尔塔","fromPage":229,"toPage":430,"description":"最终被送到雅尔塔，房子自然没有拿到。"}
      ],
      "ending": "被送到雅尔塔，房子未能得手",
      "endingPage": 430,
      "note": ""
    },
    {
      "id": "ds-rakhinsky",
      "primaryName": "拉铜斯基",
      "names": [
        {"text":"剧院财务","type":"职务","note":"瓦列特剧院财务协理"},
        {"text":"拉铜斯基","type":"姓氏","note":""}
      ],
      "gender": "男",
      "role": "瓦列特剧院财务协理",
      "firstPage": 208,
      "appearances": [208, 243, 279, 314, 349, 385, 420],
      "locations": [
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":250,"toPage":302,"note":"魔术表演后结算票房"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":302,"toPage":402,"note":"被假钞弄得焦头烂额"}
      ],
      "factions": [
        {"name":"瓦列特剧院","group":"苏联机构","fromPage":250,"toPage":302,"note":"财务协理"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"结算票房","fromPage":250,"toPage":302,"description":"黑魔法表演后清点票房，发现满箱钞票变成了外币与废纸。"},
        {"title":"追查假钞","fromPage":302,"toPage":349,"description":"为魔术表演撒下的卢布四处奔走，被上级盘问。"},
        {"title":"余波","fromPage":349,"toPage":402,"description":"事件之后仍在剧院任职，却再不敢谈起那晚的表演。"}
      ],
      "ending": "留在剧院继续做财务，绝口不提那场演出",
      "endingPage": 420,
      "note": ""
    },
    {
      "id": "ds-master",
      "primaryName": "大师",
      "names": [
        {"text":"无名作家","type":"身份","note":"不愿留名的作家"},
        {"text":"小说作者","type":"身份","note":"写下彼拉多故事的人"},
        {"text":"编号 118 号病人","type":"编号","note":"精神病院住院号"}
      ],
      "gender": "男",
      "role": "作家 / 彼拉多小说的作者",
      "firstPage": 180,
      "appearances": [180, 227, 273, 320, 367, 413, 460],
      "locations": [
        {"place":"精神病院","city":"莫斯科","country":"苏联","fromPage":180,"toPage":269,"note":"伊万在病院中遇见并读到的作家"},
        {"place":"大师的地下室","city":"莫斯科","country":"苏联","fromPage":186,"toPage":249,"note":"阿尔巴特街小院里的两间地下室"},
        {"place":"精神病院","city":"莫斯科","country":"苏联","fromPage":269,"toPage":349,"note":"被阿洛伊西告密后再度入院"},
        {"place":"永恒之地","city":"永恒之地","country":"永恒之地","fromPage":420,"toPage":460,"note":"与玛格丽特同赴永恒安宁"}
      ],
      "factions": [
        {"name":"大师与玛格丽特","group":"主角","fromPage":180,"toPage":460,"note":"小说的写作者与被拯救者"}
      ],
      "groups": ["莫斯科线", "连接者"],
      "experiences": [
        {"title":"写下彼拉多的小说","fromPage":180,"toPage":186,"description":"凭灵感写出本丢·彼拉多与耶舒阿的故事，成为连接两条时空线的枢纽。"},
        {"title":"遭批判与焚稿","fromPage":186,"toPage":232,"description":"小说无法发表，评论界口诛笔伐，大师在绝望中烧毁手稿。"},
        {"title":"与玛格丽特相爱","fromPage":186,"toPage":269,"description":"在阿尔巴特街的地下室里与玛格丽特相遇相守，直到被诬告入狱。"},
        {"title":"获得安宁","fromPage":420,"toPage":460,"description":"由沃兰德从病院与疯癫中救出，得到「安宁」而非「光明」，与玛格丽特同赴永恒。"}
      ],
      "ending": "获赐安宁而非光明，与玛格丽特同赴永恒之地",
      "endingPage": 460,
      "note": "手稿「从来不会烧尽」，后由沃兰德交还"
    },
    {
      "id": "ds-margarita",
      "primaryName": "玛格丽特",
      "names": [
        {"text":"玛戈","type":"昵称","note":""},
        {"text":"女王的侍女","type":"身份","note":"撒旦舞会上的女王"},
        {"text":"黑眼女郎","type":"绰号","note":"初见大师时的外貌描写"},
        {"text":"玛格丽特·尼古拉耶夫娜","type":"本名","note":""}
      ],
      "gender": "女",
      "role": "大师的恋人 / 撒旦舞会的女王",
      "firstPage": 300,
      "appearances": [300, 327, 353, 380, 407, 433, 460],
      "locations": [
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":300,"toPage":300,"note":"在莫斯科街头与大师擦肩而过"},
        {"place":"大师的地下室","city":"莫斯科","country":"苏联","fromPage":300,"toPage":300,"note":"与大师相守，也在壁炉里烧掉手稿"},
        {"place":"魔鬼的舞会大厅","city":"永恒之地","country":"永恒之地","fromPage":300,"toPage":340,"note":"作为女王主持撒旦的舞会"},
        {"place":"永恒之地","city":"永恒之地","country":"永恒之地","fromPage":420,"toPage":460,"note":"与大师同赴永恒安宁"}
      ],
      "factions": [
        {"name":"大师与玛格丽特","group":"主角","fromPage":300,"toPage":460,"note":"为爱人向魔王求助的女性"},
        {"name":"魔王一行","group":"超自然","fromPage":300,"toPage":340,"note":"舞会期间以女王身份统摄亡灵宾客"}
      ],
      "groups": ["莫斯科线", "连接者"],
      "experiences": [
        {"title":"与大师相遇相爱","fromPage":300,"toPage":300,"description":"在莫斯科街头与大师一见钟情，宁可放弃优渥生活也要守在地下室里。"},
        {"title":"焚稿与等待","fromPage":300,"toPage":300,"description":"大师失踪后烧掉手稿，在悔恨与思念中等待与爱人重逢。"},
        {"title":"涂抹油膏飞天","fromPage":300,"toPage":300,"description":"用阿扎泽洛送来的油膏变成女巫，飞越莫斯科去往沃兰德处。"},
        {"title":"撒旦舞会与安宁","fromPage":300,"toPage":460,"description":"主持撒旦的舞会，为弗雷达求情，最终带大师同赴永恒安宁。"}
      ],
      "ending": "与大师一同获得永恒安宁，离开莫斯科",
      "endingPage": 460,
      "note": ""
    },
    {
      "id": "ds-aloisy",
      "primaryName": "阿洛伊西·莫加雷奇",
      "names": [
        {"text":"告密者","type":"身份","note":"为房子与私利告发大师"},
        {"text":"莫加雷奇","type":"姓氏","note":""},
        {"text":"阿洛伊西","type":"名字","note":""}
      ],
      "gender": "男",
      "role": "告密者 / 占据大师地下室的人",
      "firstPage": 270,
      "appearances": [270, 300, 330, 360, 390, 420, 450],
      "locations": [
        {"place":"大师的地下室","city":"莫斯科","country":"苏联","fromPage":295,"toPage":310,"note":"告密后搬进大师的地下室"},
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":349,"toPage":420,"note":"凭告密在剧院谋得职位"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":420,"toPage":440,"note":"遭到报应"}
      ],
      "factions": [
        {"name":"瓦列特剧院","group":"苏联机构","fromPage":295,"toPage":440,"note":"靠告密钻营"},
        {"name":"莫斯科文学界","group":"苏联机构","fromPage":295,"toPage":420,"note":"以批评家面目出现"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"告发大师","fromPage":295,"toPage":310,"description":"向当局告发大师私藏反动小说，导致大师被捕入狱。"},
        {"title":"占据地下室","fromPage":310,"toPage":349,"description":"大师失踪后搬进阿尔巴特街的地下室，还去剧院谋了职位。"},
        {"title":"遭到报应","fromPage":420,"toPage":440,"description":"被沃兰德一行惩罚，变成只会呱呱叫的动物，身败名裂。"}
      ],
      "ending": "被变成只会聒噪的动物（按原著报应），身败名裂",
      "endingPage": 450,
      "note": ""
    },
    {
      "id": "ds-meigel",
      "primaryName": "男爵迈格尔",
      "names": [
        {"text":"男爵","type":"头衔","note":""},
        {"text":"告密者","type":"身份","note":"以告密为业"},
        {"text":"迈格尔","type":"姓氏","note":""}
      ],
      "gender": "男",
      "role": "男爵 / 告密者",
      "firstPage": 350,
      "appearances": [350, 356, 362, 368, 373, 379, 385],
      "locations": [
        {"place":"魔鬼的舞会大厅","city":"永恒之地","country":"永恒之地","fromPage":370,"toPage":383,"note":"被邀请参加舞会"}
      ],
      "factions": [
        {"name":"莫斯科文学界","group":"苏联机构","fromPage":370,"toPage":383,"note":"以告密与钻营混迹文学界"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"混入舞会","fromPage":370,"toPage":373,"description":"以男爵身份被引见给玛格丽特，实则靠告密谋生。"},
        {"title":"被枪杀","fromPage":373,"toPage":383,"description":"在舞会上被阿扎泽洛一枪打死，为告密者的行径付出代价。"}
      ],
      "ending": "在撒旦的舞会上被阿扎泽洛枪杀",
      "endingPage": 385,
      "note": ""
    },
    {
      "id": "ds-frida",
      "primaryName": "弗雷达",
      "names": [
        {"text":"罪人","type":"身份","note":"被沃兰德从惩罚中解救的亡灵"},
        {"text":"弗雷达","type":"名字","note":""}
      ],
      "gender": "女",
      "role": "被沃兰德解救的罪人",
      "firstPage": 330,
      "appearances": [330, 340, 350, 360, 370, 380, 390],
      "locations": [
        {"place":"魔鬼的舞会大厅","city":"永恒之地","country":"永恒之地","fromPage":365,"toPage":390,"note":"舞会上出现的亡灵客人"}
      ],
      "factions": [
        {"name":"魔王一行","group":"超自然","fromPage":365,"toPage":390,"note":"受沃兰德裁决的亡灵"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"舞会上的亡灵","fromPage":365,"toPage":365,"description":"向玛格丽特献上第一支舞，讲述自己掐死婴儿的罪。"},
        {"title":"获得宽免","fromPage":365,"toPage":390,"description":"玛格丽特为她求情，沃兰德下令不再把她的手帕递到她面前。"}
      ],
      "ending": "被沃兰德宽免，不再承受每日的折磨",
      "endingPage": 390,
      "note": ""
    },
    {
      "id": "ds-natasha",
      "primaryName": "娜塔莎",
      "names": [
        {"text":"女佣","type":"身份","note":"玛格丽特家的女佣"},
        {"text":"女巫","type":"身份","note":"涂抹油膏后变成女巫"},
        {"text":"娜塔莎","type":"名字","note":""}
      ],
      "gender": "女",
      "role": "玛格丽特的女佣 / 变成女巫",
      "firstPage": 286,
      "appearances": [286, 317, 347, 378, 409, 439, 470],
      "locations": [
        {"place":"玛格丽特的宅子","city":"莫斯科","country":"苏联","fromPage":300,"toPage":300,"note":"在玛格丽特家中帮佣"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":300,"toPage":300,"note":"骑着尼古拉飞行"},
        {"place":"魔鬼的舞会大厅","city":"永恒之地","country":"永恒之地","fromPage":300,"toPage":340,"note":"以女巫身份参与舞会"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":340,"toPage":470,"note":"留在莫斯科，身份已变"}
      ],
      "factions": [
        {"name":"魔王一行","group":"超自然","fromPage":300,"toPage":420,"note":"涂抹油膏后成为女巫"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"好奇涂抹油膏","fromPage":300,"toPage":300,"description":"偷用玛格丽特的魔法油膏，一夜之间变成年轻的女巫。"},
        {"title":"骑尼古拉飞行","fromPage":300,"toPage":300,"description":"骑着变成猪的邻居尼古拉·伊万诺维奇飞越莫斯科。"},
        {"title":"舞会之后","fromPage":300,"toPage":470,"description":"在舞会上现身，之后留在莫斯科，再也不是从前的女佣。"}
      ],
      "ending": "变成女巫后留在莫斯科，不再是从前的女佣",
      "endingPage": 470,
      "note": ""
    },
    {
      "id": "ds-hella",
      "primaryName": "赫勒",
      "names": [
        {"text":"红发女妖","type":"绰号","note":"红头发、绿眼睛的女妖"},
        {"text":"沃兰德的侍女","type":"身份","note":""},
        {"text":"赫勒","type":"别名","note":"旧译本亦作「格勒」"}
      ],
      "gender": "女",
      "role": "沃兰德的侍女 / 吸血鬼女妖",
      "firstPage": 140,
      "appearances": [140, 195, 250, 305, 360, 415, 470],
      "locations": [
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":156,"toPage":232,"note":"在魔术表演中协助沃兰德"},
        {"place":"大师的地下室","city":"莫斯科","country":"苏联","fromPage":232,"toPage":269,"note":"在公寓与地下室之间奔走传话"},
        {"place":"魔鬼的舞会大厅","city":"永恒之地","country":"永恒之地","fromPage":300,"toPage":340,"note":"舞会上为玛格丽特更衣侍奉"},
        {"place":"麻雀山","city":"莫斯科","country":"苏联","fromPage":400,"toPage":440,"note":"随沃兰德离去"}
      ],
      "factions": [
        {"name":"魔王一行","group":"超自然","fromPage":156,"toPage":470,"note":"沃兰德身边的女妖侍女"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"在瓦列特剧院侍奉沃兰德","fromPage":156,"toPage":232,"description":"在魔术表演中充当沃兰德的助手，接待观众与演员。"},
        {"title":"为舞会布置一切","fromPage":289,"toPage":340,"description":"在舞会大厅里为玛格丽特更衣、引路，操持撒旦的舞会。"},
        {"title":"随沃兰德离去","fromPage":400,"toPage":470,"description":"在麻雀山随沃兰德一行离开莫斯科。"}
      ],
      "ending": "随沃兰德一行离开莫斯科，返回永恒之地",
      "endingPage": 470,
      "note": ""
    },
    {
      "id": "ds-nikolai",
      "primaryName": "尼古拉·伊万诺维奇",
      "names": [
        {"text":"邻居","type":"身份","note":"玛格丽特楼上的邻居"},
        {"text":"猪","type":"形态","note":"被变成猪"},
        {"text":"尼古拉·伊万诺维奇","type":"本名","note":""}
      ],
      "gender": "男",
      "role": "玛格丽特的邻居 / 被变成猪",
      "firstPage": 310,
      "appearances": [310, 337, 363, 390, 417, 443, 470],
      "locations": [
        {"place":"玛格丽特的宅子","city":"莫斯科","country":"苏联","fromPage":320,"toPage":355,"note":"被娜塔莎抹上油膏"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":355,"toPage":360,"note":"以猪的形态飞行与徘徊"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":360,"toPage":470,"note":"回到家中，备受折磨"}
      ],
      "factions": [
        {"name":"魔王一行","group":"超自然","fromPage":320,"toPage":360,"note":"被卷入魔法的普通人"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"被涂上油膏","fromPage":320,"toPage":355,"description":"在自家门口被娜塔莎抹上魔法油膏，变成一头猪。"},
        {"title":"被骑乘飞行","fromPage":355,"toPage":360,"description":"作为坐骑被娜塔莎骑着飞过莫斯科夜空。"},
        {"title":"变形之后","fromPage":346,"toPage":470,"description":"请求玛格丽特替他说情，最终仍旧没能完全摆脱猪的痕迹。"}
      ],
      "ending": "被变成猪，虽获宽免却终生留下痕迹",
      "endingPage": 470,
      "note": ""
    },
    {
      "id": "ds-marfa",
      "primaryName": "玛尔法",
      "names": [
        {"text":"犹大的情人","type":"身份","note":"犹大在下城的情人"},
        {"text":"玛尔法","type":"名字","note":""}
      ],
      "gender": "女",
      "role": "犹大的情人",
      "firstPage": 220,
      "appearances": [220, 233, 247, 260, 273, 287, 300],
      "locations": [
        {"place":"下城","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":300,"toPage":300,"note":"在耶路撒冷下城的家中等候犹大"}
      ],
      "factions": [
        {"name":"犹太教祭司","group":"耶路撒冷","fromPage":300,"toPage":300,"note":"身处祭司集团盘踞的下城"}
      ],
      "groups": ["耶路撒冷线"],
      "experiences": [
        {"title":"在下城等候","fromPage":300,"toPage":300,"description":"犹大奉命去见该亚法之前，先到下城与她相会。"},
        {"title":"成了暗杀的诱饵","fromPage":300,"toPage":300,"description":"阿弗拉尼利用犹大对玛尔法的思念，把他诱出城门。"},
        {"title":"事后","fromPage":300,"toPage":300,"description":"犹大再未回来，她成了这场暗杀最沉默的见证者。"}
      ],
      "ending": "犹大被暗杀后再未等到他，独自留在下城",
      "endingPage": 300,
      "note": "次要人物"
    },
    {
      "id": "ds-kanavkin",
      "primaryName": "卡纳夫金",
      "names": [
        {"text":"卡纳夫金","type":"姓氏","note":"莫斯科文学界的边缘人物"},
        {"text":"业余作者","type":"身份","note":"作品无人问津"}
      ],
      "gender": "男",
      "role": "莫斯科文学界的边缘作者",
      "firstPage": 316,
      "appearances": [316, 335, 354, 373, 392, 411, 430],
      "locations": [
        {"place":"格里鲍耶陀夫之家","city":"莫斯科","country":"苏联","fromPage":354,"toPage":380,"note":"在作协一带等待发表机会"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":380,"toPage":430,"note":"作协没落后另寻门路"}
      ],
      "factions": [
        {"name":"莫斯科文学界","group":"苏联机构","fromPage":354,"toPage":430,"note":"边缘作者"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"在作协边缘徘徊","fromPage":354,"toPage":380,"description":"带着无人愿意读完的手稿出入格里鲍耶陀夫之家与作协餐厅。"},
        {"title":"见证魔术表演的余波","fromPage":380,"toPage":430,"description":"从旁看着剧院与作协因沃兰德一行的到来而天翻地覆。"}
      ],
      "ending": "作协没落后另寻门路，留在莫斯科",
      "endingPage": 430,
      "note": "次要人物"
    },
    {
      "id": "ds-nisa",
      "primaryName": "尼萨",
      "names": [
        {"text":"尼萨","type":"名字","note":"下城的女子"},
        {"text":"引诱者的同谋","type":"身份","note":"配合阿弗拉尼设局"}
      ],
      "gender": "女",
      "role": "下城的女子 / 暗杀布局中的一环",
      "firstPage": 214,
      "appearances": [214, 228, 243, 257, 271, 286, 300],
      "locations": [
        {"place":"下城","city":"耶路撒冷","country":"罗马帝国犹太行省","fromPage":300,"toPage":300,"note":"在下城的巷子里出没"}
      ],
      "factions": [
        {"name":"犹太教祭司","group":"耶路撒冷","fromPage":300,"toPage":300,"note":"被祭司集团一带的人利用"}
      ],
      "groups": ["耶路撒冷线"],
      "experiences": [
        {"title":"被卷入布局","fromPage":300,"toPage":300,"description":"阿弗拉尼的手下借她之口把犹大引向城外的僻静处。"},
        {"title":"事后沉默","fromPage":300,"toPage":300,"description":"暗杀之后无人追究，她在下城继续过着原来的日子。"}
      ],
      "ending": "暗杀之后无人追究，继续留在耶路撒冷下城",
      "endingPage": 300,
      "note": "次要人物"
    },
    {
      "id": "ds-andreifoka",
      "primaryName": "安德烈·福卡",
      "names": [
        {"text":"苍白的骑士","type":"绰号","note":"舞会上出现的骑士"},
        {"text":"里亚欣","type":"真名","note":"其实是诗人里亚欣"},
        {"text":"安德烈·福卡","type":"误认","note":"被瓦列努哈误认的名字"}
      ],
      "gender": "男",
      "role": "被误认者 / 其实是诗人里亚欣",
      "firstPage": 366,
      "appearances": [366, 380, 394, 408, 422, 436, 450],
      "locations": [
        {"place":"魔鬼的舞会大厅","city":"永恒之地","country":"永恒之地","fromPage":375,"toPage":402,"note":"以苍白的骑士形象现身"},
        {"place":"精神病院","city":"莫斯科","country":"苏联","fromPage":420,"toPage":440,"note":"与瓦列努哈在病院对质"}
      ],
      "factions": [
        {"name":"魔王一行","group":"超自然","fromPage":375,"toPage":420,"note":"舞会上现身的亡灵骑士"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"舞会上的苍白骑士","fromPage":375,"toPage":402,"description":"在撒旦的舞会上以骑士形象出现，被人误认作安德烈·福卡。"},
        {"title":"被误认的真相","fromPage":402,"toPage":420,"description":"瓦列努哈被变成吸血鬼时正是冒用了他的名字。"},
        {"title":"回到莫斯科","fromPage":420,"toPage":440,"description":"作为诗人里亚欣的身份被揭出，成为莫斯科怪事的一环。"}
      ],
      "ending": "被揭出其实是诗人里亚欣，回到莫斯科",
      "endingPage": 450,
      "note": ""
    },
    {
      "id": "ds-semyonov",
      "primaryName": "格里鲍耶陀夫之家看门人",
      "names": [
        {"text":"看门人","type":"职务","note":"格里鲍耶陀夫之家的看门人"},
        {"text":"谢苗诺夫","type":"姓氏","note":""}
      ],
      "gender": "男",
      "role": "格里鲍耶陀夫之家看门人",
      "firstPage": 400,
      "appearances": [400, 412, 423, 435, 447, 458, 470],
      "locations": [
        {"place":"格里鲍耶陀夫之家","city":"莫斯科","country":"苏联","fromPage":400,"toPage":430,"note":"作协大楼被烧前后的见证者"},
        {"place":"莫斯科","city":"莫斯科","country":"苏联","fromPage":430,"toPage":470,"note":"作协没落后仍守着旧楼"}
      ],
      "factions": [
        {"name":"作协","group":"苏联机构","fromPage":400,"toPage":430,"note":"看门人"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"守着作协大门","fromPage":400,"toPage":430,"description":"看着作家们进出与作协的排场，也看着沃兰德一行的怪事发生。"},
        {"title":"火烧之夜","fromPage":430,"toPage":460,"description":"别格莫特纵火那夜，他是最先逃出来的人之一。"},
        {"title":"余烬之后","fromPage":460,"toPage":470,"description":"作协没落，他仍旧守着旧楼的残址。"}
      ],
      "ending": "作协没落后仍守着格里鲍耶陀夫之家的残址",
      "endingPage": 470,
      "note": "次要人物"
    },
    {
      "id": "ds-lastochkin",
      "primaryName": "瓦西里·斯捷潘诺维奇·拉斯托奇金",
      "names": [
        {"text":"剧院会计","type":"职务","note":"瓦列特剧院会计"},
        {"text":"拉斯托奇金","type":"姓氏","note":""},
        {"text":"瓦西里·斯捷潘诺维奇","type":"本名","note":""}
      ],
      "gender": "男",
      "role": "瓦列特剧院会计 / 房管所主任",
      "firstPage": 420,
      "appearances": [420, 428, 437, 445, 453, 462, 470],
      "locations": [
        {"place":"瓦列特剧院","city":"莫斯科","country":"苏联","fromPage":420,"toPage":420,"note":"魔术表演与假钞事件的善后"},
        {"place":"房管所","city":"莫斯科","country":"苏联","fromPage":420,"toPage":470,"note":"被卷进沃兰德一行的怪事"}
      ],
      "factions": [
        {"name":"瓦列特剧院","group":"苏联机构","fromPage":420,"toPage":470,"note":"会计"}
      ],
      "groups": ["莫斯科线"],
      "experiences": [
        {"title":"剧院的善后账目","fromPage":420,"toPage":420,"description":"黑魔法表演之后清点票房与假钞，被上级反复盘问。"},
        {"title":"房管所的怪事","fromPage":420,"toPage":470,"description":"在房管所任职期间遭遇沃兰德一行的最后一批恶作剧。"}
      ],
      "ending": "留在莫斯科，继续在剧院与房管所之间谋生",
      "endingPage": 470,
      "note": "次要人物"
    }
  ],
  "relations": [
    {"id":"ds-r1","from":"ds-woland","to":"ds-behemot","type":"主仆 / 随从","category":"主仆","sincePage":40,"untilPage":null,"directed":true,"note":"黑猫随从，贯穿全书直到离开莫斯科"},
    {"id":"ds-r2","from":"ds-woland","to":"ds-koroviev","type":"主仆 / 随从","category":"主仆","sincePage":32,"untilPage":null,"directed":true,"note":"法戈特是沃兰德最得力的随从"},
    {"id":"ds-r3","from":"ds-woland","to":"ds-azazelo","type":"主仆 / 随从","category":"主仆","sincePage":120,"untilPage":null,"directed":true,"note":"执行暴力与死亡的随从"},
    {"id":"ds-r4","from":"ds-woland","to":"ds-hella","type":"主仆 / 侍女","category":"主仆","sincePage":140,"untilPage":null,"directed":true,"note":"红发女妖侍女，随沃兰德离去"},
    {"id":"ds-r5","from":"ds-woland","to":"ds-berlioz","type":"敌对 / 预言其死亡","category":"敌对","sincePage":16,"untilPage":150,"directed":true,"note":"牧首塘上的争论，预言当日应验；止于柏辽兹之死"},
    {"id":"ds-r6","from":"ds-woland","to":"ds-ivan","type":"敌对转为启蒙","category":"其他","sincePage":24,"untilPage":null,"directed":true,"note":"从牧首塘的冲突到病院中的开示，伊万终生难忘"},
    {"id":"ds-r7","from":"ds-woland","to":"ds-master","type":"拯救 / 同盟","category":"同盟","sincePage":180,"untilPage":460,"directed":true,"note":"在病院里由伊万牵起的相遇，从病院中救出大师并赐予安宁"},
    {"id":"ds-r8","from":"ds-woland","to":"ds-margarita","type":"恩主 / 授予女王身份","category":"主仆","sincePage":300,"untilPage":460,"directed":true,"note":"授予她撒旦舞会女王的身份，并满足她的愿望"},
    {"id":"ds-r9","from":"ds-master","to":"ds-margarita","type":"恋人","category":"情感","sincePage":300,"untilPage":460,"directed":false,"note":"全书核心情感线，延续到永恒安宁"},
    {"id":"ds-r10","from":"ds-margarita","to":"ds-natasha","type":"主仆","category":"主仆","sincePage":300,"untilPage":460,"directed":true,"note":"女佣涂抹油膏变成女巫后，主仆转为同类"},
    {"id":"ds-r11","from":"ds-master","to":"ds-ivan","type":"师友 / 见证者","category":"师友","sincePage":180,"untilPage":460,"directed":true,"note":"伊万在病院里遇见大师并读到手稿，是大师小说与命运的唯一见证者"},
    {"id":"ds-r12","from":"ds-berlioz","to":"ds-ivan","type":"上下级 / 同事","category":"师友","sincePage":24,"untilPage":150,"directed":true,"note":"作协主席与年轻诗人，止于柏辽兹之死"},
    {"id":"ds-r13","from":"ds-berlioz","to":"ds-rimsky","type":"上下级","category":"主仆","sincePage":112,"untilPage":150,"directed":true,"note":"两人同属作协与剧院系统；止于柏辽兹之死"},
    {"id":"ds-r14","from":"ds-berlioz","to":"ds-varenukha","type":"上下级","category":"主仆","sincePage":104,"untilPage":150,"directed":true,"note":"总务向作协主席汇报，止于柏辽兹之死"},
    {"id":"ds-r15","from":"ds-koroviev","to":"ds-varenukha","type":"敌对 / 恶作剧","category":"敌对","sincePage":104,"untilPage":450,"directed":true,"note":"把瓦列努哈变成吸血鬼当引路人"},
    {"id":"ds-r16","from":"ds-koroviev","to":"ds-rimsky","type":"敌对 / 恶作剧","category":"敌对","sincePage":112,"untilPage":420,"directed":true,"note":"以幻象追击里姆斯基，直到他逃往列宁格勒"},
    {"id":"ds-r17","from":"ds-azazelo","to":"ds-meigel","type":"敌对 / 枪杀","category":"敌对","sincePage":350,"untilPage":385,"directed":true,"note":"在舞会后一枪打死告密者男爵"},
    {"id":"ds-r18","from":"ds-aloisy","to":"ds-master","type":"敌对 / 告密","category":"敌对","sincePage":270,"untilPage":450,"directed":true,"note":"告密导致大师被捕，关系始终敌对"},
    {"id":"ds-r19","from":"ds-aloisy","to":"ds-bunyrev","type":"同事 / 利用","category":"其他","sincePage":270,"untilPage":420,"directed":true,"note":"凭告密在文学界与作协餐厅一带钻营"},
    {"id":"ds-r20","from":"ds-stravinsky","to":"ds-ivan","type":"医患 / 师友","category":"师友","sincePage":168,"untilPage":420,"directed":true,"note":"医生与病人，伊万出院后关系告一段落"},
    {"id":"ds-r21","from":"ds-stravinsky","to":"ds-master","type":"医患","category":"其他","sincePage":180,"untilPage":420,"directed":true,"note":"收治大师，直到大师被沃兰德带走"},
    {"id":"ds-r22","from":"ds-master","to":"ds-likhodeyev","type":"无关 / 同处一院","category":"其他","sincePage":180,"untilPage":420,"directed":false,"note":"情节上两人同处一院却几乎不相识，仅作情节关联"},
    {"id":"ds-r23","from":"ds-likhodeyev","to":"ds-rimsky","type":"上下级","category":"主仆","sincePage":132,"untilPage":420,"directed":true,"note":"院长与经理，斯乔帕失势后仍属同一剧院系统"},
    {"id":"ds-r24","from":"ds-rakhinsky","to":"ds-rimsky","type":"上下级","category":"主仆","sincePage":208,"untilPage":420,"directed":true,"note":"财务协理向经理负责，里姆斯基逃走后终止"},
    {"id":"ds-r25","from":"ds-rakhinsky","to":"ds-varenukha","type":"同事","category":"其他","sincePage":208,"untilPage":420,"directed":false,"note":"剧院财务与总务的日常往来"},
    {"id":"ds-r26","from":"ds-natasha","to":"ds-nikolai","type":"情感 / 骑乘飞行","category":"情感","sincePage":310,"untilPage":null,"directed":true,"note":"女巫骑着变成猪的邻居飞越莫斯科"},
    {"id":"ds-r27","from":"ds-andreifoka","to":"ds-varenukha","type":"被误认 / 敌对","category":"敌对","sincePage":366,"untilPage":450,"directed":true,"note":"瓦列努哈被变成吸血鬼时冒用了安德烈·福卡之名"},
    {"id":"ds-r28","from":"ds-andreifoka","to":"ds-master","type":"被误认 / 见证","category":"其他","sincePage":366,"untilPage":450,"directed":true,"note":"作为里亚欣见证大师小说的遭遇"},
    {"id":"ds-r29","from":"ds-behemot","to":"ds-likhodeyev","type":"敌对 / 恶作剧","category":"敌对","sincePage":132,"untilPage":420,"directed":true,"note":"两人的纠葛始于更早的公寓事件，把斯乔帕扔到雅尔塔"},
    {"id":"ds-r30","from":"ds-behemot","to":"ds-varenukha","type":"敌对 / 恶作剧","category":"敌对","sincePage":104,"untilPage":450,"directed":true,"note":"戏弄总务，与卡罗维耶夫一同闹到剧院收尾"},
    {"id":"ds-r31","from":"ds-hella","to":"ds-rimsky","type":"敌对 / 恐吓","category":"敌对","sincePage":140,"untilPage":420,"directed":true,"note":"深夜幻象中的女妖，逼得经理逃走"},
    {"id":"ds-r32","from":"ds-hella","to":"ds-margarita","type":"主仆 / 侍女","category":"主仆","sincePage":300,"untilPage":460,"directed":true,"note":"舞会上为玛格丽特更衣引路"},
    {"id":"ds-r33","from":"ds-frida","to":"ds-margarita","type":"受恩 / 求情","category":"其他","sincePage":330,"untilPage":390,"directed":true,"note":"玛格丽特在舞会上为弗雷达求情"},
    {"id":"ds-r34","from":"ds-poplavsky","to":"ds-berlioz","type":"亲属","category":"亲属","sincePage":144,"untilPage":150,"directed":true,"note":"姑父与侄儿的亲属关系；止于柏辽兹之死"},
    {"id":"ds-r35","from":"ds-pilate","to":"ds-yeshua","type":"审判者与被审判者 / 敌对转为终身悔恨","category":"敌对","sincePage":72,"untilPage":null,"directed":true,"note":"全书重点：从审判到两千年的悔恨，最终在月光之路重逢"},
    {"id":"ds-r36","from":"ds-pilate","to":"ds-levi","type":"敌对转为同盟","category":"同盟","sincePage":128,"untilPage":null,"directed":true,"note":"由仇视转为托付，利未·马太为他请求宽恕"},
    {"id":"ds-r37","from":"ds-pilate","to":"ds-afranius","type":"主仆 / 密探","category":"主仆","sincePage":96,"untilPage":300,"directed":true,"note":"秘密差役执行暗杀犹大等任务"},
    {"id":"ds-r38","from":"ds-pilate","to":"ds-caiaphas","type":"政敌 / 妥协","category":"敌对","sincePage":84,"untilPage":null,"directed":true,"note":"被迫让步于大祭司，政治上始终对立"},
    {"id":"ds-r39","from":"ds-pilate","to":"ds-master","type":"跨越千年的呼应 / 师友","category":"师友","sincePage":180,"untilPage":460,"directed":false,"note":"大师写出彼拉多的故事，最终由他说出「自由了」"},
    {"id":"ds-r48","from":"ds-pilate","to":"ds-judas","type":"下令处死","category":"敌对","sincePage":136,"untilPage":242,"directed":true,"note":"借阿弗拉尼之手除掉出卖者，止于犹大被杀"},
    {"id":"ds-r40","from":"ds-caiaphas","to":"ds-yeshua","type":"敌对 / 要求处死","category":"敌对","sincePage":84,"untilPage":null,"directed":true,"note":"以渎神罪要求处死耶舒阿，止于各各他"},
    {"id":"ds-r41","from":"ds-judas","to":"ds-yeshua","type":"背叛 / 敌对","category":"敌对","sincePage":136,"untilPage":242,"directed":true,"note":"出卖并引领抓捕，止于犹大被杀"},
    {"id":"ds-r42","from":"ds-levi","to":"ds-yeshua","type":"师徒 / 门徒","category":"师友","sincePage":128,"untilPage":null,"directed":true,"note":"唯一门徒，光明中仍与导师同行"},
    {"id":"ds-r43","from":"ds-levi","to":"ds-woland","type":"敌对 / 请求宽恕","category":"敌对","sincePage":128,"untilPage":null,"directed":true,"note":"为彼拉多向沃兰德求情，敌意中带着托付"},
    {"id":"ds-r44","from":"ds-afranius","to":"ds-judas","type":"敌对 / 执行暗杀","category":"敌对","sincePage":136,"untilPage":242,"directed":true,"note":"以该亚法之名诱出犹大并刺死他"},
    {"id":"ds-r45","from":"ds-ivan","to":"ds-varenukha","type":"同事 / 冲突","category":"其他","sincePage":104,"untilPage":450,"directed":false,"note":"柏辽兹之死后互相作证与争执，伊万入院后仍相遇"},
    {"id":"ds-r46","from":"ds-ivan","to":"ds-natasha","type":"同城 / 传闻","category":"其他","sincePage":286,"untilPage":null,"directed":false,"note":"莫斯科怪谈把两人的见闻连在一起"},
    {"id":"ds-r47","from":"ds-bunyrev","to":"ds-sokov","type":"上下级","category":"主仆","sincePage":56,"untilPage":420,"directed":true,"note":"餐厅管理员与领班，作协餐厅关闭后终止"},
    {"id":"ds-koroviev-behemot","from":"ds-koroviev","to":"ds-behemot","type":"同伴 / 搭档","category":"同盟","sincePage":40,"untilPage":null,"directed":false,"note":"一对恶作剧搭档，横扫莫斯科与剧院"},
    {"id":"ds-azazelo-hella","from":"ds-azazelo","to":"ds-hella","type":"同伴","category":"同盟","sincePage":140,"untilPage":null,"directed":false,"note":"魔王一行的两名执行者，同赴舞会与告别"},
    {"id":"ds-r49","from":"ds-judas","to":"ds-marfa","type":"情人","category":"情感","sincePage":220,"untilPage":242,"directed":false,"note":"犹大在下城的情人，正是她使犹大被诱出城外；止于犹大被杀"},
    {"id":"ds-r50","from":"ds-afranius","to":"ds-nisa","type":"利用 / 同谋","category":"其他","sincePage":214,"untilPage":300,"directed":true,"note":"借尼萨与玛尔法把犹大引到秃山附近"},
    {"id":"ds-r51","from":"ds-kanavkin","to":"ds-bunyrev","type":"常客 / 上下级","category":"其他","sincePage":316,"untilPage":420,"directed":true,"note":"作协餐厅的常客与餐厅管理员，作协没落后终止"},
    {"id":"ds-r52","from":"ds-kanavkin","to":"ds-ivan","type":"同行 / 见证","category":"其他","sincePage":316,"untilPage":430,"directed":false,"note":"文学界的边缘人对伊万发狂一事的旁观与议论"},
    {"id":"ds-r53","from":"ds-lastochkin","to":"ds-rakhinsky","type":"同事 / 上下级","category":"其他","sincePage":420,"untilPage":420,"directed":true,"note":"剧院会计与财务协理，同办魔术表演后的账目"},
    {"id":"ds-r54","from":"ds-lastochkin","to":"ds-varenukha","type":"同事","category":"其他","sincePage":420,"untilPage":450,"directed":false,"note":"剧院会计与总务的日常往来"}
  ]
}
]);
