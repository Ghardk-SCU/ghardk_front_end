const reavelAnimDowntoTop = (delay) => ({
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3, delay } },
})

export {
  reavelAnimDowntoTop
}