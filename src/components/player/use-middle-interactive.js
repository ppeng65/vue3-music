import { ref } from 'vue'

export default function useMiddleInteractive() {
  const currentShow = ref('cd')
  const middleLStyle = ref(null)
  const middleRStyle = ref(null)

  const touch = {}
  let currentView = 'cd'

  function onMiddleTouchStart(e) {
    touch.startX = e.touches[0].pageX
  }

  function onMiddleTouchMove(e) {
    const deltaX = e.touches[0].pageX - touch.startX
    const left = currentView === 'cd' ? 0 : window.innerWidth
  }

  function onMiddleTouchEnd() {

  }
}
