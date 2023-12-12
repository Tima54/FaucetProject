import { useState, type FC } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useEtherFaucetTransferOwnership } from './wagmi.generated';

interface TransferOwnershipProps {}

const TransferOwnership: FC<TransferOwnershipProps> = () => {
    const [value, setValue] = useState('');
    const { write } = useEtherFaucetTransferOwnership({
        args: [`0x${value}`],
    });

    const valid = () => {
        if (value.startsWith("0x")) {
            setValue(value.substring(2));
        }
        write?.();
    }

    return (
        <div className="flex flex-col w-full mt-8">
            <h2 className="text-2xl font-bold mb-2">Transfer ownership</h2>
            <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="New administrator address..." className="mb-4" />
            <Button disabled={!write || !value} onClick={() => valid()}>
                Validate
            </Button>
        </div>
    );
};

export default TransferOwnership;