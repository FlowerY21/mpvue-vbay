export const loadMixin = {
  methods:{
    downImg(str){
      const host_url = 'https://3.104.54.171:7443';
      return host_url + '/common/download?key=' + str;
    },
    async getRegions(data,onSuccess){
      const params = {
        code : data
      };
      const result = await this.$api.getRegions(params);

      if (result.code == 200) {
        onSuccess && onSuccess(result)
      }
    },
    renderTime(date) {
      let dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    },
    getLocalTime(nS) {
      console.log(nS)
      let date = new Date(nS);
      let Y = date.getFullYear() + '年';
      let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) +  '月';
      let D = date.getDate() + '日 ';
      let h = date.getHours() + ':';
      let m = date.getMinutes() + ':';
      let s = date.getSeconds();
      return Y+M+D+h+m+s
    },

  }
};
