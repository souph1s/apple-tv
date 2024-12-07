import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '10% 0px -50px 0px' }}
    >
      {children}
    </motion.div>
  );
};
