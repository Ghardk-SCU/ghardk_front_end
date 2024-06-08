import { motion } from 'framer-motion'

export default function Welcome({ FirstColor: ShapeColor, SecondColor: RightColor }) {
  return (
    <motion.div style={{ backgroundColor: RightColor }} animate={{ backgroundColor: RightColor, transition: { duration: 0.5 } }}
      className="w-full h-screen ">
      <Shape ShapeColor={ShapeColor} />
    </motion.div>
  )
}

const Shape = ({ ShapeColor }) => {
  return (
    <svg className="w-1/2" viewBox="0 0 720 361" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path animate={{ fill: ShapeColor, transition: { duration: 0.5 } }} d="M-111 361C96.6347 243.7 181.059 69.0364 574.734 120.959C649.642 130.839 720 75.5565 720 0H-30L-111 361Z" />
    </svg>
  )
}
