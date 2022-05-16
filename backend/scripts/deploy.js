async function main() {
    //const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const CreateTokens = await ethers.getContractFactory("CreateTokens");
 
 
    // Start deployment, returning a promise that resolves to a contract object
    // const hello_world = await HelloWorld.deploy("Hello World!");   
    // console.log("Contract deployed to address:", hello_world.address);

    const create_tokens = await CreateTokens.deploy("500");   
    console.log("Contract2 deployed to address:", create_tokens.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });