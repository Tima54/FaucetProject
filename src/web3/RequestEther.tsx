import { type FC } from 'react';
import Button from '../components/Button';
import { useEtherFaucetRequestEther } from './wagmi.generated';

interface RequestEtherProps {}

const RequestEther: FC<RequestEtherProps> = () => {
  const { write } = useEtherFaucetRequestEther();

  return (
    <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold mb-2">Request Ether</h2>
        <Button disabled={!write} onClick={() => write?.()}>
            Collect ETH
        </Button>
    </div>
  );
};

export default RequestEther;