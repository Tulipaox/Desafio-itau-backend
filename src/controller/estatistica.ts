import { Handler } from "express";
import { EstatisticaService } from "../services/estatisticaService";

export class Estatistica {
    
    getEstatistica: Handler = (req, res) =>{
        const resultadoEstatistica = new EstatisticaService()
        const result = resultadoEstatistica.getAllEstatistica()
    
        res.status(200).json(result)
    }
} 