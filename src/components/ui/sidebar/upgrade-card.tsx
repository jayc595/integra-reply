import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '../button';
import { useQueryUser } from '@/hooks/use-user-queries';

type Props = {
  open: boolean;
};

const UpgradeCard = ({ open }: Props) => {
  if (!open) return null;

  const data = useQueryUser()

  const plan = data.data?.data?.subscription?.plan;
  if(plan !== "FREE") return null;

  //@TODO: Consider different data depending on plan. I.e if on Trial display days left on trial.

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
          className="bg-gradient-to-r from-blue-500 to-purple-600 font-bold bg-clip-text text-transparent"
        >
          Smart AI
        </span>
      </span>
      <p className="text-[#9B9CA0] font-light text-sm">
        Access all premium features, <br /> including AI capabilities and much more!
      </p>
      <Button className='bg-gradient-to-br text-white rounded-full from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'>
        Upgrade
      </Button>
    </motion.div>
  );
};

export default UpgradeCard;
