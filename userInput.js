const readline=require('readline').createInterface(
    {
        input:process.stdin,
        output:process.stdout
    });

readline.question('Enter Reg number: \n>>>',(reg)=>
{
    if(reg==54655)
    {
        console.log(`\n>>Name: DilZaib \n>>Reg : ${reg}`)
    }
    else if(reg==54815)
    {
        console.log(`\n>>Name : Hamza \n>>Reg : ${reg}`)
    }
    else{
        console.log('>>Error')
    }
    
})
