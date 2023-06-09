import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("Lock", {
    from: deployer,
    gasLimit: 4000000,
    args: [9999999999],
    log: true,
  });
};

func.tags = ["Lock"];
export default func;
