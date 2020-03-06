export class ListaDeProdutos {
    
    constructor(
        public cod?:number,
        public desc?: string,
        public regAnvisa?: string,
        public controlado?: boolean,
        public codGrupo?: number
    ) {}
}