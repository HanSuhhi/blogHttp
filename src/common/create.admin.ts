import intHomeIndex from './interface/homeIndex';

let getHomeIndex = (title: string, labelType: string, introduction: string, articleLength: number): intHomeIndex => {
  /*
  "title": "阿伟死了",
  "pub_time": "2020-1-24 3：01",
  "labelType": "UI学习",
  "time": 5,
  "introduction": "喜喜喜喜喜喜喜喜喜喜", */
  // 1. 标题已获取
  // 2. 获取发布时间
  let date: any = new Date();
  let year: number = date.getFullYear();
  let month: number = date.getMonth()+1;
  let day: number = date.getDate();
  let hour: number = date.getHours();
  let minute: number = date.getMinutes();
  let pub_time: string = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
  // 3. 类型标签已获取
  // 4. 预计阅读时间
  let time: number = Math.ceil(articleLength / 400);
  // 5. 简介已获取
  // 6. 组合
  let homeIndex: intHomeIndex = {
    title: title,
    labelType: labelType,
    introduction: introduction,
    pub_time: pub_time,
    mayTime: time,
  };

  return homeIndex;
}
export {
  getHomeIndex
}
