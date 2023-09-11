const conexion = require('../database/db');

exports.save = (req, res)=>{
    const age = req.body.age;
    const sexo = req.body.sexo;
    const q1 = parseInt(req.body.q1, 10);
    const q2 = parseInt(req.body.q2, 10);
    const q3 = parseInt(req.body.q3, 10);
    const q4 = parseInt(req.body.q4, 10);
    const extroversion = q1 + q2 + q3 + q4;
    
    const q5 = parseInt(req.body.q5, 10);;
    const q6 = parseInt(req.body.q6, 10);
    const q7 = parseInt(req.body.q7, 10);
    const q8 = parseInt(req.body.q8, 10);
    const aperturaExperiencia = q5 + q6 + q7 + q8;

    const q9 = parseInt(req.body.q9, 10);
    const q10 = parseInt(req.body.q10, 10);
    const q11 = parseInt(req.body.q11, 10);
    const q12 = parseInt(req.body.q12, 10);
    const amabilidad = q9 + q10 + q11 + q12;

    const q13 = parseInt(req.body.q13, 10);
    const q14 = parseInt(req.body.q14, 10);
    const q15 = parseInt(req.body.q15, 10);
    const q16 = parseInt(req.body.q16, 10);
    const responsabilidad = q13 + q14 + q15 + q16;

    conexion.query('INSERT INTO Datos SET ?', {
        Edad: age,
        Sexo: sexo,
        Extroversion: extroversion,
        Expresivo: q1,
        Activo: q2,
        Entusiasta: q3,
        Iniciador: q4,
        AperturaExperiencia: aperturaExperiencia,
        Imaginativo: q5,
        Experiencial: q6,
        Abstracto: q7,
        Conceptual: q8,
        Amabilidad: amabilidad,
        Empatico: q9,
        Compasivo: q10,
        Tolerante: q11,
        Complaciente: q12,
        Responsabilidad: responsabilidad,
        Planeador: q13,
        Programado: q14,
        Metodico: q15,
        Sistematico: q16,
    }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log("El registro se ha insertado correctamente.");
            res.redirect('/success'); 
        }
    });
    
}