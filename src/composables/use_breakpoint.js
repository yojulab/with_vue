import { computed, onMounted, onUnmounted, ref } from "vue";

export default function useBreakpoint() {
  let windowWidth = ref(window.innerWidth);
  const onChangeWindowWidth = () => {
    windowWidth.value = window.innerWidth;
    // console.log("windowWidth : ", windowWidth.value);
  };
  onMounted(() => {
    window.addEventListener("resize", onChangeWindowWidth);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onChangeWindowWidth);
  });
  const sizeType = computed(() => {
    let type = "lg";
    if (windowWidth.value < 1200) {
      type = "sm";
    }
    // console.log("sizeType : ", type);
    return type;
  });
  // console.log("return use_breakpoint : ", sizeType.value);
  return sizeType;
}
