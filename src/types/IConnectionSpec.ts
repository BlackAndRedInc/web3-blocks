export default interface IConnectionSpec {
  type: 'IPC' | 'HTTP' | 'WS' | 'WS_Infura' | 'WS_Alchemy' | 'HTTP_Infura' | 'HTTP_Alchemy' | 'Flashbots';
  envKeyPath?: string;
  envKeyID?: string;
  envKeyKey?: string;
  rpc?: string;
}
