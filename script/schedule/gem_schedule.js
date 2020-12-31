const fs = require('fs');
const path = require('path');

const FILE_JSON_PATH = path.join(__dirname, 'chinese.json');

// function objToArr(obj) {
//   const arr = [];
//   Object.keys(obj).map(value => {
//     json[value].name = value;
//     arr.push(json[value]);
//   });
//   return arr;
// }

function objToArr(obj) {
  const arr = [];
  Object.keys(obj).map(value => {
    arr.push(value);
  });
  return arr;
}

function gemSchedule() {
  function initData(err, data) {
    err && console.error(err);

    const json = JSON.parse(data.toString());
    const words = objToArr(json);

    const schedule = {};
    let dateTime = new Date();

    for (let i = 0; i < words.length; i += 2) {
      dateTime = dateTime.setDate(dateTime.getDate() + 1);
      dateTime = new Date(dateTime);

      schedule[dateTime.toLocaleDateString()] = words.slice(i, i + 6);
    }

    console.log(JSON.stringify(schedule));
  }

  fs.readFile(FILE_JSON_PATH, initData);
}

gemSchedule();

// const now = new Date();
// console.log(now.toLocaleDateString());

let t = {
  '1/1/2021': ['一', '二', '三', '四', '五', '六'],
  '1/2/2021': ['三', '四', '五', '六', '七', '八'],
  '1/3/2021': ['五', '六', '七', '八', '九', '十'],
  '1/4/2021': ['七', '八', '九', '十', '半', '两'],
  '1/5/2021': ['九', '十', '半', '两', '几', '数'],
  '1/6/2021': ['半', '两', '几', '数', '大', '小'],
  '1/7/2021': ['几', '数', '大', '小', '百', '千'],
  '1/8/2021': ['大', '小', '百', '千', '万', '亿'],
  '1/9/2021': ['百', '千', '万', '亿', '多', '少'],
  '1/10/2021': ['万', '亿', '多', '少', '单', '双'],
  '1/11/2021': ['多', '少', '单', '双', '天', '地'],
  '1/12/2021': ['单', '双', '天', '地', '人', '金'],
  '1/13/2021': ['天', '地', '人', '金', '木', '水'],
  '1/14/2021': ['人', '金', '木', '水', '火', '土'],
  '1/15/2021': ['木', '水', '火', '土', '日', '月'],
  '1/16/2021': ['火', '土', '日', '月', '星', '云'],
  '1/17/2021': ['日', '月', '星', '云', '山', '石'],
  '1/18/2021': ['星', '云', '山', '石', '田', '禾'],
  '1/19/2021': ['山', '石', '田', '禾', '东', '西'],
  '1/20/2021': ['田', '禾', '东', '西', '南', '北'],
  '1/21/2021': ['东', '西', '南', '北', '上', '下'],
  '1/22/2021': ['南', '北', '上', '下', '左', '右'],
  '1/23/2021': ['上', '下', '左', '右', '前', '后'],
  '1/24/2021': ['左', '右', '前', '后', '里', '外'],
  '1/25/2021': ['前', '后', '里', '外', '顶', '底'],
  '1/26/2021': ['里', '外', '顶', '底', '中', '边'],
  '1/27/2021': ['顶', '底', '中', '边', '春', '夏'],
  '1/28/2021': ['中', '边', '春', '夏', '秋', '冬'],
  '1/29/2021': ['春', '夏', '秋', '冬', '年', '季'],
  '1/30/2021': ['秋', '冬', '年', '季', '周', '夜'],
  '1/31/2021': ['年', '季', '周', '夜', '早', '午'],
  '2/1/2021': ['周', '夜', '早', '午', '晚', '昨'],
  '2/2/2021': ['早', '午', '晚', '昨', '明', '时'],
  '2/3/2021': ['晚', '昨', '明', '时', '分', '秒'],
  '2/4/2021': ['明', '时', '分', '秒', '江', '河'],
  '2/5/2021': ['分', '秒', '江', '河', '湖', '海'],
  '2/6/2021': ['江', '河', '湖', '海', '雨', '雪'],
  '2/7/2021': ['湖', '海', '雨', '雪', '冰', '霜'],
  '2/8/2021': ['雨', '雪', '冰', '霜', '雷', '电'],
  '2/9/2021': ['冰', '霜', '雷', '电', '光', '风'],
  '2/10/2021': ['雷', '电', '光', '风', '露', '雾'],
  '2/11/2021': ['光', '风', '露', '雾', '虹', '霞'],
  '2/12/2021': ['露', '雾', '虹', '霞', '洋', '岛'],
  '2/13/2021': ['虹', '霞', '洋', '岛', '岭', '潭'],
  '2/14/2021': ['洋', '岛', '岭', '潭', '泉', '溪'],
  '2/15/2021': ['岭', '潭', '泉', '溪', '滩', '峡'],
  '2/16/2021': ['泉', '溪', '滩', '峡', '池', '湾'],
  '2/17/2021': ['滩', '峡', '池', '湾', '桥', '岸'],
  '2/18/2021': ['池', '湾', '桥', '岸', '塘', '渠'],
  '2/19/2021': ['桥', '岸', '塘', '渠', '沟', '井'],
  '2/20/2021': ['塘', '渠', '沟', '井', '坡', '崖'],
  '2/21/2021': ['沟', '井', '坡', '崖', '壁', '洞'],
  '2/22/2021': ['坡', '崖', '壁', '洞', '坑', '坝'],
  '2/23/2021': ['壁', '洞', '坑', '坝', '厂', '矿'],
  '2/24/2021': ['坑', '坝', '厂', '矿', '亭', '窟'],
  '2/25/2021': ['厂', '矿', '亭', '窟', '墙', '梁'],
  '2/26/2021': ['亭', '窟', '墙', '梁', '砖', '沙'],
  '2/27/2021': ['墙', '梁', '砖', '沙', '泥', '瓦'],
  '2/28/2021': ['砖', '沙', '泥', '瓦', '城', '路'],
  '3/1/2021': ['泥', '瓦', '城', '路', '店', '家'],
  '3/2/2021': ['城', '路', '店', '家', '校', '街'],
  '3/3/2021': ['店', '家', '校', '街', '院', '庙'],
  '3/4/2021': ['校', '街', '院', '庙', '爸', '妈'],
  '3/5/2021': ['院', '庙', '爸', '妈', '爷', '奶'],
  '3/6/2021': ['爸', '妈', '爷', '奶', '姐', '妹'],
  '3/7/2021': ['爷', '奶', '姐', '妹', '哥', '弟'],
  '3/8/2021': ['姐', '妹', '哥', '弟', '夫', '妻'],
  '3/9/2021': ['哥', '弟', '夫', '妻', '公', '婆'],
  '3/10/2021': ['夫', '妻', '公', '婆', '伯', '叔'],
  '3/11/2021': ['公', '婆', '伯', '叔', '姑', '姨'],
  '3/12/2021': ['伯', '叔', '姑', '姨', '男', '女'],
  '3/13/2021': ['姑', '姨', '男', '女', '老', '幼'],
  '3/14/2021': ['男', '女', '老', '幼', '儿', '孙'],
  '3/15/2021': ['老', '幼', '儿', '孙', '嫂', '侄'],
  '3/16/2021': ['儿', '孙', '嫂', '侄', '孩', '子'],
  '3/17/2021': ['嫂', '侄', '孩', '子', '娃', '娘'],
  '3/18/2021': ['孩', '子', '娃', '娘', '父', '母'],
  '3/19/2021': ['娃', '娘', '父', '母', '童', '伴'],
  '3/20/2021': ['父', '母', '童', '伴', '工', '农'],
  '3/21/2021': ['童', '伴', '工', '农', '演', '导'],
  '3/22/2021': ['工', '农', '演', '导', '护', '渔'],
  '3/23/2021': ['演', '导', '护', '渔', '驾', '售'],
  '3/24/2021': ['护', '渔', '驾', '售', '旅', '消'],
  '3/25/2021': ['驾', '售', '旅', '消', '警', '邮'],
  '3/26/2021': ['旅', '消', '警', '邮', '助', '厨'],
  '3/27/2021': ['警', '邮', '助', '厨', '服', '顾'],
  '3/28/2021': ['助', '厨', '服', '顾', '秘', '律'],
  '3/29/2021': ['服', '顾', '秘', '律', '匠', '机'],
  '3/30/2021': ['秘', '律', '匠', '机', '司', '作'],
  '3/31/2021': ['匠', '机', '司', '作', '编', '者'],
  '4/1/2021': ['司', '作', '编', '者', '口', '目'],
  '4/2/2021': ['编', '者', '口', '目', '耳', '头'],
  '4/3/2021': ['口', '目', '耳', '头', '脸', '舌'],
  '4/4/2021': ['耳', '头', '脸', '舌', '牙', '发'],
  '4/5/2021': ['脸', '舌', '牙', '发', '嘴', '颈'],
  '4/6/2021': ['牙', '发', '嘴', '颈', '眼', '脑'],
  '4/7/2021': ['嘴', '颈', '眼', '脑', '眉', '手'],
  '4/8/2021': ['眼', '脑', '眉', '手', '足', '胸'],
  '4/9/2021': ['眉', '手', '足', '胸', '背', '身'],
  '4/10/2021': ['足', '胸', '背', '身', '脚', '股'],
  '4/11/2021': ['背', '身', '脚', '股', '腿', '腰'],
  '4/12/2021': ['脚', '股', '腿', '腰', '肚', '膝'],
  '4/13/2021': ['腿', '腰', '肚', '膝', '指', '鼻'],
  '4/14/2021': ['肚', '膝', '指', '鼻', '肩', '臂'],
  '4/15/2021': ['指', '鼻', '肩', '臂', '皮', '心'],
  '4/16/2021': ['肩', '臂', '皮', '心', '骨', '肘'],
  '4/17/2021': ['皮', '心', '骨', '肘', '黑', '白'],
  '4/18/2021': ['骨', '肘', '黑', '白', '红', '黄'],
  '4/19/2021': ['黑', '白', '红', '黄', '蓝', '绿'],
  '4/20/2021': ['红', '黄', '蓝', '绿', '青', '紫'],
  '4/21/2021': ['蓝', '绿', '青', '紫', '乌', '灰'],
  '4/22/2021': ['青', '紫', '乌', '灰', '碧', '赤'],
  '4/23/2021': ['乌', '灰', '碧', '赤', '粉', '苍'],
  '4/24/2021': ['碧', '赤', '粉', '苍', '翠', '朱'],
  '4/25/2021': ['粉', '苍', '翠', '朱', '冷', '热'],
  '4/26/2021': ['翠', '朱', '冷', '热', '温', '凉'],
  '4/27/2021': ['冷', '热', '温', '凉', '干', '湿'],
  '4/28/2021': ['温', '凉', '干', '湿', '真', '假'],
  '4/29/2021': ['干', '湿', '真', '假', '对', '错'],
  '4/30/2021': ['真', '假', '对', '错', '好', '坏'],
  '5/1/2021': ['对', '错', '好', '坏', '古', '今'],
  '5/2/2021': ['好', '坏', '古', '今', '朝', '夕'],
  '5/3/2021': ['古', '今', '朝', '夕', '长', '短'],
  '5/4/2021': ['朝', '夕', '长', '短', '远', '近'],
  '5/5/2021': ['长', '短', '远', '近', '高', '低'],
  '5/6/2021': ['远', '近', '高', '低', '深', '浅'],
  '5/7/2021': ['高', '低', '深', '浅', '粗', '细'],
  '5/8/2021': ['深', '浅', '粗', '细', '胖', '瘦'],
  '5/9/2021': ['粗', '细', '胖', '瘦', '宽', '窄'],
  '5/10/2021': ['胖', '瘦', '宽', '窄', '暖', '冻'],
  '5/11/2021': ['宽', '窄', '暖', '冻', '安', '危'],
  '5/12/2021': ['暖', '冻', '安', '危', '始', '终'],
  '5/13/2021': ['安', '危', '始', '终', '浓', '淡'],
  '5/14/2021': ['始', '终', '浓', '淡', '简', '复'],
  '5/15/2021': ['浓', '淡', '简', '复', '完', '破'],
  '5/16/2021': ['简', '复', '完', '破', '枯', '荣'],
  '5/17/2021': ['完', '破', '枯', '荣', '胜', '败'],
  '5/18/2021': ['枯', '荣', '胜', '败', '尖', '秃'],
  '5/19/2021': ['胜', '败', '尖', '秃', '弯', '直'],
  '5/20/2021': ['尖', '秃', '弯', '直', '亮', '暗'],
  '5/21/2021': ['弯', '直', '亮', '暗', '闹', '静'],
  '5/22/2021': ['亮', '暗', '闹', '静', '快', '慢'],
  '5/23/2021': ['闹', '静', '快', '慢', '出', '入'],
  '5/24/2021': ['快', '慢', '出', '入', '正', '反'],
  '5/25/2021': ['出', '入', '正', '反', '松', '紧'],
  '5/26/2021': ['正', '反', '松', '紧', '空', '满'],
  '5/27/2021': ['松', '紧', '空', '满', '忙', '闲'],
  '5/28/2021': ['空', '满', '忙', '闲', '无', '有'],
  '5/29/2021': ['忙', '闲', '无', '有', '是', '非'],
  '5/30/2021': ['无', '有', '是', '非', '主', '次'],
  '5/31/2021': ['是', '非', '主', '次', '壮', '弱'],
  '6/1/2021': ['主', '次', '壮', '弱', '软', '硬'],
  '6/2/2021': ['壮', '弱', '软', '硬', '新', '旧'],
  '6/3/2021': ['软', '硬', '新', '旧', '首', '尾'],
  '6/4/2021': ['新', '旧', '首', '尾', '生', '死'],
  '6/5/2021': ['首', '尾', '生', '死', '闭', '合'],
  '6/6/2021': ['生', '死', '闭', '合', '清', '浑'],
  '6/7/2021': ['闭', '合', '清', '浑', '阴', '阳'],
  '6/8/2021': ['清', '浑', '阴', '阳', '难', '易'],
  '6/9/2021': ['阴', '阳', '难', '易', '厚', '薄'],
  '6/10/2021': ['难', '易', '厚', '薄', '轻', '重'],
  '6/11/2021': ['厚', '薄', '轻', '重', '利', '害'],
  '6/12/2021': ['轻', '重', '利', '害', '净', '脏'],
  '6/13/2021': ['利', '害', '净', '脏', '平', '曲'],
  '6/14/2021': ['净', '脏', '平', '曲', '全', '���'],
  '6/15/2021': ['平', '曲', '全', '偏', '异', '同'],
  '6/16/2021': ['全', '偏', '异', '同', '陡', '缓'],
  '6/17/2021': ['异', '同', '陡', '缓', '巨', '微'],
  '6/18/2021': ['陡', '缓', '巨', '微', '寒', '暑'],
  '6/19/2021': ['巨', '微', '寒', '暑', '刚', '柔'],
  '6/20/2021': ['寒', '暑', '刚', '柔', '矛', '盾'],
  '6/21/2021': ['刚', '柔', '矛', '盾', '饿', '饱'],
  '6/22/2021': ['矛', '盾', '饿', '饱', '晨', '暮'],
  '6/23/2021': ['饿', '饱', '晨', '暮', '善', '恶'],
  '6/24/2021': ['晨', '暮', '善', '恶', '亲', '疏'],
  '6/25/2021': ['善', '恶', '亲', '疏', '祸', '福'],
  '6/26/2021': ['亲', '疏', '祸', '福', '敌', '友'],
  '6/27/2021': ['祸', '福', '敌', '友', '你', '我'],
  '6/28/2021': ['敌', '友', '你', '我', '花', '草'],
  '6/29/2021': ['你', '我', '花', '草', '树', '林'],
  '6/30/2021': ['花', '草', '树', '林', '森', '丛'],
  '7/1/2021': ['树', '林', '森', '丛', '坪', '园'],
  '7/2/2021': ['森', '丛', '坪', '园', '杨', '桐'],
  '7/3/2021': ['坪', '园', '杨', '桐', '枫', '柏'],
  '7/4/2021': ['杨', '桐', '枫', '柏', '棉', '杉'],
  '7/5/2021': ['枫', '柏', '棉', '杉', '柳', '桂'],
  '7/6/2021': ['棉', '杉', '柳', '桂', '桃', '李'],
  '7/7/2021': ['柳', '桂', '桃', '李', '杏', '苹'],
  '7/8/2021': ['桃', '李', '杏', '苹', '柑', '橙'],
  '7/9/2021': ['杏', '苹', '柑', '橙', '柿', '枣'],
  '7/10/2021': ['柑', '橙', '柿', '枣', '梨', '蕉'],
  '7/11/2021': ['柿', '枣', '梨', '蕉', '椰', '柚'],
  '7/12/2021': ['梨', '蕉', '椰', '柚', '楂', '莓'],
  '7/13/2021': ['椰', '柚', '楂', '莓', '瓜', '果'],
  '7/14/2021': ['楂', '莓', '瓜', '果', '梅', '兰'],
  '7/15/2021': ['瓜', '果', '梅', '兰', '竹', '菊'],
  '7/16/2021': ['梅', '兰', '竹', '菊', '荷', '仙'],
  '7/17/2021': ['竹', '菊', '荷', '仙', '谷', '麦'],
  '7/18/2021': ['荷', '仙', '谷', '麦', '豆', '菜'],
  '7/19/2021': ['谷', '麦', '豆', '菜', '肉', '蛋'],
  '7/20/2021': ['豆', '菜', '肉', '蛋', '饭', '粮'],
  '7/21/2021': ['肉', '蛋', '饭', '粮', '米', '粽'],
  '7/22/2021': ['饭', '粮', '米', '粽', '秧', '芽'],
  '7/23/2021': ['米', '粽', '秧', '芽', '苗', '穗'],
  '7/24/2021': ['秧', '芽', '苗', '穗', '根', '叶'],
  '7/25/2021': ['苗', '穗', '根', '叶', '枝', '藤'],
  '7/26/2021': ['根', '叶', '枝', '藤', '植', '茄'],
  '7/27/2021': ['枝', '藤', '植', '茄', '莲', '稻'],
  '7/28/2021': ['植', '茄', '莲', '稻', '芝', '茶'],
  '7/29/2021': ['莲', '稻', '芝', '茶', '菇', '笋'],
  '7/30/2021': ['芝', '茶', '菇', '笋', '衣', '裤'],
  '7/31/2021': ['菇', '笋', '衣', '裤', '鞋', '套'],
  '8/1/2021': ['衣', '裤', '鞋', '套', '裙', '帽'],
  '8/2/2021': ['鞋', '套', '裙', '帽', '衫', '领'],
  '8/3/2021': ['裙', '帽', '衫', '领', '书', '包'],
  '8/4/2021': ['衫', '领', '书', '包', '纸', '笔'],
  '8/5/2021': ['书', '包', '纸', '笔', '本', '刀'],
  '8/6/2021': ['纸', '笔', '本', '刀', '尺', '灯'],
  '8/7/2021': ['本', '刀', '尺', '灯', '伞', '表'],
  '8/8/2021': ['尺', '灯', '伞', '表', '针', '扣'],
  '8/9/2021': ['伞', '表', '针', '扣', '巾', '旗'],
  '8/10/2021': ['针', '扣', '巾', '旗', '剪', '秤'],
  '8/11/2021': ['巾', '旗', '剪', '秤', '房', '屋'],
  '8/12/2021': ['剪', '秤', '房', '屋', '楼', '塔'],
  '8/13/2021': ['房', '屋', '楼', '塔', '舍', '牢'],
  '8/14/2021': ['楼', '塔', '舍', '牢', '场', '宿'],
  '8/15/2021': ['舍', '牢', '场', '宿', '室', '厅'],
  '8/16/2021': ['场', '宿', '室', '厅', '门', '窗'],
  '8/17/2021': ['室', '厅', '门', '窗', '台', '柱'],
  '8/18/2021': ['门', '窗', '台', '柱', '杆', '床'],
  '8/19/2021': ['台', '柱', '杆', '床', '板', '炉'],
  '8/20/2021': ['杆', '床', '板', '炉', '壶', '杯'],
  '8/21/2021': ['板', '炉', '壶', '杯', '槽', '席'],
  '8/22/2021': ['壶', '杯', '槽', '席', '钟', '纱'],
  '8/23/2021': ['槽', '席', '钟', '纱', '桌', '椅'],
  '8/24/2021': ['钟', '纱', '桌', '椅', '柜', '帘'],
  '8/25/2021': ['桌', '椅', '柜', '帘', '被', '镜'],
  '8/26/2021': ['柜', '帘', '被', '镜', '布', '丝'],
  '8/27/2021': ['被', '镜', '布', '丝', '物', '影'],
  '8/28/2021': ['布', '丝', '物', '影', '像', '景'],
  '8/29/2021': ['物', '影', '像', '景', '票', '币'],
  '8/30/2021': ['像', '景', '票', '币', '贝', '钱'],
  '8/31/2021': ['票', '币', '贝', '钱', '钞', '元'],
  '9/1/2021': ['贝', '钱', '钞', '元', '角', '财'],
  '9/2/2021': ['钞', '元', '角', '财', '富', '贵'],
  '9/3/2021': ['角', '财', '富', '贵', '穷', '货'],
  '9/4/2021': ['富', '贵', '穷', '货', '铜', '银'],
  '9/5/2021': ['穷', '货', '铜', '银', '铁', '铅'],
  '9/6/2021': ['铜', '银', '铁', '铅', '玉', '煤'],
  '9/7/2021': ['铁', '铅', '玉', '煤', '珠', '壳'],
  '9/8/2021': ['玉', '煤', '珠', '壳', '锅', '碗'],
  '9/9/2021': ['珠', '壳', '锅', '碗', '勺', '盆'],
  '9/10/2021': ['锅', '碗', '勺', '盆', '盘', '篮'],
  '9/11/2021': ['勺', '盆', '盘', '篮', '桶', '袋'],
  '9/12/2021': ['盘', '篮', '桶', '袋', '油', '盐'],
  '9/13/2021': ['桶', '袋', '油', '盐', '酱', '醋'],
  '9/14/2021': ['油', '盐', '酱', '醋', '葱', '姜'],
  '9/15/2021': ['酱', '醋', '葱', '姜', '蒜', '汤'],
  '9/16/2021': ['葱', '姜', '蒜', '汤', '军', '官'],
  '9/17/2021': ['蒜', '汤', '军', '官', '兵', '将'],
  '9/18/2021': ['军', '官', '兵', '将', '师', '战'],
  '9/19/2021': ['兵', '将', '师', '战', '士', '令'],
  '9/20/2021': ['师', '战', '士', '令', '弓', '箭'],
  '9/21/2021': ['士', '令', '弓', '箭', '枪', '炮'],
  '9/22/2021': ['弓', '箭', '枪', '炮', '炸', '烟'],
  '9/23/2021': ['枪', '炮', '炸', '烟', '仗', '灾'],
  '9/24/2021': ['炸', '烟', '仗', '灾', '车', '舟'],
  '9/25/2021': ['仗', '灾', '车', '舟', '船', '道'],
  '9/26/2021': ['车', '舟', '船', '道', '帆', '舰'],
  '9/27/2021': ['船', '道', '帆', '舰', '甲', '绳'],
  '9/28/2021': ['帆', '舰', '甲', '绳', '国', '省'],
  '9/29/2021': ['甲', '绳', '国', '省', '市', '州'],
  '9/30/2021': ['国', '省', '市', '州', '区', '县'],
  '10/1/2021': ['市', '州', '区', '县', '镇', '乡'],
  '10/2/2021': ['区', '县', '镇', '乡', '村', '组'],
  '10/3/2021': ['镇', '乡', '村', '组', '队', '户'],
  '10/4/2021': ['村', '组', '队', '户', '居', '民'],
  '10/5/2021': ['队', '户', '居', '民', '丁', '员'],
  '10/6/2021': ['居', '民', '丁', '员', '图', '华'],
  '10/7/2021': ['丁', '员', '图', '华', '京', '广'],
  '10/8/2021': ['图', '华', '京', '广', '川', '肥'],
  '10/9/2021': ['京', '广', '川', '肥', '波', '原'],
  '10/10/2021': ['川', '肥', '波', '原', '吃', '喷'],
  '10/11/2021': ['波', '原', '吃', '喷', '饮', '咬'],
  '10/12/2021': ['吃', '喷', '饮', '咬', '吐', '品'],
  '10/13/2021': ['饮', '咬', '吐', '品', '吞', '喂'],
  '10/14/2021': ['吐', '品', '吞', '喂', '味', '酸'],
  '10/15/2021': ['吞', '喂', '味', '酸', '甜', '苦'],
  '10/16/2021': ['味', '酸', '甜', '苦', '辣', '咸'],
  '10/17/2021': ['甜', '苦', '辣', '咸', '甘', '香'],
  '10/18/2021': ['辣', '咸', '甘', '香', '累', '疲'],
  '10/19/2021': ['甘', '香', '累', '疲', '渴', '痛'],
  '10/20/2021': ['累', '疲', '渴', '痛', '急', '怕'],
  '10/21/2021': ['渴', '痛', '急', '怕', '气', '愿'],
  '10/22/2021': ['急', '怕', '气', '愿', '兴', '欢'],
  '10/23/2021': ['气', '愿', '兴', '欢', '情', '吓'],
  '10/24/2021': ['兴', '欢', '情', '吓', '谢', '忘'],
  '10/25/2021': ['情', '吓', '谢', '忘', '恋', '感'],
  '10/26/2021': ['谢', '忘', '恋', '感', '喜', '怒'],
  '10/27/2021': ['恋', '感', '喜', '怒', '哀', '乐'],
  '10/28/2021': ['喜', '怒', '哀', '乐', '惊', '恐'],
  '10/29/2021': ['哀', '乐', '惊', '恐', '悲', '爱'],
  '10/30/2021': ['惊', '恐', '悲', '爱', '病', '医'],
  '10/31/2021': ['悲', '爱', '病', '医', '药', '疼'],
  '11/1/2021': ['病', '医', '药', '疼', '伤', '望'],
  '11/2/2021': ['药', '疼', '伤', '望', '闻', '诊'],
  '11/3/2021': ['伤', '望', '闻', '诊', '字', '词'],
  '11/4/2021': ['闻', '诊', '字', '词', '句', '段'],
  '11/5/2021': ['字', '词', '句', '段', '诗', '歌'],
  '11/6/2021': ['句', '段', '诗', '歌', '文', '课'],
  '11/7/2021': ['诗', '歌', '文', '课', '语', '英'],
  '11/8/2021': ['文', '课', '语', '英', '音', '科'],
  '11/9/2021': ['语', '英', '音', '科', '体', '美'],
  '11/10/2021': ['音', '科', '体', '美', '自', '理'],
  '11/11/2021': ['体', '美', '自', '理', '锣', '鼓'],
  '11/12/2021': ['自', '理', '锣', '鼓', '号', '筝'],
  '11/13/2021': ['锣', '鼓', '号', '筝', '笛', '琴'],
  '11/14/2021': ['号', '筝', '笛', '琴', '胡', '铃'],
  '11/15/2021': ['笛', '琴', '胡', '铃', '棋', '画'],
  '11/16/2021': ['胡', '铃', '棋', '画', '法', '刻'],
  '11/17/2021': ['棋', '画', '法', '刻', '彩', '色'],
  '11/18/2021': ['法', '刻', '彩', '色', '声', '调'],
  '11/19/2021': ['彩', '色', '声', '调', '只', '位'],
  '11/20/2021': ['声', '调', '只', '位', '支', '朵'],
  '11/21/2021': ['只', '位', '支', '朵', '条', '匹'],
  '11/22/2021': ['支', '朵', '条', '匹', '片', '盒'],
  '11/23/2021': ['条', '匹', '片', '盒', '座', '张'],
  '11/24/2021': ['片', '盒', '座', '张', '件', '架'],
  '11/25/2021': ['座', '张', '件', '架', '块', '团'],
  '11/26/2021': ['件', '架', '块', '团', '瓶', '滴'],
  '11/27/2021': ['块', '团', '瓶', '滴', '个', '册'],
  '11/28/2021': ['瓶', '滴', '个', '册', '辆', '遍'],
  '11/29/2021': ['个', '册', '辆', '遍', '篇', '棵'],
  '11/30/2021': ['辆', '遍', '篇', '棵', '间', '阵'],
  '12/1/2021': ['篇', '棵', '间', '阵', '群', '堆'],
  '12/2/2021': ['间', '阵', '群', '堆', '处', '株'],
  '12/3/2021': ['群', '堆', '处', '株', '扇', '把'],
  '12/4/2021': ['处', '株', '扇', '把', '则', '幅'],
  '12/5/2021': ['扇', '把', '则', '幅', '颗', '行'],
  '12/6/2021': ['则', '幅', '颗', '行', '粒', '种'],
  '12/7/2021': ['颗', '行', '粒', '种', '部', '节'],
  '12/8/2021': ['粒', '种', '部', '节', '封', '轮'],
  '12/9/2021': ['部', '节', '封', '轮', '孔', '堵'],
  '12/10/2021': ['封', '轮', '孔', '堵', '瓢', '事'],
  '12/11/2021': ['孔', '堵', '瓢', '事', '份', '列'],
  '12/12/2021': ['瓢', '事', '份', '列', '枚', '堂'],
  '12/13/2021': ['份', '列', '枚', '堂', '加', '减'],
  '12/14/2021': ['枚', '堂', '加', '减', '乘', '除'],
  '12/15/2021': ['加', '减', '乘', '除', '和', '差'],
  '12/16/2021': ['乘', '除', '和', '差', '积', '商'],
  '12/17/2021': ['和', '差', '积', '商', '点', '线'],
  '12/18/2021': ['积', '商', '点', '线', '面', '方'],
  '12/19/2021': ['点', '线', '面', '方', '圆', '梯'],
  '12/20/2021': ['面', '方', '圆', '梯', '球', '环'],
  '12/21/2021': ['圆', '梯', '球', '环', '牛', '马'],
  '12/22/2021': ['球', '环', '牛', '马', '羊', '猪'],
  '12/23/2021': ['牛', '马', '羊', '猪', '狗', '驴'],
  '12/24/2021': ['羊', '猪', '狗', '驴', '猫', '兔'],
  '12/25/2021': ['狗', '驴', '猫', '兔', '鸡', '鸭'],
  '12/26/2021': ['猫', '兔', '鸡', '鸭', '鹅', '鸽'],
  '12/27/2021': ['鸡', '鸭', '鹅', '鸽', '鸦', '鹊'],
  '12/28/2021': ['鹅', '鸽', '鸦', '鹊', '雀', '鹤'],
  '12/29/2021': ['鸦', '鹊', '雀', '鹤', '虎', '狮'],
  '12/30/2021': ['雀', '鹤', '虎', '狮', '熊', '豹'],
  '12/31/2021': ['虎', '狮', '熊', '豹', '狼', '龙'],
  '1/1/2022': ['熊', '豹', '狼', '龙', '蛇', '象'],
  '1/2/2022': ['狼', '龙', '蛇', '象', '鹿', '猴'],
  '1/3/2022': ['蛇', '象', '鹿', '猴', '猩', '孤'],
  '1/4/2022': ['鹿', '猴', '猩', '孤', '骆', '婿'],
  '1/5/2022': ['猩', '孤', '骆', '婿', '鼠', '狸'],
  '1/6/2022': ['骆', '婿', '鼠', '狸', '鸟', '鹰'],
  '1/7/2022': ['鼠', '狸', '鸟', '鹰', '雁', '翁'],
  '1/8/2022': ['鸟', '鹰', '雁', '翁', '莺', '燕'],
  '1/9/2022': ['雁', '翁', '莺', '燕', '鸥', '鹭'],
  '1/10/2022': ['莺', '燕', '鸥', '鹭', '虫', '坟'],
  '1/11/2022': ['鸥', '鹭', '虫', '坟', '蚁', '蝶'],
  '1/12/2022': ['虫', '坟', '蚁', '蝶', '蜓', '蜂'],
  '1/13/2022': ['蚁', '蝶', '蜓', '蜂', '蛛', '蚕'],
  '1/14/2022': ['蜓', '蜂', '蛛', '蚕', '蝗', '蝇'],
  '1/15/2022': ['蛛', '蚕', '蝗', '蝇', '蝉', '鱼'],
  '1/16/2022': ['蝗', '蝇', '蝉', '鱼', '蛙', '龟'],
  '1/17/2022': ['蝉', '鱼', '蛙', '龟', '蟹', '虾'],
  '1/18/2022': ['蛙', '龟', '蟹', '虾', '归', '离'],
  '1/19/2022': ['蟹', '虾', '归', '离', '沉', '浮'],
  '1/20/2022': ['归', '离', '沉', '浮', '去', '来'],
  '1/21/2022': ['沉', '浮', '去', '来', '笑', '哭'],
  '1/22/2022': ['去', '来', '笑', '哭', '开', '关'],
  '1/23/2022': ['笑', '哭', '开', '关', '买', '卖'],
  '1/24/2022': ['开', '关', '买', '卖', '坐', '站'],
  '1/25/2022': ['买', '卖', '坐', '站', '推', '拉'],
  '1/26/2022': ['坐', '站', '推', '拉', '升', '落'],
  '1/27/2022': ['推', '拉', '升', '落', '立', '躺'],
  '1/28/2022': ['升', '落', '立', '躺', '走', '停'],
  '1/29/2022': ['立', '躺', '走', '停', '睡', '醒'],
  '1/30/2022': ['走', '停', '睡', '醒', '伸', '缩'],
  '1/31/2022': ['睡', '醒', '伸', '缩', '收', '放'],
  '2/1/2022': ['伸', '缩', '收', '放', '呼', '吸'],
  '2/2/2022': ['收', '放', '呼', '吸', '穿', '脱'],
  '2/3/2022': ['呼', '吸', '穿', '脱', '进', '退'],
  '2/4/2022': ['穿', '脱', '进', '退', '得', '失'],
  '2/5/2022': ['进', '退', '得', '失', '断', '续'],
  '2/6/2022': ['得', '失', '断', '续', '存', '亡'],
  '2/7/2022': ['断', '续', '存', '亡', '跳', '踢'],
  '2/8/2022': ['存', '亡', '跳', '踢', '拍', '打'],
  '2/9/2022': ['跳', '踢', '拍', '打', '喊', '叫'],
  '2/10/2022': ['拍', '打', '喊', '叫', '采', '取'],
  '2/11/2022': ['喊', '叫', '采', '取', '挑', '拿'],
  '2/12/2022': ['采', '取', '挑', '拿', '找', '搬'],
  '2/13/2022': ['挑', '拿', '找', '搬', '握', '拖'],
  '2/14/2022': ['找', '搬', '握', '拖', '追', '拦'],
  '2/15/2022': ['握', '拖', '追', '拦', '冲', '闯'],
  '2/16/2022': ['追', '拦', '冲', '闯', '奔', '逃'],
  '2/17/2022': ['冲', '闯', '奔', '逃', '滚', '仰'],
  '2/18/2022': ['奔', '逃', '滚', '仰', '荡', '降'],
  '2/19/2022': ['滚', '仰', '荡', '降', '飞', '飘'],
  '2/20/2022': ['荡', '降', '飞', '飘', '擦', '摘'],
  '2/21/2022': ['飞', '飘', '擦', '摘', '送', '迎'],
  '2/22/2022': ['擦', '摘', '送', '迎', '招', '炒'],
  '2/23/2022': ['送', '迎', '招', '炒', '跑', '爬'],
  '2/24/2022': ['招', '炒', '跑', '爬', '动', '闪'],
  '2/25/2022': ['跑', '爬', '动', '闪', '烧', '摆'],
  '2/26/2022': ['动', '闪', '烧', '摆', '泼', '转'],
  '2/27/2022': ['烧', '摆', '泼', '转', '投', '靠'],
  '2/28/2022': ['泼', '转', '投', '靠', '吹', '唱'],
  '3/1/2022': ['投', '靠', '吹', '唱', '淋', '浇'],
  '3/2/2022': ['吹', '唱', '淋', '浇', '扔', '接'],
  '3/3/2022': ['淋', '浇', '扔', '接', '扫', '洗'],
  '3/4/2022': ['扔', '接', '扫', '洗', '托', '砍'],
  '3/5/2022': ['扫', '洗', '托', '砍', '拨', '敲'],
  '3/6/2022': ['托', '砍', '拨', '敲', '挤', '压'],
  '3/7/2022': ['拨', '敲', '挤', '压', '刮', '削'],
  '3/8/2022': ['挤', '压', '刮', '削', '殊', '铺'],
  '3/9/2022': ['刮', '削', '殊', '铺', '甩', '盖'],
  '3/10/2022': ['殊', '铺', '甩', '盖', '扛', '揪'],
  '3/11/2022': ['甩', '盖', '扛', '揪', '扭', '刺'],
  '3/12/2022': ['扛', '揪', '扭', '刺', '绕', '盛'],
  '3/13/2022': ['扭', '刺', '绕', '盛', '造', '换'],
  '3/14/2022': ['绕', '盛', '造', '换', '埋', '运'],
  '3/15/2022': ['造', '换', '埋', '运', '登', '围'],
  '3/16/2022': ['埋', '运', '登', '围', '拌', '摔'],
  '3/17/2022': ['登', '围', '拌', '摔', '夹', '贴'],
  '3/18/2022': ['拌', '摔', '夹', '贴', '骑', '裁'],
  '3/19/2022': ['夹', '贴', '骑', '裁', '刷', '割'],
  '3/20/2022': ['骑', '裁', '刷', '割', '捕', '躲'],
  '3/21/2022': ['刷', '割', '捕', '躲', '硒', '洒'],
  '3/22/2022': ['捕', '躲', '硒', '洒', '扑', '游'],
  '3/23/2022': ['硒', '洒', '扑', '游', '掏', '抽'],
  '3/24/2022': ['扑', '游', '掏', '抽', '叹', '盼'],
  '3/25/2022': ['掏', '抽', '叹', '盼', '摇', '栽'],
  '3/26/2022': ['叹', '盼', '摇', '栽', '抢', '劈'],
  '3/27/2022': ['摇', '栽', '抢', '劈', '碰', '锄'],
  '3/28/2022': ['抢', '劈', '碰', '锄', '照', '弃'],
  '3/29/2022': ['碰', '锄', '照', '弃', '训', '晃'],
  '3/30/2022': ['照', '弃', '训', '晃', '抓', '赶'],
  '3/31/2022': ['训', '晃', '抓', '赶', '滑', '蹲'],
  '4/1/2022': ['抓', '赶', '滑', '蹲', '称', '织'],
  '4/2/2022': ['滑', '蹲', '称', '织', '救', '吵'],
  '4/3/2022': ['称', '织', '救', '吵', '披', '抖'],
  '4/4/2022': ['救', '吵', '披', '抖', '引', '戴'],
  '4/5/2022': ['披', '抖', '引', '戴', '掉', '留'],
  '4/6/2022': ['引', '戴', '掉', '留', '住', '休'],
  '4/7/2022': ['掉', '留', '住', '休', '散', '掐'],
  '4/8/2022': ['住', '休', '散', '掐', '往', '回'],
  '4/9/2022': ['散', '掐', '往', '回', '跟', '变'],
  '4/10/2022': ['往', '回', '跟', '变', '做', '现'],
  '4/11/2022': ['跟', '变', '做', '现', '展', '起'],
  '4/12/2022': ['做', '现', '展', '起', '折', '祝'],
  '4/13/2022': ['展', '起', '折', '祝', '寻', '喘'],
  '4/14/2022': ['折', '祝', '寻', '喘', '敬', '充'],
  '4/15/2022': ['寻', '喘', '敬', '充', '丢', '含'],
  '4/16/2022': ['敬', '充', '丢', '含', '提', '举'],
  '4/17/2022': ['丢', '含', '提', '举', '捉', '挂'],
  '4/18/2022': ['提', '举', '捉', '挂', '拔', '捧'],
  '4/19/2022': ['捉', '挂', '拔', '捧', '抬', '抱'],
  '4/20/2022': ['拔', '捧', '抬', '抱', '检', '端'],
  '4/21/2022': ['抬', '抱', '检', '端', '牵', '翻'],
  '4/22/2022': ['检', '端', '牵', '翻', '尝', '猜'],
  '4/23/2022': ['牵', '翻', '尝', '猜', '射', '挖'],
  '4/24/2022': ['尝', '猜', '射', '挖', '垂', '吼'],
  '4/25/2022': ['射', '挖', '垂', '吼', '遇', '倒'],
  '4/26/2022': ['垂', '吼', '遇', '倒', '玩', '交'],
  '4/27/2022': ['遇', '倒', '玩', '交', '哄', '递'],
  '4/28/2022': ['玩', '交', '哄', '递', '补', '带'],
  '4/29/2022': ['哄', '递', '补', '带', '给', '过'],
  '4/30/2022': ['补', '带', '给', '过', '要', '使'],
  '5/1/2022': ['给', '过', '要', '使', '弄', '连'],
  '5/2/2022': ['要', '使', '弄', '连', '教', '学'],
  '5/3/2022': ['弄', '连', '教', '学', '问', '答'],
  '5/4/2022': ['教', '学', '问', '答', '听', '说'],
  '5/5/2022': ['问', '答', '听', '说', '读', '写'],
  '5/6/2022': ['听', '说', '读', '写', '记', '认'],
  '5/7/2022': ['读', '写', '记', '认', '思', '想'],
  '5/8/2022': ['记', '认', '思', '想', '看', '讲'],
  '5/9/2022': ['思', '想', '看', '讲', '评', '懂'],
  '5/10/2022': ['看', '讲', '评', '懂', '习', '奖'],
  '5/11/2022': ['评', '懂', '习', '奖', '劝', '告'],
  '5/12/2022': ['习', '奖', '劝', '告', '抄', '知'],
  '5/13/2022': ['劝', '告', '抄', '知', '识', '意'],
  '5/14/2022': ['抄', '知', '识', '意'],
  '5/15/2022': ['识', '意'],
};
