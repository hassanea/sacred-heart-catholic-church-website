export const useSupabaseStore = defineStore("useSupabaseStore", () => {
  const supabase = useSupabaseClient();

  const user = ref({});
  const sacraments = ref([]);
  const ministries = ref([]);
  const onlineResources = ref([]);
  const catholicismResources = ref([]);

  async function getMinistryData() {
    const { data } = await useAsyncData("ministries", async () => {
      const { data } = await supabase.from("ministries").select("*");
      // @ts-ignore
      ministries.value = data;
      return ministries.value;
    });
  }

  async function getOnlineResourceData() {
    const { data } = await useAsyncData("online", async () => {
      const { data } = await supabase
        .from("resources")
        .select()
        .eq("category", "Online Resources");
      // @ts-ignore
      onlineResources.value = data;
      return onlineResources.value;
    });
  }

  async function getCatholicismOnlineData() {
    const { data: data2 } = await useAsyncData("catholicism", async () => {
      const { data } = await supabase
        .from("resources")
        .select()
        .eq("category", "Catholicism Online");
      // @ts-ignore
      catholicismResources.value = data;
      return catholicismResources.value;
    });
  }

  const keys = computed(() => {
    if (
      onlineResources.value.length === 0 &&
      catholicismResources.value.length === 0
    )
      return [];
    else
      // @ts-ignore
      return Object.keys(onlineResources?.value[0])
        .filter((el) => el === "name" || el === "ies" || el === "url")
        .map((item) => `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`);
  });

  return {
    user,
    sacraments,
    ministries,
    onlineResources,
    catholicismResources,
    keys,
    getMinistryData,
    getOnlineResourceData,
    getCatholicismOnlineData,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSupabaseStore, import.meta.hot));
}
