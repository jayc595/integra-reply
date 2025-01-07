import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  open: boolean;
};

const UpgradeCard = ({ open }: Props) => {
  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.3,
      }}
      className="bg-[#0a0a0a] p-3 rounded-2xl flex flex-col gap-y-3"
    >
      <span className="text-sm">
        Unlock the Power of {' '}
        <span
          className="bg-gradient-to-r from-[#4C6E91] to-[#6A98D0] font-bold bg-clip-text text-transparent"
        >
          Smart AI
        </span>
      </span>
      <p className="text-[#9B9CA0] font-light text-sm">
        Access all premium features, <br /> including AI capabilities and much more!
      </p>
      {/* <PaymentButton /> */}
    </motion.div>
  );
};

export default UpgradeCard;
