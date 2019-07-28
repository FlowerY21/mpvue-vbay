export const loadMixin = {
  methods:{
    async getRegions(data,onSuccess){
      const params = {
        code : data
      };
      const result = await this.$api.getRegions(params);

      if (result.code == 200) {
        onSuccess && onSuccess(result)
      }
    },
  }
};
