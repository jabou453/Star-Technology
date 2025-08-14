ServerEvents.recipes(event => {
    const id = global.id;

    // Fusion
    event.remove({type: 'gtceu:fusion_reactor'});

    const Fusion = (type,outputQuant,input1,input1Quant,input2,input2Quant,EUt,DurationSeconds,StartMEU) => {
    event.recipes.gtceu.fusion_reactor(id(`${type}_from_${input1}_and_${input2}`))
        .inputFluids(`gtceu:${input1} ${input1Quant}`, `gtceu:${input2} ${input2Quant}`)
        .outputFluids(`gtceu:${type} ${outputQuant}`)
        .duration(DurationSeconds * 20)
        .fusionStartEU(StartMEU * 1000000)
        .EUt(EUt);
    };

    Fusion('chromium',144,'hydrogen',1000,'vanadium',144,24576,14.4,140);
    Fusion('helium_plasma',1000,'deuterium',1000,'tritium',1000,4096,7.2,40);
    Fusion('europium',144,'neodymium',144,'hydrogen',3000,24576,28.8,150);
    Fusion('osmium',144,'silver',144,'copper',144,24576,28.8,150);
    Fusion('nickel_plasma',144,'potassium',144,'fluorine',1000,30720,7.2,480);
    Fusion('uranium',144,'gold',144,'aluminium',144,24576,57.6,140);
    Fusion('uranium_235',144,'mercury',1000,'magnesium',144,24576,57.6,140);
    Fusion('tritanium',144,'titanium',216,'duranium',288,30720,21.6,200);
    Fusion('naquadria',144,'enriched_naquadah',576,'radon',4000,49152,57.6,400);
    Fusion('nitrogen_plasma',1000,'beryllium',144,'deuterium',3000,16384,7.2,280);
    Fusion('darmstadtium',144,'arsenic',288,'ruthenium',144,30720,14.4,200);
    Fusion('radon',1000,'gold',144,'mercury',100,30720,28.8,200);
    Fusion('indium',576,'silver',576,'lithium',576,24576,7.2,280);
    Fusion('duranium',144,'gallium',144,'radon',1000,16384,28.8,140);
    Fusion('oxygen_plasma',1000,'carbon',144,'helium_3',1000,4096,12.8,180);
    Fusion('iron_plasma',144,'silicon',144,'magnesium',144,7680,10.8,360);
    Fusion('americium',144,'lutetium',144,'chromium',144,49152,14.4,200);
    Fusion('plutonium_241',144,'krypton',1000,'cerium',144,49152,57.6,240);
    Fusion('neutronium',144,'americium',576,'naquadria',576,98304,45,600);
    Fusion('lutetium',144,'lanthanum',144,'silicon',144,7680,7.2,80);
    Fusion('plutonium',144,'xenon',1000,'zinc',144,49152,57.6,120);
    Fusion('argon_plasma',1000,'carbon',144,'magnesium',144,24576,7.2,180);
    Fusion('americium_plas_plasma',144,'plutonium_241',144,'hydrogen',1000,98304,15.6,760);
    Fusion('tin_plas_plasma',144,'silver',144,'helium_3',1500,24576,7.2,280);
    Fusion('aurourium',144,'nether_star_concentrate',288,'seaborgium',288,884736,19.2,888);
    Fusion('paradox_plasma',144,'chaos_centric_void',500,'order_centric_void',500,294912,16.2,900);
    Fusion('magmatic_plasma',144,'infernal_concentrate',500,'iron_plasma',288,66666,19.2,720);
    Fusion('voidic_plasma',144,'echo_r',576,'void',144,344064,27,1040);
    Fusion('preon_plasma',216,'utopian_akreyrium',1000,'dragon_breath',50,688128,19.2,1160);

    // Plasma Turbine
    event.remove({type: 'gtceu:plasma_generator'});

    const PlasmaTurbine = (type,duration,ifGas) => {
        let Quantity = (ifGas == true) ? 5 : 1 ;
        event.recipes.gtceu.plasma_generator(id(`${type}_from_${type}_plasma`))
            .inputFluids(`gtceu:${type}_plasma ${Quantity}`)
            .outputFluids(`gtceu:${type} ${Quantity}`)
            .duration(duration)
            .EUt(-2048);
    };

    const PlasmaTurbineTemp = (type,duration,ifGas) => {
        let Quantity = (ifGas == true) ? 5 : 1 ;
        event.recipes.gtceu.plasma_generator(id(`${type}_from_${type}_plasma`))
            .inputFluids(`gtceu:${type}_plas_plasma ${Quantity}`)
            .outputFluids(`gtceu:${type} ${Quantity}`)
            .duration(duration)
            .EUt(-2048);
    };

    const PlasmaTurbineUnique = (type,output,duration,ifGas) => {
        let Quantity = (ifGas == true) ? 5 : 1 ;
        event.recipes.gtceu.plasma_generator(id(`${output}_from_${type}_plasma`))
            .inputFluids(`gtceu:${type}_plasma ${Quantity}`)
            .outputFluids(`gtceu:${output} ${Quantity}`)
            .duration(duration)
            .EUt(-2048);
    };

    PlasmaTurbine('nickel',192,false); // 144mb / 1.8s, 144recipes, 27648 turbineTicks, 15360 turbineTicks/s (in a UV Fusion Reactor)
    PlasmaTurbine('iron',144,false); // 144mb / 1.8s, 144recipes, 16128 turbineTicks, 8960 turbineTicks/s
    PlasmaTurbine('oxygen',72,true); // 1000mb / 1.6s, 200recipes, 9600 turbineTicks, 6000 turbineTicks/s
    PlasmaTurbine('nitrogen',72,true); // 1000mb / 1.8s, 200recipes, 12800 turbineTicks, 7111 turbineTicks/s
    PlasmaTurbine('argon',96,true); // 1000mb / 1.8s, 200recipes, 19200 turbineTicks, 5333 turbineTicks/s
    PlasmaTurbine('helium',30,true); // 1000mb / .9s, 200recipes, 8000 turbineTicks, 8889 turbineTicks/s
    PlasmaTurbineTemp('americium',540,false); // 144mb / 7.8s, 144recipes, 46080 turbineTicks, 5908 turbineTicks/s
    PlasmaTurbineTemp('tin',128,false); // 144mb / 1.8s, 144recipes, 18432 turbineTicks, 2560 turbineTicks/s
    PlasmaTurbineUnique('magmatic','infernal_concentrate',1440,false); // 144mb / 13.2s (iron plas time added), 144recipes, 57600 turbineTicks, 4364 turbineTicks/s

    // Helium < Nitrogen ~= Oxygen < Argon ~= Tin < Iron =< Nickel < Americium < Magmatic

    //MK1
    // Helium, 5333tts, 5000tts, 4500tt, 23t, 
    //MK2
    // Tin, 2560tts, 8750tts, 15750tt, 110t, 
    // Nitrogen, 7111tts, 6750tts, 12150tt, 60t, 
    // Oxygen, 6000tts, 7250tts, 11600t, 60t, 
    // Argon, 5333tts, 9000tts, 16200tt, 80t, 
    //MK3
    // Iron, 8960tts, 12000tts, 21600tt, 150t, 
    // Nickel, 15360tts, 13000tts, 23400t, 160t, 
    //Aux1
    // Americium, 5908tts, 10000tts, 78000tt, 540t, 
    // Magmatic, 4364tts, 16000tts, 211200tt, 1460t, 

});