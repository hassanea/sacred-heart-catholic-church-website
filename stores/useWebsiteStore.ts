// @ts-ignore
import bulletinData from "../app/assets/data/bulletins";

export const useWebsiteStore = defineStore("useWebsiteStore", () => {
  const { bulletins: data } = bulletinData;

  const currentDate = ref(null);

  const bulletins = ref([...data]);

  const currentYear = computed(() => {
    // @ts-ignore
    const date = new Date(currentDate.value);
    if (!date) return 0;
    return date.getFullYear();
  });

  return {
    currentDate,
    bulletins,
    currentYear,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWebsiteStore, import.meta.hot));
}
