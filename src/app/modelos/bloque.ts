import { CuentaDto } from "./cuenta";

export interface BloqueDto {
    id?: number,
    nombre?: string,
    cuentas?: CuentaDto[]
}