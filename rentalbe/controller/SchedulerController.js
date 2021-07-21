const express = require('express')
const cron = require("node-cron");


/**
 * Metodo che mi realizza l'import dei veicoli con operazione schedulata
 */
const taskCSV = () => { cron.schedule(process.env.TIME_IMPORT_CAR_CSV, function (){
    readFileCSV.CSV.readCSV();
})};

exports.CRON = {taskCSV}