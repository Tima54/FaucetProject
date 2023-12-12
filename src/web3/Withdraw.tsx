import { type FC } from 'react';
import Button from '../components/Button';
import { useEtherFaucetWithdrawEther } from './wagmi.generated';

interface WithdrawProps {}

const Withdraw: FC<WithdrawProps> = () => {
  const { write } = useEtherFaucetWithdrawEther();

  return (
    <div className="flex flex-col w-full mt-8">
        <h2 className="text-2xl font-bold mb-2">Withdraw</h2>
        <Button disabled={!write} onClick={() => write?.()}>
            Empty the contract and recover the ETH (Admin only)
        </Button>
    </div>
  );
};

export default Withdraw;