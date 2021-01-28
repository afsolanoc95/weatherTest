const opt={
    direccion:{
        alias:`d`,
        desc: `direccion ciudad`,
        demand:true
    }
}

const argv=require(`yargs`).options(opt).argv;

module.exports={
    argv
}