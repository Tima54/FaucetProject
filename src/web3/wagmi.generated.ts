import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EtherFaucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export const etherFaucetABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'requestEther',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'withdrawEther',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export const etherFaucetAddress = {
  11155111: '0x1fD597AeDa35AEC390399B28694900158Ae54303',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export const etherFaucetConfig = {
  address: etherFaucetAddress,
  abi: etherFaucetABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link etherFaucetABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function useEtherFaucetRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof etherFaucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof etherFaucetABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof etherFaucetAddress } = {} as any,
) {
  return useContractRead({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    ...config,
  } as UseContractReadConfig<typeof etherFaucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link etherFaucetABI}__ and `functionName` set to `"getOwner"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function useEtherFaucetGetOwner<
  TFunctionName extends 'getOwner',
  TSelectData = ReadContractResult<typeof etherFaucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof etherFaucetABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof etherFaucetAddress } = {} as any,
) {
  return useContractRead({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    functionName: 'getOwner',
    ...config,
  } as UseContractReadConfig<typeof etherFaucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link etherFaucetABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function useEtherFaucetWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof etherFaucetAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof etherFaucetABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof etherFaucetABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof etherFaucetABI, TFunctionName, TMode>({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link etherFaucetABI}__ and `functionName` set to `"requestEther"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function useEtherFaucetRequestEther<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof etherFaucetAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof etherFaucetABI,
          'requestEther'
        >['request']['abi'],
        'requestEther',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'requestEther'
      }
    : UseContractWriteConfig<typeof etherFaucetABI, 'requestEther', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'requestEther'
      } = {} as any,
) {
  return useContractWrite<typeof etherFaucetABI, 'requestEther', TMode>({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    functionName: 'requestEther',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link etherFaucetABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function useEtherFaucetTransferOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof etherFaucetAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof etherFaucetABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferOwnership'
      }
    : UseContractWriteConfig<
        typeof etherFaucetABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof etherFaucetABI, 'transferOwnership', TMode>({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link etherFaucetABI}__ and `functionName` set to `"withdrawEther"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function useEtherFaucetWithdrawEther<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof etherFaucetAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof etherFaucetABI,
          'withdrawEther'
        >['request']['abi'],
        'withdrawEther',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'withdrawEther'
      }
    : UseContractWriteConfig<typeof etherFaucetABI, 'withdrawEther', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'withdrawEther'
      } = {} as any,
) {
  return useContractWrite<typeof etherFaucetABI, 'withdrawEther', TMode>({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    functionName: 'withdrawEther',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link etherFaucetABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function usePrepareEtherFaucetWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof etherFaucetABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof etherFaucetAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    ...config,
  } as UsePrepareContractWriteConfig<typeof etherFaucetABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link etherFaucetABI}__ and `functionName` set to `"requestEther"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function usePrepareEtherFaucetRequestEther(
  config: Omit<
    UsePrepareContractWriteConfig<typeof etherFaucetABI, 'requestEther'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof etherFaucetAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    functionName: 'requestEther',
    ...config,
  } as UsePrepareContractWriteConfig<typeof etherFaucetABI, 'requestEther'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link etherFaucetABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function usePrepareEtherFaucetTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof etherFaucetABI, 'transferOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof etherFaucetAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof etherFaucetABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link etherFaucetABI}__ and `functionName` set to `"withdrawEther"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x1fD597AeDa35AEC390399B28694900158Ae54303)
 */
export function usePrepareEtherFaucetWithdrawEther(
  config: Omit<
    UsePrepareContractWriteConfig<typeof etherFaucetABI, 'withdrawEther'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof etherFaucetAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: etherFaucetABI,
    address: etherFaucetAddress[11155111],
    functionName: 'withdrawEther',
    ...config,
  } as UsePrepareContractWriteConfig<typeof etherFaucetABI, 'withdrawEther'>)
}
